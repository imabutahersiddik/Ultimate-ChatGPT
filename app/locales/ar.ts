import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const en: RequiredLocaleType = {
  WIP: "قريبًا...",
  Error: {
    Unauthorized:
      "لا يُسمح بالوصول غير المصرح به، يُرجى إدخال رمز الوصول في صفحة [المصادقة](/#/auth).",
  },
  Auth: {
    Title: "يحتاج رمز الوصول",
    Tips: "يرجى إدخال رمز الوصول أدناه",
    Input: "رمز الوصول",
    Confirm: "تأكيد",
    Later: "لاحقًا",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} رسائل`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} رسالة مع TheChatGPT`,
    Actions: {
      ChatList: "الانتقال إلى قائمة الدردشة",
      CompressedHistory: "ذاكرة تاريخ الدردشة المضغوطة",
      Export: "تصدير جميع الرسائل كـ Markdown",
      Copy: "نسخ",
      Stop: "توقف",
      Retry: "إعادة المحاولة",
      Delete: "حذف",
    },
    InputActions: {
      Stop: "توقف",
      ToBottom: "إلى آخر",
      Theme: {
        auto: "تلقائي",
        light: "سمة فاتحة",
        dark: "سمة داكنة",
      },
      Prompt: "تلميحات",
      Masks: "الأقنعة",
      Clear: "مسح السياق",
      Settings: "الإعدادات",
    },
    Rename: "إعادة تسمية الدردشة",
    Typing: "جارٍ الكتابة...",
    Input: (submitKey: string) => {
      var inputHints = `اضغط على ${submitKey} للإرسال`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "، Shift + Enter للتفاف";
      }
      return inputHints + "، / للبحث في التلميحات";
    },
    Send: "إرسال",
    Config: {
      Reset: "إعادة التعيين إلى الافتراضي",
      SaveAs: "حفظ كـ قناع",
    },
  },
  Export: {
    Title: "تصدير الرسائل",
    Copy: "نسخ الكل",
    Download: "تحميل",
    MessageFromYou: "رسالة منك",
    MessageFromChatGPT: "رسالة من ChatGPT",
    Share: "مشاركة على KiAsk Share",
    Format: {
      Title: "تنسيق التصدير",
      SubTitle: "Markdown أو صورة PNG",
    },
    IncludeContext: {
      Title: "تضمين السياق",
      SubTitle: "تصدير تلميحات السياق في القناع أم لا",
    },
    Steps: {
      Select: "تحديد",
      Preview: "معاينة",
    },
  },
  Select: {
    Search: "بحث",
    All: "تحديد الكل",
    Latest: "تحديد آخر",
    Clear: "مسح",
  },
  Memory: {
    Title: "تلميح الذاكرة",
    EmptyContent: "لا يوجد شيء بعد.",
    Send: "إرسال التلميح",
    Copy: "نسخ التلميح",
    Reset: "إعادة التعيين للجلسة",
    ResetConfirm:
      "سيؤدي إعادة التعيين إلى مسح سجل المحادثة الحالي والذاكرة التاريخية. هل أنت متأكد أنك تريد إعادة التعيين؟",
  },
  Home: {
    NewChat: "دردشة جديدة",
    DeleteChat: "تأكيد حذف المحادثة المحددة؟",
    DeleteToast: "تم حذف الدردشة",
    Revert: "استعادة",
  },
  Settings: {
    Title: "الإعدادات",
    SubTitle: "جميع الإعدادات",
    Actions: {
      ClearAll: "مسح جميع البيانات",
      ResetAll: "إعادة تعيين جميع الإعدادات",
      Close: "إغلاق",
      ConfirmResetAll: "هل أنت متأكد أنك تريد إعادة تعيين جميع الإعدادات؟",
      ConfirmClearAll: "هل أنت متأكد أنك تريد مسح جميع البيانات؟",
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "جميع اللغات",
    },
    Avatar: "الصورة الرمزية",
    FontSize: {
      Title: "حجم الخط",
      SubTitle: "ضبط حجم الخط لمحتوى الدردشة",
    },
    Update: {
      Version: (x: string) => `الإصدار: ${x}`,
      IsLatest: "أحدث إصدار",
      CheckUpdate: "التحقق من التحديث",
      IsChecking: "جارٍ التحقق من التحديث...",
      FoundUpdate: (x: string) => `تم العثور على إصدار جديد: ${x}`,
      GoToUpdate: "التحديث",
    },
    SendKey: "مفتاح الإرسال",
    Theme: "السمة",
    TightBorder: "حدود ضيقة",
    SendPreviewBubble: {
      Title: "إرسال فقاعة المعاينة",
      SubTitle: "عرض تنسيق Markdown في فقاعة",
    },
    Mask: {
      Title: "شاشة تظهر قناعًا",
      SubTitle: "عرض شاشة تظهر قناعًا قبل بدء دردشة جديدة",
    },
    Prompt: {
      Disable: {
        Title: "تعطيل الإكمال التلقائي",
        SubTitle: "اكتب / لتشغيل الإكمال التلقائي",
      },
      List: "قائمة التلميحات",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} مدمجة، ${custom} محددة من قبل المستخدم`,
      Edit: "تحرير",
      Modal: {
        Title: "قائمة التلميحات",
        Add: "إضافة واحدة",
        Search: "البحث في التلميحات",
      },
      EditModal: {
        Title: "تحرير التلميح",
      },
    },
    HistoryCount: {
      Title: "عدد الرسائل المرفقة",
      SubTitle: "عدد الرسائل المرسلة المرفقة لكل طلب",
    },
    CompressThreshold: {
      Title: "حد ضغط التاريخ",
      SubTitle: "سيتم ضغطه إذا تجاوز طول الرسائل غير المضغوطة القيمة",
    },
    Token: {
      Title: "مفتاح API",
      SubTitle: "استخدم مفتاحك لتجاوز حد رمز الوصول",
      Placeholder: "مفتاح OpenAI API",
    },
    Usage: {
      Title: "رصيد الحساب",
      SubTitle(used: any, total: any) {
        return `استخدمت هذا الشهر $${used}، الاشتراك $${total}`;
      },
      IsChecking: "جارٍ التحقق...",
      Check: "التحقق",
      NoAccess: "أدخل مفتاح API للتحقق من الرصيد",
    },
    AccessCode: {
      Title: "رمز الوصول",
      SubTitle: "تم تمكين التحكم في الوصول",
      Placeholder: "رمز الوصول المطلوب",
    },
    Endpoint: {
      Title: "نقطة النهاية",
      SubTitle: "يجب أن تبدأ نقطة النهاية المخصصة بـ http(s)://",
    },
    Model: "النموذج",
    Temperature: {
      Title: "درجة الحرارة",
      SubTitle: "قيمة أكبر تجعل الإخراج أكثر عشوائية",
    },
    MaxTokens: {
      Title: "الحد الأقصى للرموز",
      SubTitle: "الحد الأقصى لطول رموز الإدخال والرموز المولدة",
    },
    PresencePenalty: {
      Title: "جزاء الوجود",
      SubTitle: "قيمة أكبر تزيد من احتمالية التحدث عن مواضيع جديدة",
    },
  },
  Store: {
    DefaultTopic: "محادثة جديدة",
    BotHello: "مرحبًا! كيف يمكنني مساعدتك اليوم؟",
    Error: "حدث خطأ ما، يُرجى المحاولة مرة أخرى لاحقًا.",
    Prompt: {
      History: (content: string) =>
        "هذه هي ملخص لسجل الدردشة كمراجعة: " + content,
      Topic:
        "يرجى إنشاء عنوان ملخص لمحادثتنا مكون من أربع إلى خمس كلمات بدون أي مقدمة أو علامات ترقيم أو علامات اقتباس أو نقاط أو رموز أو نص إضافي. قم بإزالة علامات التنصيص الخارجية.",
      Summarize:
        "قم بإعطاء ملخص موجز للمناقشة بأقل من 200 كلمة لاستخدامه كتلميح للسياق المستقبلي.",
    },
  },
  Copy: {
    Success: "تم النسخ إلى الحافظة",
    Failed: "فشلت عملية النسخ، يُرجى منح الإذن للوصول إلى الحافظة",
  },
  Context: {
    Toast: (x: any) => `مع ${x} تلميحات سياقية`,
    Edit: "تلميحات السياق والذاكرة",
    Add: "إضافة تلميح",
    Clear: "مسح السياق",
    Revert: "استعادة",
  },
  Plugin: {
    Name: "المكون الإضافي",
  },
  Mask: {
    Name: "القناع",
    Page: {
      Title: "قالب التلميح",
      SubTitle: (count: number) => `${count} قوالب تلميح`,
      Search: "البحث في القوالب",
      Create: "إنشاء",
    },
    Item: {
      Info: (count: number) => `${count} تلميحات`,
      Chat: "دردشة",
      View: "عرض",
      Edit: "تحرير",
      Delete: "حذف",
      DeleteConfirm: "تأكيد الحذف؟",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `تحرير قالب التلميح ${readonly ? "(للقراءة فقط)" : ""}`,
      Download: "تحميل",
      Clone: "استنساخ",
    },
    Config: {
      Avatar: "صورة الروبوت",
      Name: "اسم الروبوت",
      Sync: {
        Title: "استخدام الإعدادات العامة",
        SubTitle: "استخدم الإعدادات العامة في هذه الدردشة",
        Confirm: "تأكيد الاستبدال بالإعدادات المخصصة؟",
      },
      HideContext: {
        Title: "إخفاء تلميحات السياق",
        SubTitle: "عدم عرض تلميحات السياق في الدردشة",
      },
    },
  },
  NewChat: {
    Return: "العودة",
    Skip: "ابدأ فقط",
    Title: "اختر قناعًا",
    SubTitle: "دردشة مع الروح وراء القناع",
    More: "العثور على المزيد",
    NotShow: "لا تظهر مرة أخرى",
    ConfirmNoShow: "تأكيد الإلغاء؟ يمكنك تمكينه في الإعدادات لاحقًا.",
  },

  UI: {
    Confirm: "تأكيد",
    Cancel: "إلغاء",
    Close: "إغلاق",
    Create: "إنشاء",
    Edit: "تحرير",
  },
};

export default ar;