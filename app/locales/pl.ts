import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

const pl: LocaleType = {
  WIP: "Wkrótce...",
  Error: {
    Unauthorized:
      "Wspieraj Ultimate ChatGPT na [Patreon](https://patreon.com/KiasK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link) lub za pomocą Bkash (+880 1812-715289), Wyślij przez [Worldremit](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob), Numer portfela mobilnego: +880 1812-715289, aby pomóc nam ulepszać i utrzymywać tę potężną wersję Ultimate ChatGPT.",
  },
  Auth: {
    Title: "Wymagane hasło dostępu",
    Tips: "Wprowadź poniżej hasło dostępu",
    Input: "hasło dostępu",
    Confirm: "Potwierdź",
    Later: "Później",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} wiadomości`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} wiadomości`,
    Actions: {
      ChatList: "Przejdź do listy czatów",
      CompressedHistory: "Skompresowany historii pamięciowe prompty",
      Export: "Eksportuj wszystkie wiadomości jako Markdown",
      Copy: "Kopiuj",
      Stop: "Zatrzymaj",
      Retry: "Ponów",
      Pin: "Przypnij",
      PinToastContent: "Przypięto 2 wiadomości jako prompty kontekstowe",
      PinToastAction: "Zobacz",
      Delete: "Usuń",
      Edit: "Edytuj",
    },
    Commands: {
      new: "Rozpocznij nowy czat",
      newm: "Rozpocznij nowy czat z maską",
      next: "Następny czat",
      prev: "Poprzedni czat",
      clear: "Wyczyść kontekst",
      del: "Usuń czat",
    },
    InputActions: {
      Stop: "Zatrzymaj",
      ToBottom: "Do najnowszej",
      Theme: {
        auto: "Automatyczny",
        light: "Jasny motyw",
        dark: "Ciemny motyw",
      },
      Prompt: "Prompty",
      Masks: "Maski",
      Clear: "Wyczyść kontekst",
      Settings: "Ustawienia",
    },
    Rename: "Zmień nazwę czatu",
    Typing: "Pisanie...",
    Input: (submitKey: string) => {
      let inputHints = `Naciśnij ${submitKey}, aby wysłać`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter, aby zawinąć";
      }
      return inputHints + ", /, aby wyszukać prompty, :, aby używać poleceń";
    },
    Send: "Wyślij",
    Config: {
      Reset: "Resetuj do domyślnych",
      SaveAs: "Zapisz jako maskę",
    },
  },
  Export: {
    Title: "Eksportuj wiadomości",
    Copy: "Skopiuj wszystko",
    Download: "Pobierz",
    MessageFromYou: "Wiadomość od Ciebie",
    MessageFromChatGPT: "Wiadomość od ChatGPT",
    Share: "Udostępnij na KiAsk Share",
    Format: {
      Title: "Format eksportu",
      SubTitle: "Markdown lub obraz PNG",
    },
    IncludeContext: {
      Title: "Zawieranie kontekstu",
      SubTitle: "Eksportuj prompty kontekstowe jako maskę lub nie",
    },
    Steps: {
      Select: "Wybierz",
      Preview: "Podgląd",
    },
    Image: {
      Toast: "Przechwytywanie obrazu...",
      Modal: "Przytrzymaj dłużej lub kliknij prawym przyciskiem, aby zapisać obraz",
    },
  },
  Select: {
    Search: "Szukaj",
    All: "Zaznacz wszystko",
    Latest: "Zaznacz najnowsze",
    Clear: "Wyczyść",
  },
  Memory: {
    Title: "Prompt pamięciowe",
    EmptyContent: "Nic jeszcze.",
    Send: "Wyślij prompt pamięciowy",
    Copy: "Kopiuj prompt pamięciowy",
    Reset: "Resetuj sesję",
    ResetConfirm:
      "Resetowanie spowoduje usunięcie historii rozmowy i pamięci historycznej. Czy na pewno chcesz zresetować?",
  },
  Home: {
    NewChat: "Nowy czat",
    DeleteChat: "Potwierdź usunięcie wybranego rozmowy?",
    DeleteToast: "Czat usunięty",
    Revert: "Przywróć",
  },
  Settings: {
    Title: "Ustawienia",
    SubTitle: "Wszystkie ustawienia",
    Danger: {
      Reset: {
        Title: "Resetuj wszystkie ustawienia",
        SubTitle: "Zresetuj wszystkie elementy ustawień do domyślnych",
        Action: "Resetuj",
        Confirm: "Czy na pewno chcesz zresetować wszystkie ustawienia do domyślnych?",
      },
      Clear: {
        Title: "Wyczyść wszystkie dane",
        SubTitle: "Wyczyść wszystkie wiadomości i ustawienia",
        Action: "Wyczyść",
        Confirm: "Czy na pewno chcesz wyczyścić wszystkie wiadomości i ustawienia?",
      },
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

    InputTemplate: {
      Title: "Szablon wejściowy",
      SubTitle: "Najnowsza wiadomość zostanie wypełniona tym szablonem",
    },

    Update: {
      Version: (x: string) => `Wersja: ${x}`,
      IsLatest: "Najnowsza wersja",
      CheckUpdate: "Sprawdź aktualizację",
      IsChecking: "Sprawdzanie aktualizacji...",
      FoundUpdate: (x: string) => `Znaleziono nową wersję: ${x}`,
      GoToUpdate: "Aktualizuj",
    },
    SendKey: "Klawisz wysyłania",
    Theme: "Motyw",
    TightBorder: "Ciasny obramowanie",
    SendPreviewBubble: {
      Title: "Podgląd wysyłania",
      SubTitle: "Podgląd markdown w dymku",
    },
    Mask: {
      Splash: {
        Title: "Ekran powitalny maski",
        SubTitle: "Pokaż ekran powitalny maski przed rozpoczęciem nowego czatu",
      },
      Builtin: {
        Title: "Ukryj wbudowane maski",
        SubTitle: "Ukryj wbudowane maski na liście masek",
      },
    },
    Prompt: {
      Disable: {
        Title: "Wyłącz automatyczne uzupełnianie",
        SubTitle: "Wpisz /, aby uruchomić automatyczne uzupełnianie",
      },
      List: "Lista promptów",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} wbudowane, ${custom} zdefiniowane przez użytkownika`,
      Edit: "Edytuj",
      Modal: {
        Title: "Lista promptów",
        Add: "Dodaj",
        Search: "Szukaj promptów",
      },
      EditModal: {
        Title: "Edytuj prompt",
      },
    },
    HistoryCount: {
      Title: "Liczba dołączonych wiadomości",
      SubTitle: "Liczba wysłanych wiadomości dołączonych w jednym żądaniu",
    },
    CompressThreshold: {
      Title: "Próg kompresji historii",
      SubTitle:
        "Kompresuje wiadomości, jeśli długość nieskompresowanej historii przekracza tę wartość",
    },
    Token: {
      Title: "Klucz API",
      SubTitle: "Użyj swojego klucza, aby zignorować limit hasła dostępu",
      Placeholder: "Klucz OpenAI API",
    },
    Usage: {
      Title: "Stan konta",
      SubTitle(used: any, total: any) {
        return `Wykorzystano w tym miesiącu ${used}, subskrypcja ${total}`;
      },
      IsChecking: "Sprawdzanie...",
      Check: "Sprawdź",
      NoAccess: "Wprowadź klucz API, aby sprawdzić saldo",
    },
    AccessCode: {
      Title: "Kod dostępu",
      SubTitle: "Włączona kontrola dostępu",
      Placeholder: "Wymagane hasło dostępu",
    },
    Endpoint: {
      Title: "Koniec",
      SubTitle: "Niestandardowy koniec musi zaczynać się od http(s)://",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperatura",
      SubTitle: "Większa wartość powoduje bardziej losowe wyjście",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Nie zmieniaj tej wartości razem z temperaturą",
    },
    MaxTokens: {
      Title: "Maksymalna liczba tokenów",
      SubTitle: "Maksymalna długość tokenów wejściowych i generowanych tokenów",
    },
    PresencePenalty: {
      Title: "Kara obecności",
      SubTitle:
        "Większa wartość zwiększa prawdopodobieństwo rozmowy na nowe tematy",
    },
    FrequencyPenalty: {
      Title: "Kara częstotliwości",
      SubTitle:
        "Większa wartość zmniejsza prawdopodobieństwo powtórzenia tej samej linii",
    },
  },
  Store: {
    DefaultTopic: "Nowa rozmowa",
    BotHello: "Cześć! Jak mogę Ci dzisiaj pomóc?",
    Error: "Coś poszło nie tak, spróbuj ponownie później.",
    Prompt: {
      History: (content: string) =>
        "To jest podsumowanie historii czatu: " + content,
      Topic:
        "Proszę wygenerować tytuł czterech do pięciu słów podsumowujący naszą rozmowę, bez żadnych wstępów, interpunkcji, cudzysłowów, kropek, symboli ani dodatkowego tekstu. Usuń cudzysłowy otwierające i zamykające.",
      Summarize:
        "Zwięźle podsumuj dyskusję w 200 słowach lub mniej, aby użyć jej jako promptu dla przyszłego kontekstu.",
    },
  },
  Copy: {
    Success: "Skopiowano do schowka",
    Failed: "Nie udało się skopiować, proszę udziel uprawnień dostępu do schowka",
  },
  Context: {
    Toast: (x: any) => `Z ${x} promptami kontekstowymi`,
    Edit: "Bieżące ustawienia czatu",
    Add: "Dodaj prompt",
    Clear: "Wyczyść kontekst",
    Revert: "Przywróć",
  },
  Plugin: {
    Name: "Wtyczka",
  },
  Mask: {
    Name: "Maska",
    Page: {
      Title: "Szablon promptu",
      SubTitle: (count: number) => `${count} szablonów promptów`,
      Search: "Szukaj szablonów",
      Create: "Utwórz",
    },
    Item: {
      Info: (count: number) => `${count} promptów`,
      Chat: "Czat",
      View: "Podgląd",
      Edit: "Edytuj",
      Delete: "Usuń",
      DeleteConfirm: "Potwierdź usunięcie?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edytuj szablon promptu ${readonly ? "(tylko do odczytu)" : ""}`,
      Download: "Pobierz",
      Clone: "Klonuj",
    },
    Config: {
      Avatar: "Awatar bota",
      Name: "Nazwa bota",
      Sync: {
        Title: "Użyj globalnej konfiguracji",
        SubTitle: "Użyj globalnej konfiguracji w tym czacie",
        Confirm: "Czy na pewno chcesz zastąpić niestandardową konfigurację globalną konfiguracją?",
      },
      HideContext: {
        Title: "Ukryj prompty kontekstowe",
        SubTitle: "Nie pokazuj promptów kontekstowych w czacie",
      },
      Share: {
        Title: "Udostępnij tę maskę",
        SubTitle: "Wygeneruj link do tej maski",
        Action: "Kopiuj link",
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
    ConfirmNoShow: "Czy na pewno chcesz wyłączyć? Możesz włączyć to później w ustawieniach.",
  },

  UI: {
    Confirm: "Potwierdź",
    Cancel: "Anuluj",
    Close: "Zamknij",
    Create: "Utwórz",
    Edit: "Edytuj",
  },
  Exporter: {
    Model: "Model",
    Messages: "Wiadomości",
    Topic: "Temat",
    Time: "Czas",
  },
};

export default pl;
