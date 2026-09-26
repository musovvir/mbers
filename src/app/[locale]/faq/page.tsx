import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPageLocale } from "@/shared/i18n/page-locale";
import { getFaqs } from "@/entities/faq/content";
import { getListing } from "@/entities/pages/listings";
import { pageMetadata } from "@/shared/seo/metadata";
import { JsonLd } from "@/shared/seo/json-ld";
import { breadcrumbJsonLd, faqJsonLd } from "@/shared/seo/schema";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";
import { FaqList } from "@/shared/ui/faq-list/faq-list";
import layout from "@/shared/styles/layout.module.scss";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getPageLocale(params);
  const page = getListing("faq", locale);
  return pageMetadata({
    locale,
    pathname: "/faq",
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export default async function FaqPage({ params }: PageProps) {
  const locale = await getPageLocale(params);
  const page = getListing("faq", locale);
  const faqs = getFaqs(locale);
  const [common, a11y] = await Promise.all([
    getTranslations("Common"),
    getTranslations("A11y"),
  ]);
  const crumbs = [
    { name: common("home"), pathname: "/" },
    { name: page.title, pathname: "/faq" },
  ];

  return (
    <div className={layout.page}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [faqJsonLd(faqs), breadcrumbJsonLd(locale, crumbs)],
        }}
      />
      <div className={`${layout.wrap} ${layout.narrow}`}>
        <Breadcrumbs
          label={a11y("breadcrumb")}
          items={[{ label: crumbs[0].name, href: "/" }, { label: crumbs[1].name }]}
        />
        <h1 className={layout.display}>{page.title}</h1>
        <p className={layout.lead}>{page.lead}</p>
        <FaqList items={faqs} label={a11y("faq")} />
      </div>
    </div>
  );
}
