import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const du: RequiredLocaleType = {
  WIP: "Binnenkort beschikbaar...",
  Error: {
    Unauthorized:
      "Ongeoorloofde toegang, voer toegangscode in op de [auth](/#/auth) pagina.",
  },
  Auth: {
    Title: "Toegangscode vereist",
    Tips: "Voer hieronder de toegangscode in",
    Input: "Toegangscode",
    Confirm: "Bevestigen",
    Later: "Later",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} berichten`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} berichten met ChatGPT`,
    Actions: {
      ChatList: "Ga naar Chatlijst",
      CompressedHistory: "Gecomprimeerde geschiedenisgeheugenprompt",
      Export: "Exporteer alle berichten als markdown",
      Copy: "Kopiëren",
      Stop: "Stoppen",
      Retry: "Opnieuw proberen",
      Delete: "Verwijderen",
    },
    InputActions: {
      Stop: "Stoppen",
      ToBottom: "Naar laatste",
      Theme: {
        auto: "Automatisch",
        light: "Lichte modus",
        dark: "Donkere modus",
      },
      Prompt: "Prompts",
      Masks: "Prompts",
      Clear: "Context wissen",
      Settings: "Instellingen",
    },
    Rename: "Chat hernoemen",
    Typing: "Typen...",
    Input: (submitKey: string) => {
      var inputHints = `Gebruik ${submitKey} om te verzenden`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter om naar nieuwe regel te gaan";
      }
      return inputHints + ", / om prompts te doorzoeken";
    },
    Send: "Verzenden",
    Config: {
      Reset: "Standaardwaarden herstellen",
      SaveAs: "Opnemen als prompt",
    },
  },
  Export: {
    Title: "Berichten exporteren",
    Copy: "Kopieer alles",
    Download: "Downloaden",
    MessageFromYou: "Bericht van jou",
    MessageFromChatGPT: "Bericht van ChatGPT",
    Share: "Delen via KiAsk Share",
    Format: {
      Title: "Exporteerformaat",
      SubTitle: "Markdown of PNG-afbeelding",
    },
    IncludeContext: {
      Title: "Inclusief context",
      SubTitle: "Prompts exporteren",
    },
    Steps: {
      Select: "Selecteren",
      Preview: "Voorbeeld",
    },
  },
  Select: {
    Search: "Zoeken",
    All: "Alles selecteren",
    Latest: "Laatste selecteren",
    Clear: "Wissen",
  },
  Memory: {
    Title: "Geheugenprompts",
    EmptyContent: "Nog niets.",
    Send: "Geheugen verzenden",
    Copy: "Geheugen kopiëren",
    Reset: "Sessie herstellen",
    ResetConfirm:
      "Het herstellen verwijdert de huidige gespreksgeschiedenis en historisch geheugen. Weet je zeker dat je wilt herstellen?",
  },
  Home: {
    NewChat: "Nieuw gesprek",
    DeleteChat: "Bevestig het verwijderen van het geselecteerde gesprek?",
    DeleteToast: "Gesprek verwijderd",
    Revert: "Terugdraaien",
  },
  Settings: {
    Title: "Instellingen",
    SubTitle: "Alle instellingen",
    Actions: {
      ClearAll: "Alle gegevens wissen",
      ResetAll: "Alle instellingen herstellen",
      Close: "Sluiten",
      ConfirmResetAll: "Weet je zeker dat je alle configuraties wilt herstellen?",
      ConfirmClearAll: "Weet je zeker dat je alle gegevens wilt wissen?",
    },
    Lang: {
      Name: "Taal", // ATTENTIE: als je een nieuwe vertaling wilt toevoegen, vertaal dan deze waarde niet, laat het als `Language`.
      All: "Alle talen",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Tekstgrootte",
      SubTitle: "Pas de tekstgrootte van de chatinhoud aan",
    },
    Update: {
      Version: (x: string) => `Versie: ${x}`,
      IsLatest: "Nieuwste versie",
      CheckUpdate: "Controleren op updates",
      IsChecking: "Controleren op updates...",
      FoundUpdate: (x: string) => `Nieuwe versie gevonden: ${x}`,
      GoToUpdate: "Bijwerken",
    },
    SendKey: "Verstuurtoets",
    Theme: "Thema",
    TightBorder: "Strakke rand",
    SendPreviewBubble: {
      Title: "Voorbeeld bubbel verzenden",
      SubTitle: "Voorbeeld van markdown in bubbel weergeven",
    },
    Mask: {
      Title: "Opstartschermprompts",
      SubTitle: "Toon een opstartschermprompt voordat een nieuw gesprek wordt gestart",
    },
    Prompt: {
      Disable: {
        Title: "Automatisch aanvullen uitschakelen",
        SubTitle: "Gebruik / om automatisch aanvullen te activeren",
      },
      List: "Promptlijst",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} ingebouwd, ${custom} aangepast`,
      Edit: "Bewerken",
      Modal: {
        Title: "Promptlijst",
        Add: "Toevoegen",
        Search: "Prompts zoeken",
      },
      EditModal: {
        Title: "Prompt bewerken",
      },
    },
    HistoryCount: {
      Title: "Aantal meegezonden berichten",
      SubTitle: "Aantal verzonden berichten per aanvraag",
    },
    CompressThreshold: {
      Title: "Geschiedeniscapaciteitsdrempel",
      SubTitle:
        "Als het aantal niet gecomprimeerde berichten de drempelwaarde overschrijdt, wordt compressie toegepast",
    },
    Token: {
      Title: "API-sleutel",
      SubTitle: "Gebruik je sleutel om de toegangscodelimiet te negeren",
      Placeholder: "OpenAI API-sleutel",
    },
    Usage: {
      Title: "Accountsaldo",
      SubTitle(used: any, total: any) {
        return `Deze maand gebruikt $${used}, abonnement $${total}`;
      },
      IsChecking: "Controleren...",
      Check: "Controleer",
      NoAccess: "Voer een API-sleutel in om het saldo te controleren",
    },
    AccessCode: {
      Title: "Toegangscode",
      SubTitle: "Toegangsbeheer ingeschakeld",
      Placeholder: "Toegangscode vereist",
    },
    Endpoint: {
      Title: "Eindpunt",
      SubTitle: "Aangepast eindpunt moet beginnen met http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperatuur",
      SubTitle: "Een grotere waarde zorgt voor meer willekeurige uitvoer",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Maximale lengte van invoer- en gegenereerde tokens",
    },
    PresencePenalty: {
      Title: "Aanwezigheidstraf",
      SubTitle:
        "Een grotere waarde vergroot de kans om over nieuwe onderwerpen te praten",
    },
  },
  Store: {
    DefaultTopic: "Nieuw gesprek",
    BotHello: "Hallo! Hoe kan ik je vandaag helpen?",
    Error: "Er is iets misgegaan, probeer het later opnieuw.",
    Prompt: {
      History: (content: string) =>
        "Dit is een samenvatting van de gespreksgeschiedenis: " + content,
      Topic:
        "Genereer alsjeblieft een titel van vier tot vijf woorden die ons gesprek samenvat, zonder enige inleiding, leestekens, aanhalingstekens, punten, symbolen of extra tekst. Verwijder aanhalingstekens aan de buitenkant.",
      Summarize:
        "Vat het gesprek kort samen in 200 woorden of minder om te gebruiken als context voor toekomstige gesprekken.",
    },
  },
  Copy: {
    Success: "Gekopieerd naar klembord",
    Failed: "Kopiëren mislukt, verleen toestemming om toegang te krijgen tot het klembord",
  },
  Context: {
    Toast: (x: any) => `Met ${x} contextuele prompts`,
    Edit: "Contextuele en geheugenprompts",
    Add: "Voeg een prompt toe",
    Clear: "Context wissen",
    Revert: "Terugdraaien",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Prompt",
    Page: {
      Title: "Promptsjabloon",
      SubTitle: (count: number) => `${count} promptsjablonen`,
      Search: "Zoek sjablonen",
      Create: "Creëren",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Chat",
      View: "Weergave",
      Edit: "Bewerken",
      Delete: "Verwijderen",
      DeleteConfirm: "Bevestig om te verwijderen?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Promptsjabloon bewerken ${readonly ? "(alleen-lezen)" : ""}`,
      Download: "Downloaden",
      Clone: "Dupliceren",
    },
    Config: {
      Avatar: "Bot-avatar",
      Name: "Botnaam",
      Sync: {
        Title: "Gebruik globale configuratie",
        SubTitle: "Gebruik de wereldwijde configuratie in deze chat",
        Confirm: "Bevestig dat u de aangepaste configuratie wilt overschrijven met de globale configuratie?",
      },
      HideContext: {
        Title: "Verberg contextuele prompts",
        SubTitle: "Toon geen contextuele prompts in de chat",
      },
    },
  },
  NewChat: {
    Return: "Terug",
    Skip: "Gewoon beginnen",
    Title: "Kies een prompt",
    SubTitle: "Chat met de ziel achter de prompt",
    More: "Meer informatie",
    NotShow: "Nooit meer tonen",
    ConfirmNoShow: "Bevestig uitschakelen? Je kunt het later inschakelen in de instellingen.",
  },

  UI: {
    Confirm: "Bevestigen",
    Cancel: "Annuleren",
    Close: "Sluiten",
    Create: "Maken",
    Edit: "Bewerken",
  },
};

export default du;