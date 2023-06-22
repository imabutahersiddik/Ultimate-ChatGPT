import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const af: RequiredLocaleType = {
  WIP: "Binnekort beskikbaar...",
  Error: {
    Unauthorized:
      "Onbevoegde toegang, voer asseblief toegangs kode in op die [auth](/#/auth) bladsy.",
  },
  Auth: {
    Title: "Toegangs Kode Nodig",
    Tips: "Voer asseblief toegangs kode hieronder in",
    Input: "toegangs kode",
    Confirm: "Bevestig",
    Later: "Later",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} boodskappe`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} boodskappe met The ChatGPT`,
    Actions: {
      ChatList: "Gaan na Chat Lys",
      CompressedHistory: "Saamgedrukte Geskiedenis Geheue Aanwysing",
      Export: "Voer Alle Boodskappe Uit as Markdown",
      Copy: "Kopieer",
      Stop: "Stop",
      Retry: "Probeer Weer",
      Delete: "Verwyder",
    },
    InputActions: {
      Stop: "Stop",
      ToBottom: "Na Nuutste",
      Theme: {
        auto: "Outomaties",
        light: "Lig Thema",
        dark: "Donker Thema",
      },
      Prompt: "Aanwysings",
      Masks: "Maskers",
      Clear: "Maak Konteks Skoon",
      Settings: "Instellings",
    },
    Rename: "Hernoem Chat",
    Typing: "Tik...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} om te stuur`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter om te breek";
      }
      return inputHints + ", / om aanwysings te soek";
    },
    Send: "Stuur",
    Config: {
      Reset: "Herstel na Verstek",
      SaveAs: "Stoor as Masker",
    },
  },
  Export: {
    Title: "Voer Boodskappe Uit",
    Copy: "Kopieer Alles",
    Download: "Aflaai",
    MessageFromYou: "Boodskap Van Jou",
    MessageFromChatGPT: "Boodskap Van The ChatGPT",
    Share: "Deel met KiAsk Share",
    Format: {
      Title: "Uitvoer Formaat",
      SubTitle: "Markdown of PNG Beeld",
    },
    IncludeContext: {
      Title: "Sluit Konteks In",
      SubTitle: "Sluit konteks aanwysings in masker in of nie",
    },
    Steps: {
      Select: "Kies",
      Preview: "Voorskou",
    },
  },
  Select: {
    Search: "Soek",
    All: "Kies Alles",
    Latest: "Kies Nuutste",
    Clear: "Maak Skoon",
  },
  Memory: {
    Title: "Geheue Aanwysing",
    EmptyContent: "Nog niks.",
    Send: "Stuur Geheue",
    Copy: "Kopieer Geheue",
    Reset: "Herstel Sessie",
    ResetConfirm:
      "Herstelling sal die huidige gespreksgeskiedenis en historiese geheue skoonvee. Is jy seker jy wil herstel?",
  },
  Home: {
    NewChat: "Nuwe Chat",
    DeleteChat: "Bevestig om die gekose gesprek te verwyder?",
    DeleteToast: "Chat Verwyder",
    Revert: "Herstel",
  },
  Settings: {
    Title: "Instellings",
    SubTitle: "Alle Instellings",
    Actions: {
      ClearAll: "Maak Alle Data Skoon",
      ResetAll: "Herstel Alle Instellings",
      Close: "Sluit",
      ConfirmResetAll: "Is jy seker jy wil alle konfigurasies herstel?",
      ConfirmClearAll: "Is jy seker jy wil alle data skoonmaak?",
    },
    Lang: {
      Name: "Taal", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Alle Tale",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Font Grootte",
      SubTitle: "Pas die font grootte van die gespreksinhoud aan",
    },
    Update: {
      Version: (x: string) => `Weergawe: ${x}`,
      IsLatest: "Nuutste weergawe",
      CheckUpdate: "Kyk vir Opdatering",
      IsChecking: "Besig om vir opdatering te kyk...",
      FoundUpdate: (x: string) => `Nuwe weergawe gevind: ${x}`,
      GoToUpdate: "Opdateer",
    },
    SendKey: "Stuur Sleutel",
    Theme: "Tema",
    TightBorder: "Dra toe Grens",
    SendPreviewBubble: {
      Title: "Stuur Voorskou Bubbel",
      SubTitle: "Voorskou markdown in 'n boubbel",
    },
    Mask: {
      Title: "Masker Splash Skerm",
      SubTitle: "Wys 'n masker splash skerm voordat 'n nuwe chat begin",
    },
    Prompt: {
      Disable: {
        Title: "Deaktiveer outomatiese voltooiing",
        SubTitle: "Voer / in om outomatiese voltooiing te aktiveer",
      },
      List: "Aanwysings Lys",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} ingeboude, ${custom} gebruikers-gedefinieerde`,
      Edit: "Wysig",
      Modal: {
        Title: "Aanwysings Lys",
        Add: "Voeg Een By",
        Search: "Soek Aanwysings",
      },
      EditModal: {
        Title: "Wysig Aanwysing",
      },
    },
    HistoryCount: {
      Title: "Aangehegde Boodskappe Tel",
      SubTitle: "Aantal gestuurde boodskappe wat aangeheg is per versoek",
    },
    CompressThreshold: {
      Title: "Geskiedenis Saamdruk Drempel",
      SubTitle:
        "Sal saamdruk as ongesaamgedrukte boodskappe lengte die waarde oorskry",
    },
    Token: {
      Title: "API Sleutel",
      SubTitle: "Gebruik jou sleutel om toegangs kode beperking te ignoreer",
      Placeholder: "OpenAI API Sleutel",
    },
    Usage: {
      Title: "Rekening Balans",
      SubTitle(used: any, total: any) {
        return `Hierdie maand gebruik $${used}, intekening $${total}`;
      },
      IsChecking: "Besig om te kyk...",
      Check: "Kyk",
      NoAccess: "Voer API Sleutel in om balans te kyk",
    },
    AccessCode: {
      Title: "Toegangs Kode",
      SubTitle: "Toegangs beheer geaktiveer",
      Placeholder: "Toegangs Kode Nodig",
    },
    Endpoint: {
      Title: "Eindpunt",
      SubTitle: "Aangepaste eindpunt moet met http(s):// begin",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperatuur",
      SubTitle: "Hoe hoër die waarde, hoe meer willekeurige uitset",
    },
    MaxTokens: {
      Title: "Maksimum Tokens",
      SubTitle: "Maksimum lengte van inset tokens en gegenereerde tokens",
    },
    PresencePenalty: {
      Title: "Teenwoordigheid Straf",
      SubTitle:
        "Hoe hoër die waarde, hoe groter die kans om oor nuwe onderwerpe te praat",
    },
  },
  Store: {
    DefaultTopic: "Nuwe Gesprek",
    BotHello: "Hallo! Hoe kan ek jou vandag help?",
    Error: "Iets het verkeerd gegaan, probeer asseblief later weer.",
    Prompt: {
      History: (content: string) =>
        "Hierdie is 'n opsomming van die chat geskiedenis as 'n opfrissing: " +
        content,
      Topic:
        "Genereer asseblief 'n titel van vier tot vyf woorde wat ons gesprek opsom sonder enige inlei, leestekens, aanhalingstekens, punte, simbole of addisionele teks. Verwyder aanhalings tekens.",
      Summarize:
        "Som die bespreking kortliks op in 200 woorde of minder om as 'n aanwysing vir toekomstige konteks te gebruik.",
    },
  },
  Copy: {
    Success: "Gekopieer na knipbord",
    Failed: "Kopiëring misluk, gee asseblief toestemming om knipbord te gebruik",
  },
  Context: {
    Toast: (x: any) => `Met ${x} kontekstuele aanwysings`,
    Edit: "Kontekstuele en Geheue Aanwysings",
    Add: "Voeg 'n Aanwysing By",
    Clear: "Konteks Skoon",
    Revert: "Herstel",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Masker",
    Page: {
      Title: "Aanwysing Sjabloon",
      SubTitle: (count: number) => `${count} aanwysing sjablone`,
      Search: "Soek Sjablone",
      Create: "Skep",
    },
    Item: {
      Info: (count: number) => `${count} aanwysings`,
      Chat: "Chat",
      View: "Bekyk",
      Edit: "Wysig",
      Delete: "Verwyder",
      DeleteConfirm: "Bevestig om te verwyder?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Wysig Aanwysing Sjabloon ${readonly ? "(alleen lees)" : ""}`,
      Download: "Aflaai",
      Clone: "Kloneer",
    },
    Config: {
      Avatar: "Bot Avatar",
      Name: "Bot Naam",
      Sync: {
        Title: "Gebruik Globale Konfigurasie",
        SubTitle: "Gebruik globale konfigurasie in hierdie chat",
        Confirm: "Bevestig om aangepaste konfigurasie met globale konfigurasie te oorskryf?",
      },
      HideContext: {
        Title: "Versteek Konteks Aanwysings",
        SubTitle: "Versteek in-konteks aanwysings in chat",
      },
    },
  },
  NewChat: {
    Return: "Terug",
    Skip: "Begin",
    Title: "Kies 'n Masker",
    SubTitle: "Chat met die Siel agter die Masker",
    More: "Vind Meer",
    NotShow: "Moenie Weer Wys Nie",
    ConfirmNoShow: "Bevestig om te deaktiveer? Jy kan dit later in instellings aktiveer.",
  },

  UI: {
    Confirm: "Bevestig",
    Cancel: "Kanselleer",
    Close: "Sluit",
    Create: "Skep",
    Edit: "Wysig",
  },
};

export default af;