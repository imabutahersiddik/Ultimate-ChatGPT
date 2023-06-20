import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const nl: RequiredLocaleType = {
  WIP: "Binnenkort beschikbaar...",
  Error: {
    Unauthorized:
      "Ongeoorloofde toegang, voer de toegangscode in op de [auth](/#/auth) pagina.",
  },
  Auth: {
    Title: "Toegangscode nodig",
    Tips: "Voer hieronder de toegangscode in",
    Input: "toegangscode",
    Confirm: "Bevestigen",
    Later: "Later",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} berichten`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} berichten met The ChatGPT`,
    Actions: {
      ChatList: "Ga naar Chatlijst",
      CompressedHistory: "Gecomprimeerde Geschiedenisgeheugenprompt",
      Export: "Exporteer alle berichten als Markdown",
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
        light: "Licht thema",
        dark: "Donker thema",
      },
      Prompt: "Prompts",
      Masks: "Maskers",
      Clear: "Context wissen",
      Settings: "Instellingen",
    },
    Rename: "Chat hernoemen",
    Typing: "Typen...",
    Input: (submitKey: string) => {
      var inputHints = `Druk op ${submitKey} om te verzenden`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter om te verpakken";
      }
      return inputHints + ", / om prompts te zoeken";
    },
    Send: "Verzenden",
    Config: {
      Reset: "Terugzetten naar standaard",
      SaveAs: "Opslaan als Masker",
    },
  },
  Export: {
    Title: "Berichten exporteren",
    Copy: "Alles kopiëren",
    Download: "Downloaden",
    MessageFromYou: "Bericht van jou",
    MessageFromChatGPT: "Bericht van The ChatGPT",
    Share: "Delen via KiAsk Share",
    Format: {
      Title: "Exporteer formaat",
      SubTitle: "Markdown of PNG-afbeelding",
    },
    IncludeContext: {
      Title: "Inclusief Context",
      SubTitle: "Context prompts exporteren in masker of niet",
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
    Title: "Geheugenprompt",
    EmptyContent: "Nog niets.",
    Send: "Geheugen verzenden",
    Copy: "Geheugen kopiëren",
    Reset: "Sessie resetten",
    ResetConfirm:
      "Het resetten zal de huidige gespreksgeschiedenis en historisch geheugen wissen. Weet je zeker dat je wilt resetten?",
  },
  Home: {
    NewChat: "Nieuwe Chat",
    DeleteChat: "Bevestig dat je het geselecteerde gesprek wilt verwijderen?",
    DeleteToast: "Chat verwijderd",
    Revert: "Terugdraaien",
  },
  Settings: {
    Title: "Instellingen",
    SubTitle: "Alle instellingen",
    Actions: {
      ClearAll: "Alle gegevens wissen",
      ResetAll: "Alle instellingen resetten",
      Close: "Sluiten",
      ConfirmResetAll: "Weet je zeker dat je alle configuraties wilt resetten?",
      ConfirmClearAll: "Weet je zeker dat je alle gegevens wilt wissen?",
    },
    Lang: {
      Name: "Taal", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Alle talen",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Lettergrootte",
      SubTitle: "Pas de lettergrootte van de chatinhoud aan",
    },
    Update: {
      Version: (x: string) => `Versie: ${x}`,
      IsLatest: "Laatste versie",
      CheckUpdate: "Controleren op updates",
      IsChecking: "Controleren op updates...",
      FoundUpdate: (x: string) => `Nieuwe versie gevonden: ${x}`,
      GoToUpdate: "Bijwerken",
    },
    SendKey: "Verzendtoets",
    Theme: "Thema",
    TightBorder: "Strakke rand",
    SendPreviewBubble: {
      Title: "Voorbeeldbubbel verzenden",
      SubTitle: "Voorbeeld markdown in bubbel",
    },
    Mask: {
      Title: "Masker splash-scherm",
      SubTitle: "Toon een masker splash-scherm voordat je een nieuw gesprek start",
    },
    Prompt: {
      Disable: {
        Title: "Automatisch aanvullen uitschakelen",
        SubTitle: "Voer / in om automatisch aanvullen te activeren",
      },
      List: "Promptlijst",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} ingebouwd, ${custom} door gebruiker gedefinieerd`,
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
      Title: "Aantal bijgevoegde berichten",
      SubTitle: "Aantal verzonden berichten per verzoek",
    },
    CompressThreshold: {
      Title: "Geschiedeniscompressiedrempel",
      SubTitle:
        "Comprimeren indien de lengte van ongecomprimeerde berichten de waarde overschrijdt",
    },
    Token: {
      Title: "API-sleutel",
      SubTitle: "Gebruik je sleutel om de toegangscodebeperking te negeren",
      Placeholder: "OpenAI API-sleutel",
    },
    Usage: {
      Title: "Accountsaldo",
      SubTitle(used: any, total: any) {
        return `Deze maand gebruikt $${used}, abonnement $${total}`;
      },
      IsChecking: "Controleren...",
      Check: "Controleren",
      NoAccess: "Voer een API-sleutel in om het saldo te controleren",
    },
    AccessCode: {
      Title: "Toegangscode",
      SubTitle: "Toegangscontrole ingeschakeld",
      Placeholder: "Toegangscode nodig",
    },
    Endpoint: {
      Title: "Eindpunt",
      SubTitle: "Aangepast eindpunt moet beginnen met http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperatuur",
      SubTitle: "Een grotere waarde zorgt voor meer willekeurige output",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Maximale lengte van invoertokens en gegenereerde tokens",
    },
    PresencePenalty: {
      Title: "Aanwezigheidsstraf",
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
        "Dit is een samenvatting van de chatgeschiedenis als een recap: " + content,
      Topic:
        "Genereer alstublieft een titel van vier tot vijf woorden die ons gesprek samenvat zonder enige inleiding, leestekens, aanhalingstekens, punten, symbolen of extra tekst. Verwijder aanhalingstekens.",
      Summarize:
        "Vat de discussie kort samen in 200 woorden of minder om als prompt te gebruiken voor toekomstige context.",
    },
  },
  Copy: {
    Success: "Gekopieerd naar klembord",
    Failed: "Kopiëren mislukt, verleen toestemming om toegang tot het klembord",
  },
  Context: {
    Toast: (x: any) => `Met ${x} contextuele prompts`,
    Edit: "Contextuele en geheugenprompts",
    Add: "Een prompt toevoegen",
    Clear: "Context wissen",
    Revert: "Terugdraaien",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Masker",
    Page: {
      Title: "Prompt sjabloon",
      SubTitle: (count: number) => `${count} prompt sjablonen`,
      Search: "Sjablonen zoeken",
      Create: "Creëren",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Chat",
      View: "Bekijken",
      Edit: "Bewerken",
      Delete: "Verwijderen",
      DeleteConfirm: "Bevestig om te verwijderen?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Prompt sjabloon bewerken ${readonly ? "(alleen-lezen)" : ""}`,
      Download: "Downloaden",
      Clone: "Klonen",
    },
    Config: {
      Avatar: "Bot Avatar",
      Name: "Bot Naam",
      Sync: {
        Title: "Gebruik Globale Config",
        SubTitle: "Gebruik de globale config in deze chat",
        Confirm: "Bevestig om de aangepaste config te overschrijven met de globale config?",
      },
      HideContext: {
        Title: "Verberg contextuele prompts",
        SubTitle: "Toon geen in-context prompts in de chat",
      },
    },
  },
  NewChat: {
    Return: "Terug",
    Skip: "Gewoon beginnen",
    Title: "Kies een Masker",
    SubTitle: "Chat met de ziel achter het masker",
    More: "Meer vinden",
    NotShow: "Nooit meer tonen",
    ConfirmNoShow: "Bevestig uitschakelen? U kunt dit later inschakelen in de instellingen.",
  },

  UI: {
    Confirm: "Bevestigen",
    Cancel: "Annuleren",
    Close: "Sluiten",
    Create: "Creëren",
    Edit: "Bewerken",
  },
};

export default nl;