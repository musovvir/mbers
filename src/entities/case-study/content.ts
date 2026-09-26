import type { AppLocale } from "@/i18n/routing";
import type { ServiceSlug } from "@/entities/service/content";

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

const cases: Record<AppLocale, CaseStudy[]> = {
  en: [
    {
      slug: "catalogue-rebuilt-around-demand",
      service: "seo",
      client: "Retail catalogue",
      title: "Categories rebuilt around what people actually search",
      excerpt:
        "Category pages followed the internal product tree, so organic traffic landed on the blog instead of the pages that sell.",
      metric: "+152%",
      metricLabel: "organic traffic in six months",
      problem:
        "Category pages followed the internal product tree, not real search demand, so most organic traffic landed on the blog instead of product pages.",
      work: "We restructured categories around keyword clusters and cleaned up the technical base: canonicals, indexation and internal links into the pages that sell.",
      result:
        "Organic traffic rose 152% in six months, and more of it landed on the category pages that can convert.",
      metaDescription:
        "A catalogue whose categories followed the product tree was rebuilt around search demand. Organic traffic rose 152% in six months.",
    },
    {
      slug: "cited-in-assistant-answers",
      service: "ai-seo",
      client: "B2B workflow-automation SaaS",
      title: "From absent to cited across assistant answers",
      excerpt:
        "Asked to name tools in the category, assistants cited competitors and did not mention the product.",
      metric: "Cited",
      metricLabel: "where assistants previously named only competitors",
      problem:
        "Asked to name tools for its own category, no assistant mentioned the product. Competitors were cited instead.",
      work: "Entity rewrites, schema and quotable answers on the pages a model would need, with a fixed prompt set recorded before the changes.",
      result:
        "The product started appearing in assistant answers for the category questions it should own, and the cited pages were its own.",
      metaDescription:
        "A B2B product absent from assistant answers was rewritten into an entity those answers could cite.",
    },
  ],
  ru: [
    {
      slug: "catalogue-rebuilt-around-demand",
      service: "seo",
      client: "Розничный каталог",
      title: "Категории перестроены вокруг того, что люди реально ищут",
      excerpt:
        "Страницы категорий повторяли внутреннее дерево товаров, поэтому органика садилась в блог, а не на страницы, которые продают.",
      metric: "+152%",
      metricLabel: "органического трафика за шесть месяцев",
      problem:
        "Страницы категорий следовали внутреннему дереву товаров, а не реальному спросу, поэтому большая часть органики приходила в блог, а не на товарные страницы.",
      work: "Мы перестроили категории вокруг кластеров запросов и привели в порядок техническую базу: canonical, индексацию и внутренние ссылки на страницы, которые продают.",
      result:
        "Органический трафик вырос на 152% за шесть месяцев, и большая его часть стала приходить на категории, которые могут конвертировать.",
      metaDescription:
        "Каталог, чьи категории повторяли дерево товаров, перестроен вокруг спроса. Органический трафик вырос на 152% за шесть месяцев.",
    },
    {
      slug: "cited-in-assistant-answers",
      service: "ai-seo",
      client: "B2B SaaS для автоматизации процессов",
      title: "От отсутствия в ответах к цитированию",
      excerpt:
        "Когда ассистентов просили назвать инструменты категории, они цитировали конкурентов и не упоминали продукт.",
      metric: "Цитируют",
      metricLabel: "там, где ассистенты раньше называли только конкурентов",
      problem:
        "На просьбу назвать инструменты своей категории ни один ассистент не упоминал продукт. Цитировали конкурентов.",
      work: "Переписали сущность, добавили разметку и самодостаточные ответы на страницах, которые нужны модели. Набор запросов зафиксировали до изменений.",
      result:
        "Продукт начал появляться в ответах ассистентов по вопросам категории, которые он должен закрывать, и цитировались его собственные страницы.",
      metaDescription:
        "B2B-продукт, которого не было в ответах ассистентов, переписан в сущность, которую эти ответы могут цитировать.",
    },
  ],
  ar: [
    {
      slug: "catalogue-rebuilt-around-demand",
      service: "seo",
      client: "كتالوج تجزئة",
      title: "أُعيد بناء التصنيفات حول ما يبحث عنه الناس فعلًا",
      excerpt:
        "صفحات التصنيف كانت تتبع شجرة المنتجات الداخلية، فهبطت الزيارات العضوية على المدونة لا على الصفحات التي تبيع.",
      metric: "+152%",
      metricLabel: "زيارات عضوية خلال ستة أشهر",
      problem:
        "صفحات التصنيف كانت تتبع شجرة المنتجات الداخلية لا الطلب الحقيقي، فمعظم الزيارات العضوية كانت تهبط على المدونة لا على صفحات المنتجات.",
      work: "أعدنا بناء التصنيفات حول مجموعات الاستعلامات، ونظّفنا الأساس التقني: الروابط المعيارية، والفهرسة، والروابط الداخلية إلى الصفحات التي تبيع.",
      result:
        "ارتفعت الزيارات العضوية 152% خلال ستة أشهر، وصار مزيد منها يهبط على صفحات التصنيف القادرة على التحويل.",
      metaDescription:
        "كتالوج كانت تصنيفاته تتبع شجرة المنتجات أُعيد بناؤه حول الطلب. ارتفعت الزيارات العضوية 152% خلال ستة أشهر.",
    },
    {
      slug: "cited-in-assistant-answers",
      service: "ai-seo",
      client: "منتج SaaS لأتمتة سير العمل",
      title: "من الغياب إلى الاقتباس في إجابات المساعدين",
      excerpt:
        "حين طُلب من المساعدين تسمية أدوات الفئة، اقتبسوا المنافسين ولم يذكروا المنتج.",
      metric: "يُقتبس",
      metricLabel: "حيث كان المساعدون يذكرون المنافسين فقط",
      problem:
        "حين طُلب من المساعدين تسمية أدوات فئته، لم يذكر أي منهم المنتج. كانوا يقتبسون المنافسين.",
      work: "أُعيدت صياغة الكيان، وأُضيف الترميز، وكُتبت إجابات مكتفية بذاتها على الصفحات التي يحتاجها النموذج. وسُجّلت مجموعة الأسئلة قبل التغيير.",
      result:
        "بدأ المنتج يظهر في إجابات المساعدين عن أسئلة الفئة التي يجب أن يملكها، والصفحات المقتبسة كانت صفحاته.",
      metaDescription:
        "منتج B2B كان غائبًا عن إجابات المساعدين أُعيدت كتابته ككيان تستطيع هذه الإجابات اقتباسه.",
    },
  ],
};

export function getCases(locale: AppLocale) {
  return cases[locale];
}

export function getCaseStudy(locale: AppLocale, slug: string) {
  return cases[locale].find((item) => item.slug === slug);
}

export function getCaseSlugs() {
  return cases.en.map((item) => item.slug);
}
