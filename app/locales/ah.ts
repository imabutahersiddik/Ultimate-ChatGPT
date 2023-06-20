import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const en: RequiredLocaleType = {
  WIP: "በቅንጅት ያለው...",
  Error: {
    Unauthorized:
      "የማግኘት አይደለም, እባክዎ የማስተካከያ ኮድን [auth](/#/auth) ገጽ ውስጥ ያስገቡ።",
  },
  Auth: {
    Title: "የሚመለከት ኮድ ይለውጡ",
    Tips: "ኮድን በመጠቀም ላይ ይማሩ",
    Input: "የሚመለከት ኮድ",
    Confirm: "አንድን ማረግ",
    Later: "ቀጣይ",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} መልእክቶች`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} መልእክቶች በ The ChatGPT`,
    Actions: {
      ChatList: "ወደ የኮረና ውጤት ሂድ",
      CompressedHistory: "የተጨማሪ ታሪክ ማስተካከያ",
      Export: "ሁሉንም መልእክቶችን በ Markdown አሰራር ማግኘት",
      Copy: "ቅዳ",
      Stop: "አቁም",
      Retry: "ደግመሽ ይሞክሩ",
      Delete: "አስወግድ",
    },
    InputActions: {
      Stop: "አቁም",
      ToBottom: "ወደ መጨመር ውጤት",
      Theme: {
        auto: "ራስ መቀየር",
        light: "ብርሃን ራስ",
        dark: "ጣት ራስ",
      },
      Prompt: "ፕሮምቶች",
      Masks: "ማስተማርያዎች",
      Clear: "የክርስትና መቀየር አጥፋ",
      Settings: "ማስተካከያዎች",
    },
    Rename: "የክርስትናውን ስም ያቀይሩ",
    Typing: "ለመጫን ማስተካከያ...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} ለማስተላለፍ`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", ሽፍግን ከመጠን በላይ ያለውን ማስተላለፍ";
      }
      return inputHints + ", / ለመፈጠር ፕሮምት መፈለግ";
    },
    Send: "ላክ",
    Config: {
      Reset: "ነጥብ ወደ ነባር በይነገሩ",
      SaveAs: "ምሳሌ ላክስ አስቀምጥ",
    },
  },
  Export: {
    Title: "መልእክቶችን ማግኘት",
    Copy: "ቅዳ",
    Download: "ለውጥ",
    MessageFromYou: "መልእክት ከምላሽ",
    MessageFromChatGPT: "መልእክት ከ The ChatGPT",
    Share: "ለ KiAsk Share ማግኘት",
    Format: {
      Title: "ማግኘት አቅርብ",
      SubTitle: "Markdown ወይም PNG ስልክ",
    },
    IncludeContext: {
      Title: "የሚከተለውን መልእክት አክል",
      SubTitle: "የሚከተለውን መልእክት በማስተካከያ ወይም አይለውጡ",
    },
    Steps: {
      Select: "ምረጥ",
      Preview: "አሳይ",
    },
  },
  Select: {
    Search: "ፈልግ",
    All: "ሁሉንም ይምረጡ",
    Latest: "አዲስን ይምረጡ",
    Clear: "አጥፋ",
  },
  Memory: {
    Title: "የመረጃ መልእክት",
    EmptyContent: "አሁን የሚተላለፉ አይነት የለም።",
    Send: "መረጃውን ላክ",
    Copy: "ቅዳ",
    Reset: "የሚሰራውን ማስቀያለፍ",
    ResetConfirm:
      "ከሁሉም የተለያዩ የክርስትና ታሪኮች ማስቀያለፍ የሚፈልጉትን የድርጅት መረጃ የሚያደርጉት ነው። እርስዎ እስከሚያስቀይሩት ስልክ ድረስ ያልተጠናቀቀ ነው።",
  },
  Home: {
    NewChat: "አዲስ ውድ",
    DeleteChat: "የተመረጠው የውይይትን ርዝመት ያረጋግጡ?",
    DeleteToast: "ውይይት የተመረጠው የቤት ተወግዳ",
    Revert: "መሰረዝ",
  },
  Settings: {
    Title: "ማስተካከያዎች",
    SubTitle: "ሁሉም ማስተካከያዎች",
    Actions: {
      ClearAll: "ሁሉም ዳታቤዎችን አጥፋ",
      ResetAll: "ሁሉም ማስተካከያዎችን ወደ ነባር በይነገሩ",
      Close: "ዝጋ",
      ConfirmResetAll: "ሁሉም ማስተካከያዎችን ወደ ነባር በይነገሩ ይፈልጉ ይሆን?",
      ConfirmClearAll: "ሁሉም ዳታቤዎችን አጥፋ ይፈልጉ ይሆን?",
    },
    Lang: {
      Name: "ቋንቋ", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "ሁሉም ቋንቋዎች",
    },
    Avatar: "የቦት መሳሪያ",
    FontSize: {
      Title: "ፎንቶ መጠን",
      SubTitle: "የውይይት ይዘት ፎንቶ መጠን",
    },
    Update: {
      Version: (x: string) => `እትም: ${x}`,
      IsLatest: "የተመረጠ እትም",
      CheckUpdate: "እትም ፈልግ",
      IsChecking: "እትም ይጠብቅ...",
      FoundUpdate: (x: string) => `አዲስ እትም ተገኝቷል: ${x}`,
      GoToUpdate: "እትም",
    },
    SendKey: "የማስተላለፊያ ቁልፍ",
    Theme: "ትህጋ",
    TightBorder: "ጥቅም ያለው ግድግዳ",
    SendPreviewBubble: {
      Title: "ማሳወቂያውን በብርሃን አሳይ",
      SubTitle: "ማሳወቂያውን በብርሃን አሳይ",
    },
    Mask: {
      Title: "የማስተማርያ መስተካከያ",
      SubTitle: "ማስተማርያ መስተካከያን በመጀመሪያ አሳይ",
    },
    Prompt: {
      Disable: {
        Title: "ራስን ማስተላለፊ አይሰራም",
        SubTitle: "ለመፈጠር / ይህንን ለመፈጠር የሚሰራም",
      },
      List: "ፕሮምት ዝርዝር",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} የተለመዱ, ${custom} የተጠቀሱ`,
      Edit: "አስተካክል",
      Modal: {
        Title: "ፕሮምት ዝርዝር",
        Add: "አክል አንድ",
        Search: "ፕሮምትስን ፈልግ",
      },
      EditModal: {
        Title: "ፕሮምትን አስተካክል",
      },
    },
    HistoryCount: {
      Title: "የሚገኙ መልእክቶች ብዛት",
      SubTitle: "ለአስተካከዩ የተላለፉ መልእክቶች ብዛት",
    },
    CompressThreshold: {
      Title: "የታሪክ መስተካከያ ክፍልዎን የሚጠናቀቅ ምሁር",
      SubTitle:
        "የታሪክ መስተካከያው ማሳወቂያዎቹ በአልባሳት ውስጥ የተላለፉት ስልክ ማስቀያለፍ የሚፈልጉትን ነው",
    },
    Token: {
      Title: "API ቁልፍ",
      SubTitle: "የሚገባበትን የማስተላለፊያ ቁልፍ ይጠቀምበታል",
      Placeholder: "OpenAI API ቁልፍ",
    },
    Usage: {
      Title: "የመጠቀሚያ ብሔራዊ ማስገባት",
      SubTitle(used: any, total: any) {
        return `በዚህ ወር ተጠቃሚ ስራ የ$${used} ውጤት ጠቅላላ ይገባበታል, የተጠቃሚ ስራ የ$${total} ተጠቅላላ ይገባበታል`;
      },
      IsChecking: "ይጠብቅ...",
      Check: "ፈልግ",
      NoAccess: "API ቁልፍ ያስገቡትን የሚገባ እባክዎ እንዴት ይጠቀምበታል",
    },
    AccessCode: {
      Title: "የማስተላለፊያ ኮድ",
      SubTitle: "የማስተላለፊያ መግባት እንዴት ማድረግ አለው",
      Placeholder: "የማስተላለፊያ ኮድ ይላል",
    },
    Endpoint: {
      Title: "የኢንዱስትንት",
      SubTitle: "የሚሰጥ ማስተካከያ በ http(s):// መጀመሪያ ስልክ ምስክርነት ይኖርበታል",
    },
    Model: "ሞዴል",
    Temperature: {
      Title: "የውሂብ መስተካከያ",
      SubTitle: "የተለመደ ውጤት ከበላይ ስልክ የሚያስተላልፉ ስልክ ነው",
    },
    MaxTokens: {
      Title: "የተመረጡ ቶክን ብዛት",
      SubTitle: "የተለመደ ቃላትና የተለመደ ቶክንዎች ብዛት",
    },
    PresencePenalty: {
      Title: "የማስተካከያ አድራሻ",
      SubTitle:
        "የተለመደ የማስተካከያ አድራሻውን የተጠቀምበት ዋጋ የተመረጠው የማስተካከያ አድራሻ ነው",
    },
  },
  Store: {
    DefaultTopic: "አዲስ ውድ",
    BotHello: "ሰላም! እንዴት እንደሚሰጥ እናመሰግናለን?",
    Error: "አይስጥም, እባክዎ እንዴት ይሞክሩት ይፈልጋል።",
    Prompt: {
      History: (content: string) =>
        "ይህ ምረጥ መረጃ ከፈለጉት የውይይት ታሪክ የተጠቃሚው መረጃ ነው: " + content,
      Topic:
        "እባክዎ ተጠቃሚ የተለመደ አርስዎን ለማስተካከያ ፣ የምርጫ ክፍል የሚሰጥዎትን አቅርብ ይሰጣል።",
      Summarize:
        "የውይይትን ለማስተካከያ በመረጃ በተጠቃሚ ውስጥ የተጠቃሚውን ተጨማሪ ማስተካከያ ይቀንስላል።",
    },
  },
  Copy: {
    Success: "በቅንጥብ ተሳስተዋል",
    Failed: "በቅንጥብ ማስተላልፍ አልተሳስበትም, እባክዎ በቅንጥብ እንዴት ይሞክሩ",
  },
  Context: {
    Toast: (x: any) => `በ ${x} ማስተካከያዎች ከተጠቃሚዎች ጋር`,
    Edit: "የማስተካከያውን እና የመረጃ መልእክት",
    Add: "አስተካክል",
    Clear: "መረጃውን አጥፋ",
    Revert: "መሰረዝ",
  },
  Plugin: {
    Name: "አካል",
  },
  Mask: {
    Name: "ማስተማርያ",
    Page: {
      Title: "ፕሮምት ታሪክ",
      SubTitle: (count: number) => `${count} ፕሮምት ታሪክዎች`,
      Search: "ፕሮምትስን ፈልግ",
      Create: "አክል አንድ",
    },
    Item: {
      Info: (count: number) => `${count} ፕሮምትዎች`,
      Chat: "ውይይት",
      View: "መረጃ",
      Edit: "አስተካክል",
      Delete: "አጥፋ",
      DeleteConfirm: "እርስዎ ያረጋግጡ?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `የፕሮምት ታሪክ አስተካክል ${readonly ? "(እሴት)" : ""}`,
      Download: "ለውጥ",
      Clone: "ደውል",
    },
    Config: {
      Avatar: "የቦት መሳሪያ",
      Name: "የቦት ስም",
      Sync: {
        Title: "የቀረበው ቅኝት ተጠቃሚ ገብቻለው",
        SubTitle: "የቀረበው ቅኝት ተጠቃሚውን በየቀረበው ቅኝት ገብቻለው",
        Confirm: "የተጠቀምበትን የቀረበው ቅኝት ተጠቃሚውን በየቀረበው ቅኝት ገብቻለው?",
      },
      HideContext: {
        Title: "የማስተካከያ ቅኝትዎን ደብቅ አድርግ",
        SubTitle: "የማስተካከያ ቅኝትዎን የመረጃ አድራሻዎች ማግኘት ይቀንስላል",
      },
    },
  },
  NewChat: {
    Return: "ተመለስ",
    Skip: "በማስተማርያ አልተሳሳተውም",
    Title: "ማስተማርያ ምረጥ",
    SubTitle: "ማስተማርያ ለማስተማርያ የሚለውን ሳምንት ተከታተል",
    More: "ተጨማሪ ያለውን ይገናኙ",
    NotShow: "በአሁኑ ሳምንት አልተሳሳተውም",
    ConfirmNoShow: "በአሁኑ ሳምንት አልተሳሳተውም ይሄን አስተካክል። በማስተካከያው ላይ ይስማማል።",
  },

  UI: {
    Confirm: "አረጋግጥ",
    Cancel: "ይቅር",
    Close: "ዝጋ",
    Create: "አንድን ማስተካከያ",
    Edit: "አስተካክል",
  },
};

export default ah;