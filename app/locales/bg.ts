import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const bg: RequiredLocaleType = {
  WIP: "Очаквайте скоро...",
  Error: {
    Unauthorized:
      "Неразрешен достъп, моля въведете код за достъп на страницата [auth](/#/auth).",
  },
  Auth: {
    Title: "Нужен е код за достъп",
    Tips: "Моля въведете кода за достъп по-долу",
    Input: "код за достъп",
    Confirm: "Потвърди",
    Later: "По-късно",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} съобщения`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} съобщения с The ChatGPT`,
    Actions: {
      ChatList: "Към списъка с чатове",
      CompressedHistory: "История на компресирана памет",
      Export: "Експортиране на всички съобщения като Markdown",
      Copy: "Копиране",
      Stop: "Спиране",
      Retry: "Повторен опит",
      Delete: "Изтриване",
    },
    InputActions: {
      Stop: "Спиране",
      ToBottom: "Към последното",
      Theme: {
        auto: "Автоматично",
        light: "Светла тема",
        dark: "Тъмна тема",
      },
      Prompt: "Подсказки",
      Masks: "Маски",
      Clear: "Изчистване на контекста",
      Settings: "Настройки",
    },
    Rename: "Преименуване на чата",
    Typing: "Пише...",
    Input: (submitKey: string) => {
      var inputHints = `натиснете ${submitKey} за изпращане`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter за пренасяне";
      }
      return inputHints + ", / за търсене на подсказки";
    },
    Send: "Изпрати",
    Config: {
      Reset: "Възстановяване на настройките по подразбиране",
      SaveAs: "Запазване като маска",
    },
  },
  Export: {
    Title: "Експортиране на съобщения",
    Copy: "Копиране на всички",
    Download: "Изтегляне",
    MessageFromYou: "Съобщение от вас",
    MessageFromChatGPT: "Съобщение от The ChatGPT",
    Share: "Споделяне в KiAsk Share",
    Format: {
      Title: "Формат на експорта",
      SubTitle: "Markdown или PNG изображение",
    },
    IncludeContext: {
      Title: "Включване на контекста",
      SubTitle: "Експортиране на контекстни подсказки в маска или не",
    },
    Steps: {
      Select: "Избор",
      Preview: "Преглед",
    },
  },
  Select: {
    Search: "Търсене",
    All: "Избор на всички",
    Latest: "Избор на последното",
    Clear: "Изчистване",
  },
  Memory: {
    Title: "Паметна подсказка",
    EmptyContent: "Все още няма нищо.",
    Send: "Изпращане на памет",
    Copy: "Копиране на памет",
    Reset: "Нулиране на сесията",
    ResetConfirm:
      "Нулирането ще изчисти текущата история на разговора и историческата памет. Сигурни ли сте, че искате да нулирате?",
  },
  Home: {
    NewChat: "Нов чат",
    DeleteChat: "Потвърдете изтриването на избрания разговор?",
    DeleteToast: "Чатът е изтрит",
    Revert: "Възстановяване",
  },
  Settings: {
    Title: "Настройки",
    SubTitle: "Всички настройки",
    Actions: {
      ClearAll: "Изчистване на всички данни",
      ResetAll: "Възстановяване на всички настройки",
      Close: "Затвори",
      ConfirmResetAll: "Сигурни ли сте, че искате да възстановите всички конфигурации?",
      ConfirmClearAll: "Сигурни ли сте, че искате да изчистите всички данни?",
    },
    Lang: {
      Name: "Език", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Всички езици",
    },
    Avatar: "Аватар",
    FontSize: {
      Title: "Размер на шрифта",
      SubTitle: "Настройка на размера на шрифта на съдържанието на чата",
    },
    Update: {
      Version: (x: string) => `Версия: ${x}`,
      IsLatest: "Последна версия",
      CheckUpdate: "Проверка за актуализации",
      IsChecking: "Проверка на актуализации...",
      FoundUpdate: (x: string) => `Открита е нова версия: ${x}`,
      GoToUpdate: "Актуализация",
    },
    SendKey: "Ключ за изпращане",
    Theme: "Тема",
    TightBorder: "Стеснена рамка",
    SendPreviewBubble: {
      Title: "Изпращане на преглед в балон",
      SubTitle: "Преглед на Markdown в балон",
    },
    Mask: {
      Title: "Екран за въвеждане на маска",
      SubTitle: "Показване на екран за въвеждане на маска преди стартиране на нов чат",
    },
    Prompt: {
      Disable: {
        Title: "Изключване на автоматично довършване",
        SubTitle: "Въведете /, за да активирате автоматичното довършване",
      },
      List: "Списък с подсказки",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} вградени, ${custom} потребителски дефинирани`,
      Edit: "Редактиране",
      Modal: {
        Title: "Списък с подсказки",
        Add: "Добавяне на подсказка",
        Search: "Търсене на подсказки",
      },
      EditModal: {
        Title: "Редактиране на подсказка",
      },
    },
    HistoryCount: {
      Title: "Брой прикачени съобщения",
      SubTitle: "Брой изпратени съобщения прикачени на всяка заявка",
    },
    CompressThreshold: {
      Title: "Праг за компресиране на историята",
      SubTitle:
        "Ще компресира, ако дължината на некомпресираните съобщения надвишава стойността",
    },
    Token: {
      Title: "API ключ",
      SubTitle: "Използвайте вашия ключ, за да игнорирате ограничението на кода за достъп",
      Placeholder: "API ключ на OpenAI",
    },
    Usage: {
      Title: "Сметка",
      SubTitle(used: any, total: any) {
        return `Използвано този месец $${used}, абонамент $${total}`;
      },
      IsChecking: "Проверка...",
      Check: "Проверка",
      NoAccess: "Въведете API ключ, за да проверите баланса",
    },
    AccessCode: {
      Title: "Код за достъп",
      SubTitle: "Включен е контролът на достъпа",
      Placeholder: "Необходим е код за достъп",
    },
    Endpoint: {
      Title: "Крайна точка",
      SubTitle: "Персонализирана крайна точка трябва да започва с http(s)://",
    },
    Model: "Модел",
    Temperature: {
      Title: "Температура",
      SubTitle: "По-голяма стойност дава по-случаен изход",
    },
    MaxTokens: {
      Title: "Максимален брой токени",
      SubTitle: "Максимална дължина на входните токени и генерираните токени",
    },
    PresencePenalty: {
      Title: "Глоба за присъствие",
      SubTitle:
        "По-голяма стойност увеличава вероятността да се говори за нови теми",
    },
  },
  Store: {
    DefaultTopic: "Нов разговор",
    BotHello: "Здравей! Как мога да помогна днес?",
    Error: "Нещо се обърка, моля опитайте отново по-късно.",
    Prompt: {
      History: (content: string) =>
        "Това е резюме на историята на чата като резюме: " + content,
      Topic:
        "Моля, създайте заглавие от четири до пет думи, което обобщава нашия разговор без всякакви въведения, пунктуация, кавички, точки, символи или допълнителен текст. Премахнете вложените кавички.",
      Summarize:
        "Кратко резюмирайте дискусията в 200 думи или по-малко, за да я използвате като подсказка за бъдещ контекст.",
    },
  },
  Copy: {
    Success: "Копирано в клипборда",
    Failed: "Копирането не бе успешно, моля предоставете разрешение за достъп до клипборда",
  },
  Context: {
    Toast: (x: any) => `С ${x} контекстни подсказки`,
    Edit: "Контекстни и паметни подсказки",
    Add: "Добавяне на подсказка",
    Clear: "Изчистване на контекста",
    Revert: "Възстановяване",
  },
  Plugin: {
    Name: "Плъгин",
  },
  Mask: {
    Name: "Маска",
    Page: {
      Title: "Шаблон за подсказка",
      SubTitle: (count: number) => `${count} шаблона за подсказки`,
      Search: "Търсене на шаблони",
      Create: "Създаване",
    },
    Item: {
      Info: (count: number) => `${count} подсказки`,
      Chat: "Чат",
      View: "Преглед",
      Edit: "Редактиране",
      Delete: "Изтриване",
      DeleteConfirm: "Потвърждавате ли изтриването?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Редактиране на шаблон за подсказка ${readonly ? "(только за четене)" : ""}`,
      Download: "Изтегляне",
      Clone: "Копиране",
    },
    Config: {
      Avatar: "Аватар на бота",
      Name: "Име на бота",
      Sync: {
        Title: "Използване на глобална конфигурация",
        SubTitle: "Използване на глобална конфигурация в този чат",
        Confirm: "Потвърждавате ли презаписването на персонализираната конфигурация с глобалната конфигурация?",
      },
      HideContext: {
        Title: "Скриване на контекстни подсказки",
        SubTitle: "Не показвайте контекстни подсказки в чата",
      },
    },
  },
  NewChat: {
    Return: "Връщане",
    Skip: "Започни",
    Title: "Изберете маска",
    SubTitle: "Разговаряйте с Душата зад Маската",
    More: "Намерете повече",
    NotShow: "Никога не показвай отново",
    ConfirmNoShow: "Потвърждавате ли деактивирането? Можете да го активирате по-късно в настройките.",
  },

  UI: {
    Confirm: "Потвърди",
    Cancel: "Отказ",
    Close: "Затвори",
    Create: "Създай",
    Edit: "Редактирай",
  },
};

export default bg;