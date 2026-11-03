import type { AppLocale } from "@/i18n/routing";
import type { HomeContent } from "./types";
import en from "./en";
import ru from "./ru";
import ar from "./ar";

export type { HomeContent } from "./types";

const home: Record<AppLocale, HomeContent> = { en, ru, ar };

export function getHome(locale: AppLocale) {
  return home[locale];
}
