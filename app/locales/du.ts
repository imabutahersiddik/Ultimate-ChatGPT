import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

const du: LocaleType = {
  WIP: "Binnenkort beschikbaar...",
  Error: {
    Unauthorized:
      "Ondersteun Ultimate ChatGPT op [Patreon](https://patreon.com/KiasK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link) of via Bkash (+880 1812-715289), Stuur via [Worldremit](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob), Mobiel Wallet Nummer: +880 1812-715289 om ons te helpen deze krachtige Ultimate ChatGPT te verbeteren en te onderhouden.",
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
    SubTitle: (count: number) => `${count} berichten`,
    Actions: {
      ChatList: "Ga naar Chatlijst",
      CompressedHistory: "Gecomprimeerde Geschiedenis Geheugenprompt",
      Export: "Exporteer Alle Berichten als Markdown",
      Copy: "Kopiëren",
      Stop: "Stoppen",
      Retry: "Opnieuw proberen",
      Pin: "Vastzetten",
      PinToastContent: "2 berichten vastgezet als contextuele prompts",
      PinToastAction: "Bekijken",
      Delete: "Verwijderen",
      Edit: "Bewerken",
    },
    Commands: {
      new: "Start een nieuwe chat",
      newm: "Start een nieuwe chat met masker",
      next: "Volgende Chat",
      prev: "Vorige Chat",
      clear: "Context wissen",
      del: "Chat verwijderen",
    },
    InputActions: {
      Stop: "Stoppen",
      ToBottom: "Naar laatste bericht",
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
    Rename: "Chat Hernoemen",
    Typing: "Typen...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} om te verzenden`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter om te breken";
      }
      return inputHints + ", / om prompts te zoeken, : om commando's te gebruiken";
    },
    Send: "Verzenden",
    Config: {
      Reset: "Terugzetten naar Standaardwaarden",
      SaveAs: "Opslaan als Masker",
    },
  },
  Export: {
    Title: "Berichten Exporteren",
    Copy: "Kopiëren",
    Download: "Downloaden",
    MessageFromYou: "Bericht van Jou",
    MessageFromChatGPT: "Bericht van ChatGPT",
    Share: "Delen via KiAsk Share",
    Format: {
      Title: "Exporteer Formaat",
      SubTitle: "Markdown of PNG Afbeelding",
    },
    IncludeContext: {
      Title: "Inclusief Context",
      SubTitle: "Contextuele prompts exporteren in masker of niet",
    },
    Steps: {
      Select: "Selecteren",
      Preview: "Voorbeeld",
    },
    Image: {
      Toast: "Afbeelding wordt vastgelegd...",
      Modal: "Houd lang ingedrukt of klik met de rechtermuisknop om afbeelding op te slaan",
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
    Reset: "Sessie herstellen",
    ResetConfirm:
      "Het herstellen wist de huidige gespreksgeschiedenis en historisch geheugen. Weet je zeker dat je wilt herstellen?",
  },
  Home: {
    NewChat: "Nieuwe Chat",
    DeleteChat: "Bevestig dat je het geselecteerde gesprek wilt verwijderen?",
    DeleteToast: "Chat Verwijderd",
    Revert: "Herstellen",
  },
  Settings: {
    Title: "Instellingen",
    SubTitle: "Alle Instellingen",
    Danger: {
      Reset: {
        Title: "Alle Instellingen Terugzetten",
        SubTitle: "Alle instellingen terugzetten naar standaardwaarden",
        Action: "Terugzetten",
        Confirm: "Weet je zeker dat je alle instellingen wilt terugzetten naar standaardwaarden?",
      },
      Clear: {
        Title: "Alle Gegevens Wissen",
        SubTitle: "Alle berichten en instellingen wissen",
        Action: "Wissen",
        Confirm: "Weet je zeker dat je alle berichten en instellingen wilt wissen?",
      },
    },
    Lang: {
      Name: "Taal", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Alle Talen",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Lettergrootte",
      SubTitle: "Pas de lettergrootte van de chatinhoud aan",
    },

    InputTemplate: {
      Title: "Invoersjabloon",
      SubTitle: "Het nieuwste bericht wordt ingevuld in deze sjabloon",
    },

    Update: {
      Version: (x: string) => `Versie: ${x}`,
      IsLatest: "Laatste versie",
      CheckUpdate: "Controleer op updates",
      IsChecking: "Controleren op updates...",
      FoundUpdate: (x: string) => `Nieuwe versie gevonden: ${x}`,
      GoToUpdate: "Updaten",
    },
    SendKey: "Verzendtoets",
    Theme: "Thema",
    TightBorder: "Strakke Rand",
    SendPreviewBubble: {
      Title: "Voorbeeldbubbel Verzenden",
      SubTitle: "Voorbeeld van markdown in bubbel weergeven",
    },
    Mask: {
      Splash: {
        Title: "Masker Splash Scherm",
        SubTitle: "Toon een masker splash scherm voordat een nieuwe chat wordt gestart",
      },
      Builtin: {
        Title: "Ingebouwde Maskers Verbergen",
        SubTitle: "Ingebouwde maskers verbergen in maskerlijst",
      },
    },
    Prompt: {
      Disable: {
        Title: "Auto-aanvulling uitschakelen",
        SubTitle: "Typ / om auto-aanvulling te activeren",
      },
      List: "Promptlijst",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} ingebouwd, ${custom} gebruikersgedefinieerd`,
      Edit: "Bewerken",
      Modal: {
        Title: "Promptlijst",
        Add: "Toevoegen",
        Search: "Prompts zoeken",
      },
      EditModal: {
        Title: "Prompt Bewerken",
      },
    },
    HistoryCount: {
      Title: "Aantal Bijgevoegde Berichten",
      SubTitle: "Aantal verzonden berichten dat wordt bijgevoegd per verzoek",
    },
    CompressThreshold: {
      Title: "Geschiedenis Compressie Drempel",
      SubTitle:
        "Comprimeren indien de lengte van ongecomprimeerde berichten de waarde overschrijdt",
    },
    Token: {
      Title: "API Sleutel",
      SubTitle: "Gebruik je sleutel om de toegangscode limiet te negeren",
      Placeholder: "OpenAI API Sleutel",
    },
    Usage: {
      Title: "Account Balans",
      SubTitle(used: any, total: any) {
        return `Deze maand gebruikt $${used}, abonnement $${total}`;
      },
      IsChecking: "Controleren...",
      Check: "Controleren",
      NoAccess: "Voer een API Sleutel in om de balans te controleren",
    },
    AccessCode: {
      Title: "Toegangscode",
      SubTitle: "Toegangscontrole ingeschakeld",
      Placeholder: "Toegangscode vereist",
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
    TopP: {
      Title: "Top P",
      SubTitle: "Verander deze waarde niet samen met temperatuur",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Maximale lengte van invoertokens en gegenereerde tokens",
    },
    PresencePenalty: {
      Title: "Aanwezigheidsstraf",
      SubTitle:
        "Een grotere waarde verhoogt de kans om over nieuwe onderwerpen te praten",
    },
    FrequencyPenalty: {
      Title: "Frequentiestraf",
      SubTitle:
        "Een grotere waarde verlaagt de kans om dezelfde zin te herhalen",
    },
  },
  Store: {
    DefaultTopic: "Nieuw Gesprek",
    BotHello: "Hallo! Waarmee kan ik je vandaag helpen?",
    Error: "Er is iets misgegaan, probeer het later opnieuw.",
    Prompt: {
      History: (content: string) =>
        "Dit is een samenvatting van de chatgeschiedenis als herinnering: " + content,
      Topic:
        "Genereer alsjeblieft een titel van vier tot vijf woorden die ons gesprek samenvat, zonder enige inleiding, leestekens, aanhalingstekens, punten, symbolen of extra tekst. Verwijder aanhalingstekens rondom de titel.",
      Summarize:
        "Vat de discussie kort samen in 200 woorden of minder om te gebruiken als prompt voor toekomstige context.",
    },
  },
  Copy: {
    Success: "Gekopieerd naar klembord",
    Failed: "Kopiëren mislukt, geef toestemming om toegang tot klembord te verlenen",
  },
  Context: {
    Toast: (x: any) => `Met ${x} contextuele prompts`,
    Edit: "Huidige Chat Instellingen",
    Add: "Een Prompt Toevoegen",
    Clear: "Context Wissen",
    Revert: "Herstellen",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Masker",
    Page: {
      Title: "Prompt Sjabloon",
      SubTitle: (count: number) => `${count} prompt sjablonen`,
      Search: "Sjablonen zoeken",
      Create: "Aanmaken",
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
        `Prompt Sjabloon Bewerken ${readonly ? "(alleen-lezen)" : ""}`,
      Download: "Downloaden",
      Clone: "Klonen",
    },
    Config: {
      Avatar: "Bot Avatar",
      Name: "Bot Naam",
      Sync: {
        Title: "Gebruik Globale Configuratie",
        SubTitle: "Gebruik de globale configuratie in deze chat",
        Confirm: "Bevestigen om aangepaste configuratie te vervangen met globale configuratie?",
      },
      HideContext: {
        Title: "Verberg Contextuele Prompts",
        SubTitle: "Toon geen contextuele prompts in de chat",
      },
      Share: {
        Title: "Deel dit Masker",
        SubTitle: "Genereer een link naar dit masker",
        Action: "Kopieer Link",
      },
    },
  },
  NewChat: {
    Return: "Terug",
    Skip: "Gewoon Beginnen",
    Title: "Kies een Masker",
    SubTitle: "Chat met de Ziel achter het Masker",
    More: "Meer Ontdekken",
    NotShow: "Nooit Meer Weergeven",
    ConfirmNoShow: "Bevestig om uit te schakelen? Je kunt het later weer inschakelen in de instellingen.",
  },

  UI: {
    Confirm: "Bevestigen",
    Cancel: "Annuleren",
    Close: "Sluiten",
    Create: "Aanmaken",
    Edit: "Bewerken",
  },
  Exporter: {
    Model: "Model",
    Messages: "Berichten",
    Topic: "Onderwerp",
    Time: "Tijd",
  },
};

export default du;