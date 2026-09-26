import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPageLocale } from "@/shared/i18n/page-locale";
import { getCases } from "@/entities/case-study/content";
import { getListing } from "@/entities/pages/listings";
import { pageMetadata } from "@/shared/seo/metadata";
import { JsonLd } from "@/shared/seo/json-ld";
import { breadcrumbJsonLd } from "@/shared/seo/schema";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";
import { Link } from "@/i18n/navigation";
import layout from "@/shared/styles/layout.module.scss";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getPageLocale(params);
  const page = getListing("cases", locale);
  return pageMetadata({
    locale,
    pathname: "/cases",
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export default async function CasesPage({ params }: PageProps) {
  const locale = await getPageLocale(params);
  const page = getListing("cases", locale);
  const cases = getCases(locale);
  const [common, a11y, nav] = await Promise.all([
    getTranslations("Common"),
    getTranslations("A11y"),
    getTranslations("Nav"),
  ]);
  const crumbs = [
    { name: common("home"), pathname: "/" },
    { name: nav("cases"), pathname: "/cases" },
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
        <div className={`${layout.cards} ${layout.two}`}>
          {cases.map((item) => (
            <Link key={item.slug} href={`/cases/${item.slug}`} className={layout.card}>
              <p className={layout.kicker}>
                {item.service === "ai-seo" ? nav("aiSeo") : nav("seo")}
              </p>
              <p className={layout.metric}>{item.metric}</p>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
