import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const en: RequiredLocaleType = {
  WIP: "Hamutuku...",
  Error: {
    Unauthorized:
      "Hinakuy chukaikuna, atik Rayku napakunata| [auth](/#/auth) kani rurakunaka sati.",
  },
  Auth: {
    Title: "Access Code tukuyankichishkina",
    Tips: "Atik Rayku tukuyankichishka",
    Input: "access code tukuyankichina",
    Confirm: "Raysunchik",
    Later: "Purina",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} shuk shuti`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} shuk The ChatGPT shinashka`,
    Actions: {
      ChatList: "Chat Shukka|",
      CompressedHistory: "Kurmun historiku keninka",
      Export: "Export All Messages as Markdown",
      Copy: "Copy",
      Stop: "Tukuyankichina",
      Retry: "Retry",
      Delete: "Delete",
    },
    InputActions: {
      Stop: "Tukuyankichina",
      ToBottom: "To Latest",
      Theme: {
        auto: "Auto",
        light: "Light Theme",
        dark: "Dark Theme",
      },
      Prompt: "Prompts",
      Masks: "Prompts",
      Clear: "Clear Context",
      Settings: "Settings",
    },
    Rename: "Chat shukka kichuna",
    Typing: "Rikurishka…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} sipi`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter wrap shinashka";
      }
      return inputHints + ", / Prompts parisunchikta";
    },
    Send: "Punchay",
    Config: {
      Reset: "Allpamanta Killushka",
      SaveAs: "Save as Prompts",
    },
  },
  Export: {
    Title: "Shuk Shutipakta",
    Copy: "Copy All",
    Download: "Download",
    MessageFromYou: "Shuk shuti shinashka",
    MessageFromChatGPT: "Shuk shuti The ChatGPT shinashka",
    Share: "Kicharichina KiAsk Share",
    Format: {
      Title: "Shuk shuti Format",
      SubTitle: "Markdown o PNG Image",
    },
    IncludeContext: {
      Title: "Kikuna kontext inkingarina",
      SubTitle: "Kikuna context prompts mask shinashka",
    },
    Steps: {
      Select: "Rutsakta",
      Preview: "Preview",
    },
  },
  Select: {
    Search: "Shuk shuti rutsachina",
    All: "Shuk Shutichina",
    Latest: "Apita shuk shutina",
    Clear: "Clear",
  },
  Memory: {
    Title: "Memory Prompt shinashka",
    EmptyContent: "Mana yalli kallarirkurishkina.",
    Send: "Send Memory",
    Copy: "Copy Memory",
    Reset: "Reset Session",
    ResetConfirm:
      "Resetting will clear the current conversation history and historical memory. Are you sure you want to reset?",
  },
  Home: {
    NewChat: "New Chat",
    DeleteChat: "Confirm to delete the selected conversation?",
    DeleteToast: "Chat Deleted",
    Revert: "Revert",
  },
  Settings: {
    Title: "Settings shinashka",
    SubTitle: "Shikichirina Settings",
    Actions: {
      ClearAll: "Allpamanta Killushka Data",
      ResetAll: "Allpamanta Killushka Settings",
      Close: "Close",
      ConfirmResetAll: "All configuracionesmi killushkamanta rimarikuchirkani?",
      ConfirmClearAll: "All data mi killushkamanta rimarikuchirkani?",
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Shuk Shutichina Languages|",
    },
    Avatar: "Avatar shinashka",
    FontSize: {
      Title: "Shuk Shutipakta hugru",
      SubTitle: "Chat Wampra Shuk Shutimi hugru",
    },
    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Shimi Version stinganatina",
      CheckUpdate: "Check Update",
      IsChecking: "Checking update...",
      FoundUpdate: (x: string) => `Found new version: ${x}`,
      GoToUpdate: "Update",
    },
    SendKey: "Send Key",
    Theme: "Theme shinashka",
    TightBorder: "Tight Border shinashka",
    SendPreviewBubble: {
      Title: "Send Preview Bubble shinashka",
      SubTitle: "Markdown rikunapi shinashka",
    },
    Mask: {
      Title: "Prompt Splash Screen shinashka",
      SubTitle: "Starting new chat shinashka maska wamprina prompt shaktikunata",
    },
    Prompt: {
      Disable: {
        Title: "Auto-completion shinashka unplushkakuna",
        SubTitle: "/ ishpingakunapi auto-completion shinashka",
      },
      List: "Prompt Shaktikuna",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      Edit: "Edit shinashka",
      Modal: {
        Title: "Prompt Shaktikuna",
        Add: "Add One",
        Search: "Search Prompts",
      },
      EditModal: {
        Title: "Edit Prompt shinashka",
      },
    },
    HistoryCount: {
      Title: "Chaskina Shuk Shutiyanki Count",
      SubTitle: "Shuk shutimi tukuyankichinaka shinashkariki chaymanta",
    },
    CompressThreshold: {
      Title: "Shuk Shutiyanki Compress Threshold shinashka",
      SubTitle:
        "Compress shinashkapi, shuk shuti karkanchiman hapina",
    },
    Token: {
      Title: "API Key shinashka",
      SubTitle: "Key shinashmanta uraykuna kirinakurin",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "Account Balance shinashka",
      SubTitle(used: any, total: any) {
        return `Used this month $${used}, subscription $${total}`;
      },
      IsChecking: "Tukuyankichinaka...",
      Check: "Tukuyankichinaka",
      NoAccess: "Enter API Key to check balance",
    },
    AccessCode: {
      Title: "Access Code shinashka",
      SubTitle: "Access control shinashka",
      Placeholder: "Access Code kinakuna",
    },
    Endpoint: {
      Title: "Endpoint shinashka",
      SubTitle: "Custom endpoint http(s):// pakti shinashka",
    },
    Model: "Model shinashka",
    Temperature: {
      Title: "Temperature shinashka",
      SubTitle: "Massi lurashka shinayachirkani",
    },
    MaxTokens: {
      Title: "Max Tokens shinashka",
      SubTitle: "Prompts shinapashkakanakunawan shuk shutiyankunawan",
    },
    PresencePenalty: {
      Title: "Presence Penalty shinashka",
      SubTitle:
        "Massi makikunata rakishkani, shinayachirkani chaywan shuk shutin karkana",
    },
  },
  Store: {
    DefaultTopic: "Chat shuk shuti",
    BotHello: "Hello! Huarmi kichina tukuyankichishka?",
    Error: "Something went wrong, please try again later.",
    Prompt: {
      History: (content: string) =>
        "This is a summary of the chat history as a recap: " + content,
      Topic:
        "Please generate a four to five word title summarizing our conversation without any lead-in, punctuation, quotation marks, periods, symbols, or additional text. Remove enclosing quotation marks.",
      Summarize:
        "Summarize the discussion briefly in 200 words or less to use as a prompt for future context.",
    },
  },
  Copy: {
    Success: "Copied to clipboard",
    Failed: "Copy failed, please grant permission to access clipboard",
  },
  Context: {
    Toast: (x: any) => `With ${x} contextual prompts`,
    Edit: "Contextual and Memory Prompts",
    Add: "Add a Prompt",
    Clear: "Context Cleared",
    Revert: "Revert",
  },
  Plugin: {
    Name: "Plugin shinashka",
  },
  Mask: {
    Name: "Prompt shinashka",
    Page: {
      Title: "Prompt Template shinashka",
      SubTitle: (count: number) => `${count} prompt templates`,
      Search: "Search Templates",
      Create: "Create",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Chat shinashka",
      View: "View shinashka",
      Edit: "Edit shinashka",
      Delete: "Delete shinashka",
      DeleteConfirm: "Confirm to delete?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Prompt Template ${readonly ? "(readonly)" : ""}`,
      Download: "Download",
      Clone: "Clone shinashka",
    },
    Config: {
      Avatar: "Bot Avatar shinashka",
      Name: "Bot Name shinashka",
      Sync: {
        Title: "Use Global Config shinashka",
        SubTitle: "Use global config in this chat shinashka",
        Confirm: "Confirm to override custom config with global config?",
      },
      HideContext: {
        Title: "Hide Context Prompts shinashka|",
        SubTitle: "Do not show in-context prompts in chat shinashka",
      },
    },
  },
  NewChat: {
    Return: "Return shinashka",
    Skip: "Just Start shinashka",
    Title: "Pick a Prompt shinashka",
    SubTitle: "Chat with tha pre setted Prompt shinashka",
    More: "Find More shinashka",
    NotShow: "Never Show Again shinashka",
    ConfirmNoShow: "Confirm to disable？You can enable it in settings later.",
  },

  UI: {
    Confirm: "Confirm shinashka",
    Cancel: "Cancel shinashka",
    Close: "Close shinashka",
    Create: "Create shinashka",
    Edit: "Edit shinashka",
  },
};

export default ec;
