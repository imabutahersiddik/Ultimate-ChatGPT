import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const en: RequiredLocaleType = {
  WIP: "Segera Hadir...",
  Error: {
    Unauthorized:
      "Akses tidak sah, harap masukkan kode akses di halaman [auth](/#/auth).",
  },
  Auth: {
    Title: "Butuh Kode Akses",
    Tips: "Silakan masukkan kode akses di bawah ini",
    Input: "kode akses",
    Confirm: "Konfirmasi",
    Later: "Nanti",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} pesan`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} pesan dengan The ChatGPT`,
    Actions: {
      ChatList: "Buka Daftar Chat",
      CompressedHistory: "Riwayat Memori Ringkas",
      Export: "Ekspor Semua Pesan sebagai Markdown",
      Copy: "Salin",
      Stop: "Berhenti",
      Retry: "Coba Lagi",
      Delete: "Hapus",
    },
    InputActions: {
      Stop: "Berhenti",
      ToBottom: "Ke Terbaru",
      Theme: {
        auto: "Otomatis",
        light: "Tema Terang",
        dark: "Tema Gelap",
      },
      Prompt: "Prompts",
      Masks: "Masks",
      Clear: "Hapus Konteks",
      Settings: "Pengaturan",
    },
    Rename: "Ubah Nama Chat",
    Typing: "Mengetik...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} untuk mengirim`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter untuk membalut";
      }
      return inputHints + ", / untuk mencari prompts";
    },
    Send: "Kirim",
    Config: {
      Reset: "Setel Ulang ke Default",
      SaveAs: "Simpan sebagai Mask",
    },
  },
  Export: {
    Title: "Ekspor Pesan",
    Copy: "Salin Semua",
    Download: "Unduh",
    MessageFromYou: "Pesan Dari Anda",
    MessageFromChatGPT: "Pesan Dari The ChatGPT",
    Share: "Bagikan ke KiAsk Share",
    Format: {
      Title: "Format Ekspor",
      SubTitle: "Markdown atau Gambar PNG",
    },
    IncludeContext: {
      Title: "Termasuk Konteks",
      SubTitle: "Ekspor konteks prompts dalam mask atau tidak",
    },
    Steps: {
      Select: "Pilih",
      Preview: "Pratinjau",
    },
  },
  Select: {
    Search: "Cari",
    All: "Pilih Semua",
    Latest: "Pilih Terbaru",
    Clear: "Hapus",
  },
  Memory: {
    Title: "Memori Prompt",
    EmptyContent: "Belum ada.",
    Send: "Kirim Memori",
    Copy: "Salin Memori",
    Reset: "Setel Ulang Sesi",
    ResetConfirm:
      "Setel ulang akan menghapus riwayat percakapan saat ini dan memori historis. Apakah Anda yakin ingin setel ulang?",
  },
  Home: {
    NewChat: "Chat Baru",
    DeleteChat: "Konfirmasi untuk menghapus percakapan yang dipilih?",
    DeleteToast: "Chat Dihapus",
    Revert: "Kembali",
  },
  Settings: {
    Title: "Pengaturan",
    SubTitle: "Semua Pengaturan",
    Actions: {
      ClearAll: "Hapus Semua Data",
      ResetAll: "Setel Ulang Semua Pengaturan",
      Close: "Tutup",
      ConfirmResetAll: "Apakah Anda yakin ingin mengatur ulang semua konfigurasi?",
      ConfirmClearAll: "Apakah Anda yakin ingin mengatur ulang semua data?",
    },
    Lang: {
      Name: "Bahasa", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Semua Bahasa",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Ukuran Font",
      SubTitle: "Atur ukuran font konten chat",
    },
    Update: {
      Version: (x: string) => `Versi: ${x}`,
      IsLatest: "Versi terbaru",
      CheckUpdate: "Periksa Pembaruan",
      IsChecking: "Memeriksa pembaruan...",
      FoundUpdate: (x: string) => `Ditemukan versi baru: ${x}`,
      GoToUpdate: "Perbarui",
    },
    SendKey: "Kunci Kirim",
    Theme: "Tema",
    TightBorder: "Batas Ketat",
    SendPreviewBubble: {
      Title: "Balon Pratinjau Kirim",
      SubTitle: "Pratinjau markdown dalam balon",
    },
    Mask: {
      Title: "Splash Screen Mask",
      SubTitle: "Tampilkan splash screen mask sebelum memulai percakapan baru",
    },
    Prompt: {
      Disable: {
        Title: "Nonaktifkan autocompletion",
        SubTitle: "Masukkan / untuk memicu autocompletion",
      },
      List: "Daftar Prompt",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} bawaan, ${custom} buatan pengguna`,
      Edit: "Edit",
      Modal: {
        Title: "Daftar Prompt",
        Add: "Tambahkan Satu",
        Search: "Cari Prompts",
      },
      EditModal: {
        Title: "Edit Prompt",
      },
    },
    HistoryCount: {
      Title: "Jumlah Pesan Terlampir",
      SubTitle: "Jumlah pesan yang dikirimkan terlampir per permintaan",
    },
    CompressThreshold: {
      Title: "Ambang Batas Kompresi Riwayat",
      SubTitle:
        "Akan dikompres jika panjang pesan yang belum dikompresi melebihi nilai ini",
    },
    Token: {
      Title: "Kunci API",
      SubTitle: "Gunakan kunci Anda untuk mengabaikan batas kode akses",
      Placeholder: "Kunci API OpenAI",
    },
    Usage: {
      Title: "Saldo Akun",
      SubTitle(used: any, total: any) {
        return `Digunakan bulan ini $${used}, langganan $${total}`;
      },
      IsChecking: "Memeriksa...",
      Check: "Periksa",
      NoAccess: "Masukkan Kunci API untuk memeriksa saldo",
    },
    AccessCode: {
      Title: "Kode Akses",
      SubTitle: "Kontrol akses diaktifkan",
      Placeholder: "Butuh Kode Akses",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Endpoint kustom harus dimulai dengan http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Suhu",
      SubTitle: "Nilai yang lebih besar menghasilkan keluaran yang lebih acak",
    },
    MaxTokens: {
      Title: "Token Maksimum",
      SubTitle: "Panjang maksimum token input dan token yang dihasilkan",
    },
    PresencePenalty: {
      Title: "Penalti Keberadaan",
      SubTitle:
        "Nilai yang lebih besar meningkatkan kemungkinan untuk membicarakan topik baru",
    },
  },
  Store: {
    DefaultTopic: "Percakapan Baru",
    BotHello: "Halo! Bagaimana saya bisa membantu Anda hari ini?",
    Error: "Ada yang salah, harap coba lagi nanti.",
    Prompt: {
      History: (content: string) =>
        "Ini adalah ringkasan riwayat percakapan sebagai pembaruan: " + content,
      Topic:
        "Harap buat judul empat hingga lima kata yang merangkum percakapan kita tanpa ada pengantar, tanda baca, tanda kutip, titik, simbol, atau teks tambahan. Hapus tanda kutip yang melingkari.",
      Summarize:
        "Ringkas diskusi secara singkat dalam 200 kata atau kurang untuk digunakan sebagai prompt untuk konteks masa depan.",
    },
  },
  Copy: {
    Success: "Tersalin ke clipboard",
    Failed: "Gagal menyalin, harap izinkan akses ke clipboard",
  },
  Context: {
    Toast: (x: any) => `Dengan ${x} prompt kontekstual`,
    Edit: "Prompt Kontekstual dan Memori",
    Add: "Tambahkan Prompt",
    Clear: "Konteks Dihapus",
    Revert: "Kembali",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Mask",
    Page: {
      Title: "Template Prompt",
      SubTitle: (count: number) => `${count} template prompt`,
      Search: "Cari Template",
      Create: "Buat",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Chat",
      View: "Lihat",
      Edit: "Edit",
      Delete: "Hapus",
      DeleteConfirm: "Konfirmasi untuk menghapus?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Template Prompt ${readonly ? "(hanya baca)" : ""}`,
      Download: "Unduh",
      Clone: "Duplikat",
    },
    Config: {
      Avatar: "Avatar Bot",
      Name: "Nama Bot",
      Sync: {
        Title: "Gunakan Konfigurasi Global",
        SubTitle: "Gunakan konfigurasi global dalam percakapan ini",
        Confirm: "Konfirmasi untuk mengganti konfigurasi kustom dengan konfigurasi global?",
      },
      HideContext: {
        Title: "Sembunyikan Prompt Konteks",
        SubTitle: "Jangan tampilkan prompt konteks dalam chat",
      },
    },
  },
  NewChat: {
    Return: "Kembali",
    Skip: "Mulai Saja",
    Title: "Pilih Mask",
    SubTitle: "Chat dengan Jiwa di Balik Masker",
    More: "Temukan Lebih Banyak",
    NotShow: "Jangan Tampilkan Lagi",
    ConfirmNoShow: "Konfirmasi untuk menonaktifkan? Anda dapat mengaktifkannya kembali di pengaturan nanti.",
  },

  UI: {
    Confirm: "Konfirmasi",
    Cancel: "Batal",
    Close: "Tutup",
    Create: "Buat",
    Edit: "Edit",
  },
};

export default is;