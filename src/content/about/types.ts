export type AboutContent = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  sections: { title: string; text: string }[];
  teamTitle: string;
  team: { name: string; role: string }[];
  factsTitle: string;
  facts: { label: string; value: string }[];
  ctaTitle: string;
  ctaText: string;
};
