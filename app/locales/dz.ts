import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const en: RequiredLocaleType = {
  WIP: "قريبًا...",
  Error: {
    Unauthorized:
      "غير مصرح بالوصول، يرجى إدخال رمز الوصول في صفحة [المصادقة](/#/auth).",
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
    SubTitle: (count: number) => `${count} رسالة مع الذكاء الاصطناعي للمحادثة`,
    Actions: {
      ChatList: "الانتقال إلى قائمة المحادثات",
      CompressedHistory: "ذاكرة السجل التاريخي المضغوط",
      Export: "تصدير جميع الرسائل كملف Markdown",
      Copy: "نسخ",
      Stop: "إيقاف",
      Retry: "إعادة المحاولة",
      Delete: "حذف",
    },
    InputActions: {
      Stop: "إيقاف",
      ToBottom: "إلى آخر",
      Theme: {
        auto: "تلقائي",
        light: "واجهة ضوئية فاتحة",
        dark: "واجهة ضوئية داكنة",
      },
      Prompt: "الاقتراحات",
      Masks: "الاقتراحات",
      Clear: "مسح السياق",
      Settings: "الإعدادات",
    },
    Rename: "إعادة تسمية المحادثة",
    Typing: "يكتب...",
    Input: (submitKey: string) => {
      var inputHints = `اضغط ${submitKey} للإرسال`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", اضغط Shift + Enter للتفاف";
      }
      return inputHints + ", اضغط / للبحث في الاقتراحات";
    },
    Send: "إرسال",
    Config: {
      Reset: "إعادة التعيين إلى الإعدادات الافتراضية",
      SaveAs: "حفظ كاقتراحات",
    },
  },
  Export: {
    Title: "تصدير الرسائل",
    Copy: "نسخ الكل",
    Download: "تحميل",
    MessageFromYou: "رسالة منك",
    MessageFromChatGPT: "رسالة من الذكاء الاصطناعي للمحادثة",
    Share: "مشاركة على KiAsk Share",
    Format: {
      Title: "صيغة التصدير",
      SubTitle: "ملف Markdown أو صورة PNG",
    },
    IncludeContext: {
      Title: "تضمين السياق",
      SubTitle: "تصدير السياقات في القناع أم لا",
    },
    Steps: {
      Select: "اختيار",
      Preview: "معاينة",
    },
  },
  Select: {
    Search: "بحث",
    All: "تحديد الكل",
    Latest: "تحديد الأحدث",
    Clear: "مسح",
  },
  Memory: {
    Title: "ملف تعريف الذاكرة",
    EmptyContent: "لا يوجد شيء حتى الآن.",
    Send: "إرسال الذاكرة",
    Copy: "نسخ الذاكرة",
    Reset: "إعادة تعيين الجلسة",
    ResetConfirm:
      "سوف يؤدي إعادة التعيين إلى مسح سجل المحادثة الحالي والذاكرة التاريخية. هل أنت متأكد أنك تريد إعادة التعيين؟",
  },
  Home: {
    NewChat: "محادثة جديدة",
    DeleteChat: "تأكيد حذف المحادثة المختارة؟",
    DeleteToast: "تم حذف المحادثة",
    Revert: "استعادة",
  },
  Settings: {
    Title: "الإعدادات",
    SubTitle: "جميع الإعدادات",
    Actions: {
      ClearAll: "مسح جميع البيانات",
      ResetAll: "إعادة تعيين كافة الإعدادات",
      Close: "إغلاق",
      ConfirmResetAll: "هل أنت متأكد أنك تريد إعادة تعيين جميع الإعدادات؟",
      ConfirmClearAll: "هل أنت متأكد أنك تريد مسح جميع البيانات؟",
    },
    Lang: {
      Name: "اللغة", // ATTN: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "كافة اللغات",
    },
    Avatar: "الصورة الرمزية",
    FontSize: {
      Title: "حجم الخط",
      SubTitle: "تعديل حجم الخط في محتوى المحادثة",
    },
    Update: {
      Version: (x: string) => `الإصدار: ${x}`,
      IsLatest: "أحدث نسخة",
      CheckUpdate: "التحقق من التحديث",
      IsChecking: "جارٍ التحقق من التحديث...",
      FoundUpdate: (x: string) => `تم العثور على إصدار جديد: ${x}`,
      GoToUpdate: "تحديث",
    },
    SendKey: "مفتاح الإرسال",
    Theme: "السمة",
    TightBorder: "حدود ضيقة",
    SendPreviewBubble: {
      Title: "عرض معاينة الارسال",
      SubTitle: "عرض الماركدون في فقاعة",
    },
    Mask: {
      Title: "شاشة البداية",
      SubTitle: "عرض صفحة بداية قبل بدء محادثة جديدة",
    },
    Prompt: {
      Disable: {
        Title: "تعطيل الإكمال التلقائي",
        SubTitle: "اكتب / لتفعيل الإكمال التلقائي",
      },
      List: "قائمة الاقتراحات",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} مدمجة, ${custom} المحددة من قبل المستخدم`,
      Edit: "تعديل",
      Modal: {
        Title: "قائمة الاقتراحات",
        Add: "إضافة واحدة",
        Search: "البحث في الاقتراحات",
      },
      EditModal: {
        Title: "تعديل الاقتراح",
      },
    },
    HistoryCount: {
      Title: "عدد الرسائل المرفقة",
      SubTitle: "عدد الرسائل المرسلة المرفقة لكل طلب",
    },
    CompressThreshold: {
      Title: "حد الضغط التاريخي",
      SubTitle:
        "سيتم الضغط إذا تجاوز طول الرسائل غير المضغوطة القيمة المحددة",
    },
    Token: {
      Title: "مفتاح واجهة برمجة التطبيقات",
      SubTitle: "استخدم مفتاحك لتجاوز حد رمز الوصول",
      Placeholder: "مفتاح واجهة برمجة التطبيقات من OpenAI",
    },
    Usage: {
      Title: "الرصيد الحالي",
      SubTitle(used: any, total: any) {
        return `استخدمت هذا الشهر ${used}$، الاشتراك ${total}$`;
      },
      IsChecking: "جارٍ التحقق...",
      Check: "التحقق",
      NoAccess: "أدخل مفتاح واجهة برمجة التطبيقات للتحقق من الرصيد",
    },
    AccessCode: {
      Title: "رمز الوصول",
      SubTitle: "تم تمكين التحكم في الوصول",
      Placeholder: "يرجى إدخال رمز الوصول",
    },
    Endpoint: {
      Title: "عنوان النهاية",
      SubTitle: "يجب أن يبدأ عنوان النهاية المخصص ب http(s)://",
    },
    Model: "النموذج",
    Temperature: {
      Title: "درجة الحرارة",
      SubTitle: "قيمة أكبر تزيد من التناغم",
    },
    MaxTokens: {
      Title: "الحد الأقصى للرموز",
      SubTitle: "الحد الأقصى لطول الرموز المدخلة والرموز المولدة",
    },
    PresencePenalty: {
      Title: "العقوبة التواجدية",
      SubTitle: "قيمة أكبر تزيد من احتمالية التحدث عن مواضيع جديدة",
    },
  },
  Store: {
    DefaultTopic: "محادثة جديدة",
    BotHello: "مرحبًا! كيف يمكنني مساعدتك اليوم؟",
    Error: "حدث خطأ ما، يرجى المحاولة مرة أخرى لاحقًا.",
    Prompt: {
      History: (content: string) =>
        "هذه نظرة عامة على سجل المحادثة كملخص: " + content,
      Topic:
        "يرجى توليد عنوان يلخص محادثتنا بأربع إلى خمسة كلمات دون أي نص تمهيدي أو علامات ترقيم أو اقتباسات أو نقاط أو رموز أخرى. احذف علامات الاقتباس المحيطة.",
      Summarize:
        "قم بتلخيص النقاش بشكل موجز في 200 كلمة أو أقل لاستخدامه كمحفز للسياق المستقبلي.",
    },
  },
  Copy: {
    Success: "تم نسخه إلى الحافظة",
    Failed: "فشلت عملية النسخ، يرجى منح إذن الوصول إلى الحافظة",
  },
  Context: {
    Toast: (x: any) => `مع ${x} من الاقتراحات المتعلقة`,
    Edit: "الاقتراحات المتعلقة والذاكرة",
    Add: "إضافة اقتراح",
    Clear: "امسح السياق",
    Revert: "استعادة",
  },
  Plugin: {
    Name: "ملحق",
  },
  Mask: {
    Name: "اقتراح",
    Page: {
      Title: "قالب الاقتراح",
      SubTitle: (count: number) => `${count} من قوالب الاقتراح`,
      Search: "البحث في القوالب",
      Create: "إنشاء",
    },
    Item: {
      Info: (count: number) => `${count} من الاقتراحات`,
      Chat: "محادثة",
      View: "عرض",
      Edit: "تعديل",
      Delete: "حذف",
      DeleteConfirm: "تأكيد الحذف؟",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `تحرير قالب الاقتراح ${readonly ? "(للقراءة فقط)" : ""}`,
      Download: "تحميل",
      Clone: "استنساخ",
    },
    Config: {
      Avatar: "صورة الروبوت",
      Name: "اسم الروبوت",
      Sync: {
        Title: "استخدم الإعدادات العامة",
        SubTitle: "استخدم الإعدادات العامة في هذه المحادثة",
        Confirm: "تأكيد الاستبدال بالإعدادات المخصصة؟",
      },
      HideContext: {
        Title: "إخفاء الاقتراحات المتعلقة",
        SubTitle: "لا تعرض الاقتراحات المتعلقة في المحادثة",
      },
    },
  },
  NewChat: {
    Return: "العودة",
    Skip: "بدء فقط",
    Title: "اختر اقتراحًا",
    SubTitle: "تحدث مع اقتراح محدد مسبقًا",
    More: "العثور على المزيد",
    NotShow: "عدم إظهار مرة أخرى",
    ConfirmNoShow: "تأكيد الإلغاء؟ يمكنك تمكينه في الإعدادات لاحقًا.",
  },

  UI: {
    Confirm: "تأكيد",
    Cancel: "إلغاء",
    Close: "إغلاق",
    Create: "إنشاء",
    Edit: "تعديل",
  },
};

export default dz;