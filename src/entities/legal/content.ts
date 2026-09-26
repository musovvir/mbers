import type { AppLocale } from "@/i18n/routing";

export type LegalSlug = "privacy-policy" | "terms-of-use";

export type LegalPage = {
  slug: LegalSlug;
  metaTitle: string;
  metaDescription: string;
  title: string;
  sections: { title: string; paragraphs: string[] }[];
};

const legal: Record<AppLocale, LegalPage[]> = {
  en: [
    {
      slug: "privacy-policy",
      metaTitle: "Privacy Policy",
      metaDescription: "What the enquiry form collects, why, and how to reach MBers Laboratory about it.",
      title: "Privacy Policy",
      sections: [
        {
          title: "Who this covers",
          paragraphs: [
            "This page describes how MBers Laboratory handles the details you send through the enquiry form. The legal entity is not registered yet, so this text is the working policy until that registration is in place.",
            "The contact address for privacy questions is hello@example.com.",
          ],
        },
        {
          title: "What the form collects",
          paragraphs: [
            "The form asks for your name, email, an optional phone number, and a description of the problem. It also stores the language of the page you sent it from, so the reply can come back in that language.",
            "A hidden field exists to catch automated submissions. If it is filled in, the message is discarded.",
          ],
        },
        {
          title: "Why it is collected",
          paragraphs: [
            "We use these details to reply to the enquiry and to decide whether the work is SEO, AI SEO, or both. We do not sell the details, and we do not use them for a mailing list.",
            "The message is delivered by email to the company inbox. Keep a copy of what you sent if you need a record.",
          ],
        },
        {
          title: "How long, and how to object",
          paragraphs: [
            "Enquiry mail is kept for as long as the conversation, and any later engagement, requires. You can ask for the message to be deleted by writing to hello@example.com.",
          ],
        },
      ],
    },
    {
      slug: "terms-of-use",
      metaTitle: "Terms of Use",
      metaDescription: "The terms for using the MBers Laboratory site and for sending an enquiry.",
      title: "Terms of Use",
      sections: [
        {
          title: "The site",
          paragraphs: [
            "This site describes the SEO and AI SEO work of MBers Laboratory. Reading it does not create an engagement. An engagement starts only when the scope, the sequence and the cost are written down and agreed.",
          ],
        },
        {
          title: "No promise of a ranking",
          paragraphs: [
            "Nothing on this site is a promise that a page will rank, or that an assistant will cite a brand. Search systems and models change. What we commit to is the work described in the document for that engagement, and the way the result will be measured.",
          ],
        },
        {
          title: "Enquiries",
          paragraphs: [
            "Sending the form is a request for a reply, not a contract. Do not include passwords, payment details or other people's personal data in the message.",
          ],
        },
        {
          title: "The text on this site",
          paragraphs: [
            "The writing, the structure and the visual system of this site belong to MBers Laboratory. You may quote a short passage with a link to the page. You may not republish a page as your own.",
          ],
        },
      ],
    },
  ],
  ru: [
    {
      slug: "privacy-policy",
      metaTitle: "Политика конфиденциальности",
      metaDescription: "Что собирает форма заявки, зачем, и как написать в MBers Laboratory по этому поводу.",
      title: "Политика конфиденциальности",
      sections: [
        {
          title: "О ком этот текст",
          paragraphs: [
            "Здесь описано, как MBers Laboratory обращается с данными, которые вы отправляете через форму. Юрлицо ещё не зарегистрировано, поэтому это рабочая редакция до регистрации.",
            "По вопросам этих данных пишите на hello@example.com.",
          ],
        },
        {
          title: "Что собирает форма",
          paragraphs: [
            "Форма просит имя, почту, необязательный телефон и описание проблемы. Сохраняется также язык страницы, с которой отправлена заявка, чтобы ответить на том же языке.",
            "Скрытое поле ловит автоматические отправки. Если оно заполнено, сообщение отбрасывается.",
          ],
        },
        {
          title: "Зачем это нужно",
          paragraphs: [
            "Эти данные нужны, чтобы ответить на заявку и понять, работа это по SEO, по AI SEO или по обоим. Мы не продаём данные и не добавляем адрес в рассылку.",
            "Сообщение уходит письмом на почту компании. Если нужна копия, сохраните текст у себя.",
          ],
        },
        {
          title: "Срок и удаление",
          paragraphs: [
            "Письмо хранится столько, сколько нужна переписка и, если она случится, дальнейшая работа. Удалить сообщение можно, написав на hello@example.com.",
          ],
        },
      ],
    },
    {
      slug: "terms-of-use",
      metaTitle: "Условия использования",
      metaDescription: "Условия использования сайта MBers Laboratory и отправки заявки.",
      title: "Условия использования",
      sections: [
        {
          title: "Сайт",
          paragraphs: [
            "Сайт описывает работу MBers Laboratory в SEO и AI SEO. Чтение не создаёт договорённости. Работа начинается, только когда состав, порядок и стоимость записаны и согласованы.",
          ],
        },
        {
          title: "Нет обещания позиции",
          paragraphs: [
            "Ничто на сайте не обещает, что страница займёт позицию или что ассистент процитирует бренд. Поисковые системы и модели меняются. Мы обязуемся сделать работу, которая описана в документе по этой задаче, и измерить результат так, как там записано.",
          ],
        },
        {
          title: "Заявки",
          paragraphs: [
            "Отправка формы — просьба ответить, а не договор. Не присылайте пароли, платёжные данные и персональные данные других людей.",
          ],
        },
        {
          title: "Тексты сайта",
          paragraphs: [
            "Тексты, структура и визуальная система сайта принадлежат MBers Laboratory. Короткий фрагмент можно процитировать со ссылкой на страницу. Публиковать страницу как свою нельзя.",
          ],
        },
      ],
    },
  ],
  ar: [
    {
      slug: "privacy-policy",
      metaTitle: "سياسة الخصوصية",
      metaDescription: "ما الذي تجمعه نموذج الطلب، ولماذا، وكيف تراسل MBers Laboratory بخصوصه.",
      title: "سياسة الخصوصية",
      sections: [
        {
          title: "من يشمله هذا النص",
          paragraphs: [
            "تصف هذه الصفحة كيف تتعامل MBers Laboratory مع البيانات التي ترسلها عبر النموذج. الكيان القانوني لم يُسجَّل بعد، لذلك هذا النص هو السياسة العاملة إلى أن يتم التسجيل.",
            "لأسئلة الخصوصية اكتب إلى hello@example.com.",
          ],
        },
        {
          title: "ما الذي يجمعه النموذج",
          paragraphs: [
            "يطلب النموذج الاسم والبريد ورقم هاتف اختياريًا ووصفًا للمشكلة. تُحفظ أيضًا لغة الصفحة التي أُرسل منها الطلب حتى يأتي الرد بتلك اللغة.",
            "يوجد حقل مخفي لالتقاط الإرسالات الآلية. إذا مُلئ، تُهمل الرسالة.",
          ],
        },
        {
          title: "لماذا تُجمع",
          paragraphs: [
            "نستخدم هذه البيانات للرد على الطلب ولتحديد إن كان العمل SEO أو AI SEO أو الاثنين. لا نبيع البيانات ولا نضيف العنوان إلى قائمة بريدية.",
            "تصل الرسالة بالبريد إلى صندوق الشركة. احتفظ بنسخة مما أرسلت إن كنت تحتاج سجلًا.",
          ],
        },
        {
          title: "المدة والاعتراض",
          paragraphs: [
            "تُحفظ رسالة الطلب طوال مدة المراسلة، وأي تعاون لاحق يقتضي ذلك. يمكنك طلب حذف الرسالة بالكتابة إلى hello@example.com.",
          ],
        },
      ],
    },
    {
      slug: "terms-of-use",
      metaTitle: "شروط الاستخدام",
      metaDescription: "شروط استخدام موقع MBers Laboratory وإرسال طلب.",
      title: "شروط الاستخدام",
      sections: [
        {
          title: "الموقع",
          paragraphs: [
            "يصف هذا الموقع عمل MBers Laboratory في SEO وAI SEO. قراءته لا تنشئ تعاونًا. يبدأ التعاون فقط حين يُكتب النطاق والتسلسل والتكلفة ويُتفق عليها.",
          ],
        },
        {
          title: "لا وعد بترتيب",
          paragraphs: [
            "لا شيء في هذا الموقع وعدٌ بأن صفحة ستحتل ترتيبًا، أو بأن مساعدًا سيقتبس علامة. أنظمة البحث والنماذج تتغير. ما نلتزم به هو العمل الموصوف في وثيقة ذلك التعاون، والطريقة التي ستُقاس بها النتيجة.",
          ],
        },
        {
          title: "الطلبات",
          paragraphs: [
            "إرسال النموذج طلبُ رد، لا عقد. لا تُضمّن كلمات مرور أو بيانات دفع أو بيانات شخصية لأشخاص آخرين.",
          ],
        },
        {
          title: "نصوص الموقع",
          paragraphs: [
            "الكتابة وبنية الموقع ونظامه البصري ملك MBers Laboratory. يمكنك اقتباس مقطع قصير مع رابط إلى الصفحة. لا يجوز إعادة نشر صفحة على أنها لك.",
          ],
        },
      ],
    },
  ],
};

export function getLegalPage(locale: AppLocale, slug: string) {
  return legal[locale].find((page) => page.slug === slug);
}
