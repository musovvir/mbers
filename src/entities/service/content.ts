import type { AppLocale } from "@/i18n/routing";

export type ServiceSlug = "seo" | "ai-seo";

export type ServiceContent = {
  slug: ServiceSlug;
  pathname: "/seo" | "/ai-seo";
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  cardText: string;
  definitionTitle: string;
  definition: string;
  workTitle: string;
  deliverables: { title: string; text: string }[];
  measureTitle: string;
  measure: string;
  faqIds: string[];
  faqTitle: string;
  ctaTitle: string;
  ctaText: string;
};

const services: Record<AppLocale, ServiceContent[]> = {
  en: [
    {
      slug: "seo",
      pathname: "/seo",
      navLabel: "SEO",
      metaTitle: "SEO Implementation",
      metaDescription:
        "SEO that starts from the searches a business should win: technical foundations, a demand map, pages written for those queries, and a recorded baseline.",
      eyebrow: "SEO",
      title: "SEO implementation",
      lead: "Organic growth in Google — the technical groundwork, the topics people actually search, and the pages that should earn the visit.",
      cardText:
        "Organic growth in Google: the technical groundwork, the right topics, the pages and the links behind them.",
      definitionTitle: "What the work is",
      definition:
        "SEO here is not a list of tools. It is the work of making the right pages crawlable, understandable and worth ranking for demand that already exists. We start from the market and from the pages that should own the visit. A blog that ranks while the commercial pages stay invisible is a structure problem, not a traffic win.",
      workTitle: "From the crawl to the query",
      deliverables: [
        {
          title: "Technical foundation",
          text: "Indexation, canonicals, one URL per page, internal paths a crawler can follow, and speed on the devices people actually use.",
        },
        {
          title: "Demand map",
          text: "Queries grouped by intent and assigned to the page that should own them. The catalogue follows the search, not the other way around.",
        },
        {
          title: "Pages that answer",
          text: "Titles, headings and the body rewritten around the query. The page says the thing the searcher came for, in language a ranking system can parse.",
        },
        {
          title: "Paths and references",
          text: "Internal links that pass relevance to the pages that sell, and a clear view of which external references those pages still lack.",
        },
      ],
      measureTitle: "How the result is measured",
      measure:
        "On the pages that should earn the visit: indexation, rankings for the mapped queries, and organic visits to those pages. Technical fixes show in weeks. Structure and content usually show in three to six months. The baseline is written down before the work, so the change is comparable.",
      faqIds: ["seo-measure", "seo-output", "timeline", "cost"],
      faqTitle: "Questions before you buy",
      ctaTitle: "Tell us what search is not doing",
      ctaText: "Leave a contact. We'll say what the first stage is, and how the result would be measured.",
    },
    {
      slug: "ai-seo",
      pathname: "/ai-seo",
      navLabel: "AI SEO",
      metaTitle: "AI SEO Implementation",
      metaDescription:
        "AI SEO makes a company one of the sources an assistant reads and quotes. Entity work, structured data, quotable pages, and a prompt baseline before and after.",
      eyebrow: "AI SEO",
      title: "AI SEO implementation",
      lead: "Buyers increasingly get their answer from an assistant instead of a results page. We make the company one of the sources that answer is built from — and show, prompt by prompt, what changed.",
      cardText: "Being the answer an assistant gives: clear, well-organized information it can quote directly.",
      definitionTitle: "What AI SEO is",
      definition:
        "AI SEO is the work of making a company one of the sources an assistant reads, understands and quotes. The same discipline is sold under other names — answer engine optimisation, generative engine optimisation, LLM SEO. The work is the same: unambiguous facts, attributable sources, and pages a model can lift without guessing.",
      workTitle: "From definitions to monitoring",
      deliverables: [
        {
          title: "Entity and definition work",
          text: "A plain statement of what the company is, what it does and for whom — wording a model can repeat without interpreting.",
        },
        {
          title: "Structured data",
          text: "Schema on every relevant page, describing what it is and how its facts connect, so a machine parses the page instead of inferring it.",
        },
        {
          title: "Quotable content",
          text: "Pages rewritten so a specific question has one self-contained answer, not a paragraph a model would have to summarise.",
        },
        {
          title: "Answer monitoring",
          text: "A fixed set of prompts, run before the work and again after, tracking whether the business is mentioned, what is said, and which pages get cited.",
        },
      ],
      measureTitle: "How the result is measured",
      measure:
        "By citation on that fixed prompt set: how often assistants mention the business for the questions it should own, what they say, and which of your pages they quote. Weeks for a question nobody else answers clearly. Months for a competitive topic. Model updates add lag, which is why the baseline comes first.",
      faqIds: ["ai-vs-seo", "ai-show", "ai-measure", "ai-output"],
      faqTitle: "Questions before you buy",
      ctaTitle: "Which answers you should be in",
      ctaText: "Leave a contact. We'll say what it takes for assistants to quote you, and what we would measure.",
    },
  ],
  ru: [
    {
      slug: "seo",
      pathname: "/seo",
      navLabel: "SEO",
      metaTitle: "Внедрение SEO",
      metaDescription:
        "SEO от запросов, которые бизнес должен забирать: техническая основа, карта спроса, страницы под эти запросы и зафиксированный старт.",
      eyebrow: "SEO",
      title: "Внедрение SEO",
      lead: "Органический рост в Google — техническая основа, темы, которые люди реально ищут, и страницы, которые должны получать визит.",
      cardText: "Органический рост в Google: техническая основа, нужные темы, страницы и ссылки.",
      definitionTitle: "В чём работа",
      definition:
        "SEO здесь — не набор инструментов. Это работа, после которой нужные страницы можно обойти, понять и ранжировать по спросу, который уже есть. Мы начинаем с рынка и со страниц, которые должны забирать визит. Блог в топе при невидимых коммерческих страницах — проблема структуры, а не победа по трафику.",
      workTitle: "От обхода к запросу",
      deliverables: [
        {
          title: "Техническая основа",
          text: "Индексация, canonical, один адрес на страницу, пути, по которым краулер доходит, и скорость на устройствах, которыми люди пользуются.",
        },
        {
          title: "Карта спроса",
          text: "Запросы собраны по намерению и назначены странице, которая должна их закрывать. Каталог следует за поиском, а не наоборот.",
        },
        {
          title: "Страницы, которые отвечают",
          text: "Заголовки и текст переписаны вокруг запроса. Страница говорит то, за чем пришёл человек, языком, который система ранжирования разбирает.",
        },
        {
          title: "Пути и упоминания",
          text: "Внутренние ссылки отдают релевантность страницам, которые продают, и видно, каких внешних упоминаний этим страницам ещё не хватает.",
        },
      ],
      measureTitle: "Как измеряется результат",
      measure:
        "По страницам, которые должны получать визит: индексация, позиции по собранным запросам и органические визиты. Технические исправления видны за недели. Структура и контент — обычно за три–шесть месяцев. Старт записывается до работы, чтобы изменение можно было сравнить.",
      faqIds: ["seo-measure", "seo-output", "timeline", "cost"],
      faqTitle: "Вопросы до покупки",
      ctaTitle: "Расскажите, чего поиск не делает",
      ctaText: "Оставьте контакт. Скажем, каким будет первый этап и как измерим результат.",
    },
    {
      slug: "ai-seo",
      pathname: "/ai-seo",
      navLabel: "AI SEO",
      metaTitle: "Внедрение AI SEO",
      metaDescription:
        "AI SEO делает компанию источником, который ассистент читает и цитирует. Сущность, разметка, цитируемые страницы и срез запросов до и после.",
      eyebrow: "AI SEO",
      title: "Внедрение AI SEO",
      lead: "Покупатели всё чаще получают ответ от ассистента, а не со страницы результатов. Мы делаем компанию одним из источников этого ответа и показываем по каждому запросу, что изменилось.",
      cardText: "Быть ответом, который даёт ассистент: ясная информация, которую можно процитировать напрямую.",
      definitionTitle: "Что такое AI SEO",
      definition:
        "AI SEO — это работа, после которой компания становится источником, который ассистент читает, понимает и цитирует. Ту же дисциплину продают под другими именами: оптимизация под ответы, под генеративные системы, LLM SEO. Работа одна: однозначные факты, источники, которые можно указать, и страницы, которые модель поднимает без догадок.",
      workTitle: "От определений к наблюдению",
      deliverables: [
        {
          title: "Сущность и определения",
          text: "Прямая формулировка, что это за компания, что она делает и для кого — текст, который модель может повторить, не интерпретируя.",
        },
        {
          title: "Структурированные данные",
          text: "Разметка на каждой нужной странице: что это и как факты связаны, чтобы машина разобрала страницу, а не додумала.",
        },
        {
          title: "Цитируемый контент",
          text: "Страницы переписаны так, чтобы у конкретного вопроса был один самодостаточный ответ, а не абзац, который модели пришлось бы сжимать.",
        },
        {
          title: "Наблюдение за ответами",
          text: "Фиксированный набор запросов до работы и после: упоминают ли компанию, что говорят и какие страницы цитируют.",
        },
      ],
      measureTitle: "Как измеряется результат",
      measure:
        "Цитатами по этому набору: как часто ассистенты упоминают компанию в вопросах, которые она должна закрывать, что говорят и какие страницы цитируют. Недели — если вопрос больше никто не формулирует ясно. Месяцы — если тема конкурентная. Обновления моделей добавляют лаг, поэтому сначала снимается базовый срез.",
      faqIds: ["ai-vs-seo", "ai-show", "ai-measure", "ai-output"],
      faqTitle: "Вопросы до покупки",
      ctaTitle: "В каких ответах вас должно быть",
      ctaText: "Оставьте контакт. Скажем, что нужно, чтобы ассистенты вас цитировали, и что будем измерять.",
    },
  ],
  ar: [
    {
      slug: "seo",
      pathname: "/seo",
      navLabel: "SEO",
      metaTitle: "تنفيذ SEO",
      metaDescription:
        "SEO يبدأ من عمليات البحث التي يجب أن يربحها النشاط: أساس تقني، وخريطة طلب، وصفحات مكتوبة لهذه الاستعلامات، وخط أساس مسجّل.",
      eyebrow: "SEO",
      title: "تنفيذ SEO",
      lead: "نمو عضوي في Google — الأساس التقني، والموضوعات التي يبحث عنها الناس فعلًا، والصفحات التي يجب أن تربح الزيارة.",
      cardText: "نمو عضوي في Google: الأساس التقني، والموضوعات الصحيحة، والصفحات والروابط خلفها.",
      definitionTitle: "ما هو هذا العمل",
      definition:
        "SEO هنا ليس قائمة أدوات. هو العمل الذي يجعل الصفحات الصحيحة قابلة للزحف والفهم وجديرة بالترتيب على طلب موجود أصلًا. نبدأ من السوق ومن الصفحات التي يجب أن تملك الزيارة. مدونة تتصدر بينما الصفحات التجارية غير مرئية مشكلة بنية، لا مكسبًا في الزيارات.",
      workTitle: "من الزحف إلى الاستعلام",
      deliverables: [
        {
          title: "أساس تقني",
          text: "الفهرسة، والروابط المعيارية، وعنوان واحد لكل صفحة، ومسارات يستطيع الزاحف اتباعها، وسرعة على الأجهزة التي يستخدمها الناس فعلًا.",
        },
        {
          title: "خريطة الطلب",
          text: "الاستعلامات مجمّعة حسب النية ومسنَدة إلى الصفحة التي يجب أن تملكها. الكتالوج يتبع البحث، لا العكس.",
        },
        {
          title: "صفحات تجيب",
          text: "العناوين والنص يُعاد كتابتهما حول الاستعلام. الصفحة تقول ما جاء الباحث من أجله، بلغة يستطيع نظام الترتيب تحليلها.",
        },
        {
          title: "المسارات والإشارات",
          text: "روابط داخلية تمرر الصلة إلى الصفحات التي تبيع، وصورة واضحة عن الإشارات الخارجية التي ما زالت هذه الصفحات تفتقدها.",
        },
      ],
      measureTitle: "كيف تُقاس النتيجة",
      measure:
        "على الصفحات التي يجب أن تربح الزيارة: الفهرسة، والترتيب للاستعلامات المخططة، والزيارات العضوية. الإصلاحات التقنية تظهر خلال أسابيع. البنية والمحتوى يظهران عادة خلال ثلاثة إلى ستة أشهر. خط الأساس يُكتب قبل العمل حتى تكون المقارنة ممكنة.",
      faqIds: ["seo-measure", "seo-output", "timeline", "cost"],
      faqTitle: "أسئلة قبل أن تشتري",
      ctaTitle: "أخبرنا بما لا يفعله البحث",
      ctaText: "اترك وسيلة تواصل. سنقول ما المرحلة الأولى، وكيف ستُقاس النتيجة.",
    },
    {
      slug: "ai-seo",
      pathname: "/ai-seo",
      navLabel: "AI SEO",
      metaTitle: "تنفيذ AI SEO",
      metaDescription:
        "AI SEO يجعل الشركة أحد المصادر التي يقرأها المساعد ويقتبسها. عمل على الكيان، وبيانات منظمة، وصفحات قابلة للاقتباس، وخط أساس للأسئلة قبل العمل وبعده.",
      eyebrow: "AI SEO",
      title: "تنفيذ AI SEO",
      lead: "المشترون يحصلون على الإجابة من مساعد أكثر فأكثر، لا من صفحة نتائج. نجعل الشركة أحد المصادر التي تُبنى منها هذه الإجابة، ونُظهر سؤالًا بسؤال ما الذي تغيّر.",
      cardText: "أن تكون الإجابة التي يقدمها المساعد: معلومات واضحة ومنظمة يمكن اقتباسها مباشرة.",
      definitionTitle: "ما هو AI SEO",
      definition:
        "AI SEO هو العمل الذي يجعل الشركة أحد المصادر التي يقرأها المساعد ويفهمها ويقتبسها. التخصص نفسه يُباع بأسماء أخرى: تحسين محركات الإجابة، وتحسين المحركات التوليدية، وSEO لنماذج اللغة. العمل واحد: حقائق لا تحتمل التأويل، ومصادر يمكن نسبتها، وصفحات يستطيع النموذج رفعها من غير تخمين.",
      workTitle: "من التعريفات إلى المراقبة",
      deliverables: [
        {
          title: "الكيان والتعريف",
          text: "صياغة مباشرة لما هي الشركة، وماذا تفعل، ولمن — كلام يستطيع النموذج تكراره من غير أن يفسّره.",
        },
        {
          title: "بيانات منظمة",
          text: "ترميز على كل صفحة معنية يصف ما هي وكيف تتصل حقائقها، حتى تحلّل الآلة الصفحة بدل أن تستنتجها.",
        },
        {
          title: "محتوى قابل للاقتباس",
          text: "صفحات أُعيدت كتابتها بحيث يكون للسؤال المحدد جواب واحد مكتفٍ بذاته، لا فقرة يضطر النموذج إلى تلخيصها.",
        },
        {
          title: "مراقبة الإجابات",
          text: "مجموعة ثابتة من الأسئلة تُشغَّل قبل العمل وبعده: هل ذُكر النشاط، وماذا قيل، وأي الصفحات اقتُبست.",
        },
      ],
      measureTitle: "كيف تُقاس النتيجة",
      measure:
        "بالاقتباس على هذه المجموعة الثابتة: كم مرة يذكر المساعدون النشاط في الأسئلة التي يجب أن يملكها، وماذا يقولون، وأي صفحاتكم يقتبسون. أسابيع لسؤال لا يجيب عنه أحد بوضوح. أشهر لموضوع تنافسي. تحديثات النماذج تضيف تأخيرًا، لذلك يأتي خط الأساس أولًا.",
      faqIds: ["ai-vs-seo", "ai-show", "ai-measure", "ai-output"],
      faqTitle: "أسئلة قبل أن تشتري",
      ctaTitle: "في أي الإجابات يجب أن تكون",
      ctaText: "اترك وسيلة تواصل. سنقول ما الذي يلزم كي يقتبسك المساعدون، وما الذي سنقيسه.",
    },
  ],
};

export function getServices(locale: AppLocale) {
  return services[locale];
}

export function getService(locale: AppLocale, slug: string) {
  return services[locale].find((service) => service.slug === slug);
}
