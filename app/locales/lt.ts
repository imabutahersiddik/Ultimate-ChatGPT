import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const lt: RequiredLocaleType = {
  WIP: "Netruksta...",
  Error: {
    Unauthorized:
      "Neleistinas prieigos bandymas, prašome įvesti prieigos kodą [auth](/#/auth) puslapyje.",
  },
  Auth: {
    Title: "Reikalingas prieigos kodas",
    Tips: "Prašome įvesti prieigos kodą žemiau",
    Input: "prieigos kodas",
    Confirm: "Patvirtinti",
    Later: "Vėliau",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} žinutės`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} žinutės su The ChatGPT`,
    Actions: {
      ChatList: "Eiti į pokalbių sąrašą",
      CompressedHistory: "Suspaustas istorijos atminties užduotis",
      Export: "Eksportuoti visas žinutes kaip Markdown",
      Copy: "Kopijuoti",
      Stop: "Sustabdyti",
      Retry: "Bandyti dar kartą",
      Delete: "Ištrinti",
    },
    InputActions: {
      Stop: "Sustabdyti",
      ToBottom: "Prie naujausių",
      Theme: {
        auto: "Automatinis",
        light: "Šviesus tema",
        dark: "Tamsus tema",
      },
      Prompt: "Užduotys",
      Masks: "Maskos",
      Clear: "Išvalyti kontekstą",
      Settings: "Nustatymai",
    },
    Rename: "Pervadinti pokalbį",
    Typing: "Rašoma...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} siųsti`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter apvynioti";
      }
      return inputHints + ", / ieškoti užduočių";
    },
    Send: "Siųsti",
    Config: {
      Reset: "Atstatyti į numatytąsias",
      SaveAs: "Išsaugoti kaip maską",
    },
  },
  Export: {
    Title: "Eksportuoti žinutes",
    Copy: "Kopijuoti viską",
    Download: "Atsisiųsti",
    MessageFromYou: "Žinutė iš Jūsų",
    MessageFromChatGPT: "Žinutė iš The ChatGPT",
    Share: "Dalintis per KiAsk Share",
    Format: {
      Title: "Eksporto formatas",
      SubTitle: "Markdown arba PNG vaizdas",
    },
    IncludeContext: {
      Title: "Įtraukti kontekstą",
      SubTitle: "Ar eksportuoti konteksto užduotis kaip maską",
    },
    Steps: {
      Select: "Pasirinkti",
      Preview: "Peržiūra",
    },
  },
  Select: {
    Search: "Ieškoti",
    All: "Pasirinkti viską",
    Latest: "Pasirinkti naujausią",
    Clear: "Išvalyti",
  },
  Memory: {
    Title: "Atminties užduotis",
    EmptyContent: "Dar nieko nėra.",
    Send: "Siųsti atmintį",
    Copy: "Kopijuoti atmintį",
    Reset: "Atstatyti sesiją",
    ResetConfirm:
      "Atstatant bus išvalyta dabartinė pokalbio istorija ir istorinė atmintis. Ar tikrai norite atstatyti?",
  },
  Home: {
    NewChat: "Naujas pokalbis",
    DeleteChat: "Patvirtinkite, kad norite ištrinti pasirinktą pokalbį?",
    DeleteToast: "Pokalbis ištrintas",
    Revert: "Atstatyti",
  },
  Settings: {
    Title: "Nustatymai",
    SubTitle: "Visi nustatymai",
    Actions: {
      ClearAll: "Išvalyti visus duomenis",
      ResetAll: "Atstatyti visus nustatymus",
      Close: "Uždaryti",
      ConfirmResetAll: "Ar tikrai norite atstatyti visus konfigūracijas?",
      ConfirmClearAll: "Ar tikrai norite išvalyti visus duomenis?",
    },
    Lang: {
      Name: "Kalba", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Visos kalbos",
    },
    Avatar: "Avataras",
    FontSize: {
      Title: "Šrifto dydis",
      SubTitle: "Reguliuoti pokalbio turinio šrifto dydį",
    },
    Update: {
      Version: (x: string) => `Versija: ${x}`,
      IsLatest: "Naujausia versija",
      CheckUpdate: "Tikrinti atnaujinimus",
      IsChecking: "Tikrinimas...",
      FoundUpdate: (x: string) => `Rasta nauja versija: ${x}`,
      GoToUpdate: "Atnaujinti",
    },
    SendKey: "Siuntimo klavišas",
    Theme: "Tema",
    TightBorder: "Sutelkti rėmelį",
    SendPreviewBubble: {
      Title: "Siųsti peržiūros burbuliuką",
      SubTitle: "Peržiūrėti Markdown burbuliuke",
    },
    Mask: {
      Title: "Maskuoti pasveikinimo ekraną",
      SubTitle: "Rodyti maskuotą pasveikinimo ekraną prieš pradedant naują pokalbį",
    },
    Prompt: {
      Disable: {
        Title: "Išjungti automatinį užbaigimą",
        SubTitle: "Įveskite /, kad paleistumėte automatinį užbaigimą",
      },
      List: "Užduočių sąrašas",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} įdiegtos, ${custom} vartotojo nurodytos`,
      Edit: "Redaguoti",
      Modal: {
        Title: "Užduočių sąrašas",
        Add: "Pridėti vieną",
        Search: "Ieškoti užduočių",
      },
      EditModal: {
        Title: "Redaguoti užduotį",
      },
    },
    HistoryCount: {
      Title: "Pridedamų žinučių skaičius",
      SubTitle: "Siunčiamų žinučių skaičius užklausai",
    },
    CompressThreshold: {
      Title: "Istorijos suspaudimo slenkstis",
      SubTitle:
        "Suspaudžiama, jei nesuspaustų žinučių ilgis viršija nustatytą reikšmę",
    },
    Token: {
      Title: "API raktas",
      SubTitle: "Naudokite savo raktą, kad apeitumėte prieigos kodo apribojimus",
      Placeholder: "OpenAI API raktas",
    },
    Usage: {
      Title: "Paskyros likutis",
      SubTitle(used: any, total: any) {
        return `Šį mėnesį panaudota $${used}, prenumerata $${total}`;
      },
      IsChecking: "Tikrinimas...",
      Check: "Tikrinti",
      NoAccess: "Įveskite API raktą, kad patikrintumėte likutį",
    },
    AccessCode: {
      Title: "Prieigos kodas",
      SubTitle: "Įjungta prieigos kontrolė",
      Placeholder: "Reikalingas prieigos kodas",
    },
    Endpoint: {
      Title: "Galutinis taškas",
      SubTitle: "Nestandartinis galutinis taškas turi prasidėti nuo http(s)://",
    },
    Model: "Modelis",
    Temperature: {
      Title: "Temperatūra",
      SubTitle: "Didelė reikšmė sukelia labiau atsitiktinį rezultatą",
    },
    MaxTokens: {
      Title: "Didžiausias žetonų skaičius",
      SubTitle: "Maksimalus įvesties žetonų ir sugeneruotų žetonų ilgis",
    },
    PresencePenalty: {
      Title: "Būvio bausmė",
      SubTitle:
        "Didelė reikšmė padidina tikimybę kalbėti apie naujas temas",
    },
  },
  Store: {
    DefaultTopic: "Naujas pokalbis",
    BotHello: "Labas! Kaip galiu Jums padėti šiandien?",
    Error: "Kažkas nutiko, bandykite dar kartą vėliau.",
    Prompt: {
      History: (content: string) =>
        "Tai yra pokalbio istorijos santrauka: " + content,
      Topic:
        "Prašome sugeneruoti keturių iki penkių žodžių antraštę, apibendrinančią mūsų pokalbį, be jokio įvado, skyrybos ženklų, kabučių, taškų, simbolių ar papildomo teksto. Pašalinkite kabutes.",
      Summarize:
        "Trumpai apibūdinkite diskusiją 200 žodžių ar mažiau, kad galėtumėte ją naudoti kaip ateities kontekstui.",
    },
  },
  Copy: {
    Success: "Nukopijuota į iškarpinę",
    Failed: "Kopijavimas nepavyko, prašome suteikti leidimą prieiti prie iškarpinės",
  },
  Context: {
    Toast: (x: any) => `Su ${x} kontekstinėmis užduotimis`,
    Edit: "Kontekstinės ir atminties užduotys",
    Add: "Pridėti užduotį",
    Clear: "Išvalyti kontekstą",
    Revert: "Atstatyti",
  },
  Plugin: {
    Name: "Įskiepis",
  },
  Mask: {
    Name: "Maskuoti",
    Page: {
      Title: "Užduočių šablonas",
      SubTitle: (count: number) => `${count} užduočių šablonai`,
      Search: "Ieškoti šablonų",
      Create: "Kurti",
    },
    Item: {
      Info: (count: number) => `${count} užduotys`,
      Chat: "Pokalbis",
      View: "Peržiūrėti",
      Edit: "Redaguoti",
      Delete: "Ištrinti",
      DeleteConfirm: "Patvirtinti ištrynimą?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Redaguoti užduoties šabloną ${readonly ? "(tik skaitymui)" : ""}`,
      Download: "Atsisiųsti",
      Clone: "Klonuoti",
    },
    Config: {
      Avatar: "Roboto avataras",
      Name: "Roboto pavadinimas",
      Sync: {
        Title: "Naudoti globalią konfigūraciją",
        SubTitle: "Naudoti globalią konfigūraciją šiame pokalbyje",
        Confirm: "Patvirtinti, kad norite pakeisti pasirinktinę konfigūraciją globalia konfigūracija?",
      },
      HideContext: {
        Title: "Slėpti konteksto užduotis",
        SubTitle: "Nerodyti konteksto užduočių pokalbyje",
      },
    },
  },
  NewChat: {
    Return: "Grįžti",
    Skip: "Tiesiog pradėti",
    Title: "Pasirinkite maską",
    SubTitle: "Pokalbis su siela už maskos",
    More: "Rasti daugiau",
    NotShow: "Nerodyti daugiau",
    ConfirmNoShow: "Patvirtinti išjungimą? Galėsite įjungti jį vėliau nustatymuose.",
  },

  UI: {
    Confirm: "Patvirtinti",
    Cancel: "Atšaukti",
    Close: "Uždaryti",
    Create: "Kurti",
    Edit: "Redaguoti",
  },
};

export default lt;