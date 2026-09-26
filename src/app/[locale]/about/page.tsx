import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPageLocale } from "@/shared/i18n/page-locale";
import { getAbout } from "@/entities/about/content";
import { pageMetadata } from "@/shared/seo/metadata";
import { JsonLd } from "@/shared/seo/json-ld";
import { breadcrumbJsonLd } from "@/shared/seo/schema";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";
import { Button } from "@/shared/ui/button/button";
import layout from "@/shared/styles/layout.module.scss";
import styles from "./about.module.scss";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getPageLocale(params);
  const page = getAbout(locale);
  return pageMetadata({
    locale,
    pathname: "/about",
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export default async function AboutPage({ params }: PageProps) {
  const locale = await getPageLocale(params);
  const page = getAbout(locale);
  const [common, a11y, nav] = await Promise.all([
    getTranslations("Common"),
    getTranslations("A11y"),
    getTranslations("Nav"),
  ]);
  const crumbs = [
    { name: common("home"), pathname: "/" },
    { name: page.metaTitle, pathname: "/about" },
  ];

  return (
    <div className={layout.page}>
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbJsonLd(locale, crumbs) }} />
      <div className={layout.wrap}>
        <Breadcrumbs
          label={a11y("breadcrumb")}
          items={[{ label: crumbs[0].name, href: "/" }, { label: crumbs[1].name }]}
        />
        <h1 className={layout.display}>{page.title}</h1>
        <p className={layout.lead}>{page.lead}</p>
        <div className={layout.prose}>
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
        <h2 className={styles.blockTitle}>{page.teamTitle}</h2>
        <ul className={styles.team}>
          {page.team.map((person) => (
            <li key={person.name}>
              <strong>{person.name}</strong>
              <span>{person.role}</span>
            </li>
          ))}
        </ul>
        <h2 className={styles.blockTitle}>{page.factsTitle}</h2>
        <dl className={styles.facts}>
          {page.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <h2 className={styles.blockTitle}>{page.ctaTitle}</h2>
        <p className={layout.muted}>{page.ctaText}</p>
        <div className={styles.cta}>
          <Button href="/contact">{nav("discuss")}</Button>
        </div>
      </div>
    </div>
  );
}
