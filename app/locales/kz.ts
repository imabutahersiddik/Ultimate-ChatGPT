import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

const kz: LocaleType = {
  WIP: "Жақында көрсетіледі...",
  Error: {
    Unauthorized:
      "Ultimate ChatGPT-ны [Patreon](https://patreon.com/KiasK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link) арқылы немесе Bkash (+880 1812-715289) арқылы қолдау көрсетіңіз, [Worldremit](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob) арқылы жолдану, Мобильді өту нөмірі: +880 1812-715289, біздің құрылымды дайындау және қолдау көрсету үшін.",
  },
  Auth: {
    Title: "Кіру коды қажет",
    Tips: "Өтініш, төмендегі кіру кодын енгізіңіз",
    Input: "кіру коды",
    Confirm: "Растау",
    Later: "Кейінірек",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} хабарлама`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} хабарлама`,
    Actions: {
      ChatList: "Хабарламалар тізіміне өту",
      CompressedHistory: "Тарихтық мәліметтің қысқартылған нұсқасы",
      Export: "Барлық хабарламаларды Markdown ретінде экспорттау",
      Copy: "Көшіру",
      Stop: "Тоқтату",
      Retry: "Қайталау",
      Pin: "Түсіру",
      PinToastContent: "Контекстуалды нұсқаларға 2 хабарлама түсірілді",
      PinToastAction: "Көру",
      Delete: "Жою",
      Edit: "Өзгерту",
    },
    Commands: {
      new: "Жаңа сөздесу бастау",
      newm: "Маска менімен жаңа сөздесу бастау",
      next: "Келесі сөздесу",
      prev: "Алдыңғы сөздесу",
      clear: "Контекстті тазалау",
      del: "Сөздесу жою",
    },
    InputActions: {
      Stop: "Тоқтату",
      ToBottom: "Соңғыға",
      Theme: {
        auto: "Автоматты",
        light: "Жарық тақырып",
        dark: "Қара тақырып",
      },
      Prompt: "Нұсқалар",
      Masks: "Маскалар",
      Clear: "Контекстті тазалау",
      Settings: "Баптаулар",
    },
    Rename: "Сөздесуді атандыру",
    Typing: "Жазуда...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} жіберу үшін`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Enter + Shift түймесін басу арқылы жиындықтау";
      }
      return inputHints + ", / нұсқаларды іздеу үшін, : командаларды пайдалану үшін";
    },
    Send: "Жіберу",
    Config: {
      Reset: "Өзгертуді өзгерткенде",
      SaveAs: "Маска ретінде сақтау",
    },
  },
  Export: {
    Title: "Хабарламаларды экспорттау",
    Copy: "Барлығын көшіру",
    Download: "Жүктеу",
    MessageFromYou: "Сізден хабар",
    MessageFromChatGPT: "ChatGPT-ден хабар",
    Share: "KiAsk Share-ге жіберу",
    Format: {
      Title: "Экспорт форматы",
      SubTitle: "Markdown немесе PNG суреті",
    },
    IncludeContext: {
      Title: "Контекстті қосу",
      SubTitle: "Маскаларда немесе жоқ контекстті нұсқаларды экспорттау",
    },
    Steps: {
      Select: "Таңдау",
      Preview: "Алдын ала қарау",
    },
    Image: {
      Toast: "Суреттену...",
      Modal: "Узақ басып немесе оң түймені басып суретті сақтау",
    },
  },
  Select: {
    Search: "Іздеу",
    All: "Барлығын таңдау",
    Latest: "Соңғыларды таңдау",
    Clear: "Тазалау",
  },
  Memory: {
    Title: "Жады қатынау",
    EmptyContent: "Ештеңе жоқ.",
    Send: "Жады жіберу",
    Copy: "Жады көшіру",
    Reset: "Сессияны қайта орнату",
    ResetConfirm:
      "Қайта орнатуды аяқтау жасау үшін, ағымдағы сөздесу тарихы мен тарихтық жады тазалау керек. Сіз сенімдісіз бе?",
  },
  Home: {
    NewChat: "Жаңа сөздесу",
    DeleteChat: "Таңдалған сөздесуді жоюды растауға сенімдісіз бе?",
    DeleteToast: "Сөздесу жойылды",
    Revert: "Қайтару",
  },
  Settings: {
    Title: "Баптаулар",
    SubTitle: "Барлық баптаулар",
    Danger: {
      Reset: {
        Title: "Барлық баптауларды қайта орнату",
        SubTitle: "Барлық баптауларды өзгертуді өзгерту",
        Action: "Қайта орнату",
        Confirm: "Барлық баптауларды өзгертуді растауға сенімдісіз бе?",
      },
      Clear: {
        Title: "Барлық деректерді тазалау",
        SubTitle: "Барлық хабарламалар мен баптауларды тазалау",
        Action: "Тазалау",
        Confirm: "Барлық хабарламалар мен баптауларды тазалауға сенімдісіз бе?",
      },
    },
    Lang: {
      Name: "Қазақ", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Барлық тілдер",
    },
    Avatar: "Аватар",
    FontSize: {
      Title: "Қаріп өлшемі",
      SubTitle: "Сөздесу мазмұнының қаріп өлшемін өзгерту",
    },

    InputTemplate: {
      Title: "Кіру үлгісі",
      SubTitle: "Жаңа хабар кіру үлгісіне жолдау жасалады",
    },

    Update: {
      Version: (x: string) => `Нұсқа: ${x}`,
      IsLatest: "Соңғы нұсқа",
      CheckUpdate: "Жаңартуды тексеру",
      IsChecking: "Жаңарту тексерілуде...",
      FoundUpdate: (x: string) => `Жаңа нұсқа табылды: ${x}`,
      GoToUpdate: "Жаңарту",
    },
    SendKey: "Жіберу кілті",
    Theme: "Тақырып",
    TightBorder: "Жақтығыш шегі",
    SendPreviewBubble: {
      Title: "Жіберу алдын ала бүлшегі",
      SubTitle: "Бүлшекте Markdown көрсету",
    },
    Mask: {
      Splash: {
        Title: "Маска Splash экраны",
        SubTitle: "Жаңа сөздесуден алдын маска Splash экранын көрсету",
      },
      Builtin: {
        Title: "Ишкі маскаларды жасыру",
        SubTitle: "Маска тізімінде ишкі маскаларды жасыру",
      },
    },
    Prompt: {
      Disable: {
        Title: "Автоматты толтыруды ажырату",
        SubTitle: "Автоматты толтыруды іске қосу үшін / енгізіңіз",
      },
      List: "Нұсқалар тізімі",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} қосымша, ${custom} пайдаланушы тарапынан анықталған`,
      Edit: "Өзгерту",
      Modal: {
        Title: "Нұсқалар тізімі",
        Add: "Бір таңдау",
        Search: "Нұсқаларды іздеу",
      },
      EditModal: {
        Title: "Нұсқаны өзгерту",
      },
    },
    HistoryCount: {
      Title: "Қосымша хабарламалар саны",
      SubTitle: "Сұрау басына жіберілген хабарламалар саны",
    },
    CompressThreshold: {
      Title: "Тарихтық қысқарту бағыты",
      SubTitle:
        "Жасалған хабарламалар ұзындығы белгіленген мәннен асып кеткенде қысқартады",
    },
    Token: {
      Title: "API кілті",
      SubTitle: "Қатынау шектерін елемеу үшін өз кілтіңізді пайдаланыңыз",
      Placeholder: "OpenAI API кілті",
    },
    Usage: {
      Title: "Жазба балансы",
      SubTitle(used: any, total: any) {
        return `Осы айда қолданылды $${used}, жазба $${total}`;
      },
      IsChecking: "Тексеруде...",
      Check: "Тексеру",
      NoAccess: "Балансын тексеру үшін API кілтін енгізіңіз",
    },
    AccessCode: {
      Title: "Кіру коды",
      SubTitle: "Қатынау бақылау қосылған",
      Placeholder: "Кіру коды қажет",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Ыңғайлы басталатын жеке endpoint http(s):// басталуы керек",
    },
    Model: "Модель",
    Temperature: {
      Title: "Жылдамдық",
      SubTitle: "Үздік мән жабылуына көбейту",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Жылдамдықпен бірге бұл мәнді өзгерту",
    },
    MaxTokens: {
      Title: "Максималды токендер",
      SubTitle: "Кіру токендері мен жасалған токендердің ең үлкен өлшемі",
    },
    PresencePenalty: {
      Title: "Болушақтық штрафы",
      SubTitle: "Үлкен мән жаңа тақырыптар туралы сөйлеу үмітін арттырады",
    },
    FrequencyPenalty: {
      Title: "Тағылым штрафы",
      SubTitle: "Үлкен мән тең хабарламаны қайталау үмітін азайтады",
    },
  },
  Store: {
    DefaultTopic: "Жаңа сөздесу",
    BotHello: "Сөздесуде сізге қалай көмек көрсете аламын?",
    Error: "Бірдеу қате кетті, кейінірек әрекеттесуіңізді сынап көріңіз.",
    Prompt: {
      History: (content: string) =>
        "Бұл сөздесу тарихының қысқаша құрылысы: " + content,
      Topic:
        "Жалғастырусыз, аударма, рөлдер, аударма тақырыбы, нысандар, белгілер, немесе қосымша мәтіндер болмасын деп, біздің сөздесу туралы тақырыбыңызды түсіндіретін төрт-бес сөзді жаңырауын енгізіңіз.",
      Summarize:
        "Кез-келген мезгілде, келесі сөздесудің бәсекеге арналған 200 сөзден азырақ түсіндірмесін жасаңыз.",
    },
  },
  Copy: {
    Success: "Буферге көшірілді",
    Failed: "Көшіру сәтсіз аяқталды, басшылыққа кіру рұқсатын беріңіз",
  },
  Context: {
    Toast: (x: any) => `Контекстуалды нұсқалармен ${x}`,
    Edit: "Ағымдағы сөздесу баптаулары",
    Add: "Нұсқа қосу",
    Clear: "Контекст тазаланды",
    Revert: "Қайтару",
  },
  Plugin: {
    Name: "Плагин",
  },
  Mask: {
    Name: "Маска",
    Page: {
      Title: "Нұсқа үлгісі",
      SubTitle: (count: number) => `${count} нұсқа үлгісі`,
      Search: "Үлгілерді іздеу",
      Create: "Жасау",
    },
    Item: {
      Info: (count: number) => `${count} нұсқа`,
      Chat: "Сөздесу",
      View: "Көру",
      Edit: "Өзгерту",
      Delete: "Жою",
      DeleteConfirm: "Жоюды растауға сенімдісіз бе?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Нұсқа үлгісін өзгерту ${readonly ? "(тек оқулы)" : ""}`,
      Download: "Жүктеу",
      Clone: "Клондау",
    },
    Config: {
      Avatar: "Бот аватары",
      Name: "Бот аты",
      Sync: {
        Title: "Жалпы баптауды пайдалану",
        SubTitle: "Бұл сөздесуде жалпы баптауларды пайдалану",
        Confirm: "Жалпы баптаулармен өзгертуді растауға сенімдісіз бе?",
      },
      HideContext: {
        Title: "Контекстті нұсқаларды жасыру",
        SubTitle: "Сөздесуде контекстті нұсқаларды көрсетпеу",
      },
      Share: {
        Title: "Бұл масканы бөлісу",
        SubTitle: "Бұл масканың сілтемесін жасау",
        Action: "Сілтемені көшіру",
      },
    },
  },
  NewChat: {
    Return: "Қайту",
    Skip: "Тек бастау",
    Title: "Маска таңдау",
    SubTitle: "Маска артындағы Дуылығы меніңге сөздесу",
    More: "Толықтыру",
    NotShow: "Көрсетпеу",
    ConfirmNoShow: "Жабу үшін растау? Сіз оны параметрлерде қоса аласыз.",
  },

  UI: {
    Confirm: "Растау",
    Cancel: "Болдырмау",
    Close: "Жабу",
    Create: "Жасау",
    Edit: "Өзгерту",
  },
  Exporter: {
    Model: "Модель",
    Messages: "Хабарламалар",
    Topic: "Тақырып",
    Time: "Уақыт",
  },
};

export default kz;