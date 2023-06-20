import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const sv: RequiredLocaleType = {
  WIP: "Kommer snart...",
  Error: {
    Unauthorized:
      "Obehörig åtkomst, ange åtkomstkod på [auth](/#/auth)-sidan.",
  },
  Auth: {
    Title: "Behöver åtkomstkod",
    Tips: "Ange åtkomstkoden nedan",
    Input: "åtkomstkod",
    Confirm: "Bekräfta",
    Later: "Senare",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} meddelanden`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} meddelanden med The ChatGPT`,
    Actions: {
      ChatList: "Gå till chattlista",
      CompressedHistory: "Komprimerad historik Memory Prompt",
      Export: "Exportera alla meddelanden som Markdown",
      Copy: "Kopiera",
      Stop: "Stoppa",
      Retry: "Försök igen",
      Delete: "Ta bort",
    },
    InputActions: {
      Stop: "Stoppa",
      ToBottom: "Till senaste",
      Theme: {
        auto: "Automatisk",
        light: "Ljust tema",
        dark: "Mörkt tema",
      },
      Prompt: "Förslag",
      Masks: "Masker",
      Clear: "Rensa kontext",
      Settings: "Inställningar",
    },
    Rename: "Byt namn på chatt",
    Typing: "Skriver...",
    Input: (submitKey: string) => {
      var inputHints = `Tryck på ${submitKey} för att skicka`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Skift + Enter för att radbryta";
      }
      return inputHints + ", / för att söka efter förslag";
    },
    Send: "Skicka",
    Config: {
      Reset: "Återställ till standard",
      SaveAs: "Spara som mask",
    },
  },
  Export: {
    Title: "Exportera meddelanden",
    Copy: "Kopiera allt",
    Download: "Ladda ner",
    MessageFromYou: "Meddelande från dig",
    MessageFromChatGPT: "Meddelande från The ChatGPT",
    Share: "Dela till KiAsk Share",
    Format: {
      Title: "Exportformat",
      SubTitle: "Markdown eller PNG-bild",
    },
    IncludeContext: {
      Title: "Inkludera kontext",
      SubTitle: "Exportera kontextförslag som mask eller inte",
    },
    Steps: {
      Select: "Välj",
      Preview: "Förhandsgranska",
    },
  },
  Select: {
    Search: "Sök",
    All: "Välj alla",
    Latest: "Välj senaste",
    Clear: "Rensa",
  },
  Memory: {
    Title: "Memory Prompt",
    EmptyContent: "Inget ännu.",
    Send: "Skicka minne",
    Copy: "Kopiera minne",
    Reset: "Återställ session",
    ResetConfirm:
      "Återställning kommer att rensa den aktuella konversationshistoriken och historiskt minne. Är du säker på att du vill återställa?",
  },
  Home: {
    NewChat: "Ny chatt",
    DeleteChat: "Bekräfta att du vill ta bort den valda konversationen?",
    DeleteToast: "Chatt borttagen",
    Revert: "Återgå",
  },
  Settings: {
    Title: "Inställningar",
    SubTitle: "Alla inställningar",
    Actions: {
      ClearAll: "Rensa all data",
      ResetAll: "Återställ alla inställningar",
      Close: "Stäng",
      ConfirmResetAll: "Är du säker på att du vill återställa alla konfigurationer?",
      ConfirmClearAll: "Är du säker på att du vill återställa all data?",
    },
    Lang: {
      Name: "Språk", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Alla språk",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Teckenstorlek",
      SubTitle: "Justera teckenstorleken på chattinnehållet",
    },
    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Senaste versionen",
      CheckUpdate: "Kontrollera uppdatering",
      IsChecking: "Kontrollerar uppdatering...",
      FoundUpdate: (x: string) => `Hittade ny version: ${x}`,
      GoToUpdate: "Uppdatera",
    },
    SendKey: "Skicka nyckel",
    Theme: "Tema",
    TightBorder: "Tät kant",
    SendPreviewBubble: {
      Title: "Skicka förhandsgranskningsbubbla",
      SubTitle: "Förhandsgranska markdown i bubbla",
    },
    Mask: {
      Title: "Maskstartskärm",
      SubTitle: "Visa en maskstartskärm innan du startar ny chatt",
    },
    Prompt: {
      Disable: {
        Title: "Inaktivera automatisk komplettering",
        SubTitle: "Ange / för att aktivera automatisk komplettering",
      },
      List: "Förslagslista",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} inbyggda, ${custom} användardefinierade`,
      Edit: "Redigera",
      Modal: {
        Title: "Förslagslista",
        Add: "Lägg till ett",
        Search: "Sök efter förslag",
      },
      EditModal: {
        Title: "Redigera förslag",
      },
    },
    HistoryCount: {
      Title: "Antal bifogade meddelanden",
      SubTitle: "Antal skickade meddelanden som bifogas per begäran",
    },
    CompressThreshold: {
      Title: "Tröskel för historiekomprimering",
      SubTitle:
        "Komprimerar om längden på okomprimerade meddelanden överstiger värdet",
    },
    Token: {
      Title: "API-nyckel",
      SubTitle: "Använd din nyckel för att ignorera åtkomstbegränsning",
      Placeholder: "OpenAI API-nyckel",
    },
    Usage: {
      Title: "Kontosaldo",
      SubTitle(used: any, total: any) {
        return `Använt denna månad $${used}, prenumeration $${total}`;
      },
      IsChecking: "Kontrollerar...",
      Check: "Kontrollera",
      NoAccess: "Ange API-nyckel för att kontrollera saldo",
    },
    AccessCode: {
      Title: "Åtkomstkod",
      SubTitle: "Åtkomstkontroll är aktiverad",
      Placeholder: "Behöver åtkomstkod",
    },
    Endpoint: {
      Title: "Slutpunkt",
      SubTitle: "Anpassad slutpunkt måste börja med http(s)://",
    },
    Model: "Modell",
    Temperature: {
      Title: "Temperatur",
      SubTitle: "Ett större värde gör utmatningen mer slumpmässig",
    },
    MaxTokens: {
      Title: "Maximalt antal token",
      SubTitle: "Maximal längd på inmatade token och genererade token",
    },
    PresencePenalty: {
      Title: "Närvaropenalitet",
      SubTitle:
        "Ett större värde ökar sannolikheten att prata om nya ämnen",
    },
  },
  Store: {
    DefaultTopic: "Ny konversation",
    BotHello: "Hej! Hur kan jag hjälpa dig idag?",
    Error: "Något gick fel, försök igen senare.",
    Prompt: {
      History: (content: string) =>
        "Detta är en sammanfattning av chattens historia som en sammanfattning: " +
        content,
      Topic:
        "Generera en fyra till fem ord lång titel som sammanfattar vår konversation utan någon inledning, interpunktion, citattecken, punkter, symboler eller annan text. Ta bort inneslutande citattecken.",
      Summarize:
        "Sammanfatta diskussionen kortfattat i 200 ord eller mindre för att använda som en prompt för framtida kontext.",
    },
  },
  Copy: {
    Success: "Kopierat till urklipp",
    Failed: "Kopiering misslyckades, ge behörighet att komma åt urklipp",
  },
  Context: {
    Toast: (x: any) => `Med ${x} kontextuella förslag`,
    Edit: "Kontextuella och minnesförslag",
    Add: "Lägg till en prompt",
    Clear: "Kontext rensad",
    Revert: "Återgå",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Mask",
    Page: {
      Title: "Förslagsmall",
      SubTitle: (count: number) => `${count} förslagsmallar`,
      Search: "Sök efter mallar",
      Create: "Skapa",
    },
    Item: {
      Info: (count: number) => `${count} förslag`,
      Chat: "Chatt",
      View: "Visa",
      Edit: "Redigera",
      Delete: "Ta bort",
      DeleteConfirm: "Bekräfta att du vill ta bort?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Redigera förslagsmall ${readonly ? "(endast läsning)" : ""}`,
      Download: "Ladda ner",
      Clone: "Klona",
    },
    Config: {
      Avatar: "Bot-avatar",
      Name: "Bot-namn",
      Sync: {
        Title: "Använd global konfiguration",
        SubTitle: "Använd global konfiguration i denna chatt",
        Confirm: "Bekräfta att du vill åsidosätta anpassad konfiguration med global konfiguration?",
      },
      HideContext: {
        Title: "Dölj kontextförslag",
        SubTitle: "Visa inte kontextförslag i chatten",
      },
    },
  },
  NewChat: {
    Return: "Tillbaka",
    Skip: "Börja bara",
    Title: "Välj en mask",
    SubTitle: "Chatta med själen bakom masken",
    More: "Hitta mer",
    NotShow: "Visa aldrig igen",
    ConfirmNoShow: "Bekräfta att du vill inaktivera? Du kan aktivera det senare i inställningarna.",
  },

  UI: {
    Confirm: "Bekräfta",
    Cancel: "Avbryt",
    Close: "Stäng",
    Create: "Skapa",
    Edit: "Redigera",
  },
};

export default sv;