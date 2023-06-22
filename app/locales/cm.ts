import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const cm: RequiredLocaleType = {
  WIP: "Za Ta De...",
  Error: {
    Unauthorized:
      "Babu aikace-aikace, da fatan za ka shigar da lamba shigarwar gida a [auth](/#/auth) shafin.",
  },
  Auth: {
    Title: "Da Koda Karin Cisa",
    Tips: "Don Allah shigar da kodin cisa daga sama",
    Input: "Kodin Cisa",
    Confirm: "Saka",
    Later: "Daukaka",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} labarai`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} labarai da The ChatGPT`,
    Actions: {
      ChatList: "Taimaka Ji Ko",
      CompressedHistory: "Bazawa Layi Disk Rigaki",
      Export: "Sa muke duk labaran ta hanyar Markdown",
      Copy: "Kwangila",
      Stop: "Tsaya",
      Retry: "Shigar da saukarwa",
      Delete: "Cire",
    },
    InputActions: {
      Stop: "Tsaya",
      ToBottom: "Don sabon da ke dauke",
      Theme: {
        auto: "Auto",
        light: "Zauren Zafi",
        dark: "Zauren Cika",
      },
      Prompt: "Damuwar Kalmomi",
      Masks: "Damuwar Kalmomi",
      Clear: "Share damuwar hannu",
      Settings: "Saituna",
    },
    Rename: "Sake tayi sunaye da Chat",
    Typing: "Ake ta...",
    Input: (submitKey: string) => {
      var inputHints = `Danna ${submitKey} don kasance`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Danna lasisi + Enter don hayya";
      }
      return inputHints + ", / don bincike kalmomi";
    },
    Send: "Aika",
    Config: {
      Reset: "A shirya zuwa bin atomatis",
      SaveAs: "Aka sabunta wa Kalmomi",
    },
  },
  Export: {
    Title: "Sa Labarai",
    Copy: "Taken da Duk",
    Download: "Download",
    MessageFromYou: "Labarin daga kowaɗa",
    MessageFromChatGPT: "Labarin daga The ChatGPT",
    Share: "Sa'yayya da KiAsk Share",
    Format: {
      Title: "Takardar Sa",
      SubTitle: "Markdown ko Ultramodan PNG Image",
    },
    IncludeContext: {
      Title: "Ka yi gudun labarin",
      SubTitle: "Sa duk damuwar kalmomi a flee ko ba",
    },
    Steps: {
      Select: "Zabi",
      Preview: "Kallon",
    },
  },
  Select: {
    Search: "Bincika",
    All: "Zabi Duk",
    Latest: "Zabi Ma'aikata Mafi Bukatar",
    Clear: "Share",
  },
  Memory: {
    Title: "Damuwar Kalmomi",
    EmptyContent: "Ba a'i ba.",
    Send: "Aika Damuwa",
    Copy: "Kwango Damuwa",
    Reset: "Sake Sabunta",
    ResetConfirm:
      "Sake sabunta za a share bayanin damuwar taron kaya da damuwar nazarin taron. Kana son muku yadda za ka sake sabunta?",
  },
  Home: {
    NewChat: "Aika Sabon Chat",
    DeleteChat: "Shigar da tabbatar da kwarai kallon gaske?",
    DeleteToast: "Chat ya share",
    Revert: "Sake Fattawa",
  },
  Settings: {
    Title: "Saituna",
    SubTitle: "Duk Saituna",
    Actions: {
      ClearAll: "Goge Duk Baya",
      ResetAll: "Sake Sabunta Duk Saituna",
      Close: "Tamam",
      ConfirmResetAll: "Kuna son yada sake sabunta duk saitunan?",
      ConfirmClearAll: "Kuna son yada sake hliya duk bayu karin bayanan?",
    },
    Lang: {
      Name: "Harshe", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Duk Harshe",
    },
    Avatar: "Hoto",
    FontSize: {
      Title: "Jigo Na Afuwa",
      SubTitle: "Sa jigo na afuwa na labarin",
    },
    Update: {
      Version: (x: string) => `Lambobin: ${x}`,
      IsLatest: "Lambobin mafi bangaren",
      CheckUpdate: "Shigar da tada lambobin",
      IsChecking: "Ana dauka damuwa...",
      FoundUpdate: (x: string) => `Lambobin mafi bangaren ya rubuta: ${x}`,
      GoToUpdate: "Sake shigarwa",
    },
    SendKey: "Aika Dubu",
    Theme: "Zauren Cika",
    TightBorder: "Tight Majal",
    SendPreviewBubble: {
      Title: "Aika Kallon Preview",
      SubTitle: "Kallon markdown a kan bubble",
    },
    Mask: {
      Title: "Mitsarin Zamantakewa",
      SubTitle: "Nuna alamar mitsarin zamantakewa bayan ka fara chat sabon",
    },
    Prompt: {
      Disable: {
        Title: "Sanya auto-completion",
        SubTitle: "Shigar da / don sake rajista babu abinda za'a aiko",
      },
      List: "Jerin Kalmomi",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} buɗaɓɓi, ${custom} masu dugun labarai`,
      Edit: "Sake Fassara",
      Modal: {
        Title: "Jerin Kalmomi",
        Add: "Sanya Daya",
        Search: "Bincika Kalmomi",
      },
      EditModal: {
        Title: "Sake Sanya Kalmomi",
      },
    },
    HistoryCount: {
      Title: "Sa'in Da Aka Kira Labari",
      SubTitle: "Lambar fara kashe da aika ya shafar adireshin",
    },
    CompressThreshold: {
      Title: "Ko kuɗin Sakaci Kira",
      SubTitle: "Ya sakaci idan lambarin da a shirya za a guje",
    },
    Token: {
      Title: "Chana Alamar API",
      SubTitle: "Yi amfani da kalmar alamar don a ira amfani da kirkiri fidda",
      Placeholder: "Kalmar Alamar OpenAI API Key",
    },
    Usage: {
      Title: "Kayan Aikin Ayyukan Kwamitin",
      SubTitle(used: any, total: any) {
        return `An samu kudin wadda [] na shiga watan Afirilu $${used}, kanatsanwa $${total}`;
      },
      IsChecking: "Ana dauka damuwa...",
      Check: "Kashe",
      NoAccess: "Shigar kalmar alamar OpenAI don taka ayyukan",
    },
    AccessCode: {
      Title: "Kalmar Damuwar Cisa",
      SubTitle: "Maida yin samun sauye-sauyen aikinsa",
      Placeholder: "Kalmar Alamar Sakaciso Damuwar Cisa",
    },
    Endpoint: {
      Title: "Kayyade",
      SubTitle: "Kayyade na 'custom' yaradua 'http(s)://' ba",
    },
    Model: "Ma'ana",
    Temperature: {
      Title: "Harshen Hana",
      SubTitle: "Asalin yawan kwanaki ya samu ra'ayin da haske aiki",
    },
    MaxTokens: {
      Title: "Kowane Kuɗi",
      SubTitle: "Yawan kowane kuɗi da za'a saita a baya kuɗin da ya sua",
    },
    PresencePenalty: {
      Title: "Shara Na Zamantakewa",
      SubTitle:
        "Yawan kowane kuɗan ya yi nasara don lambobin watan launuka",
    },
  },
  Store: {
    DefaultTopic: "Gaske na Farko",
    BotHello: "Sannu! Me ya samu ku damu?",
    Error: "Yi shawara aiki, don Allah ajiye masa cikakken lokaci",
    Prompt: {
      History: (content: string) =>
        "Wannan shi ne juru mai nuna lambobin tarihin labarin: " + content,
      Topic:
        "Don Allah sake ta harshe mai girma ta 4 zuwa 5 da suka jefa halin wannan gasa tsakanin ba tashar, kibodi, haifarwa, lamba, da sauran gasa. Kalma haifarwa.",
      Summarize:
        "Ra'ayi harshe da ta yin sakaci a 200 kalma kan kula da kalmomin karshe don ayyukan gaba.",
    },
  },
  Copy: {
    Success: "An ba ku nama don ayyukan",
    Failed: "An ba ku nama ba, don Allah riga da wuya amsa fiye da nayi amfani da m",
  },
  Context: {
    Toast: (x: any) => `Tare da ${x} samun damuwar kalmomi za kawo`,
    Edit: "Damuwar Kalmomi da Damuwar Zako",
    Add: "Sanya Kalmomi",
    Clear: "Share damuwar hannu",
    Revert: "Fattawa",
  },
  Plugin: {
    Name: "Adadin",
  },
  Mask: {
    Name: "Kalmomin Hira",
    Page: {
      Title: "Buƙata Kalmomi",
      SubTitle: (count: number) => `${count} babban jerin kalmomi`,
      Search: "Bincika Kalmomi",
      Create: "Sanya",
    },
    Item: {
      Info: (count: number) => `${count} kalmomi`,
      Chat: "Kira",
      View: "Dubawa",
      Edit: "Sake Fassara",
      Delete: "Cire",
      DeleteConfirm: "Me ya son cire?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Sanya Kalmomi na Hira ${readonly ? "(kawo-kawo)" : ""}`,
      Download: "Download",
      Clone: "Bako",
    },
    Config: {
      Avatar: "Hoto na Bot",
      Name: "Sunan Bot",
      Sync: {
        Title: "Don Amfani da Manufofin Duniya",
        SubTitle: "Amfani da manufofinku a wannan chat",
        Confirm: "Me ya son hadinta domin mai damuwa kwamitin da kuma da manufofinku?",
      },
      HideContext: {
        Title: "Sorin Kalmomi",
        SubTitle: "Kuma babu damuwa kalmomin zamantakewa a cikin chat",
      },
    },
  },
  NewChat: {
    Return: "Fara",
    Skip: "Farawa",
    Title: "Zabi Kalmomi",
    SubTitle: "Ji Ko tare da Kalmomi a-zai bi muji",
    More: "Bincika Kama",
    NotShow: "Albarka baida",
    ConfirmNoShow: "Me ya so ya alhaki? Zaka iya sake so daga cibin mu ajiye masa wanda ba'a san ba.",
  },

  UI: {
    Confirm: "Saka",
    Cancel: "Tsaya",
    Close: "Rige",
    Create: "Sanya",
    Edit: "Sake",
  },
};

export default ha;
