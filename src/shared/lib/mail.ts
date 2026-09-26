import "server-only";
import nodemailer from "nodemailer";
import type { LeadInput } from "@/shared/lib/lead";

export async function sendLeadEmail(lead: LeadInput) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!host || !user || !pass || !to) {
    return { ok: false as const, reason: "unconfigured" as const };
  }

  const port = Number(process.env.SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || user,
    to,
    replyTo: lead.email,
    subject: `Enquiry from ${lead.name}`,
    text: [
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Phone: ${lead.phone || "—"}`,
      `Locale: ${lead.locale}`,
      "",
      lead.message,
    ].join("\n"),
  });

  return { ok: true as const };
}
