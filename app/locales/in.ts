import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const in: RequiredLocaleType = {
  WIP: "जल्द आ रहा है...",
  Error: {
    Unauthorized:
      "अनधिकृत पहुंच, कृपया [auth](/#/auth) पृष्ठ में पहुंच कोड दर्ज करें।",
  },
  Auth: {
    Title: "पहुंच कोड की आवश्यकता",
    Tips: "कृपया नीचे पहुंच कोड दर्ज करें",
    Input: "पहुंच कोड",
    Confirm: "पुष्टि करें",
    Later: "बाद में",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} संदेश`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} संदेश The ChatGPT के साथ`,
    Actions: {
      ChatList: "चैट सूची पर जाएं",
      CompressedHistory: "संक्षिप्त इतिहास मेमोरी प्रॉम्प्ट",
      Export: "सभी संदेशों को मार्कडाउन के रूप में निर्यात करें",
      Copy: "कॉपी करें",
      Stop: "रोकें",
      Retry: "पुनः प्रयास करें",
      Delete: "हटाएं",
    },
    InputActions: {
      Stop: "रोकें",
      ToBottom: "नवीनतम के पास",
      Theme: {
        auto: "ऑटो",
        light: "लाइट थीम",
        dark: "डार्क थीम",
      },
      Prompt: "प्रॉम्प्ट्स",
      Masks: "मास्क",
      Clear: "कंटेक्स्ट साफ़ करें",
      Settings: "सेटिंग्स",
    },
    Rename: "चैट का नाम बदलें",
    Typing: "टाइप कर रहा है...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} भेजने के लिए`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", व्राप करने के लिए Shift + Enter";
      }
      return inputHints + ", / प्रॉम्प्ट्स खोजने के लिए";
    },
    Send: "भेजें",
    Config: {
      Reset: "डिफ़ॉल्ट में रीसेट करें",
      SaveAs: "मास्क के रूप में सहेजें",
    },
  },
  Export: {
    Title: "संदेशों को निर्यात करें",
    Copy: "सभी कॉपी करें",
    Download: "डाउनलोड करें",
    MessageFromYou: "आपके द्वारा संदेश",
    MessageFromChatGPT: "The ChatGPT से संदेश",
    Share: "KiAsk Share पर साझा करें",
    Format: {
      Title: "निर्यात प्रारूप",
      SubTitle: "मार्कडाउन या PNG छवि",
    },
    IncludeContext: {
      Title: "संदर्भ शामिल करें",
      SubTitle: "मास्क में संदर्भ प्रॉम्प्ट शामिल करें या नहीं",
    },
    Steps: {
      Select: "चुनें",
      Preview: "पूर्वावलोकन",
    },
  },
  Select: {
    Search: "खोजें",
    All: "सभी का चयन करें",
    Latest: "नवीनतम के चयन करें",
    Clear: "साफ़ करें",
  },
  Memory: {
    Title: "मेमोरी प्रॉम्प्ट",
    EmptyContent: "अभी तक कुछ नहीं।",
    Send: "मेमोरी भेजें",
    Copy: "मेमोरी कॉपी करें",
    Reset: "सत्र रीसेट करें",
    ResetConfirm:
      "रीसेट करने से वर्तमान चैट इतिहास और ऐतिहासिक मेमोरी हटा दी जाएगी। क्या आप वाकई रीसेट करना चाहते हैं?",
  },
  Home: {
    NewChat: "नई चैट",
    DeleteChat: "चयनित वार्तालाप को हटाने की पुष्टि करें?",
    DeleteToast: "चैट हटा दी गई",
    Revert: "पूर्ववत करें",
  },
  Settings: {
    Title: "सेटिंग्स",
    SubTitle: "सभी सेटिंग्स",
    Actions: {
      ClearAll: "सभी डेटा हटाएं",
      ResetAll: "सभी सेटिंग्स रीसेट करें",
      Close: "बंद करें",
      ConfirmResetAll: "क्या आप वाकई सभी कॉन्फ़िगरेशन को रीसेट करना चाहते हैं?",
      ConfirmClearAll: "क्या आप वाकई सभी डेटा को रीसेट करना चाहते हैं?",
    },
    Lang: {
      Name: "भाषा", // ध्यान दें: यदि आप एक नया अनुवाद जोड़ना चाहते हैं तो कृपया इस मान का अनुवाद न करें, इसे `भाषा` के रूप में छोड़ दें
      All: "सभी भाषाएँ",
    },
    Avatar: "अवतार",
    FontSize: {
      Title: "फ़ॉन्ट आकार",
      SubTitle: "चैट सामग्री का फ़ॉन्ट आकार समायोजित करें",
    },
    Update: {
      Version: (x: string) => `संस्करण: ${x}`,
      IsLatest: "नवीनतम संस्करण",
      CheckUpdate: "अपडेट की जांच करें",
      IsChecking: "अपडेट की जांच की जा रही है...",
      FoundUpdate: (x: string) => `नया संस्करण मिला है: ${x}`,
      GoToUpdate: "अपडेट करें",
    },
    SendKey: "भेजें कुंजी",
    Theme: "थीम",
    TightBorder: "टाइट बॉर्डर",
    SendPreviewBubble: {
      Title: "पूर्वावलोकन बबल भेजें",
      SubTitle: "बबल में मार्कडाउन का पूर्वावलोकन करें",
    },
    Mask: {
      Title: "मास्क स्प्लैश स्क्रीन",
      SubTitle: "नई चैट शुरू करने से पहले एक मास्क स्प्लैश स्क्रीन दिखाएं",
    },
    Prompt: {
      Disable: {
        Title: "ऑटो-पूर्णता अक्षम करें",
        SubTitle: "ऑटो-पूर्णता को ट्रिगर करने के लिए / इनपुट करें",
      },
      List: "प्रॉम्प्ट सूची",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} अंतर्निहित, ${custom} उपयोगकर्ता परिभाषित`,
      Edit: "संपादित करें",
      Modal: {
        Title: "प्रॉम्प्ट सूची",
        Add: "एक जोड़ें",
        Search: "प्रॉम्प्ट्स खोजें",
      },
      EditModal: {
        Title: "प्रॉम्प्ट संपादित करें",
      },
    },
    HistoryCount: {
      Title: "संलग्न किए गए संदेशों की संख्या",
      SubTitle: "प्रति अनुरोध भेजे गए संदेशों की संख्या",
    },
    CompressThreshold: {
      Title: "इतिहास संक्षेपण सीमा",
      SubTitle:
        "अगर अप्रेस्स किए गए संदेशों की लंबाई सीमा से अधिक होती है तो संक्षेपित किया जाएगा",
    },
    Token: {
      Title: "API कुंजी",
      SubTitle: "पहुंच कोड सीमा को अनदेखा करने के लिए अपनी कुंजी का उपयोग करें",
      Placeholder: "OpenAI API कुंजी",
    },
    Usage: {
      Title: "खाता शेष राशि",
      SubTitle(used: any, total: any) {
        return `इस महीने का उपयोग किया गया $${used}, सदस्यता $${total}`;
      },
      IsChecking: "जांच की जा रही है...",
      Check: "जांच करें",
      NoAccess: "शेष राशि जांचने के लिए API कुंजी दर्ज करें",
    },
    AccessCode: {
      Title: "पहुंच कोड",
      SubTitle: "पहुंच नियंत्रण सक्षम है",
      Placeholder: "पहुंच कोड की आवश्यकता है",
    },
    Endpoint: {
      Title: "एंडपॉइंट",
      SubTitle: "कस्टम एंडपॉइंट http(s):// से शुरू होना चाहिए",
    },
    Model: "मॉडल",
    Temperature: {
      Title: "तापमान",
      SubTitle: "एक बड़ी मानकर्षा मान अधिक यादृच्छिक उत्पादन करता है",
    },
    MaxTokens: {
      Title: "अधिकतम टोकन",
      SubTitle: "इनपुट टोकन और उत्पन्न टोकन की अधिकतम लंबाई",
    },
    PresencePenalty: {
      Title: "प्रासंगिकता जुर्माना",
      SubTitle:
        "एक बड़ा मान नए विषयों के बारे में बात करने की संभावना बढ़ाता है",
    },
  },
  Store: {
    DefaultTopic: "नई वार्तालाप",
    BotHello: "नमस्ते! मैं आपकी कैसे सहायता कर सकता हूँ?",
    Error: "कुछ गड़बड़ हो गया है, कृपया बाद में पुनः प्रयास करें।",
    Prompt: {
      History: (content: string) =>
        "यह चैट इतिहास का संक्षेप है: " + content,
      Topic:
        "कृपया बिना किसी प्रवेश, विरामचिह्न, उद्धरण, अंक, चिह्न या अतिरिक्त पाठ के हमारी बातचीत का एक चार से पांच शब्दों का शीर्षक उत्पन्न करें। आवरणी उद्धरण हटा दें।",
      Summarize:
        "भविष्य के संदर्भ के लिए चर्चा को संक्षेप में 200 शब्दों या उससे कम में संक्षेपित करें।",
    },
  },
  Copy: {
    Success: "क्लिपबोर्ड पर कॉपी किया गया",
    Failed: "कॉपी विफल हुई, कृपया क्लिपबोर्ड तक पहुंच की अनुमति दें",
  },
  Context: {
    Toast: (x: any) => `संदर्भ प्रॉम्प्ट के साथ ${x}`,
    Edit: "संदर्भ और मेमोरी प्रॉम्प्ट्स",
    Add: "प्रॉम्प्ट जोड़ें",
    Clear: "संदर्भ साफ़ करें",
    Revert: "पूर्ववत करें",
  },
  Plugin: {
    Name: "प्लगइन",
  },
  Mask: {
    Name: "मास्क",
    Page: {
      Title: "प्रॉम्प्ट टेम्पलेट",
      SubTitle: (count: number) => `${count} प्रॉम्प्ट टेम्पलेट`,
      Search: "टेम्पलेट्स खोजें",
      Create: "बनाएँ",
    },
    Item: {
      Info: (count: number) => `${count} प्रॉम्प्ट्स`,
      Chat: "चैट",
      View: "देखें",
      Edit: "संपादित करें",
      Delete: "हटाएं",
      DeleteConfirm: "हटाने की पुष्टि करें?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `प्रॉम्प्ट टेम्पलेट संपादित करें ${readonly ? "(केवल पढ़ने के लिए)" : ""}`,
      Download: "डाउनलोड",
      Clone: "डुप्लिकेट",
    },
    Config: {
      Avatar: "बॉट अवतार",
      Name: "बॉट नाम",
      Sync: {
        Title: "वैश्विक कॉन्फ़िग का उपयोग करें",
        SubTitle: "इस चैट में वैश्विक कॉन्फ़िग का उपयोग करें",
        Confirm: "क्या आप वाकई वैश्विक कॉन्फ़िग के साथ कस्टम कॉन्फ़िग को ओवरराइड करना चाहते हैं?",
      },
      HideContext: {
        Title: "संदर्भ प्रॉम्प्ट छिपाएं",
        SubTitle: "चैट में संदर्भ प्रॉम्प्ट्स न दिखाएं",
      },
    },
  },
  NewChat: {
    Return: "वापस जाएं",
    Skip: "बस शुरू करें",
    Title: "एक मास्क चुनें",
    SubTitle: "मास्क के पीछे आत्मा के साथ चैट करें",
    More: "और ढूंढें",
    NotShow: "कभी नहीं दिखाएं",
    ConfirmNoShow: "अक्षम करने की पुष्टि करें? आप इसे बाद में सेटिंग्स में सक्षम कर सकते हैं।",
  },

  UI: {
    Confirm: "पुष्टि करें",
    Cancel: "रद्द करें",
    Close: "बंद करें",
    Create: "बनाएं",
    Edit: "संपादित करें",
  },
};

export default in;