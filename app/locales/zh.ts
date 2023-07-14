import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

const zh: LocaleType = {
  WIP: "即將推出...",
  Error: {
    Unauthorized:
      "支持Ultimate ChatGPT，請通過Bkash (+880 1812-715289)或[Worldremit](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob)發送，手機錢包號碼：+880 1812-715289，以幫助我們改進和維護這個強大的Ultimate ChatGPT。",
  },
  Auth: {
    Title: "需要訪問碼",
    Tips: "請在下方輸入訪問碼",
    Input: "訪問碼",
    Confirm: "確認",
    Later: "以後",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count}條消息`,
  },
  Chat: {
    SubTitle: (count: number) => `${count}條消息`,
    Actions: {
      ChatList: "前往聊天列表",
      CompressedHistory: "壓縮的歷史記憶提示",
      Export: "導出所有消息為Markdown",
      Copy: "複製",
      Stop: "停止",
      Retry: "重試",
      Pin: "標記",
      PinToastContent: "標記了2條消息作為上下文提示",
      PinToastAction: "查看",
      Delete: "刪除",
      Edit: "編輯",
    },
    Commands: {
      new: "開始新的聊天",
      newm: "使用遮罩開始新的聊天",
      next: "下一個聊天",
      prev: "上一個聊天",
      clear: "清除上下文",
      del: "刪除聊天",
    },
    InputActions: {
      Stop: "停止",
      ToBottom: "到最新",
      Theme: {
        auto: "自動",
        light: "亮色主題",
        dark: "暗色主題",
      },
      Prompt: "提示",
      Masks: "遮罩",
      Clear: "清除上下文",
      Settings: "設置",
    },
    Rename: "重命名聊天",
    Typing: "正在輸入...",
    Input: (submitKey: string) => {
      var inputHints = `按${submitKey}發送`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，Shift + Enter換行";
      }
      return inputHints + "，/搜索提示，:使用命令";
    },
    Send: "發送",
    Config: {
      Reset: "重置為默認值",
      SaveAs: "保存為遮罩",
    },
  },
  Export: {
    Title: "導出消息",
    Copy: "複製全部",
    Download: "下載",
    MessageFromYou: "你的消息",
    MessageFromChatGPT: "ChatGPT的消息",
    Share: "分享到KiAsk Share",
    Format: {
      Title: "導出格式",
      SubTitle: "Markdown或PNG圖片",
    },
    IncludeContext: {
      Title: "包含上下文",
      SubTitle: "在遮罩中導出上下文提示或不導出",
    },
    Steps: {
      Select: "選擇",
      Preview: "預覽",
    },
    Image: {
      Toast: "正在捕獲圖片...",
      Modal: "長按或右鍵單擊保存圖片",
    },
  },
  Select: {
    Search: "搜索",
    All: "全選",
    Latest: "選擇最新的",
    Clear: "清除",
  },
  Memory: {
    Title: "記憶提示",
    EmptyContent: "暫無記憶。",
    Send: "發送記憶",
    Copy: "複製記憶",
    Reset: "重置會話",
    ResetConfirm: "重置將清除當前的對話歷史和歷史記憶。確定要重置嗎？",
  },
  Home: {
    NewChat: "新聊天",
    DeleteChat: "確認刪除所選對話？",
    DeleteToast: "聊天已刪除",
    Revert: "撤銷",
  },
  Settings: {
    Title: "設置",
    SubTitle: "所有設置",
    Danger: {
      Reset: {
        Title: "重置所有設置",
        SubTitle: "將所有設置項重置為默認值",
        Action: "重置",
        Confirm: "確定要將所有設置重置為默認值嗎？",
      },
      Clear: {
        Title: "清除所有數據",
        SubTitle: "清除所有消息和設置",
        Action: "清除",
        Confirm: "確定要清除所有消息和設置嗎？",
      },
    },
    Lang: {
      Name: "語言", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "所有語言",
    },
    Avatar: "頭像",
    FontSize: {
      Title: "字體大小",
      SubTitle: "調整聊天內容的字體大小",
    },

    InputTemplate: {
      Title: "輸入模板",
      SubTitle: "最新的消息將填充到此模板中",
    },

    Update: {
      Version: (x: string) => `版本：${x}`,
      IsLatest: "最新版本",
      CheckUpdate: "檢查更新",
      IsChecking: "正在檢查更新...",
      FoundUpdate: (x: string) => `發現新版本：${x}`,
      GoToUpdate: "更新",
    },
    SendKey: "發送鍵",
    Theme: "主題",
    TightBorder: "緊湊邊框",
    SendPreviewBubble: {
      Title: "發送預覽氣泡",
      SubTitle: "在氣泡中預覽Markdown",
    },
    Mask: {
      Splash: {
        Title: "遮罩啟動畫面",
        SubTitle: "在開始新聊天之前顯示一個遮罩啟動畫面",
      },
      Builtin: {
        Title: "隱藏內置遮罩",
        SubTitle: "在遮罩列表中隱藏內置遮罩",
      },
    },
    Prompt: {
      Disable: {
        Title: "禁用自動完成",
        SubTitle: "輸入/觸發自動完成",
      },
      List: "提示列表",
      ListCount: (builtin: number, custom: number) =>
        `內置提示${builtin}個，自定義提示${custom}個`,
      Edit: "編輯",
      Modal: {
        Title: "提示列表",
        Add: "添加",
        Search: "搜索提示",
      },
      EditModal: {
        Title: "編輯提示",
      },
    },
    HistoryCount: {
      Title: "附加消息數量",
      SubTitle: "每次請求附加的發送消息數量",
    },
    CompressThreshold: {
      Title: "歷史壓縮閾值",
      SubTitle: "如果未壓縮的消息長度超過該值，將進行壓縮",
    },
    Token: {
      Title: "API密鑰",
      SubTitle: "使用您的密鑰忽略訪問碼限制",
      Placeholder: "OpenAI API密鑰",
    },
    Usage: {
      Title: "帳戶餘額",
      SubTitle(used: any, total: any) {
        return `本月已用$${used}，訂閱$${total}`;
      },
      IsChecking: "正在檢查...",
      Check: "檢查",
      NoAccess: "輸入API密鑰以檢查餘額",
    },
    AccessCode: {
      Title: "訪問碼",
      SubTitle: "啟用訪問控制",
      Placeholder: "需要訪問碼",
    },
    Endpoint: {
      Title: "端點",
      SubTitle: "自定義端點必須以http(s)://開頭",
    },
    Model: "模型",
    Temperature: {
      Title: "溫度",
      SubTitle: "較大的值使輸出更隨機",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "請勿與溫度一起更改此值",
    },
    MaxTokens: {
      Title: "最大Tokens數量",
      SubTitle: "輸入tokens和生成的tokens的最大長度",
    },
    PresencePenalty: {
      Title: "存在懲罰",
      SubTitle: "較大的值增加談論新話題的可能性",
    },
    FrequencyPenalty: {
      Title: "頻率懲罰",
      SubTitle: "較大的值減少重複相同行的可能性",
    },
  },
  Store: {
    DefaultTopic: "新對話",
    BotHello: "你好！我今天能幫你什麼嗎？",
    Error: "出了些問題，請稍後再試。",
    Prompt: {
      History: (content: string) =>
        "這是聊天歷史的簡要摘要：" + content,
      Topic: "請生成一個由四到五個詞組成的標題，總結我們的對話，不包含引言、標點符號、引號、句號、符號或其他文本。刪除引號。",
      Summarize: "簡要概述討論內容，不超過200個字，以供以後使用。",
    },
  },
  Copy: {
    Success: "已複製到剪貼板",
    Failed: "複製失敗，請授予訪問剪貼板的權限",
  },
  Context: {
    Toast: (x: any) => `使用${x}個上下文提示`,
    Edit: "當前聊天設置",
    Add: "添加提示",
    Clear: "上下文已清除",
    Revert: "撤銷",
  },
  Plugin: {
    Name: "插件",
  },
  Mask: {
    Name: "遮罩",
    Page: {
      Title: "提示模板",
      SubTitle: (count: number) => `${count}個提示模板`,
      Search: "搜索模板",
      Create: "創建",
    },
    Item: {
      Info: (count: number) => `${count}個提示`,
      Chat: "聊天",
      View: "查看",
      Edit: "編輯",
      Delete: "刪除",
      DeleteConfirm: "確定要刪除嗎？",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `編輯提示模板${readonly ? "（只讀）" : ""}`,
      Download: "下載",
      Clone: "克隆",
    },
    Config: {
      Avatar: "機器人頭像",
      Name: "機器人名稱",
      Sync: {
        Title: "使用全局配置",
        SubTitle: "在此聊天中使用全局配置",
        Confirm: "確定要使用全局配置覆蓋自定義配置嗎？",
      },
      HideContext: {
        Title: "隱藏上下文提示",
        SubTitle: "在聊天中不顯示上下文提示",
      },
      Share: {
        Title: "分享此遮罩",
        SubTitle: "生成此遮罩的鏈接",
        Action: "複製鏈接",
      },
    },
  },
  NewChat: {
    Return: "返回",
    Skip: "直接開始",
    Title: "選擇遮罩",
    SubTitle: "與遮罩背後的靈魂聊天",
    More: "查找更多",
    NotShow: "不再顯示",
    ConfirmNoShow: "確定要禁用嗎？您可以稍後在設置中啟用它。",
  },

  UI: {
    Confirm: "確認",
    Cancel: "取消",
    Close: "關閉",
    Create: "創建",
    Edit: "編輯",
  },
  Exporter: {
    Model: "模型",
    Messages: "消息",
    Topic: "主題",
    Time: "時間",
  },
};

export default zh;