import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const pl: RequiredLocaleType = {
  WIP: "Wkrótce...",
  Error: {
    Unauthorized:
      "Nieautoryzowany dostęp, proszę wprowadzić kod dostępu na stronie [auth](/#/auth).",
  },
  Auth: {
    Title: "Wymagany kod dostępu",
    Tips: "Proszę wprowadzić poniżej kod dostępu",
    Input: "kod dostępu",
    Confirm: "Potwierdź",
    Later: "Później",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} wiadomości`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} wiadomości z The ChatGPT`,
    Actions: {
      ChatList: "Przejdź do listy czatów",
      CompressedHistory: "Skompresowany kontekst historii",
      Export: "Eksportuj wszystkie wiadomości jako Markdown",
      Copy: "Kopiuj",
      Stop: "Zatrzymaj",
      Retry: "Ponów",
      Delete: "Usuń",
    },
    InputActions: {
      Stop: "Zatrzymaj",
      ToBottom: "Do najnowszych",
      Theme: {
        auto: "Automatyczny",
        light: "Jasny motyw",
        dark: "Ciemny motyw",
      },
      Prompt: "Podpowiedzi",
      Masks: "Maski",
      Clear: "Wyczyść kontekst",
      Settings: "Ustawienia",
    },
    Rename: "Zmień nazwę czatu",
    Typing: "Pisanie...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} aby wysłać`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter aby przerwać wiersz";
      }
      return inputHints + ", / aby wyszukać podpowiedzi";
    },
    Send: "Wyślij",
    Config: {
      Reset: "Zresetuj do domyślnych",
      SaveAs: "Zapisz jako maskę",
    },
  },
  Export: {
    Title: "Eksportuj wiadomości",
    Copy: "Kopiuj wszystko",
    Download: "Pobierz",
    MessageFromYou: "Wiadomość od Ciebie",
    MessageFromChatGPT: "Wiadomość od The ChatGPT",
    Share: "Udostępnij w KiAsk Share",
    Format: {
      Title: "Format eksportu",
      SubTitle: "Markdown lub obraz PNG",
    },
    IncludeContext: {
      Title: "Zawieranie kontekstu",
      SubTitle: "Eksportuj podpowiedzi kontekstowe jako maskę lub nie",
    },
    Steps: {
      Select: "Wybierz",
      Preview: "Podgląd",
    },
  },
  Select: {
    Search: "Wyszukaj",
    All: "Zaznacz wszystko",
    Latest: "Zaznacz najnowsze",
    Clear: "Wyczyść",
  },
  Memory: {
    Title: "Kontekst historii",
    EmptyContent: "Nic tutaj jeszcze nie ma.",
    Send: "Wyślij kontekst",
    Copy: "Kopiuj kontekst",
    Reset: "Resetuj sesję",
    ResetConfirm:
      "Resetowanie spowoduje usunięcie bieżącej historii rozmowy i kontekstu historycznego. Czy na pewno chcesz zresetować?",
  },
  Home: {
    NewChat: "Nowy czat",
    DeleteChat: "Potwierdź usunięcie wybranej rozmowy?",
    DeleteToast: "Czat usunięty",
    Revert: "Cofnij",
  },
  Settings: {
    Title: "Ustawienia",
    SubTitle: "Wszystkie ustawienia",
    Actions: {
      ClearAll: "Wyczyść wszystkie dane",
      ResetAll: "Resetuj wszystkie ustawienia",
      Close: "Zamknij",
      ConfirmResetAll: "Czy na pewno chcesz zresetować wszystkie konfiguracje?",
      ConfirmClearAll: "Czy na pewno chcesz zresetować wszystkie dane?",
    },
    Lang: {
      Name: "Język", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Wszystkie języki",
    },
    Avatar: "Awatar",
    FontSize: {
      Title: "Rozmiar czcionki",
      SubTitle: "Dostosuj rozmiar czcionki treści czatu",
    },
    Update: {
      Version: (x: string) => `Wersja: ${x}`,
      IsLatest: "Najnowsza wersja",
      CheckUpdate: "Sprawdź aktualizację",
      IsChecking: "Sprawdzanie aktualizacji...",
      FoundUpdate: (x: string) => `Znaleziono nową wersję: ${x}`,
      GoToUpdate: "Aktualizuj",
    },
    SendKey: "Klucz wysyłania",
    Theme: "Motyw",
    TightBorder: "Ciasna krawędź",
    SendPreviewBubble: {
      Title: "Podgląd wysyłania",
      SubTitle: "Podgląd Markdown w dymku",
    },
    Mask: {
      Title: "Ekran powitalny maski",
      SubTitle: "Pokaż ekran powitalny maski przed rozpoczęciem nowego czatu",
    },
    Prompt: {
      Disable: {
        Title: "Wyłącz automatyczne uzupełnianie",
        SubTitle: "Wprowadź / aby uruchomić automatyczne uzupełnianie",
      },
      List: "Lista podpowiedzi",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} wbudowane, ${custom} zdefiniowane przez użytkownika`,
      Edit: "Edytuj",
      Modal: {
        Title: "Lista podpowiedzi",
        Add: "Dodaj jedną",
        Search: "Wyszukaj podpowiedzi",
      },
      EditModal: {
        Title: "Edytuj podpowiedź",
      },
    },
    HistoryCount: {
      Title: "Liczba dołączonych wiadomości",
      SubTitle: "Liczba wysłanych wiadomości dołączonych do jednego żądania",
    },
    CompressThreshold: {
      Title: "Próg kompresji historii",
      SubTitle:
        "Dokona kompresji, jeśli długość niekompresowanych wiadomości przekracza tę wartość",
    },
    Token: {
      Title: "Klucz API",
      SubTitle: "Użyj swojego klucza, aby zignorować limit kodu dostępu",
      Placeholder: "Klucz OpenAI API",
    },
    Usage: {
      Title: "Stan konta",
      SubTitle(used: any, total: any) {
        return `Użyto w tym miesiącu $${used}, subskrypcja $${total}`;
      },
      IsChecking: "Sprawdzanie...",
      Check: "Sprawdź",
      NoAccess: "Wprowadź klucz API, aby sprawdzić saldo",
    },
    AccessCode: {
      Title: "Kod dostępu",
      SubTitle: "Włączona kontrola dostępu",
      Placeholder: "Wymagany kod dostępu",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Niestandardowy endpoint musi zaczynać się od http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperatura",
      SubTitle: "Większa wartość powoduje bardziej losowe wyniki",
    },
    MaxTokens: {
      Title: "Maksymalna liczba tokenów",
      SubTitle: "Maksymalna liczba tokenów wejściowych i wygenerowanych tokenów",
    },
    PresencePenalty: {
      Title: "Kara obecności",
      SubTitle:
        "Większa wartość zwiększa prawdopodobieństwo rozmowy na nowe tematy",
    },
  },
  Store: {
    DefaultTopic: "Nowa rozmowa",
    BotHello: "Cześć! W czym mogę pomóc?",
    Error: "Coś poszło nie tak, spróbuj ponownie później.",
    Prompt: {
      History: (content: string) =>
        "To jest podsumowanie historii czatu: " + content,
      Topic:
        "Proszę wygenerować tytuł składający się z czterech do pięciu słów podsumowujący naszą rozmowę bez wprowadzenia, interpunkcji, cudzysłowów, kropek, symboli ani dodatkowego tekstu. Usuń cudzysłowy zewnętrzne.",
      Summarize:
        "Krótko podsumuj dyskusję w 200 słowach lub mniej, aby użyć jej jako podpowiedzi dla przyszłego kontekstu.",
    },
  },
  Copy: {
    Success: "Skopiowano do schowka",
    Failed: "Kopiowanie nie powiodło się, proszę udzielić dostępu do schowka",
  },
  Context: {
    Toast: (x: any) => `Z ${x} podpowiedziami kontekstowymi`,
    Edit: "Podpowiedzi kontekstowe i pamięciowe",
    Add: "Dodaj podpowiedź",
    Clear: "Wyczyść kontekst",
    Revert: "Cofnij",
  },
  Plugin: {
    Name: "Wtyczka",
  },
  Mask: {
    Name: "Maska",
    Page: {
      Title: "Szablon podpowiedzi",
      SubTitle: (count: number) => `${count} szablonów podpowiedzi`,
      Search: "Wyszukaj szablony",
      Create: "Utwórz",
    },
    Item: {
      Info: (count: number) => `${count} podpowiedzi`,
      Chat: "Czat",
      View: "Podgląd",
      Edit: "Edytuj",
      Delete: "Usuń",
      DeleteConfirm: "Potwierdzić usunięcie?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edytuj szablon podpowiedzi ${readonly ? "(tylko do odczytu)" : ""}`,
      Download: "Pobierz",
      Clone: "Klonuj",
    },
    Config: {
      Avatar: "Awatar bota",
      Name: "Nazwa bota",
      Sync: {
        Title: "Użyj globalnej konfiguracji",
        SubTitle: "Użyj globalnej konfiguracji w tym czacie",
        Confirm: "Potwierdzić zastąpienie niestandardowej konfiguracji globalną konfiguracją?",
      },
      HideContext: {
        Title: "Ukryj podpowiedzi kontekstowe",
        SubTitle: "Nie pokazuj podpowiedzi kontekstowych w czacie",
      },
    },
  },
  NewChat: {
    Return: "Powrót",
    Skip: "Rozpocznij",
    Title: "Wybierz maskę",
    SubTitle: "Rozmawiaj z duszą za maską",
    More: "Znajdź więcej",
    NotShow: "Nigdy więcej nie pokazuj",
    ConfirmNoShow: "Potwierdzić wyłączenie? Możesz włączyć to w ustawieniach później.",
  },

  UI: {
    Confirm: "Potwierdź",
    Cancel: "Anuluj",
    Close: "Zamknij",
    Create: "Utwórz",
    Edit: "Edytuj",
  },
};

export default pl;