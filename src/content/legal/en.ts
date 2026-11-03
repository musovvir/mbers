import type { LegalPage } from "./types";

// TODO(real-data): replace hello@example.com and "legal entity is not registered yet" after registration (sync ru/ar).
const legal: LegalPage[] = [
  {
    "slug": "privacy-policy",
    "metaTitle": "Privacy Policy",
    "metaDescription": "What the enquiry form collects, why, and how to reach MBers Laboratory about it.",
    "title": "Privacy Policy",
    "sections": [
      {
        "title": "Who this covers",
        "paragraphs": [
          "This page describes how MBers Laboratory handles the details you send through the enquiry form. The legal entity is not registered yet, so this text is the working policy until that registration is in place.",
          "The contact address for privacy questions is hello@example.com."
        ]
      },
      {
        "title": "What the form collects",
        "paragraphs": [
          "The form asks for your name, email, an optional phone number, and a description of the problem. It also stores the language of the page you sent it from, so the reply can come back in that language.",
          "A hidden field exists to catch automated submissions. If it is filled in, the message is discarded."
        ]
      },
      {
        "title": "Why it is collected",
        "paragraphs": [
          "We use these details to reply to the enquiry and to decide whether the work is SEO, AI SEO, or both. We do not sell the details, and we do not use them for a mailing list.",
          "The message is delivered by email to the company inbox. Keep a copy of what you sent if you need a record."
        ]
      },
      {
        "title": "How long, and how to object",
        "paragraphs": [
          "Enquiry mail is kept for as long as the conversation, and any later engagement, requires. You can ask for the message to be deleted by writing to hello@example.com."
        ]
      }
    ]
  },
  {
    "slug": "terms-of-use",
    "metaTitle": "Terms of Use",
    "metaDescription": "The terms for using the MBers Laboratory site and for sending an enquiry.",
    "title": "Terms of Use",
    "sections": [
      {
        "title": "The site",
        "paragraphs": [
          "This site describes the SEO and AI SEO work of MBers Laboratory. Reading it does not create an engagement. An engagement starts only when the scope, the sequence and the cost are written down and agreed."
        ]
      },
      {
        "title": "No promise of a ranking",
        "paragraphs": [
          "Nothing on this site is a promise that a page will rank, or that an assistant will cite a brand. Search systems and models change. What we commit to is the work described in the document for that engagement, and the way the result will be measured."
        ]
      },
      {
        "title": "Enquiries",
        "paragraphs": [
          "Sending the form is a request for a reply, not a contract. Do not include passwords, payment details or other people's personal data in the message."
        ]
      },
      {
        "title": "The text on this site",
        "paragraphs": [
          "The writing, the structure and the visual system of this site belong to MBers Laboratory. You may quote a short passage with a link to the page. You may not republish a page as your own."
        ]
      }
    ]
  }
];

export default legal;
