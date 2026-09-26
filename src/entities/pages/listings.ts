import type { AppLocale } from "@/i18n/routing";

type Listing = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
};

type ListingKey = "services" | "blog" | "cases" | "faq" | "contact";

const listings: Record<ListingKey, Record<AppLocale, Listing>> = {
  services: {
    en: {
      metaTitle: "Services",
      metaDescription: "Two kinds of work: SEO for Google, and AI SEO so assistants can cite the business.",
      title: "Two kinds of work",
      lead: "We don't keep a longer menu. The engagement is SEO, AI SEO, or both — chosen after the problem is clear.",
    },
    ru: {
      metaTitle: "Услуги",
      metaDescription: "Два вида работы: SEO для Google и AI SEO, чтобы ассистенты могли цитировать компанию.",
      title: "Два вида работы",
      lead: "Меню длиннее не делаем. Работа — это SEO, AI SEO или оба, и выбор делается после того, как ясна проблема.",
    },
    ar: {
      metaTitle: "الخدمات",
      metaDescription: "نوعان من العمل: SEO لـ Google، وAI SEO حتى يستطيع المساعدون اقتباس النشاط.",
      title: "نوعان من العمل",
      lead: "لا نُبقي قائمة أطول. التعاون هو SEO أو AI SEO أو الاثنان، والاختيار يأتي بعد أن تتضح المشكلة.",
    },
  },
  blog: {
    en: {
      metaTitle: "Notes on search and AI answers",
      metaDescription: "Notes on SEO, AI answers, measurement, and the document we write before the work starts.",
      title: "Notes on search and AI answers",
      lead: "How the work is actually done: what to measure, what to fix first, and what the labels mean.",
    },
    ru: {
      metaTitle: "Заметки о поиске и ответах ИИ",
      metaDescription: "Заметки про SEO, ответы ИИ, измерение и документ, который мы пишем до начала работы.",
      title: "Заметки о поиске и ответах ИИ",
      lead: "Как работа устроена на деле: что измерять, что чинить первым и что значат названия.",
    },
    ar: {
      metaTitle: "ملاحظات عن البحث وإجابات الذكاء الاصطناعي",
      metaDescription: "ملاحظات عن SEO وإجابات الذكاء الاصطناعي والقياس والوثيقة التي نكتبها قبل أن يبدأ العمل.",
      title: "ملاحظات عن البحث وإجابات الذكاء الاصطناعي",
      lead: "كيف يُنجز العمل فعلًا: ماذا نقيس، وماذا نُصلح أولًا، وماذا تعني الأسماء.",
    },
  },
  cases: {
    en: {
      metaTitle: "Cases",
      metaDescription: "Write-ups of finished work: the problem, what changed, and how the result was measured.",
      title: "Cases",
      lead: "One project per page: the problem we were given, the work, and how the result was measured.",
    },
    ru: {
      metaTitle: "Кейсы",
      metaDescription: "Разборы законченной работы: проблема, что изменилось и как измерили результат.",
      title: "Кейсы",
      lead: "Один проект на страницу: проблема, работа и то, как измерили результат.",
    },
    ar: {
      metaTitle: "دراسات الحالة",
      metaDescription: "شروح لعمل منجز: المشكلة، وما الذي تغيّر، وكيف قِيست النتيجة.",
      title: "دراسات الحالة",
      lead: "مشروع واحد في كل صفحة: المشكلة التي وصلتنا، والعمل، وكيف قِيست النتيجة.",
    },
  },
  faq: {
    en: {
      metaTitle: "FAQ",
      metaDescription: "What AI SEO is, how long results take, how cost is set, and where an engagement starts.",
      title: "Questions we are asked first",
      lead: "Short answers. The longer version sits on the SEO and AI SEO pages.",
    },
    ru: {
      metaTitle: "Вопросы",
      metaDescription: "Что такое AI SEO, когда ждать результат, как считается стоимость и с чего начинается работа.",
      title: "Вопросы, которые задают первыми",
      lead: "Короткие ответы. Развёрнутая версия — на страницах SEO и AI SEO.",
    },
    ar: {
      metaTitle: "الأسئلة",
      metaDescription: "ما هو AI SEO، وكم تستغرق النتائج، وكيف تُحدَّد التكلفة، ومن أين يبدأ التعاون.",
      title: "الأسئلة التي تُطرح أولًا",
      lead: "إجابات قصيرة. النسخة الأطول على صفحتي SEO وAI SEO.",
    },
  },
  contact: {
    en: {
      metaTitle: "Contact",
      metaDescription: "Tell us what is not working. We reply and say whether the work is SEO, AI SEO, or both.",
      title: "Leave a request",
      lead: "Leave your phone or email. We'll reply, ask the right questions, and tell you which work fits.",
    },
    ru: {
      metaTitle: "Контакты",
      metaDescription: "Расскажите, что не работает. Ответим и скажем, это SEO, AI SEO или оба.",
      title: "Оставьте заявку",
      lead: "Оставьте телефон или почту. Ответим, зададим нужные вопросы и скажем, какая работа подходит.",
    },
    ar: {
      metaTitle: "التواصل",
      metaDescription: "أخبرنا بما لا يعمل. نرد ونقول إن كان العمل SEO أو AI SEO أو الاثنين.",
      title: "اترك طلبًا",
      lead: "اترك هاتفك أو بريدك. سنرد، ونطرح الأسئلة الصحيحة، ونقول أي عمل يناسب.",
    },
  },
};

export function getListing(key: ListingKey, locale: AppLocale) {
  return listings[key][locale];
}
