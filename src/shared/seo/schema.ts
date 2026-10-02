import { site } from "@/shared/config/site";
import type { AppLocale } from "@/i18n/routing";
import { absoluteUrl } from "@/shared/seo/urls";

export function organizationId() {
  return `${site.url}/#organization`;
}

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": organizationId(),
    name: site.name,
    url: site.url,
    email: site.contactEmail,
    logo: `${site.url}/brand/logo-dark.png`,
    description:
      "Digital consulting for SEO and AI SEO, based in Dubai and working worldwide. We find the business problem, choose the search work that answers it, and carry it through.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: "Worldwide",
    knowsLanguage: ["en", "ru", "ar"],
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: ["en", "ru", "ar"],
    publisher: { "@id": organizationId() },
  };
}

export function breadcrumbJsonLd(
  locale: AppLocale,
  items: { name: string; pathname: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(locale, item.pathname),
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd(options: {
  locale: AppLocale;
  pathname: string;
  name: string;
  description: string;
}) {
  return {
    "@type": "Service",
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.locale, options.pathname),
    provider: { "@id": organizationId() },
    areaServed: "Worldwide",
    serviceType: options.name,
  };
}
