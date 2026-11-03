import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { site } from "@/shared/config/site";
import { JsonLd } from "@/shared/seo/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/shared/seo/schema";
import { ThemeInitScript } from "@/features/theme/theme-init-script";
import { ThemeSync } from "@/features/theme/theme-sync";
import { SiteFooter } from "@/widgets/site-footer/site-footer";
import { SiteHeader } from "@/widgets/site-header/site-header";
import "@/shared/styles/globals.scss";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}`,
    template: `%s | ${site.name}`,
  },
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  formatDetection: { telephone: false, email: false, address: false },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const [messages, nav] = await Promise.all([getMessages(), getTranslations("Nav")]);

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${inter.variable} ${arabic.variable}`}
      data-theme="light"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <ThemeInitScript />
      </head>
      <body>
        <ThemeSync />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [organizationJsonLd(), websiteJsonLd()],
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <SiteHeader
            servicesLabel={nav("services")}
            discussLabel={nav("discuss")}
            serviceLinks={[
              { href: "/seo", label: nav("seo") },
              { href: "/ai-seo", label: nav("aiSeo") },
            ]}
            links={[
              { href: "/about", label: nav("about") },
              { href: "/blog", label: nav("blog") },
              { href: "/cases", label: nav("cases") },
              { href: "/contact", label: nav("contacts") },
            ]}
          />
          <main id="main">{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
