import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const no: RequiredLocaleType = {
  WIP: "Kommer snart...",
  Error: {
    Unauthorized:
      "Uautorisert tilgang, vennligst skriv inn tilgangskoden på [auth](/#/auth) siden.",
  },
  Auth: {
    Title: "Trenger tilgangskode",
    Tips: "Vennligst skriv inn tilgangskoden nedenfor",
    Input: "tilgangskode",
    Confirm: "Bekreft",
    Later: "Senere",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} meldinger`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} meldinger med The ChatGPT`,
    Actions: {
      ChatList: "Gå til chatliste",
      CompressedHistory: "Komprimert historie minneprompt",
      Export: "Eksporter alle meldinger som Markdown",
      Copy: "Kopier",
      Stop: "Stopp",
      Retry: "Prøv igjen",
      Delete: "Slett",
    },
    InputActions: {
      Stop: "Stopp",
      ToBottom: "Til siste",
      Theme: {
        auto: "Auto",
        light: "Lyst tema",
        dark: "Mørkt tema",
      },
      Prompt: "Forslag",
      Masks: "Masker",
      Clear: "Tøm kontekst",
      Settings: "Innstillinger",
    },
    Rename: "Gi nytt navn til chat",
    Typing: "Skriver...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} for å sende`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter for å linjeskifte";
      }
      return inputHints + ", / for å søke etter forslag";
    },
    Send: "Send",
    Config: {
      Reset: "Tilbakestill til standard",
      SaveAs: "Lagre som maske",
    },
  },
  Export: {
    Title: "Eksporter meldinger",
    Copy: "Kopier alt",
    Download: "Last ned",
    MessageFromYou: "Melding fra deg",
    MessageFromChatGPT: "Melding fra The ChatGPT",
    Share: "Del til KiAsk Share",
    Format: {
      Title: "Eksporteringsformat",
      SubTitle: "Markdown eller PNG-bilde",
    },
    IncludeContext: {
      Title: "Inkluder kontekst",
      SubTitle: "Eksporter kontekstforslag som maske eller ikke",
    },
    Steps: {
      Select: "Velg",
      Preview: "Forhåndsvisning",
    },
  },
  Select: {
    Search: "Søk",
    All: "Velg alle",
    Latest: "Velg siste",
    Clear: "Tøm",
  },
  Memory: {
    Title: "Minneforslag",
    EmptyContent: "Ingenting ennå.",
    Send: "Send minne",
    Copy: "Kopier minne",
    Reset: "Tilbakestill økt",
    ResetConfirm:
      "Ved tilbakestilling vil samtalehistorikken og historisk minne bli slettet. Er du sikker på at du vil tilbakestille?",
  },
  Home: {
    NewChat: "Ny chat",
    DeleteChat: "Bekreft sletting av valgt samtale?",
    DeleteToast: "Chat slettet",
    Revert: "Angre",
  },
  Settings: {
    Title: "Innstillinger",
    SubTitle: "Alle innstillinger",
    Actions: {
      ClearAll: "Tøm all data",
      ResetAll: "Tilbakestill alle innstillinger",
      Close: "Lukk",
      ConfirmResetAll: "Er du sikker på at du vil tilbakestille alle konfigurasjoner?",
      ConfirmClearAll: "Er du sikker på at du vil tilbakestille all data?",
    },
    Lang: {
      Name: "Språk", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Alle språk",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Skriftstørrelse",
      SubTitle: "Juster skriftstørrelsen på chatinnholdet",
    },
    Update: {
      Version: (x: string) => `Versjon: ${x}`,
      IsLatest: "Siste versjon",
      CheckUpdate: "Sjekk oppdatering",
      IsChecking: "Sjekker oppdatering...",
      FoundUpdate: (x: string) => `Fant ny versjon: ${x}`,
      GoToUpdate: "Oppdater",
    },
    SendKey: "Send tast",
    Theme: "Tema",
    TightBorder: "Stram kant",
    SendPreviewBubble: {
      Title: "Send forhåndsvisningsboble",
      SubTitle: "Forhåndsvis markdown i boble",
    },
    Mask: {
      Title: "Maske splash-skjerm",
      SubTitle: "Vis en maske splash-skjerm før du starter ny chat",
    },
    Prompt: {
      Disable: {
        Title: "Deaktiver automatisk fullføring",
        SubTitle: "Skriv / for å utløse automatisk fullføring",
      },
      List: "Forslagliste",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} innebygd, ${custom} brukerdefinert`,
      Edit: "Rediger",
      Modal: {
        Title: "Forslagliste",
        Add: "Legg til ett",
        Search: "Søk etter forslag",
      },
      EditModal: {
        Title: "Rediger forslag",
      },
    },
    HistoryCount: {
      Title: "Antall vedlagte meldinger",
      SubTitle: "Antall sendte meldinger som er vedlagt per forespørsel",
    },
    CompressThreshold: {
      Title: "Historie komprimeringsterskel",
      SubTitle:
        "Komprimerer hvis lengden på ukomprimerte meldinger overstiger verdien",
    },
    Token: {
      Title: "API-nøkkel",
      SubTitle: "Bruk nøkkelen din til å ignorere tilgangskodegrensen",
      Placeholder: "OpenAI API-nøkkel",
    },
    Usage: {
      Title: "Kontosaldo",
      SubTitle(used: any, total: any) {
        return `Brukt denne måneden $${used}, abonnement $${total}`;
      },
      IsChecking: "Sjekker...",
      Check: "Sjekk",
      NoAccess: "Skriv inn API-nøkkelen for å sjekke saldoen",
    },
    AccessCode: {
      Title: "Tilgangskode",
      SubTitle: "Tilgangskontroll er aktivert",
      Placeholder: "Trenger tilgangskode",
    },
    Endpoint: {
      Title: "Endepunkt",
      SubTitle: "Tilpasset endepunkt må starte med http(s)://",
    },
    Model: "Modell",
    Temperature: {
      Title: "Temperatur",
      SubTitle: "En høyere verdi gir mer tilfeldig utdata",
    },
    MaxTokens: {
      Title: "Maksimalt antall tokens",
      SubTitle: "Maksimal lengde på inntakstokens og genererte tokens",
    },
    PresencePenalty: {
      Title: "Tilstedeværelsesstraff",
      SubTitle:
        "En høyere verdi øker sannsynligheten for å snakke om nye emner",
    },
  },
  Store: {
    DefaultTopic: "Ny samtale",
    BotHello: "Hei! Hvordan kan jeg hjelpe deg i dag?",
    Error: "Noe gikk galt, vennligst prøv igjen senere.",
    Prompt: {
      History: (content: string) =>
        "Dette er en oppsummering av chatloggen som et sammendrag: " + content,
      Topic:
        "Vennligst generer en tittel på fire til fem ord som oppsummerer samtalen vår uten noen innledning, tegnsetting, anførselstegn, punktum, symboler eller annen tekst. Fjern anførselstegnene.",
      Summarize:
        "Oppsummer diskusjonen kortfattet på 200 ord eller mindre for å bruke som en prompt for fremtidig kontekst.",
    },
  },
  Copy: {
    Success: "Kopiert til utklippstavlen",
    Failed: "Kopiering mislyktes, vennligst gi tillatelse til å få tilgang til utklippstavlen",
  },
  Context: {
    Toast: (x: any) => `Med ${x} kontekstuelle forslag`,
    Edit: "Kontekstuelle og minneforslag",
    Add: "Legg til et forslag",
    Clear: "Tøm kontekst",
    Revert: "Angre",
  },
  Plugin: {
    Name: "Tilleggsprogram",
  },
  Mask: {
    Name: "Maske",
    Page: {
      Title: "Promptmal",
      SubTitle: (count: number) => `${count} promptmaler`,
      Search: "Søk i maler",
      Create: "Opprett",
    },
    Item: {
      Info: (count: number) => `${count} forslag`,
      Chat: "Chat",
      View: "Vis",
      Edit: "Rediger",
      Delete: "Slett",
      DeleteConfirm: "Bekreft sletting?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Rediger promptmal ${readonly ? "(skrivebeskyttet)" : ""}`,
      Download: "Last ned",
      Clone: "Klon",
    },
    Config: {
      Avatar: "Bot-avatar",
      Name: "Bot-navn",
      Sync: {
        Title: "Bruk global konfigurasjon",
        SubTitle: "Bruk global konfigurasjon i denne chatten",
        Confirm: "Bekreft å overskrive tilpasset konfigurasjon med global konfigurasjon?",
      },
      HideContext: {
        Title: "Skjul kontekstuelle forslag",
        SubTitle: "Ikke vis kontekstuelle forslag i chatten",
      },
    },
  },
  NewChat: {
    Return: "Tilbake",
    Skip: "Bare start",
    Title: "Velg en maske",
    SubTitle: "Chat med sjelen bak masken",
    More: "Finn flere",
    NotShow: "Vis aldri igjen",
    ConfirmNoShow: "Bekreft deaktivering? Du kan aktivere det senere i innstillingene.",
  },

  UI: {
    Confirm: "Bekreft",
    Cancel: "Avbryt",
    Close: "Lukk",
    Create: "Opprett",
    Edit: "Rediger",
  },
};

export default no;