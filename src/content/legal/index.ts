import type { AppLocale } from "@/i18n/routing";
import type { LegalPage, LegalSlug } from "./types";
import en from "./en";
import ru from "./ru";
import ar from "./ar";

export type { LegalPage, LegalSlug } from "./types";

const legal: Record<AppLocale, LegalPage[]> = { en, ru, ar };

export function getLegalPage(locale: AppLocale, slug: LegalSlug) {
  return legal[locale].find((page) => page.slug === slug);
}
