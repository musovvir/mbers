import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPageLocale } from "@/shared/i18n/page-locale";
import { getHome } from "@/entities/home/content";
import { getCases } from "@/entities/case-study/content";
import { getFaqs } from "@/entities/faq/content";
import { pageMetadata } from "@/shared/seo/metadata";
import { JsonLd } from "@/shared/seo/json-ld";
import { faqJsonLd } from "@/shared/seo/schema";
import { Button } from "@/shared/ui/button/button";
import { FaqList } from "@/shared/ui/faq-list/faq-list";
import { HeroGlobe } from "@/features/hero-globe/hero-globe";
import { ContactForm } from "@/features/contact/contact-form";
import { Link } from "@/i18n/navigation";
import layout from "@/shared/styles/layout.module.scss";
import styles from "./home.module.scss";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getPageLocale(params);
  const home = getHome(locale);

  return pageMetadata({
    locale,
    pathname: "/",
    title: home.metaTitle,
    description: home.metaDescription,
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: PageProps) {
  const locale = await getPageLocale(params);
  const home = getHome(locale);
  const cases = getCases(locale);
  const faqs = getFaqs(locale, home.faqIds);
  const [nav, common, a11y] = await Promise.all([
    getTranslations("Nav"),
    getTranslations("Common"),
    getTranslations("A11y"),
  ]);

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...faqJsonLd(faqs) }} />
      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.place}>{home.place}</p>
          <h1 className={layout.display}>{home.title}</h1>
          <p className={layout.lead}>{home.lead}</p>
          <div className={styles.actions}>
            <Button href="/contact">{nav("discuss")}</Button>
          </div>
        </div>
        <HeroGlobe markerLabel={home.globeMark} caption={home.globeDubai} />
      </section>

      <section className={layout.section}>
        <div className={layout.sectionInner}>
          <p className={layout.kicker}>{home.approachEyebrow}</p>
          <h2 className={layout.title}>{home.approachTitle}</h2>
          <p className={layout.muted}>{home.approachText}</p>
          <div className={`${layout.steps} ${layout.three}`}>
            {home.steps.map((step, index) => (
              <article key={step.title} className={layout.step}>
                <p className={layout.index}>0{index + 1}</p>
                <h3>{step.title}</h3>
                <p className={layout.muted}>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={layout.section}>
        <div className={layout.sectionInner}>
          <h2 className={layout.title}>{home.proofTitle}</h2>
          <div className={`${layout.cards} ${layout.two}`}>
            {cases.map((item) => (
              <Link key={item.slug} href={`/cases/${item.slug}`} className={`${layout.card} ${layout.result}`}>
                <p className={layout.metric}>{item.metric}</p>
                <p className={layout.metricLabel}>{item.metricLabel}</p>
                <h3>{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={layout.section}>
        <div className={layout.sectionInner}>
          <p className={layout.kicker}>{home.servicesEyebrow}</p>
          <div className={styles.headingRow}>
            <h2 className={layout.title}>{home.servicesTitle}</h2>
            <Button href="/services" variant="text">
              {common("allServices")}
            </Button>
          </div>
          <div className={`${layout.cards} ${layout.two}`}>
            {home.services.map((service) => (
              <Link key={service.href} href={service.href} className={layout.card}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${layout.section} ${layout.band}`}>
        <div className={layout.sectionInner}>
          <h2 className={layout.title}>{home.aiTitle}</h2>
          <p className={layout.muted}>{home.aiText}</p>
          <div className={`${layout.cards} ${layout.three}`}>
            {home.aiPoints.map((point) => (
              <article key={point.title} className={layout.card}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.actions}>
            <Button href="/ai-seo">{home.aiLink}</Button>
          </div>
        </div>
      </section>

      <section className={layout.section}>
        <div className={layout.sectionInner}>
          <p className={layout.kicker}>{home.processEyebrow}</p>
          <h2 className={layout.title}>{home.processTitle}</h2>
          <ol className={styles.stages}>
            {home.stages.map((stage, index) => (
              <li key={stage.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={layout.section}>
        <div className={`${layout.sectionInner} ${layout.narrow}`}>
          <p className={layout.kicker}>{home.faqEyebrow}</p>
          <div className={styles.headingRow}>
            <h2 className={layout.title}>{home.faqTitle}</h2>
            <Button href="/faq" variant="text">
              {common("learnMore")}
            </Button>
          </div>
          <FaqList items={faqs} label={a11y("faq")} />
        </div>
      </section>

      <section className={layout.section}>
        <div className={layout.sectionInner}>
          <h2 className={layout.title}>{home.leadTitle}</h2>
          <p className={layout.muted}>{home.leadText}</p>
          <div className={styles.form}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
