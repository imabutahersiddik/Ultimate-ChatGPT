import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const ro: RequiredLocaleType = {
  WIP: "În curând...",
  Error: {
    Unauthorized:
      "Acces neautorizat, vă rugăm să introduceți codul de acces în pagina [auth](/#/auth).",
  },
  Auth: {
    Title: "Cod de acces necesar",
    Tips: "Vă rugăm să introduceți codul de acces mai jos",
    Input: "cod de acces",
    Confirm: "Confirmă",
    Later: "Mai târziu",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} mesaje`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} mesaje cu The ChatGPT`,
    Actions: {
      ChatList: "Mergi la lista de chat-uri",
      CompressedHistory: "Istoric Comprimat Prompt Memorie",
      Export: "Exportă toate mesajele ca Markdown",
      Copy: "Copiază",
      Stop: "Oprire",
      Retry: "Reîncearcă",
      Delete: "Șterge",
    },
    InputActions: {
      Stop: "Oprire",
      ToBottom: "La cel mai recent",
      Theme: {
        auto: "Automat",
        light: "Tema Luminoasă",
        dark: "Tema Întunecată",
      },
      Prompt: "Prompt-uri",
      Masks: "Măști",
      Clear: "Șterge Contextul",
      Settings: "Setări",
    },
    Rename: "Redenumește Chat",
    Typing: "Se scrie...",
    Input: (submitKey: string) => {
      var inputHints = `Apasă ${submitKey} pentru a trimite`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter pentru a închide";
      }
      return inputHints + ", / pentru a căuta prompt-uri";
    },
    Send: "Trimite",
    Config: {
      Reset: "Resetare la Valorile Implicit",
      SaveAs: "Salvează ca Mască",
    },
  },
  Export: {
    Title: "Exportă Mesaje",
    Copy: "Copiază Tot",
    Download: "Descarcă",
    MessageFromYou: "Mesaj de la Tine",
    MessageFromChatGPT: "Mesaj de la The ChatGPT",
    Share: "Partajează pe KiAsk Share",
    Format: {
      Title: "Format de Export",
      SubTitle: "Markdown sau Imagine PNG",
    },
    IncludeContext: {
      Title: "Includere Context",
      SubTitle: "Exportă prompturile de context în mască sau nu",
    },
    Steps: {
      Select: "Selectează",
      Preview: "Previzualizare",
    },
  },
  Select: {
    Search: "Căutare",
    All: "Selectează Tot",
    Latest: "Selectează Cel Mai Recent",
    Clear: "Șterge",
  },
  Memory: {
    Title: "Prompt Memorie",
    EmptyContent: "Nimic deocamdată.",
    Send: "Trimite Memorie",
    Copy: "Copiază Memorie",
    Reset: "Resetare Sesiune",
    ResetConfirm:
      "Resetarea va șterge istoricul actual al conversației și memoria istorică. Sigur doriți să resetați?",
  },
  Home: {
    NewChat: "Chat Nou",
    DeleteChat: "Confirmați ștergerea conversației selectate?",
    DeleteToast: "Chat șters",
    Revert: "Revenire",
  },
  Settings: {
    Title: "Setări",
    SubTitle: "Toate Setările",
    Actions: {
      ClearAll: "Șterge Toate Datele",
      ResetAll: "Resetează Toate Setările",
      Close: "Închide",
      ConfirmResetAll: "Sigur doriți să resetați toate configurațiile?",
      ConfirmClearAll: "Sigur doriți să resetați toate datele?",
    },
    Lang: {
      Name: "Limba", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Toate Limbile",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Dimensiune Font",
      SubTitle: "Ajustează dimensiunea fontului pentru conținutul chat-ului",
    },
    Update: {
      Version: (x: string) => `Versiune: ${x}`,
      IsLatest: "Ultima versiune",
      CheckUpdate: "Verifică Actualizare",
      IsChecking: "Se verifică actualizarea...",
      FoundUpdate: (x: string) => `A fost găsită o nouă versiune: ${x}`,
      GoToUpdate: "Actualizare",
    },
    SendKey: "Cheie de Trimitere",
    Theme: "Temă",
    TightBorder: "Bordură Strânsă",
    SendPreviewBubble: {
      Title: "Bule de Previzualizare Trimitere",
      SubTitle: "Previzualizează markdown-ul într-o bulă",
    },
    Mask: {
      Title: "Ecran de Încărcare Mască",
      SubTitle: "Afișează un ecran de încărcare mască înainte de a începe un chat nou",
    },
    Prompt: {
      Disable: {
        Title: "Dezactivează completarea automată",
        SubTitle: "Introduceți / pentru a declanșa completarea automată",
      },
      List: "Listă Prompt-uri",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} încorporate, ${custom} definite de utilizator`,
      Edit: "Editează",
      Modal: {
        Title: "Listă Prompt-uri",
        Add: "Adaugă Unul",
        Search: "Caută Prompt-uri",
      },
      EditModal: {
        Title: "Editează Prompt",
      },
    },
    HistoryCount: {
      Title: "Numărul de Mesaje Atașate",
      SubTitle: "Numărul de mesaje trimise atașate pe cerere",
    },
    CompressThreshold: {
      Title: "Prag de Compresie Istoric",
      SubTitle:
        "Se va comprima dacă lungimea mesajelor necomprimate depășește valoarea",
    },
    Token: {
      Title: "Cheie API",
      SubTitle: "Utilizează cheia pentru a ignora limita de cod de acces",
      Placeholder: "Cheie OpenAI API",
    },
    Usage: {
      Title: "Sold Cont",
      SubTitle(used: any, total: any) {
        return `Utilizat în acest lună $${used}, abonament $${total}`;
      },
      IsChecking: "Se verifică...",
      Check: "Verifică",
      NoAccess: "Introduceți cheia API pentru a verifica soldul",
    },
    AccessCode: {
      Title: "Cod de Acces",
      SubTitle: "Controlul accesului este activat",
      Placeholder: "Cod de Acces Necesar",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Endpoint personalizat trebuie să înceapă cu http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperatură",
      SubTitle: "O valoare mai mare generează un rezultat mai aleatoriu",
    },
    MaxTokens: {
      Title: "Număr Maxim de Token-uri",
      SubTitle: "Lungimea maximă a token-urilor de intrare și a token-urilor generate",
    },
    PresencePenalty: {
      Title: "Penalizare Prezență",
      SubTitle:
        "O valoare mai mare crește probabilitatea de a discuta despre subiecte noi",
    },
  },
  Store: {
    DefaultTopic: "Conversație Nouă",
    BotHello: "Salut! Cum vă pot ajuta astăzi?",
    Error: "Ceva nu a mers bine, vă rugăm să încercați mai târziu.",
    Prompt: {
      History: (content: string) =>
        "Aceasta este o recapitulare a istoricului chat-ului: " + content,
      Topic:
        "Vă rugăm să generați un titlu de patru până la cinci cuvinte care să rezume conversația noastră fără niciun text suplimentar, punctuație, ghilimele, puncte, simboluri sau text adițional. Eliminați ghilimelele de închidere.",
      Summarize:
        "Rezumați discuția în 200 de cuvinte sau mai puțin pentru a o folosi ca prompt pentru contextul viitor.",
    },
  },
  Copy: {
    Success: "Copiat în clipboard",
    Failed: "Copiere eșuată, vă rugăm să acordați permisiunea pentru accesul la clipboard",
  },
  Context: {
    Toast: (x: any) => `Cu ${x} prompt-uri de context`,
    Edit: "Prompt-uri de Context și Memorie",
    Add: "Adaugă un Prompt",
    Clear: "Context Șters",
    Revert: "Revenire",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Mască",
    Page: {
      Title: "Șablon Prompt",
      SubTitle: (count: number) => `${count} șabloane de prompt`,
      Search: "Caută Șabloane",
      Create: "Creează",
    },
    Item: {
      Info: (count: number) => `${count} prompt-uri`,
      Chat: "Chat",
      View: "Vizualizare",
      Edit: "Editează",
      Delete: "Șterge",
      DeleteConfirm: "Confirmați ștergerea?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Editează Șablon Prompt ${readonly ? "(doar citire)" : ""}`,
      Download: "Descarcă",
      Clone: "Clonează",
    },
    Config: {
      Avatar: "Avatar Bot",
      Name: "Nume Bot",
      Sync: {
        Title: "Utilizează Configurația Globală",
        SubTitle: "Utilizează configurația globală în acest chat",
        Confirm: "Confirmați suprascrierea configurației personalizate cu configurația globală?",
      },
      HideContext: {
        Title: "Ascunde Prompt-uri de Context",
        SubTitle: "Nu afișa prompturile de context în chat",
      },
    },
  },
  NewChat: {
    Return: "Înapoi",
    Skip: "Începe",
    Title: "Alege o Mască",
    SubTitle: "Chat cu Sufletul din Spatele Măștii",
    More: "Găsește Mai Multe",
    NotShow: "Nu arăta din nou",
    ConfirmNoShow: "Confirmați dezactivarea? Puteți activa această opțiune în setări mai târziu.",
  },

  UI: {
    Confirm: "Confirmă",
    Cancel: "Anulează",
    Close: "Închide",
    Create: "Creează",
    Edit: "Editează",
  },
};

export default ro;