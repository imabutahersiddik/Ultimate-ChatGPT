import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const cg: RequiredLocaleType = {
  WIP: "Eko koya...",
  Error: {
    Unauthorized:
      "Lobi ya koboka, tanga ko sambela kodi ya koboka na mpɔngɔ ya [auth](/#/auth).",
  },
  Auth: {
    Title: "Kuyiba Kodi ya Koboka",
    Tips: "Tangisa kodi ya koboka hema",
    Input: "Kodi ya koboka",
    Confirm: "Koboka",
    Later: "Tozali to",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} maboko`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} maboko na 'The ChatGPT'`,
    Actions: {
      ChatList: "Kenda na Nakanda ya Maboko",
      CompressedHistory: "Lusilwa ya Maboko Entioko",
      Export: "Ekótama Mabatisani Mobimba na Markdown",
      Copy: "Kokisa",
      Stop: "Bo vanga",
      Retry: "Kolóa sango",
      Delete: "Emele",
    },
    InputActions: {
      Stop: "Bo vanga",
      ToBottom: "Tozali bokondema",
      Theme: {
        auto: "Auto",
        light: "Nkéla na Kóngo ya Moto",
        dark: "Nkéla na Kóngo ya Lofambo",
      },
      Prompt: "Makani ya bokondema",
      Masks: "Mabatisani",
      Clear: "Emela mafunu",
      Settings: "Bakoki",
    },
    Rename: "Siwa Nakanda ya Maboko",
    Typing: "Etangisa...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} to kona`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter to komatibolisela";
      }
      return inputHints + ", / to kanga makani ya bokondema";
    },
    Send: "Kota",
    Config: {
      Reset: "Sansa ko na Bekendela",
      SaveAs: "Sovisa na Mabatisani",
    },
  },
  Export: {
    Title: "Kobanda Maboko",
    Copy: "Kokisa Mosala Mobimba",
    Download: "Kobanda",
    MessageFromYou: "Maboko ya wé",
    MessageFromChatGPT: "Maboko ya 'The ChatGPT'",
    Share: "Kosambelisa na Kibunda na KiAsk",
    Format: {
      Title: "Okosi Kobanda",
      SubTitle: "Markdown or PNG Image",
    },
    IncludeContext: {
      Title: "Ekosangani Masanka",
      SubTitle: "Okambisi masanka ya kontekateli na ya batisani ma pe",
    },
    Steps: {
      Select: "Kokotá",
      Preview: "Kotámisa",
    },
  },
  Select: {
    Search: "Yiba",
    All: "Kokotá bobimisa",
    Latest: "Kokotá bobimí na mobembo",
    Clear: "Kopóola",
  },
  Memory: {
    Title: "Batisani ya Kontekateli",
    EmptyContent: "Kotá te ko na batu.",
    Send: "Kokota batisani",
    Copy: "Kokisa batisani",
    Reset: "Sansa ebongoli",
    ResetConfirm:
      "Kolungebisa nasanisaki masanka ya yambo ya moko moko ma pe, ya kati ya kosala nionso. Efungoli yo te po ko sansa?",
  },
  Home: {
    NewChat: "Bosongo Maboko",
    DeleteChat: "Mitaki ya kosala bokoyi na maboko eleki?",
    DeleteToast: "Maboko eti",
    Revert: "Kosala ya sika",
  },
  Settings: {
    Title: "Bakoki",
    SubTitle: "Nionso na bakoki",
    Actions: {
      ClearAll: "Kopóola malamu nionso",
      ResetAll: "Sansa malamu nionso",
      Close: "Fermer",
      ConfirmResetAll:
        "Efungoli yo te po ko sansa ndenge oyo ekomisaki yango?",
      ConfirmClearAll: "Efungoli yo te po ko kopóola nionso?",
    },
    Lang: {
      Name: "Lingála", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Nzela zamuana",
    },
    Avatar: "Ngoyi wa bot",
    FontSize: {
      Title: "Masendeko ya ngeko",
      SubTitle: "Sala masendeko ya ngeko ya masanka",
    },
    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Ekomi ya sika",
      CheckUpdate: "Koyiba misangá",
      IsChecking: "Kobima misangá...",
      FoundUpdate: (x: string) => `Misangá mibópi: ${x} ekomi`,
      GoToUpdate: "Kosilisi misangá",
    },
    SendKey: "Bóma ya kotá",
    Theme: "Motíki",
    TightBorder: "Futila mímate na mokristó",
    SendPreviewBubble: {
      Title: "Nkéla sambela-yango",
      SubTitle: "Kolóla markdown mboka na mvundu-ye",
    },
    Mask: {
      Title: "Kolokoloko ya mabatisani",
      SubTitle: "Kotíya kolokoloko ya mabatisani nde kobonda maboko eti",
    },
    Prompt: {
      Disable: {
        Title: "Komalaka kotíya okotúna mobandá",
        SubTitle: "Etíya / koyiba okomalaka kotíya okotúna mobandá",
      },
      List: "Momílesi ya makani ya bokondema",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} mbandi, ${custom} ya babóteli`,
      Edit: "Kolima",
      Modal: {
        Title: "Momílesi ya makani ya bokondema",
        Add: "Kotumela mosala",
        Search: "Yeba makani ya bokondema",
      },
      EditModal: {
        Title: "Kolima makani ya bokondema",
      },
    },
    HistoryCount: {
      Title: "Miteme ya maboko eleki",
      SubTitle: "Nombre ya maboko okotambolaki ebongoli mbala moko",
    },
    CompressThreshold: {
      Title: "Mobanda ya maboko okabalaki",
      SubTitle:
        "Yo etambolaki ete maboko ebongoli ma pe ekosalisa ebimisi te okosalela",
    },
    Token: {
      Title: "Bóma ya API",
      SubTitle: "Kosala bóma ya yo po kotá alobi ya koboka limit",
      Placeholder: "Bóma ya OpenAI API",
    },
    Usage: {
      Title: "Sákisa ya motúma",
      SubTitle(used: any, total: any) {
        return `Nzakomisaki ya sika $${used}, mosala ya sondaki $${total}`;
      },
      IsChecking: "Kobima sákisa...",
      Check: "Yiba",
      NoAccess: "Tangi bóma ya OpenAI API po kosangela sákisa",
    },
    AccessCode: {
      Title: "Kodi ya koboka",
      SubTitle: "Kobanda nde kokoma yango",
      Placeholder: "Ndenge Kodí ya koboka",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Endpoint ya ndenge ya kákoli pe toekoté kaka na http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperata",
      SubTitle: "Elemene makasi efandi kobanda kodimí kokoma ebimisi biso maye",
    },
    MaxTokens: {
      Title: "Mobándisi mobimí ya masanka",
      SubTitle: "Elongí ya ndenge masanka na nkándisi mobimí ya masanka",
    },
    PresencePenalty: {
      Title: "Pelesi ya présence",
      SubTitle:
        "Ndenge nosambelaki pé pesa kasi na maboko okokima mwinda mibale",
    },
  },
  Store: {
    DefaultTopic: "Moko ya bokondema",
    BotHello: "Mbomba! Naza neti soki nalingi kobonda yo ndéko?",
    Error: "Kosala misala, tanga kobalaki na mbongo neti.",
    Prompt: {
      History: (content: string) =>
        "Okofandidi maboko moto pe ababá ya maboko yo okofótema te omonani: " +
        content,
      Topic:
        "Talíya nya kotúna mokandá mpé sanga ya bokondema na mpwáko ya ntango, motámbola na pénzi, nkóngo ya kobuta, mpé maboko mobimba. Kokola kobanda ya kobímisa.",
      Summarize:
        "Kobanda imeme na súmi tósa na likonzi ya 200 na maboko ya kosombelisa.",
    },
  },
  Copy: {
    Success: "Kokisa maboko ya nkéli té",
    Failed: "Kopóna ekibaki, tanga matondi ya kososola kópi",
  },
  Context: {
    Toast: (x: any) => `Liwa ${x} ya masanka ya nyonso`,
    Edit: "Masanka ya kontekateli na batisani",
    Add: "Tumela témo",
    Clear: "Emela masanka",
    Revert: "Kosala ya sika",
  },
  Plugin: {
    Name: "Plugini",
  },
  Mask: {
    Name: "Mabatisani",
    Page: {
      Title: "Mopima ya Bolanda",
      SubTitle: (count: number) => `${count} ya mabatisani`,
      Search: "Koya mobémbisa",
      Create: "Kokosala",
    },
    Item: {
      Info: (count: number) => `${count} ya mabatisani`,
      Chat: "Na bokondema",
      View: "Bokámisa",
      Edit: "Kolima",
      Delete: "Emele",
      DeleteConfirm: "Kolungisi ya kosala iti?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Kolima mopima ya bolanda${readonly ? "( mbongoweli)" : ""}`,
      Download: "Kobanda",
      Clone: "Kokomisa tiyá",
    },
    Config: {
      Avatar: "Ngoyi wa bot",
      Name: "Tindanzo wa bot",
      Sync: {
        Title: "Kotíya konfigurasi ya mobe elakisaki",
        SubTitle: "Kotíya konfigurasi ya mobe elakisaki na bokondema awa",
        Confirm: "Kolungisi kosuami konfigurasi ya elakisaki na mobutu?",
      },
      HideContext: {
        Title: "Kokamwisa mabatisani ya kontekateli",
        SubTitle: "Tíya kobatela mabatisani ya kontekateli na bokondema",
      },
    },
  },
  NewChat: {
    Return: "Kosala ya sika",
    Skip: "Tútíya kosenga",
    Title: "Kotonga maboko awa",
    SubTitle: "Bokondema na maboko ya kopesetami",
    More: "Kozala mobtango",
    NotShow: "Kolungisi kobanda?",
    ConfirmNoShow:
      "Kolungisi kobanda na kobina ya esimbisa? Bokoyi oza kosangela na bakoki mosusu nasali pe na kosambela tehé.",
  },

  UI: {
    Confirm: "Kolungisi",
    Cancel: "Koboma",
    Close: "Fermer",
    Create: "Kosala",
    Edit: "Kolima",
  },
};

export default cg;
