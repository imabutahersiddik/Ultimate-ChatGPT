import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const bw: RequiredLocaleType = {
  WIP: "O tla itshwara...",
  Error: {
    Unauthorized:
      "Ga gona thuso ya go kopana, ka kopo dirisa dipotso bakeng sa tokiso mo [auth](/#/auth) ya pele.",
  },
  Auth: {
    Title: "E fetoga kode ya sekao",
    Tips: "Ka kopo dirisa kode ya sekao ka hareng",
    Input: "Kode ya sekao",
    Confirm: "Thibela",
    Later: "Nako e latelang",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} dikhutshwane`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} dikhutshwane le The ChatGPT`,
    Actions: {
      ChatList: "Tsena mo letlha la dikutshwane",
      CompressedHistory: "Dikutlwelo tsa dikgato tse dikgabane",
      Export: "Dira diforomo tsa dikhutshwane tse di lekanaganang le Markdown",
      Copy: "Tlhola",
      Stop: "Fimela",
      Retry: "Kenya lethloba mo go",
      Delete: "E sa fetsa",
    },
    InputActions: {
      Stop: "Fimela",
      ToBottom: "Mo mong rang?",
      Theme: {
        auto: "Disente tse dinnye",
        light: "Disente tse ditlhare",
        dark: "Disente tse didimale",
      },
      Prompt: "Dikgato",
      Masks: "Ditshebediso",
      Clear: "Kossiera mokgafo",
      Settings: "O sepele",
    },
    Rename: "Tumelo Chat",
    Typing: "Terara…",
    Input: (submitKey: string) => {
      var inputHints = `Tshimolohong ya gago e ${
        submitKey
      } wa go dira ka teng`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Feta + Enter wa go pharola";
      }
      return inputHints + ", / ya go hlalosa dikgato";
    },
    Send: "Dira",
    Config: {
      Reset: "Pharola go tsohe",
      SaveAs: "Botlalo jwa Marang",
    },
  },
  Export: {
    Title: "Dišetšwa tse di dirisweng",
    Copy: "Kopiša tše dingwe",
    Download: "Bala",
    MessageFromYou: "Merang gapegile",
    MessageFromChatGPT: "Merang gapegile le The ChatGPT",
    Share: "Tlhoka go thuša Share ya KiAsk",
    Format: {
      Title: "Sešetšo sa ye ntle",
      SubTitle: "Markdown bokgoni le PNG tlipeng",
    },
    IncludeContext: {
      Title: "Go gontši dikgato",
      SubTitle: "Ka go roba dikgato tsa mokgwa wa go bofelelong",
    },
    Steps: {
      Select: "Khetha",
      Preview: "Re nka",
    },
  },
  Select: {
    Search: "Tshela",
    All: "Khetha tše dingwe",
    Latest: "Khetha gore bontshi botse",
    Clear: "Kossiera",
  },
  Memory: {
    Title: "Tlhaloso ya dinwalo",
    EmptyContent: "Ga gona sepheo fela.",
    Send: "Dira Dinwalo",
    Copy: "Kopiša Dinwalo",
    Reset: "Pharola lepona",
    ResetConfirm:
      "Go pharola ka go kossiera tlhahlo ya maswabi ka dinako tsa gore dipokanye tse di setšhaba tse diredilweng le sesupo se sengwe. O na leboga gore o rata go pharola?",
  },
  Home: {
    NewChat: "Chat e ngwe",
    DeleteChat: "Na o amogelela go e sa fetsa dipalo tše di fetileng?",
    DeleteToast: "Chat e feditšwe",
    Revert: "Pharola go tsohe",
  },
  Settings: {
    Title: "Dipoelo",
    SubTitle: "Bokgoni jwa dipoelo tše dingwe",
    Actions: {
      ClearAll: "Kossiera dipalo tše ledimo tše di lekanago",
      ResetAll: "Pharola dipelo tše ledimo tše di lekanago",
      Close: "Tsela",
      ConfirmResetAll: "Na o amogelela go pharola dipalo tša mpe moo ditlotlontlhotlho di buang ka mo,?",
      ConfirmClearAll: "Na o amogelela go pharola dipalo tša sedimo ka mo?,",
    },
    Lang: {
      Name: "Sešetšo", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Sešetšo se se lekanago",
    },
    Avatar: "Botoga",
    FontSize: {
      Title: "Mesefa ya fond",
      SubTitle: "Bocha mesefa ya setšhaba se seng gago",
    },
    Update: {
      Version: (x: string) => `Motse: ${x}`,
      IsLatest: "Motse wa go ya ka gona",
      CheckUpdate: "Sha motse",
      IsChecking: "Ya motsewa...",
      FoundUpdate: (x: string) => `Motse yo o fetileng: ${x}`,
      GoToUpdate: "Phetogo",
    },
    SendKey: "Thoma Kode",
    Theme: "Disente",
    TightBorder: "Mapapadi a Mmasogo",
    SendPreviewBubble: {
      Title: "Tse nte dikgakolodi",
      SubTitle: "Bokgoni jwa go nka dikhomo go ngwaga",
    },
    Mask: {
      Title: "Shara sekao sa masokola",
      SubTitle: "Re kgonya sekgala se sentle pele go tsebago go dira dete chat e fetelela",
    },
    Prompt: {
      Disable: {
        Title: "Konyana ya diketelelelo",
        SubTitle: "Kopa / go baakanya diketelelo tse dikgethang ka teng",
      },
      List: "Leina la Diketelelo",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} go tlhabolola, ${custom} go ithutela/modiredi wa user-defined`,
      Edit: "Go tlosa",
      Modal: {
        Title: "Leina la Diketelelo",
        Add: "Lo gate",
        Search: "Tshelela Diketelelo",
      },
      EditModal: {
        Title: "Edita Diketelelo",
      },
    },
    HistoryCount: {
      Title: "Dikgato tse di selekang Diphoolo",
      SubTitle: "Tlhaloso ya dikhutshwane tse šonang tša konokono bakeng sa tiro",
    },
    CompressThreshold: {
      Title: "Bokgoni jwa dikakologo tša mokgatlo",
      SubTitle:
        "Dilemo tša dikgato di tla dikipa ka thulaganyo ya go kgopolang dikgato",
    },
    Token: {
      Title: "Kopo ya API",
      SubTitle: "Go galama kopo ya gago gore o sware matlotlo",
      Placeholder: "Kopo ya OpenAI API",
    },
    Usage: {
      Title: "Akauting ya Setšhaba",
      SubTitle(used: any, total: any) {
        return `O diriša ka gonne $${used}, mošomo $${total} ka ngwaga`;
      },
      IsChecking: "Ya mošomo wa bokga...",
      Check: "Sha",
      NoAccess: "Kopa o ruta kopo ya API gore o tlo itsa saldo",
    },
    AccessCode: {
      Title: "Kode ya Sekao",
      SubTitle: "Tirelo e sotlago",
      Placeholder: "Laetša Kode ya Sekao",
    },
    Endpoint: {
      Title: "Tlhabo ya mošomo",
      SubTitle: "Endpoint e e šomišitšweng e tla sekaseka ka http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Marangwa",
      SubTitle: "Marangwa ao me e tlhagisa morago mo go botlhokwa wa botlalo",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Thulaganyo ya lerapo la diphuthu le ditephu di bua ka teng",
    },
    PresencePenalty: {
      Title: "Bono ba Phutstosing",
      SubTitle:
        "Marangwa ao me e tlhagisa mebala ya gore ba be ba tlotlang diterane tše di latelang",
    },
  },
  Store: {
    DefaultTopic: "Utlwisiso Motse wa Chat",
    BotHello: "Dumela!Ke eng ke ka o fetoloha molao?",
    Error: "Kgonego eno o dirile morago mo go feta, ka kopo a nke o ya pelo ya gago mo go direto.",
    Prompt: {
      History: (content: string) =>
        "Gapegwa mo kgatisong ya chat leketlolelo ya mefuta e botoka. " + content,
      Topic:
        "Kopa ruta mmalwa o mongwe yo monate yo se molemo gore e nne maele a pefokano ya rona kafa, go se okare dihakelo, phepafatswana, mofutaane, tšhokele e kgolo ka teng ka tlase.",
      Summarize:
        "Phepafatsa go wela fa ofe fa 200 go sepele, e bile o kgopela SEOPELO gos nya ntle mo botlhokwane jwa tlhaloso.",
    },
  },
  Copy: {
    Success: "Kopišwa go buluwe",
    Failed: "Go botsa go feteša, ka kopo a galame ka mokgwa wa tšehetso ya dibokone",
  },
  Context: {
    Toast: (x: any) => `Le ${x} mofutaane wa dikgato ya lefase`,
    Edit: "Dikgato tse di botoka le ditaelo tše",
    Add: "Lo gate mofutaane",
    Clear: "Kossiera",
    Revert: "Pharola go tsohe",
  },
  Plugin: {
    Name: "Seremi",
  },
  Mask: {
    Name: "Phofedi",
    Page: {
      Title: "Ditokomišo tša mofutaane",
      SubTitle: (count: number) => `${count} ditokomišo tša mofutaane`,
      Search: "Tshelela ditokomišo",
      Create: "Ruta",
    },
    Item: {
      Info: (count: number) => `${count} dikhutshwane`,
      Chat: "Chat",
      View: "Rontsha Shopo",
      Edit: "Tlosa",
      Delete: "E sa fetsa",
      DeleteConfirm: "Di tliša le fa ditebodelo?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Tlosa Pharaphara ya Mofutaane ${readonly ? "(bediamo)" : ""}`,
      Download: "Bala",
      Clone: "Gopotša",
    },
    Config: {
      Avatar: "Botoga",
      Name: "Mofutaane oa Bot",
      Sync: {
        Title: "Tumela Kgonthe ya Lefase",
        SubTitle: "Tumela kgonthe ya lefase mo chat eno",
        Confirm: "Tsephisa gore o etelele ditaelo tša motlakase le taelo tša lefase?",
      },
      HideContext: {
        Title: "Futswa mofutaane wa dikgato",
        SubTitle: "Dumela mofutaane wa dikgato mo chat",
      },
    },
  },
  NewChat: {
    Return: "Thabisa",
    Skip: "Fetela",
    Title: "Khetha Phofedi",
    SubTitle: "Chat le lefase sa mofutaane",
    More: "Tshela di ka ke",
    NotShow: "Gore dirwe gore se apare ka go bua?",
    ConfirmNoShow: "Na o tshelelela go fihetša? O tla fihla thaha mo dipoelong tša sephiri mo go direto go fetolwa ka go sepele.",
  },

  UI: {
    Confirm: "Tshepela",
    Cancel: "Nkaofa",
    Close: "Sebeditse",
    Create: "Phatlalatša",
    Edit: "Tloša",
  },
};

export default bw;
