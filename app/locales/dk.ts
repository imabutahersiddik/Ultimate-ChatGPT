import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const da: RequiredLocaleType = {
  WIP: "Kommer snart...",
  Error: {
    Unauthorized:
      "Uautoriseret adgang, indtast adgangskoden på [auth](/#/auth) siden.",
  },
  Auth: {
    Title: "Brug for Adgangskode",
    Tips: "Indtast venligst adgangskoden nedenfor",
    Input: "adgangskode",
    Confirm: "Bekræft",
    Later: "Senere",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} beskeder`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} beskeder med The ChatGPT`,
    Actions: {
      ChatList: "Gå til Chat Liste",
      CompressedHistory: "Komprimeret Historisk Memory Prompt",
      Export: "Eksportér alle beskeder som Markdown",
      Copy: "Kopier",
      Stop: "Stop",
      Retry: "Prøv igen",
      Delete: "Slet",
    },
    InputActions: {
      Stop: "Stop",
      ToBottom: "Til seneste",
      Theme: {
        auto: "Auto",
        light: "Lyst Tema",
        dark: "Mørkt Tema",
      },
      Prompt: "Prompts",
      Masks: "Prompts",
      Clear: "Ryd Kontekst",
      Settings: "Indstillinger",
    },
    Rename: "Omdøb Chat",
    Typing: "Skriver...",
    Input: (submitKey: string) => {
      var inputHints = `Tryk ${submitKey} for at sende`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Skift + Enter for at wrappe";
      }
      return inputHints + ", / for at søge prompts";
    },
    Send: "Send",
    Config: {
      Reset: "Nulstil til Standard",
      SaveAs: "Gem som Prompts",
    },
  },
  Export: {
    Title: "Eksportér Beskeder",
    Copy: "Kopier Alle",
    Download: "Download",
    MessageFromYou: "Besked Fra Dig",
    MessageFromChatGPT: "Besked Fra The ChatGPT",
    Share: "Del til KiAsk Share",
    Format: {
      Title: "Eksportformat",
      SubTitle: "Markdown eller PNG Billede",
    },
    IncludeContext: {
      Title: "Inkluder Kontekst",
      SubTitle: "Eksporter kontekstprompts med maske eller ej",
    },
    Steps: {
      Select: "Vælg",
      Preview: "Forhåndsvisning",
    },
  },
  Select: {
    Search: "Søg",
    All: "Markér Alle",
    Latest: "Markér Seneste",
    Clear: "Ryd",
  },
  Memory: {
    Title: "Memory Prompt",
    EmptyContent: "Ingenting endnu.",
    Send: "Send Hukommelse",
    Copy: "Kopier Hukommelse",
    Reset: "Nulstil Session",
    ResetConfirm:
      "Nulstilling vil slette den nuværende samtalehistorik og historisk hukommelse. Er du sikker på, du vil nulstille?",
  },
  Home: {
    NewChat: "Ny Chat",
    DeleteChat: "Bekræft sletning af den valgte samtale?",
    DeleteToast: "Chat Slettet",
    Revert: "Tilbagesæt",
  },
  Settings: {
    Title: "Indstillinger",
    SubTitle: "Alle Indstillinger",
    Actions: {
      ClearAll: "Ryd Alle Data",
      ResetAll: "Nulstil Alle Indstillinger",
      Close: "Luk",
      ConfirmResetAll: "Er du sikker på, du vil nulstille alle konfigurationer?",
      ConfirmClearAll: "Er du sikker på, du vil nulstille alle data?",
    },
    Lang: {
      Name: "Sprog", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Alle Sprog",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Skriftstørrelse",
      SubTitle: "Juster skriftstørrelsen for chatindhold",
    },
    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Nyeste version",
      CheckUpdate: "Tjek For Opdatering",
      IsChecking: "Tjekker for opdatering...",
      FoundUpdate: (x: string) => `Ny version fundet: ${x}`,
      GoToUpdate: "Opdater",
    },
    SendKey: "Send Nøgle",
    Theme: "Tema",
    TightBorder: "Tæt Kant",
    SendPreviewBubble: {
      Title: "Send Forhåndsvisningsboble",
      SubTitle: "Forhåndsvis markdown i boble",
    },
    Mask: {
      Title: "Prompt Splash Screen",
      SubTitle: "Vis et prompt splash screen før ny chat startes",
    },
    Prompt: {
      Disable: {
        Title: "Deaktiver automatisk udfyldning",
        SubTitle: "Indtast / for at starte automatisk udfyldning",
      },
      List: "Prompt Liste",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} indbygget, ${custom} brugerdefineret`,
      Edit: "Rediger",
      Modal: {
        Title: "Prompt Liste",
        Add: "Tilføj En",
        Search: "Søg i Prompts",
      },
      EditModal: {
        Title: "Rediger Prompt",
      },
    },
    HistoryCount: {
      Title: "Antal Vedhæftede Beskeder",
      SubTitle: "Antal sendte beskeder vedhæftet pr. anmodning",
    },
    CompressThreshold: {
      Title: "Komprimeringstærskel for Historik",
      SubTitle:
        "Komprimeres, hvis længden af ukomprimerede beskeder overstiger værdien",
    },
    Token: {
      Title: "API Nøgle",
      SubTitle: "Brug din nøgle til at ignorere adgangskodegrænsen",
      Placeholder: "OpenAI API Nøgle",
    },
    Usage: {
      Title: "Konto Balance",
      SubTitle(used: any, total: any) {
        return `Brugt denne måned $${used}, abonnement $${total}`;
      },
      IsChecking: "Tjekker...",
      Check: "Tjek",
      NoAccess: "Indtast API Nøgle for at tjekke saldo",
    },
    AccessCode: {
      Title: "Adgangskode",
      SubTitle: "Adgangskontrol aktiveret",
      Placeholder: "Behov for Adgangskode",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Brugerdefineret endpoint skal starte med http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperatur",
      SubTitle: "En større værdi gør outputtet mere tilfældigt",
    },
    MaxTokens: {
      Title: "Maksimum Tokens",
      SubTitle: "Maksimal længde af input tokens og genererede tokens",
    },
    PresencePenalty: {
      Title: "Præsens Straf",
      SubTitle:
        "En større værdi øger sandsynligheden for at tale om nye emner",
    },
  },
  Store: {
    DefaultTopic: "Ny Samtale",
    BotHello: "Hej! Hvordan kan jeg hjælpe dig i dag?",
    Error: "Noget gik galt, prøv venligst igen senere.",
    Prompt: {
      History: (content: string) =>
        "Dette er en opsummering af chat historikken som en genopfriskning: " + content,
      Topic:
        "Generér venligst en fire til fem ord lang titel, der opsummerer vores samtale uden introduktion, tegnsætning, citattegn, punktummer, symboler eller yderligere tekst. Fjern anførselstegn.",
      Summarize:
        "Opsummere diskussionen kortfattet i 200 ord eller mindre for at bruge som prompt for fremtidig kontekst.",
    },
  },
  Copy: {
    Success: "Kopieret til udklipsholder",
    Failed: "Kopiering mislykkedes, giv venligst tilladelse til at få adgang til udklipsholder",
  },
  Context: {
    Toast: (x: any) => `Med ${x} kontekstpåmindelser`,
    Edit: "Kontekst- og Hukommelsesprompter",
    Add: "Tilføj en Prompt",
    Clear: "Ryd Kontekst",
    Revert: "Tilbagesæt",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Prompt",
    Page: {
      Title: "Prompt Skabelon",
      SubTitle: (count: number) => `${count} prompt skabeloner`,
      Search: "Søg i Skabeloner",
      Create: "Opret",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Chat",
      View: "Vis",
      Edit: "Rediger",
      Delete: "Slet",
      DeleteConfirm: "Bekræft sletning?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Rediger Prompt Skabelon ${readonly ? "(skrivebeskyttet)" : ""}`,
      Download: "Download",
      Clone: "Klon",
    },
    Config: {
      Avatar: "Bot Avatar",
      Name: "Bot Navn",
      Sync: {
        Title: "Brug Global Config",
        SubTitle: "Brug global config i denne chat",
        Confirm: "Bekræft for at overskrive brugerdefineret config med global config?",
      },
      HideContext: {
        Title: "Skjul Kontekstprompter",
        SubTitle: "Vis ikke kontekstpåmindelser i chatten",
      },
    },
  },
  NewChat: {
    Return: "Tilbage",
    Skip: "Bare Start",
    Title: "Vælg et Prompt",
    SubTitle: "Chat med det forudindstillede Prompt",
    More: "Find Mere",
    NotShow: "Vis Aldrig Igen",
    ConfirmNoShow: "Bekræft deaktivering? Du kan aktivere det senere i indstillinger.",
  },

  UI: {
    Confirm: "Bekræft",
    Cancel: "Annuller",
    Close: "Luk",
    Create: "Opret",
    Edit: "Rediger",
  },
};

export default da;
