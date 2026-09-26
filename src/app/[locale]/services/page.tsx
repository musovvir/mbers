import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPageLocale } from "@/shared/i18n/page-locale";
import { getListing } from "@/entities/pages/listings";
import { getServices } from "@/entities/service/content";
import { pageMetadata } from "@/shared/seo/metadata";
import { JsonLd } from "@/shared/seo/json-ld";
import { breadcrumbJsonLd } from "@/shared/seo/schema";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";
import { Link } from "@/i18n/navigation";
import layout from "@/shared/styles/layout.module.scss";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getPageLocale(params);
  const page = getListing("services", locale);
  return pageMetadata({
    locale,
    pathname: "/services",
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export default async function ServicesPage({ params }: PageProps) {
  const locale = await getPageLocale(params);
  const page = getListing("services", locale);
  const services = getServices(locale);
  const [common, a11y] = await Promise.all([
    getTranslations("Common"),
    getTranslations("A11y"),
  ]);
  const crumbs = [
    { name: common("home"), pathname: "/" },
    { name: page.title, pathname: "/services" },
  ];

  return (
    <div className={layout.page}>
      <JsonLd
        data={{ "@context": "https://schema.org", ...breadcrumbJsonLd(locale, crumbs) }}
      />
      <div className={layout.wrap}>
        <Breadcrumbs
          label={a11y("breadcrumb")}
          items={[
            { label: crumbs[0].name, href: "/" },
            { label: crumbs[1].name },
          ]}
        />
        <h1 className={layout.display}>{page.title}</h1>
        <p className={layout.lead}>{page.lead}</p>
        <div className={`${layout.cards} ${layout.two}`}>
          {services.map((service) => (
            <Link key={service.slug} href={service.pathname} className={layout.card}>
              <p className={layout.kicker}>{service.eyebrow}</p>
              <h2>{service.title}</h2>
              <p>{service.cardText}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
