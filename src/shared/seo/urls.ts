import { routing, type AppLocale } from "@/i18n/routing";
import { site } from "@/shared/config/site";

export function localePath(locale: AppLocale, pathname: string) {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (locale === routing.defaultLocale) {
    return normalized;
  }

  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function absoluteUrl(locale: AppLocale, pathname: string) {
  const path = localePath(locale, pathname);
  return `${site.url}${path === "/" ? "/" : path}`;
}
