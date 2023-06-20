import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const da: RequiredLocaleType = {
  WIP: "Kommer snart...",
  Error: {
    Unauthorized:
      "Uautoriseret adgang, venligst indtast adgangskoden på [auth](/#/auth) siden.",
  },
  Auth: {
    Title: "Brug for adgangskode",
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
      ChatList: "Gå til chatliste",
      CompressedHistory: "Komprimeret historiehukommelsesprompt",
      Export: "Eksporter alle beskeder som Markdown",
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
        light: "Lyst tema",
        dark: "Mørkt tema",
      },
      Prompt: "Prompter",
      Masks: "Masker",
      Clear: "Ryd kontekst",
      Settings: "Indstillinger",
    },
    Rename: "Omdøb chat",
    Typing: "Skrivning...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} for at sende`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Skift + Enter for at linjeombrud";
      }
      return inputHints + ", / for at søge i prompter";
    },
    Send: "Send",
    Config: {
      Reset: "Nulstil til standard",
      SaveAs: "Gem som maske",
    },
  },
  Export: {
    Title: "Eksporter beskeder",
    Copy: "Kopier alt",
    Download: "Download",
    MessageFromYou: "Besked fra dig",
    MessageFromChatGPT: "Besked fra The ChatGPT",
    Share: "Del til KiAsk Share",
    Format: {
      Title: "Eksporteringsformat",
      SubTitle: "Markdown eller PNG-billede",
    },
    IncludeContext: {
      Title: "Inkluder kontekst",
      SubTitle: "Eksporter kontekstprompter i maske eller ej",
    },
    Steps: {
      Select: "Vælg",
      Preview: "Forhåndsvisning",
    },
  },
  Select: {
    Search: "Søg",
    All: "Vælg alle",
    Latest: "Vælg seneste",
    Clear: "Ryd",
  },
  Memory: {
    Title: "Hukommelsesprompt",
    EmptyContent: "Intet endnu.",
    Send: "Send hukommelse",
    Copy: "Kopier hukommelse",
    Reset: "Nulstil session",
    ResetConfirm:
      "Nulstilling vil rydde den aktuelle samtalehistorik og historisk hukommelse. Er du sikker på, at du vil nulstille?",
  },
  Home: {
    NewChat: "Ny chat",
    DeleteChat: "Bekræft sletning af den valgte samtale?",
    DeleteToast: "Chat slettet",
    Revert: "Fortryd",
  },
  Settings: {
    Title: "Indstillinger",
    SubTitle: "Alle indstillinger",
    Actions: {
      ClearAll: "Ryd alle data",
      ResetAll: "Nulstil alle indstillinger",
      Close: "Luk",
      ConfirmResetAll: "Er du sikker på, at du vil nulstille alle konfigurationer?",
      ConfirmClearAll: "Er du sikker på, at du vil nulstille alle data?",
    },
    Lang: {
      Name: "Sprog", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Alle sprog",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Skriftstørrelse",
      SubTitle: "Juster skriftstørrelsen på chatindholdet",
    },
    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Nyeste version",
      CheckUpdate: "Tjek opdatering",
      IsChecking: "Tjekker opdatering...",
      FoundUpdate: (x: string) => `Ny version fundet: ${x}`,
      GoToUpdate: "Opdater",
    },
    SendKey: "Send nøgle",
    Theme: "Tema",
    TightBorder: "Stram kant",
    SendPreviewBubble: {
      Title: "Send forhåndsvisningsboble",
      SubTitle: "Forhåndsvis Markdown i boble",
    },
    Mask: {
      Title: "Maske splash skærm",
      SubTitle: "Vis en maske splash skærm før start af ny chat",
    },
    Prompt: {
      Disable: {
        Title: "Deaktiver automatisk udfyldning",
        SubTitle: "Indtast / for at udløse automatisk udfyldning",
      },
      List: "Promptliste",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} indbygget, ${custom} brugerdefineret`,
      Edit: "Rediger",
      Modal: {
        Title: "Promptliste",
        Add: "Tilføj en",
        Search: "Søg i prompter",
      },
      EditModal: {
        Title: "Rediger prompt",
      },
    },
    HistoryCount: {
      Title: "Antal vedhæftede beskeder",
      SubTitle: "Antal afsendte beskeder vedhæftet pr. anmodning",
    },
    CompressThreshold: {
      Title: "Historiekomprimeringstærskel",
      SubTitle:
        "Komprimerer, hvis længden af ukomprimerede beskeder overstiger værdien",
    },
    Token: {
      Title: "API-nøgle",
      SubTitle: "Brug din nøgle til at ignorere adgangskodebegrænsning",
      Placeholder: "OpenAI API-nøgle",
    },
    Usage: {
      Title: "Kontosaldo",
      SubTitle(used: any, total: any) {
        return `Brugt denne måned $${used}, abonnement $${total}`;
      },
      IsChecking: "Tjekker...",
      Check: "Tjek",
      NoAccess: "Indtast API-nøgle for at tjekke saldo",
    },
    AccessCode: {
      Title: "Adgangskode",
      SubTitle: "Adgangskontrol aktiveret",
      Placeholder: "Brug for adgangskode",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Brugerdefineret endpoint skal starte med http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperatur",
      SubTitle: "En større værdi giver mere tilfældigt output",
    },
    MaxTokens: {
      Title: "Maks. tokens",
      SubTitle: "Maksimal længde af input tokens og genererede tokens",
    },
    PresencePenalty: {
      Title: "Tilstedeværelsesstraf",
      SubTitle:
        "En større værdi øger sandsynligheden for at tale om nye emner",
    },
  },
  Store: {
    DefaultTopic: "Ny samtale",
    BotHello: "Hej! Hvordan kan jeg hjælpe dig i dag?",
    Error: "Noget gik galt, prøv igen senere.",
    Prompt: {
      History: (content: string) =>
        "Dette er en opsummering af chat-historikken som en rekapitulering: " +
        content,
      Topic:
        "Generer venligst en fire til fem ord lang titel, der opsummerer vores samtale uden nogen introduktion, tegnsætning, anførselstegn, punktummer, symboler eller yderligere tekst. Fjern anførselstegnene omkring.",
      Summarize:
        "Opsummer diskussionen kortfattet på 200 ord eller mindre for at bruge som en prompt til fremtidig kontekst.",
    },
  },
  Copy: {
    Success: "Kopieret til udklipsholderen",
    Failed: "Kopiering mislykkedes, giv tilladelse til adgang til udklipsholderen",
  },
  Context: {
    Toast: (x: any) => `Med ${x} kontekstuelle prompter`,
    Edit: "Kontekstuelle og hukommelsesprompter",
    Add: "Tilføj en prompt",
    Clear: "Ryd kontekst",
    Revert: "Fortryd",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Maske",
    Page: {
      Title: "Promptskabelon",
      SubTitle: (count: number) => `${count} promptskabeloner`,
      Search: "Søg i skabeloner",
      Create: "Opret",
    },
    Item: {
      Info: (count: number) => `${count} prompter`,
      Chat: "Chat",
      View: "Vis",
      Edit: "Rediger",
      Delete: "Slet",
      DeleteConfirm: "Bekræft sletning?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Rediger promptskabelon ${readonly ? "(skrivebeskyttet)" : ""}`,
      Download: "Download",
      Clone: "Klon",
    },
    Config: {
      Avatar: "Bot-avatar",
      Name: "Bot-navn",
      Sync: {
        Title: "Brug global konfiguration",
        SubTitle: "Brug global konfiguration i denne chat",
        Confirm: "Bekræft for at overskrive brugerdefineret konfiguration med global konfiguration?",
      },
      HideContext: {
        Title: "Skjul kontekstuelle prompter",
        SubTitle: "Vis ikke kontekstuelle prompter i chat",
      },
    },
  },
  NewChat: {
    Return: "Gå tilbage",
    Skip: "Bare start",
    Title: "Vælg en maske",
    SubTitle: "Chat med sjælen bag masken",
    More: "Find mere",
    NotShow: "Vis aldrig igen",
    ConfirmNoShow: "Bekræft deaktivering? Du kan aktivere det i indstillinger senere.",
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