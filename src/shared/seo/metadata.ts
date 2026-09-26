import type { Metadata } from "next";
import { routing, type AppLocale } from "@/i18n/routing";
import { site } from "@/shared/config/site";
import { absoluteUrl } from "@/shared/seo/urls";

const openGraphLocale: Record<AppLocale, string> = {
  en: "en_US",
  ru: "ru_RU",
  ar: "ar_AR",
};

type PageMetadataOptions = {
  locale: AppLocale;
  pathname: string;
  title: string;
  description: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
};

export function pageMetadata({
  locale,
  pathname,
  title,
  description,
  absoluteTitle = false,
  type = "website",
  publishedTime,
}: PageMetadataOptions): Metadata {
  const languages: Record<string, string> = {};

  for (const item of routing.locales) {
    languages[item] = absoluteUrl(item, pathname);
  }

  languages["x-default"] = absoluteUrl(routing.defaultLocale, pathname);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: absoluteUrl(locale, pathname),
      languages,
    },
    openGraph: {
      type,
      title,
      description,
      url: absoluteUrl(locale, pathname),
      siteName: site.name,
      locale: openGraphLocale[locale],
      alternateLocale: routing.locales
        .filter((item) => item !== locale)
        .map((item) => openGraphLocale[item]),
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
