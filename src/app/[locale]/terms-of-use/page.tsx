import { LegalDocument, legalMetadata } from "@/widgets/legal-document/legal-document";

type PageProps = { params: Promise<{ locale: string }> };

export const generateMetadata = legalMetadata("terms-of-use");

export default function TermsPage({ params }: PageProps) {
  return <LegalDocument params={params} slug="terms-of-use" />;
}
