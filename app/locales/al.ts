import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const en: RequiredLocaleType = {
  WIP: "Së shpejti...",
  Error: {
    Unauthorized:
      "Qasje e paautorizuar, ju lutemi vendosni kodin e hyrjes në faqen [auth](/#/auth).",
  },
  Auth: {
    Title: "Kodi i Hyrjes është i Nevojshëm",
    Tips: "Ju lutemi vendosni kodin e hyrjes më poshtë",
    Input: "kodi i hyrjes",
    Confirm: "Konfirmo",
    Later: "Më vonë",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} mesazhe`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} mesazhe me The ChatGPT`,
    Actions: {
      ChatList: "Shko te Lista e Bisedave",
      CompressedHistory: "Historia e Shkuruar e Kujtesës së Mëparshme",
      Export: "Eksporto të Gjitha Mesazhet si Markdown",
      Copy: "Kopjo",
      Stop: "Ndalo",
      Retry: "Provo Përsëri",
      Delete: "Fshi",
    },
    InputActions: {
      Stop: "Ndalo",
      ToBottom: "Te Më Së Fundi",
      Theme: {
        auto: "Automatik",
        light: "Temë e Ndritshme",
        dark: "Temë e Errët",
      },
      Prompt: "Ndihmëse",
      Masks: "Maska",
      Clear: "Pastro Kontekstin",
      Settings: "Cilësimet",
    },
    Rename: "Riemëro Bisedën",
    Typing: "Duke shkruar...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} për të dërguar`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter për të mbështjellë";
      }
      return inputHints + ", / për të kërkuar ndihmësa";
    },
    Send: "Dërgo",
    Config: {
      Reset: "Rikthe në Parazgjedhje",
      SaveAs: "Ruaj si Maskë",
    },
  },
  Export: {
    Title: "Eksporto Mesazhet",
    Copy: "Kopjo të Gjitha",
    Download: "Shkarko",
    MessageFromYou: "Mesazh nga Ju",
    MessageFromChatGPT: "Mesazh nga The ChatGPT",
    Share: "Shpërndaj te KiAsk Share",
    Format: {
      Title: "Formati i Eksportit",
      SubTitle: "Markdown ose Imazh PNG",
    },
    IncludeContext: {
      Title: "Përfshirja e Kontekstit",
      SubTitle: "Eksporto ndihmësat e kontekstit në maskë ose jo",
    },
    Steps: {
      Select: "Zgjidh",
      Preview: "Paraparje",
    },
  },
  Select: {
    Search: "Kërko",
    All: "Zgjidh të Gjitha",
    Latest: "Zgjidh Më të Fundit",
    Clear: "Pastro",
  },
  Memory: {
    Title: "Ndihmëse e Kujtesës",
    EmptyContent: "Ende asgjë.",
    Send: "Dërgo Kujtesë",
    Copy: "Kopjo Kujtesën",
    Reset: "Rikthe Sesionin",
    ResetConfirm:
      "Duke rikthyer do të fshihet historia e bisedës aktuale dhe kujtesa historike. A jeni të sigurt që dëshironi të riktheni?",
  },
  Home: {
    NewChat: "Bisedë e Re",
    DeleteChat: "Konfirmo për të fshirë bisedën e zgjedhur?",
    DeleteToast: "Biseda është Fshirë",
    Revert: "Kthe",
  },
  Settings: {
    Title: "Cilësimet",
    SubTitle: "Të Gjitha Cilësimet",
    Actions: {
      ClearAll: "Pastro të Gjitha të Dhënat",
      ResetAll: "Rikthe të Gjitha Cilësimet",
      Close: "Mbyll",
      ConfirmResetAll: "A jeni të sigurt që dëshironi të riktheni të gjitha konfigurimet?",
      ConfirmClearAll: "A jeni të sigurt që dëshironi të riktheni të gjitha të dhënat?",
    },
    Lang: {
      Name: "Gjuha", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Të Gjitha Gjuhët",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Madhësia e Shkronjave",
      SubTitle: "Rregullo madhësinë e përmbajtjes së bisedës",
    },
    Update: {
      Version: (x: string) => `Versioni: ${x}`,
      IsLatest: "Versioni i fundit",
      CheckUpdate: "Kontrollo Përditësimin",
      IsChecking: "Po kontrollohet përditësimi...",
      FoundUpdate: (x: string) => `U gjet version i ri: ${x}`,
      GoToUpdate: "Përditëso",
    },
    SendKey: "Çelësi i Dërgimit",
    Theme: "Temë",
    TightBorder: "Kufi i Ngushtë",
    SendPreviewBubble: {
      Title: "Bubulla e Paraparjes së Dërgimit",
      SubTitle: "Paraparja e markdown në një balon",
    },
    Mask: {
      Title: "Ekran i Maskës së Nisjes",
      SubTitle: "Shfaq një ekran maskë para fillimit të bisedës së re",
    },
    Prompt: {
      Disable: {
        Title: "Çaktivizo plotësimin automatik",
        SubTitle: "Shkruani / për të nisur plotësimin automatik",
      },
      List: "Lista e Ndihmësve",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} të ndërtuara, ${custom} të përcaktuara nga përdoruesi`,
      Edit: "Redakto",
      Modal: {
        Title: "Lista e Ndihmësve",
        Add: "Shto Një",
        Search: "Kërko Ndihmës",
      },
      EditModal: {
        Title: "Redakto Ndihmësen",
      },
    },
    HistoryCount: {
      Title: "Numri i Mesazheve të Bashkëngjitura",
      SubTitle: "Numri i mesazheve të dërguara të bashkëngjitura për çdo kërkesë",
    },
    CompressThreshold: {
      Title: "Kufiri i Kompresionit të Historisë",
      SubTitle:
        "Do të kompresohet nëse gjatësia e mesazheve të pakompresuara tejkalon vlerën",
    },
    Token: {
      Title: "Çelësi i API-së",
      SubTitle: "Përdorni çelësin tuaj për të injoruar kufirin e kodit të hyrjes",
      Placeholder: "Çelësi i API-së së OpenAI",
    },
    Usage: {
      Title: "Bilanci i Llogarisë",
      SubTitle(used: any, total: any) {
        return `Përdorur këtë muaj $${used}, abonim $${total}`;
      },
      IsChecking: "Po kontrollohet...",
      Check: "Kontrollo",
      NoAccess: "Vendosni Çelësin e API-së për të kontrolluar bilancin",
    },
    AccessCode: {
      Title: "Kodi i Hyrjes",
      SubTitle: "Kontrolli i hyrjes është i aktivizuar",
      Placeholder: "Kodi i Hyrjes është i Nevojshëm",
    },
    Endpoint: {
      Title: "Pikëfundit",
      SubTitle: "Pikëfundit e përshtatshme duhet të fillojë me http(s)://",
    },
    Model: "Modeli",
    Temperature: {
      Title: "Temperatura",
      SubTitle: "Një vlerë më e madhe sjell prodhim më të rastësishëm",
    },
    MaxTokens: {
      Title: "Numri Maksimal i Tokens",
      SubTitle: "Gjatësia maksimale e tokens të hyrjes dhe tokens të gjeneruar",
    },
    PresencePenalty: {
      Title: "Gjobë për Praninë",
      SubTitle:
        "Një vlerë më e madhe rrit mundësinë për të folur për tema të reja",
    },
  },
  Store: {
    DefaultTopic: "Bisedë e Re",
    BotHello: "Përshëndetje! Si mund të ju ndihmoj sot?",
    Error: "Diçka shkoi gabim, ju lutemi provoni përsëri më vonë.",
    Prompt: {
      History: (content: string) =>
        "Ky është një përmbledhje e historisë së bisedës si një pasqyrë: " + content,
      Topic:
        "Ju lutemi gjeneroni një titull prej katër deri në pesë fjalë që përmbledh bisedën tonë pa asnjë paralajmërim, pikësim, thonjza, simbole ose tekst shtesë. Hiqni thonjzat e rrethuara.",
      Summarize:
        "Përmbledhni diskutimin në mënyrë të shkurtër në 200 fjalë ose më pak për ta përdorur si ndihmëse për kontekstin e ardhshëm.",
    },
  },
  Copy: {
    Success: "Kopjuar në të papastër",
    Failed: "Kopjimi dështoi, ju lutemi jepni leje për të pasur qasje në të papastër",
  },
  Context: {
    Toast: (x: any) => `Me ${x} ndihmës kontekstuale`,
    Edit: "Ndihmësat Kontekstuale dhe Kujtesa",
    Add: "Shto një Ndihmës",
    Clear: "Pastro Kontekstin",
    Revert: "Kthe",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Maska",
    Page: {
      Title: "Shabllon Ndihmëse",
      SubTitle: (count: number) => `${count} shabllone ndihmëse`,
      Search: "Kërko Shabllonet",
      Create: "Krijo",
    },
    Item: {
      Info: (count: number) => `${count} ndihmësa`,
      Chat: "Bisedë",
      View: "Shiko",
      Edit: "Redakto",
      Delete: "Fshi",
      DeleteConfirm: "Konfirmo për të fshirë?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Redakto Shabllonin Ndihmës ${readonly ? "(i vetëm për lexim)" : ""}`,
      Download: "Shkarko",
      Clone: "Klono",
    },
    Config: {
      Avatar: "Avatari i Botit",
      Name: "Emri i Botit",
      Sync: {
        Title: "Përdor Cilësimet Globale",
        SubTitle: "Përdor cilësimet globale në këtë bisedë",
        Confirm: "Konfirmo për të zëvendësuar cilësimin e përshtatur me cilësimin global?",
      },
      HideContext: {
        Title: "Fsheh Ndihmësat Kontekstuale",
        SubTitle: "Mos trego ndihmësat në kontekst në bisedë",
      },
    },
  },
  NewChat: {
    Return: "Kthehu",
    Skip: "Fillo Vetëm",
    Title: "Zgjidh një Maskë",
    SubTitle: "Bisedo me Shpirtin pas Maskës",
    More: "Gjej Më Shumë",
    NotShow: "Mos trego më",
    ConfirmNoShow: "Konfirmo për të çaktivizuar? Mund ta aktivizoni më vonë në cilësimet.",
  },

  UI: {
    Confirm: "Konfirmo",
    Cancel: "Anulo",
    Close: "Mbyll",
    Create: "Krijo",
    Edit: "Redakto",
  },
};

export default al;