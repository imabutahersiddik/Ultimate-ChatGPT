import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const ch: RequiredLocaleType = {
  WIP: "Vegn usché...",
  Error: {
    Unauthorized:
      "Access no autorisà, lura tegnir il cudesch da dretga en [auth](/#/auth) pagina.",
  },
  Auth: {
    Title: "Brisch esser il cudesch da dretga",
    Tips: "Si prega d'entrar il cudesch da dretga suta",
    Input: "cudesch da dretga",
    Confirm: "Confermar",
    Later: "Plü tard",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} messadis`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} messadis cun The ChatGPT`,
    Actions: {
      ChatList: "Ir a la lista da chats",
      CompressedHistory: "Prompt da la memorgia compressa",
      Export: "Exportar tut ils messadis sco Markdown",
      Copy: "Copiar",
      Stop: "Sprender",
      Retry: "Nova temptativa",
      Delete: "Stizzar",
    },
    InputActions: {
      Stop: "Sprender",
      ToBottom: "Bain tar ils davos",
      Theme: {
        auto: "Auto",
        light: "Tema clera",
        dark: "Tema scur",
      },
      Prompt: "Prompts",
      Masks: "Masks",
      Clear: "Stizzar il cuntegn",
      Settings: "Configuraziuns",
    },
    Rename: "Nov nom da chat",
    Typing: "Duain... ",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} per enviar`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter per ir a la proxima lingia";
      }
      return inputHints + ", / per tschertgar prompts";
    },
    Send: "Mandar",
    Config: {
      Reset: "Resetar a la predefiniziun",
      SaveAs: "Salvar sco maska",
    },
  },
  Export: {
    Title: "Exportar messadis",
    Copy: "Copiar tut",
    Download: "Download",
    MessageFromYou: "Messadi da ti",
    MessageFromChatGPT: "Messadi da The ChatGPT",
    Share: "Partir cun KiAsk Share",
    Format: {
      Title: "Format d'exportaziun",
      SubTitle: "Markdown u imatga PNG",
    },
    IncludeContext: {
      Title: "Cumprendi il context",
      SubTitle: "Exportar prompts da context sco maska u betg",
    },
    Steps: {
      Select: "Seleger",
      Preview: "Preview",
    },
  },
  Select: {
    Search: "Cherchar",
    All: "Seleger tut",
    Latest: "Seleger ils davos",
    Clear: "Stizzar",
  },
  Memory: {
    Title: "Prompt da la memorgia",
    EmptyContent: "Anc nagín.",
    Send: "Mandar la memorgia",
    Copy: "Copiar la memorgia",
    Reset: "Resetar la sesa",
    ResetConfirm:
      "In reset va tutti ils chats e l'istoric da la memorgia pers. Vus es glej? ",
  },
  Home: {
    NewChat: "Chat nov",
    DeleteChat: "Confermar da stizzar la chat stuada?",
    DeleteToast: "Chat stizzada",
    Revert: "Revertir",
  },
  Settings: {
    Title: "Configuraziuns",
    SubTitle: "Tut las configuraziuns",
    Actions: {
      ClearAll: "Stizzar tut las datas",
      ResetAll: "Resetar tut las configuraziuns",
      Close: "Serrar",
      ConfirmResetAll: "Tetg che vus vulais resetar tuts ils elements?",
      ConfirmClearAll: "Tetg che vus vulais stizzar tuts ils datas?",
    },
    Lang: {
      Name: "Lingua", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Tuttas linguas",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Mida dal caràtter",
      SubTitle: "Adattar la mida dal caràtter dal cuntenid dal chat",
    },
    Update: {
      Version: (x: string) => `Versiun: ${x}`,
      IsLatest: "Versiun actuala",
      CheckUpdate: "Controllar actualisaziuns",
      IsChecking: "Controllar actualisaziuns...",
      FoundUpdate: (x: string) => `Nova versiun chattada: ${x}`,
      GoToUpdate: "Actualizar",
    },
    SendKey: "Mussar la clav",
    Theme: "Tema",
    TightBorder: "Maur lat",
    SendPreviewBubble: {
      Title: "Send Preview Bubble",
      SubTitle: "Preview markdown in bubble",
    },
    Mask: {
      Title: "Mask Splash Screen",
      SubTitle: "Show a mask splash screen before starting new chat",
    },
    Prompt: {
      Disable: {
        Title: "Disabilitar l'acabament automatic",
        SubTitle: "Digitar / per aczender l'acabament automatic",
      },
      List: "Lista da prompts",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} incorporà, ${custom} defini da l'uzant`,
      Edit: "Modifitgar",
      Modal: {
        Title: "Lista da prompts",
        Add: "Adattar ina",
        Search: "Tscherchar prompts",
      },
      EditModal: {
        Title: "Modifitgar prompt",
      },
    },
    HistoryCount: {
      Title: "Quantitad da messadis attaches",
      SubTitle: "Numer da messadis mandads per dumond",
    },
    CompressThreshold: {
      Title: "Thrashold da compressiun da l'istoric",
      SubTitle:
        "Salvi in cas da la lunghezza da messadis anconpressads na fiss exasperada",
    },
    Token: {
      Title: "API Key",
      SubTitle: "Utilisescha ti clav per cuntrollar il limit d'access",
      Placeholder: "Clav OpenAI API",
    },
    Usage: {
      Title: "Saldo dal conto",
      SubTitle(used: any, total: any) {
        return `Utilisà quest mais $${used}, abunament $${total}`;
      },
      IsChecking: "Controlland...",
      Check: "Controllar",
      NoAccess: "Tschintgar API Key per controllar il saldo",
    },
    AccessCode: {
      Title: "Cudesch da dretga",
      SubTitle: "Control dad access è aczivà",
      Placeholder: "Brisch il cudesch da dretga",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "L'endpoint persunalisà duai cumenzar cun http(s)://",
    },
    Model: "Mudel",
    Temperature: {
      Title: "Temperatura",
      SubTitle: "Ina gronda valur fes il risultat dapli casual",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Numer maximal da tokens dad enconclusiun e da tokens genirads",
    },
    PresencePenalty: {
      Title: "Multa da presenza",
      SubTitle:
        "In'augmentaziun da la valur augmenta la probabilitad da tractar temas novs",
    },
  },
  Store: {
    DefaultTopic: "Chat nova",
    BotHello: "Tschau! Como posso esser d'ajuda adina?",
    Error: "Qualcosa ha id surrà, vegn probabelmaunit alura pli tard.",
    Prompt: {
      History: (content: string) =>
        "Quai è ina recapitulaziun da l'istoric dal chat: " + content,
      Topic:
        "Te chas fomular ina sumeglianza ad in titel d'inzatge cun trais fünf uords sin pausa, punctaziun, sings, puncts, simbols u text actual adaudin. Sbassar las dumbravais cuschinas.",
      Summarize:
        "Frammetter brevement il discurs en 200 uords u pli pauc per l'us per quests context viavischins.",
    },
  },
  Copy: {
    Success: "Copià sin il tàst",
    Failed: "Copiament errà, confermar permissions per utilisar il tàster",
  },
  Context: {
    Toast: (x: any) => `Cun ${x} prompts da context`,
    Edit: "Prompts da context e da memorgia",
    Add: "Adattar in prompt",
    Clear: "Stizzar il context",
    Revert: "Revertir",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Prompt",
    Page: {
      Title: "Model dal prompt",
      SubTitle: (count: number) => `${count} models da prompt`,
      Search: "Cherchar templates",
      Create: "Crear",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Chat",
      View: "View",
      Edit: "Modifitgar",
      Delete: "Stizzar",
      DeleteConfirm: "Confermar da stizzar?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Modifitgar il model da prompt ${readonly ? "(readonly)" : ""}`,
      Download: "Download",
      Clone: "Clunar",
    },
    Config: {
      Avatar: "Avatar dal bot",
      Name: "Num dal bot",
      Sync: {
        Title: "Utilisar la configuraziun globala",
        SubTitle: "Utilisar la configuraziun globala en quest chat",
        Confirm: "Confermar substituziun da la configuraziun persunala cun quella globala?",
      },
      HideContext: {
        Title: "Zuppentar ils prompts dal context",
        SubTitle: "Nauchtar ils prompts dal context en il chat",
      },
    },
  },
  NewChat: {
    Return: "Revenir",
    Skip: "Covent sa chattar",
    Title: "Tscherner in prompt",
    SubTitle: "Chattundscha cun il prompt predefinì",
    More: "A lur davart",
    NotShow: "Betg mussar pli",
    ConfirmNoShow: "Confermar da disattivar? Vus po rainactivar quel en las configuraziuns pli tard.",
  },

  UI: {
    Confirm: "Confermar",
    Cancel: "Annullar",
    Close: "Serrar",
    Create: "Crear",
    Edit: "Modifitgar",
  },
};

export default ch;