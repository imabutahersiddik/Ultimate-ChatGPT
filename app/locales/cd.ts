import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const cd: RequiredLocaleType = {
  WIP: "Yeka Petee...",
  Error: {
    Unauthorized:
      "Boloba bandi, towebi kalenderi katu kibeni mokolo [auth](/#/auth) page.",
  },
  Auth: {
    Title: "Koteka kodi ya suka",
    Tips: "Tomona kodi ya suka nabu",
    Input: "Kodi ya suka",
    Confirm: "Kanisa",
    Later: "Na mokano",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} bapata`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} bapata ne The ChatGPT`,
    Actions: {
      ChatList: "Hindikila ba bapata",
      CompressedHistory: "Compressed History Memory Prompt",
      Export: "Etala ba bapata badi bati mingongo",
      Copy: "Pabula",
      Stop: "Lokola",
      Retry: "Pesa komeli",
      Delete: "Pona kozela",
    },
    InputActions: {
      Stop: "Lokola",
      ToBottom: "Mukakoli",
      Theme: {
        auto: "Kalendekale",
        light: "Kutanga ya Kumpala",
        dark: "Kutanga ya Kati",
      },
      Prompt: "Mingongo",
      Masks: "Masks",
      Clear: "Ponela Context",
      Settings: "Kondesha",
    },
    Rename: "Dikanka Nsingi",
    Typing: "Kobayanda...",
    Input: (submitKey: string) => {
      var inputHints = `Penua ${submitKey} ko tobata`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter ko kinukisi";
      }
      return inputHints + ", / ko somba mingongo ya suka";
    },
    Send: "Tosomba",
    Config: {
      Reset: "Bongela komezela",
      SaveAs: "Epanza ko yapumi",
    },
  },
  Export: {
    Title: "Etalisa ba bapata",
    Copy: "Duplicata kabu",
    Download: "Tengisa",
    MessageFromYou: "Ndenge na we",
    MessageFromChatGPT: "Ndenge na The ChatGPT",
    Share: "Ekandamuna mu KiAsk Share",
    Format: {
      Title: "Format ya etalaka",
      SubTitle: "Markdown ko PNG misanka",
    },
    IncludeContext: {
      Title: "Okotundu Context",
      SubTitle: "Etala mingongo ya suka na mask o ya katangayi",
    },
    Steps: {
      Select: "Koteka",
      Preview: "Koteka",
    },
  },
  Select: {
    Search: "Somba",
    All: "Koteka kabasu",
    Latest: "Koteka ya Dibi-dibi",
    Clear: "Ponela",
  },
  Memory: {
    Title: "Mingongo ya Suka",
    EmptyContent: "Tusi bimenye.",
    Send: "Bosomele mukanda ya suka",
    Copy: "Pabula mukanda ya suka",
    Reset: "Ponga sesiki",
    ResetConfirm:
      "Ya soma kufuta iyi ngando ya kokambenyeya ya kobenangana ne Context Catche ne Memory. Okofya kudekokesa kuna koteka kwende kutinga?",
  },
  Home: {
    NewChat: "Hindikila Peti mpya",
    DeleteChat: "Jikila katihende katitumeli kokolanwa lokola kotela ngando ya sombu?",
    DeleteToast: "Ngando ya ba bapata ibopa",
    Revert: "Qabya",
  },
  Settings: {
    Title: "Makumbusho",
    SubTitle: "Yonso Makumbusho",
    Actions: {
      ClearAll: "Ponela Ako bapata Yonso",
      ResetAll: "Bongela Ako Makumbusho Yonso",
      Close: "Ponela",
      ConfirmResetAll: "Oya komoni kona yonso tokokushe apona kuna manzite?",
      ConfirmClearAll: "Oya komoni kuna tusi bimenye yonso tokoksuse?",
    },
    Lang: {
      Name: "Lupangi", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Lupangi ikulu",
    },
    Avatar: "Mpeta",
    FontSize: {
      Title: "Lufwankulu luwa Tshitanganu",
      SubTitle: "Kolimbile lufwankulu wa bapata",
    },
    Update: {
      Version: (x: string) => `VersTshine: ${x}`,
      IsLatest: "Kujeya versi yatushi",
      CheckUpdate: "Ko kolimbila versi",
      IsChecking: "Angulara kolimbila...",
      FoundUpdate: (x: string) => `Yakolimbile iyi versi yatapita: ${x}`,
      GoToUpdate: "Lokola",
    },
    SendKey: "Tuma kodi",
    Theme: "Tshitanganu",
    TightBorder: "Kukantima Tondi",
    SendPreviewBubble: {
      Title: "Koteka Ndenge ya Koyaputa",
      SubTitle: "Koteka markdown muna bela mu bangandu",
    },
    Mask: {
      Title: "Buff-toko ya Mask",
      SubTitle: "Kuda buff-toko ya mask ne ikolila peti mpya",
    },
    Prompt: {
      Disable: {
        Title: "Kuteka koliffululuka",
        SubTitle: "Somba / kudilama koliffululuka",
      },
      List: "Mia Mingongo ya Suka",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} mia-panzi, ${custom} mankanda alya bapangi`,
      Edit: "Mongosolela",
      Modal: {
        Title: "Mia ye Mingongo ya Suka",
        Add: "Toteya Mingongo",
        Search: "Somba ba mingongo ya suka",
      },
      EditModal: {
        Title: "Mongosolela Mingongo",
      },
    },
    HistoryCount: {
      Title: "Milingi ya ba bapata bayakolaka",
      SubTitle: "Mokolo wa mingongo ya pompa yapat nyonso ya sombu",
    },
    CompressThreshold: {
      Title: "Milingi ya pompa bayakolaka",
      SubTitle:
        "Bayasonta balimbeli betu yawe bayakolaka bakunda mingongo mia-panzi fonde wakumenti",
    },
    Token: {
      Title: "API Key",
      SubTitle: "Tumina kodi yowe koye kokolima kotoba kobulubu",
      Placeholder: "Kodi ya OpenAI API",
    },
    Usage: {
      Title: "Nsonga Mamilu",
      SubTitle(used: any, total: any) {
        return `Tumina this month $${used}, subscription $${total}`;
      },
      IsChecking: "Kolimbila ne...",
      Check: "Ko kolimbila",
      NoAccess: "Tuma Kodi ya API ko kolimbila nsonga mamilu",
    },
    AccessCode: {
      Title: "Kodi ya Yokolakata",
      SubTitle: "Tobuti muko ba pata ne koti keya",
      Placeholder: "Yeya Kodi ya Yokolakata",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Endpoint ya wino mokambenyeya ka koye kutano nayo http(s)://",
    },
    Model: "Modeli",
    Temperature: {
      Title: "Temperature",
      SubTitle: "Kolimba tokosala yatu diyi pompa ya kontena e.",
    },
    MaxTokens: {
      Title: "Mingongo ya Max",
      SubTitle: "Milingayo ya mikili ye tokosale ne mingongo ya bapata bayakolaka",
    },
    PresencePenalty: {
      Title: "Penoni ya Semanemana",
      SubTitle:
        "Kyakuziba kela pompa ikola mu bulenga nezero bampacte mibonzo",
    },
  },
  Store: {
    DefaultTopic: "Katihende ya Kutanga Ne",
    BotHello: "Mbote! Kutuvuna yasombalaki bukwite?",
    Error: "Tusi musanka, toyaye ko kalendekale basombi na musanga.",
    Prompt: {
      History: (content: string) =>
        "Iyi ni makoluba ne ba bapata mingongo pompa oyo: " + content,
      Topic:
        "Bongela musanga yobe dito-dito kuambata na lishiku nionko, ilungu, lidimbu la misatu, makondesha, kose nokufikise tungenaye na makokatua ma diyi.",
      Summarize:
        "Bongela kozongisa lobundu kuna 200 mingongo na mikili ya sika, toandike kuna makumbusho alya fisuna.",
    },
  },
  Copy: {
    Success: "Okunyemelela pakati-mukwondo",
    Failed: "Tunduliya pakati-mukwondo, toglete mukonyesho ekolimbila kunda",
  },
  Context: {
    Toast: (x: any) => `Mbakina na ${x} mingongo ya suka`,
    Edit: "Mingongo ya Context ne Memory",
    Add: "Toteya Mingongo",
    Clear: "Ponela",
    Revert: "Qabya",
  },
  Plugin: {
    Name: "Plugini",
  },
  Mask: {
    Name: "Mask",
    Page: {
      Title: "Koteka Lusinga",
      SubTitle: (count: number) => `${count} mia wa mingongo ya lusinga`,
      Search: "Somba ma lusinga",
      Create: "Soma",
    },
    Item: {
      Info: (count: number) => `${count} mingongo`,
      Chat: "Chat",
      View: "Koteka",
      Edit: "Mongosolela",
      Delete: "Pona",
      DeleteConfirm: "Awe, kelangana kotangamuna na?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Mongosolela Mingongo ya Lusoga ${readonly ? "(yofumuna)" : ""}`,
      Download: "Yandama",
      Clone: "Ntumba",
    },
    Config: {
      Avatar: "Mpeta",
      Name: "Nyena",
      Sync: {
        Title: "Tena Config",
        SubTitle: "Tena config lulu ne ba bapata babyakolihyehye",
        Confirm: "Kelangana kobona na media config na tena config?",
      },
      HideContext: {
        Title: "Nyebela mingongo ya suka",
        SubTitle: "Talekela mingongo ya suka mu chat",
      },
    },
  },
  NewChat: {
    Return: "Kelangana",
    Skip: "Akongisyo",
    Title: "Ba musanga oya tingashi",
    SubTitle: "Kosola na ba musanga mu musanu mubi",
    More: "Kosala mingongo",
    NotShow: "Nyebela lobundu",
    ConfirmNoShow:
      "Kelangana kobona kotika ndengasi. Kokanisa kelangana kuna masungu lokola.",
  },
  UI: {
    Confirm: "Kelangana",
    Cancel: "Kokuma",
    Close: "Ponela",
    Create: "Yokola",
    Edit: "Mongosolela",
  },
};

export default cd;
