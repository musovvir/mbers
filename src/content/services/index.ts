import type { AppLocale } from "@/i18n/routing";
import type { ServiceContent } from "./types";
import en from "./en";
import ru from "./ru";
import ar from "./ar";

export type { ServiceContent, ServiceSlug } from "./types";

const services: Record<AppLocale, ServiceContent[]> = { en, ru, ar };

export function getServices(locale: AppLocale) {
  return services[locale];
}

export function getService(locale: AppLocale, slug: string) {
  return services[locale].find((service) => service.slug === slug);
}
