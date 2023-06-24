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
      Pagpili: "Pumili",
      Preview: "Preview",
    },
  },
  Pumili: {
    Search: "Maghanap",
    Lahat: "Pumili ng Lahat",
    Pinakabagong: "Pumili ng Pinakabagong",
    Linawin: "Linisin",
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
      Isara: "Isara",
      KumpirmahinAngResetAll: "Sigurado ka bang nais mong i-reset ang lahat ng mga konfigurasyon?",
      KumpirmahinAngClearAll: "Sigurado ka bang nais mong i-reset ang lahat ng data?",
    },
    Wikang: {
      Pangalan: "Wikang", // ATTENTION: kung nais mong magdagdag ng bagong pagsasalin, mangyaring huwag isalin ang halagang ito, iiwan ito bilang `Language`
      Lahat: "Lahat ng Mga Wikang",
    },
    Avatar: "Avatar",
    LakiNgFont: {
      Title: "Laki ng Font",
      SubTitle: "I-adjust ang laki ng font ng laman ng chat",
    },
    Update: {
      Bersyon: (x: string) => `Bersyon: ${x}`,
      Pinakabagong: "Pinakabagong bersyon",
      SuriinAngUpdate: "Suriin ang Update",
      KasalukuyangSinusuri: "Sinusuri ang update...",
      NatagpuangUpdate: (x: string) => `Natagpuan ang bagong bersyon: ${x}`,
      PumuntaSaUpdate: "I-update",
    },
    SendKey: "Ipadala ang Key",
    Tema: "Tema",
    TightBorder: "Mahigpit na Border",
    SendPreviewBubble: {
      Title: "Ipadala ang Preview Bubble",
      SubTitle: "I-preview ang markdown sa isang bubble",
    },
    Maskara: {
      Pamagat: "Prompt Splash Screen",
      SubTitle: "Itakda ang isang prompt splash screen bago mag-umpisa ng bagong chat",
    },
    Prompt: {
      HindiGumagana: {
        Pamagat: "Huwag paganahin ang auto-kumpletong",
        SubTitle: "Maglagay ng / upang paganahin ang auto-kumpletong",
      },
      Listahan: "Listahan ng Prompt",
      BilangSaListahan: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      I-edit: "I-edit",
      Modal: {
        Pamagat: "Listahan ng Prompt",
        Magdagdag: "Magdagdag ng Isa",
        Maghanap: "Maghanap ng Mga Prompt",
      },
      EditModal: {
        Pamagat: "I-edit ang Prompt",
      },
    },
    BilangNgKasaysayan: {
      Pamagat: "Bilang ng Mga Nakalakip na Mensahe",
      SubTitle: "Bilang ng mga mensaheng ipinadala na kalakip bawat kahilingan",
    },
    CompressThreshold: {
      Pamagat: "Bilang ng Paanurin ng Kasaysayan",
      SubTitle:
        "I-aapakan kung ang haba ng mga hindi pa naaangkat na mensahe ay lumalampas sa halaga",
    },
    Token: {
      Pamagat: "API Key",
      SubTitle: "Gamitin ang iyong key upang balewalain ang limitasyon ng access code",
      Placeholder: "OpenAI API Key",
    },
    Paggamit: {
      Pamagat: "Kalagayan ng Account",
      SubTitle(nagamit: any, kabuuan: any) {
        return `Nagamit sa buwang ito $${nagamit}, pag-aari $${kabuuan}`;
      },
      KasalukuyangSinusuri: "Sinusuri...",
      Suriin: "Suriin",
      WalangAccess: "Maglagay ng API Key upang suriin ang balanse",
    },
    AccessCode: {
      Pamagat: "Access Code",
      SubTitle: "Pinagana ang access control",
      Placeholder: "Kailangan ng Access Code",
    },
    Endpoint: {
      Pamagat: "Endpoint",
      SubTitle: "Ang pasadyang endpoint ay dapat magsimula sa http(s)://",
    },
    Model: "Modelo",
    Temperature: {
      Pamagat: "Temperature",
      SubTitle: "Ang mas malaking halaga ay gumagawa ng mas random na output",
    },
    MaxTokens: {
      Pamagat: "Max na Bikitan",
      SubTitle: "Maximum na haba ng mga input token at mga ginawang token",
    },
    PresencePenalty: {
      Pamagat: "Halaga ng Penalty sa Presence",
      SubTitle:
        "Ang mas malaking halaga ay nagpapataas ng posibilidad na pag-usapan ang mga bagong paksa",
    },
  },
  Store: {
    DefaultTopic: "Bago Usapan",
    BotHello: "Hello! Paano kita matutulungan ngayon?",
    Error: "Mayroong nabaluktot, subukan muli mamayang hapon.",
    Prompt: {
      Kasaysayan: (content: string) =>
        "Ito ay isang buod ng kasaysayan ng chat bilang pagsusuri: " + content,
      Tema:
        "Mangyaring lumikha ng isang four to five word na pamagat na inililista ang aming usapan nang walang anumang paghahain, bantas, tanda ng panipi, punto, simbolo, o karagdagang teksto. Alisin ang nagbibigkis na tanda ng panipi.",
      Buod:
        "Suriin nang maikli ang pag-uusap sa 200 na salita o mas mababa na gagamitin bilang prompt para sa hinaharap na konteksto.",
    },
  },
  Copy: {
    Tagumpay: "Nakopya sa clipboard",
    Nabigo: "Hindi nagawa ang pagkopya, mangyaring bigyan ng pahintulot ang access sa clipboard",
  },
  Konteksto: {
    Tostada: (x: any) => `Mayroong ${x} mga contextual prompt`,
    I-edit: "Mga Contextual at Memory Prompts",
    Idagdag: "Idagdag ang Prompt",
    Linawin: "Inalis ang Konteksto",
    Bumalik: "Bumalik",
  },
  Plugin: {
    Pangalan: "Plugin",
  },
  Maskara: {
    Pangalan: "Prompt",
    Pahina: {
      Pamagat: "Prompt template",
      SubTitle: (count: number) => `${count} mga prompt template`,
      Paghahanap: "Paghahanap ng mga Template",
      Lumikha: "Lumikha",
    },
    Item: {
      Impormasyon: (count: number) => `${count} mga prompt`,
      Chat: "Chat",
      Tingnan: "Tingnan",
      I-edit: "I-edit",
      Burahin: "Burahin",
      KumpirmahinAngBurahin: "Kumpirmahin ang pagbura?",
    },
    EditModal: {
      Pamagat: (readonly: boolean) =>
        `I-edit ang Prompt Template ${readonly ? "(readonly)" : ""}`,
      I-download: "I-download",
      Kopyahin: "Kopyahin",
    },
    Config: {
      Avatar: "Avatar ng Bot",
      Pangalan: "Pangalan ng Bot",
      Sync: {
        Pamagat: "Gamitin ang Global na Config",
        SubTitle: "Gamitin ang global config sa chat na ito",
        Kumpirmahin: "Kumpirmahin ang pag-override ng custom config sa global config?",
      },
      ItagoAngKonteksto: {
        Pamagat: "Itago ang Context Prompts",
        SubTitle: "Huwag ipakita ang mga in-context na prompt sa chat",
      },
    },
  },
  BagoChat: {
    Bumalik: "Bumalik",
    Lampas: "Simulan na",
    Pamagat: "Pumili ng Prompt",
    SubTitle: "Makipag-chat sa Kaluluwa sa Likod ng Prompt",
    HigitPa: "Maghanap ng Iba pa",
    HindiIpakita: "Huwag Ipakita Muli",
    KumpirmahinNaHindiIpakita: "Kumpirmahin ang hindi pagpapakita? Pwede mong paganahin ito sa mga setting mamaya.",
  },

  UI: {
    Kumpirmahin: "Kumpirmahin",
    Kanselahin: "Kanselahin",
    Isara: "Isara",
    Lumikha: "Lumikha",
    I-edit: "I-edit",
  },
};

export default tg;
