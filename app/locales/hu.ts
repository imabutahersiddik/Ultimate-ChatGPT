import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const hu: RequiredLocaleType = {
  WIP: "Hamarosan elérhető...",
  Error: {
    Unauthorized:
      "Engedély nélküli hozzáférés, kérjük, adja meg az hozzáférési kódot a [auth](/#/auth) oldalon.",
  },
  Auth: {
    Title: "Hozzáférési kód szükséges",
    Tips: "Kérjük, adja meg az alábbi hozzáférési kódot",
    Input: "hozzáférési kód",
    Confirm: "Megerősítés",
    Later: "Később",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} üzenet`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} üzenet a ChatGPT-vel`,
    Actions: {
      ChatList: "Ugrás a beszélgetési listára",
      CompressedHistory: "Tömörített előzmények memóriája",
      Export: "Összes üzenet exportálása Markdown formátumban",
      Copy: "Másolás",
      Stop: "Leállítás",
      Retry: "Újra",
      Delete: "Törlés",
    },
    InputActions: {
      Stop: "Leállítás",
      ToBottom: "Ugrás az utolsóhoz",
      Theme: {
        auto: "Automatikus",
        light: "Világos téma",
        dark: "Sötét téma",
      },
      Prompt: "Prompok",
      Masks: "Maszkok",
      Clear: "Kontextus törlése",
      Settings: "Beállítások",
    },
    Rename: "Beszélgetés átnevezése",
    Typing: "Írás...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} küldéshez`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter a sortöréshez";
      }
      return inputHints + ", / a prompok kereséséhez";
    },
    Send: "Küldés",
    Config: {
      Reset: "Visszaállítás alapértelmezett értékre",
      SaveAs: "Mentés maszkként",
    },
  },
  Export: {
    Title: "Üzenetek exportálása",
    Copy: "Másolás",
    Download: "Letöltés",
    MessageFromYou: "Az ön üzenete",
    MessageFromChatGPT: "Az ChatGPT üzenete",
    Share: "Megosztás a KiAsk Share-n",
    Format: {
      Title: "Exportálási formátum",
      SubTitle: "Markdown vagy PNG kép",
    },
    IncludeContext: {
      Title: "Kontextus belefoglalása",
      SubTitle: "Kontextus prompok exportálása maszk formájában vagy sem",
    },
    Steps: {
      Select: "Kiválasztás",
      Preview: "Előnézet",
    },
  },
  Select: {
    Search: "Keresés",
    All: "Összes kiválasztása",
    Latest: "Legújabb kiválasztása",
    Clear: "Törlés",
  },
  Memory: {
    Title: "Memória prompja",
    EmptyContent: "Még nincs semmi.",
    Send: "Memória küldése",
    Copy: "Memória másolása",
    Reset: "Munkamenet visszaállítása",
    ResetConfirm:
      "A visszaállítás törli a jelenlegi beszélgetési előzményeket és a történelmi memóriát. Biztosan vissza akarja állítani?",
  },
  Home: {
    NewChat: "Új beszélgetés",
    DeleteChat: "Biztosan törölni szeretné a kiválasztott beszélgetést?",
    DeleteToast: "Beszélgetés törölve",
    Revert: "Visszaállítás",
  },
  Settings: {
    Title: "Beállítások",
    SubTitle: "Összes beállítás",
    Actions: {
      ClearAll: "Összes adat törlése",
      ResetAll: "Összes beállítás visszaállítása",
      Close: "Bezárás",
      ConfirmResetAll: "Biztosan vissza akarja állítani az összes konfigurációt?",
      ConfirmClearAll: "Biztosan vissza akarja állítani az összes adatot?",
    },
    Lang: {
      Name: "Nyelv", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Minden nyelv",
    },
    Avatar: "Profilkép",
    FontSize: {
      Title: "Betűméret",
      SubTitle: "Beszélgetés tartalmának betűméretének beállítása",
    },
    Update: {
      Version: (x: string) => `Verzió: ${x}`,
      IsLatest: "Legfrissebb verzió",
      CheckUpdate: "Frissítések ellenőrzése",
      IsChecking: "Frissítések ellenőrzése...",
      FoundUpdate: (x: string) => `Új verzió található: ${x}`,
      GoToUpdate: "Frissítés",
    },
    SendKey: "Küldési kulcs",
    Theme: "Téma",
    TightBorder: "Szoros határ",
    SendPreviewBubble: {
      Title: "Előnézet buborék küldése",
      SubTitle: "Markdown előnézet megjelenítése buborékban",
    },
    Mask: {
      Title: "Maszk kezdőképernyő",
      SubTitle: "Maszk kezdőképernyő megjelenítése új beszélgetés indítása előtt",
    },
    Prompt: {
      Disable: {
        Title: "Automatikus kiegészítés kikapcsolása",
        SubTitle: "Az automatikus kiegészítéshez írjon / karaktert",
      },
      List: "Prompt lista",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} beépített, ${custom} felhasználó által definiált`,
      Edit: "Szerkesztés",
      Modal: {
        Title: "Prompt lista",
        Add: "Hozzáadás",
        Search: "Promptok keresése",
      },
      EditModal: {
        Title: "Prompt szerkesztése",
      },
    },
    HistoryCount: {
      Title: "Csatolt üzenetek száma",
      SubTitle: "A kérésenként csatolt üzenetek száma",
    },
    CompressThreshold: {
      Title: "Előzmények tömörítési küszöbe",
      SubTitle:
        "Tömörítés, ha a tömörítetlen üzenetek hossza meghaladja az értéket",
    },
    Token: {
      Title: "API kulcs",
      SubTitle: "Használja a kulcsát az hozzáférési kód korlátozásának figyelmen kívül hagyásához",
      Placeholder: "OpenAI API kulcs",
    },
    Usage: {
      Title: "Számlaegyenleg",
      SubTitle(used: any, total: any) {
        return `Ebben a hónapban felhasznált összeg: $${used}, előfizetés: $${total}`;
      },
      IsChecking: "Ellenőrzés...",
      Check: "Ellenőrzés",
      NoAccess: "Adja meg az API kulcsot a mérleg lekéréséhez",
    },
    AccessCode: {
      Title: "Hozzáférési kód",
      SubTitle: "Hozzáférési ellenőrzés engedélyezve",
      Placeholder: "Hozzáférési kód szükséges",
    },
    Endpoint: {
      Title: "Végpont",
      SubTitle: "Egyéni végpontnak http(s)://-al kell kezdődnie",
    },
    Model: "Modell",
    Temperature: {
      Title: "Hőmérséklet",
      SubTitle: "Nagyobb érték esetén a kimenet véletlenszerűbb lesz",
    },
    MaxTokens: {
      Title: "Maximális tokenek",
      SubTitle: "Bemeneti tokenek és generált tokenek maximális hossza",
    },
    PresencePenalty: {
      Title: "Jelenlét büntetés",
      SubTitle:
        "Nagyobb érték növeli az esélyt az új témák megbeszélésére",
    },
  },
  Store: {
    DefaultTopic: "Új beszélgetés",
    BotHello: "Helló! Miben segíthetek Önnek ma?",
    Error: "Valami hiba történt, kérjük, próbálja újra később.",
    Prompt: {
      History: (content: string) =>
        "Ez egy összefoglaló a beszélgetésről: " + content,
      Topic:
        "Kérem, generáljon egy négy-öt szóból álló címet, amely összefoglalja a beszélgetésünket anélkül, hogy tartalmazna bevezetést, írásjeleket, idézőjeleket, pontokat, szimbólumokat vagy további szöveget. Távolítsa el a külső idézőjeleket.",
      Summarize:
        "Összefoglalás a beszélgetésről, legfeljebb 200 szóban, mint jövőbeli kontextus.",
    },
  },
  Copy: {
    Success: "Másolva a vágólapra",
    Failed: "A másolás sikertelen, engedélyt kell adni a vágólap eléréséhez",
  },
  Context: {
    Toast: (x: any) => `Kontextuális prompokkal: ${x}`,
    Edit: "Kontextuális és memória prompok",
    Add: "Promp hozzáadása",
    Clear: "Kontextus törlése",
    Revert: "Visszaállítás",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Maszk",
    Page: {
      Title: "Promp sablon",
      SubTitle: (count: number) => `${count} promp sablon`,
      Search: "Sablonok keresése",
      Create: "Létrehozás",
    },
    Item: {
      Info: (count: number) => `${count} promp`,
      Chat: "Beszélgetés",
      View: "Megtekintés",
      Edit: "Szerkesztés",
      Delete: "Törlés",
      DeleteConfirm: "Törlés megerősítése?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Promp sablon szerkesztése ${readonly ? "(csak olvasható)" : ""}`,
      Download: "Letöltés",
      Clone: "Másolat",
    },
    Config: {
      Avatar: "Bot avatar",
      Name: "Bot név",
      Sync: {
        Title: "Használja a globális konfigurációt",
        SubTitle: "Használja a globális konfigurációt ebben a beszélgetésben",
        Confirm: "Megerősítés a testreszabott konfiguráció felülírásához a globális konfigurációval?",
      },
      HideContext: {
        Title: "Kontextus prompok elrejtése",
        SubTitle: "Ne jelenjenek meg a kontextus prompok a beszélgetésben",
      },
    },
  },
  NewChat: {
    Return: "Vissza",
    Skip: "Csak kezdés",
    Title: "Válasszon maszkot",
    SubTitle: "Beszélgetés a maszk mögötti Lélekkel",
    More: "Továbbiak",
    NotShow: "Soha ne mutassa újra",
    ConfirmNoShow: "Megerősítés a letiltáshoz? Később bekapcsolhatja a beállításokban.",
  },

  UI: {
    Confirm: "Megerősítés",
    Cancel: "Mégse",
    Close: "Bezárás",
    Create: "Létrehozás",
    Edit: "Szerkesztés",
  },
};

export default hu;