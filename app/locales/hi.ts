import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

// if you are adding a new translation, please use PartialLocaleType instead of LocaleType
const hi: LocaleType = {
  WIP: "जल्द आ रहा है...",
  Error: {
    Unauthorized:
      "इस शक्तिशाली Ultimate ChatGPT को समर्थन देने और बनाए रखने के लिए [Patreon](https://patreon.com/KiasK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link) या Bkash (+880 1812-715289) के माध्यम से सहायता करें, [Worldremit](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob) का उपयोग करके भेजें, मोबाइल वॉलेट नंबर: +880 1812-715289।",
  },
  Auth: {
    Title: "एक्सेस कोड आवश्यक",
    Tips: "कृपया नीचे एक्सेस कोड दर्ज करें",
    Input: "एक्सेस कोड",
    Confirm: "पुष्टि करें",
    Later: "बाद में",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} संदेश`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} संदेश`,
    Actions: {
      ChatList: "चैट सूची पर जाएं",
      CompressedHistory: "संक्षिप्त इतिहास मेमोरी प्रॉम्प्ट",
      Export: "सभी संदेशों को मार्कडाउन के रूप में निर्यात करें",
      Copy: "कॉपी करें",
      Stop: "रोकें",
      Retry: "पुनः प्रयास करें",
      Pin: "पिन करें",
      PinToastContent: "2 संदेशों को संदर्भात्मक प्रॉम्प्ट्स में पिन किया गया है",
      PinToastAction: "देखें",
      Delete: "हटाएं",
      Edit: "संपादित करें",
    },
    Commands: {
      new: "नई चैट शुरू करें",
      newm: "मास्क के साथ नई चैट शुरू करें",
      next: "अगली चैट",
      prev: "पिछली चैट",
      clear: "संदर्भ साफ़ करें",
      del: "चैट हटाएं",
    },
    InputActions: {
      Stop: "रोकें",
      ToBottom: "नवीनतम तक",
      Theme: {
        auto: "स्वचालित",
        light: "प्रकाशमान विषय",
        dark: "गहरे विषय",
      },
      Prompt: "प्रॉम्प्ट्स",
      Masks: "मास्क",
      Clear: "संदर्भ साफ़ करें",
      Settings: "सेटिंग्स",
    },
    Rename: "चैट का नाम बदलें",
    Typing: "लिख रहा है...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} भेजने के लिए`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", लपेटने के लिए Shift + Enter";
      }
      return inputHints + ", / प्रॉम्प्ट्स खोजने के लिए, : कमांड्स का उपयोग करने के लिए";
    },
    Send: "भेजें",
    Config: {
      Reset: "डिफ़ॉल्ट पर रीसेट करें",
      SaveAs: "मास्क के रूप में सहेजें",
    },
  },
  Export: {
    Title: "संदेश निर्यात करें",
    Copy: "सभी कॉपी करें",
    Download: "डाउनलोड करें",
    MessageFromYou: "आपसे संदेश",
    MessageFromChatGPT: "चैटजीपीटी से संदेश",
    Share: "KiAsk Share पर साझा करें",
    Format: {
      Title: "निर्यात स्वरूप",
      SubTitle: "मार्कडाउन या पीएनजी छवि",
    },
    IncludeContext: {
      Title: "संदर्भ शामिल करें",
      SubTitle: "मास्क में संदर्भ प्रॉम्प्ट्स को निर्यात करें या न करें",
    },
    Steps: {
      Select: "चुनें",
      Preview: "पूर्वावलोकन",
    },
    Image: {
      Toast: "छवि कैप्चर कर रहा है...",
      Modal: "छवि सहेजने के लिए लंबे समय तक दबाएं या दायां क्लिक करें",
    },
  },
  Select: {
    Search: "खोजें",
    All: "सभी का चयन करें",
    Latest: "नवीनतम का चयन करें",
    Clear: "साफ़ करें",
  },
  Memory: {
    Title: "मेमोरी प्रॉम्प्ट",
    EmptyContent: "अभी तक कुछ नहीं।",
    Send: "मेमोरी भेजें",
    Copy: "मेमोरी कॉपी करें",
    Reset: "सत्र रीसेट करें",
    ResetConfirm:
      "रीसेट करने से वर्तमान चैट इतिहास और ऐतिहासिक मेमोरी साफ हो जाएगी। क्या आप वाकई रीसेट करना चाहते हैं?",
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
    Danger: {
      Reset: {
        Title: "सभी सेटिंग्स रीसेट करें",
        SubTitle: "सभी सेटिंग आइटम को डिफ़ॉल्ट पर रीसेट करें",
        Action: "रीसेट",
        Confirm: "क्या आप सभी सेटिंग्स को डिफ़ॉल्ट पर रीसेट करने की पुष्टि करते हैं?",
      },
      Clear: {
        Title: "सभी डेटा साफ़ करें",
        SubTitle: "सभी संदेश और सेटिंग्स को साफ़ करें",
        Action: "साफ़ करें",
        Confirm: "क्या आप सभी संदेश और सेटिंग्स को साफ़ करने की पुष्टि करते हैं?",
      },
    },
    Lang: {
      Name: "भाषा", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "सभी भाषाएँ",
    },
    Avatar: "अवतार",
    FontSize: {
      Title: "फ़ॉन्ट आकार",
      SubTitle: "चैट सामग्री का फ़ॉन्ट आकार समायोजित करें",
    },
    InputTemplate: {
      Title: "इनपुट टेम्पलेट",
      SubTitle: "नवीनतम संदेश इस टेम्पलेट में भरा जाएगा",
    },
    Update: {
      Version: (x: string) => `संस्करण: ${x}`,
      IsLatest: "नवीनतम संस्करण",
      CheckUpdate: "अद्यतन की जांच करें",
      IsChecking: "अद्यतन की जांच की जा रही है...",
      FoundUpdate: (x: string) => `नया संस्करण मिला है: ${x}`,
      GoToUpdate: "अपडेट करें",
    },
    SendKey: "कुंजी भेजें",
    Theme: "थीम",
    TightBorder: "सख्त सीमा",
    SendPreviewBubble: {
      Title: "पूर्वावलोकन बबल भेजें",
      SubTitle: "बबल में मार्कडाउन का पूर्वावलोकन करें",
    },
    Mask: {
      Splash: {
        Title: "मास्क स्प्लैश स्क्रीन",
        SubTitle: "नई चैट शुरू करने से पहले एक मास्क स्प्लैश स्क्रीन दिखाएं",
      },
      Builtin: {
        Title: "बिल्ट-इन मास्क छिपाएं",
        SubTitle: "मास्क सूची में बिल्ट-इन मास्क छिपाएं",
      },
    },
    Prompt: {
      Disable: {
        Title: "ऑटो-पूर्णता अक्षम करें",
        SubTitle: "ऑटो-पूर्णता को प्रेरित करने के लिए / इनपुट करें",
      },
      List: "प्रॉम्प्ट सूची",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} बिल्ट-इन, ${custom} उपयोगकर्ता परिभाषित`,
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
      SubTitle: "प्रति अनुरोध भेजे गए संदेशों की अधिकतम संख्या",
    },
    CompressThreshold: {
      Title: "इतिहास संक्षेपण सीमा",
      SubTitle: "संक्षिप्त नहीं किए गए संदेशों की लंबाई पर संक्षेपण करेगा",
    },
    Token: {
      Title: "एपीआई कुंजी",
      SubTitle: "पहुँच कोड सीमा को अनदेखा करने के लिए अपनी कुंजी का उपयोग करें",
      Placeholder: "OpenAI एपीआई कुंजी",
    },
    Usage: {
      Title: "खाता शेष राशि",
      SubTitle(used: any, total: any) {
        return `इस महीने इस्तेमाल किया गया $${used}, सब्सक्रिप्शन $${total}`;
      },
      IsChecking: "जांच की जा रही है...",
      Check: "जांच करें",
      NoAccess: "शेष राशि जांचने के लिए एपीआई कुंजी दर्ज करें",
    },
    AccessCode: {
      Title: "एक्सेस कोड",
      SubTitle: "पहुँच नियंत्रण सक्षम है",
      Placeholder: "एक्सेस कोड आवश्यक",
    },
    Endpoint: {
      Title: "एंडप्वेंट",
      SubTitle: "कस्टम एंडप्वेंट को http(s):// से शुरू होना चाहिए",
    },
    Model: "मॉडल",
    Temperature: {
      Title: "तापमान",
      SubTitle: "एक बड़ी मानकरण मान अधिक यादृच्छिक उत्पादन करता है",
    },
    TopP: {
      Title: "शीर्ष पी",
      SubTitle: "इस मान को तापमान के साथ बदलने का प्रयास न करें",
    },
    MaxTokens: {
      Title: "अधिकतम टोकन",
      SubTitle: "इनपुट टोकन और उत्पन्न टोकनों की अधिकतम लंबाई",
    },
    PresencePenalty: {
      Title: "उपस्थिति जुर्माना",
      SubTitle: "एक बड़ा मान नई विषयों के बारे में बात करने की संभावना बढ़ाता है",
    },
    FrequencyPenalty: {
      Title: "फ़्रीक्वेंसी जुर्माना",
      SubTitle: "एक बड़ा मान एक ही पंक्ति को दोहराने की संभावना कम करता है",
    },
  },
  Store: {
    DefaultTopic: "नई वार्तालाप",
    BotHello: "नमस्ते! आज आपकी कैसे सहायता कर सकता हूँ?",
    Error: "कुछ गड़बड़ हो गया है, कृपया बाद में पुनः प्रयास करें।",
    Prompt: {
      History: (content: string) =>
        "यह चैट इतिहास का संक्षिप्त सारांश है: " + content,
      Topic:
        "कृपया हमारी वार्तालाप का एक चार से पांच शब्दों का शीर्षक बनाएं जो कि प्रवेश के बिना, विराम चिन्ह, उद्धरण, अंक, प्रतीक या अतिरिक्त पाठ के बिना हो। आवरण में आवरण चिन्हों को हटा दें।",
      Summarize:
        "200 शब्दों या उससे कम में चर्चा का संक्षिप्त सारांश बनाएं जो भविष्य के संदर्भ के लिए प्रॉम्प्ट के रूप में उपयोग किया जा सकता है।",
    },
  },
  Copy: {
    Success: "क्लिपबोर्ड में कॉपी किया गया",
    Failed: "कॉपी विफल, कृपया क्लिपबोर्ड एक्सेस की अनुमति दें",
  },
  Context: {
    Toast: (x: any) => `${x} संदर्भात्मक प्रॉम्प्ट्स के साथ`,
    Edit: "वर्तमान चैट सेटिंग्स",
    Add: "प्रॉम्प्ट जोड़ें",
    Clear: "संदर्भ साफ़",
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
      Search: "टेम्पलेट खोजें",
      Create: "बनाएं",
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
        `प्रॉम्प्ट टेम्पलेट संपादित करें ${readonly ? "(केवल पठनीय)" : ""}`,
      Download: "डाउनलोड",
      Clone: "क्लोन",
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
        Title: "संदर्भ प्रॉम्प्ट्स छिपाएं",
        SubTitle: "चैट में संदर्भ प्रॉम्प्ट्स न दिखाएं",
      },
      Share: {
        Title: "इस मास्क को साझा करें",
        SubTitle: "इस मास्क के लिए एक लिंक उत्पन्न करें",
        Action: "लिंक कॉपी करें",
      },
    },
  },
  NewChat: {
    Return: "वापस जाएं",
    Skip: "बस शुरू करें",
    Title: "मास्क चुनें",
    SubTitle: "मास्क के पीछे मास्क के साथ चैट करें",
    More: "और ढूंढें",
    NotShow: "कभी भी न दिखाएं",
    ConfirmNoShow: "निष्क्रिय करने की पुष्टि करें? आप इसे बाद में सेटिंग्स में सक्षम कर सकते हैं।",
  },

  UI: {
    Confirm: "पुष्टि करें",
    Cancel: "रद्द करें",
    Close: "बंद करें",
    Create: "बनाएं",
    Edit: "संपादित करें",
  },
  Exporter: {
    Model: "मॉडल",
    Messages: "संदेश",
    Topic: "विषय",
    Time: "समय",
  },
};

export default hi;
