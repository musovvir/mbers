import type { AppLocale } from "@/i18n/routing";
import type { Listing, ListingKey } from "./types";
import en from "./en";
import ru from "./ru";
import ar from "./ar";

export type { Listing, ListingKey } from "./types";

const listings: Record<AppLocale, Record<ListingKey, Listing>> = { en, ru, ar };

export function getListing(key: ListingKey, locale: AppLocale) {
  return listings[locale][key];
}
