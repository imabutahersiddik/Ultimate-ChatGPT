import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

// if you are adding a new translation, please use PartialLocaleType instead of LocaleType
const tam: LocaleType = {
  WIP: "Aseggas Aɣelnaw...",
  Error: {
    Unauthorized:
      "Sken Ultimate ChatGPT ɣef [Patreon](https://patreon.com/KiasK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link) neɣ merra Bkash (+880 1812-715289), Sken s tikkelt n [Worldremit](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob), Tassawant n Tifinagh: +880 1812-715289 s usiḍ ɣef tɣawsa n Ultimate ChatGPT.",
  },
  Auth: {
    Title: "Isekkilen n Tallalt",
    Tips: "Suter tallalt iseggasen n wudem",
    Input: "Tallalt",
    Confirm: "Seker",
    Later: "Seg wudem",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} imeslayen`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} imeslayen`,
    Actions: {
      ChatList: "Sken seg Tugna n Imeslayen",
      CompressedHistory: "Tugna n Imeslayen n Tazwara Tamaynut",
      Export: "Sken Imeslayen Tamaynut seg Markdown",
      Copy: "Sken",
      Stop: "Asegzawal",
      Retry: "Sken meqqar",
      Pin: "Sken",
      PinToastContent: "Sken 2 imeslayen seg tazwara tamaynut",
      PinToastAction: "Tanemmirt",
      Delete: "Kkes",
      Edit: "Sken",
    },
    Commands: {
      new: "Semmeslay n wudem uɣur",
      newm: "Semmeslay n wudem uɣur s umeslay",
      next: "Imeslay amaynut",
      prev: "Imeslay aɣelnaw",
      clear: "Kkes ameslay",
      del: "Kkes Imeslay",
    },
    InputActions: {
      Stop: "Asegzawal",
      ToBottom: "Seg imeslay amaynut",
      Theme: {
        auto: "Tugna",
        light: "Tugna Tamaynut",
        dark: "Tugna Taseggwamit",
      },
      Prompt: "Tazwara tamaynut",
      Masks: "Anfawan",
      Clear: "Kkes ameslay",
      Settings: "Tugna",
    },
    Rename: "Sken Ism n Imeslay",
    Typing: "Iɣerzen...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} seggan`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter seggan";
      }
      return inputHints + ", / seg tafukkist, : seg yisemlen";
    },
    Send: "Sken",
    Config: {
      Reset: "Sken seg wudem",
      SaveAs: "Sekles seg Anfaw",
    },
  },
  Export: {
    Title: "Sken Imeslayen",
    Copy: "Sken Tamaynut",
    Download: "Sken",
    MessageFromYou: "Amezlay seggan",
    MessageFromChatGPT: "Amezlay seg ChatGPT",
    Share: "Sken seg KiAsk Share",
    Format: {
      Title: "Taswira Tamaynut",
      SubTitle: "Markdown neɣ Taswira PNG",
    },
    IncludeContext: {
      Title: "Seggan Tazwara Tamaynut",
      SubTitle: "Sken tazwara tamaynut seg anfaw neɣ la",
    },
    Steps: {
      Select: "Suɣal",
      Preview: "Tazwara",
    },
    Image: {
      Toast: "Taswira n wudem...",
      Modal: "Sekkes seg wudem neɣ seld seg useggas i wakud",
    },
  },
  Select: {
    Search: "Suɣal",
    All: "Suɣal Tamaynut",
    Latest: "Suɣal amaynut",
    Clear: "Kkes",
  },
  Memory: {
    Title: "Tazwara Tamaynut",
    EmptyContent: "Walakin.",
    Send: "Sken Tazwara",
    Copy: "Sken Tazwara",
    Reset: "Sken Imeslay",
    ResetConfirm:
      "Sken yemmeslayen yemgaraden yekkes seg ameslay n tallalt neɣ tazwara tamaynut. Ssekkes aseggas ad yekkes?",
  },
  Home: {
    NewChat: "Semmeslay n wudem uɣur",
    DeleteChat: "Seker ad kessem aseggas n tazwara?",
    DeleteToast: "Imeslay Kkes",
    Revert: "Kkes",
  },
  Settings: {
    Title: "Tugna",
    SubTitle: "Tugna Tamaynut",
    Danger: {
      Reset: {
        Title: "Kkes Aseggas n Tugna",
        SubTitle: "Kkes ameslay n tugna seg wudem",
        Action: "Kkes",
        Confirm: "Seker ad kkes ameslay n tugna seg wudem?",
      },
      Clear: {
        Title: "Kkes Ameslay Tamaynut",
        SubTitle: "Kkes ameslay neɣ tugna tamaynut",
        Action: "Kkes",
        Confirm: "Seker ad kkes ameslay neɣ tugna tamaynut?",
      },
    },
    Lang: {
      Name: "Tugna", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Tugna Tamaynut",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Tabdart n Yizerfan",
      SubTitle: "Suter tabdart n yizerfan n imeɣnasen",
    },

    InputTemplate: {
      Title: "Anfaw n Asental",
      SubTitle: "Amezlay amaynut yekkes seg anfaw-a",
    },

    Update: {
      Version: (x: string) => `Aseggas: ${x}`,
      IsLatest: "Aseggas amaynut",
      CheckUpdate: "Suɣal Aseggas",
      IsChecking: "Suɣal aseggas...",
      FoundUpdate: (x: string) => `Aseggas amaynut yedder: ${x}`,
      GoToUpdate: "Aseggas",
    },
    SendKey: "Ssend n tallalt",
    Theme: "Tugna",
    TightBorder: "Aseggas amaynut",
    SendPreviewBubble: {
      Title: "Tazwara n Tisentel",
      SubTitle: "Tazwara markdown seg tisentel",
    },
    Mask: {
      Splash: {
        Title: "Tugna n Anfawan",
        SubTitle: "Sken tudrin n anfawan qabel tsemreslay n wudem",
      },
      Builtin: {
        Title: "Sken Anfawan Amenzu",
        SubTitle: "Sken anfawan amenzu seg tabdart n anfawan",
      },
    },
    Prompt: {
      Disable: {
        Title: "Sken awalen akked tukksa",
        SubTitle: "Suter / seg tafukkist ad yekkes awalen akked tukksa",
      },
      List: "Tazwara Tamaynut",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} anfawan amenzu, ${custom} anfawan n yisemlen`,
      Edit: "Sken",
      Modal: {
        Title: "Tazwara Tamaynut",
        Add: "Rnu",
        Search: "Suɣal Tazwara",
      },
      EditModal: {
        Title: "Sken Tazwara",
      },
    },
    HistoryCount: {
      Title: "Ameslay n Imeslayen",
      SubTitle: "Asemmal n imeɣnasen imeslayen yekkes seg tazwara",
    },
    CompressThreshold: {
      Title: "Asmel n Tazwara Tamaynut",
      SubTitle:
        "Sken ad yekkes seg tazwara tamaynut mačči d imeɣnasen imeslayen yemgaraden",
    },
    Token: {
      Title: "Tazwara n API",
      SubTitle: "Suter tazwara n API ad yekkes tazwara n tallalt",
      Placeholder: "Tazwara n OpenAI API",
    },
    Usage: {
      Title: "Taswira n Imeslayen",
      SubTitle(used: any, total: any) {
        return `Imeslayen yemgaraden seg aseggas $${used}, abonnement $${total}`;
      },
      IsChecking: "Suɣal...",
      Check: "Suɣal",
      NoAccess: "Suter tazwara n API ad suɣal taswira n imeslayen",
    },
    AccessCode: {
      Title: "Tallalt",
      SubTitle: "Ameslay ad yeddu tallalt",
      Placeholder: "Suter Tallalt",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Endpoint amaynut ad yekkes d http(s)://",
    },
    Model: "Imeslay",
    Temperature: {
      Title: "Tinimlilit",
      SubTitle: "Ameslay amaynut ad yekkes tinimlilit n tafukt",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Mačči ad tbeddel ass-a neɣ tinimlilit",
    },
    MaxTokens: {
      Title: "Asemmal n Imeslayen",
      SubTitle: "Asemmal amaynut n imeɣnasen imeslayen neɣ imeɣnasen yemgaraden",
    },
    PresencePenalty: {
      Title: "Taswira n Tisentel",
      SubTitle:
        "Taswira amaynut ad yekkes tinimlilit seg tisentel n tazwara",
    },
    FrequencyPenalty: {
      Title: "Taswira n Tisentel",
      SubTitle:
        "Taswira amaynut ad yekkes tinimlilit seg tisentel n tazwara",
    },
  },
  Store: {
    DefaultTopic: "Imeslay Amaynut",
    BotHello: "Azul! Iḥebbu ad yemmeslay ad d-nesmekti?",
    Error: "Talɣut n tsekkurt, ssewwal ad yekkes tura.",
    Prompt: {
      History: (content: string) =>
        "Taswira n tazwara tamaynut seg tazwara: " + content,
      Topic:
        "Suter tamsalt n warraw-isemlen amezwaru seg tazwara n yisemlen d imeɣnasen, mačči tallalt, talɣut, tawwurt, ameslay yemgaraden neɣ tamdint.",
      Summarize:
        "Summarize the discussion briefly in 200 words or less to use as a prompt for future context.",
    },
  },
  Copy: {
    Success: "Sken seg tazwara tamaynut",
    Failed: "Sken talɣut, ssewwal ad yekkes tura ad yemmeslay tafukt n tazwara tamaynut",
  },
  Context: {
    Toast: (x: any) => `Seg ${x} tazwara tamaynut`,
    Edit: "Tugna Tamaynut Amenzu",
    Add: "Rnu Tazwara",
    Clear: "Kkes Tazwara Tamaynut",
    Revert: "Kkes",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Anfawan",
    Page: {
      Title: "Anfawan Amenzu",
      SubTitle: (count: number) => `${count} anfawan amenzu`,
      Search: "Suɣal Anfawan",
      Create: "Rnu",
    },
    Item: {
      Info: (count: number) => `${count} anfawan`,
      Chat: "Semmeslay",
      View: "Tanemmirt",
      Edit: "Sken",
      Delete: "Kkes",
      DeleteConfirm: "Seker ad kkes?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Sken Anfawan Amenzu ${readonly ? "(read-only)" : ""}`,
      Download: "Sken",
      Clone: "Rnu",
    },
    Config: {
      Avatar: "Avatar n imeɣnas",
      Name: "Isem n imeɣnas",
      Sync: {
        Title: "Sken Tugna Amenzu",
        SubTitle: "Sken tugna amenzu seg wudem",
        Confirm: "Seker ad sken tugna amenzu seg wudem?",
      },
      HideContext: {
        Title: "Sken Tazwara Tamaynut",
        SubTitle: "Mačči mačči ad yekkes tazwara tamaynut seg tazwara",
      },
      Share: {
        Title: "Sken Anfawan Amenzu",
        SubTitle: "Rnu tawuri seg anfawan-a",
        Action: "Sken Link",
      },
    },
  },
  NewChat: {
    Return: "Seg wudem",
    Skip: "Semmeslay",
    Title: "Suɣal Anfawan",
    SubTitle: "Semmeslay ad d-nesmekti seg tawuri n imeslay",
    More: "Suɣal Amenzu",
    NotShow: "Mačči Sken",
    ConfirmNoShow: "Seker ad yekkes?",
  },

  UI: {
    Confirm: "Seker",
    Cancel: "Sekkes",
    Close: "Sekkes",
    Create: "Rnu",
    Edit: "Sken",
  },
  Exporter: {
    Model: "Imeslay",
    Messages: "Imeslayen",
    Topic: "Tamsalt",
    Time: "Useggas",
  },
};

export default tam;