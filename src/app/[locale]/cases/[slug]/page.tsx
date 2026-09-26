import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { getPageLocale } from "@/shared/i18n/page-locale";
import { getCaseSlugs, getCaseStudy } from "@/entities/case-study/content";
import { pageMetadata } from "@/shared/seo/metadata";
import { JsonLd } from "@/shared/seo/json-ld";
import { breadcrumbJsonLd } from "@/shared/seo/schema";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";
import { Link } from "@/i18n/navigation";
import layout from "@/shared/styles/layout.module.scss";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getPageLocale(params);
  const item = getCaseStudy(locale, slug);

  if (!item) {
    return {};
  }

  return pageMetadata({
    locale,
    pathname: `/cases/${item.slug}`,
    title: item.title,
    description: item.metaDescription,
  });
}

export default async function CasePage({ params }: PageProps) {
  const { slug } = await params;
  const locale = await getPageLocale(params);
  const item = getCaseStudy(locale, slug);

  if (!item) {
    notFound();
  }

  const [common, a11y, nav] = await Promise.all([
    getTranslations("Common"),
    getTranslations("A11y"),
    getTranslations("Nav"),
  ]);
  const serviceHref = item.service === "ai-seo" ? "/ai-seo" : "/seo";
  const serviceLabel = item.service === "ai-seo" ? nav("aiSeo") : nav("seo");
  const pathname = `/cases/${item.slug}`;
  const crumbs = [
    { name: common("home"), pathname: "/" },
    { name: nav("cases"), pathname: "/cases" },
    { name: item.title, pathname },
  ];

  const sections = [
    { title: common("problem"), text: item.problem },
    { title: common("work"), text: item.work },
    { title: common("result"), text: item.result },
  ];

  return (
    <article className={layout.page}>
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbJsonLd(locale, crumbs) }} />
      <div className={`${layout.wrap} ${layout.narrow}`}>
        <Breadcrumbs
          label={a11y("breadcrumb")}
          items={[
            { label: crumbs[0].name, href: "/" },
            { label: crumbs[1].name, href: "/cases" },
            { label: crumbs[2].name },
          ]}
        />
        <p className={layout.kicker}>
          <Link href={serviceHref}>{serviceLabel}</Link>
          {" · "}
          {item.client}
        </p>
        <h1 className={layout.display}>{item.title}</h1>
        <p className={layout.metric}>{item.metric}</p>
        <p className={layout.muted}>{item.metricLabel}</p>
        <div className={layout.prose}>
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
