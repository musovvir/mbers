import type { AppLocale } from "@/i18n/routing";

export type AboutContent = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  sections: { title: string; text: string }[];
  teamTitle: string;
  team: { name: string; role: string }[];
  factsTitle: string;
  facts: { label: string; value: string }[];
  ctaTitle: string;
  ctaText: string;
};

const team = [
  { name: "Bers Mizaev", role: { en: "Company owner", ru: "Владелец", ar: "مالك الشركة" } },
  { name: "Mukhammad Mizaev", role: { en: "Project manager", ru: "Руководитель проектов", ar: "مدير المشاريع" } },
  { name: "Dmitriy Skudin", role: { en: "HR specialist", ru: "HR-специалист", ar: "أخصائي موارد بشرية" } },
  { name: "Sergii Stankevich", role: { en: "Senior developer", ru: "Старший разработчик", ar: "مطوّر أول" } },
  { name: "Husniddin Ahmadjanov", role: { en: "Senior developer", ru: "Старший разработчик", ar: "مطوّر أول" } },
  { name: "Elena Petrova", role: { en: "Web designer", ru: "Веб-дизайнер", ar: "مصممة ويب" } },
  { name: "Karim El Sayed", role: { en: "SEO / AI SEO specialist", ru: "Специалист по SEO и AI SEO", ar: "أخصائي SEO وAI SEO" } },
  { name: "Ravi Mehta", role: { en: "Senior developer", ru: "Старший разработчик", ar: "مطوّر أول" } },
];

const about: Record<AppLocale, Omit<AboutContent, "team"> & { team: { name: string; role: string }[] }> = {
  en: {
    metaTitle: "About",
    metaDescription:
      "MBers Laboratory is a digital consulting company. We find the search problem and do the SEO and AI SEO that answers it.",
    title: "A company that stays with both halves of the work.",
    lead: "MBers Laboratory is a digital consulting company. We identify the business problem, decide whether the answer is SEO, AI SEO or both, and do that work ourselves.",
    sections: [
      {
        title: "Found, not just described.",
        text: "Where the recommendation and the implementation are split across vendors, search decisions get bolted on afterwards. We keep them in the same engagement, so the pages, the markup and the measurement are decided together.",
      },
      {
        title: "The market is the constraint.",
        text: "Delivery is remote. A client's location does not limit the work. The limit is the market the pages have to win, and whether the starting point can support that.",
      },
    ],
    teamTitle: "The team",
    team: team.map((person) => ({ name: person.name, role: person.role.en })),
    factsTitle: "How the work is delivered",
    facts: [
      { label: "Delivery", value: "Remote" },
      { label: "Languages", value: "English, Russian" },
      { label: "Registration", value: "Legal entity — pending" },
    ],
    ctaTitle: "Start from the problem, not the service",
    ctaText: "Tell us what is not working. We'll say which of the two kinds of work answers it.",
  },
  ru: {
    metaTitle: "О компании",
    metaDescription:
      "MBers Laboratory — компания цифрового консалтинга. Находим проблему в поиске и делаем SEO и AI SEO, которые её закрывают.",
    title: "Компания, которая держит обе части работы.",
    lead: "MBers Laboratory — компания цифрового консалтинга. Мы находим бизнес-проблему, решаем, ответ это SEO, AI SEO или оба, и делаем эту работу сами.",
    sections: [
      {
        title: "Чтобы находили, а не только описывали.",
        text: "Когда рекомендацию и внедрение делят между подрядчиками, решения по поиску прикручивают потом. Мы держим их в одной работе: страницы, разметка и способ измерения решаются вместе.",
      },
      {
        title: "Ограничение — рынок.",
        text: "Работа удалённая. Место клиента её не ограничивает. Ограничивает рынок, который страницы должны выиграть, и то, выдерживает ли это стартовая точка.",
      },
    ],
    teamTitle: "Команда",
    team: team.map((person) => ({ name: person.name, role: person.role.ru })),
    factsTitle: "Как устроена работа",
    facts: [
      { label: "Формат", value: "Удалённо" },
      { label: "Языки", value: "Английский, русский" },
      { label: "Регистрация", value: "Юрлицо — уточняется" },
    ],
    ctaTitle: "Начинаем с проблемы, не с услуги",
    ctaText: "Расскажите, что не работает. Скажем, какой из двух видов работы это закрывает.",
  },
  ar: {
    metaTitle: "من نحن",
    metaDescription:
      "MBers Laboratory شركة استشارات رقمية. نحدد مشكلة البحث وننفذ SEO وAI SEO اللذين يجيبان عنها.",
    title: "شركة تُبقي شطري العمل معًا.",
    lead: "MBers Laboratory شركة استشارات رقمية. نحدد مشكلة العمل، ونقرر إن كان الجواب SEO أو AI SEO أو الاثنين، وننفذ هذا العمل بأنفسنا.",
    sections: [
      {
        title: "لكي يُعثر عليك، لا لكي تُوصَف فقط.",
        text: "حين تنفصل التوصية عن التنفيذ بين جهات مختلفة، تُضاف قرارات البحث لاحقًا. نبقيها في تعاون واحد، فتُحسم الصفحات والترميز وطريقة القياس معًا.",
      },
      {
        title: "القيد هو السوق.",
        text: "التسليم عن بُعد. مكان العميل لا يحدّ العمل. الحد هو السوق الذي يجب أن تربحه الصفحات، وهل تتحمل نقطة البداية ذلك.",
      },
    ],
    teamTitle: "الفريق",
    team: team.map((person) => ({ name: person.name, role: person.role.ar })),
    factsTitle: "كيف يُسلَّم العمل",
    facts: [
      { label: "التسليم", value: "عن بُعد" },
      { label: "اللغات", value: "الإنجليزية، الروسية" },
      { label: "التسجيل", value: "الكيان القانوني — قيد التسجيل" },
    ],
    ctaTitle: "نبدأ من المشكلة لا من اسم الخدمة",
    ctaText: "أخبرنا بما لا يعمل. سنقول أي نوع من العملين يجيبه.",
  },
};

export function getAbout(locale: AppLocale) {
  return about[locale];
}
