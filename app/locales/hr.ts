import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const hr: RequiredLocaleType = {
  WIP: "בקרוב...",
  Error: {
    Unauthorized: "גישה לא מורשת, אנא הזן קוד גישה בדף [auth](/#/auth).",
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
    SubTitle: (count: number) => `${count} הודעות עם ChatGPT`,
    Actions: {
      ChatList: "עבור לרשימת הצ'אטים",
      CompressedHistory: "היסטוריה מוקטנת של זכרון פרומפטים",
      Export: "ייצוא כל ההודעות בתבנית Markdown",
      Copy: "העתק",
      Stop: "עצור",
      Retry: "נסה שוב",
      Delete: "מחק",
    },
    InputActions: {
      Stop: "עצור",
      ToBottom: "לעדכונים אחרונים",
      Theme: {
        auto: "אוטומטי",
        light: "תצוגה בהירה",
        dark: "תצוגה כהה",
      },
      Prompt: "פרומטים",
      Masks: "פרומטים",
      Clear: "נקה קונטקסט",
      Settings: "הגדרות",
    },
    Rename: "שנה שם לצ'אט",
    Typing: "מקליד...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} כדי לשלוח`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", שילוט + הכנס כדי לעטוף";
      }
      return inputHints + ", / כדי לחפש פרומטים";
    },
    Send: "שלח",
    Config: {
      Reset: "איפוס לברירת המחדל",
      SaveAs: "שמור כפרומפט",
    },
  },
  Export: {
    Title: "ייצוא הודעות",
    Copy: "העתק הכל",
    Download: "הורדה",
    MessageFromYou: "הודעה ממך",
    MessageFromChatGPT: "הודעה מ ChatGPT",
    Share: "שתף ל KiAsk Share",
    Format: {
      Title: "תבנית ייצוא",
      SubTitle: "Markdown או תמונת PNG",
    },
    IncludeContext: {
      Title: "כלול קונטקסט",
      SubTitle: "שלח פרומטים מתוך הקונטקסט של השיחה",
    },
    Steps: {
      Select: "בחירה",
      Preview: "תצוגה מקדימה",
    },
  },
  Select: {
    Search: "חיפוש",
    All: "בחר הכל",
    Latest: "בחר את החדשות",
    Clear: "נקה",
  },
  Memory: {
    Title: "פרומט זכרון",
    EmptyContent: "אין עדיין כלום.",
    Send: "שלח זכרון",
    Copy: "העתק זכרון",
    Reset: "איפוס הסשן",
    ResetConfirm:
      "בביצוע האיפוס יימחקו נתוני השיחה הנוכחית והזכרון ההיסטורי. בטוח שתרצה לאפס?",
  },
  Home: {
    NewChat: "צ'אט חדש",
    DeleteChat: "למחוק את השיחה שנבחרה?",
    DeleteToast: "השיחה נמחקה",
    Revert: "ביטול שינויים",
  },
  Settings: {
    Title: "הגדרות",
    SubTitle: "כל ההגדרות",
    Actions: {
      ClearAll: "נקה את כל הנתונים",
      ResetAll: "איפוס כל ההגדרות",
      Close: "סגור",
      ConfirmResetAll: "בטוח שברצונך לאפס את כל ההגדרות?",
      ConfirmClearAll: "בטוח שברצונך לאפס את כל הנתונים?",
    },
    Lang: {
      Name: "שפה", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "כל השפות",
    },
    Avatar: "סמל תמונת פרופיל",
    FontSize: {
      Title: "גודל גופן",
      SubTitle: "התאמת גודל הגופן של תוכן השיחה",
    },
    Update: {
      Version: (x: string) => `גרסה: ${x}`,
      IsLatest: "גרסה עדכנית",
      CheckUpdate: "בדוק עדכון",
      IsChecking: "בודק עדכון...",
      FoundUpdate: (x: string) => `נמצאה גרסה חדשה: ${x}`,
      GoToUpdate: "עדכן",
    },
    SendKey: "מקש שליחה",
    Theme: "ערכת נושא",
    TightBorder: "מסגרת מוצמדת",
    SendPreviewBubble: {
      Title: "בועת נציג ממוען",
      SubTitle: "הצגה מקדימה של פענוח Markdown בבועה",
    },
    Mask: {
      Title: "מסך התחלתי של פרומט",
      SubTitle: "הצג מסך התחלתי של פרומט לפני התחלת צ'אט חדש",
    },
    Prompt: {
      Disable: {
        Title: "השבתת השלמה אוטומטית",
        SubTitle: "הקלד / כדי להפעיל השלמה אוטומטית",
      },
      List: "רשימת פרומטים",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} מובנים, ${custom} מותאמים אישית`,
      Edit: "עריכה",
      Modal: {
        Title: "רשימת פרומטים",
        Add: "הוסף אחד",
        Search: "חיפוש פרומטים",
      },
      EditModal: {
        Title: "ערוך פרומט",
      },
    },
    HistoryCount: {
      Title: "מספר ההודעות המצורפות",
      SubTitle: "מספר ההודעות שנשלחות בכל בקשה",
    },
    CompressThreshold: {
      Title: "סף דחיסת היסטוריה",
      SubTitle: "נעשה דחיסה אם אורך ההודעות הלא דחוסות חורג מהערך",
    },
    Token: {
      Title: "מפתח של כלי ה-API",
      SubTitle: "שימוש במפתח כדי להתעלם מהמגבלת קוד גישה",
      Placeholder: "מפתח OpenAI API",
    },
    Usage: {
      Title: "יתרת חשבון",
      SubTitle(used: any, total: any) {
        return `נעשה שימוש בחודש זה בסך $${used}, מנוי בסך $${total}`;
      },
      IsChecking: "בודק...",
      Check: "בדוק",
      NoAccess: "הזן מפתח API כדי לבדוק את היתרה",
    },
    AccessCode: {
      Title: "קוד גישה",
      SubTitle: "שליטת גישה מופעלת",
      Placeholder: "נדרש קוד גישה",
    },
    Endpoint: {
      Title: "נקודת קצה",
      SubTitle: "נקודת קצה מותאמת אישית חייבת להתחיל ב-http(s)://",
    },
    Model: "מודל",
    Temperature: {
      Title: "טמפ'רטורה",
      SubTitle: "ערך גדול מביא לפלט עם רמה גבוהה יותר של אקראיות",
    },
    MaxTokens: {
      Title: "מס' הטוקנים המרבי",
      SubTitle: "אורך מקסימלי של הטוקנים בקלט והטוקנים שמיוצרים",
    },
    PresencePenalty: {
      Title: "ענישת נוכחות",
      SubTitle:
        "ערך גבוה מביא להגברה בסיכוי לדבר על נושאים חדשים",
    },
  },
  Store: {
    DefaultTopic: "שיחה חדשה",
    BotHello: "שלום! איך אני יכול לעזור לך היום?",
    Error: "משהו השתבש, נסה שוב מאוחר יותר.",
    Prompt: {
      History: (content: string) =>
        "זוהי סיכום של ההיסטוריה של הצ'אט כסיכום: " + content,
      Topic:
        "אנא צור כותרת של ארבע או חמישה מילים המסכמת את השיחה בלי כל טקסט כניסה, פיסוק, ציטוטים, נקודות, סמלים, או טקסט נוסף. הסר את הציטוטים החיצוניים.",
      Summarize:
        "סכם בקצרה את הדיון עם תוכן מעוטר של 200 מילים או פחות לשימוש כפרומט להקשת מודלים בעתיד.",
    },
  },
  Copy: {
    Success: "הועתק בהצלחה",
    Failed: "ההעתקה נכשלה, נא הענק הרשאה לגישה ללוח הניתוב",
  },
  Context: {
    Toast: (x: any) => `עם ${x} פרומטים קונטקסטואליים`,
    Edit: "פרומטים קונטקסטואליים וזכרון",
    Add: "הוסף פרומט",
    Clear: "נקה",
    Revert: "בטל",
  },
  Plugin: {
    Name: "תוסף",
  },
  Mask: {
    Name: "פרומט",
    Page: {
      Title: "תבנית פרומט",
      SubTitle: (count: number) => `${count} תבניות פרומטים`,
      Search: "חיפוש תבניות",
      Create: "צור",
    },
    Item: {
      Info: (count: number) => `${count} פרומטים`,
      Chat: "צ'אט",
      View: "צפה",
      Edit: "ערוך",
      Delete: "מחק",
      DeleteConfirm: "בטוח שברצונך למחוק?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `ערוך תבנית פרומט ${readonly ? "(בצורה קריאה בלבד)" : ""}`,
      Download: "הורדה",
      Clone: "שכפול",
    },
    Config: {
      Avatar: "סמל בוט",
      Name: "שם הבוט",
      Sync: {
        Title: "השתמש בהגדרה גלובלית",
        SubTitle: "השתמש בהגדרה גלובלית בצ'אט זה",
        Confirm: "בטוח שברצונך לדרוס הגדרה מותאמת עם הגדרה גלובלית?",
      },
      HideContext: {
        Title: "הסתר פרומטים קונטקסטואליים",
        SubTitle: "אל תציג פרומטים קונטקסטואליים בצ'אט",
      },
    },
  },
  NewChat: {
    Return: "חזרה",
    Skip: "בסדר, בוא נתחיל",
    Title: "בחר פרומט",
    SubTitle: "שוחח עם הנשמה מאחורי הפרומט",
    More: "מצא עוד",
    NotShow: "לא להציג שוב",
    ConfirmNoShow: "בטוח שברצונך להשבית? תמיד תוכל להפעילו מחדש בהגדרות מאוחר יותר.",
  },

  UI: {
    Confirm: "אישור",
    Cancel: "ביטול",
    Close: "סגירה",
    Create: "יצירה",
    Edit: "עריכה",
  },
};

export default hr;