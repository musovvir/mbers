import type { Article } from "./types";

const articles: Article[] = [
  {
    "slug": "what-ai-seo-is-called",
    "title": "AI SEO: what it covers and what it is called",
    "description": "Answer engine optimisation, generative engine optimisation, LLM SEO — one discipline under several labels, and what the work involves.",
    "excerpt": "One discipline is sold under four labels. The work underneath is the same: be a source an assistant can quote.",
    "publishedAt": "2026-09-02",
    "minutes": 11,
    "service": "ai-seo",
    "blocks": [
      {
        "type": "p",
        "text": "Answer engine optimisation, generative engine optimisation, LLM SEO, AI SEO. The labels arrived faster than the work did. They describe one job: making a company a source that an assistant can read, understand and quote when someone asks a question the company should own."
      },
      {
        "type": "h2",
        "text": "What changes, compared with classic SEO"
      },
      {
        "type": "p",
        "text": "Classic SEO asks a results page to rank a URL. AI SEO asks a model to use a passage. A model will not lift a slogan, and it will not invent a precise fact you never wrote down. It quotes a sentence that already answers the question, on a page whose entity is unambiguous."
      },
      {
        "type": "ul",
        "items": [
          "A definition of the company that does not depend on the reader to interpret it.",
          "Structured data that states what the page is.",
          "One self-contained answer per question you want to be cited for.",
          "A fixed set of prompts, run before the work and after it."
        ]
      },
      {
        "type": "h2",
        "text": "What the name does not change"
      },
      {
        "type": "p",
        "text": "Crawlability, duplication and thin pages still matter, because a model cannot cite what it cannot retrieve. AI SEO sits on the same foundation as SEO. It adds a stricter demand: the sentence has to be liftable, and the source has to be attributable."
      }
    ]
  },
  {
    "slug": "redesigns-and-rankings",
    "title": "Why a redesign usually costs you traffic",
    "description": "Rankings live on URLs, headings and internal links. A visual refresh that ignores them restarts the search work.",
    "excerpt": "A new look does not keep the rankings. The URLs, the headings and the internal links do.",
    "publishedAt": "2026-08-12",
    "minutes": 7,
    "service": "seo",
    "blocks": [
      {
        "type": "p",
        "text": "A redesign is often commissioned as a visual project. Search does not rank the visual. It ranks URLs, the words in the titles and headings, the internal links between them, and whether one page still answers the query it used to answer."
      },
      {
        "type": "h2",
        "text": "What gets thrown away"
      },
      {
        "type": "ul",
        "items": [
          "URLs change, and the old addresses are not redirected to the page that now owns the query.",
          "Headings are rewritten for tone, and the query leaves the page.",
          "Internal links are rebuilt around the new menu, and the commercial pages lose the paths that used to point at them.",
          "Several URLs start answering the same query, and none of them is canonical."
        ]
      },
      {
        "type": "p",
        "text": "The traffic drop shows up weeks later, which is why it gets blamed on the algorithm. The fix is to treat the existing rankings as an inventory before anyone moves a URL. If a page earns a visit, the redesign has to say where that visit goes."
      }
    ]
  },
  {
    "slug": "category-pages-follow-demand",
    "title": "Category pages should follow demand, not your product tree",
    "description": "How search demand reorders a catalogue, and what that does to the pages that actually sell.",
    "excerpt": "If categories follow the internal tree, the blog collects the demand the product pages should have owned.",
    "publishedAt": "2026-07-18",
    "minutes": 8,
    "service": "seo",
    "blocks": [
      {
        "type": "p",
        "text": "Catalogues are usually organised the way the business thinks: by brand, by department, by the way the warehouse is laid out. People search by the job they are trying to do. When those two trees disagree, the query has nowhere commercial to land, and a blog post takes it."
      },
      {
        "type": "h2",
        "text": "What to rebuild"
      },
      {
        "type": "p",
        "text": "Group the queries by intent first. Assign each group to one page. If the current category does not match a group, it should not be the URL that tries to rank for it. Create the page the demand implies, or merge the pages that are splitting one query."
      },
      {
        "type": "p",
        "text": "Then point internal links at that page from the posts that used to rank instead. The blog can explain. It should not be the only URL that answers a query with commercial intent."
      }
    ]
  },
  {
    "slug": "what-we-write-down-first",
    "title": "What we write down before any of the work starts",
    "description": "The document that fixes scope, sequence and how the result gets measured — and what happens when it is skipped.",
    "excerpt": "Scope, sequence and the measure of the result are written down before the work, not reconstructed during it.",
    "publishedAt": "2026-06-20",
    "minutes": 5,
    "service": "seo",
    "blocks": [
      {
        "type": "p",
        "text": "Most engagements go wrong in the gap between a conversation and the first change on a page. Someone remembers the goal one way, someone else starts a different task, and the result has nothing it can be compared with."
      },
      {
        "type": "h2",
        "text": "The document has four parts"
      },
      {
        "type": "ul",
        "items": [
          "The problem, in the client's words and in ours.",
          "The work that is in, and the work that is out.",
          "The order: what has to exist before the next step.",
          "The measure: rankings, visits to specific pages, or citations on a fixed prompt set."
        ]
      },
      {
        "type": "p",
        "text": "If the problem is not clear enough to write down, the first stage is an audit, not implementation. The document is updated as the work moves. It is not a proposal that gets forgotten after the kickoff."
      }
    ]
  },
  {
    "slug": "check-whether-assistants-quote-you",
    "title": "How to check whether assistants quote you",
    "description": "A short routine for testing what assistants say about your market, and what they cite.",
    "excerpt": "Pick the questions you should own, ask them before the work, and keep the answers.",
    "publishedAt": "2026-05-22",
    "minutes": 9,
    "service": "ai-seo",
    "blocks": [
      {
        "type": "p",
        "text": "A single lucky screenshot is not a measurement. Assistants vary the wording, and a model update moves the answer. What holds still is a list of questions you chose in advance."
      },
      {
        "type": "h2",
        "text": "A routine that fits on one page"
      },
      {
        "type": "ul",
        "items": [
          "Write 15 to 30 questions a buyer would actually ask, including the ones where a competitor should not be the only name.",
          "Run them in the assistants your buyers use. Save the answer and every cited URL.",
          "Mark whether you are named, whether the description is accurate, and whether the citation is your page.",
          "Repeat the same list after the work. Do not add flattering questions at the end."
        ]
      },
      {
        "type": "p",
        "text": "If you are absent, the next page to write is the one that answers the question in a single passage, with the entity stated in plain language and marked up. Then run the list again."
      }
    ]
  },
  {
    "slug": "technical-seo-worth-doing-first",
    "title": "Technical SEO that is worth doing first",
    "description": "The fixes that pay back in weeks: crawlability, speed on real devices, and one canonical version of every page.",
    "excerpt": "Before new topics, make sure the pages you already have can be crawled, indexed and told apart.",
    "publishedAt": "2026-05-08",
    "minutes": 6,
    "service": "seo",
    "blocks": [
      {
        "type": "p",
        "text": "A long technical audit is easy to commission and hard to finish. The fixes that change indexation are fewer than the report suggests. Do those first. The rest can wait until the pages that should rank are actually eligible."
      },
      {
        "type": "ul",
        "items": [
          "Important URLs return 200, and the ones that should not be indexed say so.",
          "Each query has one canonical URL. Parameters, trailing copies and http duplicates point at it.",
          "Internal links reach the commercial pages in a few clicks from the pages that already have authority.",
          "The page is usable on a mid-range phone. A lab score that ignores that device is not the constraint."
        ]
      },
      {
        "type": "p",
        "text": "These show up in weeks, which is why they come before a six-month content plan. A content plan on a site that cannot canonicalise itself spends the months repairing the same pages twice."
      }
    ]
  }
];

export default articles;
