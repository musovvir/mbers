import type { ServiceSlug } from "@/content/services/types";

export type CaseStudy = {
  slug: string;
  service: ServiceSlug;
  client: string;
  title: string;
  excerpt: string;
  metric: string;
  metricLabel: string;
  problem: string;
  work: string;
  result: string;
  metaDescription: string;
};
