import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const en: RequiredLocaleType = {
  WIP: "Tulossa pian...",
  Error: {
    Unauthorized:
      "Luvaton pääsy, syötä käyttöavain [auth](/#/auth) sivulla.",
  },
  Auth: {
    Title: "Tarvitaan käyttöavain",
    Tips: "Syötä käyttöavain alla",
    Input: "käyttöavain",
    Confirm: "Vahvista",
    Later: "Myöhemmin",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} viestiä`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} viestiä The ChatGPT:n kanssa`,
    Actions: {
      ChatList: "Siirry keskustelulistalle",
      CompressedHistory: "Pakattu historian muistipyyntö",
      Export: "Vie kaikki viestit Markdown-muodossa",
      Copy: "Kopioi",
      Stop: "Pysäytä",
      Retry: "Yritä uudelleen",
      Delete: "Poista",
    },
    InputActions: {
      Stop: "Pysäytä",
      ToBottom: "Viimeisimpään",
      Theme: {
        auto: "Automaattinen",
        light: "Vaalea teema",
        dark: "Tumma teema",
      },
      Prompt: "Aihemallit",
      Masks: "Naamiot",
      Clear: "Tyhjennä konteksti",
      Settings: "Asetukset",
    },
    Rename: "Nimeä keskustelu uudelleen",
    Typing: "Kirjoittaa...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} lähettääksesi`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter kääriäksesi";
      }
      return inputHints + ", / hakeaksesi aihemalleja";
    },
    Send: "Lähetä",
    Config: {
      Reset: "Palauta oletusarvoihin",
      SaveAs: "Tallenna naamiona",
    },
  },
  Export: {
    Title: "Vie viestit",
    Copy: "Kopioi kaikki",
    Download: "Lataa",
    MessageFromYou: "Viesti sinulta",
    MessageFromChatGPT: "Viesti The ChatGPT:lta",
    Share: "Jaa KiAsk Shareen",
    Format: {
      Title: "Vie muodossa",
      SubTitle: "Markdown tai PNG-kuva",
    },
    IncludeContext: {
      Title: "Sisällytä konteksti",
      SubTitle: "Vie kontekstiin liittyvät mallit naamiona tai ei",
    },
    Steps: {
      Select: "Valitse",
      Preview: "Esikatselu",
    },
  },
  Select: {
    Search: "Haku",
    All: "Valitse kaikki",
    Latest: "Valitse viimeisin",
    Clear: "Tyhjennä",
  },
  Memory: {
    Title: "Muistipyyntö",
    EmptyContent: "Ei vielä mitään.",
    Send: "Lähetä muisti",
    Copy: "Kopioi muisti",
    Reset: "Nollaa istunto",
    ResetConfirm:
      "Nollaus poistaa nykyisen keskusteluhistorian ja historiallisen muistin. Haluatko varmasti nollata?",
  },
  Home: {
    NewChat: "Uusi keskustelu",
    DeleteChat: "Vahvista valitun keskustelun poistaminen?",
    DeleteToast: "Keskustelu poistettu",
    Revert: "Palauta",
  },
  Settings: {
    Title: "Asetukset",
    SubTitle: "Kaikki asetukset",
    Actions: {
      ClearAll: "Tyhjennä kaikki tiedot",
      ResetAll: "Palauta kaikki asetukset",
      Close: "Sulje",
      ConfirmResetAll: "Haluatko varmasti palauttaa kaikki asetukset?",
      ConfirmClearAll: "Haluatko varmasti tyhjentää kaikki tiedot?",
    },
    Lang: {
      Name: "Kieli", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Kaikki kielet",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Fonttikoko",
      SubTitle: "Säädä chatin sisällön fonttikokoa",
    },
    Update: {
      Version: (x: string) => `Versio: ${x}`,
      IsLatest: "Uusin versio",
      CheckUpdate: "Tarkista päivitys",
      IsChecking: "Tarkistetaan päivitystä...",
      FoundUpdate: (x: string) => `Löydetty uusi versio: ${x}`,
      GoToUpdate: "Päivitä",
    },
    SendKey: "Lähetä avain",
    Theme: "Teema",
    TightBorder: "Tiukka reuna",
    SendPreviewBubble: {
      Title: "Esikatsele lähettämistä",
      SubTitle: "Esikatsele markdown-kuplassa",
    },
    Mask: {
      Title: "Naamio aloitusnäyttö",
      SubTitle: "Näytä naamio aloitusnäytössä ennen uuden keskustelun aloittamista",
    },
    Prompt: {
      Disable: {
        Title: "Poista automaattinen täydennys käytöstä",
        SubTitle: "Syötä / käynnistääksesi automaattisen täydennyksen",
      },
      List: "Aihemallilista",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} sisäänrakennettu, ${custom} käyttäjän määrittelemä`,
      Edit: "Muokkaa",
      Modal: {
        Title: "Aihemallilista",
        Add: "Lisää yksi",
        Search: "Hae aihemalleja",
      },
      EditModal: {
        Title: "Muokkaa aihemallia",
      },
    },
    HistoryCount: {
      Title: "Liitettyjen viestien määrä",
      SubTitle: "Lähetettyjen viestien määrä pyyntöä kohden",
    },
    CompressThreshold: {
      Title: "Historian pakkauskynnys",
      SubTitle:
        "Pakkaa, jos pakkaamattomien viestien pituus ylittää arvon",
    },
    Token: {
      Title: "API-avain",
      SubTitle: "Käytä avaintasi ohittamaan käyttöavainrajoitus",
      Placeholder: "OpenAI API-avain",
    },
    Usage: {
      Title: "Tilin saldo",
      SubTitle(used: any, total: any) {
        return `Käytetty tänä kuukautena $${used}, tilaus $${total}`;
      },
      IsChecking: "Tarkistetaan...",
      Check: "Tarkista",
      NoAccess: "Syötä API-avain saldon tarkistamiseksi",
    },
    AccessCode: {
      Title: "Pääsykoodi",
      SubTitle: "Pääsääntö käytössä",
      Placeholder: "Tarvitaan pääsykoodi",
    },
    Endpoint: {
      Title: "Päätepiste",
      SubTitle: "Mukautetun päätepisteen on aloitettava http(s)://:lla",
    },
    Model: "Malli",
    Temperature: {
      Title: "Lämpötila",
      SubTitle: "Suurempi arvo tuottaa satunnaisempaa tulostetta",
    },
    MaxTokens: {
      Title: "Maksimimerkit",
      SubTitle: "Maksimipituus syötteen merkeissä ja generoitujen merkkien määrä",
    },
    PresencePenalty: {
      Title: "Läsnäolosakko",
      SubTitle:
        "Suurempi arvo lisää todennäköisyyttä puhua uusista aiheista",
    },
  },
  Store: {
    DefaultTopic: "Uusi keskustelu",
    BotHello: "Hei! Kuinka voin auttaa sinua tänään?",
    Error: "Jotain meni pieleen, yritä uudelleen myöhemmin.",
    Prompt: {
      History: (content: string) =>
        "Tämä on keskusteluhistorian yhteenveto: " + content,
      Topic:
        "Generoi neljän tai viiden sanan otsikko, joka tiivistää keskustelumme ilman johdantoa, välimerkkejä, lainausmerkkejä, pisteitä, symboleja tai ylimääräistä tekstiä. Poista lainausmerkit.",
      Summarize:
        "Tiivistä keskustelu lyhyesti 200 sanaan tai vähemmän tulevaa kontekstia varten.",
    },
  },
  Copy: {
    Success: "Kopioitu leikepöydälle",
    Failed: "Kopioiminen epäonnistui, myönnä lupa leikepöydän käyttöön",
  },
  Context: {
    Toast: (x: any) => `Kontekstissa ${x} mallia`,
    Edit: "Kontekstiset ja muistimallit",
    Add: "Lisää malli",
    Clear: "Tyhjennä konteksti",
    Revert: "Palauta",
  },
  Plugin: {
    Name: "Laajennus",
  },
  Mask: {
    Name: "Naamio",
    Page: {
      Title: "Aihemallipohja",
      SubTitle: (count: number) => `${count} aihemallipohjaa`,
      Search: "Hae pohjia",
      Create: "Luo",
    },
    Item: {
      Info: (count: number) => `${count} mallia`,
      Chat: "Keskustelu",
      View: "Näytä",
      Edit: "Muokkaa",
      Delete: "Poista",
      DeleteConfirm: "Vahvista poisto?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Muokkaa aihemallipohjaa ${readonly ? "(vain luku)" : ""}`,
      Download: "Lataa",
      Clone: "Kopioi",
    },
    Config: {
      Avatar: "Botin avatar",
      Name: "Botin nimi",
      Sync: {
        Title: "Käytä globaaleja asetuksia",
        SubTitle: "Käytä globaaleja asetuksia tässä keskustelussa",
        Confirm: "Vahvista mukautetun asetuksen korvaaminen globaaleilla asetuksilla?",
      },
      HideContext: {
        Title: "Piilota kontekstiset mallit",
        SubTitle: "Älä näytä kontekstisiin liittyviä malleja keskustelussa",
      },
    },
  },
  NewChat: {
    Return: "Palaa",
    Skip: "Aloita vain",
    Title: "Valitse naamio",
    SubTitle: "Keskustele naamion takana olevan sielun kanssa",
    More: "Löydä lisää",
    NotShow: "Älä näytä enää",
    ConfirmNoShow: "Vahvista poistaminen käytöstä? Voit ottaa sen käyttöön myöhemmin asetuksissa.",
  },

  UI: {
    Confirm: "Vahvista",
    Cancel: "Peruuta",
    Close: "Sulje",
    Create: "Luo",
    Edit: "Muokkaa",
  },
};

export default fl;