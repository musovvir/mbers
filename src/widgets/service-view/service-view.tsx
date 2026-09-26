import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getFaqs } from "@/entities/faq/content";
import { getArticles } from "@/entities/article/content";
import { getService, type ServiceSlug } from "@/entities/service/content";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/shared/seo/json-ld";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/shared/seo/schema";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";
import { Button } from "@/shared/ui/button/button";
import { FaqList } from "@/shared/ui/faq-list/faq-list";
import { ContactForm } from "@/features/contact/contact-form";
import layout from "@/shared/styles/layout.module.scss";

type ServiceViewProps = {
  locale: AppLocale;
  slug: ServiceSlug;
};

export async function ServiceView({ locale, slug }: ServiceViewProps) {
  const service = getService(locale, slug);

  if (!service) {
    notFound();
  }

  const [common, a11y, nav] = await Promise.all([
    getTranslations("Common"),
    getTranslations("A11y"),
    getTranslations("Nav"),
  ]);
  const faqs = getFaqs(locale, service.faqIds);
  const related = getArticles(locale)
    .filter((article) => article.service === service.slug)
    .slice(0, 3);

  const crumbs = [
    { name: common("home"), pathname: "/" },
    { name: nav("services"), pathname: "/services" },
    { name: service.title, pathname: service.pathname },
  ];

  return (
    <article className={layout.page}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            serviceJsonLd({
              locale,
              pathname: service.pathname,
              name: service.title,
              description: service.metaDescription,
            }),
            faqJsonLd(faqs),
            breadcrumbJsonLd(locale, crumbs),
          ],
        }}
      />
      <div className={layout.wrap}>
        <Breadcrumbs
          label={a11y("breadcrumb")}
          items={crumbs.map((crumb, index) => ({
            label: crumb.name,
            href: index === crumbs.length - 1 ? undefined : crumb.pathname,
          }))}
        />
        <p className={layout.kicker}>{service.eyebrow}</p>
        <h1 className={layout.display}>{service.title}</h1>
        <p className={layout.lead}>{service.lead}</p>
        <div className={layout.prose}>
          <h2>{service.definitionTitle}</h2>
          <p>{service.definition}</p>
        </div>
      </div>
      <section className={layout.section}>
        <div className={layout.sectionInner}>
          <h2 className={layout.title}>{service.workTitle}</h2>
          <div className={`${layout.cards} ${layout.two}`}>
            {service.deliverables.map((item) => (
              <article key={item.title} className={layout.card}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={layout.section}>
        <div className={`${layout.sectionInner} ${layout.narrow}`}>
          <h2 className={layout.title}>{service.measureTitle}</h2>
          <p className={layout.muted}>{service.measure}</p>
        </div>
      </section>
      {related.length > 0 ? (
        <section className={layout.section}>
          <div className={layout.sectionInner}>
            <h2 className={layout.title}>{common("related")}</h2>
            <div className={layout.cards}>
              {related.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className={layout.card}>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <section className={layout.section}>
        <div className={`${layout.sectionInner} ${layout.narrow}`}>
          <h2 className={layout.title}>{service.faqTitle}</h2>
          <FaqList items={faqs} label={a11y("faq")} />
        </div>
      </section>
      <section className={`${layout.section} ${layout.band}`}>
        <div className={layout.sectionInner}>
          <h2 className={layout.title}>{service.ctaTitle}</h2>
          <p className={layout.muted}>{service.ctaText}</p>
          <div style={{ marginTop: 28 }}>
            <ContactForm />
          </div>
        </div>
      </section>
      <div className={layout.wrap} style={{ paddingTop: 28 }}>
        <Button href="/services" variant="text">
          {common("allServices")}
        </Button>
      </div>
    </article>
  );
}
