import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const en: RequiredLocaleType = {
  WIP: "У межах...",
  Error: {
    Unauthorized:
      "Несанкцыянаваны доступ, калі ласка, увядзіце код доступу на старонцы [auth](/#/auth).",
  },
  Auth: {
    Title: "Патрэбен код доступу",
    Tips: "Калі ласка, увядзіце код доступу ніжэй",
    Input: "код доступу",
    Confirm: "Пацвердзіць",
    Later: "Пазней",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} паведамленняў`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} паведамленняў з The ChatGPT`,
    Actions: {
      ChatList: "Перайсці да спісу чатоў",
      CompressedHistory: "Стрыманы запампоўка гісторыі памяці",
      Export: "Экспартаваць усе паведамленні ў Markdown",
      Copy: "Капіяваць",
      Stop: "Зупыніць",
      Retry: "Паўтор",
      Delete: "Выдаліць",
    },
    InputActions: {
      Stop: "Зупыніць",
      ToBottom: "Да апошніх",
      Theme: {
        auto: "Аўта",
        light: "Светлая тэма",
        dark: "Цёмная тэма",
      },
      Prompt: "Пампоўкі",
      Masks: "Маскі",
      Clear: "Ачысціць кантэкст",
      Settings: "Налады",
    },
    Rename: "Перайменаваць чат",
    Typing: "Пачатак набарання...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} для адпраўкі`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter для адзінаковага радка";
      }
      return inputHints + ", / для пошуку пампоўкі";
    },
    Send: "Адправіць",
    Config: {
      Reset: "Скінуць на пачатковыя налады",
      SaveAs: "Захаваць як маску",
    },
  },
  Export: {
    Title: "Экспарт паведамленняў",
    Copy: "Капіяваць ўсе",
    Download: "Спампаваць",
    MessageFromYou: "Паведамленне ад вас",
    MessageFromChatGPT: "Паведамленне ад The ChatGPT",
    Share: "Сподзявацца на кішак",
    Format: {
      Title: "Формат экспарту",
      SubTitle: "Markdown або выява ў формаце PNG",
    },
    IncludeContext: {
      Title: "Уключыць кантэкст",
      SubTitle: "Экспартаваць пампоўкі кантэксту ў гульні ці ня",
    },
    Steps: {
      Select: "Выбраць",
      Preview: "Прагледзець",
    },
  },
  Select: {
    Search: "Пошук",
    All: "Выбраць усе",
    Latest: "Выбраць апошнія",
    Clear: "Ачысціць",
  },
  Memory: {
    Title: "Пампоўка памяці",
    EmptyContent: "Пакуль нічога.",
    Send: "Адправіць памяць",
    Copy: "Капіяваць памяць",
    Reset: "Скінуць сесію",
    ResetConfirm:
      "Ачыстка пампоўка сапраўдніць цяперашнюю гісторыю размовы і гістарычную памяць. Вы ўпэўненыя, што хочаце скінуць?",
  },
  Home: {
    NewChat: "Новы разгавор",
    DeleteChat: "Пацвердзіце выдаленне выбранага размову?",
    DeleteToast: "Размова выдалена",
    Revert: "Вярнуць",
  },
  Settings: {
    Title: "Налады",
    SubTitle: "Усе налады",
    Actions: {
      ClearAll: "Ачысціць усе дадзеныя",
      ResetAll: "Скінуць усе налады",
      Close: "Зачыніць",
      ConfirmResetAll: "Ці ўпэўненыя, што хочаце скінуць усе канфігурацыі?",
      ConfirmClearAll: "Ці ўпэўненыя, што хочаце скінуць усе дадзеныя?",
    },
    Lang: {
      Name: "Мова", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Усе мовы",
    },
    Avatar: "Аватар карыстальніка",
    FontSize: {
      Title: "Памер шрыфту",
      SubTitle: "Рэгуляванне памеру шрыфту ў тэксце чату",
    },
    Update: {
      Version: (x: string) => `Версія: ${x}`,
      IsLatest: "Апошняя версія",
      CheckUpdate: "Праверце абнаўленне",
      IsChecking: "Праверка абнаўлення...",
      FoundUpdate: (x: string) => `Знойдзена новая версія: ${x}`,
      GoToUpdate: "Абнавіць",
    },
    SendKey: "Ключ для адпраўкі",
    Theme: "Тэма",
    TightBorder: "Цесная межа",
    SendPreviewBubble: {
      Title: "Адпраўка папярэджання",
      SubTitle: "Прагляд маркдаўніка ў малюнку",
    },
    Mask: {
      Title: "Заставка маскі",
      SubTitle: "Паказаць запуск маскі перад пачатком новага размову",
    },
    Prompt: {
      Disable: {
        Title: "Адключыць аўтазапаўненне",
        SubTitle: "Увядзіце / для актывацыі аўтазапаўнення",
      },
      List: "Спіс пампоўкаў",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} убудаваныя, ${custom} карыстальніка вызначаныя`,
      Edit: "Рэдагаваць",
      Modal: {
        Title: "Спіс пампоўкаў",
        Add: "Дадаць адзін",
        Search: "Пошук пампоўкі",
      },
      EditModal: {
        Title: "Рэдагаваць пампоўку",
      },
    },
    HistoryCount: {
      Title: "Колькасць прымаючых паведамленняў",
      SubTitle: "Колькасць адпраўленых паведамленняў, падтрымліваючыя на зварот",
    },
    CompressThreshold: {
      Title: "Памежак кампрэсіі гісторыі",
      SubTitle:
        "Будзе кампрэсіравацца, калі даўжыня непакідзаных паведамленняў перавышае значэнне",
    },
    Token: {
      Title: "Ключ API",
      SubTitle: "Выкарыстоўвайце свой ключ для адхілення ад ліміту коду доступу",
      Placeholder: "OpenAI ключ API",
    },
    Usage: {
      Title: "Баланс акаўнта",
      SubTitle(used: any, total: any) {
        return `Выкарыстана ў гэтым месяцы $${used}, падпіска $${total}`;
      },
      IsChecking: "Здаецца...",
      Check: "Праверка",
      NoAccess: "Увядзіце ключ API для праверкі балансу",
    },
    AccessCode: {
      Title: "Код доступу",
      SubTitle: "Уключаны кантроль доступу",
      Placeholder: "Патрэбны код доступу",
    },
    Endpoint: {
      Title: "Канчатковая кропка",
      SubTitle: "Каштоўнасць карыстацкай канчатковай кропкі павінна пачынацца з http(s)://",
    },
    Model: "Мадэль",
    Temperature: {
      Title: "Тэмпература",
      SubTitle: "Большае значэнне робіць вынік больш выпадковым",
    },
    MaxTokens: {
      Title: "Максімальнае колькасць токенаў",
      SubTitle: "Максімальная даўжыня уваходных токенаў і створаных токенаў",
    },
    PresencePenalty: {
      Title: "Штраф за прысутнасць",
      SubTitle: "Большае значэнне павялічвае верагоднасць адмаўленняся от новых тэм",
    },
  },
  Store: {
    DefaultTopic: "Новы разгавор",
    BotHello: "Прывітанне! Як я магу дапамагчы вам сёння?",
    Error: "Штосьці пайшло не так, калі ласка, паспрабуйце пазней.",
    Prompt: {
      History: (content: string) =>
        "Гэта кароткае падсумкаванне гісторыі чата ў якасці агляду: " + content,
      Topic:
        "Калі ласка, стварыце назву чату, якая прадстаўляе сабой чат без ніякіх лід-ін, пунктуацыі, лапок, кропак, сімвалаў або дадатковага тэксту. Адсутнічаюць лапкі.",
      Summarize:
        "Удзельнічайце ў абмеркаванні насупраць 200 слоў або менш для выкарыстання як пуроўна датэксту для маіх дадатковых праграм, напішыце яго якую-небудзь тэму.",
    },
  },
  Copy: {
    Success: "Скапіявана ў буфер абмену",
    Failed: "Не атрымаецца скапіраваць, калі ласка, надайце дазвол на доступ да буфера абмену",
  },
  Context: {
    Toast: (x: any) => `З кантэкстнымі пампоўкамі ${x}`,
    Edit: "Кантэкстныя і пампоўкі памяці",
    Add: "Дадаць пампоўку",
    Clear: "Ачысціць кантэкст",
    Revert: "Вярнуць",
  },
  Plugin: {
    Name: "Дадатак",
  },
  Mask: {
    Name: "Маска",
    Page: {
      Title: "Шаблон пампоўкі",
      SubTitle: (count: number) => `${count} шаблоны пампоўкі`,
      Search: "Пошук шаблонаў",
      Create: "Стварыць",
    },
    Item: {
      Info: (count: number) => `${count} пампоўкі`,
      Chat: "Чат",
      View: "Прагледзець",
      Edit: "Рэдагаваць",
      Delete: "Выдаліць",
      DeleteConfirm: "Пацвердзіце выдаленне?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Рэдагаваць шаблон пампоўкі ${readonly ? "(забаронена рэдагаванне)" : ""}`,
      Download: "Спампаваць",
      Clone: "Клан",
    },
    Config: {
      Avatar: "Аватар батэрсі",
      Name: "Імя батэра",
      Sync: {
        Title: "Выкарыстоўваць глабальныя налады",
        SubTitle: "Выкарыстоўваць глабальныя налады ў гэтым чаце",
        Confirm: "Ці пацвердзіце перазвычайне камандамі конфігурацыі з глабальнай конфігурацыяй?",
      },
      HideContext: {
        Title: "Схаваць кантэкстныя пампоўкі",
        SubTitle: "Не паказваць пампоўкі ў кантэксце ў чаце",
      },
    },
  },
  NewChat: {
    Return: "Вярнуцца",
    Skip: "Пачаць",
    Title: "Выбраць маску",
    SubTitle: "Чат з душаю праз маску",
    More: "Знайсці больш",
    NotShow: "Не паказваць больш",
    ConfirmNoShow: "Ці ўпэўненыя, што хочаце адключыць? Вы можаце ўключыць яго ў наладах пазней.",
  },

  UI: {
    Confirm: "Пацвердзіць",
    Cancel: "Скасаваць",
    Close: "Зачыніць",
    Create: "Стварыць",
    Edit: "Рэдагаваць",
  },
};

export default by;
