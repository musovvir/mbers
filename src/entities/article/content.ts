import type { AppLocale } from "@/i18n/routing";
import type { ServiceSlug } from "@/entities/service/content";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  minutes: number;
  service: ServiceSlug;
  blocks: ArticleBlock[];
};

const articles: Record<AppLocale, Article[]> = {
  en: [
    {
      slug: "what-ai-seo-is-called",
      title: "AI SEO: what it covers and what it is called",
      description:
        "Answer engine optimisation, generative engine optimisation, LLM SEO — one discipline under several labels, and what the work involves.",
      excerpt:
        "One discipline is sold under four labels. The work underneath is the same: be a source an assistant can quote.",
      publishedAt: "2026-09-02",
      minutes: 11,
      service: "ai-seo",
      blocks: [
        {
          type: "p",
          text: "Answer engine optimisation, generative engine optimisation, LLM SEO, AI SEO. The labels arrived faster than the work did. They describe one job: making a company a source that an assistant can read, understand and quote when someone asks a question the company should own.",
        },
        {
          type: "h2",
          text: "What changes, compared with classic SEO",
        },
        {
          type: "p",
          text: "Classic SEO asks a results page to rank a URL. AI SEO asks a model to use a passage. A model will not lift a slogan, and it will not invent a precise fact you never wrote down. It quotes a sentence that already answers the question, on a page whose entity is unambiguous.",
        },
        {
          type: "ul",
          items: [
            "A definition of the company that does not depend on the reader to interpret it.",
            "Structured data that states what the page is.",
            "One self-contained answer per question you want to be cited for.",
            "A fixed set of prompts, run before the work and after it.",
          ],
        },
        {
          type: "h2",
          text: "What the name does not change",
        },
        {
          type: "p",
          text: "Crawlability, duplication and thin pages still matter, because a model cannot cite what it cannot retrieve. AI SEO sits on the same foundation as SEO. It adds a stricter demand: the sentence has to be liftable, and the source has to be attributable.",
        },
      ],
    },
    {
      slug: "redesigns-and-rankings",
      title: "Why a redesign usually costs you traffic",
      description:
        "Rankings live on URLs, headings and internal links. A visual refresh that ignores them restarts the search work.",
      excerpt:
        "A new look does not keep the rankings. The URLs, the headings and the internal links do.",
      publishedAt: "2026-08-12",
      minutes: 7,
      service: "seo",
      blocks: [
        {
          type: "p",
          text: "A redesign is often commissioned as a visual project. Search does not rank the visual. It ranks URLs, the words in the titles and headings, the internal links between them, and whether one page still answers the query it used to answer.",
        },
        {
          type: "h2",
          text: "What gets thrown away",
        },
        {
          type: "ul",
          items: [
            "URLs change, and the old addresses are not redirected to the page that now owns the query.",
            "Headings are rewritten for tone, and the query leaves the page.",
            "Internal links are rebuilt around the new menu, and the commercial pages lose the paths that used to point at them.",
            "Several URLs start answering the same query, and none of them is canonical.",
          ],
        },
        {
          type: "p",
          text: "The traffic drop shows up weeks later, which is why it gets blamed on the algorithm. The fix is to treat the existing rankings as an inventory before anyone moves a URL. If a page earns a visit, the redesign has to say where that visit goes.",
        },
      ],
    },
    {
      slug: "category-pages-follow-demand",
      title: "Category pages should follow demand, not your product tree",
      description:
        "How search demand reorders a catalogue, and what that does to the pages that actually sell.",
      excerpt:
        "If categories follow the internal tree, the blog collects the demand the product pages should have owned.",
      publishedAt: "2026-07-18",
      minutes: 8,
      service: "seo",
      blocks: [
        {
          type: "p",
          text: "Catalogues are usually organised the way the business thinks: by brand, by department, by the way the warehouse is laid out. People search by the job they are trying to do. When those two trees disagree, the query has nowhere commercial to land, and a blog post takes it.",
        },
        {
          type: "h2",
          text: "What to rebuild",
        },
        {
          type: "p",
          text: "Group the queries by intent first. Assign each group to one page. If the current category does not match a group, it should not be the URL that tries to rank for it. Create the page the demand implies, or merge the pages that are splitting one query.",
        },
        {
          type: "p",
          text: "Then point internal links at that page from the posts that used to rank instead. The blog can explain. It should not be the only URL that answers a query with commercial intent.",
        },
      ],
    },
    {
      slug: "what-we-write-down-first",
      title: "What we write down before any of the work starts",
      description:
        "The document that fixes scope, sequence and how the result gets measured — and what happens when it is skipped.",
      excerpt:
        "Scope, sequence and the measure of the result are written down before the work, not reconstructed during it.",
      publishedAt: "2026-06-20",
      minutes: 5,
      service: "seo",
      blocks: [
        {
          type: "p",
          text: "Most engagements go wrong in the gap between a conversation and the first change on a page. Someone remembers the goal one way, someone else starts a different task, and the result has nothing it can be compared with.",
        },
        {
          type: "h2",
          text: "The document has four parts",
        },
        {
          type: "ul",
          items: [
            "The problem, in the client's words and in ours.",
            "The work that is in, and the work that is out.",
            "The order: what has to exist before the next step.",
            "The measure: rankings, visits to specific pages, or citations on a fixed prompt set.",
          ],
        },
        {
          type: "p",
          text: "If the problem is not clear enough to write down, the first stage is an audit, not implementation. The document is updated as the work moves. It is not a proposal that gets forgotten after the kickoff.",
        },
      ],
    },
    {
      slug: "check-whether-assistants-quote-you",
      title: "How to check whether assistants quote you",
      description:
        "A short routine for testing what assistants say about your market, and what they cite.",
      excerpt:
        "Pick the questions you should own, ask them before the work, and keep the answers.",
      publishedAt: "2026-05-22",
      minutes: 9,
      service: "ai-seo",
      blocks: [
        {
          type: "p",
          text: "A single lucky screenshot is not a measurement. Assistants vary the wording, and a model update moves the answer. What holds still is a list of questions you chose in advance.",
        },
        {
          type: "h2",
          text: "A routine that fits on one page",
        },
        {
          type: "ul",
          items: [
            "Write 15 to 30 questions a buyer would actually ask, including the ones where a competitor should not be the only name.",
            "Run them in the assistants your buyers use. Save the answer and every cited URL.",
            "Mark whether you are named, whether the description is accurate, and whether the citation is your page.",
            "Repeat the same list after the work. Do not add flattering questions at the end.",
          ],
        },
        {
          type: "p",
          text: "If you are absent, the next page to write is the one that answers the question in a single passage, with the entity stated in plain language and marked up. Then run the list again.",
        },
      ],
    },
    {
      slug: "technical-seo-worth-doing-first",
      title: "Technical SEO that is worth doing first",
      description:
        "The fixes that pay back in weeks: crawlability, speed on real devices, and one canonical version of every page.",
      excerpt:
        "Before new topics, make sure the pages you already have can be crawled, indexed and told apart.",
      publishedAt: "2026-05-08",
      minutes: 6,
      service: "seo",
      blocks: [
        {
          type: "p",
          text: "A long technical audit is easy to commission and hard to finish. The fixes that change indexation are fewer than the report suggests. Do those first. The rest can wait until the pages that should rank are actually eligible.",
        },
        {
          type: "ul",
          items: [
            "Important URLs return 200, and the ones that should not be indexed say so.",
            "Each query has one canonical URL. Parameters, trailing copies and http duplicates point at it.",
            "Internal links reach the commercial pages in a few clicks from the pages that already have authority.",
            "The page is usable on a mid-range phone. A lab score that ignores that device is not the constraint.",
          ],
        },
        {
          type: "p",
          text: "These show up in weeks, which is why they come before a six-month content plan. A content plan on a site that cannot canonicalise itself spends the months repairing the same pages twice.",
        },
      ],
    },
  ],
  ru: [
    {
      slug: "what-ai-seo-is-called",
      title: "AI SEO: что входит в работу и как это называют",
      description:
        "Оптимизация под ответы, под генеративные системы, LLM SEO — одна дисциплина под несколькими названиями и что в неё входит.",
      excerpt:
        "Одну дисциплину продают под четырьмя названиями. Под ними одна работа: стать источником, который ассистент может процитировать.",
      publishedAt: "2026-09-02",
      minutes: 11,
      service: "ai-seo",
      blocks: [
        {
          type: "p",
          text: "Оптимизация под ответы, под генеративные системы, LLM SEO, AI SEO. Названия появились быстрее, чем сама работа. Они описывают одну задачу: сделать компанию источником, который ассистент может прочитать, понять и процитировать, когда человек задаёт вопрос, который компания должна закрывать.",
        },
        {
          type: "h2",
          text: "Что меняется по сравнению с обычным SEO",
        },
        {
          type: "p",
          text: "Обычное SEO просит страницу результатов поставить URL. AI SEO просит модель использовать фрагмент. Модель не поднимет слоган и не выдумает точный факт, которого вы не записали. Она цитирует предложение, которое уже отвечает на вопрос, на странице с однозначной сущностью.",
        },
        {
          type: "ul",
          items: [
            "Определение компании, которое не нужно додумывать.",
            "Разметка, которая говорит, что это за страница.",
            "Один самодостаточный ответ на каждый вопрос, по которому вас должны цитировать.",
            "Фиксированный набор запросов до работы и после.",
          ],
        },
        {
          type: "h2",
          text: "Что название не меняет",
        },
        {
          type: "p",
          text: "Обход, дубли и пустые страницы по-прежнему важны: модель не процитирует то, что не может достать. AI SEO стоит на той же основе, что и SEO. Он добавляет более жёсткое требование: предложение должно подниматься целиком, а источник — указываться.",
        },
      ],
    },
    {
      slug: "redesigns-and-rankings",
      title: "Почему редизайн обычно стоит вам трафика",
      description:
        "Позиции живут на адресах, заголовках и внутренних ссылках. Визуальное обновление, которое их не учитывает, начинает поисковую работу заново.",
      excerpt:
        "Новый вид не сохраняет позиции. Их сохраняют адреса, заголовки и внутренние ссылки.",
      publishedAt: "2026-08-12",
      minutes: 7,
      service: "seo",
      blocks: [
        {
          type: "p",
          text: "Редизайн часто заказывают как визуальный проект. Поиск не ранжирует картинку. Он ранжирует адреса, слова в title и заголовках, внутренние ссылки между ними и то, отвечает ли страница на тот же запрос, что раньше.",
        },
        {
          type: "h2",
          text: "Что выбрасывают",
        },
        {
          type: "ul",
          items: [
            "Адреса меняются, а старые не перенаправляются на страницу, которая теперь владеет запросом.",
            "Заголовки переписывают ради тона, и запрос уходит со страницы.",
            "Внутренние ссылки собирают вокруг нового меню, и коммерческие страницы теряют пути, которые на них вели.",
            "Несколько адресов начинают отвечать на один запрос, и ни один не канонический.",
          ],
        },
        {
          type: "p",
          text: "Падение трафика видно через недели, поэтому его списывают на алгоритм. Исправление — снять инвентаризацию текущих позиций до того, как кто-то перенесёт адрес. Если страница получает визит, редизайн должен сказать, куда этот визит теперь идёт.",
        },
      ],
    },
    {
      slug: "category-pages-follow-demand",
      title: "Страницы категорий должны следовать спросу, а не дереву товаров",
      description:
        "Как поисковый спрос перестраивает каталог и что это делает со страницами, которые реально продают.",
      excerpt:
        "Если категории повторяют внутреннее дерево, блог забирает спрос, который должны были закрыть товарные страницы.",
      publishedAt: "2026-07-18",
      minutes: 8,
      service: "seo",
      blocks: [
        {
          type: "p",
          text: "Каталоги обычно устроены так, как думает бизнес: по бренду, по отделу, по складу. Люди ищут по задаче, которую хотят решить. Когда эти два дерева не совпадают, запросу некуда сесть на коммерческую страницу, и его забирает статья.",
        },
        {
          type: "h2",
          text: "Что перестраивать",
        },
        {
          type: "p",
          text: "Сначала сгруппируйте запросы по намерению. Каждую группу назначьте одной странице. Если текущая категория не совпадает с группой, она не должна быть адресом, который пытается ранжироваться по ней. Создайте страницу, которую подразумевает спрос, или слейте страницы, которые делят один запрос.",
        },
        {
          type: "p",
          text: "Потом направьте на эту страницу внутренние ссылки из материалов, которые ранжировались вместо неё. Блог может объяснять. Он не должен быть единственным адресом, который отвечает на запрос с коммерческим намерением.",
        },
      ],
    },
    {
      slug: "what-we-write-down-first",
      title: "Что мы записываем до начала работы",
      description:
        "Документ, который фиксирует состав, порядок и способ измерить результат — и что происходит, если его пропускают.",
      excerpt:
        "Состав, порядок и способ измерить результат записываются до работы, а не восстанавливаются по ходу.",
      publishedAt: "2026-06-20",
      minutes: 5,
      service: "seo",
      blocks: [
        {
          type: "p",
          text: "Большинство работ ломается в зазоре между разговором и первым изменением на странице. Кто-то помнит цель одним образом, кто-то начинает другую задачу, и результат не с чем сравнить.",
        },
        {
          type: "h2",
          text: "В документе четыре части",
        },
        {
          type: "ul",
          items: [
            "Проблема словами клиента и нашими.",
            "Что входит в работу и что не входит.",
            "Порядок: что должно существовать до следующего шага.",
            "Мера: позиции, визиты на конкретные страницы или цитаты по фиксированному набору запросов.",
          ],
        },
        {
          type: "p",
          text: "Если проблему нельзя записать, первый этап — аудит, а не внедрение. Документ обновляется по ходу. Это не предложение, которое забывают после старта.",
        },
      ],
    },
    {
      slug: "check-whether-assistants-quote-you",
      title: "Как проверить, цитируют ли вас ассистенты",
      description:
        "Короткий порядок, чтобы увидеть, что ассистенты говорят о вашем рынке и что цитируют.",
      excerpt:
        "Выберите вопросы, которые вы должны закрывать, задайте их до работы и сохраните ответы.",
      publishedAt: "2026-05-22",
      minutes: 9,
      service: "ai-seo",
      blocks: [
        {
          type: "p",
          text: "Один удачный скриншот — не измерение. Ассистенты меняют формулировку, обновление модели двигает ответ. Неподвижным остаётся список вопросов, выбранный заранее.",
        },
        {
          type: "h2",
          text: "Порядок на одну страницу",
        },
        {
          type: "ul",
          items: [
            "Запишите 15–30 вопросов, которые реально задаст покупатель, включая те, где конкурент не должен быть единственным именем.",
            "Прогоните их в ассистентах, которыми пользуются ваши покупатели. Сохраните ответ и каждый процитированный адрес.",
            "Отметьте, назвали ли вас, точное ли описание и ваша ли страница в цитате.",
            "Повторите тот же список после работы. Не добавляйте в конце удобные вопросы.",
          ],
        },
        {
          type: "p",
          text: "Если вас нет в ответе, следующая страница — та, что отвечает на вопрос одним фрагментом, с сущностью простым языком и разметкой. Потом список прогоняется снова.",
        },
      ],
    },
    {
      slug: "technical-seo-worth-doing-first",
      title: "Техническое SEO, которое стоит делать первым",
      description:
        "Исправления, которые окупаются за недели: обход, скорость на реальных устройствах и одна каноническая версия каждой страницы.",
      excerpt:
        "Прежде чем браться за новые темы, убедитесь, что текущие страницы можно обойти, проиндексировать и отличить друг от друга.",
      publishedAt: "2026-05-08",
      minutes: 6,
      service: "seo",
      blocks: [
        {
          type: "p",
          text: "Длинный технический аудит легко заказать и трудно доделать. Исправлений, которые меняют индексацию, меньше, чем обещает отчёт. Сначала они. Остальное может подождать, пока страницы, которые должны ранжироваться, вообще имеют на это право.",
        },
        {
          type: "ul",
          items: [
            "Важные адреса отдают 200, а те, что не должны индексироваться, так и говорят.",
            "У каждого запроса один канонический адрес. Параметры, копии со слэшем и http-дубли указывают на него.",
            "Внутренние ссылки доводят до коммерческих страниц за несколько кликов от страниц, у которых уже есть вес.",
            "Страница удобна на среднем телефоне. Лабораторная оценка, которая это устройство игнорирует, не является ограничением.",
          ],
        },
        {
          type: "p",
          text: "Это видно за недели, поэтому оно идёт раньше полугодового контент-плана. План на сайте, который не умеет выбрать канонический адрес, тратит месяцы на починку одних и тех же страниц дважды.",
        },
      ],
    },
  ],
  ar: [
    {
      slug: "what-ai-seo-is-called",
      title: "AI SEO: ماذا يشمل وكيف يُسمّى",
      description:
        "تحسين محركات الإجابة، وتحسين المحركات التوليدية، وSEO لنماذج اللغة — تخصص واحد تحت عدة أسماء، وما الذي يتضمنه العمل.",
      excerpt:
        "تخصص واحد يُباع تحت أربعة أسماء. العمل تحته واحد: أن تكون مصدرًا يستطيع المساعد اقتباسه.",
      publishedAt: "2026-09-02",
      minutes: 11,
      service: "ai-seo",
      blocks: [
        {
          type: "p",
          text: "تحسين محركات الإجابة، وتحسين المحركات التوليدية، وSEO لنماذج اللغة، وAI SEO. وصلت الأسماء أسرع من العمل. كلها تصف مهمة واحدة: جعل الشركة مصدرًا يستطيع المساعد قراءته وفهمه واقتباسه حين يسأل شخص سؤالًا يجب أن تملكه الشركة.",
        },
        {
          type: "h2",
          text: "ما الذي يتغير مقارنة بـ SEO المعتاد",
        },
        {
          type: "p",
          text: "SEO المعتاد يطلب من صفحة النتائج ترتيب عنوان. AI SEO يطلب من النموذج استخدام مقطع. النموذج لن يرفع شعارًا، ولن يخترع حقيقة دقيقة لم تكتبها. يقتبس جملة تجيب عن السؤال أصلًا، على صفحة كيانها لا يحتمل التأويل.",
        },
        {
          type: "ul",
          items: [
            "تعريف للشركة لا يحتاج القارئ إلى تفسيره.",
            "بيانات منظمة تقول ما هي الصفحة.",
            "جواب واحد مكتفٍ بذاته لكل سؤال تريد أن تُقتبس فيه.",
            "مجموعة ثابتة من الأسئلة تُشغَّل قبل العمل وبعده.",
          ],
        },
        {
          type: "h2",
          text: "ما الذي لا يغيّره الاسم",
        },
        {
          type: "p",
          text: "قابلية الزحف والتكرار والصفحات الضعيفة ما زالت مهمة، لأن النموذج لا يقتبس ما لا يستطيع استرجاعه. AI SEO يقف على أساس SEO نفسه. يضيف شرطًا أصرم: الجملة يجب أن تُرفع كما هي، والمصدر يجب أن يُنسب.",
        },
      ],
    },
    {
      slug: "redesigns-and-rankings",
      title: "لماذا تكلّفك إعادة التصميم الزيارات عادة",
      description:
        "الترتيب يعيش على العناوين والترويسات والروابط الداخلية. تجديد بصري يتجاهلها يعيد عمل البحث من البداية.",
      excerpt:
        "المظهر الجديد لا يحفظ الترتيب. العناوين والترويسات والروابط الداخلية هي التي تحفظه.",
      publishedAt: "2026-08-12",
      minutes: 7,
      service: "seo",
      blocks: [
        {
          type: "p",
          text: "غالبًا ما تُطلب إعادة التصميم مشروعًا بصريًا. البحث لا يرتّب الشكل. يرتّب العناوين، والكلمات في العناوين والترويسات، والروابط الداخلية بينها، وهل ما زالت الصفحة تجيب عن الاستعلام الذي كانت تجيب عنه.",
        },
        {
          type: "h2",
          text: "ما الذي يُرمى",
        },
        {
          type: "ul",
          items: [
            "تتغير العناوين، والقديمة لا تُحوَّل إلى الصفحة التي تملك الاستعلام الآن.",
            "تُعاد كتابة الترويسات من أجل النبرة، فيغادر الاستعلام الصفحة.",
            "تُعاد الروابط الداخلية حول القائمة الجديدة، فتفقد الصفحات التجارية المسارات التي كانت تشير إليها.",
            "عدة عناوين تبدأ بالإجابة عن الاستعلام نفسه، ولا أحد منها معياري.",
          ],
        },
        {
          type: "p",
          text: "هبوط الزيارات يظهر بعد أسابيع، فيُلقى اللوم على الخوارزمية. الإصلاح أن تُجرد الترتيبات الحالية قبل أن ينقل أحد عنوانًا. إذا كانت صفحة تربح زيارة، فعلى إعادة التصميم أن تقول إلى أين تذهب هذه الزيارة.",
        },
      ],
    },
    {
      slug: "category-pages-follow-demand",
      title: "صفحات التصنيف يجب أن تتبع الطلب لا شجرة المنتجات",
      description: "كيف يعيد طلب البحث ترتيب الكتالوج، وماذا يفعل ذلك بالصفحات التي تبيع فعلًا.",
      excerpt: "إذا تبعت التصنيفات الشجرة الداخلية، جمعت المدونة الطلب الذي كان يجب أن تملكه صفحات المنتج.",
      publishedAt: "2026-07-18",
      minutes: 8,
      service: "seo",
      blocks: [
        {
          type: "p",
          text: "الكتالوجات تُرتَّب عادة كما يفكر النشاط: حسب العلامة، أو القسم، أو المخزن. الناس يبحثون حسب المهمة التي يريدون إنجازها. حين تختلف الشجرتان، لا يجد الاستعلام صفحة تجارية يهبط عليها، فتأخذه مقالة.",
        },
        {
          type: "h2",
          text: "ما الذي يُعاد بناؤه",
        },
        {
          type: "p",
          text: "اجمع الاستعلامات حسب النية أولًا. أسند كل مجموعة إلى صفحة واحدة. إذا لم يطابق التصنيف الحالي مجموعة، فلا ينبغي أن يكون العنوان الذي يحاول الترتيب لها. أنشئ الصفحة التي يقتضيها الطلب، أو ادمج الصفحات التي تقسم استعلامًا واحدًا.",
        },
        {
          type: "p",
          text: "ثم وجّه الروابط الداخلية إلى هذه الصفحة من المواد التي كانت تترتّب بدلًا منها. المدونة تستطيع أن تشرح. لا ينبغي أن تكون العنوان الوحيد الذي يجيب عن استعلام بنيّة تجارية.",
        },
      ],
    },
    {
      slug: "what-we-write-down-first",
      title: "ما الذي نكتبه قبل أن يبدأ أي عمل",
      description: "الوثيقة التي تثبّت النطاق والتسلسل وطريقة قياس النتيجة — وما يحدث حين تُتخطى.",
      excerpt: "النطاق والتسلسل ومقياس النتيجة تُكتب قبل العمل، لا تُستعاد أثناءه.",
      publishedAt: "2026-06-20",
      minutes: 5,
      service: "seo",
      blocks: [
        {
          type: "p",
          text: "أكثر التعاونات تتعثر في الفجوة بين الحديث وأول تغيير على صفحة. شخص يتذكر الهدف بطريقة، وآخر يبدأ مهمة مختلفة، والنتيجة لا شيء تُقارَن به.",
        },
        {
          type: "h2",
          text: "في الوثيقة أربعة أجزاء",
        },
        {
          type: "ul",
          items: [
            "المشكلة بكلام العميل وبكلامنا.",
            "ما هو داخل العمل وما هو خارجه.",
            "الترتيب: ما الذي يجب أن يوجد قبل الخطوة التالية.",
            "المقياس: الترتيب، أو زيارات صفحات محددة، أو اقتباسات على مجموعة أسئلة ثابتة.",
          ],
        },
        {
          type: "p",
          text: "إذا لم تكن المشكلة واضحة بما يكفي لتُكتب، فالمرحلة الأولى تدقيق لا تنفيذ. الوثيقة تُحدَّث مع تقدم العمل. ليست عرضًا يُنسى بعد الانطلاق.",
        },
      ],
    },
    {
      slug: "check-whether-assistants-quote-you",
      title: "كيف تتحقق إن كان المساعدون يقتبسونك",
      description: "روتين قصير لاختبار ما يقوله المساعدون عن سوقك، وماذا يقتبسون.",
      excerpt: "اختر الأسئلة التي يجب أن تملكها، واسألها قبل العمل، واحتفظ بالإجابات.",
      publishedAt: "2026-05-22",
      minutes: 9,
      service: "ai-seo",
      blocks: [
        {
          type: "p",
          text: "لقطة شاشة موفقة واحدة ليست قياسًا. المساعدون يغيّرون الصياغة، وتحديث النموذج يحرّك الإجابة. ما يبقى ثابتًا هو قائمة أسئلة اخترتها مسبقًا.",
        },
        {
          type: "h2",
          text: "روتين يسع صفحة واحدة",
        },
        {
          type: "ul",
          items: [
            "اكتب 15 إلى 30 سؤالًا يسأله مشترٍ فعلًا، بما فيها الأسئلة التي لا ينبغي أن يكون المنافس الاسم الوحيد فيها.",
            "شغّلها في المساعدين الذين يستخدمهم المشترون. احفظ الإجابة وكل عنوان مقتبس.",
            "علّم إن ذُكرت، وإن كان الوصف دقيقًا، وإن كان الاقتباس صفحتك.",
            "كرر القائمة نفسها بعد العمل. لا تضف في النهاية أسئلة مجاملة.",
          ],
        },
        {
          type: "p",
          text: "إذا كنت غائبًا، فالصفحة التالية هي التي تجيب عن السؤال في مقطع واحد، مع كيان بصياغة مباشرة وترميز. ثم أعد تشغيل القائمة.",
        },
      ],
    },
    {
      slug: "technical-seo-worth-doing-first",
      title: "SEO التقني الذي يستحق أن يُنجز أولًا",
      description:
        "الإصلاحات التي ترجع خلال أسابيع: قابلية الزحف، والسرعة على أجهزة حقيقية، ونسخة معيارية واحدة لكل صفحة.",
      excerpt: "قبل الموضوعات الجديدة، تأكد أن الصفحات الموجودة يمكن زحفها وفهرستها وتمييزها.",
      publishedAt: "2026-05-08",
      minutes: 6,
      service: "seo",
      blocks: [
        {
          type: "p",
          text: "من السهل طلب تدقيق تقني طويل ومن الصعب إنهاؤه. الإصلاحات التي تغيّر الفهرسة أقل مما يوحي به التقرير. ابدأ بها. الباقي يستطيع الانتظار حتى تصبح الصفحات التي يجب أن تترتّب مؤهلة فعلًا.",
        },
        {
          type: "ul",
          items: [
            "العناوين المهمة تعيد 200، والتي لا يجب فهرستها تقول ذلك.",
            "لكل استعلام عنوان معياري واحد. المعاملات والنسخ والازدواج على http تشير إليه.",
            "الروابط الداخلية تصل إلى الصفحات التجارية في نقرات قليلة من الصفحات التي تملك سلطة أصلًا.",
            "الصفحة قابلة للاستخدام على هاتف متوسط. درجة مخبرية تتجاهل هذا الجهاز ليست القيد.",
          ],
        },
        {
          type: "p",
          text: "هذه تظهر خلال أسابيع، لذلك تسبق خطة محتوى لستة أشهر. خطة محتوى على موقع لا يستطيع تعيين عنوان معياري تقضي الأشهر في إصلاح الصفحات نفسها مرتين.",
        },
      ],
    },
  ],
};

function assertArticles() {
  const base = articles.en.map((item) => item.slug);
  for (const locale of ["ru", "ar"] as const) {
    const slugs = articles[locale].map((item) => item.slug);
    if (slugs.join() !== base.join()) {
      throw new Error(`Article slugs differ for ${locale}`);
    }
  }
}

assertArticles();

export function getArticles(locale: AppLocale) {
  return [...articles[locale]].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getArticle(locale: AppLocale, slug: string) {
  return articles[locale].find((item) => item.slug === slug);
}

export function getArticleSlugs() {
  return articles.en.map((item) => item.slug);
}
