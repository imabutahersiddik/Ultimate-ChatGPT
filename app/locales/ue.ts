import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const eu: RequiredLocaleType = {
  WIP: "Laster...",
  Error: {
    Unauthorized:
      "Baimenik gabeko sarbidea, mesedez sartu sarbide kodea [auth](/#/auth) orrian.",
  },
  Auth: {
    Title: "Sarbide Kodea Beharrezkoa",
    Tips: "Mesedez idatzi behean sarbide kodea",
    Input: "sarbide kodea",
    Confirm: "Berretsi",
    Later: "Geroago",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} mezu`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} mezu The ChatGPTrekin`,
    Actions: {
      ChatList: "Joan Txat Zerrendara",
      CompressedHistory: "Gorabeherako Historia Memoria Ekintza",
      Export: "Esportatu Mezu Guztiak Markdown bezala",
      Copy: "Kopiatu",
      Stop: "Gelditu",
      Retry: "Berriz saiatu",
      Delete: "Ezabatu",
    },
    InputActions: {
      Stop: "Gelditu",
      ToBottom: "Azkenengora",
      Theme: {
        auto: "Automatikoa",
        light: "Argi Taula",
        dark: "Ilargi Taula",
      },
      Prompt: "Gorabeherak",
      Masks: "Maskarak",
      Clear: "Garbitu Kontestua",
      Settings: "Ezarpenak",
    },
    Rename: "Aldatu Txataren Izena",
    Typing: "Idazten...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} bidaltzeko`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter lerrokatzeko";
      }
      return inputHints + ", / bilaketa egiteko";
    },
    Send: "Bidali",
    Config: {
      Reset: "Berrezarri Berezkoa",
      SaveAs: "Gorde maskarako",
    },
  },
  Export: {
    Title: "Mezuak Esportatu",
    Copy: "Kopiatu Guztiak",
    Download: "Deskargatu",
    MessageFromYou: "Zure Mezua",
    MessageFromChatGPT: "ChatGPTtik Mezua",
    Share: "KiAsk Share-ra Partekatu",
    Format: {
      Title: "Esportazio Formatua",
      SubTitle: "Markdown edo PNG irudia",
    },
    IncludeContext: {
      Title: "Kontestua Barne",
      SubTitle: "Kontestu gorabeherak maskarako esportatu ala ez",
    },
    Steps: {
      Select: "Hautatu",
      Preview: "Aurrebista",
    },
  },
  Select: {
    Search: "Bilatu",
    All: "Hautatu Denak",
    Latest: "Hautatu Azkenak",
    Clear: "Garbitu",
  },
  Memory: {
    Title: "Memoria Gorabehera",
    EmptyContent: "Ez dago ezer oraindik.",
    Send: "Bidali Memoria",
    Copy: "Kopiatu Memoria",
    Reset: "Berrezarri Saioa",
    ResetConfirm:
      "Berrezarpenak txataren historia uneko eta historiko memoria garbituko du. Ziur zaude berrezarri nahi duzula?",
  },
  Home: {
    NewChat: "Txata Berria",
    DeleteChat: "Berreskuratutako elkarrizketa ezabatu nahi duzula baieztatu?",
    DeleteToast: "Txata Ezabatuta",
    Revert: "Itzuli",
  },
  Settings: {
    Title: "Ezarpenak",
    SubTitle: "Ezarpen Guztiak",
    Actions: {
      ClearAll: "Garbitu Datu Guztiak",
      ResetAll: "Berrezarri Ezarpen Guztiak",
      Close: "Itxi",
      ConfirmResetAll: "Ziur zaude ezarpen guztiak berrezarri nahi dituzula?",
      ConfirmClearAll: "Ziur zaude datu guztiak berrezarri nahi dituzula?",
    },
    Lang: {
      Name: "Hizkuntza", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Hizkuntza Guztiak",
    },
    Avatar: "Avatarra",
    FontSize: {
      Title: "Letren Tamaina",
      SubTitle: "Idatzien tamaina aldatu txatako edukian",
    },
    Update: {
      Version: (x: string) => `Bertsioa: ${x}`,
      IsLatest: "Azken bertsioa",
      CheckUpdate: "Eguneraketak Egiaztatu",
      IsChecking: "Eguneraketak egiten...",
      FoundUpdate: (x: string) => `Aurkitu berria: ${x}`,
      GoToUpdate: "Eguneratu",
    },
    SendKey: "Bidali Gako",
    Theme: "Gaia",
    TightBorder: "Marruskadura Estua",
    SendPreviewBubble: {
      Title: "Bidali Aurrebista Buburua",
      SubTitle: "Aurrebista markdown-a buburuan erakutsi",
    },
    Mask: {
      Title: "Maskarako Maskarako Bistaratze Pantaila",
      SubTitle: "Erakutsi maskarako maskarako hasierako pantaila txata hasten baino lehen",
    },
    Prompt: {
      Disable: {
        Title: "Auto-osatzea desgaitu",
        SubTitle: "Idatzi / auto-osatzea aktibatzeko",
      },
      List: "Gorabehera Zerrenda",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} sartzeko, ${custom} erabiltzaileak definitutako`,
      Edit: "Editatu",
      Modal: {
        Title: "Gorabehera Zerrenda",
        Add: "Gehitu Bat",
        Search: "Bilatu Gorabeherak",
      },
      EditModal: {
        Title: "Editatu Gorabehera",
      },
    },
    HistoryCount: {
      Title: "Bidalitako Mezu Kopurua",
      SubTitle: "Mezu bidalitako kopurua eskatutako eskaeraren arabera",
    },
    CompressThreshold: {
      Title: "Historia Gorabeherak Murriztearen Mugak",
      SubTitle:
        "Murriztu egingo da gorabeheratu gabeko mezuak luzera balioa gainditzen badu",
    },
    Token: {
      Title: "API Gako",
      SubTitle: "Erabili zure gako sarbide kodea mugaren muga ezagutzeko",
      Placeholder: "OpenAI API Gako",
    },
    Usage: {
      Title: "Kontuaren Saldoa",
      SubTitle(used: any, total: any) {
        return `Hilabete honetan erabili da $${used}, harpidetza $${total}`;
      },
      IsChecking: "Egiaztatzen...",
      Check: "Egiaztatu",
      NoAccess: "Sartu API Gakoa saldoa egiaztatzeko",
    },
    AccessCode: {
      Title: "Sarbide Kodea",
      SubTitle: "Kontrol sarbidea gaituta",
      Placeholder: "Sarbide Kodea Beharrezkoa",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Endpoint pertsonalizatua http(s):// bidez hasi behar da",
    },
    Model: "Modeloa",
    Temperature: {
      Title: "Tenperatura",
      SubTitle: "Balio handiagoak irteera ausazkoagoa egiten du",
    },
    MaxTokens: {
      Title: "Maximo Tokenak",
      SubTitle: "Tokenen gehienezko luzera sartutako tokenak eta sortutako tokenak",
    },
    PresencePenalty: {
      Title: "Presentzia Penaltia",
      SubTitle:
        "Balio handiagoak berriak diren gaiak azalduko dituzte",
    },
  },
  Store: {
    DefaultTopic: "Elkarrizketa Berria",
    BotHello: "Kaixo! Nola lagun dezaket gaur?",
    Error: "Errore bat gertatu da, mesedez saiatu berriro geroago.",
    Prompt: {
      History: (content: string) =>
        "Hau txataren historia laburbildu gisa da: " + content,
      Topic:
        "Mesedez sortu gure elkarrizketaren laburpena ematen duen lau edo bost hitzko izenburua, hasiera gabe, puntuazio, esaldi markak, puntuketa, edo testu gehigarri gabe. Aurreko kutxan dagoen arteko kutxa ezabatu.",
      Summarize:
        "Laburbildu eztabaida 200 hitzetan edo gutxiago, etorkizuneko testu gisa erabiltzeko.",
    },
  },
  Copy: {
    Success: "Arbela kopiatua",
    Failed: "Kopiatzeak huts egin du, mesedez eman baimena arbela atzitzeko",
  },
  Context: {
    Toast: (x: any) => `Kontestu zehatzekin ${x}`,
    Edit: "Kontestu eta Memoria Gorabeherak",
    Add: "Gehitu Gorabehera",
    Clear: "Garbitu Kontestua",
    Revert: "Itzuli",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Maskara",
    Page: {
      Title: "Gorabehera Txantiloia",
      SubTitle: (count: number) => `${count} gorabehera txantiloi`,
      Search: "Bilatu Txantiloia",
      Create: "Sortu",
    },
    Item: {
      Info: (count: number) => `${count} gorabehera`,
      Chat: "Txat",
      View: "Ikusi",
      Edit: "Editatu",
      Delete: "Ezabatu",
      DeleteConfirm: "Berretsi ezabatu nahi duzula?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Editatu Gorabehera Txantiloia ${readonly ? "(irakurketa soilik)" : ""}`,
      Download: "Deskargatu",
      Clone: "Klonatu",
    },
    Config: {
      Avatar: "Botaren Avatarra",
      Name: "Botaren Izena",
      Sync: {
        Title: "Erabili Konfigurazio Orokorra",
        SubTitle: "Erabili konfigurazio orokorra txatan",
        Confirm: "Berretsi konfigurazio pertsonalizatua konfigurazio orokorrekin ordeztu nahi duzula?",
      },
      HideContext: {
        Title: "Ezkutatu Kontestu Gorabeherak",
        SubTitle: "Ez erakutsi kontestu gorabeherak txatan",
      },
    },
  },
  NewChat: {
    Return: "Itzuli",
    Skip: "Hasi Bakarrik",
    Title: "Aukeratu Maskara",
    SubTitle: "Maskararen Atzean Dauden Soinua Txateatu",
    More: "Bilatu Gehiago",
    NotShow: "Ez Erakutsi Berriro",
    ConfirmNoShow: "Berretsi desgaitzea？Zuretzat gaitu dezakezu ezarpenetan ondoren.",
  },

  UI: {
    Confirm: "Berretsi",
    Cancel: "Utzi",
    Close: "Itxi",
    Create: "Sortu",
    Edit: "Editatu",
  },
};

export default eu;