const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mberslab.com";

export const site = {
  name: "MBers Laboratory",
  url: configuredUrl.replace(/\/+$/, ""),
  contactEmail: "hello@example.com",
} as const;
