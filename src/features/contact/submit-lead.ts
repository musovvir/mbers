"use server";

import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { readLead, validateLead, type LeadField, type LeadFieldError } from "@/shared/lib/lead";
import { sendLeadEmail } from "@/shared/lib/mail";

export type LeadState = {
  status: "idle" | "success" | "error";
  message?: "validation" | "delivery";
  fieldErrors?: Partial<Record<LeadField, LeadFieldError>>;
};

export async function submitLead(
  _previous: LeadState,
  formData: FormData,
): Promise<LeadState> {
  const { lead, honeypot } = readLead(formData);

  if (honeypot) {
    return { status: "success" };
  }

  const fieldErrors = validateLead(lead);

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "validation", fieldErrors };
  }

  const locale = hasLocale(routing.locales, lead.locale) ? lead.locale : routing.defaultLocale;

  try {
    const result = await sendLeadEmail({ ...lead, locale });

    if (!result.ok) {
      return { status: "error", message: "delivery" };
    }
  } catch {
    return { status: "error", message: "delivery" };
  }

  return { status: "success" };
}
