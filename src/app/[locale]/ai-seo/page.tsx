import type { Metadata } from "next";
import { getPageLocale } from "@/shared/i18n/page-locale";
import { getService } from "@/entities/service/content";
import { pageMetadata } from "@/shared/seo/metadata";
import { ServiceView } from "@/widgets/service-view/service-view";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getPageLocale(params);
  const service = getService(locale, "ai-seo");

  return pageMetadata({
    locale,
    pathname: "/ai-seo",
    title: service?.metaTitle ?? "AI SEO",
    description: service?.metaDescription ?? "",
  });
}

export default async function AiSeoPage({ params }: PageProps) {
  const locale = await getPageLocale(params);
  return <ServiceView locale={locale} slug="ai-seo" />;
}
