import type { CaseStudy } from "./types";

// TODO(real-data): replace with approved real cases/metrics (or remove) before claiming results publicly; sync ru/ar.
const cases: CaseStudy[] = [
  {
    "slug": "catalogue-rebuilt-around-demand",
    "service": "seo",
    "client": "Retail catalogue",
    "title": "Categories rebuilt around what people actually search",
    "excerpt": "Category pages followed the internal product tree, so organic traffic landed on the blog instead of the pages that sell.",
    "metric": "+152%",
    "metricLabel": "organic traffic in six months",
    "problem": "Category pages followed the internal product tree, not real search demand, so most organic traffic landed on the blog instead of product pages.",
    "work": "We restructured categories around keyword clusters and cleaned up the technical base: canonicals, indexation and internal links into the pages that sell.",
    "result": "Organic traffic rose 152% in six months, and more of it landed on the category pages that can convert.",
    "metaDescription": "A catalogue whose categories followed the product tree was rebuilt around search demand. Organic traffic rose 152% in six months."
  },
  {
    "slug": "cited-in-assistant-answers",
    "service": "ai-seo",
    "client": "B2B workflow-automation SaaS",
    "title": "From absent to cited across assistant answers",
    "excerpt": "Asked to name tools in the category, assistants cited competitors and did not mention the product.",
    "metric": "Cited",
    "metricLabel": "where assistants previously named only competitors",
    "problem": "Asked to name tools for its own category, no assistant mentioned the product. Competitors were cited instead.",
    "work": "Entity rewrites, schema and quotable answers on the pages a model would need, with a fixed prompt set recorded before the changes.",
    "result": "The product started appearing in assistant answers for the category questions it should own, and the cited pages were its own.",
    "metaDescription": "A B2B product absent from assistant answers was rewritten into an entity those answers could cite."
  }
];

export default cases;
