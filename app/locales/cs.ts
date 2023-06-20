import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const cs: RequiredLocaleType = {
  WIP: "Brzy...",
  Error: {
    Unauthorized:
      "Neautorizovaný přístup, prosím zadejte přístupový kód na stránce [auth](/#/auth).",
  },
  Auth: {
    Title: "Potřebujete přístupový kód",
    Tips: "Prosím zadejte přístupový kód níže",
    Input: "přístupový kód",
    Confirm: "Potvrdit",
    Later: "Později",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} zpráv`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} zpráv s The ChatGPT`,
    Actions: {
      ChatList: "Přejít na seznam chatů",
      CompressedHistory: "Komprimovaná historie paměťového podnětu",
      Export: "Exportovat všechny zprávy jako Markdown",
      Copy: "Kopírovat",
      Stop: "Zastavit",
      Retry: "Zkusit znovu",
      Delete: "Smazat",
    },
    InputActions: {
      Stop: "Zastavit",
      ToBottom: "K nejnovějšímu",
      Theme: {
        auto: "Automatický",
        light: "Světlé téma",
        dark: "Tmavé téma",
      },
      Prompt: "Podněty",
      Masks: "Masky",
      Clear: "Vymazat kontext",
      Settings: "Nastavení",
    },
    Rename: "Přejmenovat chat",
    Typing: "Psaní...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} pro odeslání`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter pro zalomení";
      }
      return inputHints + ", / pro vyhledávání podnětů";
    },
    Send: "Odeslat",
    Config: {
      Reset: "Obnovit na výchozí hodnoty",
      SaveAs: "Uložit jako masku",
    },
  },
  Export: {
    Title: "Exportovat zprávy",
    Copy: "Kopírovat vše",
    Download: "Stáhnout",
    MessageFromYou: "Zpráva od vás",
    MessageFromChatGPT: "Zpráva od The ChatGPT",
    Share: "Sdílet na KiAsk Share",
    Format: {
      Title: "Formát exportu",
      SubTitle: "Markdown nebo PNG obrázek",
    },
    IncludeContext: {
      Title: "Zahrnout kontext",
      SubTitle: "Exportovat kontextové podněty v masce nebo ne",
    },
    Steps: {
      Select: "Vybrat",
      Preview: "Náhled",
    },
  },
  Select: {
    Search: "Vyhledávání",
    All: "Vybrat vše",
    Latest: "Vybrat nejnovější",
    Clear: "Vymazat",
  },
  Memory: {
    Title: "Paměťový podnět",
    EmptyContent: "Zatím nic.",
    Send: "Odeslat paměť",
    Copy: "Kopírovat paměť",
    Reset: "Obnovit relaci",
    ResetConfirm:
      "Obnovením se vymaže aktuální historie konverzace a historická paměť. Opravdu chcete obnovit?",
  },
  Home: {
    NewChat: "Nový chat",
    DeleteChat: "Potvrdit smazání vybrané konverzace?",
    DeleteToast: "Chat smazán",
    Revert: "Vrátit",
  },
  Settings: {
    Title: "Nastavení",
    SubTitle: "Všechna nastavení",
    Actions: {
      ClearAll: "Vymazat všechna data",
      ResetAll: "Obnovit všechna nastavení",
      Close: "Zavřít",
      ConfirmResetAll: "Opravdu chcete obnovit všechny konfigurace?",
      ConfirmClearAll: "Opravdu chcete vymazat všechna data?",
    },
    Lang: {
      Name: "Jazyk", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Všechny jazyky",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Velikost písma",
      SubTitle: "Nastavení velikosti písma v chatu",
    },
    Update: {
      Version: (x: string) => `Verze: ${x}`,
      IsLatest: "Nejnovější verze",
      CheckUpdate: "Zkontrolovat aktualizaci",
      IsChecking: "Kontrola aktualizace...",
      FoundUpdate: (x: string) => `Byla nalezena nová verze: ${x}`,
      GoToUpdate: "Aktualizovat",
    },
    SendKey: "Odeslat klíč",
    Theme: "Téma",
    TightBorder: "Těsná hranice",
    SendPreviewBubble: {
      Title: "Odeslat náhledovou bublinu",
      SubTitle: "Náhled markdownu v bublině",
    },
    Mask: {
      Title: "Úvodní obrazovka masky",
      SubTitle: "Zobrazit úvodní obrazovku masky před zahájením nového chatu",
    },
    Prompt: {
      Disable: {
        Title: "Vypnout automatické dokončování",
        SubTitle: "Zadejte / pro spuštění automatického dokončování",
      },
      List: "Seznam podnětů",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} vestavěných, ${custom} uživatelem definovaných`,
      Edit: "Upravit",
      Modal: {
        Title: "Seznam podnětů",
        Add: "Přidat jeden",
        Search: "Hledat podněty",
      },
      EditModal: {
        Title: "Upravit podnět",
      },
    },
    HistoryCount: {
      Title: "Počet připojených zpráv",
      SubTitle: "Počet odeslaných zpráv připojených na požádání",
    },
    CompressThreshold: {
      Title: "Práh komprese historie",
      SubTitle:
        "Bude komprimovat, pokud délka nepřekomprimovaných zpráv přesáhne hodnotu",
    },
    Token: {
      Title: "API klíč",
      SubTitle: "Použijte svůj klíč pro ignorování omezení přístupového kódu",
      Placeholder: "OpenAI API klíč",
    },
    Usage: {
      Title: "Stav účtu",
      SubTitle(used: any, total: any) {
        return `Tento měsíc použito $${used}, předplatné $${total}`;
      },
      IsChecking: "Kontrola...",
      Check: "Zkontrolovat",
      NoAccess: "Zadejte API klíč pro zjištění zůstatku",
    },
    AccessCode: {
      Title: "Přístupový kód",
      SubTitle: "Povolené řízení přístupu",
      Placeholder: "Potřebujete přístupový kód",
    },
    Endpoint: {
      Title: "Koncový bod",
      SubTitle: "Vlastní koncový bod musí začínat http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Teplota",
      SubTitle: "Vyšší hodnota způsobuje více náhodný výstup",
    },
    MaxTokens: {
      Title: "Maximální počet tokenů",
      SubTitle: "Maximální délka vstupních tokenů a generovaných tokenů",
    },
    PresencePenalty: {
      Title: "Trest za přítomnost",
      SubTitle:
        "Vyšší hodnota zvyšuje pravděpodobnost mluvení o nových tématech",
    },
  },
  Store: {
    DefaultTopic: "Nový rozhovor",
    BotHello: "Ahoj! Jak vám mohu pomoci dnes?",
    Error: "Něco se pokazilo, zkuste to prosím později znovu.",
    Prompt: {
      History: (content: string) =>
        "Toto je shrnutí chatové historie jako rekapitulace: " + content,
      Topic:
        "Prosím vytvořte čtyř až pěti slový titul shrnující naši konverzaci bez úvodu, interpunkce, uvozovek, teček, symbolů nebo dalšího textu. Odstraňte uzavírací uvozovky.",
      Summarize:
        "Stručně shrňte diskusi do 200 slov nebo méně, které lze použít jako podnět pro budoucí kontext.",
    },
  },
  Copy: {
    Success: "Zkopírováno do schránky",
    Failed: "Kopírování se nezdařilo, prosím povolte přístup k schránce",
  },
  Context: {
    Toast: (x: any) => `S ${x} kontextovými podněty`,
    Edit: "Kontextové a paměťové podněty",
    Add: "Přidat podnět",
    Clear: "Vymazat kontext",
    Revert: "Vrátit",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Maska",
    Page: {
      Title: "Šablona podnětu",
      SubTitle: (count: number) => `${count} šablon podnětu`,
      Search: "Vyhledávání šablon",
      Create: "Vytvořit",
    },
    Item: {
      Info: (count: number) => `${count} podnětů`,
      Chat: "Chat",
      View: "Zobrazit",
      Edit: "Upravit",
      Delete: "Smazat",
      DeleteConfirm: "Potvrdit smazání?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Upravit šablonu podnětu ${readonly ? "(jen pro čtení)" : ""}`,
      Download: "Stáhnout",
      Clone: "Klonovat",
    },
    Config: {
      Avatar: "Avatar robota",
      Name: "Jméno robota",
      Sync: {
        Title: "Použít globální konfiguraci",
        SubTitle: "Použít globální konfiguraci v tomto chatu",
        Confirm: "Potvrdit přepsání vlastní konfigurace globální konfigurací?",
      },
      HideContext: {
        Title: "Skrýt kontextové podněty",
        SubTitle: "Nezobrazovat kontextové podněty v chatu",
      },
    },
  },
  NewChat: {
    Return: "Vrátit",
    Skip: "Začít",
    Title: "Vyberte masku",
    SubTitle: "Chatujte s duší za maskou",
    More: "Najít více",
    NotShow: "Už nikdy nezobrazovat",
    ConfirmNoShow: "Potvrdit zakázání? Můžete jej později povolit v nastavení.",
  },

  UI: {
    Confirm: "Potvrdit",
    Cancel: "Zrušit",
    Close: "Zavřít",
    Create: "Vytvořit",
    Edit: "Upravit",
  },
};

export default cs;