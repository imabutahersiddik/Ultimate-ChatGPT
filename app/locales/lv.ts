import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const lv: RequiredLocaleType = {
  WIP: "Drīzumā...",
  Error: {
    Unauthorized:
      "Nepieciešama autorizācija, lūdzu ievadiet piekļuves kodu [auth](/#/auth) lapā.",
  },
  Auth: {
    Title: "Nepieciešams piekļuves kods",
    Tips: "Lūdzu ievadiet piekļuves kodu zemāk",
    Input: "piekļuves kods",
    Confirm: "Apstiprināt",
    Later: "Vēlāk",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} ziņas`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} ziņas ar The ChatGPT`,
    Actions: {
      ChatList: "Pāriet uz čata sarakstu",
      CompressedHistory: "Saspiežamā vēsture Atmiņas paskatī",
      Export: "Eksportēt visas ziņas kā Markdown",
      Copy: "Kopēt",
      Stop: "Apturēt",
      Retry: "Mēģināt vēlreiz",
      Delete: "Dzēst",
    },
    InputActions: {
      Stop: "Apturēt",
      ToBottom: "Līdz jaunākajam",
      Theme: {
        auto: "Automātiskais",
        light: "Gaišais motīvs",
        dark: "Tumšais motīvs",
      },
      Prompt: "Norādes",
      Masks: "Maskas",
      Clear: "Notīrīt kontekstu",
      Settings: "Iestatījumi",
    },
    Rename: "Pārdēvēt čatu",
    Typing: "Raksta...",
    Input: (submitKey: string) => {
      var inputHints = `Nospiediet ${submitKey}, lai nosūtītu`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter, lai ietinātu";
      }
      return inputHints + ", /, lai meklētu norādes";
    },
    Send: "Nosūtīt",
    Config: {
      Reset: "Atiestatīt uz noklusējumu",
      SaveAs: "Saglabāt kā masku",
    },
  },
  Export: {
    Title: "Eksportēt ziņas",
    Copy: "Kopēt visu",
    Download: "Lejupielādēt",
    MessageFromYou: "Ziņa no jums",
    MessageFromChatGPT: "Ziņa no The ChatGPT",
    Share: "Kopīgot ar KiAsk Share",
    Format: {
      Title: "Eksportēšanas formāts",
      SubTitle: "Markdown vai PNG attēls",
    },
    IncludeContext: {
      Title: "Iekļaut kontekstu",
      SubTitle: "Vai eksportēt konteksta norādes maskā vai nē",
    },
    Steps: {
      Select: "Izvēlēties",
      Preview: "Priekšskatījums",
    },
  },
  Select: {
    Search: "Meklēt",
    All: "Izvēlēties visu",
    Latest: "Izvēlēties jaunākās",
    Clear: "Notīrīt",
  },
  Memory: {
    Title: "Atmiņas norāde",
    EmptyContent: "Vēl nekas nav.",
    Send: "Nosūtīt atmiņu",
    Copy: "Kopēt atmiņu",
    Reset: "Atiestatīt sesiju",
    ResetConfirm:
      "Atiestatot, tiks notīrīta pašreizējā sarunas vēsture un vēsturiskā atmiņa. Vai tiešām vēlaties atiestatīt?",
  },
  Home: {
    NewChat: "Jauna čata sākšana",
    DeleteChat: "Apstipriniet izvēlētās sarunas dzēšanu?",
    DeleteToast: "Čats dzēsts",
    Revert: "Atgriezties",
  },
  Settings: {
    Title: "Iestatījumi",
    SubTitle: "Visi iestatījumi",
    Actions: {
      ClearAll: "Notīrīt visus datus",
      ResetAll: "Atiestatīt visus iestatījumus",
      Close: "Aizvērt",
      ConfirmResetAll: "Vai tiešām vēlaties atiestatīt visus iestatījumus?",
      ConfirmClearAll: "Vai tiešām vēlaties notīrīt visus datus?",
    },
    Lang: {
      Name: "Valoda", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Visas valodas",
    },
    Avatar: "Avatars",
    FontSize: {
      Title: "Fonta izmērs",
      SubTitle: "Pielāgojiet čata saturam fonta izmēru",
    },
    Update: {
      Version: (x: string) => `Versija: ${x}`,
      IsLatest: "Jaunākā versija",
      CheckUpdate: "Pārbaudīt atjauninājumus",
      IsChecking: "Pārbauda atjauninājumus...",
      FoundUpdate: (x: string) => `Atrasta jauna versija: ${x}`,
      GoToUpdate: "Atjaunināt",
    },
    SendKey: "Nosūtīšanas taustiņš",
    Theme: "Motīvs",
    TightBorder: "Cieša robeža",
    SendPreviewBubble: {
      Title: "Nosūtīšanas priekšskatījuma burbulis",
      SubTitle: "Priekšskatiet markdown burbulī",
    },
    Mask: {
      Title: "Maskas sākuma ekrāns",
      SubTitle: "Rādīt maskas sākuma ekrānu pirms jauna čata sākšanas",
    },
    Prompt: {
      Disable: {
        Title: "Atspējot automātisko aizpildījumu",
        SubTitle: "Ievadiet /, lai aktivizētu automātisko aizpildījumu",
      },
      List: "Norāžu saraksts",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} iebūvētas, ${custom} lietotāja definētas`,
      Edit: "Rediģēt",
      Modal: {
        Title: "Norāžu saraksts",
        Add: "Pievienot vienu",
        Search: "Meklēt norādes",
      },
      EditModal: {
        Title: "Rediģēt norādi",
      },
    },
    HistoryCount: {
      Title: "Piesaistīto ziņu skaits",
      SubTitle: "Nosūtīto ziņu skaits pieprasījumā",
    },
    CompressThreshold: {
      Title: "Vēstures saspiešanas slieksnis",
      SubTitle:
        "Saspiest, ja nesaspiestu ziņu garums pārsniedz vērtību",
    },
    Token: {
      Title: "API atslēga",
      SubTitle: "Izmantojiet savu atslēgu, lai ignorētu piekļuves kodu ierobežojumu",
      Placeholder: "OpenAI API atslēga",
    },
    Usage: {
      Title: "Konta atlikums",
      SubTitle(used: any, total: any) {
        return `Šomēnes izmantots $${used}, abonements $${total}`;
      },
      IsChecking: "Pārbauda...",
      Check: "Pārbaudīt",
      NoAccess: "Lai pārbaudītu atlikumu, ievadiet API atslēgu",
    },
    AccessCode: {
      Title: "Piekļuves kods",
      SubTitle: "Iespējota piekļuves kontrole",
      Placeholder: "Nepieciešams piekļuves kods",
    },
    Endpoint: {
      Title: "Galapunkts",
      SubTitle: "Pielāgota galapunkta adrese jāsākas ar http(s)://",
    },
    Model: "Modelis",
    Temperature: {
      Title: "Temperatūra",
      SubTitle: "Lielāka vērtība padara izvadi nejaušāku",
    },
    MaxTokens: {
      Title: "Maksimālais žetoni",
      SubTitle: "Maksimālais ievades žetonu un ģenerēto žetonu garums",
    },
    PresencePenalty: {
      Title: "Klātbūtnes soda nauda",
      SubTitle:
        "Lielāka vērtība palielina iespēju runāt par jauniem tematiem",
    },
  },
  Store: {
    DefaultTopic: "Jauna saruna",
    BotHello: "Sveiki! Kā es varu Jums palīdzēt šodien?",
    Error: "Radās kļūda, lūdzu mēģiniet vēlāk.",
    Prompt: {
      History: (content: string) =>
        "Šī ir čata vēstures kopsavilkums: " + content,
      Topic:
        "Lūdzu, izveidojiet četru vai piecu vārdu virsrakstu, kas apkopo mūsu sarunu, bez jebkāda ievada, interpunkcijas, pēdiņām, punktiem, simboliem vai papildu teksta. Noņemiet ietverošās pēdiņas.",
      Summarize:
        "Īsi saskaņoti diskusiju saturu 200 vai mazāk vārdos, lai izmantotu kā nākotnes konteksta norādi.",
    },
  },
  Copy: {
    Success: "Kopēts starpliktuvē",
    Failed: "Kopēšana neizdevās, lūdzu, atļaujiet piekļuvi starpliktuvei",
  },
  Context: {
    Toast: (x: any) => `Ar ${x} konteksta norādēm`,
    Edit: "Konteksta un atmiņas norādes",
    Add: "Pievienot norādi",
    Clear: "Notīrīt kontekstu",
    Revert: "Atgriezties",
  },
  Plugin: {
    Name: "Pielikums",
  },
  Mask: {
    Name: "Masks",
    Page: {
      Title: "Norāžu veidne",
      SubTitle: (count: number) => `${count} norāžu veidnes`,
      Search: "Meklēt veidnes",
      Create: "Izveidot",
    },
    Item: {
      Info: (count: number) => `${count} norādes`,
      Chat: "Čats",
      View: "Skatīt",
      Edit: "Rediģēt",
      Delete: "Dzēst",
      DeleteConfirm: "Apstipriniet dzēšanu?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Rediģēt norādes veidni ${readonly ? "(tikai lasīšanai)" : ""}`,
      Download: "Lejupielādēt",
      Clone: "Klonēt",
    },
    Config: {
      Avatar: "Robotavatar",
      Name: "Robotvārds",
      Sync: {
        Title: "Lietot globālo konfigurāciju",
        SubTitle: "Izmantot globālo konfigurāciju šajā čatā",
        Confirm: "Apstiprināt, lai pārrakstītu pielāgoto konfigurāciju ar globālo konfigurāciju?",
      },
      HideContext: {
        Title: "Paslēpt konteksta norādes",
        SubTitle: "Neattēlot konteksta norādes čatā",
      },
    },
  },
  NewChat: {
    Return: "Atgriezties",
    Skip: "Sākt",
    Title: "Izvēlieties masku",
    SubTitle: "Čatot ar dvēseli aiz maskas",
    More: "Atrast vairāk",
    NotShow: "Nerādīt vairs",
    ConfirmNoShow: "Apstipriniet atspējošanu? Jūs varēsiet to iespējot iestatījumos vēlāk.",
  },

  UI: {
    Confirm: "Apstiprināt",
    Cancel: "Atcelt",
    Close: "Aizvērt",
    Create: "Izveidot",
    Edit: "Rediģēt",
  },
};

export default lv;