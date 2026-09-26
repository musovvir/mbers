import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { getPageLocale } from "@/shared/i18n/page-locale";
import { getLegalPage, type LegalSlug } from "@/entities/legal/content";
import { pageMetadata } from "@/shared/seo/metadata";
import { JsonLd } from "@/shared/seo/json-ld";
import { breadcrumbJsonLd } from "@/shared/seo/schema";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";
import layout from "@/shared/styles/layout.module.scss";

type PageProps = { params: Promise<{ locale: string }> };

export function legalMetadata(slug: LegalSlug) {
  return async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = await getPageLocale(params);
    const page = getLegalPage(locale, slug);

    return pageMetadata({
      locale,
      pathname: `/${slug}`,
      title: page?.metaTitle ?? slug,
      description: page?.metaDescription ?? "",
    });
  };
}

export async function LegalDocument({
  params,
  slug,
}: {
  params: Promise<{ locale: string }>;
  slug: LegalSlug;
}) {
  const locale = await getPageLocale(params);
  const page = getLegalPage(locale, slug);

  if (!page) {
    notFound();
  }

  const [common, a11y] = await Promise.all([
    getTranslations("Common"),
    getTranslations("A11y"),
  ]);
  const crumbs = [
    { name: common("home"), pathname: "/" },
    { name: page.title, pathname: `/${slug}` },
  ];

  return (
    <article className={layout.page}>
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbJsonLd(locale, crumbs) }} />
      <div className={`${layout.wrap} ${layout.narrow}`}>
        <Breadcrumbs
          label={a11y("breadcrumb")}
          items={[{ label: crumbs[0].name, href: "/" }, { label: crumbs[1].name }]}
        />
        <h1 className={layout.display}>{page.title}</h1>
        <div className={layout.prose}>
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
