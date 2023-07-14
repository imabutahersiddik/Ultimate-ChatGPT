import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

// if you are adding a new translation, please use PartialLocaleType instead of LocaleType
const cr: LocaleType = {
  WIP: "Uskoro...",
  Error: {
    Unauthorized:
      "Podržite Ultimate ChatGPT na [Patreonu](https://patreon.com/KiasK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link) ili putem Bkash-a (+880 1812-715289), Pošaljite putem [Worldremita](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob), Broj mobilnog novčanika: +880 1812-715289 kako biste nam pomogli da poboljšamo i održavamo ovaj moćni Ultimate ChatGPT.",
  },
  Auth: {
    Title: "Potreban pristupni kod",
    Tips: "Molimo unesite pristupni kod u nastavku",
    Input: "pristupni kod",
    Confirm: "Potvrdi",
    Later: "Kasnije",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} poruka`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} poruka`,
    Actions: {
      ChatList: "Idi na listu razgovora",
      CompressedHistory: "Sažeta povijest memorije uputa",
      Export: "Izvezi sve poruke kao Markdown",
      Copy: "Kopiraj",
      Stop: "Zaustavi",
      Retry: "Pokušaj ponovno",
      Pin: "Prikvači",
      PinToastContent: "Prikvačeno 2 poruke kao kontekstualne upute",
      PinToastAction: "Pregledaj",
      Delete: "Izbriši",
      Edit: "Uredi",
    },
    Commands: {
      new: "Započni novi razgovor",
      newm: "Započni novi razgovor s maskom",
      next: "Sljedeći razgovor",
      prev: "Prethodni razgovor",
      clear: "Očisti kontekst",
      del: "Izbriši razgovor",
    },
    InputActions: {
      Stop: "Zaustavi",
      ToBottom: "Do najnovijeg",
      Theme: {
        auto: "Automatski",
        light: "Svijetla tema",
        dark: "Tamna tema",
      },
      Prompt: "Upute",
      Masks: "Maske",
      Clear: "Očisti kontekst",
      Settings: "Postavke",
    },
    Rename: "Preimenuj razgovor",
    Typing: "Tipkanje...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} za slanje`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter za prelazak u novi red";
      }
      return inputHints + ", / za pretraživanje uputa, : za korištenje naredbi";
    },
    Send: "Pošalji",
    Config: {
      Reset: "Vrati na zadano",
      SaveAs: "Spremi kao masku",
    },
  },
  Export: {
    Title: "Izvezi poruke",
    Copy: "Kopiraj sve",
    Download: "Preuzmi",
    MessageFromYou: "Poruka od tebe",
    MessageFromChatGPT: "Poruka od ChatGPT",
    Share: "Podijeli putem KiAsk Share",
    Format: {
      Title: "Format izvoza",
      SubTitle: "Markdown ili PNG slika",
    },
    IncludeContext: {
      Title: "Uključivanje konteksta",
      SubTitle: "Izvezi kontekstualne upute u maski ili ne",
    },
    Steps: {
      Select: "Odaberi",
      Preview: "Pregled",
    },
    Image: {
      Toast: "Snimanje slike...",
      Modal: "Dugim pritiskom ili desnim klikom spremite sliku",
    },
  },
  Select: {
    Search: "Pretraži",
    All: "Odaberi sve",
    Latest: "Odaberi najnovije",
    Clear: "Očisti",
  },
  Memory: {
    Title: "Memorijska uputa",
    EmptyContent: "Još ništa.",
    Send: "Pošalji memoriju",
    Copy: "Kopiraj memoriju",
    Reset: "Poništi sesiju",
    ResetConfirm:
      "Poništavanje će obrisati trenutnu povijest razgovora i povijest memorije. Jeste li sigurni da želite poništiti?",
  },
  Home: {
    NewChat: "Novi razgovor",
    DeleteChat: "Potvrdite brisanje odabranog razgovora?",
    DeleteToast: "Razgovor izbrisan",
    Revert: "Povrati",
  },
  Settings: {
    Title: "Postavke",
    SubTitle: "Sve postavke",
    Danger: {
      Reset: {
        Title: "Vrati sve postavke na zadano",
        SubTitle: "Vrati sve stavke postavki na zadano",
        Action: "Vrati",
        Confirm: "Potvrdite vraćanje svih postavki na zadano?",
      },
      Clear: {
        Title: "Obriši sve podatke",
        SubTitle: "Obriši sve poruke i postavke",
        Action: "Obriši",
        Confirm: "Potvrdite brisanje svih poruka i postavki?",
      },
    },
    Lang: {
      Name: "Jezik", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Svi jezici",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Veličina fonta",
      SubTitle: "Prilagodi veličinu fonta sadržaja razgovora",
    },

    InputTemplate: {
      Title: "Predložak unosa",
      SubTitle: "Najnovija poruka će biti popunjena u ovaj predložak",
    },

    Update: {
      Version: (x: string) => `Verzija: ${x}`,
      IsLatest: "Najnovija verzija",
      CheckUpdate: "Provjeri ažuriranje",
      IsChecking: "Provjeravanje ažuriranja...",
      FoundUpdate: (x: string) => `Pronađena nova verzija: ${x}`,
      GoToUpdate: "Ažuriraj",
    },
    SendKey: "Ključ za slanje",
    Theme: "Tema",
    TightBorder: "Uski okvir",
    SendPreviewBubble: {
      Title: "Prikaz predviđanja slanja",
      SubTitle: "Prikaz Markdowna u balonu",
    },
    Mask: {
      Splash: {
        Title: "Zaslon za masku",
        SubTitle: "Prikaži zaslon za masku prije početka novog razgovora",
      },
      Builtin: {
        Title: "Sakrij ugrađene maske",
        SubTitle: "Sakrij ugrađene maske na popisu maski",
      },
    },
    Prompt: {
      Disable: {
        Title: "Onemogući automatsko dovršavanje",
        SubTitle: "Unesite / da biste pokrenuli automatsko dovršavanje",
      },
      List: "Popis uputa",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} ugrađene, ${custom} korisnički definirane`,
      Edit: "Uredi",
      Modal: {
        Title: "Popis uputa",
        Add: "Dodaj jednu",
        Search: "Pretraži upute",
      },
      EditModal: {
        Title: "Uredi uputu",
      },
    },
    HistoryCount: {
      Title: "Broj pridruženih poruka",
      SubTitle: "Broj poslanih poruka koje se pridružuju po zahtjevu",
    },
    CompressThreshold: {
      Title: "Prag kompresije povijesti",
      SubTitle:
        "Komprimirat će se ako duljina neskomprimiranih poruka premašuje vrijednost",
    },
    Token: {
      Title: "API ključ",
      SubTitle: "Koristite svoj ključ za zanemarivanje ograničenja pristupnog koda",
      Placeholder: "OpenAI API ključ",
    },
    Usage: {
      Title: "Stanje računa",
      SubTitle(used: any, total: any) {
        return `Iskorišteno ovog mjeseca $${used}, pretplata $${total}`;
      },
      IsChecking: "Provjeravanje...",
      Check: "Provjeri",
      NoAccess: "Unesite API ključ za provjeru stanja",
    },
    AccessCode: {
      Title: "Pristupni kod",
      SubTitle: "Omogućena kontrola pristupa",
      Placeholder: "Potreban pristupni kod",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Prilagođeni endpoint mora započeti s http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperatura",
      SubTitle: "Veća vrijednost čini izlaz više slučajnim",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Ne mijenjajte ovu vrijednost zajedno s temperaturom",
    },
    MaxTokens: {
      Title: "Maksimalni broj tokena",
      SubTitle: "Maksimalna duljina ulaznih tokena i generiranih tokena",
    },
    PresencePenalty: {
      Title: "Kazna za prisutnost",
      SubTitle:
        "Veća vrijednost povećava vjerojatnost razgovora o novim temama",
    },
    FrequencyPenalty: {
      Title: "Kazna za učestalost",
      SubTitle:
        "Veća vrijednost smanjuje vjerojatnost ponavljanja iste rečenice",
    },
  },
  Store: {
    DefaultTopic: "Novi razgovor",
    BotHello: "Pozdrav! Kako vam mogu pomoći danas?",
    Error: "Došlo je do pogreške, molimo pokušajte ponovno kasnije.",
    Prompt: {
      History: (content: string) =>
        "Ovo je sažetak povijesti razgovora: " + content,
      Topic:
        "Molimo generirajte naslov od četiri do pet riječi koji sažima naš razgovor bez ikakvih uvoda, interpunkcije, navodnika, točaka, simbola ili dodatnog teksta. Uklonite navodnike.",
      Summarize:
        "Sažmite raspravu ukratko u 200 riječi ili manje kako biste je koristili kao uputu za budući kontekst.",
    },
  },
  Copy: {
    Success: "Kopirano u međuspremnik",
    Failed: "Kopiranje nije uspjelo, molimo omogućite pristup međuspremniku",
  },
  Context: {
    Toast: (x: any) => `S ${x} kontekstualnih uputa`,
    Edit: "Trenutne postavke razgovora",
    Add: "Dodaj uputu",
    Clear: "Očisti kontekst",
    Revert: "Povrati",
  },
  Plugin: {
    Name: "Dodatak",
  },
  Mask: {
    Name: "Maska",
    Page: {
      Title: "Predložak upute",
      SubTitle: (count: number) => `${count} predložaka uputa`,
      Search: "Pretraži predloške",
      Create: "Kreiraj",
    },
    Item: {
      Info: (count: number) => `${count} uputa`,
      Chat: "Razgovor",
      View: "Pregled",
      Edit: "Uredi",
      Delete: "Izbriši",
      DeleteConfirm: "Potvrdite brisanje?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Uredi predložak upute ${readonly ? "(samo za čitanje)" : ""}`,
      Download: "Preuzmi",
      Clone: "Kloniraj",
    },
    Config: {
      Avatar: "Bot avatar",
      Name: "Ime bota",
      Sync: {
        Title: "Koristi globalnu konfiguraciju",
        SubTitle: "Koristi globalnu konfiguraciju u ovom razgovoru",
        Confirm: "Potvrdite zamjenu prilagođene konfiguracije globalnom konfiguracijom?",
      },
      HideContext: {
        Title: "Sakrij kontekstualne upute",
        SubTitle: "Ne prikazuj kontekstualne upute u razgovoru",
      },
      Share: {
        Title: "Podijeli ovu masku",
        SubTitle: "Generirajte poveznicu za ovu masku",
        Action: "Kopiraj poveznicu",
      },
    },
  },
  NewChat: {
    Return: "Natrag",
    Skip: "Samo započni",
    Title: "Odaberi masku",
    SubTitle: "Razgovaraj s dušom iza maske",
    More: "Pronađi više",
    NotShow: "Nikad ne prikazuj ponovno",
    ConfirmNoShow: "Potvrdite onemogućavanje? Možete ga ponovno omogućiti u postavkama.",
  },

  UI: {
    Confirm: "Potvrdi",
    Cancel: "Odustani",
    Close: "Zatvori",
    Create: "Kreiraj",
    Edit: "Uredi",
  },
  Exporter: {
    Model: "Model",
    Messages: "Poruke",
    Topic: "Tema",
    Time: "Vrijeme",
  },
};

export default cr;