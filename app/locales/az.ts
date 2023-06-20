import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const az: RequiredLocaleType = {
  WIP: "Yaxında...",
  Error: {
    Unauthorized:
      "Yetkisiz giriş, lütfen [auth](/#/auth) sayfasında erişim kodunu girin.",
  },
  Auth: {
    Title: "Erişim Kodu Gerekli",
    Tips: "Lütfen aşağıya erişim kodunu girin",
    Input: "erişim kodu",
    Confirm: "Onayla",
    Later: "Daha Sonra",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} mesajlar`,
  },
  Chat: {
    SubTitle: (count: number) => `The ChatGPT ile ${count} mesaj`,
    Actions: {
      ChatList: "Sohbet Listesine Git",
      CompressedHistory: "Sıkıştırılmış Geçmiş Hafıza İpucu",
      Export: "Tüm Mesajları Markdown Olarak Dışa Aktar",
      Copy: "Kopyala",
      Stop: "Durdur",
      Retry: "Yeniden Dene",
      Delete: "Sil",
    },
    InputActions: {
      Stop: "Durdur",
      ToBottom: "En Sonuncuya Git",
      Theme: {
        auto: "Otomatik",
        light: "Açık Tema",
        dark: "Koyu Tema",
      },
      Prompt: "İpucu",
      Masks: "Maskeler",
      Clear: "Bağlamı Temizle",
      Settings: "Ayarlar",
    },
    Rename: "Sohbeti Yeniden Adlandır",
    Typing: "Yazıyor...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} ile gönder`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Sürükleyip Bırakarak Satır Sonu Yapmak İçin Shift + Enter";
      }
      return inputHints + ", / ile ipuçları arayın";
    },
    Send: "Gönder",
    Config: {
      Reset: "Varsayılana Sıfırla",
      SaveAs: "Maskesi Olarak Kaydet",
    },
  },
  Export: {
    Title: "Mesajları Dışa Aktar",
    Copy: "Tümünü Kopyala",
    Download: "İndir",
    MessageFromYou: "Sizden Gelen Mesaj",
    MessageFromChatGPT: "The ChatGPT'den Gelen Mesaj",
    Share: "KiAsk Share'a Paylaş",
    Format: {
      Title: "Dışa Aktarma Formatı",
      SubTitle: "Markdown veya PNG Görüntüsü",
    },
    IncludeContext: {
      Title: "Bağlamı İçerir",
      SubTitle: "Maskede bağlam ipuçlarını içerir veya içermez",
    },
    Steps: {
      Select: "Seçin",
      Preview: "Önizleme",
    },
  },
  Select: {
    Search: "Ara",
    All: "Tümünü Seç",
    Latest: "En Sonuncuyu Seç",
    Clear: "Temizle",
  },
  Memory: {
    Title: "Hafıza İpucu",
    EmptyContent: "Henüz hiçbir şey yok.",
    Send: "Hafızayı Gönder",
    Copy: "Hafızayı Kopyala",
    Reset: "Oturumu Sıfırla",
    ResetConfirm:
      "Sıfırlama, mevcut sohbet geçmişini ve tarihçesel hafızayı temizleyecektir. Sıfırlamak istediğinize emin misiniz?",
  },
  Home: {
    NewChat: "Yeni Sohbet",
    DeleteChat: "Seçili konuşmayı silmeyi onaylıyor musunuz?",
    DeleteToast: "Sohbet Silindi",
    Revert: "Geri Al",
  },
  Settings: {
    Title: "Ayarlar",
    SubTitle: "Tüm Ayarlar",
    Actions: {
      ClearAll: "Tüm Verileri Temizle",
      ResetAll: "Tüm Ayarları Sıfırla",
      Close: "Kapat",
      ConfirmResetAll: "Tüm yapılandırmaları sıfırlamak istediğinizden emin misiniz?",
      ConfirmClearAll: "Tüm verileri sıfırlamak istediğinizden emin misiniz?",
    },
    Lang: {
      Name: "Dil", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Tüm Diller",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Yazı Tipi Boyutu",
      SubTitle: "Sohbet içeriğinin yazı tipi boyutunu ayarlayın",
    },
    Update: {
      Version: (x: string) => `Sürüm: ${x}`,
      IsLatest: "En Son Sürüm",
      CheckUpdate: "Güncellemeyi Kontrol Et",
      IsChecking: "Güncelleme kontrol ediliyor...",
      FoundUpdate: (x: string) => `Yeni sürüm bulundu: ${x}`,
      GoToUpdate: "Güncelle",
    },
    SendKey: "Gönderme Anahtarı",
    Theme: "Tema",
    TightBorder: "Dar Sınır",
    SendPreviewBubble: {
      Title: "Önizleme Balonu Gönder",
      SubTitle: "Balonda markdown önizlemesi göster",
    },
    Mask: {
      Title: "Maskeli Başlangıç Ekranı",
      SubTitle: "Yeni sohbete başlamadan önce bir maske başlangıç ekranı göster",
    },
    Prompt: {
      Disable: {
        Title: "Otomatik Tamamlamayı Devre Dışı Bırak",
        SubTitle: "Otomatik tamamlamayı tetiklemek için / girin",
      },
      List: "İpucu Listesi",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} yerleşik, ${custom} kullanıcı tanımlı`,
      Edit: "Düzenle",
      Modal: {
        Title: "İpucu Listesi",
        Add: "Bir Tane Ekle",
        Search: "İpuçlarını Ara",
      },
      EditModal: {
        Title: "İpucunu Düzenle",
      },
    },
    HistoryCount: {
      Title: "Eklenen Mesaj Sayısı",
      SubTitle: "Her istekte eklenen gönderilen mesaj sayısı",
    },
    CompressThreshold: {
      Title: "Geçmiş Sıkıştırma Eşiği",
      SubTitle:
        "Sıkıştırma, sıkıştırılmamış mesajlar uzunluğu bu değeri aştığında gerçekleşir",
    },
    Token: {
      Title: "API Anahtarı",
      SubTitle: "Erişim kodu sınırlamasını yoksaymak için anahtarınızı kullanın",
      Placeholder: "OpenAI API Anahtarı",
    },
    Usage: {
      Title: "Hesap Bakiyesi",
      SubTitle(used: any, total: any) {
        return `Bu ay kullanılan $${used}, abonelik $${total}`;
      },
      IsChecking: "Kontrol ediliyor...",
      Check: "Kontrol Et",
      NoAccess: "Bakiyeyi kontrol etmek için API Anahtarını girin",
    },
    AccessCode: {
      Title: "Erişim Kodu",
      SubTitle: "Erişim kontrolü etkin",
      Placeholder: "Erişim Kodu Gerekli",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Özel uç nokta http(s):// ile başlamalıdır",
    },
    Model: "Model",
    Temperature: {
      Title: "Sıcaklık",
      SubTitle: "Daha büyük bir değer daha rastgele çıktı üretir",
    },
    MaxTokens: {
      Title: "Maksimum Semboller",
      SubTitle: "Giriş sembollerinin ve üretilen sembollerin maksimum uzunluğu",
    },
    PresencePenalty: {
      Title: "Varlık Cezası",
      SubTitle:
        "Daha büyük bir değer yeni konular hakkında konuşma olasılığını artırır",
    },
  },
  Store: {
    DefaultTopic: "Yeni Konuşma",
    BotHello: "Merhaba! Bugün size nasıl yardımcı olabilirim?",
    Error: "Bir şeyler yanlış gitti, lütfen daha sonra tekrar deneyin.",
    Prompt: {
      History: (content: string) =>
        "Bu, sohbet geçmişinin bir özeti olarak bir özet: " + content,
      Topic:
        "Lütfen konuşmamızı özetleyen, giriş, noktalama işaretleri, alıntı işaretleri, noktalar, semboller veya ek metin olmadan dört ila beş kelime içeren bir başlık oluşturun. Alıntı işaretlerini kaldırın.",
      Summarize:
        "Tartışmayı gelecekteki bağlam için bir ipucu olarak kullanmak üzere 200 kelime veya daha azda özetleyin.",
    },
  },
  Copy: {
    Success: "Panoya kopyalandı",
    Failed: "Kopyalama başarısız oldu, lütfen panoya erişim izni verin",
  },
  Context: {
    Toast: (x: any) => `${x} bağlam ipucuyla`,
    Edit: "Bağlamsal ve Hafıza İpuçları",
    Add: "Bir İpucu Ekle",
    Clear: "Bağlam Temizlendi",
    Revert: "Geri Al",
  },
  Plugin: {
    Name: "Eklenti",
  },
  Mask: {
    Name: "Maske",
    Page: {
      Title: "İpucu Şablonu",
      SubTitle: (count: number) => `${count} ipucu şablonu`,
      Search: "Şablonları Ara",
      Create: "Oluştur",
    },
    Item: {
      Info: (count: number) => `${count} ipucu`,
      Chat: "Sohbet",
      View: "Görüntüle",
      Edit: "Düzenle",
      Delete: "Sil",
      DeleteConfirm: "Silmek istediğinize emin misiniz?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `İpucu Şablonunu Düzenle ${readonly ? "(salt okunur)" : ""}`,
      Download: "İndir",
      Clone: "Kopyala",
    },
    Config: {
      Avatar: "Bot Avatarı",
      Name: "Bot İsmi",
      Sync: {
        Title: "Genel Yapılandırmayı Kullan",
        SubTitle: "Bu sohbette genel yapılandırmayı kullan",
        Confirm: "Özel yapılandırmayı genel yapılandırmayla değiştirmek için onaylıyor musunuz?",
      },
      HideContext: {
        Title: "Bağlam İpuçlarını Gizle",
        SubTitle: "Sohbette bağlam içi ipuçlarını gösterme",
      },
    },
  },
  NewChat: {
    Return: "Geri Dön",
    Skip: "Sadece Başla",
    Title: "Bir Maske Seçin",
    SubTitle: "Maskenin Arkasındaki Ruhla Sohbet Edin",
    More: "Daha Fazla Bul",
    NotShow: "Bir Daha Gösterme",
    ConfirmNoShow: "Devre dışı bırakmak için onaylayın? Daha sonra ayarlarda etkinleştirebilirsiniz.",
  },

  UI: {
    Confirm: "Onayla",
    Cancel: "İptal",
    Close: "Kapat",
    Create: "Oluştur",
    Edit: "Düzenle",
  },
};

export default az;