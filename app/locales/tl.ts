import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

const tl: LocaleType = {
  WIP: "Darating sa lalong madaling panahon...",
  Error: {
    Unauthorized:
      "Suportahan ang Ultimate ChatGPT sa [Patreon](https://patreon.com/KiasK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link) o sa pamamagitan ng Bkash (+880 1812-715289), Ipadala gamit ang [Worldremit](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob), Mobile Wallet Number: +880 1812-715289 upang matulungan kami sa pagpapabuti at pagpapanatili ng makapangyarihang Ultimate ChatGPT na ito.",
  },
  Auth: {
    Title: "Kailangan ng Access Code",
    Tips: "Mangyaring maglagay ng access code sa ibaba",
    Input: "access code",
    Confirm: "Kumpirmahin",
    Later: "Sa ibang pagkakataon na lang",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} mga mensahe`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} mga mensahe`,
    Actions: {
      ChatList: "Pumunta sa Listahan ng Chat",
      CompressedHistory: "Compressed History Memory Prompt",
      Export: "I-export ang Lahat ng Mensahe bilang Markdown",
      Copy: "Kopyahin",
      Stop: "Itigil",
      Retry: "Subukan muli",
      Pin: "I-pin",
      PinToastContent: "Ipinin ang 2 mga mensahe bilang mga contextual prompt",
      PinToastAction: "Tingnan",
      Delete: "Tanggalin",
      Edit: "I-edit",
    },
    Commands: {
      new: "Simulan ang bagong chat",
      newm: "Simulan ang bagong chat na may maskara",
      next: "Susunod na Chat",
      prev: "Nakaraang Chat",
      clear: "Tanggalin ang Context",
      del: "Tanggalin ang Chat",
    },
    InputActions: {
      Stop: "Itigil",
      ToBottom: "Sa Pinakabagong",
      Theme: {
        auto: "Auto",
        light: "Maliwanag na Tema",
        dark: "Madilim na Tema",
      },
      Prompt: "Mga Prompt",
      Masks: "Mga Maskara",
      Clear: "Tanggalin ang Context",
      Settings: "Mga Setting",
    },
    Rename: "Palitan ang Pangalan ng Chat",
    Typing: "Nagtatype...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} para ipadala`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter para sa pagsasara";
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
    Title: "I-export ang Mensahe",
    Copy: "Kopyahin Lahat",
    Download: "I-download",
    MessageFromYou: "Mensahe Mula sa Iyo",
    MessageFromChatGPT: "Mensahe Mula sa ChatGPT",
    Share: "I-share sa KiAsk Share",
    Format: {
      Title: "Format ng Pag-export",
      SubTitle: "Markdown o PNG na Larawan",
    },
    IncludeContext: {
      Title: "Kasama ang Context",
      SubTitle: "I-export ang mga context prompt bilang maskara o hindi",
    },
    Steps: {
      Select: "Pumili",
      Preview: "Preview",
    },
    Image: {
      Toast: "Kinukuha ang Larawan...",
      Modal: "Mag-hold ng matagal o i-right click para i-save ang larawan",
    },
  },
  Select: {
    Search: "Maghanap",
    All: "Piliin ang Lahat",
    Latest: "Piliin ang Pinakabagong",
    Clear: "Tanggalin ang Lahat",
  },
  Memory: {
    Title: "Memory Prompt",
    EmptyContent: "Walang laman pa.",
    Send: "Ipadala ang Memory",
    Copy: "Kopyahin ang Memory",
    Reset: "I-reset ang Session",
    ResetConfirm:
      "Ang pag-reset ay maglilinis ng kasalukuyang kasaysayan ng pag-uusap at memorya ng nakaraan. Sigurado ka bang gusto mong mag-reset?",
  },
  Home: {
    NewChat: "Bagong Chat",
    DeleteChat: "Kumpirmahin ang pagtanggal ng piniling pag-uusap?",
    DeleteToast: "Natatanggal ang Chat",
    Revert: "Ibalik",
  },
  Settings: {
    Title: "Mga Setting",
    SubTitle: "Lahat ng Mga Setting",
    Danger: {
      Reset: {
        Title: "I-reset ang Lahat ng Mga Setting",
        SubTitle: "I-reset ang lahat ng mga setting item sa default",
        Action: "I-reset",
        Confirm: "Kumpirmahin ang pag-reset ng lahat ng mga setting sa default?",
      },
      Clear: {
        Title: "Tanggalin ang Lahat ng Data",
        SubTitle: "Tanggalin ang lahat ng mga mensahe at mga setting",
        Action: "Tanggalin",
        Confirm: "Kumpirmahin ang pagtanggal ng lahat ng mga mensahe at mga setting?",
      },
    },
    Lang: {
      Name: "Tagalog", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Lahat ng mga Wika",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Laki ng Font",
      SubTitle: "I-adjust ang laki ng font ng chat content",
    },

    InputTemplate: {
      Title: "Input Template",
      SubTitle: "Ang pinakabagong mensahe ay mapupunan sa template na ito",
    },

    Update: {
      Version: (x: string) => `Bersyon: ${x}`,
      IsLatest: "Pinakabagong bersyon",
      CheckUpdate: "Suriin ang Update",
      IsChecking: "Sinusuri ang update...",
      FoundUpdate: (x: string) => `Nakakita ng bagong bersyon: ${x}`,
      GoToUpdate: "I-update",
    },
    SendKey: "Send Key",
    Theme: "Tema",
    TightBorder: "Mahigpit na Border",
    SendPreviewBubble: {
      Title: "I-preview ang Send Bubble",
      SubTitle: "I-preview ang markdown sa bubble",
    },
    Mask: {
      Splash: {
        Title: "Mask Splash Screen",
        SubTitle: "Ipakita ang mask splash screen bago magsimula ang bagong chat",
      },
      Builtin: {
        Title: "Itago ang Builtin Masks",
        SubTitle: "Itago ang mga builtin maskara sa listahan ng maskara",
      },
    },
    Prompt: {
      Disable: {
        Title: "I-disable ang auto-completion",
        SubTitle: "Maglagay ng / upang simulan ang auto-completion",
      },
      List: "Listahan ng mga Prompt",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      Edit: "I-edit",
      Modal: {
        Title: "Listahan ng mga Prompt",
        Add: "Magdagdag ng Isa",
        Search: "Maghanap ng mga Prompt",
      },
      EditModal: {
        Title: "I-edit ang Prompt",
      },
    },
    HistoryCount: {
      Title: "Bilang ng mga Nakakabit na Mensahe",
      SubTitle: "Bilang ng mga ipinadala na mga mensahe na nakakabit bawat request",
    },
    CompressThreshold: {
      Title: "History Compression Threshold",
      SubTitle:
        "I-compress kung lumampas sa halaga ang haba ng mga mensahe na hindi pa compressed",
    },
    Token: {
      Title: "API Key",
      SubTitle: "Gamitin ang iyong key upang hindi maabala ng access code limit",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "Account Balance",
      SubTitle(used: any, total: any) {
        return `Ginamit ngayong buwan $${used}, subscription $${total}`;
      },
      IsChecking: "Sinusuri...",
      Check: "Suriin",
      NoAccess: "Maglagay ng API Key upang suriin ang balanse",
    },
    AccessCode: {
      Title: "Access Code",
      SubTitle: "Ang access control ay naka-enable",
      Placeholder: "Kailangan ng Access Code",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Ang pasadyang endpoint ay dapat magsimula sa http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperature",
      SubTitle: "Ang mas malaking halaga ay nagbibigay ng mas random na output",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Huwag baguhin ang halagang ito kasabay ng temperature",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Pinakamahabang haba ng mga input token at mga generated token",
    },
    PresencePenalty: {
      Title: "Presence Penalty",
      SubTitle:
        "Ang mas malaking halaga ay nagdaragdag ng posibilidad na pag-usapan ang mga bagong paksa",
    },
    FrequencyPenalty: {
      Title: "Frequency Penalty",
      SubTitle:
        "Ang mas malaking halaga ay nagpapababa ng posibilidad na ulitin ang parehong linya",
    },
  },
  Store: {
    DefaultTopic: "Bagong Usapan",
    BotHello: "Hello! Paano kita matutulungan ngayon?",
    Error: "May nangyaring mali, subukan muli mamaya.",
    Prompt: {
      History: (content: string) =>
        "Ito ay isang buod ng kasaysayan ng chat bilang isang buod: " + content,
      Topic:
        "Mangyaring gumawa ng isang apat hanggang limang salitang pamagat na naglalahad ng aming pag-uusap nang walang anumang lead-in, bantas, tanda ng panipi, puntos, mga simbolo, o karagdagang teksto. Alisin ang nasa loob na tanda ng panipi.",
      Summarize:
        "Buodin nang maikli ang talakayan sa 200 salita o mas kaunting bilang ng salita para gamitin bilang prompt para sa hinaharap na konteksto.",
    },
  },
  Copy: {
    Success: "Nakopya sa clipboard",
    Failed: "Hindi natapos ang pagkopya, mangyaring bigyan ng pahintulot ang access sa clipboard",
  },
  Context: {
    Toast: (x: any) => `May ${x} contextual prompts`,
    Edit: "Kasalukuyang Mga Setting ng Chat",
    Add: "Magdagdag ng Prompt",
    Clear: "Natanggal ang Context",
    Revert: "Ibalik",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Maskara",
    Page: {
      Title: "Prompt Template",
      SubTitle: (count: number) => `${count} mga template ng prompt`,
      Search: "Maghanap ng Mga Template",
      Create: "Gumawa",
    },
    Item: {
      Info: (count: number) => `${count} mga prompt`,
      Chat: "Chat",
      View: "Tingnan",
      Edit: "I-edit",
      Delete: "Tanggalin",
      DeleteConfirm: "Kumpirmahin ang pagtanggal?",
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
        Title: "Gamitin ang Global Config",
        SubTitle: "Gamitin ang global config sa chat na ito",
        Confirm: "Kumpirmahin ang pag-override ng custom config sa global config?",
      },
      HideContext: {
        Title: "Itago ang Context Prompts",
        SubTitle: "Huwag ipakita ang mga context prompt sa chat",
      },
      Share: {
        Title: "I-share ang Maskarang Ito",
        SubTitle: "Gumawa ng link para sa maskarang ito",
        Action: "Kopyahin ang Link",
      },
    },
  },
  NewChat: {
    Return: "Bumalik",
    Skip: "Magsimula na lang",
    Title: "Pumili ng Maskara",
    SubTitle: "Kumustahin ang Kaluluwa sa likod ng Maskara",
    More: "Maghanap ng Iba Pa",
    NotShow: "Huwag Ipakita Muli",
    ConfirmNoShow: "Kumpirmahin ang pag-disable? Maaari mong paganahin ito sa mga setting mamaya.",
  },

  UI: {
    Confirm: "Kumpirmahin",
    Cancel: "Kanselahin",
    Close: "Isara",
    Create: "Gumawa",
    Edit: "I-edit",
  },
  Exporter: {
    Model: "Model",
    Messages: "Mga Mensahe",
    Topic: "Paksa",
    Time: "Oras",
  },
};

export default tl;