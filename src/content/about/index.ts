import type { AppLocale } from "@/i18n/routing";
import type { AboutContent } from "./types";
import en from "./en";
import ru from "./ru";
import ar from "./ar";

export type { AboutContent } from "./types";

const about: Record<AppLocale, AboutContent> = { en, ru, ar };

export function getAbout(locale: AppLocale) {
  return about[locale];
}
