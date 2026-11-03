import type { ServiceSlug } from "@/content/services/types";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  minutes: number;
  service: ServiceSlug;
  blocks: ArticleBlock[];
};
