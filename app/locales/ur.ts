import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

// if you are adding a new translation, please use PartialLocaleType instead of LocaleType
const ur: LocaleType = {
  WIP: "جلد آرہا ہے...",
  Error: {
    Unauthorized: "کراچی نیٹو پر اردو میں ترجمہ کریں: اس طاقتور اٹلیمیٹ چیٹ جی پی ٹی کو ترقی دینے اور برقرار رکھنے کے لئے ہمیں حمایت کریں۔ [پیٹریئن](https://patreon.com/KiasK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link) یا Bkash (+880 1812-715289) کے ذریعہ حمایت کریں، [Worldremit](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob) کا استعمال کرتے ہوئے بھیجیں، موبائل والٹ نمبر: +880 1812-715289۔",
  },
  Auth: {
    Title: "رسائی کوڈ کی ضرورت",
    Tips: "براہ کرم نیچے رسائی کوڈ درج کریں",
    Input: "رسائی کوڈ",
    Confirm: "تصدیق کریں",
    Later: "بعد میں",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} پیغامات`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} پیغامات`,
    Actions: {
      ChatList: "چیٹ لسٹ پر جائیں",
      CompressedHistory: "مضبوط تاریخ کی یادداشت",
      Export: "تمام پیغامات کو مارک ڈاؤن کے طور پر بیرونی کریں",
      Copy: "کاپی کریں",
      Stop: "روکیں",
      Retry: "دوبارہ کوشش کریں",
      Pin: "پن کریں",
      PinToastContent: "2 پیغامات کو سنجیدگی کے ساتھ پن کیا گیا",
      PinToastAction: "دیکھیں",
      Delete: "حذف کریں",
      Edit: "ترمیم کریں",
    },
    Commands: {
      new: "نئی چیٹ شروع کریں",
      newm: "ماسک کے ساتھ نئی چیٹ شروع کریں",
      next: "اگلا چیٹ",
      prev: "پچھلا چیٹ",
      clear: "متن مٹا دیں",
      del: "چیٹ کو حذف کریں",
    },
    InputActions: {
      Stop: "روکیں",
      ToBottom: "تازہ ترین پر",
      Theme: {
        auto: "خودکار",
        light: "روشن تھیم",
        dark: "تاریک تھیم",
      },
      Prompt: "یادداشتیں",
      Masks: "ماسکس",
      Clear: "متن مٹا دیں",
      Settings: "ترتیبات",
    },
    Rename: "چیٹ کا نام تبدیل کریں",
    Typing: "ٹائپ کر رہا ہے...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} بھیجنے کے لئے`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "، موڑنے کے لئے Shift + Enter";
      }
      return inputHints + "، / تلاش کرنے کے لئے، : کمانڈ استعمال کرنے کے لئے";
    },
    Send: "بھیجیں",
    Config: {
      Reset: "معیاری ترتیب پر واپس لائیں",
      SaveAs: "ماسک کے طور پر محفوظ کریں",
    },
  },
  Export: {
    Title: "پیغامات کی بیرونی کریں",
    Copy: "سب کاپی کریں",
    Download: "ڈاؤن لوڈ کریں",
    MessageFromYou: "آپ کے طرف سے پیغام",
    MessageFromChatGPT: "چیٹ جی پی ٹی کے طرف سے پیغام",
    Share: "کیاسک شیئر کریں",
    Format: {
      Title: "تشکیل کی شکل",
      SubTitle: "مارک ڈاؤن یا پی این جی تصویر",
    },
    IncludeContext: {
      Title: "سیاق و سباق شامل کریں",
      SubTitle: "ماسک کے ساتھ سیاق و سباق یادداشتیں شامل کریں یا نہ کریں",
    },
    Steps: {
      Select: "منتخب کریں",
      Preview: "پیش نظارہ کریں",
    },
    Image: {
      Toast: "تصویر کاپچر ہو رہا ہے...",
      Modal: "طویل دباؤ یا رائٹ کلک کریں تاکہ تصویر کو محفوظ کریں",
    },
  },
  Select: {
    Search: "تلاش کریں",
    All: "سب کا انتخاب کریں",
    Latest: "تازہ ترین کا انتخاب کریں",
    Clear: "صاف کریں",
  },
  Memory: {
    Title: "یادداشتیں",
    EmptyContent: "ابھی تک کچھ نہیں.",
    Send: "یادداشت بھیجیں",
    Copy: "یادداشت کاپی کریں",
    Reset: "سیشن کو ری سیٹ کریں",
    ResetConfirm:
      "ری سیٹ کرنے سے موجودہ بات چیت کی تاریخ اور تاریخی یادداشت صاف ہو جائیں گی۔ کیا آپ واقعی ری سیٹ کرنا چاہتے ہیں؟",
  },
  Home: {
    NewChat: "نئی چیٹ",
    DeleteChat: "منتخب شدہ بات چیت کو حذف کرنے کی تصدیق کریں؟",
    DeleteToast: "چیٹ حذف ہوگئی",
    Revert: "واپس لے جائیں",
  },
  Settings: {
    Title: "ترتیبات",
    SubTitle: "تمام ترتیبات",
    Danger: {
      Reset: {
        Title: "تمام ترتیبات کو واپس لائیں",
        SubTitle: "تمام ترتیبات کو معیاری ترتیب پر واپس لائیں",
        Action: "واپس لائیں",
        Confirm: "تمام ترتیبات کو معیاری ترتیب پر واپس لانے کی تصدیق کریں؟",
      },
      Clear: {
        Title: "تمام ڈیٹا کو صاف کریں",
        SubTitle: "تمام پیغامات اور ترتیبات کو صاف کریں",
        Action: "صاف کریں",
        Confirm: "تمام پیغامات اور ترتیبات کو صاف کرنے کی تصدیق کریں؟",
      },
    },
    Lang: {
      Name: "زبان", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "تمام زبانیں",
    },
    Avatar: "اوتار",
    FontSize: {
      Title: "فونٹ سائز",
      SubTitle: "چیٹ مواد کا فونٹ سائز ترمیم کریں",
    },

    InputTemplate: {
      Title: "ان پٹ ٹیمپلیٹ",
      SubTitle: "تازہ ترین پیغام کو اس ٹیمپلیٹ میں بھرا جائے گا",
    },

    Update: {
      Version: (x: string) => `ورژن: ${x}`,
      IsLatest: "تازہ ترین ورژن",
      CheckUpdate: "تازہ کاری کی جانچ کریں",
      IsChecking: "جانچ رہا ہے...",
      FoundUpdate: (x: string) => `نیا ورژن ملا ہے: ${x}`,
      GoToUpdate: "تازہ کاری کریں",
    },
    SendKey: "کلید بھیجیں",
    Theme: "تھیم",
    TightBorder: "تنگ بارڈر",
    SendPreviewBubble: {
      Title: "بھیجیں پیش نظارہ ببل",
      SubTitle: "میسج میں مارک ڈاؤن کو پیش نظارہ کریں",
    },
    Mask: {
      Splash: {
        Title: "ماسک سپلیش سکرین",
        SubTitle: "نئی چیٹ شروع ہونے سے پہلے ماسک سپلیش سکرین دکھائیں",
      },
      Builtin: {
        Title: "بلٹ ان ماسکس چھپائیں",
        SubTitle: "ماسک لسٹ میں بلٹ ان ماسکس چھپائیں",
      },
    },
    Prompt: {
      Disable: {
        Title: "خودکار مکمل کرنے کی غیر فعال کریں",
        SubTitle: "خودکار مکمل کرنے کے لئے / درج کریں",
      },
      List: "یادداشتیں کی لسٹ",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} ساختہ، ${custom} صارف کی تعریف کی گئی`,
      Edit: "ترمیم کریں",
      Modal: {
        Title: "یادداشتیں کی لسٹ",
        Add: "ایک شامل کریں",
        Search: "یادداشتیں تلاش کریں",
      },
      EditModal: {
        Title: "یادداشت ترمیم کریں",
      },
    },
    HistoryCount: {
      Title: "منسلک پیغامات کی تعداد",
      SubTitle: "فرستادہ گئی پیغامات کی تعداد فی درخواست",
    },
    CompressThreshold: {
      Title: "تاریخ کی مضبوطی کی حد",
      SubTitle:
        "اگر غیر مضبوط پیغامات کی لمبائی اس قیمت سے زیادہ ہوتی ہے تو مضبوط کریں گے",
    },
    Token: {
      Title: "API کلید",
      SubTitle: "اپنے کلید کا استعمال کریں تاکہ رسائی کوڈ کی حد کو نظرانداز کیا جا سکے",
      Placeholder: "OpenAI API کلید",
    },
    Usage: {
      Title: "اکاؤنٹ بیلنس",
      SubTitle(used: any, total: any) {
        return `اس مہینے استعمال ہوا $${used}، سبسکرپشن $${total}`;
      },
      IsChecking: "جانچ رہا ہے...",
      Check: "جانچیں",
      NoAccess: "بیلنس چیک کرنے کے لئے API کلید درج کریں",
    },
    AccessCode: {
      Title: "رسائی کوڈ",
      SubTitle: "رسائی کنٹرول فعال ہے",
      Placeholder: "رسائی کوڈ کی ضرورت",
    },
    Endpoint: {
      Title: "اینڈپوائنٹ",
      SubTitle: "کسٹم اینڈپوائنٹ کو http(s):// سے شروع ہونا چاہئے",
    },
    Model: "ماڈل",
    Temperature: {
      Title: "درجہ حرارت",
      SubTitle: "زیادہ قیمت میں زیادہ بے قاعدگی والا نتیجہ پیدا کرتی ہے",
    },
    TopP: {
      Title: "نیچے P",
      SubTitle: "اس قیمت کو ٹماٹاکر کے ساتھ تبدیل نہ کریں",
    },
    MaxTokens: {
      Title: "زیادہ سے زیادہ ٹوکنز",
      SubTitle: "داخلی ٹوکنز اور تشکیل شدہ ٹوکنز کی زیادہ سے زیادہ لمبائی",
    },
    PresencePenalty: {
      Title: "حاضری پینالٹی",
      SubTitle: "زیادہ قیمت نئے موضوعات پر بات کرنے کا امکان بڑھاتی ہے",
    },
    FrequencyPenalty: {
      Title: "تعدادی پینالٹی",
      SubTitle: "زیادہ قیمت ایک ہی لائن کو دہرانے کا امکان کم کرتی ہے",
    },
  },
  Store: {
    DefaultTopic: "نئی بات چیت",
    BotHello: "ہیلو! آپ کیسے مدد کر سکتا ہوں آج؟",
    Error: "کچھ غلط ہوگیا ہے، براہ کرم بعد میں دوبارہ کوشش کریں۔",
    Prompt: {
      History: (content: string) =>
        "یہ چیٹ کی تاریخ کا خلاصہ ہے: " + content,
      Topic:
        "براہ کرم ہماری بات چیت کا چار سے پانچ لفظوں کا خلاصہ تیار کریں بغیر کسی لیڈ-ان، علامتوں، قوتیں، نقطوں، علامتوں یا اضافی متن کے۔ قوسین میں بند قوٹیشن مارکس کو ہٹا دیں۔",
      Summarize:
        "مباحثے کو مختصر میں 200 الفاظ یا اس سے کم میں خلاصہ کریں تاکہ آئندہ سیاق کے لئے استعمال کیا جا سکے۔",
    },
  },
  Copy: {
    Success: "کلپ بورڈ پر کاپی ہوگیا",
    Failed: "کاپی ناکام ہوگئی، براہ کرم کلپ بورڈ تک رسائی کی اجازت دیں",
  },
  Context: {
    Toast: (x: any) => `کے ساتھ ${x} سیاق و سباق یادداشتیں`,
    Edit: "موجودہ چیٹ کی ترتیبات",
    Add: "یادداشت شامل کریں",
    Clear: "سیاق و سباق صاف ہوگئے",
    Revert: "واپس لے جائیں",
  },
  Plugin: {
    Name: "پلگ ان",
  },
  Mask: {
    Name: "ماسک",
    Page: {
      Title: "یادداشتیں کا ٹیمپلیٹ",
      SubTitle: (count: number) => `${count} یادداشتیں کے ٹیمپلیٹس`,
      Search: "ٹیمپلیٹس تلاش کریں",
      Create: "تشکیل کریں",
    },
    Item: {
      Info: (count: number) => `${count} یادداشتیں`,
      Chat: "چیٹ",
      View: "دیکھیں",
      Edit: "ترمیم کریں",
      Delete: "حذف کریں",
      DeleteConfirm: "تصدیق کریں کہ حذف کرنا چاہتے ہیں؟",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `یادداشتیں کا ٹیمپلیٹ ترمیم کریں ${readonly ? "(صرف پڑھنے کے لئے)" : ""}`,
      Download: "ڈاؤن لوڈ کریں",
      Clone: "کلون کریں",
    },
    Config: {
      Avatar: "بوٹ اوتار",
      Name: "بوٹ نام",
      Sync: {
        Title: "گلوبل ترتیب کا استعمال کریں",
        SubTitle: "اس چیٹ میں گلوبل ترتیب کا استعمال کریں",
        Confirm: "کیا آپ تصدیق کرتے ہیں کہ آپ مخصوص ترتیب کو گلوبل ترتیب سے کچھلنا چاہتے ہیں؟",
      },
      HideContext: {
        Title: "سیاق و سباق یادداشتیں چھپائیں",
        SubTitle: "چیٹ میں سیاق و سباق یادداشتیں نہ دکھائیں",
      },
      Share: {
        Title: "اس ماسک کو شیئر کریں",
        SubTitle: "اس ماسک کے لئے ایک لنک تشکیل کریں",
        Action: "لنک کاپی کریں",
      },
    },
  },
  NewChat: {
    Return: "واپس جائیں",
    Skip: "بس شروع کریں",
    Title: "ایک ماسک منتخب کریں",
    SubTitle: "ماسک کے پیچھے روح سے چیٹ کریں",
    More: "مزید تلاش کریں",
    NotShow: "کبھی نہ دکھائیں",
    ConfirmNoShow: "غیر فعال کرنے کی تصدیق کریں؟ آپ بعد میں ترتیبات میں اس کو فعال کر سکتے ہیں۔",
  },

  UI: {
    Confirm: "تصدیق",
    Cancel: "منسوخ کریں",
    Close: "بند کریں",
    Create: "تشکیل کریں",
    Edit: "ترمیم کریں",
  },
  Exporter: {
    Model: "ماڈل",
    Messages: "پیغامات",
    Topic: "موضوع",
    Time: "وقت",
  },
};

export default ur;