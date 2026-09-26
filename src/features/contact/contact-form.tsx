"use client";

import { useActionState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/shared/ui/button/button";
import { submitLead, type LeadState } from "@/features/contact/submit-lead";
import type { LeadField, LeadFieldError } from "@/shared/lib/lead";
import styles from "./contact-form.module.scss";

const initialState: LeadState = { status: "idle" };

function fieldError(
  t: ReturnType<typeof useTranslations<"Form">>,
  field: LeadField,
  code: LeadFieldError | undefined,
) {
  if (field === "name" && code === "required") return t("nameRequired");
  if (field === "name" && code === "long") return t("nameLong");
  if (field === "email" && code === "required") return t("emailRequired");
  if (field === "email" && code === "email") return t("emailInvalid");
  if (field === "phone" && code === "long") return t("phoneLong");
  if (field === "message" && code === "short") return t("messageShort");
  if (field === "message" && code === "long") return t("messageLong");
  return undefined;
}

export function ContactForm() {
  const t = useTranslations("Form");
  const locale = useLocale();
  const [state, action, pending] = useActionState(submitLead, initialState);

  return (
    <form className={styles.form} action={action} noValidate>
      <input type="hidden" name="locale" value={locale} />
      <div className={styles.honeypot} aria-hidden="true">
        <label>
          {t("honeypot")}
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field
        name="name"
        label={t("name")}
        autoComplete="name"
        error={fieldError(t, "name", state.fieldErrors?.name)}
      />
      <Field
        name="email"
        type="email"
        label={t("email")}
        autoComplete="email"
        error={fieldError(t, "email", state.fieldErrors?.email)}
      />
      <Field
        name="phone"
        type="tel"
        label={t("phone")}
        hint={t("phoneOptional")}
        autoComplete="tel"
        error={fieldError(t, "phone", state.fieldErrors?.phone)}
      />
      <label className={styles.field}>
        <span>{t("message")}</span>
        <textarea name="message" rows={5} required />
        {fieldError(t, "message", state.fieldErrors?.message) ? (
          <small>{fieldError(t, "message", state.fieldErrors?.message)}</small>
        ) : null}
      </label>

      <Button type="submit" disabled={pending}>
        {pending ? t("sending") : t("submit")}
      </Button>

      <p className={styles.status} role="status">
        {state.status === "success" ? t("success") : null}
        {state.message === "validation" ? t("errorValidation") : null}
        {state.message === "delivery" ? t("errorDelivery") : null}
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  hint,
  autoComplete,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  hint?: string;
  autoComplete: string;
  error?: string;
}) {
  return (
    <label className={styles.field}>
      <span>
        {label}
        {hint ? <em>{hint}</em> : null}
      </span>
      <input name={name} type={type} autoComplete={autoComplete} aria-invalid={Boolean(error)} />
      {error ? <small>{error}</small> : null}
    </label>
  );
}
