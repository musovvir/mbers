import type { AppLocale } from "@/i18n/routing";
import type { FaqItem } from "./types";
import en from "./en";
import ru from "./ru";
import ar from "./ar";

export type { FaqItem } from "./types";

const faqs: Record<AppLocale, FaqItem[]> = { en, ru, ar };

export function getFaqs(locale: AppLocale, ids?: string[]) {
  const items = faqs[locale];
  if (!ids) return items;
  return ids.flatMap((id) => {
    const item = items.find((entry) => entry.id === id);
    return item ? [item] : [];
  });
}
