import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getArticleSlugs } from "@/entities/article/content";
import { getCaseSlugs } from "@/entities/case-study/content";
import { absoluteUrl } from "@/shared/seo/urls";

const staticPaths = [
  "/",
  "/services",
  "/seo",
  "/ai-seo",
  "/about",
  "/blog",
  "/cases",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms-of-use",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...getArticleSlugs().map((slug) => `/blog/${slug}`),
    ...getCaseSlugs().map((slug) => `/cases/${slug}`),
  ];

  return paths.map((pathname) => ({
    url: absoluteUrl(routing.defaultLocale, pathname),
    lastModified: new Date("2026-09-23"),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, absoluteUrl(locale, pathname)]),
      ),
    },
  }));
}
