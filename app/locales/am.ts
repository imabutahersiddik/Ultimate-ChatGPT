import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const am: RequiredLocaleType = {
  WIP: "Շուտով...",
  Error: {
    Unauthorized:
      "Չի թույլատրվում մուտք, խնդրում եմ մուտքագրել մուտքատումային կոդը [auth](/#/auth) էջում։",
  },
  Auth: {
    Title: "Կոդի անհրաժեշտություն",
    Tips: "Խնդրում եմ մուտքագրել կոդը ստորևում",
    Input: "մուտքագրեք կոդը",
    Confirm: "Հաստատել",
    Later: "Հետո",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} նամակ`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} նամակ The ChatGPT-ի հետ`,
    Actions: {
      ChatList: "Գնացեք նամակների ցանկ",
      CompressedHistory: "Պահպանված պատմությունից մեծացված հիշողությունի խոշորացում",
      Export: "Արտահանել բոլոր նամակները Markdown-ի տեսքով",
      Copy: "Պատճենել",
      Stop: "Կանգ դառնալ",
      Retry: "Կրկին փորձել",
      Delete: "Ջնջել",
    },
    InputActions: {
      Stop: "Կանգ դառնալ",
      ToBottom: "Վերջում հիմա",
      Theme: {
        auto: "Ավտոմատ",
        light: "Լուսաբաց թեմա",
        dark: "Դայում թեմա",
      },
      Prompt: "Հիշողություններ",
      Masks: "Դեմքեր",
      Clear: "Մաքրել հիշողությունը",
      Settings: "Կարգավորումներ",
    },
    Rename: "Անվանել նամակը",
    Typing: "Գրում է...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey}-ը ուղարկելու համար`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter-ը պատահականում պատահելու համար";
      }
      return inputHints + ", /-ը որոնելու համար";
    },
    Send: "Ուղարկել",
    Config: {
      Reset: "Վերակարգավորել կանխորոշվածը",
      SaveAs: "Հիշել որպես դեմք",
    },
  },
  Export: {
    Title: "Արտահանել նամակները",
    Copy: "Պատճենել բոլորը",
    Download: "Ներբեռնել",
    MessageFromYou: "Նամակ Ձեր կողմից",
    MessageFromChatGPT: "Նամակ The ChatGPT-ի կողմից",
    Share: "Կիսվել KiAsk Share-ում",
    Format: {
      Title: "Արտահանման ձևաչափը",
      SubTitle: "Markdown-ի կամ PNG պատկերի տեսքով",
    },
    IncludeContext: {
      Title: "Հիշել համատեղելին",
      SubTitle: "Հիշել համատեղելին դաշտերը մասնակցող հարցերը կամ ոչ",
    },
    Steps: {
      Select: "Ընտրել",
      Preview: "Դիտել",
    },
  },
  Select: {
    Search: "Որոնում",
    All: "Ընտրել բոլորը",
    Latest: "Ընտրել վերջինը",
    Clear: "Մաքրել",
  },
  Memory: {
    Title: "Հիշողությունից պատմություն",
    EmptyContent: "Ինչ-որ բան դեռ չկա։",
    Send: "Ուղարկել հիշողությունը",
    Copy: "Պատճենել հիշողությունը",
    Reset: "Վերակարգավորել համատեղելին",
    ResetConfirm:
      "Հիշողությունը զրոյացնում է ընթացիկ խոշորացման պատմությունը և պատմությունային հիշողությունը։ Հաստատեք, որ ցանկանում եք վերակարգավորել։",
  },
  Home: {
    NewChat: "Նոր խոսակցություն",
    DeleteChat: "Հաստատեք ընտրված խոսակցության ջնջումը",
    DeleteToast: "Հանգույցն ջնջված է",
    Revert: "Վերադառնալ",
  },
  Settings: {
    Title: "Կարգավորումներ",
    SubTitle: "Բոլոր կարգավորումները",
    Actions: {
      ClearAll: "Մաքրել բոլոր տվյալները",
      ResetAll: "Վերակարգավորել բոլոր կարգավորումները",
      Close: "Փակել",
      ConfirmResetAll: "Հաստատեք, որ ցանկանում եք վերակարգավորել բոլոր կարգավորումները։",
      ConfirmClearAll: "Հաստատեք, որ ցանկանում եք վերակարգավորել բոլոր տվյալները։",
    },
    Lang: {
      Name: "Լեզու", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Բոլոր լեզուները",
    },
    Avatar: "Անձնական պատկեր",
    FontSize: {
      Title: "Տառատեսակի չափսը",
      SubTitle: "Կազմակերպեք խոսակցության տեքստի չափսը",
    },
    Update: {
      Version: (x: string) => `Տարբերակը: ${x}`,
      IsLatest: "Վերջին տարբերակը",
      CheckUpdate: "Ստուգել թարմացումը",
      IsChecking: "Ստուգում...",
      FoundUpdate: (x: string) => `Գտնվեց նոր տարբերակը: ${x}`,
      GoToUpdate: "Թարմացնել",
    },
    SendKey: "Ուղարկման բանալին",
    Theme: "Թեմա",
    TightBorder: "Թանկ սահմանապատկեր",
    SendPreviewBubble: {
      Title: "Առաջնական նամակի նախադիտում",
      SubTitle: "Նախադիտեք markdown-ը բուբլում",
    },
    Mask: {
      Title: "Դեմքի սկրին էկրան",
      SubTitle: "Ցուցադրեք դեմքի սկրին էկրանը նոր խոսակցությունից առաջ",
    },
    Prompt: {
      Disable: {
        Title: "Ավտոմատ լրացուցիչը անջատել",
        SubTitle: "Մուտքագրեք / ՝ ավտոմատ լրացուցիչը ակտիվացնելու համար",
      },
      List: "Հիշեք լրացուցիչները",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} ներառյալների, ${custom} օգտագործողի սահմանափակված`,
      Edit: "Խմբագրել",
      Modal: {
        Title: "Հիշողության ցուցակ",
        Add: "Ավելացնել մեկը",
        Search: "Որոնել լրացուցիչները",
      },
      EditModal: {
        Title: "Խմբագրել լրացուցիչը",
      },
    },
    HistoryCount: {
      Title: "Կցված նամակների քանակը",
      SubTitle: "Այստեղից ուղարկված նամակների քանակը",
    },
    CompressThreshold: {
      Title: "Պատմության խոշորացման վայրկյանի սահմանակը",
      SubTitle:
        "Եթե անխոշորացված նամակների երթուղիների երթուղումը գերազանցում է նշվածը",
    },
    Token: {
      Title: "API բանալին",
      SubTitle: "Օգտագործեք ձեր բանալին մուտքագրելու համար, որպեսզի անտեսել մուտքատումային կոդի սահմանափակումը",
      Placeholder: "OpenAI API բանալին",
    },
    Usage: {
      Title: "Հաշվի մնացորդ",
      SubTitle(used: any, total: any) {
        return `Այս ամիս օգտագործված գումարը $${used}, բաժանորդագրում $${total}`;
      },
      IsChecking: "Ստուգվում է...",
      Check: "Ստուգել",
      NoAccess: "Մուտքագրեք API բանալին, որպեսզի ստուգեք հաշվի մնացորդը",
    },
    AccessCode: {
      Title: "Մուտքագրման կոդ",
      SubTitle: "Մուտքագրման կոդի մատչելիությունը միացված է",
      Placeholder: "Մուտքագրեք մուտքագրման կոդը",
    },
    Endpoint: {
      Title: "Անվտանգության կայանամիավորում",
      SubTitle: "Անհատական կայանամիավորման կապը պետք է սկսվի http(s)://-ով",
    },
    Model: "Մոդել",
    Temperature: {
      Title: "Ջերմաստիճան",
      SubTitle: "Մեծ արժեքը ավելացնում է պատասխանի պատասխանը",
    },
    MaxTokens: {
      Title: "Մաքսիմալ նշանների քանակ",
      SubTitle: "Մուտքագրման նշանների և գեներացված նշանների արժեքը",
    },
    PresencePenalty: {
      Title: "Առկայության ուղիների վարահանում",
      SubTitle:
        "Մեծ արժեքը մեծացնում է նոր թեմաների մասնակցության հանդիպումը՝ խորհուրդ տալու համար",
    },
  },
  Store: {
    DefaultTopic: "Նոր խոսակցություն",
    BotHello: "Բարև! Ինչպե՞ս կարող եմ օգնել ձեզ այսքանով։",
    Error: "Ինչ-որ բան սխալ է գալիս, խնդրում եմ փորձեք նորից հետո։",
    Prompt: {
      History: (content: string) =>
        "Սա հիշողության ամփոփումն է՝ " + content,
      Topic:
        "Խնդրում եմ գեներացնել չորս կամ հինգ բառանիշյան վերնագրություն, որը ամփոփելու է մեր խոսակցությանը առանց առաջնային բացատի, գծիկների, նշանների, կետերի, սիմվոլների կամ այլ տեքստի։ Մաքրեք շրջանակները։",
      Summarize:
        "Ամփոփեք հանգույցը կարճագույն՝ 200 բառից քիչ՝ որպես հաջորդական համարի համար։",
    },
  },
  Copy: {
    Success: "Պատճենվեց սահմանվածը",
    Failed: "Պատճենումը ձախողվեց, խնդրում եմ տալ թույլատրելու ցուցակին մուտքը",
  },
  Context: {
    Toast: (x: any) => `Համատեղելին ընդգրված է ${x} հարցերով`,
    Edit: "Համատեղելի և հիշողության հարցեր",
    Add: "Ավելացնել հարցը",
    Clear: "Մաքրել համատեղելին",
    Revert: "Վերադառնալ",
  },
  Plugin: {
    Name: "Մեկնաբառ",
  },
  Mask: {
    Name: "Մասկ",
    Page: {
      Title: "Հարցման ձևաչափ",
      SubTitle: (count: number) => `${count} հարցման ձևաչափ`,
      Search: "Որոնել ձևաչափերը",
      Create: "Ստեղծել",
    },
    Item: {
      Info: (count: number) => `${count} հարցման ձևաչափ`,
      Chat: "խոսակցություն",
      View: "Դիտել",
      Edit: "Խմբագրել",
      Delete: "Ջնջել",
      DeleteConfirm: "Հաստատեք ջնջելը",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Խմբագրել հարցման ձևաչափը ${readonly ? "(միայն ընթացիկ)" : ""}`,
      Download: "Ներբեռնել",
      Clone: "Պատճենել",
    },
    Config: {
      Avatar: "Բոտի անձնական պատկեր",
      Name: "Բոտի անուն",
      Sync: {
        Title: "Օգտագործել ընդգրական կոնֆիգը",
        SubTitle: "Օգտագործել ընդգրական կոնֆիգը այս խոսակցության մեջ",
        Confirm: "Հաստատեք ընդգրական կոնֆիգը անջատելու համար",
      },
      HideContext: {
        Title: "Թաքցնել համատեղելին",
        SubTitle: "Չցուցադրել համատեղելին խոսակցության ընթացիկ հարցերում",
      },
    },
  },
  NewChat: {
    Return: "Վերադառնալ",
    Skip: "Բացակայել",
    Title: "Ընտրեք մասկը",
    SubTitle: "խոսակցեք մասկի հեղինակի հետ",
    More: "Գտնել ավելին",
    NotShow: "Այսինքն չցույց տալ",
    ConfirmNoShow: "Հաստատեք, որ ցանկանում եք անջատել։ Դուք կարող եք միացնել այն կարգավորումներում։",
  },

  UI: {
    Confirm: "Հաստատել",
    Cancel: "Չեղարկել",
    Close: "Փակել",
    Create: "Ստեղծել",
    Edit: "Խմբագրել",
  },
};

export default am;