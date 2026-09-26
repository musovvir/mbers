import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPageLocale } from "@/shared/i18n/page-locale";
import { getListing } from "@/entities/pages/listings";
import { ContactForm } from "@/features/contact/contact-form";
import { pageMetadata } from "@/shared/seo/metadata";
import { JsonLd } from "@/shared/seo/json-ld";
import { breadcrumbJsonLd } from "@/shared/seo/schema";
import { site } from "@/shared/config/site";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";
import layout from "@/shared/styles/layout.module.scss";
import styles from "./contact.module.scss";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getPageLocale(params);
  const page = getListing("contact", locale);
  return pageMetadata({
    locale,
    pathname: "/contact",
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export default async function ContactPage({ params }: PageProps) {
  const locale = await getPageLocale(params);
  const page = getListing("contact", locale);
  const [common, a11y] = await Promise.all([
    getTranslations("Common"),
    getTranslations("A11y"),
  ]);
  const crumbs = [
    { name: common("home"), pathname: "/" },
    { name: page.metaTitle, pathname: "/contact" },
  ];

  return (
    <div className={layout.page}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              name: page.title,
              url: site.url,
              mainEntity: { "@id": `${site.url}/#organization` },
            },
            breadcrumbJsonLd(locale, crumbs),
          ],
        }}
      />
      <div className={layout.wrap}>
        <Breadcrumbs
          label={a11y("breadcrumb")}
          items={[{ label: crumbs[0].name, href: "/" }, { label: crumbs[1].name }]}
        />
        <div className={styles.split}>
          <div>
            <h1 className={layout.display}>{page.title}</h1>
            <p className={layout.lead}>{page.lead}</p>
            <ul className={styles.pending}>
              <li>
                <a href={`mailto:${site.contactEmail}`}>{common("pendingEmail")}</a>
              </li>
              <li>{common("pendingPhone")}</li>
              <li>{common("pendingAddress")}</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
