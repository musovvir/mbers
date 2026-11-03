// TODO(real-data): confirm production origin once the final domain is locked.
const fallbackUrl = "https://mberslab.com";

function resolveSiteUrl(value: string | undefined) {
  const trimmed = value?.trim() ?? "";
  if (!trimmed) return fallbackUrl;

  try {
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") return fallbackUrl;
    return url.href.replace(/\/+$/, "");
  } catch {
    return fallbackUrl;
  }
}

export const site = {
  name: "MBers Laboratory",
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  // TODO(real-data): replace with the real company inbox; keep ui/*.json + legal copy in sync.
  contactEmail: "hello@example.com",
} as const;
