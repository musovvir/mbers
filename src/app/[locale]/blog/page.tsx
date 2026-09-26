import type { Metadata } from "next";
import { getFormatter, getTranslations } from "next-intl/server";
import { getPageLocale } from "@/shared/i18n/page-locale";
import { getArticles } from "@/entities/article/content";
import { getListing } from "@/entities/pages/listings";
import { pageMetadata } from "@/shared/seo/metadata";
import { JsonLd } from "@/shared/seo/json-ld";
import { breadcrumbJsonLd } from "@/shared/seo/schema";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/breadcrumbs";
import { Link } from "@/i18n/navigation";
import layout from "@/shared/styles/layout.module.scss";
import styles from "./blog.module.scss";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getPageLocale(params);
  const page = getListing("blog", locale);
  return pageMetadata({
    locale,
    pathname: "/blog",
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export default async function BlogPage({ params }: PageProps) {
  const locale = await getPageLocale(params);
  const page = getListing("blog", locale);
  const articles = getArticles(locale);
  const format = await getFormatter();
  const [common, a11y, nav] = await Promise.all([
    getTranslations("Common"),
    getTranslations("A11y"),
    getTranslations("Nav"),
  ]);
  const crumbs = [
    { name: common("home"), pathname: "/" },
    { name: nav("blog"), pathname: "/blog" },
  ];

  return (
    <div className={layout.page}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              name: page.title,
              description: page.metaDescription,
              inLanguage: locale,
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
        <h1 className={layout.display}>{page.title}</h1>
        <p className={layout.lead}>{page.lead}</p>
        <div className={styles.list}>
          {articles.map((article) => (
            <article key={article.slug}>
              <p className={styles.meta}>
                <span>{article.service === "ai-seo" ? nav("aiSeo") : nav("seo")}</span>
                <time dateTime={article.publishedAt}>
                  {format.dateTime(new Date(`${article.publishedAt}T00:00:00Z`), {
                    month: "long",
                    year: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
                <span>{common("minutes", { count: article.minutes })}</span>
              </p>
              <h2>
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>
              <p>{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
