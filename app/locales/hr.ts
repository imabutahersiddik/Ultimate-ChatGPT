import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

const hr: LocaleType = {
  WIP: "מגיע בקרוב...",
  Error: {
    Unauthorized:
      "תמכו ב־Ultimate ChatGPT באמצעות [Patreon](https://patreon.com/KiasK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link) או דרך Bkash (+880 1812-715289), ניתן לשלוח באמצעות [Worldremit](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob), מספר נייד של הארנק הנייד: +880 1812-715289 כדי לעזור לנו לשדרג ולתמוך ב־Ultimate ChatGPT העוצמתי זה.",
  },
  Auth: {
    Title: "צריך קוד גישה",
    Tips: "אנא הזן קוד גישה למטה",
    Input: "קוד גישה",
    Confirm: "אישור",
    Later: "מאוחר יותר",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} הודעות`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} הודעות`,
    Actions: {
      ChatList: "עבור לרשימת הצ'אטים",
      CompressedHistory: "זיכרון מידע קודם מקוצר",
      Export: "יצוא כל ההודעות כ-Markdown",
      Copy: "העתק",
      Stop: "עצור",
      Retry: "נסה שוב",
      Pin: "נעץ",
      PinToastContent: "נעצו 2 הודעות לזיכרונות קונטקסטואליים",
      PinToastAction: "צפה",
      Delete: "מחק",
      Edit: "ערוך",
    },
    Commands: {
      new: "התחל צ'אט חדש",
      newm: "התחל צ'אט חדש עם מסיכה",
      next: "צ'אט הבא",
      prev: "צ'אט הקודם",
      clear: "נקה קונטקסט",
      del: "מחק צ'אט",
    },
    InputActions: {
      Stop: "עצור",
      ToBottom: "לאחרונה",
      Theme: {
        auto: "אוטומטי",
        light: "ערכת נושא בהירה",
        dark: "ערכת נושא כהה",
      },
      Prompt: "זיכרונות",
      Masks: "מסיכות",
      Clear: "נקה קונטקסט",
      Settings: "הגדרות",
    },
    Rename: "שנה שם צ'אט",
    Typing: "מקליד...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} כדי לשלוח`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter כדי לעטוף";
      }
      return inputHints + ", / כדי לחפש זיכרונות, : כדי להשתמש בפקודות";
    },
    Send: "שלח",
    Config: {
      Reset: "איפוס לברירת מחדל",
      SaveAs: "שמירה כמסיכה",
    },
  },
  Export: {
    Title: "יצוא הודעות",
    Copy: "העתק הכול",
    Download: "הורדה",
    MessageFromYou: "הודעה ממך",
    MessageFromChatGPT: "הודעה מ-ChatGPT",
    Share: "שתף ב-KiAsk Share",
    Format: {
      Title: "פורמט ייצוא",
      SubTitle: "Markdown או תמונת PNG",
    },
    IncludeContext: {
      Title: "כולל קונטקסט",
      SubTitle: "יצא זיכרונות קונטקסט במסיכה או לא",
    },
    Steps: {
      Select: "בחר",
      Preview: "תצוגה מקדימה",
    },
    Image: {
      Toast: "מצלמת תמונה...",
      Modal: "לחץ לחיצה ארוכה או לחיצה ימנית לשמירת התמונה",
    },
  },
  Select: {
    Search: "חיפוש",
    All: "בחר הכול",
    Latest: "בחר את האחרונה",
    Clear: "נקה",
  },
  Memory: {
    Title: "זיכרון קודם",
    EmptyContent: "עדיין ריק.",
    Send: "שלח זיכרון",
    Copy: "העתק זיכרון",
    Reset: "איפוס הסשן",
    ResetConfirm:
      "האיפוס ינקה את ההיסטוריה של השיח הנוכחי ואת הזיכרון ההיסטורי. האם אתה בטוח שברצונך לאפס?",
  },
  Home: {
    NewChat: "צ'אט חדש",
    DeleteChat: "אשר למחוק את השיח הנבחר?",
    DeleteToast: "הצ'אט נמחק",
    Revert: "שחזר",
  },
  Settings: {
    Title: "הגדרות",
    SubTitle: "כל ההגדרות",
    Danger: {
      Reset: {
        Title: "איפוס כל ההגדרות",
        SubTitle: "איפוס כל פריטי ההגדרה לברירת המחדל",
        Action: "איפוס",
        Confirm: "האם אתה בטוח שברצונך לאפס את כל ההגדרות לברירת המחדל?",
      },
      Clear: {
        Title: "נקה את כל הנתונים",
        SubTitle: "נקה את כל ההודעות וההגדרות",
        Action: "נקה",
        Confirm: "האם אתה בטוח שברצונך לנקות את כל ההודעות וההגדרות?",
      },
    },
    Lang: {
      Name: "שפה", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "כל השפות",
    },
    Avatar: "סמל משתמש",
    FontSize: {
      Title: "גודל גופן",
      SubTitle: "התאם את גודל הגופן של תוכן הצ'אט",
    },

    InputTemplate: {
      Title: "תבנית קלט",
      SubTitle: "ההודעה החדשה ביותר תתמלא בתבנית זו",
    },

    Update: {
      Version: (x: string) => `גרסה: ${x}`,
      IsLatest: "הגרסה החדשה ביותר",
      CheckUpdate: "בדוק עדכון",
      IsChecking: "בודק עדכון...",
      FoundUpdate: (x: string) => `נמצא גרסה חדשה: ${x}`,
      GoToUpdate: "עדכן",
    },
    SendKey: "מקש שליחה",
    Theme: "ערכת נושא",
    TightBorder: "מסגרת צמודה",
    SendPreviewBubble: {
      Title: "בועת תצוגה מקדימה",
      SubTitle: "הצגת Markdown בבועה",
    },
    Mask: {
      Splash: {
        Title: "מסך התחלת מסיכה",
        SubTitle: "הצג מסך התחלה לפני התחלת צ'אט חדש",
      },
      Builtin: {
        Title: "הסתר מסיכות מובנות",
        SubTitle: "הסתר מסיכות מובנות ברשימת המסיכות",
      },
    },
    Prompt: {
      Disable: {
        Title: "השבת השלמה אוטומטית",
        SubTitle: "הזן / כדי להפעיל השלמה אוטומטית",
      },
      List: "רשימת זיכרונות",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} מובנים, ${custom} מותאמים אישית`,
      Edit: "ערוך",
      Modal: {
        Title: "רשימת זיכרונות",
        Add: "הוסף",
        Search: "חיפוש זיכרונות",
      },
      EditModal: {
        Title: "ערוך זיכרון",
      },
    },
    HistoryCount: {
      Title: "מספר הודעות מצורפות",
      SubTitle: "מספר הודעות שנשלחות עם כל בקשה",
    },
    CompressThreshold: {
      Title: "סף דחיסת היסטוריה",
      SubTitle: "ידוע לדחוס אם אורך ההודעות הלא דחוסות חורג מהערך",
    },
    Token: {
      Title: "מפתח API",
      SubTitle: "השתמש במפתח שלך כדי להתעלם ממגבלת קוד גישה",
      Placeholder: "מפתח OpenAI API",
    },
    Usage: {
      Title: "יתרת חשבון",
      SubTitle(used: any, total: any) {
        return `נעשה שימוש בחודש זה ${used}, מנוי ${total}`;
      },
      IsChecking: "בודק...",
      Check: "בדוק",
      NoAccess: "הזן מפתח API כדי לבדוק את היתרה",
    },
    AccessCode: {
      Title: "קוד גישה",
      SubTitle: "בקרת גישה מופעלת",
      Placeholder: "נדרש קוד גישה",
    },
    Endpoint: {
      Title: "קצה מקום",
      SubTitle: "קצה מקום מותאם אישית חייב להתחיל ב-http(s)://",
    },
    Model: "מודל",
    Temperature: {
      Title: "טמפרטורה",
      SubTitle: "ערך גדול יותר מפיק פלט רנדומלי יותר",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "אל תשנה ערך זה יחד עם הטמפרטורה",
    },
    MaxTokens: {
      Title: "מספר מקסימלי של טוקנים",
      SubTitle: "אורך מרבי של טוקנים בקלט וטוקנים שנוצרים",
    },
    PresencePenalty: {
      Title: "ענישת נוכחות",
      SubTitle: "ערך גדול יותר מגביר את הסיכוי לדבר על נושאים חדשים",
    },
    FrequencyPenalty: {
      Title: "ענישת תדירות",
      SubTitle: "ערך גדול יותר מפחית את הסיכוי לחזור על אותה שורה",
    },
  },
  Store: {
    DefaultTopic: "שיחה חדשה",
    BotHello: "שלום! איך אני יכול לעזור לך היום?",
    Error: "משהו השתבש, אנא נסה שוב מאוחר יותר.",
    Prompt: {
      History: (content: string) =>
        "זוהי תקציר של ההיסטוריה של הצ'אט כסיכום: " + content,
      Topic:
        "אנא צור כותרת בארבע עד חמש מילים המסכמת את השיח שלנו בלי כל טקסט נוסף, פיסוק, סימני ציון, נקודות, סמלים או טקסט נוסף. הסר ציטוטים מסביב.",
      Summarize:
        "סכם את הדיון בקצרה ב-200 מילים או פחות לשימוש כזיכרון להקשר בעתיד.",
    },
  },
  Copy: {
    Success: "הועתק ללוח",
    Failed: "העתקה נכשלה, אנא אשר הרשאה לגישה ללוח",
  },
  Context: {
    Toast: (x: any) => `עם ${x} זיכרונות קונטקסט`,
    Edit: "הגדרות הצ'אט הנוכחיות",
    Add: "הוסף זיכרון",
    Clear: "קונטקסט נוקה",
    Revert: "שחזר",
  },
  Plugin: {
    Name: "תוסף",
  },
  Mask: {
    Name: "מסכה",
    Page: {
      Title: "תבנית זיכרון",
      SubTitle: (count: number) => `${count} תבניות זיכרון`,
      Search: "חיפוש תבניות",
      Create: "צור",
    },
    Item: {
      Info: (count: number) => `${count} זיכרונות`,
      Chat: "צ'אט",
      View: "צפה",
      Edit: "ערוך",
      Delete: "מחק",
      DeleteConfirm: "האם למחוק?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `ערוך תבנית זיכרון ${readonly ? "(קריא בלבד)" : ""}`,
      Download: "הורדה",
      Clone: "שכפול",
    },
    Config: {
      Avatar: "סמל הבוט",
      Name: "שם הבוט",
      Sync: {
        Title: "השתמש בתצורה גלובלית",
        SubTitle: "השתמש בתצורה גלובלית בצ'אט זה",
        Confirm: "האם לאשר לדרוס את התצורה המותאמת בצ'אט זה עם התצורה הגלובלית?",
      },
      HideContext: {
        Title: "הסתר זיכרונות קונטקסט",
        SubTitle: "אל תציג זיכרונות קונטקסט בצ'אט",
      },
      Share: {
        Title: "שתף מסיכה זו",
        SubTitle: "צור קישור למסיכה זו",
        Action: "העתק קישור",
      },
    },
  },
  NewChat: {
    Return: "חזור",
    Skip: "התחל",
    Title: "בחר מסיכה",
    SubTitle: "שוחח עם הנשמה מאחורי המסיכה",
    More: "מצא עוד",
    NotShow: "אל תציג שוב",
    ConfirmNoShow: "האם לאשר השבתה? תוכל להפעיל אותה מאוחר יותר בהגדרות.",
  },

  UI: {
    Confirm: "אישור",
    Cancel: "ביטול",
    Close: "סגור",
    Create: "צור",
    Edit: "ערוך",
  },
  Exporter: {
    Model: "מודל",
    Messages: "הודעות",
    Topic: "נושא",
    Time: "זמן",
  },
};

export default hr;
