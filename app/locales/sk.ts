import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const sk: RequiredLocaleType = {
  WIP: "Čoskoro...",
  Error: {
    Unauthorized:
      "Neoprávnený prístup, prosím zadajte prístupový kód na stránke [auth](/#/auth).",
  },
  Auth: {
    Title: "Potrebný prístupový kód",
    Tips: "Prosím zadajte prístupový kód nižšie",
    Input: "prístupový kód",
    Confirm: "Potvrdiť",
    Later: "Neskôr",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} správ`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} správ s The ChatGPT`,
    Actions: {
      ChatList: "Prejsť na zoznam chatov",
      CompressedHistory: "Zoznam komprimovanej histórie pamäťových podnetov",
      Export: "Exportovať všetky správy ako Markdown",
      Copy: "Kopírovať",
      Stop: "Zastaviť",
      Retry: "Opakovať",
      Delete: "Vymazať",
    },
    InputActions: {
      Stop: "Zastaviť",
      ToBottom: "K najnovšiemu",
      Theme: {
        auto: "Automatické",
        light: "Svetlé témy",
        dark: "Tmavé témy",
      },
      Prompt: "Podnety",
      Masks: "Masky",
      Clear: "Vymazať kontext",
      Settings: "Nastavenia",
    },
    Rename: "Premenovať chat",
    Typing: "Píše sa...",
    Input: (submitKey: string) => {
      var inputHints = `Pre odoslanie použite ${submitKey}`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter pre zalomenie riadku";
      }
      return inputHints + ", / pre vyhľadávanie podnetov";
    },
    Send: "Odoslať",
    Config: {
      Reset: "Obnoviť predvolené nastavenia",
      SaveAs: "Uložiť ako masku",
    },
  },
  Export: {
    Title: "Exportovať správy",
    Copy: "Kopírovať všetko",
    Download: "Stiahnuť",
    MessageFromYou: "Správa od vás",
    MessageFromChatGPT: "Správa od The ChatGPT",
    Share: "Zdieľať na KiAsk Share",
    Format: {
      Title: "Formát exportu",
      SubTitle: "Markdown alebo PNG obrázok",
    },
    IncludeContext: {
      Title: "Zahrnúť kontext",
      SubTitle: "Exportovať kontextové podnety v maske alebo nie",
    },
    Steps: {
      Select: "Vybrať",
      Preview: "Náhľad",
    },
  },
  Select: {
    Search: "Vyhľadávanie",
    All: "Vybrať všetko",
    Latest: "Vybrať najnovšie",
    Clear: "Vyčistiť",
  },
  Memory: {
    Title: "Pamäťový podnet",
    EmptyContent: "Zatiaľ nič.",
    Send: "Odoslať pamäť",
    Copy: "Kopírovať pamäť",
    Reset: "Obnoviť reláciu",
    ResetConfirm:
      "Obnovenie vymaže aktuálnu históriu konverzácie a historickú pamäť. Naozaj chcete obnoviť?",
  },
  Home: {
    NewChat: "Nový chat",
    DeleteChat: "Potvrdiť vymazanie vybranej konverzácie?",
    DeleteToast: "Chat vymazaný",
    Revert: "Vrátiť",
  },
  Settings: {
    Title: "Nastavenia",
    SubTitle: "Všetky nastavenia",
    Actions: {
      ClearAll: "Vymazať všetky údaje",
      ResetAll: "Obnoviť všetky nastavenia",
      Close: "Zavrieť",
      ConfirmResetAll: "Naozaj chcete obnoviť všetky konfigurácie?",
      ConfirmClearAll: "Naozaj chcete vymazať všetky údaje?",
    },
    Lang: {
      Name: "Jazyk", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Všetky jazyky",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Veľkosť písma",
      SubTitle: "Nastavenie veľkosti písma v chatovom obsahu",
    },
    Update: {
      Version: (x: string) => `Verzia: ${x}`,
      IsLatest: "Najnovšia verzia",
      CheckUpdate: "Skontrolovať aktualizácie",
      IsChecking: "Kontroluje sa aktualizácia...",
      FoundUpdate: (x: string) => `Nájdená nová verzia: ${x}`,
      GoToUpdate: "Aktualizovať",
    },
    SendKey: "Kľúč pre odosielanie",
    Theme: "Téma",
    TightBorder: "Stiahnutý okraj",
    SendPreviewBubble: {
      Title: "Odoslať náhľadovú bublinu",
      SubTitle: "Zobraziť náhľad markdown v bubline",
    },
    Mask: {
      Title: "Maskovacia úvodná obrazovka",
      SubTitle: "Zobraziť maskovaciu úvodnú obrazovku pred začatím nového chatu",
    },
    Prompt: {
      Disable: {
        Title: "Vypnúť automatické dokončovanie",
        SubTitle: "Pre spustenie automatického dokončovania zadajte /",
      },
      List: "Zoznam podnetov",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} vstavaných, ${custom} používateľom definovaných`,
      Edit: "Upraviť",
      Modal: {
        Title: "Zoznam podnetov",
        Add: "Pridať",
        Search: "Vyhľadávať podnety",
      },
      EditModal: {
        Title: "Upraviť podnet",
      },
    },
    HistoryCount: {
      Title: "Počet pripojených správ",
      SubTitle: "Počet odoslaných správ pripojených na požiadavku",
    },
    CompressThreshold: {
      Title: "Hranica kompresie histórie",
      SubTitle:
        "Ak dĺžka neprekomprimovaných správ presiahne túto hodnotu, bude sa komprimovať",
    },
    Token: {
      Title: "API kľúč",
      SubTitle: "Použite svoj kľúč na obchádzanie obmedzenia prístupového kódu",
      Placeholder: "OpenAI API kľúč",
    },
    Usage: {
      Title: "Bilancia účtu",
      SubTitle(used: any, total: any) {
        return `Využité tento mesiac $${used}, predplatné $${total}`;
      },
      IsChecking: "Kontroluje sa...",
      Check: "Skontrolovať",
      NoAccess: "Zadajte API kľúč pre kontrolu zostatku",
    },
    AccessCode: {
      Title: "Prístupový kód",
      SubTitle: "Povolená kontrola prístupu",
      Placeholder: "Potrebný prístupový kód",
    },
    Endpoint: {
      Title: "Koncový bod",
      SubTitle: "Vlastný koncový bod musí začínať http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Teplota",
      SubTitle: "Väčšia hodnota zvyšuje pravdepodobnosť náhodného výstupu",
    },
    MaxTokens: {
      Title: "Maximálny počet tokenov",
      SubTitle: "Maximálna dĺžka vstupných a generovaných tokenov",
    },
    PresencePenalty: {
      Title: "Trest prítomnosti",
      SubTitle:
        "Väčšia hodnota zvyšuje pravdepodobnosť rozprávania o nových témach",
    },
  },
  Store: {
    DefaultTopic: "Nová konverzácia",
    BotHello: "Ahoj! Ako vám môžem pomôcť dnes?",
    Error: "Niečo sa pokazilo, skúste to prosím neskôr.",
    Prompt: {
      History: (content: string) =>
        "Toto je súhrn chatovej histórie ako rekapitulácia: " + content,
      Topic:
        "Prosím vygenerujte názov konverzácie zhrňujúci naše rozhovory v štyroch až piatich slovách bez akýchkoľvek úvodu, interpunkcie, úvodzoviek, bodiek, symbolov alebo ďalšieho textu. Odstráňte ohraničujúce úvodzovky.",
      Summarize:
        "Stručne zhrňte diskusiu do 200 slov alebo menej, aby ste ju mohli použiť ako podnet pre budúci kontext.",
    },
  },
  Copy: {
    Success: "Skopírované do schránky",
    Failed: "Kopírovanie zlyhalo, prosím povolte prístup k schránke",
  },
  Context: {
    Toast: (x: any) => `S ${x} kontextovými podnetmi`,
    Edit: "Kontextové a pamäťové podnety",
    Add: "Pridať podnet",
    Clear: "Vymazať kontext",
    Revert: "Vrátiť",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Maska",
    Page: {
      Title: "Šablóna podnetu",
      SubTitle: (count: number) => `${count} šablón podnetov`,
      Search: "Vyhľadávať šablóny",
      Create: "Vytvoriť",
    },
    Item: {
      Info: (count: number) => `${count} podnetov`,
      Chat: "Chat",
      View: "Zobraziť",
      Edit: "Upraviť",
      Delete: "Vymazať",
      DeleteConfirm: "Potvrdiť vymazanie?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Upraviť šablónu podnetu ${readonly ? "(iba na čítanie)" : ""}`,
      Download: "Stiahnuť",
      Clone: "Klonovať",
    },
    Config: {
      Avatar: "Avatar robota",
      Name: "Meno robota",
      Sync: {
        Title: "Použiť globálne nastavenie",
        SubTitle: "Použiť globálne nastavenie v tomto chate",
        Confirm: "Potvrdiť prepísanie vlastného nastavenia globálnym nastavením?",
      },
      HideContext: {
        Title: "Skryť kontextové podnety",
        SubTitle: "Nezobrazovať kontextové podnety v chate",
      },
    },
  },
  NewChat: {
    Return: "Návrat",
    Skip: "Len začať",
    Title: "Vyberte masku",
    SubTitle: "Rozhovor s dušou za maskou",
    More: "Nájsť viac",
    NotShow: "Nikdy nezobrazovať",
    ConfirmNoShow: "Potvrdiť zakázanie? Neskôr si ju môžete povoliť v nastaveniach.",
  },

  UI: {
    Confirm: "Potvrdiť",
    Cancel: "Zrušiť",
    Close: "Zavrieť",
    Create: "Vytvoriť",
    Edit: "Upraviť",
  },
};

export default sk;