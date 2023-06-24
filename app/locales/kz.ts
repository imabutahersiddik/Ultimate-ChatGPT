import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const kz: RequiredLocaleType = {
  WIP: "Тезкереледі...",
  Error: {
    Unauthorized:
      "Қуатсыз жүйеге кіру үшін, құпия сөзді [auth](/#/auth) бетінде кіріңіз.",
  },
  Auth: {
    Title: "Құпия сөз қажет",
    Tips: "Төмендегі құпия сөзді кіріңіз",
    Input: "құпия сөз",
    Confirm: "Растау",
    Later: "Кейінірек",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} хабарлама`,
  },
  Chat: {
    SubTitle: (count: number) => `ChatGPT біріктірген ${count} хабарлама`,
    Actions: {
      ChatList: "Жәтірғы тізіміне өту",
      CompressedHistory: "Сымбалды тарихын кемпілдіру",
      Export: "Барлық хабарламаларды Markdown ретінде экспорттау",
      Copy: "Көшіріп алу",
      Stop: "Тоқтату",
      Retry: "Қайталау",
      Delete: "Жою",
    },
    InputActions: {
      Stop: "Тоқтату",
      ToBottom: "Соңғы неше нұсқаға өту",
      Theme: {
        auto: "Автоматты",
        light: "Жарықты тақырып",
        dark: "Көктем тақырып",
      },
      Prompt: "Жатпалар",
      Masks: "Жатпалар",
      Clear: "Мәзірді тазалау",
      Settings: "Параметрлер",
    },
    Rename: "Шағымаулықты өзгерту",
    Typing: "Жазу...",
    Input: (submitKey: string) => {
      var inputHints = `Жіберу үшін ${submitKey}`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Enter + Shift орнату үшін";
      }
      return inputHints + ", іздеу үшін /";
    },
    Send: "Жіберу",
    Config: {
      Reset: "Әдепкі баптауға қайта орнату",
      SaveAs: "Жазбаны таңдау ретінде сақтау",
    },
  },
  Export: {
    Title: "Хабарламаларды экспорттау",
    Copy: "Барлықты көшіру",
    Download: "Жүктеу",
    MessageFromYou: "Сізден хабар",
    MessageFromChatGPT: "ChatGPT ден хабар",
    Share: "KiAsk Share-ге бөлу",
    Format: {
      Title: "Экспорттық формат",
      SubTitle: "Markdown немесе PNG суреті",
    },
    IncludeContext: {
      Title: "Мәтіндік ақпаратты қосу",
      SubTitle: "Мәтіндік ақпаратты экспорттау",
    },
    Steps: {
      Select: "Таңдау",
      Preview: "Алдын ала қарау",
    },
  },
  Select: {
    Search: "Іздеу",
    All: "Барлығын таңдау",
    Latest: "Соңғын таңдау",
    Clear: "Тазалау",
  },
  Memory: {
    Title: "Жад память жатпалары",
    EmptyContent: "Қате жоқ.",
    Send: "Жад памятьды жіберу",
    Copy: "Жад памятьды көшіру",
    Reset: "Сессияның нұсқалығын көшіру",
    ResetConfirm:
      "Нұсқалықты қайта жүктеу кезінде, одан өткен сөйлеу тарихы және тарихымәлімдемені тазағындау келіп тұрады. Өтеңізші, қайта жүктеу керектігіне көтеруді ме?",
  },
  Home: {
    NewChat: "Жаңа сөйлеу",
    DeleteChat: "Таңдаулы сөйлеулерді жойғыңыз келеді ме?",
    DeleteToast: "Сөйлеу жойылды",
    Revert: "Қайта орнату",
  },
  Settings: {
    Title: "Параметрлер",
    SubTitle: "Барлық параметрлер",
    Actions: {
      ClearAll: "Барлық деректерді тазалау",
      ResetAll: "Барлық параметрлерді қайта орнату",
      Close: "Жабу",
      ConfirmResetAll: "Барлық параметрлерді қайта орнату керекпіз бе?",
      ConfirmClearAll: "Барлық деректерді тазалау керекпіз бе?",
    },
    Lang: {
      Name: "Тіл", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Барлық тілдер",
    },
    Avatar: "Аватарка",
    FontSize: {
      Title: "Қаріп өлшемі",
      SubTitle: "Шағым материалдағы қаріп өлшемін теңшеу",
    },
    Update: {
      Version: (x: string) => `Нұсқа: ${x}`,
      IsLatest: "Соңғы нұсқа",
      CheckUpdate: "Жаңартуға тексеру",
      IsChecking: "Жаңарту тексеру...",
      FoundUpdate: (x: string) => `Жаңа нұсқа табылды: ${x}`,
      GoToUpdate: "Жаңарту",
    },
    SendKey: "Кілті жіберу",
    Theme: "Тақырып",
    TightBorder: "Өткен шежіре",
    SendPreviewBubble: {
      Title: "Көшірудің бағдарысын көру",
      SubTitle: "Бүлдір бетте Markdown-ты қарау",
    },
    Mask: {
      Title: "Жатпалар шашысы",
      SubTitle: "Жаңа сөйлеу басталатында, жатпалар шашысын көрсету",
    },
    Prompt: {
      Disable: {
        Title: "Автоматты жабу",
        SubTitle: "Автоматты жабуды қалпына келтіру үшін / жазыңыз",
      },
      List: "Жатпалар тізімі",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} ішкі, ${custom} пайдаланушы анықталған`,
      Edit: "Өңдеу",
      Modal: {
        Title: "Жатпалар тізімі",
        Add: "ілгері таңдау",
        Search: "Жатпаларды іздеу",
      },
      EditModal: {
        Title: "Жатпалын өңдеу",
      },
    },
    HistoryCount: {
      Title: "Жіберілген хабарламалар саны",
      SubTitle: "Жіберілген хабарламалар санына байланысты",
    },
    CompressThreshold: {
      Title: "Тарихтық тарихты ішеу порогы",
      SubTitle:
        "Егер тарихталған хабарламалар ұзындығы порогты асып кеткен болса, оны ішегіне салады",
    },
    Token: {
      Title: "API Кілт",
      SubTitle: "Qұпия сөз мүгедектігін ұнуту үшін кілтіңізді пайдаланыңыз",
      Placeholder: "OpenAI API Кілті",
    },
    Usage: {
      Title: "Хаттың орналасуы",
      SubTitle(used: any, total: any) {
        return `Айдағы қолданымы $${used}, жазылу $${total}`;
      },
      IsChecking: "Тексеру...",
      Check: "Тексеру",
      NoAccess: "Балансын тексеру үшін API Кілтін енгізіңіз",
    },
    AccessCode: {
      Title: "Құпия сөз",
      SubTitle: "Қатынасу басқару қосылған",
      Placeholder: "Құпия сөз қажет",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Жеке Endpoint http(s)://-мен басталуы керек",
    },
    Model: "Топ",
    Temperature: {
      Title: "Жылдамдық",
      SubTitle: "Көп шақырылым шығару үшін қажетті ерекше өндіру",
    },
    MaxTokens: {
      Title: "Ұзындықтардың максималды саны",
      SubTitle: "Кілттердің жөнелу жатпалары мен жасалған кілттердің максималды ұзындығы",
    },
    PresencePenalty: {
      Title: "Соданша денсаулық",
      SubTitle:
        "Көптеген мәліметтерді талғаудың мүмкіндігін арттырған мән",
    },
  },
  Store: {
    DefaultTopic: "Жаңа сөйлеу",
    BotHello: "Сөйлеумен көмек көрсету келісімізге ассаламыз!",
    Error: "Қате кетті, әрекетті кейінірек қайталап көріңіз.",
    Prompt: {
      History: (content: string) =>
        "Мұнда сөйлеу тарихының картасы алынған: " + content,
      Topic:
        "Жоба бойынша кез келген сөйлеудің түрлі аспаптарын, нәшерлерде, анықтамаларда, көрсеткіштерде, заматтарда, белгілерде, немесе қосымша мәтінде жоюдысыздың төменгі араласпаған көмекшілігінің кейбір тақырыпты табыңыз.",
      Summarize:
        "Кейінді мәтінні 200 сөзге түсіріп, келешек мәндер аспаптарсыз ақпарат сайлау үшін сопақтаңыз.",
    },
  },
  Copy: {
    Success: "Буферге көшірілді",
    Failed: "Буферге көшіру сәтсіз аяқталды, басқару беру құқығын рұқсат беріңіз",
  },
  Context: {
    Toast: (x: any) => `Контекстуалдық жатпаларымен ${x}`,
    Edit: "Контекстуалдық және жад память жатпалары",
    Add: "Пайдаланымдарды енгізу",
    Clear: "Контекст тазаланған",
    Revert: "Қалпынан орнату",
  },
  Plugin: {
    Name: "Плагин",
  },
  Mask: {
    Name: "Жатпалар",
    Page: {
      Title: "Жатпалар құралы",
      SubTitle: (count: number) => `${count} жатпалар құралдары`,
      Search: "Құралдарды іздеу",
      Create: "Құру",
    },
    Item: {
      Info: (count: number) => `${count} жатпалар`,
      Chat: "Сөйлеу",
      View: "Қарау",
      Edit: "Өңдеу",
      Delete: "Жою",
      DeleteConfirm: "Жоюды растаңыз ба?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Жатпалар тізімін өңдеу ${readonly ? "(тегірек)" : ""}`,
      Download: "Жүктеу",
      Clone: "Клондау",
    },
    Config: {
      Avatar: "Бот аватары",
      Name: "Бот аты",
      Sync: {
        Title: "Барлық параметрлерді пайдалану",
        SubTitle: "Бұл сөйлеуде әдепкі параметрлерді пайдалану",
        Confirm: "Қосымша параметрлерді әдепкі параметрлермен ауыстыру керек пе?",
      },
      HideContext: {
        Title: "Контекстті жасыру",
        SubTitle: "Сөйлеуден кейін контекстуалдық жатпаларды көрсетпеу",
      },
    },
  },
  NewChat: {
    Return: "Мақсаттану",
    Skip: "Тек бастау",
    Title: "Мәтіндік баптау",
    SubTitle: "Баптаума арқылы бірлікпен жасау",
    More: "Толығырақ табу",
    NotShow: "Көрсетпеу",
    ConfirmNoShow: "Көрсету өшіруге рұқсат беру？Сіз оны параметрлерде қайтадан қоса аласыз.",
  },

  UI: {
    Confirm: "Растау",
    Cancel: "Болдырмау",
    Close: "Жабу",
    Create: "Жасау",
    Edit: "Өңдеу",
  },
};

export default kz;
