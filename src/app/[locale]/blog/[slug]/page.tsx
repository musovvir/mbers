import type { Metadata } from "next";
import { getFormatter, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { getPageLocale } from "@/shared/i18n/page-locale";
import { getArticle, getArticles, getArticleSlugs } from "@/entities/article/content";
import { pageMetadata } from "@/shared/seo/metadata";
import { JsonLd } from "@/shared/seo/json-ld";
import { absoluteUrl } from "@/shared/seo/urls";
import { breadcrumbJsonLd, organizationId } from "@/shared/seo/schema";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";
import { Link } from "@/i18n/navigation";
import layout from "@/shared/styles/layout.module.scss";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getPageLocale(params);
  const article = getArticle(locale, slug);

  if (!article) {
    return {};
  }

  return pageMetadata({
    locale,
    pathname: `/blog/${article.slug}`,
    title: article.title,
    description: article.description,
    type: "article",
    publishedTime: article.publishedAt,
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const locale = await getPageLocale(params);
  const article = getArticle(locale, slug);

  if (!article) {
    notFound();
  }

  const format = await getFormatter();
  const [common, a11y, nav] = await Promise.all([
    getTranslations("Common"),
    getTranslations("A11y"),
    getTranslations("Nav"),
  ]);
  const serviceHref = article.service === "ai-seo" ? "/ai-seo" : "/seo";
  const serviceLabel = article.service === "ai-seo" ? nav("aiSeo") : nav("seo");
  const related = getArticles(locale)
    .filter((item) => item.service === article.service && item.slug !== article.slug)
    .slice(0, 2);
  const pathname = `/blog/${article.slug}`;
  const crumbs = [
    { name: common("home"), pathname: "/" },
    { name: nav("blog"), pathname: "/blog" },
    { name: article.title, pathname },
  ];

  return (
    <article className={layout.page}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: article.title,
              description: article.description,
              datePublished: article.publishedAt,
              inLanguage: locale,
              mainEntityOfPage: absoluteUrl(locale, pathname),
              author: { "@id": organizationId() },
              publisher: { "@id": organizationId() },
            },
            breadcrumbJsonLd(locale, crumbs),
          ],
        }}
      />
      <div className={`${layout.wrap} ${layout.narrow}`}>
        <Breadcrumbs
          label={a11y("breadcrumb")}
          items={[
            { label: crumbs[0].name, href: "/" },
            { label: crumbs[1].name, href: "/blog" },
            { label: crumbs[2].name },
          ]}
        />
        <p className={layout.kicker}>
          <Link href={serviceHref}>{serviceLabel}</Link>
          {" · "}
          <time dateTime={article.publishedAt}>
            {format.dateTime(new Date(`${article.publishedAt}T00:00:00Z`), {
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
          {" · "}
          {common("minutes", { count: article.minutes })}
        </p>
        <h1 className={layout.display}>{article.title}</h1>
        <div className={layout.prose}>
          {article.blocks.map((block, index) => {
            if (block.type === "h2") {
              return <h2 key={index}>{block.text}</h2>;
            }
            if (block.type === "ul") {
              return (
                <ul key={index}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={index}>{block.text}</p>;
          })}
        </div>
      </div>
      {related.length > 0 ? (
        <section className={layout.section}>
          <div className={layout.sectionInner}>
            <h2 className={layout.title}>{common("related")}</h2>
            <div className={layout.cards}>
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className={layout.card}>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
