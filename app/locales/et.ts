import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const et: RequiredLocaleType = {
  WIP: "Varsti saadaval...",
  Error: {
    Unauthorized:
      "Volitamata juurdepääs, sisesta palun juurdepääsukood lehele [auth](/#/auth).",
  },
  Auth: {
    Title: "Vajab juurdepääsukoodi",
    Tips: "Palun sisesta allpool juurdepääsukood",
    Input: "juurdepääsukood",
    Confirm: "Kinnita",
    Later: "Hiljem",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} sõnumit`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} sõnumit The ChatGPT-ga`,
    Actions: {
      ChatList: "Mine vestluse loendisse",
      CompressedHistory: "Kokkusurutud ajaloo mälumärguanne",
      Export: "Ekspordi kõik sõnumid Markdowni formaadis",
      Copy: "Kopeeri",
      Stop: "Peata",
      Retry: "Proovi uuesti",
      Delete: "Kustuta",
    },
    InputActions: {
      Stop: "Peata",
      ToBottom: "Viimasele",
      Theme: {
        auto: "Automaatne",
        light: "Hele teema",
        dark: "Tume teema",
      },
      Prompt: "Märguanded",
      Masks: "Maskid",
      Clear: "Tühjenda kontekst",
      Settings: "Seaded",
    },
    Rename: "Nimeta vestlus ümber",
    Typing: "Kirjutab...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} saatmiseks`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter, et ümbristada";
      }
      return inputHints + ", / otsinguks märguannete seast";
    },
    Send: "Saada",
    Config: {
      Reset: "Lähtesta vaikimisi",
      SaveAs: "Salvesta maskina",
    },
  },
  Export: {
    Title: "Ekspordi sõnumid",
    Copy: "Kopeeri kõik",
    Download: "Laadi alla",
    MessageFromYou: "Sõnum sinult",
    MessageFromChatGPT: "Sõnum The ChatGPT-lt",
    Share: "Jaga KiAsk Share'is",
    Format: {
      Title: "Ekspordi vorming",
      SubTitle: "Markdown või PNG pilt",
    },
    IncludeContext: {
      Title: "Kaasa kontekst",
      SubTitle: "Kas kaasata kontekstis olevad märguanded maskina või mitte",
    },
    Steps: {
      Select: "Vali",
      Preview: "Eelvaade",
    },
  },
  Select: {
    Search: "Otsi",
    All: "Vali kõik",
    Latest: "Vali viimased",
    Clear: "Tühjenda",
  },
  Memory: {
    Title: "Mälumärguanne",
    EmptyContent: "Midagi veel pole.",
    Send: "Saada mälu",
    Copy: "Kopeeri mälu",
    Reset: "Lähtesta seanss",
    ResetConfirm:
      "Lähtestamine kustutab praeguse vestluse ajaloo ja ajaloolise mälu. Kas olete kindel, et soovite lähtestada?",
  },
  Home: {
    NewChat: "Uus vestlus",
    DeleteChat: "Kas kinnitad valitud vestluse kustutamise?",
    DeleteToast: "Vestlus kustutatud",
    Revert: "Tagasi",
  },
  Settings: {
    Title: "Seaded",
    SubTitle: "Kõik seaded",
    Actions: {
      ClearAll: "Kustuta kõik andmed",
      ResetAll: "Lähtesta kõik seaded",
      Close: "Sulge",
      ConfirmResetAll: "Kas olete kindel, et soovite lähtestada kõik seaded?",
      ConfirmClearAll: "Kas olete kindel, et soovite lähtestada kõik andmed?",
    },
    Lang: {
      Name: "Keel", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Kõik keeled",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Fondi suurus",
      SubTitle: "Reguleeri vestluse sisu fondi suurust",
    },
    Update: {
      Version: (x: string) => `Versioon: ${x}`,
      IsLatest: "Uusim versioon",
      CheckUpdate: "Kontrolli uuendusi",
      IsChecking: "Kontrollin uuendusi...",
      FoundUpdate: (x: string) => `Leitud uus versioon: ${x}`,
      GoToUpdate: "Uuenda",
    },
    SendKey: "Saada võti",
    Theme: "Teema",
    TightBorder: "Tihedad piirid",
    SendPreviewBubble: {
      Title: "Saada eelvaate mull",
      SubTitle: "Eelvaate Markdown mullis",
    },
    Mask: {
      Title: "Maski alguskuva",
      SubTitle: "Näita maski alguskuva enne uue vestluse alustamist",
    },
    Prompt: {
      Disable: {
        Title: "Keela automaatne täitmine",
        SubTitle: "Sisesta / automaatse täitmise käivitamiseks",
      },
      List: "Märguande loend",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} sisseehitatud, ${custom} kasutaja määratud`,
      Edit: "Muuda",
      Modal: {
        Title: "Märguande loend",
        Add: "Lisa üks",
        Search: "Otsi märguandeid",
      },
      EditModal: {
        Title: "Muuda märguannet",
      },
    },
    HistoryCount: {
      Title: "Saadetud sõnumite arv",
      SubTitle: "Saadetud sõnumite arv päringu kohta",
    },
    CompressThreshold: {
      Title: "Ajaloo kokkusurumise lävi",
      SubTitle:
        "Kokku surutakse, kui kokkusurumata sõnumite pikkus ületab selle väärtuse",
    },
    Token: {
      Title: "API võti",
      SubTitle: "Kasuta oma võtit juurdepääsukoodi piirangu eiramiseks",
      Placeholder: "OpenAI API võti",
    },
    Usage: {
      Title: "Konto jääk",
      SubTitle(used: any, total: any) {
        return `Kasutatud sel kuul $${used}, tellimus $${total}`;
      },
      IsChecking: "Kontrollin...",
      Check: "Kontrolli",
      NoAccess: "Sisesta API võti jäägi kontrollimiseks",
    },
    AccessCode: {
      Title: "Juurdepääsukood",
      SubTitle: "Juurdepääsu kontroll on lubatud",
      Placeholder: "Vajab juurdepääsukoodi",
    },
    Endpoint: {
      Title: "Lõpp-punkt",
      SubTitle: "Kohandatud lõpp-punkt peab algama http(s)://-ga",
    },
    Model: "Mudel",
    Temperature: {
      Title: "Temperatuur",
      SubTitle: "Suurem väärtus annab juhuslikuma väljundi",
    },
    MaxTokens: {
      Title: "Maksimaalsed märgid",
      SubTitle: "Sisendi märkide ja genereeritud märkide maksimaalne pikkus",
    },
    PresencePenalty: {
      Title: "Kohalolukaristus",
      SubTitle:
        "Suurem väärtus suurendab tõenäosust rääkida uutest teemadest",
    },
  },
  Store: {
    DefaultTopic: "Uus vestlus",
    BotHello: "Tere! Kuidas saan täna abistada?",
    Error: "Midagi läks valesti, palun proovi hiljem uuesti.",
    Prompt: {
      History: (content: string) =>
        "See on vestluse ajaloo kokkuvõte: " + content,
      Topic:
        "Palun genereeri meie vestlusest nelja kuni viie sõnaga pealkiri ilma sissejuhatava, kirjavahemärkide, jutumärkide, punktide, sümbolite või lisatekstideta. Eemalda ümbritsevad jutumärgid.",
      Summarize:
        "Kirjuta kokkuvõte arutelust lühidalt 200 sõna või vähem, et kasutada seda tulevase konteksti märguandena.",
    },
  },
  Copy: {
    Success: "Kopeeritud lõikelauale",
    Failed: "Kopeerimine ebaõnnestus, palun anna luba lõikelaua juurdepääsuks",
  },
  Context: {
    Toast: (x: any) => `Koos ${x} kontekstuaalse märguandega`,
    Edit: "Kontekstuaalsed ja mälu märguanded",
    Add: "Lisa märguanne",
    Clear: "Tühjenda kontekst",
    Revert: "Tagasi",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Mask",
    Page: {
      Title: "Märguande mall",
      SubTitle: (count: number) => `${count} märguande malli`,
      Search: "Otsi malle",
      Create: "Loo",
    },
    Item: {
      Info: (count: number) => `${count} märguannet`,
      Chat: "Vestlus",
      View: "Vaata",
      Edit: "Muuda",
      Delete: "Kustuta",
      DeleteConfirm: "Kinnita kustutamine?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Muuda märguande malli ${readonly ? "(ainult lugemine)" : ""}`,
      Download: "Laadi alla",
      Clone: "Klooni",
    },
    Config: {
      Avatar: "Boti avatar",
      Name: "Boti nimi",
      Sync: {
        Title: "Kasuta üldist seadistust",
        SubTitle: "Kasuta üldist seadistust selles vestluses",
        Confirm: "Kinnita üldise seadistuse kasutamine kohandatud seadistuse asemel?",
      },
      HideContext: {
        Title: "Peida kontekstuaalsed märguanded",
        SubTitle: "Ära näita kontekstis olevaid märguandeid vestluses",
      },
    },
  },
  NewChat: {
    Return: "Tagasi",
    Skip: "Ainult alusta",
    Title: "Vali mask",
    SubTitle: "Vestle maski taga oleva hingega",
    More: "Leia rohkem",
    NotShow: "Ära näita enam",
    ConfirmNoShow: "Kinnita keelamine? Saad seda hiljem seadetes uuesti lubada.",
  },

  UI: {
    Confirm: "Kinnita",
    Cancel: "Tühista",
    Close: "Sulge",
    Create: "Loo",
    Edit: "Muuda",
  },
};

export default et;