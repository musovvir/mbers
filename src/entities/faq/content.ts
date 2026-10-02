import type { AppLocale } from "@/i18n/routing";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const faqs: Record<AppLocale, FaqItem[]> = {
  en: [
    {
      id: "ai-vs-seo",
      question: "What is AI SEO and how does it differ from SEO?",
      answer:
        "Both rest on the same foundation: structure, markup and content quality. SEO asks to be ranked. AI SEO asks to be cited, which needs unambiguous facts, sources an assistant can attribute, and pages built around real questions.",
    },
    {
      id: "timeline",
      question: "How long does it take to see results?",
      answer:
        "Technical fixes register in weeks. Structure and content driven by demand usually show in three to six months, depending on the market and the starting point.",
    },
    {
      id: "cost",
      question: "How is the cost of the work calculated?",
      answer:
        "By the stages the work actually needs. The documentation fixes what is included, so the estimate is agreed before the work rather than during it.",
    },
    {
      id: "markets",
      question: "Do you work with clients in any market?",
      answer:
        "Yes. We are based in Dubai, UAE, and work with clients worldwide. The work is remote. What matters is the market the pages have to win, not where the client sits.",
    },
    {
      id: "start",
      question: "Where does an engagement start?",
      answer:
        "With the problem, not the service. Tell us what is not working and we say whether the answer is SEO, AI SEO or both, what the work involves and how the result gets measured.",
    },
    {
      id: "ai-show",
      question: "How long until AI SEO shows?",
      answer:
        "Weeks for a page that answers a question nobody else answers clearly. Months for a competitive topic. Model updates add their own lag, which is why the baseline is recorded before the work starts.",
    },
    {
      id: "ai-measure",
      question: "How is an AI SEO result measured?",
      answer:
        "By citation, on a fixed set of prompts run before and after: how often assistants mention the business for the questions it should own, what they say, and which pages they quote.",
    },
    {
      id: "ai-output",
      question: "What do I get at the end of AI SEO?",
      answer:
        "The prompt set and its baseline, the rewritten pages and their structured data, and a report comparing the answers before and after — with what to publish next.",
    },
    {
      id: "seo-measure",
      question: "How is an SEO result measured?",
      answer:
        "By movement on the pages that should earn the visit: indexation, rankings for the mapped queries, and organic visits to those pages. A rise in blog traffic that never reaches a commercial page is not the result.",
    },
    {
      id: "seo-output",
      question: "What do I get at the end of SEO work?",
      answer:
        "A demand map, the technical fixes, the pages that were rewritten or added, and a record of what changed in indexation and rankings against the baseline.",
    },
  ],
  ru: [
    {
      id: "ai-vs-seo",
      question: "Что такое AI SEO и чем он отличается от SEO?",
      answer:
        "У обоих одна основа — структура, разметка и качество контента. SEO просит места в выдаче. AI SEO просит, чтобы вас цитировали: для этого нужны однозначные факты, источники, которые ассистент может указать, и страницы вокруг реальных вопросов.",
    },
    {
      id: "timeline",
      question: "Через сколько будут результаты?",
      answer:
        "Технические исправления считываются за недели. Структура и контент по спросу обычно проявляются через три–шесть месяцев — зависит от рынка и стартовой точки.",
    },
    {
      id: "cost",
      question: "Как считается стоимость работы?",
      answer:
        "По этапам, которые работе действительно нужны. Документация фиксирует состав, поэтому смета согласуется до начала, а не по ходу.",
    },
    {
      id: "markets",
      question: "Работаете ли вы с клиентами на любом рынке?",
      answer:
        "Да. Базируемся в Дубае, ОАЭ, и работаем с клиентами по всему миру. Работа удалённая. Важен рынок, который нужно выиграть страницами, а не то, где сидит клиент.",
    },
    {
      id: "start",
      question: "С чего начинается работа?",
      answer:
        "С проблемы, а не с услуги. Расскажите, что не работает, и мы скажем, закрывает ли это SEO, AI SEO или оба сразу, из чего будет состоять работа и как измерим результат.",
    },
    {
      id: "ai-show",
      question: "Когда становится виден AI SEO?",
      answer:
        "Недели — если страница отвечает на вопрос, который никто больше не формулирует ясно. Месяцы — если тема конкурентная. Обновления моделей добавляют свой лаг, поэтому базовый срез снимается до начала работ.",
    },
    {
      id: "ai-measure",
      question: "Как измеряется результат AI SEO?",
      answer:
        "Цитатами по фиксированному набору запросов до и после: как часто ассистенты упоминают компанию в вопросах, которые она должна закрывать, что именно говорят и какие страницы цитируют.",
    },
    {
      id: "ai-output",
      question: "Что я получаю в конце AI SEO?",
      answer:
        "Набор запросов и его базовый срез, переписанные страницы с разметкой и отчёт, который сравнивает ответы до и после — плюс что публиковать дальше.",
    },
    {
      id: "seo-measure",
      question: "Как измеряется результат SEO?",
      answer:
        "По страницам, которые должны получать визит: индексация, позиции по собранным запросам и органические визиты на эти страницы. Рост блога, который не доходит до коммерческой страницы, результатом не считается.",
    },
    {
      id: "seo-output",
      question: "Что я получаю в конце SEO?",
      answer:
        "Карту спроса, технические исправления, страницы, которые переписали или добавили, и запись того, что изменилось в индексации и позициях относительно старта.",
    },
  ],
  ar: [
    {
      id: "ai-vs-seo",
      question: "ما هو AI SEO وكيف يختلف عن SEO؟",
      answer:
        "كلاهما يقوم على الأساس نفسه: البنية، والترميز، وجودة المحتوى. SEO يطلب ترتيبًا في النتائج. AI SEO يطلب أن يُقتبس عملك، وهذا يحتاج إلى حقائق لا تحتمل التأويل، ومصادر يستطيع المساعد نسبتها، وصفحات مبنية حول أسئلة حقيقية.",
    },
    {
      id: "timeline",
      question: "متى تظهر النتائج؟",
      answer:
        "الإصلاحات التقنية تُلتقط خلال أسابيع. البنية والمحتوى المبنيان على الطلب يظهران عادة خلال ثلاثة إلى ستة أشهر، بحسب السوق ونقطة البداية.",
    },
    {
      id: "cost",
      question: "كيف تُحسب تكلفة العمل؟",
      answer:
        "بحسب المراحل التي يحتاجها العمل فعلًا. التوثيق يثبت ما هو داخل النطاق، لذلك تُتفق التكلفة قبل البدء لا أثناء التنفيذ.",
    },
    {
      id: "markets",
      question: "هل تعملون مع عملاء في أي سوق؟",
      answer:
        "نعم. مقرّنا في دبي، الإمارات، ونعمل مع العملاء حول العالم. العمل عن بُعد. المهم هو السوق الذي يجب أن تربحه الصفحات، لا مكان جلوس العميل.",
    },
    {
      id: "start",
      question: "من أين يبدأ التعاون؟",
      answer:
        "من المشكلة لا من اسم الخدمة. أخبرنا بما لا يعمل، ونقول إن كان الجواب SEO أو AI SEO أو الاثنين، وممّ يتكون العمل، وكيف نقيس النتيجة.",
    },
    {
      id: "ai-show",
      question: "متى يظهر أثر AI SEO؟",
      answer:
        "أسابيع إذا كانت الصفحة تجيب عن سؤال لا يجيب عنه أحد بوضوح. أشهر إذا كان الموضوع تنافسيًا. تحديثات النماذج تضيف تأخيرها الخاص، لذلك نُسجّل خط الأساس قبل أن يبدأ العمل.",
    },
    {
      id: "ai-measure",
      question: "كيف تُقاس نتيجة AI SEO؟",
      answer:
        "بالاقتباس، على مجموعة ثابتة من الأسئلة تُشغَّل قبل العمل وبعده: كم مرة يذكر المساعدون النشاط في الأسئلة التي يجب أن يملكها، وماذا يقولون، وأي الصفحات يقتبسون.",
    },
    {
      id: "ai-output",
      question: "ماذا أستلم في نهاية AI SEO؟",
      answer:
        "مجموعة الأسئلة وخط أساسها، والصفحات المعاد كتابتها مع بياناتها المنظمة، وتقريرًا يقارن الإجابات قبل وبعد — مع ما ينبغي نشره بعد ذلك.",
    },
    {
      id: "seo-measure",
      question: "كيف تُقاس نتيجة SEO؟",
      answer:
        "بحركة الصفحات التي يجب أن تربح الزيارة: الفهرسة، والترتيب للاستعلامات المخططة، والزيارات العضوية إلى تلك الصفحات. ارتفاع زيارات المدونة الذي لا يصل إلى صفحة تجارية ليس النتيجة.",
    },
    {
      id: "seo-output",
      question: "ماذا أستلم في نهاية عمل SEO؟",
      answer:
        "خريطة للطلب، والإصلاحات التقنية، والصفحات التي أُعيدت كتابتها أو أُضيفت، وسجلًا بما تغيّر في الفهرسة والترتيب مقارنة بخط الأساس.",
    },
  ],
};

export function getFaqs(locale: AppLocale, ids?: string[]) {
  const items = faqs[locale];

  if (!ids) {
    return items;
  }

  return ids.flatMap((id) => {
    const item = items.find((entry) => entry.id === id);
    return item ? [item] : [];
  });
}
