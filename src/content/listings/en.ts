import type { Listing, ListingKey } from "./types";

const listings: Record<ListingKey, Listing> = {
  "services": {
    "metaTitle": "Services",
    "metaDescription": "Two kinds of work: SEO for Google, and AI SEO so assistants can cite the business.",
    "title": "Two kinds of work",
    "lead": "We don't keep a longer menu. The engagement is SEO, AI SEO, or both — chosen after the problem is clear."
  },
  "blog": {
    "metaTitle": "Notes on search and AI answers",
    "metaDescription": "Notes on SEO, AI answers, measurement, and the document we write before the work starts.",
    "title": "Notes on search and AI answers",
    "lead": "How the work is actually done: what to measure, what to fix first, and what the labels mean."
  },
  "cases": {
    "metaTitle": "Cases",
    "metaDescription": "Write-ups of finished work: the problem, what changed, and how the result was measured.",
    "title": "Cases",
    "lead": "One project per page: the problem we were given, the work, and how the result was measured."
  },
  "faq": {
    "metaTitle": "FAQ",
    "metaDescription": "What AI SEO is, how long results take, how cost is set, and where an engagement starts.",
    "title": "Questions we are asked first",
    "lead": "Short answers. The longer version sits on the SEO and AI SEO pages."
  },
  "contact": {
    "metaTitle": "Contact",
    "metaDescription": "Tell us what is not working. We reply and say whether the work is SEO, AI SEO, or both.",
    "title": "Leave a request",
    "lead": "Leave your phone or email. We'll reply, ask the right questions, and tell you which work fits."
  }
};

export default listings;
