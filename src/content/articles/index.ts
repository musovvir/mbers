import type { AppLocale } from "@/i18n/routing";
import type { Article } from "./types";
import en from "./en";
import ru from "./ru";
import ar from "./ar";

export type { Article, ArticleBlock } from "./types";

const articles: Record<AppLocale, Article[]> = { en, ru, ar };

export function getArticles(locale: AppLocale) {
  return articles[locale];
}

export function getArticle(locale: AppLocale, slug: string) {
  return articles[locale].find((article) => article.slug === slug);
}

export function getArticleSlugs() {
  return articles.en.map((article) => article.slug);
}
