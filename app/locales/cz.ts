import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

// if you are adding a new translation, please use PartialLocaleType instead of LocaleType
const cz: LocaleType = {
  WIP: "Brzy...",
  Error: {
    Unauthorized:
      "Podpořte Ultimate ChatGPT na [Patreon](https://patreon.com/KiasK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link) nebo pomocí Bkash (+880 1812-715289), Pošlete pomocí [Worldremit](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob), číslo mobilního peněženky: +880 1812-715289, abyste nám pomohli vylepšovat a udržovat tento výkonný Ultimate ChatGPT.",
  },
  Auth: {
    Title: "Potřebujete přístupový kód",
    Tips: "Zadejte níže přístupový kód",
    Input: "přístupový kód",
    Confirm: "Potvrdit",
    Later: "Později",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} zpráv`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} zpráv`,
    Actions: {
      ChatList: "Přejít na seznam chatů",
      CompressedHistory: "Komprimovaná historie paměťového podnětu",
      Export: "Exportovat všechny zprávy jako Markdown",
      Copy: "Kopírovat",
      Stop: "Zastavit",
      Retry: "Zkusit znovu",
      Pin: "Připnout",
      PinToastContent: "Připnuto 2 zprávy k paměťovým podnětům",
      PinToastAction: "Zobrazit",
      Delete: "Smazat",
      Edit: "Upravit",
    },
    Commands: {
      new: "Začít nový chat",
      newm: "Začít nový chat s maskou",
      next: "Další chat",
      prev: "Předchozí chat",
      clear: "Vymazat kontext",
      del: "Smazat chat",
    },
    InputActions: {
      Stop: "Zastavit",
      ToBottom: "Na nejnovější",
      Theme: {
        auto: "Automatické",
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
      return inputHints + ", / pro vyhledávání podnětů, : pro použití příkazů";
    },
    Send: "Odeslat",
    Config: {
      Reset: "Obnovit na výchozí",
      SaveAs: "Uložit jako masku",
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
      SubTitle: "Exportovat kontextové podněty v masce nebo ne",
    },
    Steps: {
      Select: "Vybrat",
      Preview: "Náhled",
    },
    Image: {
      Toast: "Vytváření obrázku...",
      Modal: "Podržte nebo klikněte pravým tlačítkem pro uložení obrázku",
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
    EmptyContent: "Nic zatím.",
    Send: "Odeslat paměť",
    Copy: "Kopírovat paměť",
    Reset: "Obnovit relaci",
    ResetConfirm:
      "Obnovení vymaže aktuální historii konverzace a historickou paměť. Opravdu chcete obnovit?",
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
    Danger: {
      Reset: {
        Title: "Obnovit všechna nastavení",
        SubTitle: "Obnovit všechny položky nastavení na výchozí",
        Action: "Obnovit",
        Confirm: "Potvrdit obnovení všech nastavení na výchozí?",
      },
      Clear: {
        Title: "Vymazat všechna data",
        SubTitle: "Vymazat všechny zprávy a nastavení",
        Action: "Vymazat",
        Confirm: "Potvrdit vymazání všech zpráv a nastavení?",
      },
    },
    Lang: {
      Name: "Czech", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Všechny jazyky",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Velikost písma",
      SubTitle: "Upravit velikost písma chatového obsahu",
    },

    InputTemplate: {
      Title: "Vstupní šablona",
      SubTitle: "Nejnovější zpráva bude vyplněna do této šablony",
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
      Title: "Odeslat náhled bubliny",
      SubTitle: "Náhled markdownu v bublině",
    },
    Mask: {
      Splash: {
        Title: "Úvodní obrazovka masky",
        SubTitle: "Zobrazit úvodní obrazovku masky před zahájením nového chatu",
      },
      Builtin: {
        Title: "Skrýt vestavěné masky",
        SubTitle: "Skrýt vestavěné masky v seznamu masek",
      },
    },
    Prompt: {
      Disable: {
        Title: "Vypnout automatické dokončování",
        SubTitle: "Pro spuštění automatického dokončování zadejte /",
      },
      List: "Seznam podnětů",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} vestavěných, ${custom} uživatelem definovaných`,
      Edit: "Upravit",
      Modal: {
        Title: "Seznam podnětů",
        Add: "Přidat",
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
        "Komprimuje, pokud délka nekomprimovaných zpráv překročí hodnotu",
    },
    Token: {
      Title: "API klíč",
      SubTitle: "Použijte svůj klíč k ignorování omezení přístupového kódu",
      Placeholder: "OpenAI API klíč",
    },
    Usage: {
      Title: "Stav účtu",
      SubTitle(used: any, total: any) {
        return `Využito tento měsíc $${used}, předplatné $${total}`;
      },
      IsChecking: "Kontrola...",
      Check: "Zkontrolovat",
      NoAccess: "Zadejte API klíč pro zjištění stavu",
    },
    AccessCode: {
      Title: "Přístupový kód",
      SubTitle: "Povolen ovládací přístup",
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
    TopP: {
      Title: "Top P",
      SubTitle: "Neměňte tuto hodnotu společně s teplotou",
    },
    MaxTokens: {
      Title: "Maximální počet tokenů",
      SubTitle: "Maximální délka vstupních tokenů a generovaných tokenů",
    },
    PresencePenalty: {
      Title: "Trest přítomnosti",
      SubTitle:
        "Vyšší hodnota zvyšuje pravděpodobnost mluvení o nových tématech",
    },
    FrequencyPenalty: {
      Title: "Trest frekvence",
      SubTitle:
        "Vyšší hodnota snižuje pravděpodobnost opakování stejného řádku",
    },
  },
  Store: {
    DefaultTopic: "Nová konverzace",
    BotHello: "Ahoj! Jak vám mohu pomoci dnes?",
    Error: "Něco se pokazilo, zkuste to prosím znovu později.",
    Prompt: {
      History: (content: string) =>
        "Toto je shrnutí chatové historie: " + content,
      Topic:
        "Prosím, vygenerujte čtyři až pět slový název, který shrnuje naši konverzaci bez jakéhokoli úvodu, interpunkce, uvozovek, teček, symbolů nebo dalšího textu. Odstraňte uzavírací uvozovky.",
      Summarize:
        "Stručně shrňte diskusi do 200 slov nebo méně, aby se použilo jako podnět pro budoucí kontext.",
    },
  },
  Copy: {
    Success: "Zkopírováno do schránky",
    Failed: "Kopírování se nezdařilo, povolte přístup ke schránce",
  },
  Context: {
    Toast: (x: any) => `S ${x} kontextovými podněty`,
    Edit: "Aktuální nastavení chatu",
    Add: "Přidat podnět",
    Clear: "Kontext vymazán",
    Revert: "Vrátit",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Maska",
    Page: {
      Title: "Šablona podnětu",
      SubTitle: (count: number) => `${count} šablon podnětů`,
      Search: "Hledat šablony",
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
      Share: {
        Title: "Sdílet tuto masku",
        SubTitle: "Vygenerovat odkaz na tuto masku",
        Action: "Kopírovat odkaz",
      },
    },
  },
  NewChat: {
    Return: "Vrátit se",
    Skip: "Začít",
    Title: "Vyberte masku",
    SubTitle: "Chatujte se srdcem za maskou",
    More: "Najít další",
    NotShow: "Už nezobrazovat",
    ConfirmNoShow: "Potvrdit deaktivaci? Můžete ji později povolit v nastavení.",
  },

  UI: {
    Confirm: "Potvrdit",
    Cancel: "Zrušit",
    Close: "Zavřít",
    Create: "Vytvořit",
    Edit: "Upravit",
  },
  Exporter: {
    Model: "Model",
    Messages: "Zprávy",
    Topic: "Téma",
    Time: "Čas",
  },
};

export default cz;