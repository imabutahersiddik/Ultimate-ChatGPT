import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const cz: RequiredLocaleType = {
  WIP: "Brzy...",
  Error: {
    Unauthorized:
      "Nepovolený přístup, prosím zadejte přístupový kód na [auth](/#/auth) stránce.",
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
    SubTitle: (count: number) => `${count} zpráv s ChatGPT`,
    Actions: {
      ChatList: "Přejít na seznam chatů",
      CompressedHistory: "Komprimovaná historie paměťového podnětu",
      Export: "Exportovat všechny zprávy jako Markdown",
      Copy: "Kopírovat",
      Stop: "Zastavit",
      Retry: "Opakovat",
      Delete: "Smazat",
    },
    InputActions: {
      Stop: "Zastavit",
      ToBottom: "Na nejnovější",
      Theme: {
        auto: "Automatický",
        light: "Světlé téma",
        dark: "Tmavé téma",
      },
      Prompt: "Podněty",
      Masks: "Podněty",
      Clear: "Vymazat kontext",
      Settings: "Nastavení",
    },
    Rename: "Přejmenovat chat",
    Typing: "Psaní...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} pro odeslání`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter pro ohraničení";
      }
      return inputHints + ", / pro vyhledání podnětů";
    },
    Send: "Odeslat",
    Config: {
      Reset: "Resetovat na výchozí",
      SaveAs: "Uložit jako podnět",
    },
  },
  Export: {
    Title: "Exportovat zprávy",
    Copy: "Kopírovat vše",
    Download: "Stáhnout",
    MessageFromYou: "Zpráva od vás",
    MessageFromChatGPT: "Zpráva od ChatGPT",
    Share: "Sdílet na KiAsk Share",
    Format: {
      Title: "Formát exportu",
      SubTitle: "Markdown nebo PNG obrázek",
    },
    IncludeContext: {
      Title: "Včetně kontextu",
      SubTitle: "Exportovat podněty kontextu",
    },
    Steps: {
      Select: "Vybrat",
      Preview: "Náhled",
    },
  },
  Select: {
    Search: "Hledat",
    All: "Vybrat vše",
    Latest: "Vybrat nejnovější",
    Clear: "Vymazat",
  },
  Memory: {
    Title: "Paměťový podnět",
    EmptyContent: "Zatím nic.",
    Send: "Odeslat paměť",
    Copy: "Kopírovat paměť",
    Reset: "Resetovat sezení",
    ResetConfirm:
      "Resetováním se vymaže aktuální historie konverzace a historické paměti. Opravdu chcete resetovat?",
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
      ResetAll: "Resetovat všechna nastavení",
      Close: "Zavřít",
      ConfirmResetAll: "Opravdu chcete resetovat všechna nastavení?",
      ConfirmClearAll: "Opravdu chcete vymazat všechna data?",
    },
    Lang: {
      Name: "Jazyk", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Všechny jazyky",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Velikost písma",
      SubTitle: "Upravit velikost písma chatovacího obsahu",
    },
    Update: {
      Version: (x: string) => `Verze: ${x}`,
      IsLatest: "Nejnovější verze",
      CheckUpdate: "Zkontrolovat aktualizaci",
      IsChecking: "Probíhá kontrola...",
      FoundUpdate: (x: string) => `Byla nalezena nová verze: ${x}`,
      GoToUpdate: "Aktualizovat",
    },
    SendKey: "Odeslat klávesu",
    Theme: "Téma",
    TightBorder: "Kompaktní okraje",
    SendPreviewBubble: {
      Title: "Zaslat náhledovou bublinu",
      SubTitle: "Náhled markdownu v bublině",
    },
    Mask: {
      Title: "Zobrazit úvodní obrazovku podnětu",
      SubTitle: "Zobrazit úvodní obrazovku s podnětem před zahájením nového chatu",
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
      Title: "Prah pro kompresi historie",
      SubTitle:
        "Bude se komprimovat, pokud délka nepozměněných zpráv překročí danou hodnotu",
    },
    Token: {
      Title: "API klíč",
      SubTitle: "Použijte svůj klíč pro obejití omezení přístupového kódu",
      Placeholder: "OpenAI API klíč",
    },
    Usage: {
      Title: "Stav účtu",
      SubTitle(used: any, total: any) {
        return `Za tuto dobu bylo použito $${used}, předplatné $${total}`;
      },
      IsChecking: "Probíhá kontrola...",
      Check: "Kontrola",
      NoAccess: "Zadejte API klíč pro zjištění stavu",
    },
    AccessCode: {
      Title: "Přístupový kód",
      SubTitle: "Omezení přístupu je povoleno",
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
      Title: "Sankce za přítomnost",
      SubTitle:
        "Vyšší hodnota zvyšuje pravděpodobnost diskuse o nových tématech",
    },
  },
  Store: {
    DefaultTopic: "Nová konverzace",
    BotHello: "Ahoj! Jak vám dnes mohu pomoci?",
    Error: "Něco se pokazilo, prosím zkuste to znovu později.",
    Prompt: {
      History: (content: string) =>
        "Toto je shrnutí chatovací historie: " + content,
      Topic:
        "Prosím, vytvořte čtyř- až pěti slovný název shrnující naši konverzaci bez jakéhokoli začátku, interpunkce, citace, období, symbolů nebo dalšího textu. Odstraňte uzavírací uvozovky.",
      Summarize:
        "Stručně shrňte diskusi do nejvýše 200 slov jako podnět pro budoucí kontext.",
    },
  },
  Copy: {
    Success: "Zkopírováno",
    Failed: "Kopírování se nezdařilo, povolte přístup do schránky",
  },
  Context: {
    Toast: (x: any) => `S ${x} kontextovými podněty`,
    Edit: "Kontextové a paměťové podněty",
    Add: "Přidat podnět",
    Clear: "Kontext vymazán",
    Revert: "Vrátit",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Podnět",
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
      Avatar: "Avatar bota",
      Name: "Jméno bota",
      Sync: {
        Title: "Použít globální nastavení",
        SubTitle: "Použít globální nastavení v tomto chatu",
        Confirm: "Potvrdit přepsání vlastního nastavení globálním nastavením?",
      },
      HideContext: {
        Title: "Skrýt kontextové podněty",
        SubTitle: "Nezobrazovat kontextové podněty v chatu",
      },
    },
  },
  NewChat: {
    Return: "Vrátit",
    Skip: "Jen začít",
    Title: "Vyberte podnět",
    SubTitle: "Chatujte s duší za podnětem",
    More: "Najít více",
    NotShow: "Už nikdy nezobrazovat",
    ConfirmNoShow: "Potvrdit vypnutí? Můžete jej později zapnout v nastavení.",
  },

  UI: {
    Confirm: "Potvrdit",
    Cancel: "Zrušit",
    Close: "Zavřít",
    Create: "Vytvořit",
    Edit: "Upravit",
  },
};

export default cz;