import type { AppLocale } from "@/i18n/routing";
import type { CaseStudy } from "./types";
import en from "./en";
import ru from "./ru";
import ar from "./ar";

export type { CaseStudy } from "./types";

const cases: Record<AppLocale, CaseStudy[]> = { en, ru, ar };

export function getCases(locale: AppLocale) {
  return cases[locale];
}

export function getCaseStudy(locale: AppLocale, slug: string) {
  return cases[locale].find((entry) => entry.slug === slug);
}

export function getCaseSlugs() {
  return cases.en.map((entry) => entry.slug);
}
