export type LeadInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
  locale: string;
};

export type LeadField = "name" | "email" | "phone" | "message";
export type LeadFieldError = "required" | "email" | "short" | "long";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function readLead(formData: FormData): {
  lead: LeadInput;
  honeypot: string;
} {
  return {
    honeypot: String(formData.get("company_website") ?? ""),
    lead: {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      locale: String(formData.get("locale") ?? "en").trim(),
    },
  };
}

export function validateLead(lead: LeadInput) {
  const fieldErrors: Partial<Record<LeadField, LeadFieldError>> = {};

  if (lead.name.length < 2) {
    fieldErrors.name = "required";
  } else if (lead.name.length > 80) {
    fieldErrors.name = "long";
  }

  if (!lead.email) {
    fieldErrors.email = "required";
  } else if (!emailPattern.test(lead.email) || lead.email.length > 120) {
    fieldErrors.email = "email";
  }

  if (lead.message.length < 10) {
    fieldErrors.message = "short";
  } else if (lead.message.length > 4000) {
    fieldErrors.message = "long";
  }

  if (lead.phone.length > 40) {
    fieldErrors.phone = "long";
  }

  return fieldErrors;
}
