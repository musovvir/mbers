import type { AppLocale } from "@/i18n/routing";

export type HomeContent = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  approachEyebrow: string;
  approachTitle: string;
  approachText: string;
  steps: { title: string; text: string }[];
  servicesEyebrow: string;
  servicesTitle: string;
  services: { href: "/seo" | "/ai-seo"; title: string; text: string }[];
  proofTitle: string;
  aiTitle: string;
  aiText: string;
  aiPoints: { title: string; text: string }[];
  aiLink: string;
  processEyebrow: string;
  processTitle: string;
  stages: { title: string; text: string }[];
  faqEyebrow: string;
  faqTitle: string;
  faqIds: string[];
  leadTitle: string;
  leadText: string;
};

const home: Record<AppLocale, HomeContent> = {
  en: {
    metaTitle: "SEO and AI SEO Consulting | MBers Laboratory",
    metaDescription:
      "We identify the business problem, then do the SEO and AI SEO that makes a company findable in search and citable by AI assistants.",
    title: "So a company is found in search\nand cited in assistant answers",
    lead: "First we look at where the business is lost, then do SEO, AI SEO, or both.",
    approachEyebrow: "How we think",
    approachTitle: "You might not know what you need — that's fine.",
    approachText:
      "We don't start by asking which service you want. First we look at the business, see where search and AI answers are losing you, and work out what is actually worth changing.",
    steps: [
      {
        title: "Study",
        text: "We learn how the business is found today: in Google, and in the answers assistants already give.",
      },
      {
        title: "Find the gap",
        text: "We separate a technical fault from a missing topic, and a ranking problem from a citation problem.",
      },
      {
        title: "Propose the work",
        text: "SEO, AI SEO, or both — with the sequence, the scope and the way the result will be measured.",
      },
    ],
    servicesEyebrow: "Tools",
    servicesTitle: "SEO and AI SEO",
    services: [
      {
        href: "/seo",
        title: "SEO implementation",
        text: "Organic growth in Google: the technical groundwork, the right topics, the pages and the links behind them.",
      },
      {
        href: "/ai-seo",
        title: "AI SEO implementation",
        text: "Being the answer an assistant gives: clear, well-organized information it can quote directly.",
      },
    ],
    proofTitle: "Results from two projects",
    aiTitle: "AI SEO — so your brand is found beyond the results page",
    aiText:
      "Search is changing. People increasingly get the answer from an assistant instead of a list of links. We make the business one of the sources that answer is built from — understood by search engines, by models, and by the person reading it.",
    aiPoints: [
      {
        title: "Answers, not slogans",
        text: "Pages written so a specific question has one self-contained answer an assistant can lift.",
      },
      {
        title: "Structured data",
        text: "Markup that tells a machine what the page is, instead of leaving it to infer.",
      },
      {
        title: "A recorded baseline",
        text: "The same prompts, run before the work and after, so a citation is something you can see.",
      },
    ],
    aiLink: "Learn more about AI SEO",
    processEyebrow: "How we work",
    processTitle: "Eight stages, one engagement",
    stages: [
      {
        title: "Intake",
        text: "The work starts with what is stuck. If the problem is not clear yet, the first step is an audit, not a proposal.",
      },
      {
        title: "Analysis",
        text: "We read the search picture and the answer picture, and say what is actually holding growth back — including when the honest answer is that this work is not what you need.",
      },
      {
        title: "Documentation",
        text: "Scope, sequence, cost and the measure of success are written down before the work, and the document stays the record for the rest of the engagement.",
      },
      {
        title: "Planning",
        text: "What starts first, what has to exist before the next step, and who is responsible. The order is fixed before implementation.",
      },
      {
        title: "Implementation",
        text: "SEO, AI SEO, or both. Which one runs depends on the problem: a technical recovery, a demand map, entity and citation work, or a combination.",
      },
      {
        title: "Testing",
        text: "Before anything is treated as done, a person checks the result the way a reader, a crawler and an assistant would.",
      },
      {
        title: "Release",
        text: "The checked changes go live.",
      },
      {
        title: "Support",
        text: "We stay with the work for as long as the engagement says, and the document records what was agreed.",
      },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Questions we are asked first",
    faqIds: ["ai-vs-seo", "timeline", "cost", "markets", "start"],
    leadTitle: "Leave a request",
    leadText:
      "Leave your phone or email. We'll reply, ask the right questions, and tell you whether the work is SEO, AI SEO, or both.",
  },
  ru: {
    metaTitle: "Консалтинг по SEO и AI SEO | MBers Laboratory",
    metaDescription:
      "Находим бизнес-проблему, затем делаем SEO и AI SEO, чтобы компанию находили в поиске и цитировали ИИ-ассистенты.",
    title: "Чтобы компанию находили в поиске\nи цитировали в ответах ассистентов",
    lead: "Сначала смотрим, где бизнес теряют, и делаем SEO, AI SEO или оба.",
    approachEyebrow: "Как мы мыслим",
    approachTitle: "Вы можете не знать, что вам нужно. Это нормально.",
    approachText:
      "Мы не начинаем с вопроса, какую услугу вы хотите. Сначала смотрим на бизнес, где поиск и ответы ассистентов вас теряют, и разбираемся, что действительно стоит менять.",
    steps: [
      {
        title: "Изучаем",
        text: "Смотрим, как бизнес находят сейчас: в Google и в ответах, которые ассистенты уже дают.",
      },
      {
        title: "Находим разрыв",
        text: "Отделяем техническую ошибку от отсутствующей темы, а проблему позиций — от проблемы цитирования.",
      },
      {
        title: "Предлагаем работу",
        text: "SEO, AI SEO или оба: с порядком, составом и способом измерить результат.",
      },
    ],
    servicesEyebrow: "Инструменты",
    servicesTitle: "SEO и AI SEO",
    services: [
      {
        href: "/seo",
        title: "Внедрение SEO",
        text: "Органический рост в Google: техническая основа, нужные темы, страницы и ссылки.",
      },
      {
        href: "/ai-seo",
        title: "Внедрение AI SEO",
        text: "Быть ответом, который даёт ассистент: ясная информация, которую можно процитировать напрямую.",
      },
    ],
    proofTitle: "Результаты двух проектов",
    aiTitle: "AI SEO — чтобы бренд находили не только в выдаче",
    aiText:
      "Поиск меняется. Люди всё чаще получают ответ от ассистента, а не из списка ссылок. Мы делаем компанию одним из источников, из которых этот ответ собирается — понятным поисковым системам, моделям и человеку, который его читает.",
    aiPoints: [
      {
        title: "Ответы, не слоганы",
        text: "Страницы, на которых у конкретного вопроса есть один самодостаточный ответ.",
      },
      {
        title: "Структурированные данные",
        text: "Разметка, которая говорит машине, что это за страница, а не оставляет это на догадку.",
      },
      {
        title: "Зафиксированный старт",
        text: "Одни и те же запросы до работы и после, чтобы цитату можно было увидеть.",
      },
    ],
    aiLink: "Подробнее про AI SEO",
    processEyebrow: "Как мы работаем",
    processTitle: "Восемь этапов, одна работа",
    stages: [
      {
        title: "Сбор",
        text: "Работа начинается с того, что не двигается. Если проблема ещё не ясна, первый шаг — аудит, а не коммерческое предложение.",
      },
      {
        title: "Анализ",
        text: "Смотрим картину поиска и картину ответов и говорим, что реально держит рост. Иногда честный вывод — что эта работа вам не нужна.",
      },
      {
        title: "Документация",
        text: "Состав, порядок, стоимость и способ измерить успех фиксируются до начала. Документ остаётся записью на всю работу.",
      },
      {
        title: "Планирование",
        text: "С чего начать, что должно существовать до следующего шага и кто за это отвечает. Порядок фиксируется до реализации.",
      },
      {
        title: "Реализация",
        text: "SEO, AI SEO или оба. Что именно запускается, зависит от проблемы: техническое восстановление, карта спроса, работа с сущностью и цитатами или сочетание.",
      },
      {
        title: "Проверка",
        text: "Прежде чем считать работу сделанной, человек проверяет результат так, как его прочитает человек, краулер и ассистент.",
      },
      {
        title: "Публикация",
        text: "Проверенные изменения выходят в доступ.",
      },
      {
        title: "Сопровождение",
        text: "Остаёмся с работой столько, сколько записано в договорённости. Документ хранит, о чём договорились.",
      },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Вопросы, которые задают первыми",
    faqIds: ["ai-vs-seo", "timeline", "cost", "markets", "start"],
    leadTitle: "Оставьте заявку",
    leadText:
      "Оставьте телефон или почту. Мы ответим, зададим нужные вопросы и скажем, это SEO, AI SEO или оба.",
  },
  ar: {
    metaTitle: "استشارات SEO وAI SEO | MBers Laboratory",
    metaDescription:
      "نحدد مشكلة العمل، ثم ننفذ SEO وAI SEO حتى تجد محركات البحث الشركة وتقتبسها مساعدات الذكاء الاصطناعي.",
    title: "حتى يُعثر على الشركة في البحث\nويُقتبس عنها في إجابات المساعدين",
    lead: "ننظر أولًا أين يُفقد العمل، ثم ننفذ SEO أو AI SEO أو الاثنين.",
    approachEyebrow: "كيف نفكر",
    approachTitle: "قد لا تعرف ما الذي تحتاجه. هذا طبيعي.",
    approachText:
      "لا نبدأ بسؤال أي خدمة تريد. ننظر أولًا إلى العمل، وأين يخسرك البحث وإجابات المساعدين، ثم نحدد ما يستحق التغيير فعلًا.",
    steps: [
      {
        title: "ندرس",
        text: "نرى كيف يُعثر على النشاط اليوم: في Google، وفي الإجابات التي تقدمها المساعدات أصلًا.",
      },
      {
        title: "نحدد الفجوة",
        text: "نفصل العطل التقني عن الموضوع الغائب، ومشكلة الترتيب عن مشكلة الاقتباس.",
      },
      {
        title: "نقترح العمل",
        text: "SEO أو AI SEO أو الاثنان، مع التسلسل والنطاق وطريقة قياس النتيجة.",
      },
    ],
    servicesEyebrow: "الأدوات",
    servicesTitle: "SEO وAI SEO",
    services: [
      {
        href: "/seo",
        title: "تنفيذ SEO",
        text: "نمو عضوي في Google: الأساس التقني، والموضوعات الصحيحة، والصفحات والروابط خلفها.",
      },
      {
        href: "/ai-seo",
        title: "تنفيذ AI SEO",
        text: "أن تكون الإجابة التي يقدمها المساعد: معلومات واضحة ومنظمة يمكن اقتباسها مباشرة.",
      },
    ],
    proofTitle: "نتائج مشروعين",
    aiTitle: "AI SEO — ليُعثر على علامتك خارج صفحة النتائج",
    aiText:
      "البحث يتغير. الناس يحصلون على الإجابة من مساعد أكثر فأكثر، لا من قائمة روابط. نجعل النشاط أحد المصادر التي تُبنى منها هذه الإجابة — مفهومًا لمحركات البحث وللنماذج وللشخص الذي يقرأ.",
    aiPoints: [
      {
        title: "إجابات لا شعارات",
        text: "صفحات يقابل فيها السؤال المحدد جوابًا واحدًا مكتفيًا بذاته يستطيع المساعد رفعه.",
      },
      {
        title: "بيانات منظمة",
        text: "ترميز يخبر الآلة ما هي الصفحة، بدل أن يتركها تخمّن.",
      },
      {
        title: "خط أساس مسجّل",
        text: "الأسئلة نفسها قبل العمل وبعده، حتى يصبح الاقتباس شيئًا يمكن رؤيته.",
      },
    ],
    aiLink: "المزيد عن AI SEO",
    processEyebrow: "كيف نعمل",
    processTitle: "ثماني مراحل، وتعاون واحد",
    stages: [
      {
        title: "الجمع",
        text: "يبدأ العمل مما هو عالق. إذا لم تكن المشكلة واضحة بعد، فالخطوة الأولى تدقيق لا عرض سعر.",
      },
      {
        title: "التحليل",
        text: "نقرأ صورة البحث وصورة الإجابات، ونقول ما الذي يعيق النمو فعلًا — بما في ذلك حين تكون الإجابة الصادقة أن هذا العمل ليس ما تحتاجه.",
      },
      {
        title: "التوثيق",
        text: "النطاق والتسلسل والتكلفة ومعيار النجاح تُكتب قبل العمل، وتبقى الوثيقة سجل التعاون.",
      },
      {
        title: "التخطيط",
        text: "ما الذي يبدأ أولًا، وما الذي يجب أن يوجد قبل الخطوة التالية، ومن المسؤول. الترتيب يُثبَّت قبل التنفيذ.",
      },
      {
        title: "التنفيذ",
        text: "SEO أو AI SEO أو الاثنان. ما يُشغَّل يعتمد على المشكلة: إصلاح تقني، أو خريطة طلب، أو عمل على الكيان والاقتباس، أو مزيج منها.",
      },
      {
        title: "الاختبار",
        text: "قبل أن يُعدّ العمل منجزًا، يراجعه شخص كما سيقرأه قارئ وزاحف ومساعد.",
      },
      {
        title: "النشر",
        text: "التغييرات التي تمت مراجعتها تصبح متاحة.",
      },
      {
        title: "المتابعة",
        text: "نبقى مع العمل للمدة التي ينص عليها الاتفاق، والوثيقة تحفظ ما تم الاتفاق عليه.",
      },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "الأسئلة التي تُطرح أولًا",
    faqIds: ["ai-vs-seo", "timeline", "cost", "markets", "start"],
    leadTitle: "اترك طلبًا",
    leadText:
      "اترك هاتفك أو بريدك. سنرد، ونطرح الأسئلة الصحيحة، ونقول إن كان العمل SEO أو AI SEO أو الاثنين.",
  },
};

export function getHome(locale: AppLocale) {
  return home[locale];
}
