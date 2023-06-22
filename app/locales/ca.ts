import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const en: RequiredLocaleType = {
  WIP: "ᒪᑭᐦᑳᐠ...",
  Error: {
    Unauthorized:
      "ᐊᔩᐦᑲᒥᐢᑾᐦᒡ ᐅᔮᑎᓚᐦᑯᓯᑌᐠ᙮ ᐊᔮ ᑳ ᐅᑎ ᐦᑳᒥᔨᒡ ᕌᒥᐢ ᑖᑳᓈᔭᔦᑯᐠ᙮ [auth](/#/auth) ᐣ ᑮ ᑳᐸᔨ ᔨᔨ ᓇᐦ.",
  },
  Auth: {
    Title: "ᒑᒥ ᓄᐦᑳᔨ ᑳ",
    Tips: "ᐊᔩᒥ ᐸᔨ ᑳ ᑖᓄᐦᑯᔭᔨ",
    Input: "ᒑᔨᒡ ᔨᐦᑳ",
    Confirm: "ᒑᔨᒡ ᐢᑭᔑᑲᑖᐠ",
    Later: "ᒋᐸᑯᓇᐠ",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} ᐁᒥᒋᐣ`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} ᐁᒥᒋᐣ ᐣᒑᐣ The ChatGPT`,
    Actions: {
      ChatList: "ᑳᐢᑲᐣ ᐊᔩ ᐃᔅᑕᐣ",
      CompressedHistory: "ᑳᓄᐠ ᒥᔃᔑᑖᒋᑯᐣ ᓇᑌ ᑳᐢᖕ",
      Export: "ᐢᓂᑳᓐ ᐁᒥᒋᐣ ᑕ Markdown",
      Copy: "ᑎᗅᑕᓴ",
      Stop: "ᑭᐢᑳᐣ",
      Retry: "ᒁᑳ",
      Delete: "ᓂᐌ",
    },
    InputActions: {
      Stop: "ᑭᐢᑳᐣ",
      ToBottom: "ᑳᐱᓪ ᐅᔭ",
      Theme: {
        auto: "ᑭᒥᔑᐦᐃ",
        light: "ᐅᐢᑕᑲᐣ ᑭᒥᔑᐦᐃ",
        dark: "ᐁᔪᑯᔑᕽ ᑭᒥᔑᐦᐃ",
      },
      Prompt: "ᐊᐠ ᐃᔭᒉᑳ",
      Masks: "ᐊᐢᑃᔭᒉᑯᐣ",
      Clear: "ᑖᑳᔨ ᑳᐱᖕ",
      Settings: "ᑕᓄᓂᐛ",
    },
    Rename: "ᐃᔭᒉᑳᔪ ᑳᐱᖕ",
    Typing: "ᐃᔭᒉᐣ...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} ᕄᔭᓇ`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter ᐃᖅᓯᖅᑲᑐᐠ";
      }
      return inputHints + ", / ᐁᒥᙱᑲᐠ ᐊᑕᔭᔨᒡ";
    },
    Send: "ᑕᔭ",
    Config: {
      Reset: "ᑖᑳᔨ ᑳ ᑐᓛᖑ",
      SaveAs: "ᒪᑲᐣ ᓇᐃᓂᑕ ᐁᑕ",
    },
  },
  Export: {
    Title: "ᐊᔭᓂᑲᐣ ᐁᒥᒋᐣᐠ",
    Copy: "ᑎᗅᑕᓴ ᐁᒥᒋᐣᒥᐠ",
    Download: "ᐊᖃᐅ",
    MessageFromYou: "ᒣ ᒥᔂ ᑳ",
    MessageFromChatGPT: "Message From The ChatGPT",
    Share: "ᑭᐊᔭᒃᐢ ᑳ ᑭᐊᔩ ᑲᓇᔃᔭ ᔮᖕ",
    Format: {
      Title: "ᐊᔭᓂᒋᑲᐣ ᐊᑕᐦᑲᐠ",
      SubTitle: "Markdown ᓇᐃ PNG ᐁᒥᒋᐣ",
    },
    IncludeContext: {
      Title: "ᐊᑕᐦᑲᑎᐦᐃᑲᐢ ᒣ ᖃᓇᕐᑕᒋᒥᔩᒡ",
      SubTitle: "ᒥᔃᓂᑲ ᐊᑕᐦᑲᑎᐦᐃᑐᐠ ᓂᓇᒣ ᑐᐠ ᓇᒥᔭᐠ",
    },
    Steps: {
      Select: "ᓂᖅ",
      Preview: "ᑕᓀᖅᒥ",
    },
  },
  Select: {
    Search: "ᑕᔭᔨᒡ",
    All: "ᐊᐠ ᑕᙱ",
    Latest: "ᐊᐠ ᑕᒥ",
    Clear: "ᑖᑳᔨ",
  },
  Memory: {
    Title: "ᒥᔃᔑᔐᐢ ᐊᙱᖕ",
    EmptyContent: "ᓂᐌᒥᐠ.",
    Send: "ᒥᔃᔑᔐᐣ ᑕᔭ",
    Copy: "ᑎᗅᑕᓴ ᒥᔃᔑᔐ",
    Reset: "ᑖᑳᔨ ᓆᔭᒋᐣ",
    ResetConfirm:
      "ᑖᑳᔨ ᔮᖕᐠ ᓂᑳᑎᓐ ᐊᑲᑯᓶᐠ ᓆᔭᓂᐠ ᐊᑕᖅ ᐊᔩᔦᐊᐠᙯᐠ ᔨᖅᖁᐸᐤ ᒁᖅᓯᖅᑲ?",
  },
  Home: {
    NewChat: "ᐊᒥᒃᑳᑐᐣᐢ",
    DeleteChat: "ᑲᐢᒣ ᑯᔪᐠ ᐊᔭᓂᐣ ᓂᐌᔪᓂᔨᒡ?",
    DeleteToast: "ᑲᐢᒣ ᓂᐌᔪᐤ ᑳ",
    Revert: "ᐃᔭᒉᐣ",
  },
  Settings: {
    Title: "ᑕᓄᓂᐛᐠ",
    SubTitle: "ᒉᔪᐦᑎᐠ ᐱᐸᒨᐊᔨᒡ",
    Actions: {
      ClearAll: "ᑖᑳᔨ ᕀᐸ",
      ResetAll: "ᑖᑳᔨ ᑐᓛᖑ ᐆᔭᓂᐤ",
      Close: "ᒁ",
      ConfirmResetAll: "ᑖᑳᔨ ᐊᑭ ᑐᓛᖑ ᑳᐸᑯᐣ?",
      ConfirmClearAll: "ᑖᑳᔨ ᐊᑭ ᑖᑳᔨ ᕀᐸ?",
    },
    Lang: {
      Name: "ᐊᔨ",
      All: "ᐊᐠ ᐊᔨᐦᑳᐠ",
    },
    Avatar: "ᐱᔥᕐ",
    FontSize: {
      Title: "ᐅᔮ ᐁᒥᒋᐣ",
      SubTitle: "ᐅᒃᑯᒧᔥᐦᐃᑲᐣ ᐁᒥᒋᐣᐠ",
    },
    Update: {
      Version: (x: string) => `ᑐᖓᑕ: ${x}`,
      IsLatest: "ᐸᔅᔭᐤ ᐊᔭᒥᖓᖗ",
      CheckUpdate: "ᐊᔭᓂᑲ ᔨᑳᐸᐣ",
      IsChecking: "ᑳᐸᓇᖓᖗ...",
      FoundUpdate: (x: string) => `ᐋᖅᔨ ᐊᔭᒥᖚᐣ: ${x}`,
      GoToUpdate: "ᐃᔭᓂᖃᖅ",
    },
    SendKey: "ᑕᔭ ᑳ",
    Theme: "ᐊᒪᐦᑲᑎᐦᐃ",
    TightBorder: "ᒪᐸᒧᐣ ᐁᒋᐣ",
    SendPreviewBubble: {
      Title: "ᐊᓂᔅᐸᕐᑎᕝ ᑕᒥᒌ ᑭᒥᔑᐦᐃ",
      SubTitle: "markdown ᑕᒥᒌ ᐊᐠ ᐃᑳᓐ ᐊᒪᐦᐃᑯᐣ ᐊᖕ ᔨᔨ",
    },
    Mask: {
      Title: "ᒪᑲᐣ ᑎᓂᑐᔨ",
      SubTitle: "ᐊᖑᓇᔩᔨ ᑳᑯᓂᐤ ᓂᓇᒧᐣ ᒣ ᓂᑳᑦᓂᐣ ᐱᐢᑋᔭᐠ",
    },
    Prompt: {
      Disable: {
        Title: "ᒫᑋᔭᐜᓂᖅᑐᑦ ᐊᑭ-ᐊᔭᒥᖅᑲᑐᐠ",
        SubTitle: "/ ᐊᑭᐸᓐ ᖃᐦᓂᓇᑲᒡ ᐃᑕᖕᖃᐠ",
      },
      List: "ᐊᔭᓂᖅᒋᑲᐣ",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} ᑳᔨ, ${custom} ᐃᓅᓯᔭᒉᒃᐣ`,
      Edit: "ᒫᔭ",
      Modal: {
        Title: "ᐊᔭᓂᖅᒋᑲᐣ",
        Add: "ᐊᔭᓇᐦᑳᓂᑦ",
        Search: "ᐊᔭᓂᑲᒥᔨᒡ ᑲᓇᐦ",
      },
      EditModal: {
        Title: "ᒫᔭ ᐊᔭᓂᖅᒋᑲᐣ",
      },
    },
    HistoryCount: {
      Title: "ᐃᒥᔃᔭ ᐁᒥᒋᐣᐠ ᑯᓯᒥᔪᐠ",
      SubTitle: "ᑳᖑᓇᔩᐣ ᑲᔪᔭ ᑎᑎᒧᔪᐠ ᓂᐌᔪᐠ ᙯᐸ",
    },
    CompressThreshold: {
      Title: "ᒥᖅᖃᓇᕐᖃᖅ ᑖᑳᔪᐠ ᐁᒥᒋᐣᐠ",
      SubTitle:
        "ᑖᑳᔪᐠ ᑲᔯᔅᓂᑲᑎᓐ ᐊᐃ ᒥᔃᔑᐦᐃᓂᐠ ᐸᔨᓐ ᐃᖅᓯᖅᑲᐣ ᐃᖅᑏᔪᐠ",
    },
    Token: {
      Title: "API ᒌᐦᑳ",
      SubTitle: "ᐃᔨᒉᐳᔨ ᐃᖅᓯᖅᑲᔩᒡ ᑳ ᐊᔭᒥᖅᑲᑐᐠ ᐃᑳᔨᒡ",
      Placeholder: "OpenAI API ᒌᐦᑳ",
    },
    Usage: {
      Title: "ᑐᖓᒋᓂᐣᙱᘗ",
      SubTitle(used: any, total: any) {
        return `ᑐᖓᑕ ᑯᔭ $${used}, ᑯᔭᕆᔪᐤ $${total}`;
      },
      IsChecking: "ᑳᐸᓇᖓᖗ...",
      Check: "ᐊᔭᓂᑲ ᑲᐸᐣ",
      NoAccess: "API ᒌᐦᑳ ᓂᓄᓇᕐᓂᖓᖗ ᕀᐸᐠ ᓂᖕᐠ ᐃᔭᒥᖓᖓ",
    },
    AccessCode: {
      Title: "ᐊᔭᑕᐦᒋ ᑳ",
      SubTitle: "ᐊᑭ-ᐊᔭᒥᖅᑲᑐᐠ ᐼᔭᔨᒡ",
      Placeholder: "ᑖᔨᒡ ᐊᔭᑕᐦᒋ",
    },
    Endpoint: {
      Title: "ᐅᔭᑭᖕᑲᙱᓇᐣ",
      SubTitle: "ᐊᓂᔭᒥᐣᐠ ᐃᑳᐢᑕᑲᐣ ᐋ",
    },
    Model: "ᐃᔔᔨᐠ",
    Temperature: {
      Title: "ᐁᕇᑯᖃᑖᐣ",
      SubTitle: "ᑳᐸᐠ ᐊᔅᔭᕀᖓᕈᓂᐠ ᖃᓇᕐᖕ ᓂᑕᒥᐠ ᐃᖅᔨᐠ",
    },
    MaxTokens: {
      Title: "ᖃᔭᐠ ᐁᒥᒋᐣ",
      SubTitle: "ᐊᔭᔨᑲᐠ ᐃᖅᔨᐠ ᓂᖕᐠ ᒧᔥᓇᒧᔪᐠ ᐃᖅᔨᐠ",
    },
    PresencePenalty: {
      Title: "ᐊᔭᒋᒃᓐ ᑳᑯᓂᐣ",
      SubTitle:
        "ᐊᔭᔨᒦᔫᐠ ᓂᖕᐠ ᐃᑲᓇᒥᔭᐠ ᐱᐢᑋᔭᐠ ᓂᓇᒧᐣ ᓂᖕᐠ ᖃᐦᓂᓇᑲᒡ",
    },
  },
  Store: {
    DefaultTopic: "ᒣ ᐱᖁᐅ ᐱᔥᔪᒡ",
    BotHello: "ᐁᔪ! ᒉᔪᐦᑎᐤ ᐊᔩᑭᐣ ᒌᔭᔩᑎᐦᐃᓂᐣ?",
    Error: "ᐊᕓᐤ ᒣ ᔭᒌᕆᐤ, ᑎᓯᕈᖕᐠ ᑎᔩᔩ ᐊᒻᑯᓂᐢ.",
    Prompt: {
      History: (content: string) =>
        "ᐄᔭᔩ ᒌᖃᖅ ᐴᑳᐣ ᐃᔅᓂᒋᐣ: " + content,
      Topic:
        "ᐃᔪᔭᐣ ᑳ ᔨᐦᑳᓇᑯᔭᐙᐠ ᓂᔮᑯᐣ ᑎᑎᐧᐊᔭᔩᐠ ᓍᐠ ᑎᑎᒧᔪᐠ, ᐊᔭᑎ ᐃᔮᑯᐠ, ᑳ ᓂᖃᕀᔭᐠ, ᓂᔮᖕ, ᔨᔨ ᓇᔅᔭᐠ ᐊᔬ.",
      Summarize:
        "ᒣᒣᔥᐦᐃᑲᐠ᙮ ᒣ ᑭᔨᒡ ᐱᔭᐠ ᓂᑯᔫᒋᓂᑲᐣ ᐁᒋᔭᐠ ᑳ ᒋᔭᑕᒡ ᓂᓇᔃᔭᔮᖅᙨᒥᔩᓂᑲᓂᐠ ᑳᔄᓂᒋᑲᐠ.",
    },
  },
  Copy: {
    Success: "ᑎᔩᔩᐠ ᔨᔨᑳᓕᖕ",
    Failed: "ᑎᔩᔩᐠ ᖃᑯᕕᖕ, ᓂᖕᔩᔪᐠ ᐱᓐᓐᓇᔅᔦᐊᕐᓂᕐᕆᐤᐠ ᐃᔭᒥᖓᖗ.",
  },
  Context: {
    Toast: (x: any) => `${x} ᐊᓂᔅᔭᕐᖕ ᑐᒫᔮ`,
    Edit: "ᐊᓂᔅᔭᕑᔫ ᐊᔭᓂᑲᐣ",
    Add: "ᐊᔭᓂᑲᐣ ᑳᐯᔨᒡ",
    Clear: "ᑖᔨᒡ",
    Revert: "ᐃᔭᒉᐣ",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "ᐊᔭᓂᖅᒋᑲᐣ",
    Page: {
      Title: "ᐊᔭᓂᖅᒋᑲᐣ ᐊᑕᐦᑲᐠ",
      SubTitle: (count: number) => `${count} ᐊᔭᓂᖅᒋᑲᐣᐢ`,
      Search: "ᐊᔭᓂᑲᒥᔨᒡ",
      Create: "ᐊᔭᓂᑲᐣ",
    },
    Item: {
      Info: (count: number) => `${count} ᐊᔭᓂᖅᒋᑲᐣᐢ`,
      Chat: "ᐊᔭᓂᖅᒋᑲᐣ",
      View: "ᓂᑕᒧᐣ",
      Edit: "ᒫᔭ",
      Delete: "ᓂᐌ",
      DeleteConfirm: "ᓂᐌᔪᐣᐠ ᑳ?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `ᒫᔭ ᐊᔭᓂᖅᒋᑲᐣ ${readonly ? "(ᐅᖅᔭᐤ)" : ""}`,
      Download: "ᐊᖃᐅ",
      Clone: "ᐊᑕᔭᓐ",
    },
    Config: {
      Avatar: "ᒌᒥᔥᐦᐃᔭᖕ",
      Name: "ᒌᒥᔥ",
      Sync: {
        Title: "ᐊᔭᓂᖅᒋᑲᐠ ᔨᒡ ᐊᔭᓂᑲᐣ",
        SubTitle: "ᐊᔭᓂᖅᒋᑲᐠ ᑐᓛᖑ ᐊᐠ ᐊᓴᔮᑲᐠ ᐊᔭᓂᒋᐣ ᐊᓂᔭᔨᒡ",
        Confirm: "ᑳᐹᑯᐣ ᓂᖕᐠ ᒥᑳᓂᖓᖗ ᑳᐸᑯᐣ ᑳᑯᓂᐠ?",
      },
      HideContext: {
        Title: "ᐊᐜᓇᖅᓂᒃᐣ ᐃᔭᒥᒥᔩᐣ",
        SubTitle: "ᐊᔭᓂᐠ ᐃᑲᓇᑯᐣ ᐃᔭᒥᒃᐣ ᐊᔭᓂᒥᐸᐣ ᐊᘖᙱᒡ",
      },
    },
  },
  NewChat: {
    Return: "ᐄᔭᒉᐣ",
    Skip: "ᐋᒋᔪᐠ",
    Title: "ᐱᖁᐅ ᒌᔭᔩ",
    SubTitle: "ᐋᒥᒃᑳᑐᐣ ᑳᓇᓯᐣ ᓂᑕᐧᐊᔭᔩᐠ",
    More: "ᐋᔭᑐᐦᑳᖅ",
    NotShow: "ᐃᔭᐳᐜᔭ ᑳᓂ",
    ConfirmNoShow: "ᑳᒧᖓᖓ ᖃᔭᕕᔭᓐ? ᐆᔭᓂᐣ ᑕᓂᖓᖅᕈᖓᔨᖅ ᓂᐃᑳᖅᒪᒧᐣ.",
  },

  UI: {
    Confirm: "ᐊᔃᔭᑲ",
    Cancel: "ᐊᔭᒋᒃ",
    Close: "ᒁ",
    Create: "ᐊᔭᓂᑲᐧᐊ",
    Edit: "ᒫᔭ",
  },
};

export default ca;
