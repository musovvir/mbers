import { LegalDocument, legalMetadata } from "@/widgets/legal-document/legal-document";

type PageProps = { params: Promise<{ locale: string }> };

export const generateMetadata = legalMetadata("privacy-policy");

export default function PrivacyPage({ params }: PageProps) {
  return <LegalDocument params={params} slug="privacy-policy" />;
}
