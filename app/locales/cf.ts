const sg: RequiredLocaleType = {
  WIP: "Koyamba ti na sona...",
  Error: {
    Unauthorized:
      "Bayan da aka daina buƙatar damuwa, da fad’in yin shigarwar kalmar shiga cikin [tallace](/#/auth).",
  },
  Auth: {
    Title: "Da buƙatar kalmar damuwa",
    Tips: "Don Allah shigar access code guda har zuwa",
    Input: "Access code",
    Confirm: "Taimaka",
    Later: "Dole",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} wasu jerin kalmar da suka tsallaka`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} kalmar masu zafi tare da The ChatGPT`,
    Actions: {
      ChatList: "Zama zuwa jerin kalmar",
      CompressedHistory: "Mafi masu jin jita masu na jin jita masu zarar",
      Export: "Bayar da duk wani jerin kalmar a cikin Markdown",
      Copy: "Kwafa",
      Stop: "Sake",
      Retry: "Sake ƙayarwa",
      Delete: "Share",
    },
    InputActions: {
      Stop: "Sake",
      ToBottom: "zuwa Gaba",
      Theme: {
        auto: "Auto",
        light: "Zahiri kewayen",
        dark: "Zahiri mai kan jijjiga",
      },
      Prompt: "Guidance",
      Masks: "Masks",
      Clear: "Clear Context",
      Settings: "Saiti",
    },
    Rename: "Canza anfani mai damar kalmar",
    Typing: "Rubutawa ...",
    Input: (submitKey: string) => {
      var inputHints = `Yi kwafa ${submitKey}`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Harara + Rubutu don shirye-shirye";
      }
      return inputHints + ", / don bincike masu aikata a matsayin ‘search prompts’";
    },
    Send: "Aika",
    Config: {
      Reset: "Yi siffar da Asali",
      SaveAs: "Ajiye da Kafa",
    },
  },
  Export: {
    Title: "Bayar da jerin kalmar",
    Copy: "Kwafa duk",
    Download: "Sauke",
    MessageFromYou: "Kalmar Daga Ku",
    MessageFromChatGPT: "Kalmar Daga The ChatGPT",
    Share: "Rasha zuwa KiAsk Share",
    Format: {
      Title: "Bayar da Format",
      SubTitle: "Markdown ko abun baka damu",
    },
    IncludeContext: {
      Title: "Tare da Mu",
      SubTitle: "Bayar da guidan a baya a matsayin mask or ba",
    },
    Steps: {
      Select: "Zaɓar",
      Preview: "Zirga-zirga",
    },
  },
  Select: {
    Search: "Bincike",
    All: "Zaɓar Duka",
    Latest: "Zaɓar Najeriya",
    Clear: "Tsige",
  },
  Memory: {
    Title: "Kyakken kalmar",
    EmptyContent: "Babu abu aka sani ba.",
    Send: "Aika Kyakkyawan",
    Copy: "Kwafa kyakkyawan",
    Reset: "Sake yankewa",
    ResetConfirm:
      "Sanin zai sauke daya gaba aiki katin kalmar abin da kuka so ki zo a cikin zamanin yanayin da aka samu? Ka tabbata kada ka so ka sake yankewa?",
  },
  Home: {
    NewChat: "Rubutun Sabuwar Kalma",
    DeleteChat: "Samma batun kalma ne?",
    DeleteToast: "Kalma yana share",
    Revert: "Maimuyi",
  },
  Settings: {
    Title: "Saiti",
    SubTitle: "Duk Saitunan",
    Actions: {
      ClearAll: "Share Dafatan Duka Bayanai",
      ResetAll: "Kai Dukan Saitunan",
      Close: "Rufe",
      ConfirmResetAll: "Kuna ina buƙatar sai ku danganta duk ayyukan?",
      ConfirmClearAll: "Kuna ina buƙatar sai ku danganta duk bayanai?",
    },
    Lang: {
      Name: "Larabci", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Duk Harsuna",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Hada Barazana Rubutu",
      SubTitle: "Canza hada barazana da content da kanistaɗi",
    },
    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Najeriya na ayyukan",
      CheckUpdate: "Duba Ayyukan",
      IsChecking: "Ana dubawa...",
      FoundUpdate: (x: string) => `Ana samu sabon version: ${x}`,
      GoToUpdate: "Sabbo",
    },
    SendKey: "Aika ta Kalami",
    Theme: "Zahiri",
    TightBorder: "Haddin kafa",
    SendPreviewBubble: {
      Title: "Yi Kira Kan Wani Rairai da Sa",
      SubTitle: "Nuna markdown a rairai",
    },
    Mask: {
      Title: "Zaɓin Denki Ta Dan Kalma",
      SubTitle: "Nuna wani ɗagayawa na zanci bayan an fara kalma muku",
    },
    Prompt: {
      Disable: {
        Title: "Tsirara Binciken Iyali",
        SubTitle: "Shigar da / don tallawa bincike a cikin",
      },
      List: "Jerin Bincike",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} buɗe, ${custom} mai goyon bayanai`,
      Edit: "Shirya",
      Modal: {
        Title: "Jerin Bincike",
        Add: "Ƙara wani",
        Search: "Bincike manhajar",
      },
      EditModal: {
        Title: "Shirya Bincike",
      },
    },
    HistoryCount: {
      Title: "Abubuwan Da’aika Kalmar",
      SubTitle: "Abun da za’aɓa a wurin waɗannan kalmar da aka siya",
    },
    CompressThreshold: {
      Title: "Hanyar shunkuli na Tarihi",
      SubTitle:
        "Zai shunkula idan bata daidaita yadda ake nuna kalmar a yankin yawan",
    },
    Token: {
      Title: "Tambayoyin Karin Kawo",
      SubTitle: "Yi amfani da kewayon ku don kuyi rikici na tagulla aiki",
      Placeholder: "Algaitaiiƙo OpenAI API",
    },
    Usage: {
      Title: "Saƙon wani na fare da ita",
      SubTitle(used: any, total: any) {
        return `Yawan sakon an fi kula har gida sun fi $${used}, ku bi shugaban sa ta dukan $${total}`;
      },
      IsChecking: "Ana dubawa...",
      Check: "Duba",
      NoAccess: "Ka shiga wasu takardun API don dubawa sakon",
    },
    AccessCode: {
      Title: "Kalmar aji",
      SubTitle: "Rufe nai na kalmar tayi amfani",
      Placeholder: "Gudanarwa ne kalmar",
    },
    Endpoint: {
      Title: "Gyara",
      SubTitle: "Gyara jizoci ne da ya dauka tare da http(s)://",
    },
    Model: "Sakon",
    Temperature: {
      Title: "Karin Hada Barazana",
      SubTitle: "Abu mai shafi mai da yawa ya kuma ƙiransa",
    },
    MaxTokens: {
      Title: "Baya Da Tokens",
      SubTitle: "Maximum karin kalmar da aka fi amfani dashi da kalmomin kalmar",
    },
    PresencePenalty: {
      Title: "Kafa Na Hatsin Rayuwa",
      SubTitle:
        "Abu mai koya ya buɗe nasara don talla waɗansu abubuwan da suke nuna bayyane",
    },
  },
  Store: {
    DefaultTopic: "Rubutun Sabuwar Kalma",
    BotHello: "Sannu! Shegen a cire ni?",
    Error: "Baƙin ciki ya fitar da kasuwanci, don Allah a sake gwadawa uku.",
    Prompt: {
      History: (content: string) =>
        "Wannan ne bangarori na kalmar a kan masanin: " + content,
      Topic:
        "Da Fitar da amfani da takaddun wani rubutun jerin muku a matsayin ‘summary’ da ba sake matukar da wakoki ba, ba yawan matukar da gudin ba, ba yawan matukar da lamba ba, ba yawan alama dabba ba, ba yawan abu da kuma wata kalma cikin gudun.",
      Summarize:
        "Cirani bincike fuka da kade-kade a cikin ƙaramin 200 akan rubutun da mu ka zaɓa ga ɗaya salula.",
    },
  },
  Copy: {
    Success: "Abbatar ya ajiye kewaye",
    Failed: "An kuskure, kada ku sake bani saiki faɗi kunnawa don fitarwa",
  },
  Context: {
    Toast: (x: any) => `Ga ${x} maskin siffar kusa`,
    Edit: "Maskin da Kyakkyawan Nazarta",
    Add: "Ajiye Kada",
    Clear: "Tsige",
    Revert: "Maimuyi",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Bincike",
    Page: {
      Title: "Ƙwarewar Bincike",
      SubTitle: (count: number) => `${count} latswaresu na bincike`,
      Search: "Bincike Manhajar",
      Create: "Sanya",
    },
    Item: {
      Info: (count: number) => `${count} latsa latsa`,
      Chat: "Rubuta Damuwa",
      View: "Duba",
      Edit: "Shirya",
      Delete: "Share",
      DeleteConfirm: "Bayanin da ake share?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Shirya Ƙwararru na Bincike ${readonly ? "(yanayin da ke ɗauki)" : ""}`,
      Download: "Sauke",
      Clone: "Tripple ku",
    },
    Config: {
      Avatar: "Bot Avatar",
      Name: "Sunan Bot",
      Sync: {
        Title: "Amfani da Ayyukan Masu Amfani",
        SubTitle: "Amfani da ayyukan masu amfani a wannan kalma",
        Confirm: "Taimaka don yayyane saiti masu aiki ne tare dafa sammata?",
      },
      HideContext: {
        Title: "Tsire Kyakkyawar Nazarta",
        SubTitle: "Annoba akan kyakkyawan wani kyakkyawan a matsayin chat",
      },
    },
  },
  NewChat: {
    Return: "Riko",
    Skip: "Fatar ba",
    Title: "Zabi Bincike",
    SubTitle: "Kalma tare da Prompt",
    More: "Nemi More",
    NotShow: "Ma A duba Ba",
    ConfirmNoShow: "Taimake don janiraa? Za ku iya samun sa a cikin saiti baƙin zamani.",
  },

  UI: {
    Confirm: "Taimaka",
    Cancel: "Terewa",
    Close: "Rufe",
    Create: "Sanya",
    Edit: "Shirya",
  },
};

export default cf;
