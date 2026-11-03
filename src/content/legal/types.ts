export type LegalSlug = "privacy-policy" | "terms-of-use";

export type LegalPage = {
  slug: LegalSlug;
  metaTitle: string;
  metaDescription: string;
  title: string;
  sections: { title: string; paragraphs: string[] }[];
};
