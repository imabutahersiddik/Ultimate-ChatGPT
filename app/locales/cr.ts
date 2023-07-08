import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const cr: RequiredLocaleType = {
  WIP: "Yn Dod Cyn Bo Hir...",
  Error: {
    Unauthorized:
      "Mynediad heb awdurdod, rhowch god mynediad yn nhudalen [cyfrinair](/#/auth).",
  },
  Auth: {
    Title: "Angen Cod Mynediad",
    Tips: "Rhowch god mynediad isod",
    Input: "cod mynediad",
    Confirm: "Cadarnhau",
    Later: "Ddiweddariad",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} neges`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} neges gyda ChatGPT`,
    Actions: {
      ChatList: "Mynd i'r Rhestr Siarad",
      CompressedHistory: "Hanes Cof Diweddar Compressed",
      Export: "Allforio'r Holl Negeseuon fel Markdown",
      Copy: "Copïo",
      Stop: "Stopio",
      Retry: "Rhoi Cais Eto",
      Delete: "Dileu",
    },
    InputActions: {
      Stop: "Stopio",
      ToBottom: "I'r Diweddaraf",
      Theme: {
        auto: "Auto",
        light: "Thema Golau",
        dark: "Thema Tywyll",
      },
      Prompt: "Prompts",
      Masks: "Prompts",
      Clear: "Clirio Cyswllt",
      Settings: "Gosodiadau",
    },
    Rename: "Ailenwi Sgyrsiau",
    Typing: "Ysgrifennu...",
    Input: (submitKey: string) => {
      var inputHints = `Pwyswch ${submitKey} i anfon`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Pwyswch i lapio";
      }
      return inputHints + ", / i chwilio am ragor o gynyrchiadau";
    },
    Send: "Anfon",
    Config: {
      Reset: "Ailosod i Ddiofyn",
      SaveAs: "Cadw fel Prompt",
    },
  },
  Export: {
    Title: "Allforio Negeseuon",
    Copy: "Copïo'r Cyfan",
    Download: "Lawrlwytho",
    MessageFromYou: "Neges Gennych Chi",
    MessageFromChatGPT: "Neges Gennych ChatGPT",
    Share: "Rhannu i KiAsk Share",
    Format: {
      Title: "Fformat Allforio",
      SubTitle: "Markdown neu Lun PNG",
    },
    IncludeContext: {
      Title: "Yn Cynnwys Cyswllt",
      SubTitle: "Allforio cyswllt cynnwys",
    },
    Steps: {
      Select: "Dewis",
      Preview: "Rhagolwg",
    },
  },
  Select: {
    Search: "Chwilio",
    All: "Dewis Pob Un",
    Latest: "Dewis Diweddaraf",
    Clear: "Clirio",
  },
  Memory: {
    Title: "Coffau Cof",
    EmptyContent: "Dim byd eto.",
    Send: "Anfon Cof",
    Copy: "Copïo Cof",
    Reset: "Ailosod Sesiywn",
    ResetConfirm:
      "Bydd aileddangos yn clirio'r hanes sgwrs bresennol a choff gweddol. A ydych yn sicr eich bod am ailosod?",
  },
  Home: {
    NewChat: "Siarad Newydd",
    DeleteChat: "Cadarnhau dileu'r sgwrs dethol?",
    DeleteToast: "Sgwrs Ddilëwyd",
    Revert: "Adfer",
  },
  Settings: {
    Title: "Gosodiadau",
    SubTitle: "Pob Gosodiad",
    Actions: {
      ClearAll: "Clirio'r Holl Data",
      ResetAll: "Ailosod Pob Gosodiadau",
      Close: "Cau",
      ConfirmResetAll: "Ydych chi'n siŵr eich bod am ailosod pob ffurfweddiad?",
      ConfirmClearAll: "Ydych chi'n siŵr eich bod am ailosod pob data?",
    },
    Lang: {
      Name: "Iaith", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Pob Ieithoedd",
    },
    Avatar: "Afatar",
    FontSize: {
      Title: "Maint Ffont",
      SubTitle: "Addasu maint ffont y cynnwys sgwrs",
    },
    Update: {
      Version: (x: string) => `Fersiwn: ${x}`,
      IsLatest: "Fersiwn diweddaraf",
      CheckUpdate: "Gwiriwch Ddiweddaru",
      IsChecking: "Gwirio diweddaru...",
      FoundUpdate: (x: string) => `Darganfu fersiwn newydd: ${x}`,
      GoToUpdate: "Diweddaru",
    },
    SendKey: "Anfon Allwedd",
    Theme: "Thema",
    TightBorder: "Ffin Tynn",
    SendPreviewBubble: {
      Title: "Bwled Rhagolwg Anfon",
      SubTitle: "Rhagolwg markdown yn y bwled",
    },
    Mask: {
      Title: "Sgrin Sblash Hynt",
      SubTitle: "Dangos sgrin sblash cyn dechrau sgwrs newydd",
    },
    Prompt: {
      Disable: {
        Title: "Analluogi auto-atter",
        SubTitle: "Nodwch / i ategu auto-atter",
      },
      List: "Rhestr Prompts",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} mewnbynnedd, ${custom} hunan-ddiffiniedig`,
      Edit: "Golygu",
      Modal: {
        Title: "Rhestr Prompts",
        Add: "Ychwanegu Un",
        Search: "Chwilio Prompts",
      },
      EditModal: {
        Title: "Golygu Prompt",
      },
    },
    HistoryCount: {
      Title: "Cyfrif Negeseuon Atodol",
      SubTitle: "Nifer o negeseuon anfonedig sy'nghlwm wrth y cais",
    },
    CompressThreshold: {
      Title: "Thragwyddol Debio Hanes",
      SubTitle:
        "Bydd yn bwydo os bydd hyd negeseuon heb eu compresio'n fwy na'r gwerth",
    },
    Token: {
      Title: "Allwedd API",
      SubTitle: "Defnyddiwch eich allwedd i anwybyddu cyfyngiad cod mynediad",
      Placeholder: "Allwedd API OpenAI",
    },
    Usage: {
      Title: "Saldo Cyfrif",
      SubTitle(used: any, total: any) {
        return `Defnyddiwyd y mis hwn $${used}, tanysgrifiad $${total}`;
      },
      IsChecking: "Gwirio...",
      Check: "Gwirio",
      NoAccess: "Rhowch Allwedd API i wirio'r saldo",
    },
    AccessCode: {
      Title: "Cod Mynediad",
      SubTitle: "Yn gallu rheoli mynediad",
      Placeholder: "Angen Cod Mynediad",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Rhaid i ateb benodol ddechrau gyda http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Poethdod",
      SubTitle: "Mae gwerth mwy yn creu allbynnau mwy cywir",
    },
    MaxTokens: {
      Title: "Max Allbynnau",
      SubTitle: "Maint mwyaf o bysellau mewnbwn a bysellau a effeithiwyd",
    },
    PresencePenalty: {
      Title: "Cosb Presenoldeb",
      SubTitle:
        "Mae gwerth mwy yn cynyddu'r tebygrwydd o siarad am bynciau newydd",
    },
  },
  Store: {
    DefaultTopic: "Sgwrs Newydd",
    BotHello: "Helo! Sut alla i'ch helpu heddiw?",
    Error: "Mae rhywbeth wedi mynd o'i le, rhowch gynnig arall arni'n ddiweddarach.",
    Prompt: {
      History: (content: string) =>
        "Dyma grynodeb o hanes y sgwrs fel adolygiad: " + content,
      Topic:
        "Creuwch deitl o bedair gair i bum gair yn crynhoi ein sgwrs heb unrhyw gymhorthdal, pwyntiad, dyfynnod, periadau, symbolau, na thestun ychwanegol. Tynnwch gynnwys dyfaliad croesion.",
      Summarize:
        "Crynodebu'r drafodaeth yn gryno mewn 200 gair neu lai i'w defnyddio fel folt ar gyfer cyd-destun yn y dyfodol.",
    },
  },
  Copy: {
    Success: "Copïwyd i'r clipfwrdd",
    Failed: "Methodd copïo, rhowch ganiatâd mynediad i'r clipfwrdd",
  },
  Context: {
    Toast: (x: any) => `Gyda ${x} cymhorthion cyd-destunol`,
    Edit: "Cymhorthion Cyd-destunol a Cof",
    Add: "Ychwanegu Hap",
    Clear: "Clirio'r Cyswllt",
    Revert: "Adfer",
  },
  Plugin: {
    Name: "Ategyn",
  },
  Mask: {
    Name: "Hap",
    Page: {
      Title: "Templed Hap",
      SubTitle: (count: number) => `${count} templedi hap`,
      Search: "Chwilio Templedi",
      Create: "Creu",
    },
    Item: {
      Info: (count: number) => `${count} cymhorthion cyd-destunol`,
      Chat: "Sgwrs",
      View: "Edrychwch",
      Edit: "Golygu",
      Delete: "Dileu",
      DeleteConfirm: "Cadarnhau dileu?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Golygu Templed Hap ${readonly ? "(darllenol)" : ""}`,
      Download: "Lawrlwytho",
      Clone: "Clonio",
    },
    Config: {
      Avatar: "Afatar y Bot",
      Name: "Enw'r Bot",
      Sync: {
        Title: "Defnyddio Ffurfweddiad Cyffredinol",
        SubTitle: "Defnyddio ffurfweddiad cyffredinol yn y sgwrs hon",
        Confirm: "Cadarnhau meta chwistrellu'r ffurfweddiad arferol gyda ffurfweddiad cyffredinol?",
      },
      HideContext: {
        Title: "Cuddio'r Cymhorthion Cyd-destunol",
        SubTitle: "Peidiwch â dangos cymhorthion cyd-destunol yn y sgwrs",
      },
    },
  },
  NewChat: {
    Return: "Dychwelwch",
    Skip: "Dechrau'n Syth",
    Title: "Dewis Hap",
    SubTitle: "Siarad â'r Enaid y Tu Ôl i'r Hap",
    More: "Canfod Mwy",
    NotShow: "Peidio Dangos Byth",
    ConfirmNoShow: "Cadarnhau i analluogi? Gallwch ei alluogi yn y gosodiadau yn ddiweddarach.",
  },

  UI: {
    Confirm: "Cadarnhau",
    Cancel: "Canslo",
    Close: "Cau",
    Create: "Creu",
    Edit: "Golygu",
  },
};

export default cr;