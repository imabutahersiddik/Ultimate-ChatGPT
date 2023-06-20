import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const bs: RequiredLocaleType = {
  WIP: "Uskoro...",
  Error: {
    Unauthorized:
      "Neovlašten pristup, molimo unesite šifru pristupa na [auth](/#/auth) stranici.",
  },
  Auth: {
    Title: "Potrebna šifra pristupa",
    Tips: "Molimo unesite šifru pristupa ispod",
    Input: "šifra pristupa",
    Confirm: "Potvrdi",
    Later: "Kasnije",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} poruka`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} poruka s The ChatGPT`,
    Actions: {
      ChatList: "Idi na listu razgovora",
      CompressedHistory: "Sažeta povijest memorije uputa",
      Export: "Izvezi sve poruke kao Markdown",
      Copy: "Kopiraj",
      Stop: "Zaustavi",
      Retry: "Ponovi",
      Delete: "Obriši",
    },
    InputActions: {
      Stop: "Zaustavi",
      ToBottom: "Do najnovijeg",
      Theme: {
        auto: "Automatska",
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
      return inputHints + ", / za pretraživanje uputa";
    },
    Send: "Pošalji",
    Config: {
      Reset: "Resetiraj na zadano",
      SaveAs: "Spremi kao masku",
    },
  },
  Export: {
    Title: "Izvoz poruka",
    Copy: "Kopiraj sve",
    Download: "Preuzmi",
    MessageFromYou: "Poruka od Vas",
    MessageFromChatGPT: "Poruka od The ChatGPT",
    Share: "Podijeli na KiAsk Share",
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
    Reset: "Resetiraj sesiju",
    ResetConfirm:
      "Resetiranje će obrisati trenutnu povijest razgovora i povijesnu memoriju. Jeste li sigurni da želite resetirati?",
  },
  Home: {
    NewChat: "Novi razgovor",
    DeleteChat: "Potvrdite brisanje odabranog razgovora?",
    DeleteToast: "Razgovor obrisan",
    Revert: "Vrati",
  },
  Settings: {
    Title: "Postavke",
    SubTitle: "Sve postavke",
    Actions: {
      ClearAll: "Očisti sve podatke",
      ResetAll: "Resetiraj sve postavke",
      Close: "Zatvori",
      ConfirmResetAll: "Jeste li sigurni da želite resetirati sve konfiguracije?",
      ConfirmClearAll: "Jeste li sigurni da želite resetirati sve podatke?",
    },
    Lang: {
      Name: "Jezik", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Svi jezici",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Veličina fonta",
      SubTitle: "Prilagodite veličinu fonta sadržaja razgovora",
    },
    Update: {
      Version: (x: string) => `Verzija: ${x}`,
      IsLatest: "Najnovija verzija",
      CheckUpdate: "Provjeri ažuriranja",
      IsChecking: "Provjera ažuriranja...",
      FoundUpdate: (x: string) => `Pronađena nova verzija: ${x}`,
      GoToUpdate: "Ažuriraj",
    },
    SendKey: "Ključ za slanje",
    Theme: "Tema",
    TightBorder: "Uski okvir",
    SendPreviewBubble: {
      Title: "Pošalji pretpregledni balon",
      SubTitle: "Prikaži Markdown u balonu",
    },
    Mask: {
      Title: "Maska pri pokretanju",
      SubTitle: "Prikaži masku prije početka novog razgovora",
    },
    Prompt: {
      Disable: {
        Title: "Onemogući automatsko dovršavanje",
        SubTitle: "Unesite / za pokretanje automatskog dovršavanja",
      },
      List: "Popis uputa",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} ugrađeno, ${custom} korisnički definirano`,
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
      Title: "Broj priloženih poruka",
      SubTitle: "Broj poslanih poruka priloženih po zahtjevu",
    },
    CompressThreshold: {
      Title: "Prag za kompresiju povijesti",
      SubTitle:
        "Kompresirat će ako nekomprimirana duljina poruka premašuje vrijednost",
    },
    Token: {
      Title: "API ključ",
      SubTitle: "Koristite svoj ključ kako biste zanemarili ograničenje šifre pristupa",
      Placeholder: "OpenAI API ključ",
    },
    Usage: {
      Title: "Stanje računa",
      SubTitle(used: any, total: any) {
        return `Korišteno ovog mjeseca $${used}, pretplata $${total}`;
      },
      IsChecking: "Provjera...",
      Check: "Provjeri",
      NoAccess: "Unesite API ključ za provjeru stanja",
    },
    AccessCode: {
      Title: "Šifra pristupa",
      SubTitle: "Omogućena kontrola pristupa",
      Placeholder: "Potrebna je šifra pristupa",
    },
    Endpoint: {
      Title: "Krajnja točka",
      SubTitle: "Prilagođena krajnja točka mora početi s http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperatura",
      SubTitle: "Veća vrijednost daje više slučajnog izlaza",
    },
    MaxTokens: {
      Title: "Maksimalni tokeni",
      SubTitle: "Maksimalna duljina ulaznih tokena i generiranih tokena",
    },
    PresencePenalty: {
      Title: "Penalizacija prisutnosti",
      SubTitle:
        "Veća vrijednost povećava vjerojatnost razgovora o novim temama",
    },
  },
  Store: {
    DefaultTopic: "Novi razgovor",
    BotHello: "Dobar dan! Kako Vam mogu pomoći danas?",
    Error: "Došlo je do pogreške, molimo pokušajte ponovno kasnije.",
    Prompt: {
      History: (content: string) =>
        "Ovo je sažetak povijesti razgovora kao pregled: " + content,
      Topic:
        "Molimo generirajte naslov od četiri do pet riječi koji sažima naš razgovor bez ikakvog uvoda, interpunkcije, navodnika, točaka, simbola ili dodatnog teksta. Uklonite navodnike.",
      Summarize:
        "Sažmite raspravu kratko u 200 riječi ili manje kako biste je koristili kao uputu za budući kontekst.",
    },
  },
  Copy: {
    Success: "Kopirano u međuspremnik",
    Failed: "Kopiranje nije uspjelo, molimo odobrite pristup međuspremniku",
  },
  Context: {
    Toast: (x: any) => `S ${x} kontekstualnih uputa`,
    Edit: "Kontekstualne i memorijske upute",
    Add: "Dodaj uputu",
    Clear: "Očisti kontekst",
    Revert: "Vrati",
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
      Delete: "Obriši",
      DeleteConfirm: "Potvrdite brisanje?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Uredi predložak upute ${readonly ? "(samo za čitanje)" : ""}`,
      Download: "Preuzmi",
      Clone: "Kloniraj",
    },
    Config: {
      Avatar: "Avatar robota",
      Name: "Ime robota",
      Sync: {
        Title: "Koristi globalnu konfiguraciju",
        SubTitle: "Koristi globalnu konfiguraciju u ovom razgovoru",
        Confirm: "Potvrdite zamjenu prilagođene konfiguracije globalnom konfiguracijom?",
      },
      HideContext: {
        Title: "Sakrij kontekstualne upute",
        SubTitle: "Ne prikazuj kontekstualne upute u razgovoru",
      },
    },
  },
  NewChat: {
    Return: "Povratak",
    Skip: "Samo započni",
    Title: "Odaberi masku",
    SubTitle: "Razgovarajte s dušom iza maske",
    More: "Pronađi više",
    NotShow: "Nikad ne prikazuj ponovno",
    ConfirmNoShow: "Potvrdite onemogućavanje? Možete ga ponovno omogućiti u postavkama kasnije.",
  },

  UI: {
    Confirm: "Potvrdi",
    Cancel: "Odustani",
    Close: "Zatvori",
    Create: "Kreiraj",
    Edit: "Uredi",
  },
};

export default bs;