import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

// if you are adding a new translation, please use PartialLocaleType instead of LocaleType
const id: LocaleType = {
  WIP: "Segera Hadir...",
  Error: {
    Unauthorized:
      "Dukung Ultimate ChatGPT di [Patreon](https://patreon.com/KiasK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link) atau melalui Bkash (+880 1812-715289), Kirim menggunakan [Worldremit](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob), Nomor Dompet Seluler: +880 1812-715289 untuk membantu kami meningkatkan dan memelihara Ultimate ChatGPT yang kuat ini.",
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
    SubTitle: (count: number) => `${count} pesan`,
    Actions: {
      ChatList: "Ke Daftar Chat",
      CompressedHistory: "Memori Prompt Riwayat Terkompresi",
      Export: "Ekspor Semua Pesan sebagai Markdown",
      Copy: "Salin",
      Stop: "Berhenti",
      Retry: "Coba Lagi",
      Pin: "Pin",
      PinToastContent: "Memasang 2 pesan sebagai prompt kontekstual",
      PinToastAction: "Lihat",
      Delete: "Hapus",
      Edit: "Edit",
    },
    Commands: {
      new: "Mulai obrolan baru",
      newm: "Mulai obrolan baru dengan masker",
      next: "Obrolan Selanjutnya",
      prev: "Obrolan Sebelumnya",
      clear: "Hapus Konteks",
      del: "Hapus Obrolan",
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
      Masks: "Masker",
      Clear: "Hapus Konteks",
      Settings: "Pengaturan",
    },
    Rename: "Ganti Nama Obrolan",
    Typing: "Mengetik...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} untuk mengirim`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter untuk ganti baris";
      }
      return inputHints + ", / untuk mencari prompts, : untuk menggunakan perintah";
    },
    Send: "Kirim",
    Config: {
      Reset: "Atur Ulang ke Default",
      SaveAs: "Simpan sebagai Masker",
    },
  },
  Export: {
    Title: "Ekspor Pesan",
    Copy: "Salin Semua",
    Download: "Unduh",
    MessageFromYou: "Pesan Dari Kamu",
    MessageFromChatGPT: "Pesan Dari ChatGPT",
    Share: "Bagikan ke KiAsk Share",
    Format: {
      Title: "Format Ekspor",
      SubTitle: "Markdown atau Gambar PNG",
    },
    IncludeContext: {
      Title: "Termasuk Konteks",
      SubTitle: "Ekspor prompt konteks dalam masker atau tidak",
    },
    Steps: {
      Select: "Pilih",
      Preview: "Pratinjau",
    },
    Image: {
      Toast: "Mengambil Gambar...",
      Modal: "Tekan lama atau klik kanan untuk menyimpan gambar",
    },
  },
  Select: {
    Search: "Cari",
    All: "Pilih Semua",
    Latest: "Pilih Terbaru",
    Clear: "Hapus",
  },
  Memory: {
    Title: "Prompt Memori",
    EmptyContent: "Belum ada.",
    Send: "Kirim Memori",
    Copy: "Salin Memori",
    Reset: "Atur Ulang Sesi",
    ResetConfirm:
      "Mereset akan menghapus riwayat percakapan saat ini dan memori historis. Apakah Anda yakin ingin mereset?",
  },
  Home: {
    NewChat: "Obrolan Baru",
    DeleteChat: "Konfirmasi untuk menghapus percakapan yang dipilih?",
    DeleteToast: "Obrolan Dihapus",
    Revert: "Kembali",
  },
  Settings: {
    Title: "Pengaturan",
    SubTitle: "Semua Pengaturan",
    Danger: {
      Reset: {
        Title: "Atur Ulang Semua Pengaturan",
        SubTitle: "Atur ulang semua item pengaturan ke default",
        Action: "Atur Ulang",
        Confirm: "Konfirmasi untuk mengatur ulang semua pengaturan ke default?",
      },
      Clear: {
        Title: "Hapus Semua Data",
        SubTitle: "Hapus semua pesan dan pengaturan",
        Action: "Hapus",
        Confirm: "Konfirmasi untuk menghapus semua pesan dan pengaturan?",
      },
    },
    Lang: {
      Name: "Bahasa", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Semua Bahasa",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Ukuran Font",
      SubTitle: "Atur ukuran font konten obrolan",
    },

    InputTemplate: {
      Title: "Template Input",
      SubTitle: "Pesan terbaru akan diisi ke template ini",
    },

    Update: {
      Version: (x: string) => `Versi: ${x}`,
      IsLatest: "Versi terbaru",
      CheckUpdate: "Periksa Pembaruan",
      IsChecking: "Memeriksa pembaruan...",
      FoundUpdate: (x: string) => `Ditemukan versi baru: ${x}`,
      GoToUpdate: "Perbarui",
    },
    SendKey: "Kirim Kunci",
    Theme: "Tema",
    TightBorder: "Batas Ketat",
    SendPreviewBubble: {
      Title: "Kirim Balon Pratinjau",
      SubTitle: "Pratinjau markdown dalam balon",
    },
    Mask: {
      Splash: {
        Title: "Layar Pembuka Masker",
        SubTitle: "Tampilkan layar pembuka masker sebelum memulai obrolan baru",
      },
      Builtin: {
        Title: "Sembunyikan Masker Bawaan",
        SubTitle: "Sembunyikan masker bawaan dalam daftar masker",
      },
    },
    Prompt: {
      Disable: {
        Title: "Nonaktifkan autocompletion",
        SubTitle: "Masukkan / untuk memicu autocompletion",
      },
      List: "Daftar Prompt",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} bawaan, ${custom} yang ditentukan pengguna`,
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
      SubTitle: "Jumlah pesan yang dikirimkan terlampir per permintaan",
    },
    CompressThreshold: {
      Title: "Ambang Batas Kompresi Riwayat",
      SubTitle:
        "Akan dikompresi jika panjang pesan yang belum dikompresi melebihi nilai ini",
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
    TopP: {
      Title: "Top P",
      SubTitle: "Jangan mengubah nilai ini bersamaan dengan suhu",
    },
    MaxTokens: {
      Title: "Token Maksimum",
      SubTitle: "Panjang maksimum token input dan token yang dihasilkan",
    },
    PresencePenalty: {
      Title: "Hukuman Keberadaan",
      SubTitle:
        "Nilai yang lebih besar meningkatkan kemungkinan untuk membicarakan topik baru",
    },
    FrequencyPenalty: {
      Title: "Hukuman Frekuensi",
      SubTitle:
        "Nilai yang lebih besar mengurangi kemungkinan mengulang baris yang sama",
    },
  },
  Store: {
    DefaultTopic: "Percakapan Baru",
    BotHello: "Halo! Bagaimana saya bisa membantu Anda hari ini?",
    Error: "Terjadi kesalahan, silakan coba lagi nanti.",
    Prompt: {
      History: (content: string) =>
        "Ini adalah ringkasan riwayat percakapan sebagai pengingat: " + content,
      Topic:
        "Harap buat judul empat hingga lima kata yang merangkum percakapan kita tanpa kalimat pengantar, tanda baca, tanda kutip, tanda titik, simbol, atau teks tambahan. Hapus tanda kutip yang melingkupi.",
      Summarize:
        "Ringkas diskusi secara singkat dalam 200 kata atau kurang untuk digunakan sebagai prompt untuk konteks masa depan.",
    },
  },
  Copy: {
    Success: "Disalin ke clipboard",
    Failed: "Gagal menyalin, izinkan akses ke clipboard",
  },
  Context: {
    Toast: (x: any) => `Dengan ${x} prompt kontekstual`,
    Edit: "Pengaturan Obrolan Saat Ini",
    Add: "Tambahkan Prompt",
    Clear: "Konteks Dihapus",
    Revert: "Kembali",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Masker",
    Page: {
      Title: "Template Prompt",
      SubTitle: (count: number) => `${count} template prompt`,
      Search: "Cari Template",
      Create: "Buat",
    },
    Item: {
      Info: (count: number) => `${count} prompt`,
      Chat: "Obrolan",
      View: "Lihat",
      Edit: "Edit",
      Delete: "Hapus",
      DeleteConfirm: "Konfirmasi untuk menghapus?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Template Prompt ${readonly ? "(baca saja)" : ""}`,
      Download: "Unduh",
      Clone: "Duplikat",
    },
    Config: {
      Avatar: "Avatar Bot",
      Name: "Nama Bot",
      Sync: {
        Title: "Gunakan Konfigurasi Global",
        SubTitle: "Gunakan konfigurasi global dalam obrolan ini",
        Confirm: "Konfirmasi untuk mengganti konfigurasi kustom dengan konfigurasi global?",
      },
      HideContext: {
        Title: "Sembunyikan Prompt Konteks",
        SubTitle: "Jangan tampilkan prompt konteks dalam obrolan",
      },
      Share: {
        Title: "Bagikan Masker Ini",
        SubTitle: "Buat tautan untuk masker ini",
        Action: "Salin Tautan",
      },
    },
  },
  NewChat: {
    Return: "Kembali",
    Skip: "Langsung Mulai",
    Title: "Pilih Masker",
    SubTitle: "Obrolan dengan Jiwa di Balik Masker",
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
  Exporter: {
    Model: "Model",
    Messages: "Pesan",
    Topic: "Topik",
    Time: "Waktu",
  },
};

export default id;
