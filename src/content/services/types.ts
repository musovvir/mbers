export type ServiceSlug = "seo" | "ai-seo";

export type ServiceContent = {
  slug: ServiceSlug;
  pathname: "/seo" | "/ai-seo";
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  cardText: string;
  definitionTitle: string;
  definition: string;
  workTitle: string;
  deliverables: { title: string; text: string }[];
  measureTitle: string;
  measure: string;
  faqIds: string[];
  faqTitle: string;
  ctaTitle: string;
  ctaText: string;
};
