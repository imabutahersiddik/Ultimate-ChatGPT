import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

const ph: LocaleType = {
  WIP: "Sasampulan...",
  Error: {
    Unauthorized:
      "Suportahan ang Ultimate ChatGPT sa [Patreon](https://patreon.com/KiasK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link) o sa pamamagitan ng Bkash (+880 1812-715289), Ipadala gamit ang [Worldremit](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob), Mobile Wallet Number: +880 1812-715289 upang matulungan kami sa pagpapabuti at pagpapanatili ng malakas na Ultimate ChatGPT.",
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
    SubTitle: (count: number) => `${count} mga mensahe`,
    Actions: {
      ChatList: "Pumunta sa Listahan ng Chat",
      CompressedHistory: "Nakakompres na Kasaysayan ng Memory Prompt",
      Export: "I-export ang Lahat ng Mensahe bilang Markdown",
      Copy: "Kopyahin",
      Stop: "Itigil",
      Retry: "Ulitin",
      Pin: "Itampok",
      PinToastContent: "Itinampok ang 2 na mensahe sa mga pangkontekstong prompt",
      PinToastAction: "Tingnan",
      Delete: "Burahin",
      Edit: "I-edit",
    },
    Commands: {
      new: "Magsimula ng bagong chat",
      newm: "Magsimula ng bagong chat na may maskara",
      next: "Susunod na Chat",
      prev: "Nakaraang Chat",
      clear: "Burahin ang Konteksto",
      del: "Burahin ang Chat",
    },
    InputActions: {
      Stop: "Itigil",
      ToBottom: "Sa Pinakabagong",
      Theme: {
        auto: "Auto",
        light: "Light Theme",
        dark: "Dark Theme",
      },
      Prompt: "Mga Prompt",
      Masks: "Mga Maskara",
      Clear: "Burahin ang Konteksto",
      Settings: "Mga Setting",
    },
    Rename: "Palitan ang Pangalan ng Chat",
    Typing: "Nagtatype...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} para magpadala`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter para mag-wrap";
      }
      return inputHints + ", / para maghanap ng mga prompt, : para gamitin ang mga command";
    },
    Send: "Ipadala",
    Config: {
      Reset: "I-reset sa Default",
      SaveAs: "I-save bilang Maskara",
    },
  },
  Export: {
    Title: "I-export ang mga Mensahe",
    Copy: "Kopyahin Lahat",
    Download: "I-download",
    MessageFromYou: "Mensahe Mula sa Iyo",
    MessageFromChatGPT: "Mensahe Mula sa ChatGPT",
    Share: "Ibahagi sa KiAsk Share",
    Format: {
      Title: "Format ng I-export",
      SubTitle: "Markdown o PNG na Larawan",
    },
    IncludeContext: {
      Title: "Kasama ang Konteksto",
      SubTitle: "I-export ang mga pangkontekstong prompt sa maskara o hindi",
    },
    Steps: {
      Select: "Pumili",
      Preview: "Preview",
    },
    Image: {
      Toast: "Kinukunan ng Larawan...",
      Modal: "Mag-long press o right click para i-save ang larawan",
    },
  },
  Select: {
    Search: "Maghanap",
    All: "Piliin Lahat",
    Latest: "Piliin ang Pinakabagong",
    Clear: "Burahin",
  },
  Memory: {
    Title: "Memory Prompt",
    EmptyContent: "Wala pa.",
    Send: "Ipadala ang Memory",
    Copy: "Kopyahin ang Memory",
    Reset: "I-reset ang Session",
    ResetConfirm:
      "Ang pag-reset ay maglilinis ng kasalukuyang kasaysayan ng pag-uusap at memorya. Sigurado ka bang gusto mong i-reset?",
  },
  Home: {
    NewChat: "Bagong Chat",
    DeleteChat: "Kumpirmahin ang pagbura ng napiling pag-uusap?",
    DeleteToast: "Natanggal ang Chat",
    Revert: "Ibalik",
  },
  Settings: {
    Title: "Mga Setting",
    SubTitle: "Lahat ng mga Setting",
    Danger: {
      Reset: {
        Title: "I-reset ang Lahat ng mga Setting",
        SubTitle: "I-reset ang lahat ng mga item ng setting sa default",
        Action: "I-reset",
        Confirm: "Kumpirmahin ang pag-reset ng lahat ng mga setting sa default?",
      },
      Clear: {
        Title: "Burahin ang Lahat ng Data",
        SubTitle: "Burahin ang lahat ng mga mensahe at mga setting",
        Action: "Burahin",
        Confirm: "Kumpirmahin ang pagbura ng lahat ng mga mensahe at mga setting?",
      },
    },
    Lang: {
      Name: "Wika", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Lahat ng mga Wika",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Laki ng Font",
      SubTitle: "I-adjust ang laki ng font ng laman ng chat",
    },
    InputTemplate: {
      Title: "Input Template",
      SubTitle: "Ang pinakabagong mensahe ay magiging laman ng template na ito",
    },
    Update: {
      Version: (x: string) => `Bersyon: ${x}`,
      IsLatest: "Pinakabagong bersyon",
      CheckUpdate: "Suriin ang Update",
      IsChecking: "Sinusuri ang update...",
      FoundUpdate: (x: string) => `Nakita ang bagong bersyon: ${x}`,
      GoToUpdate: "I-update",
    },
    SendKey: "Send Key",
    Theme: "Tema",
    TightBorder: "Mahigpit na Border",
    SendPreviewBubble: {
      Title: "I-preview ang Bula ng Ipadala",
      SubTitle: "I-preview ang markdown sa bula",
    },
    Mask: {
      Splash: {
        Title: "Maskara ng Splash Screen",
        SubTitle: "Ipakita ang maskara ng splash screen bago magsimula ang bagong chat",
      },
      Builtin: {
        Title: "Itago ang Builtin na Mga Maskara",
        SubTitle: "Itago ang mga builtin na maskara sa listahan ng maskara",
      },
    },
    Prompt: {
      Disable: {
        Title: "I-disable ang auto-completion",
        SubTitle: "Mag-input ng / upang pukawin ang auto-completion",
      },
      List: "Listahan ng Mga Prompt",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      Edit: "I-edit",
      Modal: {
        Title: "Listahan ng Mga Prompt",
        Add: "Magdagdag ng Isa",
        Search: "Maghanap ng Mga Prompt",
      },
      EditModal: {
        Title: "I-edit ang Prompt",
      },
    },
    HistoryCount: {
      Title: "Bilang ng Mga Naka-attach na Mensahe",
      SubTitle: "Bilang ng mga ipinadala na mga mensahe na naka-attach bawat request",
    },
    CompressThreshold: {
      Title: "History Compression Threshold",
      SubTitle:
        "Magkukompres kung lumampas sa sukat ang mga hindi pa naka-kompres na mga mensahe",
    },
    Token: {
      Title: "API Key",
      SubTitle: "Gamitin ang iyong key upang hindi limitahan ang access code",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "Account Balance",
      SubTitle(used: any, total: any) {
        return `Ginamit ngayong buwan ${used}, subscription ${total}`;
      },
      IsChecking: "Sinusuri...",
      Check: "Suriin",
      NoAccess: "Maglagay ng API Key para suriin ang balanse",
    },
    AccessCode: {
      Title: "Access Code",
      SubTitle: "Naka-enable ang access control",
      Placeholder: "Kailangan ng Access Code",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Ang pasadyang endpoint ay dapat magsimula sa http(s)://",
    },
    Model: "Modelo",
    Temperature: {
      Title: "Temperatura",
      SubTitle: "Ang mas malaking halaga ay nagbibigay ng mas random na output",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Huwag baguhin ang halagang ito kasama ang temperatura",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Pinakamahabang haba ng mga input token at mga na-generate na token",
    },
    PresencePenalty: {
      Title: "Presence Penalty",
      SubTitle:
        "Ang mas malaking halaga ay nagdaragdag ng posibilidad na pag-usapan ang mga bagong paksa",
    },
    FrequencyPenalty: {
      Title: "Frequency Penalty",
      SubTitle:
        "Ang mas malaking halaga ay nagpapababa ng posibilidad na paulit-ulit na sabihin ang parehong linya",
    },
  },
  Store: {
    DefaultTopic: "Bagong Usapan",
    BotHello: "Hello! Paano ko kayo matutulungan ngayon?",
    Error: "May naganap na error, subukan muli mamaya.",
    Prompt: {
      History: (content: string) =>
        "Ito ay isang buod ng kasaysayan ng chat bilang isang recap: " + content,
      Topic:
        "Mangyaring gumawa ng isang apat hanggang limang salita na pamagat na naglalarawan ng ating usapan na walang anumang lead-in, bantas, tanda ng panipi, punto, simbolo, o karagdagang teksto. Alisin ang mga nakapalibot na tanda ng panipi.",
      Summarize:
        "Buodin nang maikli ang diskusyon sa 200 salita o mas mababa upang gamitin bilang prompt para sa hinaharap na konteksto.",
    },
  },
  Copy: {
    Success: "Kinopya sa clipboard",
    Failed: "Nabigo ang pagkopya, mangyaring bigyan ng pahintulot ang access sa clipboard",
  },
  Context: {
    Toast: (x: any) => `May ${x} pangkontekstong prompt`,
    Edit: "Kasalukuyang Mga Setting ng Chat",
    Add: "Magdagdag ng Prompt",
    Clear: "Malinaw",
    Revert: "Ibalik",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Maskara",
    Page: {
      Title: "Template ng Prompt",
      SubTitle: (count: number) => `${count} mga template ng prompt`,
      Search: "Maghanap ng Mga Template",
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
        `I-edit ang Template ng Prompt ${readonly ? "(readonly)" : ""}`,
      Download: "I-download",
      Clone: "Kopyahin",
    },
    Config: {
      Avatar: "Avatar ng Bot",
      Name: "Pangalan ng Bot",
      Sync: {
        Title: "Gamitin ang Global Config",
        SubTitle: "Gamitin ang global config sa chat na ito",
        Confirm: "Kumpirmahin ang pag-override ng custom config gamit ang global config?",
      },
      HideContext: {
        Title: "Itago ang Mga Pangkontekstong Prompt",
        SubTitle: "Huwag ipakita ang mga pangkontekstong prompt sa chat",
      },
      Share: {
        Title: "Ibahagi ang Maskarang Ito",
        SubTitle: "Gumawa ng link papunta sa maskarang ito",
        Action: "Kopyahin ang Link",
      },
    },
  },
  NewChat: {
    Return: "Bumalik",
    Skip: "Magsimula na Lang",
    Title: "Pumili ng Maskara",
    SubTitle: "Kumausap sa Kaluluwa sa Likod ng Maskara",
    More: "Maghanap ng Higit pa",
    NotShow: "Huwag Ipakita Muli",
    ConfirmNoShow: "Kumpirmahin ang pag-disable? Maaari mong paganahin ito sa mga setting mamaya.",
  },

  UI: {
    Confirm: "Kumpirmahin",
    Cancel: "Kanselahin",
    Close: "Isara",
    Create: "Lumikha",
    Edit: "I-edit",
  },
  Exporter: {
    Model: "Modelo",
    Messages: "Mga Mensahe",
    Topic: "Paksa",
    Time: "Oras",
  },
};

export default ph;
