import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const be: RequiredLocaleType = {
  WIP: "Будзе даступна ў бліжэйшым часе...",
  Error: {
    Unauthorized:
      "Несанкцыянаваны доступ, калі ласка, увядзіце код доступу на старонцы [auth](/#/auth).",
  },
  Auth: {
    Title: "Неабходны код доступу",
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
      CompressedHistory: "Скампрэсаваная гісторыя памяці",
      Export: "Экспартаваць усе паведамленні ў Markdown",
      Copy: "Капіяваць",
      Stop: "Стоп",
      Retry: "Паўторыць",
      Delete: "Выдаліць",
    },
    InputActions: {
      Stop: "Стоп",
      ToBottom: "Да апошняга",
      Theme: {
        auto: "Аўтаматычная",
        light: "Светлая тэма",
        dark: "Цёмная тэма",
      },
      Prompt: "Прампты",
      Masks: "Маскі",
      Clear: "Ачысціць кантэкст",
      Settings: "Налады",
    },
    Rename: "Перайменаваць чат",
    Typing: "Печатанне...",
    Input: (submitKey: string) => {
      var inputHints = `Натысніце ${submitKey}, каб адправіць`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter, каб адабраць";
      }
      return inputHints + ", / для пошуку прамптаў";
    },
    Send: "Адправіць",
    Config: {
      Reset: "Скінуць на пачатковыя",
      SaveAs: "Захаваць як маску",
    },
  },
  Export: {
    Title: "Экспарт паведамленняў",
    Copy: "Капіраваць усё",
    Download: "Загрузіць",
    MessageFromYou: "Паведамленне ад вас",
    MessageFromChatGPT: "Паведамленне ад The ChatGPT",
    Share: "Падзяліцца на KiAsk Share",
    Format: {
      Title: "Фармат экспарту",
      SubTitle: "Markdown або малюнак у формаце PNG",
    },
    IncludeContext: {
      Title: "Уключыць кантэкст",
      SubTitle: "Экспартаваць кантэкстныя прампты ў масці або ня",
    },
    Steps: {
      Select: "Выбраць",
      Preview: "Прагляд",
    },
  },
  Select: {
    Search: "Пошук",
    All: "Выбраць усё",
    Latest: "Выбраць апошняе",
    Clear: "Ачысціць",
  },
  Memory: {
    Title: "Памятны прампт",
    EmptyContent: "Пакуль нічога няма.",
    Send: "Адправіць памятку",
    Copy: "Капіяваць памятку",
    Reset: "Скінуць сесію",
    ResetConfirm:
      "Скіданне прывядзе да выдалення гісторыі бягучага размовы і гістарычнай памяці. Вы ўпэўненыя, што хочаце скінуць?",
  },
  Home: {
    NewChat: "Новы чат",
    DeleteChat: "Пацвердзіце выдаленне абранага размовы?",
    DeleteToast: "Чат выдалены",
    Revert: "Адмяніць",
  },
  Settings: {
    Title: "Налады",
    SubTitle: "Усе налады",
    Actions: {
      ClearAll: "Ачысціць усе дадзеныя",
      ResetAll: "Скінуць усе налады",
      Close: "Закрыць",
      ConfirmResetAll: "Вы ўпэўненыя, што хочаце скінуць усе налады?",
      ConfirmClearAll: "Вы ўпэўненыя, што хочаце скінуць усе дадзеныя?",
    },
    Lang: {
      Name: "Мова", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Усе мовы",
    },
    Avatar: "Аватар",
    FontSize: {
      Title: "Памер шрыфта",
      SubTitle: "Настроіце памер шрыфта ў змесце чата",
    },
    Update: {
      Version: (x: string) => `Версія: ${x}`,
      IsLatest: "Апошняя версія",
      CheckUpdate: "Праверыць абнаўленне",
      IsChecking: "Правяраецца абнаўленне...",
      FoundUpdate: (x: string) => `Знойдзена новая версія: ${x}`,
      GoToUpdate: "Абнавіць",
    },
    SendKey: "Ключ адпраўкі",
    Theme: "Тэма",
    TightBorder: "Цесная мяжа",
    SendPreviewBubble: {
      Title: "Прадпрагляд адпраўкі",
      SubTitle: "Прадпрагляд Markdown у пузырку",
    },
    Mask: {
      Title: "Заставка маскі",
      SubTitle: "Паказваць заставку маскі перад пачаткам новага чата",
    },
    Prompt: {
      Disable: {
        Title: "Адключыць аўтазавяршэнне",
        SubTitle: "Увядзіце /, каб вызваць аўтазавяршэнне",
      },
      List: "Спіс прамптаў",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} убудаваныя, ${custom} карыстальніцкія`,
      Edit: "Рэдагаваць",
      Modal: {
        Title: "Спіс прамптаў",
        Add: "Дадаць адзін",
        Search: "Пошук прамптаў",
      },
      EditModal: {
        Title: "Рэдагаваць прампт",
      },
    },
    HistoryCount: {
      Title: "Колькасць далучаных паведамленняў",
      SubTitle: "Колькасць адпраўленых паведамленняў на адзін запыт",
    },
    CompressThreshold: {
      Title: "Праграма кампрэсіі гісторыі",
      SubTitle:
        "Будзе скампрэсавана, калі даўжыня некампрэсаваных паведамленняў перавышае зададзеную веліч",
    },
    Token: {
      Title: "Ключ API",
      SubTitle: "Выкарыстоўвайце свой ключ, каб абысці абмежаванне на код доступу",
      Placeholder: "Ключ OpenAI API",
    },
    Usage: {
      Title: "Баланс рахунку",
      SubTitle(used: any, total: any) {
        return `Выкарысталі ў гэтым месяцы $${used}, падпіска $${total}`;
      },
      IsChecking: "Правяраецца...",
      Check: "Праверыць",
      NoAccess: "Увядзіце ключ API, каб праверыць баланс",
    },
    AccessCode: {
      Title: "Код доступу",
      SubTitle: "Уключана кіраванне доступам",
      Placeholder: "Неабходны код доступу",
    },
    Endpoint: {
      Title: "Канечны пункт",
      SubTitle: "Карыстацкі канечны пункт павінен пачынацца з http(s)://",
    },
    Model: "Мадэль",
    Temperature: {
      Title: "Тэмпература",
      SubTitle: "Большае значэнне робіць вывад больш выпадковым",
    },
    MaxTokens: {
      Title: "Максімальная колькасць токенаў",
      SubTitle: "Максімальная даўжыня ўваходных токенаў і генераваных токенаў",
    },
    PresencePenalty: {
      Title: "Штраф за прысутнасць",
      SubTitle:
        "Большае значэнне павялічвае верагоднасць гутаркі пра новыя тэмы",
    },
  },
  Store: {
    DefaultTopic: "Новая размова",
    BotHello: "Прывітанне! Як я магу дапамагчы вам сёння?",
    Error: "Што-то пайшло не так, калі ласка, паспрабуйце пазней.",
    Prompt: {
      History: (content: string) =>
        "Гэта агляд гісторыі чата як падсумак: " + content,
      Topic:
        "Калі ласка, стварыце загаловак з чату, які апісвае нашу размову ў чатыры-пяць словаў без пунктуацыі, цытат, кропак, сімвалаў ці дадатковага тэксту. Выдаліць ўкладаныя лапкі.",
      Summarize:
        "Каротка апішыце абмеркаванне, якое будзе выкарыстоўвацца ў якасці прампта для будучага кантэксту, не больш за 200 слоў.",
    },
  },
  Copy: {
    Success: "Скапіравана ў буфер абмену",
    Failed: "Не ўдалося скапіраваць, калі ласка, дазвольце доступ да буфера абмену",
  },
  Context: {
    Toast: (x: any) => `З ${x} кантэкстнымі прамптамі`,
    Edit: "Кантэкстныя і памятныя прампты",
    Add: "Дадаць прампт",
    Clear: "Ачысціць кантэкст",
    Revert: "Адмяніць",
  },
  Plugin: {
    Name: "Плагін",
  },
  Mask: {
    Name: "Маска",
    Page: {
      Title: "Шаблон прампта",
      SubTitle: (count: number) => `${count} шаблонаў прамптаў`,
      Search: "Пошук шаблонаў",
      Create: "Стварыць",
    },
    Item: {
      Info: (count: number) => `${count} прамптаў`,
      Chat: "Чат",
      View: "Прагляд",
      Edit: "Рэдагаваць",
      Delete: "Выдаліць",
      DeleteConfirm: "Пацвердзіце выдаленне?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Рэдагаваць шаблон прампта ${readonly ? "(толькі для чытання)" : ""}`,
      Download: "Загрузіць",
      Clone: "Клонаваць",
    },
    Config: {
      Avatar: "Аватар бота",
      Name: "Імя бота",
      Sync: {
        Title: "Выкарыстоўваць глабальную канфігурацыю",
        SubTitle: "Выкарыстоўваць глабальную канфігурацыю ў гэтым чаце",
        Confirm: "Пацвердзіць перазапіс канфігурацыі глабальнай канфігурацыяй?",
      },
      HideContext: {
        Title: "Схаваць кантэкстныя прампты",
        SubTitle: "Не паказваць кантэкстныя прампты ў чаце",
      },
    },
  },
  NewChat: {
    Return: "Вярнуцца",
    Skip: "Пачаць",
    Title: "Выберыце маску",
    SubTitle: "Гутарка з душой за маскай",
    More: "Знайсці больш",
    NotShow: "Ніколі больш не паказваць",
    ConfirmNoShow: "Пацвердзіце адключэнне? Вы можаце ўключыць яго ў наладах пазней.",
  },

  UI: {
    Confirm: "Пацвердзіць",
    Cancel: "Скасаваць",
    Close: "Закрыць",
    Create: "Стварыць",
    Edit: "Рэдагаваць",
  },
};

export default be;