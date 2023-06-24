import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const tg: RequiredLocaleType = {
  WIP: "Darating sa lalong madaling panahon...",
  Error: {
    Unauthorized:
      "Hindi awtorisado ang pag-access, mangyaring maglagay ng access code sa [auth](/#/auth) na pahina.",
  },
  Auth: {
    Title: "Kailangan ng Access Code",
    Tips: "Mangyaring maglagay ng access code sa ibaba",
    Input: "access code",
    Confirm: "Kumpirmahin",
    Later: "Sa ibang pagkakataon",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} mga mensahe`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} mga mensahe kasama si ChatGPT`,
    Actions: {
      ChatList: "Pumunta sa Listahan ng Chat",
      CompressedHistory: "Nakabasag na Kasaysayan ng Memory Prompt",
      Export: "I-export ang Lahat ng Mensahe bilang Markdown",
      Copy: "Kopyahin",
      Stop: "Itigil",
      Retry: "Ulitin",
      Delete: "Burahin",
    },
    InputActions: {
      Stop: "Itigil",
      ToBottom: "Punta sa Pinakabagong",
      Theme: {
        auto: "Auto",
        light: "Liwanag na Tema",
        dark: "Madilim na Tema",
      },
      Prompt: "Mga Prompt",
      Masks: "Mga Prompt",
      Clear: "Tanggalin ang Context",
      Settings: "Mga Setting",
    },
    Rename: "Palitan ang Pangalan ng Chat",
    Typing: "Sinusulat…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} upang i-send`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter upang balutin";
      }
      return inputHints + ", / upang maghanap ng mga prompt";
    },
    Send: "Ipadala",
    Config: {
      Reset: "I-reset sa Default",
      SaveAs: "I-save bilang Prompt",
    },
  },
  Export: {
    Title: "I-export ang Mga Mensahe",
    Copy: "Kopyahin ang Lahat",
    Download: "I-download",
    MessageFromYou: "Mensahe Mula sa Iyo",
    MessageFromChatGPT: "Mensahe Mula sa ChatGPT",
    Share: "Ibahagi sa KiAsk Share",
    Format: {
      Title: "Export Format",
      SubTitle: "Markdown o Imaheng PNG",
    },
    IncludeContext: {
      Title: "Kasama ang Konteksto",
      SubTitle: "I-export ang mga konteksto ng prompt",
    },
    Steps: {
      Select: "Pumili",
      Preview: "Preview",
    },
  },
  Select: {
    Search: "Maghanap",
    All: "Pumili ng Lahat",
    Latest: "Pumili ng Pinakabagong",
    Clear: "Linisin",
  },
  Memory: {
    Title: "Memory Prompt",
    EmptyContent: "Wala pa.",
    Send: "Ipadala Memory",
    Copy: "Kopyahin Memory",
    Reset: "I-reset ang Session",
    ResetConfirm:
      "Ang pag-reset ay maglilinis ng kasalukuyang kasaysayan ng usapan at nakaraang memorya. Sigurado ka bang nais mong i-reset?",
  },
  Home: {
    NewChat: "Bagong Chat",
    DeleteChat: "Kumpirmahin ang pagtanggal ng napiling usapan?",
    DeleteToast: "Natanggal na ang Chat",
    Revert: "Bumalik",
  },
  Settings: {
    Title: "Mga Setting",
    SubTitle: "Mga Setting Lahat",
    Actions: {
      ClearAll: "Burahin ang Lahat ng Data",
      ResetAll: "I-reset ang Lahat ng mga Setting",
      Close: "Isara",
      ConfirmResetAll: "Sigurado ka bang nais mong i-reset ang lahat ng mga konfigurasyon?",
      ConfirmClearAll: "Sigurado ka bang nais mong i-reset ang lahat ng data?",
    },
    Lang: {
      Name: "Wikang", // ATTENTION: kung nais mong magdagdag ng bagong pagsasalin, mangyaring huwag isalin ang halagang ito, iiwan ito bilang `Language`
      All: "Lahat ng Mga Wikang",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Laki ng Font",
      SubTitle: "I-adjust ang laki ng font ng laman ng chat",
    },
    Update: {
      Version: (x: string) => `Bersyon: ${x}`,
      IsLatest: "Pinakabagong bersyon",
      CheckUpdate: "Suriin ang Update",
      IsChecking: "Sinusuri ang update...",
      FoundUpdate: (x: string) => `Natagpuan ang bagong bersyon: ${x}`,
      GoToUpdate: "I-update",
    },
    SendKey: "Ipadala ang Key",
    Theme: "Tema",
    TightBorder: "Mahigpit na Border",
    SendPreviewBubble: {
      Title: "Ipadala ang Preview Bubble",
      SubTitle: "I-preview ang markdown sa isang bubble",
    },
    Mask: {
      Prompt: "Prompt Splash Screen",
      SubTitle: "Itakda ang isang prompt splash screen bago mag-umpisa ng bagong chat",
    },
    Prompt: {
      Disable: {
        Title: "Huwag paganahin ang auto-kumpletong",
        SubTitle: "Maglagay ng / upang paganahin ang auto-kumpletong",
      },
      List: "Listahan ng Prompt",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      Edit: "I-edit",
      Modal: {
        Title: "Listahan ng Prompt",
        Magdagdag: "Magdagdag ng Isa",
        Maghanap: "Maghanap ng Mga Prompt",
      },
      EditModal: {
        Title: "I-edit ang Prompt",
      },
    },
    HistoryCount: {
      Title: "Bilang ng Mga Nakalakip na Mensahe",
      SubTitle: "Bilang ng mga mensaheng ipinadala na kalakip bawat kahilingan",
    },
    CompressThreshold: {
      Title: "Bilang ng Paanurin ng Kasaysayan",
      SubTitle:
        "I-aapakan kung ang haba ng mga hindi pa naaangkat na mensahe ay lumalampas sa halaga",
    },
    Token: {
      Title: "API Key",
      SubTitle: "Gamitin ang iyong key upang balewalain ang limitasyon ng access code",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "Kalagayan ng Account",
      SubTitle(nagamit: any, kabuuan: any) {
        return `Nagamit sa buwang ito $${used}, pag-aari $${total}`;
      },
      IsChecking: "Sinusuri...",
      Check: "Suriin",
      NoAccess: "Maglagay ng API Key upang suriin ang balanse",
    },
    AccessCode: {
      Title: "Access Code",
      SubTitle: "Pinagana ang access control",
      Placeholder: "Kailangan ng Access Code",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Ang pasadyang endpoint ay dapat magsimula sa http(s)://",
    },
    Model: "Modelo",
    Temperature: {
      Title: "Temperature",
      SubTitle: "Ang mas malaking halaga ay gumagawa ng mas random na output",
    },
    MaxTokens: {
      Title: "Max na Bikitan",
      SubTitle: "Maximum na haba ng mga input token at mga ginawang token",
    },
    PresencePenalty: {
      Title: "Halaga ng Penalty sa Presence",
      SubTitle:
        "Ang mas malaking halaga ay nagpapataas ng posibilidad na pag-usapan ang mga bagong paksa",
    },
  },
  Store: {
    DefaultTopic: "Bago Usapan",
    BotHello: "Hello! Paano kita matutulungan ngayon?",
    Error: "Mayroong nabaluktot, subukan muli mamayang hapon.",
    Prompt: {
      History: (content: string) =>
        "Ito ay isang buod ng kasaysayan ng chat bilang pagsusuri: " + content,
      Topic:
        "Mangyaring lumikha ng isang four to five word na pamagat na inililista ang aming usapan nang walang anumang paghahain, bantas, tanda ng panipi, punto, simbolo, o karagdagang teksto. Alisin ang nagbibigkis na tanda ng panipi.",
      Summarize:
        "Suriin nang maikli ang pag-uusap sa 200 na salita o mas mababa na gagamitin bilang prompt para sa hinaharap na konteksto.",
    },
  },
  Copy: {
    Success: "Nakopya sa clipboard",
    Failed: "Hindi nagawa ang pagkopya, mangyaring bigyan ng pahintulot ang access sa clipboard",
  },
  Context: {
    Toast: (x: any) => `Mayroong ${x} mga contextual prompt`,
    Edit: "Mga Contextual at Memory Prompts",
    Add: "Idagdag ang Prompt",
    Clear: "Inalis ang Konteksto",
    Revert: "Bumalik",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Prompt",
    Page: {
      Title: "Prompt template",
      SubTitle: (count: number) => `${count} mga prompt template`,
      Search: "Paghahanap ng mga Template",
      Create: "Lumikha",
    },
    Item: {
      Info: (count: number) => `${count} mga prompt`,
      Chat: "Chat",
      View: "Tingnan",
      Edit: "I-edit",
      Delete: "Burahin",
      DeleteConfirm: "Kumpirmahin ang pagbura?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `I-edit ang Prompt Template ${readonly ? "(readonly)" : ""}`,
      Download: "I-download",
      Clone: "Kopyahin",
    },
    Config: {
      Avatar: "Avatar ng Bot",
      Name: "Pangalan ng Bot",
      Sync: {
        Title: "Gamitin ang Global na Config",
        SubTitle: "Gamitin ang global config sa chat na ito",
        Confirm: "Kumpirmahin ang pag-override ng custom config sa global config?",
      },
      HideContext: {
        Title: "Itago ang Context Prompts",
        SubTitle: "Huwag ipakita ang mga in-context na prompt sa chat",
      },
    },
  },
  NewChat: {
    Return: "Bumalik",
    Skip: "Simulan na",
    Title: "Pumili ng Prompt",
    SubTitle: "Makipag-chat sa Kaluluwa sa Likod ng Prompt",
    More: "Maghanap ng Iba pa",
    NotShow: "Huwag Ipakita Muli",
    ConfirmNoShow: "Kumpirmahin ang hindi pagpapakita? Pwede mong paganahin ito sa mga setting mamaya.",
  },

  UI: {
    Confirm: "Kumpirmahin",
    Cancel: "Kanselahin",
    Close: "Isara",
    Create: "Lumikha",
    Edit: "I-edit",
  },
};

export default tg;
