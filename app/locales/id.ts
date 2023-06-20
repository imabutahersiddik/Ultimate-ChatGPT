import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const id: RequiredLocaleType = {
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
      ChatList: "Ke Daftar Chat",
      CompressedHistory: "Riwayat Pesan Terkompresi",
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
      Reset: "Reset ke Default",
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
      Title: "Sertakan Konteks",
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
    Title: "Memory Prompt",
    EmptyContent: "Belum ada apa pun.",
    Send: "Kirim Memory",
    Copy: "Salin Memory",
    Reset: "Reset Sesi",
    ResetConfirm:
      "Merestart akan menghapus riwayat percakapan saat ini dan memori historis. Apakah Anda yakin ingin mereset?",
  },
  Home: {
    NewChat: "Obrolan Baru",
    DeleteChat: "Konfirmasi untuk menghapus percakapan yang dipilih?",
    DeleteToast: "Percakapan Dihapus",
    Revert: "Kembalikan",
  },
  Settings: {
    Title: "Pengaturan",
    SubTitle: "Semua Pengaturan",
    Actions: {
      ClearAll: "Hapus Semua Data",
      ResetAll: "Reset Semua Pengaturan",
      Close: "Tutup",
      ConfirmResetAll: "Apakah Anda yakin ingin mereset semua konfigurasi?",
      ConfirmClearAll: "Apakah Anda yakin ingin menghapus semua data?",
    },
    Lang: {
      Name: "Bahasa", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Semua Bahasa",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Ukuran Font",
      SubTitle: "Sesuaikan ukuran font konten chat",
    },
    Update: {
      Version: (x: string) => `Versi: ${x}`,
      IsLatest: "Versi terbaru",
      CheckUpdate: "Periksa Pembaruan",
      IsChecking: "Memeriksa pembaruan...",
      FoundUpdate: (x: string) => `Ditemukan versi baru: ${x}`,
      GoToUpdate: "Perbarui",
    },
    SendKey: "Tombol Kirim",
    Theme: "Tema",
    TightBorder: "Batas Ketat",
    SendPreviewBubble: {
      Title: "Balon Pratinjau Kirim",
      SubTitle: "Pratinjau markdown dalam balon",
    },
    Mask: {
      Title: "Mask Splash Screen",
      SubTitle: "Tampilkan layar mask sebelum memulai percakapan baru",
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
        Add: "Tambah Satu",
        Search: "Cari Prompts",
      },
      EditModal: {
        Title: "Edit Prompt",
      },
    },
    HistoryCount: {
      Title: "Jumlah Pesan Terlampir",
      SubTitle: "Jumlah pesan yang dikirim yang dilampirkan per permintaan",
    },
    CompressThreshold: {
      Title: "Ambang Batas Kompresi Riwayat",
      SubTitle:
        "Akan dikompres jika panjang pesan yang belum terkompresi melebihi nilai ini",
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
      SubTitle: "Endpoint khusus harus dimulai dengan http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Suhu",
      SubTitle: "Nilai yang lebih besar menghasilkan output yang lebih acak",
    },
    MaxTokens: {
      Title: "Token Maksimum",
      SubTitle: "Panjang maksimum token input dan token yang dihasilkan",
    },
    PresencePenalty: {
      Title: "Hukuman Kehadiran",
      SubTitle:
        "Nilai yang lebih besar meningkatkan kemungkinan untuk membicarakan topik baru",
    },
  },
  Store: {
    DefaultTopic: "Percakapan Baru",
    BotHello: "Halo! Bagaimana saya bisa membantu Anda hari ini?",
    Error: "Terjadi kesalahan, harap coba lagi nanti.",
    Prompt: {
      History: (content: string) =>
        "Ini adalah ringkasan riwayat percakapan sebagai pembaruan: " + content,
      Topic:
        "Harap buat judul berisi empat hingga lima kata yang merangkum percakapan kita tanpa pengantar, tanda baca, tanda kutip, titik, simbol, atau teks tambahan. Hapus tanda kutip yang melingkupinya.",
      Summarize:
        "Ringkas diskusi secara singkat dalam 200 kata atau kurang untuk digunakan sebagai prompt untuk konteks masa depan.",
    },
  },
  Copy: {
    Success: "Tersalin ke clipboard",
    Failed: "Penyalinan gagal, harap berikan izin untuk mengakses clipboard",
  },
  Context: {
    Toast: (x: any) => `Dengan ${x} prompts kontekstual`,
    Edit: "Prompts Kontekstual dan Memory",
    Add: "Tambahkan Prompt",
    Clear: "Konteks Dihapus",
    Revert: "Kembalikan",
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
        Title: "Sembunyikan Prompts Konteks",
        SubTitle: "Jangan tampilkan prompts konteks dalam percakapan",
      },
    },
  },
  NewChat: {
    Return: "Kembali",
    Skip: "Mulai Saja",
    Title: "Pilih Mask",
    SubTitle: "Berkomunikasi dengan Jiwa di Balik Masker",
    More: "Temukan Lebih Banyak",
    NotShow: "Jangan Tampilkan Lagi",
    ConfirmNoShow: "Konfirmasi untuk menonaktifkan? Anda dapat mengaktifkannya lagi di pengaturan.",
  },

  UI: {
    Confirm: "Konfirmasi",
    Cancel: "Batal",
    Close: "Tutup",
    Create: "Buat",
    Edit: "Edit",
  },
};

export default id;