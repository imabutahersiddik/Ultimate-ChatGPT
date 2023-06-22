const en = {
  WIP: "Ndanndite...",
  Error: {
    Unauthorized:
      "Gannaangoonan daafa, ngoni naati koodu jammingal 'Auth'(ko/#/auth) seftarnde ne.",
  },
  Auth: {
    Title: "Cikin Koodi Ne",
    Tips: "Danna koodi akanan",
    Input: "koodi",
    Confirm: "Tinaiti",
    Later: "Suba",
  },
  ChatItem: {
    ChatItemCount: (count) => `${count} njatigi`,
  },
  Chat: {
    SubTitle: (count) => `${count} njatigi tungi The ChatGPT`,
    Actions: {
      ChatList: "Shiga tungi",
      CompressedHistory: "Compressed History Memory Prompt",
      Export: "Latsa duk njatigi a kyauta na Markdown",
      Copy: "Sake gwada",
      Stop: "Duba",
      Retry: "Sake gwada",
      Delete: "Share",
    },
    InputActions: {
      Stop: "Duba",
      ToBottom: "Ga mafi ruwa",
      Theme: {
        auto: "Kasha",
        light: "Kashi ƙaramin launi",
        dark: "Kashi ƙaffe",
      },
      Prompt: "Mene-ne",
      Masks: "Mene-ne",
      Clear: "Iya sake gwada ƙarin",
      Settings: "Bayanan",
    },
    Rename: "Badde Suna",
    Typing: "Na buga...",
    Input: (submitKey) => {
      var inputHints = `Ƙarin ${submitKey}`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += " , adireshin + enter don shirya";
      }
      return inputHints + " , / don bincika mene-ne";
    },
    Send: "Sake",
    Config: {
      Reset: "Sake gwada zuwa jumla",
      SaveAs: "Ajiye gumi",
    },
  },
  Export: {
    Title: "Latsa duk njatigi",
    Copy: "Kwabo duk",
    Download: "Sauke",
    MessageFromYou: "Rubutun daga ku",
    MessageFromChatGPT: "Rubutun daga The ChatGPT",
    Share: "Share to KiAsk Share",
    Format: {
      Title: "Garken Latsa Duk",
      SubTitle: "Markdown ko PNG hoto",
    },
    IncludeContext: {
      Title: "Kan bincike mene-ne",
      SubTitle: "Kwabo amfani da mene-ne ko ba",
    },
    Steps: {
      Select: "Zaɓuwa",
      Preview: "Preview",
    },
  },
  Select: {
    Search: "Bincike",
    All: "Zaɓuwa duk",
    Latest: "Zaɓuwa mafi ƙarshe",
    Clear: "Sauke",
  },
  Memory: {
    Title: "Memory Prompt",
    EmptyContent: "Babu abin da ɗum ke nuna.",
    Send: "Sake kasuwancin memory",
    Copy: "Sake gwada memory",
    Reset: "Sake gwada yin kwafin",
    ResetConfirm:
      "Idona zai zamanto talakawa maimakon harshe da kuma taganni. Kuna da muku yin talakawa?",
  },
  Home: {
    NewChat: "Matsayi tungi",
    DeleteChat: "Jawo alamar da kake so jawo yanayin aikata?",
    DeleteToast: "Tungi mai aikata",
    Revert: "Saurare",
  },
  Settings: {
    Title: "Bayanan",
    SubTitle: "Duka Bayanan",
    Actions: {
      ClearAll: "Sauke duk bayanin",
      ResetAll: "Sauke duk bayanin",
      Close: "Yi nema",
      ConfirmResetAll: "Kuna da muku sau sau da bayanin?",
      ConfirmClearAll: "Kuna da muku sauka duk data?",
    },
    Lang: {
      Name: "Harshe", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Duk fasaha",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Font Size",
      SubTitle: "Sabi'i font size na ɗon babban abin da ya zama",
    },
    Update: {
      Version: (x) => `Babban tasha: ${x}`,
      IsLatest: "Tasha na gaba",
      CheckUpdate: "Duba tasha",
      IsChecking: "An duba tasha...",
      FoundUpdate: (x) => `An samu babban tasha: ${x}`,
      GoToUpdate: "Shiga tsakanin tantasar",
    },
    SendKey: "Sake koodi",
    Theme: "Cikin launi",
    TightBorder: "Ƙarin ƙari",
    SendPreviewBubble: {
      Title: "Sake Preview Bubble",
      SubTitle: "Preview markdown akan bubble",
    },
    Mask: {
      Title: "Tarfifa fistingin",
      SubTitle: "Nuna tarfifa fistingin kafin fara matsayin tungi mafi kyau",
    },
    Prompt: {
      Disable: {
        Title: "Disable auto-completion",
        SubTitle: "Tungi ku don starfa / don karyawa",
      },
      List: "Mene-ne",
      ListCount: (builtin, custom) =>
        `${builtin} abin iya gaya, ${custom} mene ne da aka tallafa mai amfani`,
      Edit: "Shirya",
      Modal: {
        Title: "Mene-ne",
        Add: "Ƙara kangen wannan",
        Search: "Bincike mene-ne",
      },
      EditModal: {
        Title: "Shirya mene-ne",
      },
    },
    HistoryCount: {
      Title: "Lissafin amfani akan rubutu",
      SubTitle: "Namban rubutun da suka kai a lokacin a yi",
    },
    CompressThreshold: {
      Title: "Tozar lissafin amfani",
      SubTitle: "Tozawa idan lissafin rubutu saga mote rubutun",
    },
    Token: {
      Title: "API Key",
      SubTitle: "Yi amfani da lafiya ta koodu",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "Account Balance",
      SubTitle(used, total) {
        return `An buɗe cikin wata bako $${used}, katin $${total}`;
      },
      IsChecking: "An duba...",
      Check: "Duba",
      NoAccess: "Danna API Key domin duba 'yanar gizo",
    },
    AccessCode: {
      Title: "Koodi ajiya",
      SubTitle: "Aijiya ajiyar haramtace",
      Placeholder: "Inkana da koodinta",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Endpoint ta samun jumla kan afkar da http(s)://",
    },
    Model: "sunan",
    Temperature: {
      Title: "sunan",
      SubTitle: "Masu sunan da kuma sakamakon masaniya da ya kara yi",
    },
    MaxTokens: {
      Title: "Karin rubutu",
      SubTitle: "Mafi karancin cikakken tokunai masu amfani da masu kammala",
    },
    PresencePenalty: {
      Title: "Karin raba m",
      SubTitle:
        "Karin kara sau dai da cewa zai iya magana akan abubuwa m",
    },
  },
  Store: {
    DefaultTopic: "Taki baki sabon yanayin",
    BotHello: "Sannu! Me yasa za ku iya ban mamaki yau?",
    Error: "Dole ne ku kan sauye, a sake gwada su a lokacin biyayya.",
    Prompt: {
      History: (content) =>
        "Wannan shi ne buɗewar bayanin tungi na bukatar azagewa: " + content,
      Topic:
        "Don buɗe tarihin mu tun bayaninmu akan matsayin sannan na yi inji haɗin-zuwa, wuraren-zuwa, raɗiyo, haɗin, alama ko kuma wani abu. Yayyana duƙi ne",
      Summarize:
        "Rufe azanci na jerin 200 na rubutaccen idi na ƙarƙashin ɗan nema don amfani da daya tarihin a sama",
    },
  },
  Copy: {
    Success: "An sake gwada domin wannan lambar cibiyar tace",
    Failed: "An sake gwada ba ya kamata 'yanke rawa domin da'awar gwada",
  },
  Context: {
    Toast: (x) => `Tare da ${x} manyanen kayan aiki`,
    Edit: "Mene-ne da Memory Prompts",
    Add: "Ƙara a Birni",
    Clear: "Iya sake gwada ƙarin",
    Revert: "Saurare",
  },
  Plugin: {
    Name: "Mene-ne",
  },
  Mask: {
    Name: "Tarfifa fistingin",
    Page: {
      Title: "Ƙiranka gabdorder",
      SubTitle: (count) => `${count} template template`,
      Search: "Bincike Fulfulde",
      Create: "Ƙara",
    },
    Item: {
      Info: (count) => `${count} mene-ne`,
      Chat: "Chati",
      View: "Duba",
      Edit: "Shirya",
      Delete: "Share",
      DeleteConfirm: "Tinaiti don share?",
    },
    EditModal: {
      Title: (readonly) =>
        `Shirya shatkafi ${readonly ? "(readonly)" : ""}`,
      Download: "Sauke",
      Clone: "Kwiyar",
    },
    Config: {
      Avatar: "Bot Avatar",
      Name: "Bot Name",
      Sync: {
        Title: "Amfani da Global Config",
        SubTitle: "Amfani da global config a wannan tungi",
        Confirm: "Yi tunatar da kan kwafin bayanai na na duniyar?",
      },
      HideContext: {
        Title: "Ƙara masuɗi kayan aiki",
        SubTitle: "Babu nuna masuɗi kayan in aikin tungi",
      },
    },
  },
  NewChat: {
    Return: "Gudu",
    Skip: "Jan shirye",
    Title: "Zabi Ƙarin",
    SubTitle: "Catera tare da haɗi na mai suna",
    More: "Yi rijista",
    NotShow: "Babu algaita kuma",
    ConfirmNoShow: "Tinaitin ciki `yanke? Ka iya sa-ran ka ji mummunan kula a kan maɓallin.",
  },

  UI: {
    Confirm: "Tinaiti",
    Cancel: "So",
    Close: "Yi nema",
    Create: "Ƙiranta",
    Edit: "Shirya",
  },
};

export default ci;