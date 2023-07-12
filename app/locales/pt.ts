import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

// if you are adding a new translation, please use PartialLocaleType instead of LocaleType
const pt: LocaleType = {
  WIP: "Em breve....",
  Error: {
    Unauthorized:
      "Apoie o Ultimate ChatGPT no [Patreon](https://patreon.com/KiasK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link) ou através do Bkash (+880 1812-715289), Envie usando [Worldremit](https://www.worldremit.com/en?amountfrom=10.00&selectfrom=us&currencyfrom=usd&selectto=bd&currencyto=bdt&transfer=mob), Número da carteira móvel: +880 1812-715289 para nos ajudar a melhorar e manter este poderoso Ultimate ChatGPT.",
  },
  Auth: {
    Title: "Necessita de código de acesso",
    Tips: "Por favor, insira o código de acesso abaixo",
    Input: "código de acesso",
    Confirm: "Confirmar",
    Later: "Mais tarde",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} mensagens`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} mensagens`,
    Actions: {
      ChatList: "Ir para a lista de chats",
      CompressedHistory: "Prompt de Memória de Histórico Comprimido",
      Export: "Exportar todas as mensagens como Markdown",
      Copy: "Copiar",
      Stop: "Parar",
      Retry: "Tentar novamente",
      Pin: "Fixar",
      PinToastContent: "Fixadas 2 mensagens como prompts contextuais",
      PinToastAction: "Ver",
      Delete: "Apagar",
      Edit: "Editar",
    },
    Commands: {
      new: "Iniciar um novo chat",
      newm: "Iniciar um novo chat com máscara",
      next: "Chat seguinte",
      prev: "Chat anterior",
      clear: "Limpar contexto",
      del: "Apagar chat",
    },
    InputActions: {
      Stop: "Parar",
      ToBottom: "Para o mais recente",
      Theme: {
        auto: "Automático",
        light: "Tema claro",
        dark: "Tema escuro",
      },
      Prompt: "Prompts",
      Masks: "Máscaras",
      Clear: "Limpar contexto",
      Settings: "Configurações",
    },
    Rename: "Renomear Chat",
    Typing: "Digitando...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} para enviar`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter para quebrar linha";
      }
      return inputHints + ", / para pesquisar prompts, : para usar comandos";
    },
    Send: "Enviar",
    Config: {
      Reset: "Redefinir para o padrão",
      SaveAs: "Salvar como Máscara",
    },
  },
  Export: {
    Title: "Exportar Mensagens",
    Copy: "Copiar Tudo",
    Download: "Baixar",
    MessageFromYou: "Mensagem Sua",
    MessageFromChatGPT: "Mensagem do ChatGPT",
    Share: "Compartilhar no KiAsk Share",
    Format: {
      Title: "Formato de Exportação",
      SubTitle: "Markdown ou Imagem PNG",
    },
    IncludeContext: {
      Title: "Incluir Contexto",
      SubTitle: "Exportar prompts de contexto como máscara ou não",
    },
    Steps: {
      Select: "Selecionar",
      Preview: "Visualizar",
    },
    Image: {
      Toast: "Capturando Imagem...",
      Modal: "Pressione e segure ou clique com o botão direito para salvar a imagem",
    },
  },
  Select: {
    Search: "Pesquisar",
    All: "Selecionar Todos",
    Latest: "Selecionar Mais Recentes",
    Clear: "Limpar",
  },
  Memory: {
    Title: "Prompt de Memória",
    EmptyContent: "Nada ainda.",
    Send: "Enviar Memória",
    Copy: "Copiar Memória",
    Reset: "Redefinir Sessão",
    ResetConfirm:
      "A redefinição irá apagar todo o histórico de conversação atual e a memória histórica. Tem certeza de que deseja redefinir?",
  },
  Home: {
    NewChat: "Novo Chat",
    DeleteChat: "Confirmar a exclusão da conversa selecionada?",
    DeleteToast: "Chat Apagado",
    Revert: "Reverter",
  },
  Settings: {
    Title: "Configurações",
    SubTitle: "Todas as Configurações",
    Danger: {
      Reset: {
        Title: "Redefinir Todas as Configurações",
        SubTitle: "Redefinir todos os itens de configuração para o padrão",
        Action: "Redefinir",
        Confirm: "Confirmar a redefinição de todas as configurações para o padrão?",
      },
      Clear: {
        Title: "Limpar Todos os Dados",
        SubTitle: "Limpar todas as mensagens e configurações",
        Action: "Limpar",
        Confirm: "Confirmar a exclusão de todas as mensagens e configurações?",
      },
    },
    Lang: {
      Name: "Idioma",
      All: "Todos os Idiomas",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Tamanho da Fonte",
      SubTitle: "Ajustar o tamanho da fonte do conteúdo do chat",
    },

    InputTemplate: {
      Title: "Modelo de Entrada",
      SubTitle: "A mensagem mais recente será preenchida neste modelo",
    },

    Update: {
      Version: (x: string) => `Versão: ${x}`,
      IsLatest: "Última versão",
      CheckUpdate: "Verificar Atualização",
      IsChecking: "Verificando atualização...",
      FoundUpdate: (x: string) => `Nova versão encontrada: ${x}`,
      GoToUpdate: "Atualizar",
    },
    SendKey: "Chave de Envio",
    Theme: "Tema",
    TightBorder: "Borda Estreita",
    SendPreviewBubble: {
      Title: "Bolha de Visualização de Envio",
      SubTitle: "Visualizar markdown em uma bolha",
    },
    Mask: {
      Splash: {
        Title: "Tela de Abertura da Máscara",
        SubTitle: "Mostrar uma tela de abertura da máscara antes de iniciar um novo chat",
      },
      Builtin: {
        Title: "Ocultar Máscaras Internas",
        SubTitle: "Ocultar máscaras internas na lista de máscaras",
      },
    },
    Prompt: {
      Disable: {
        Title: "Desativar Auto-Completar",
        SubTitle: "Digite / para acionar o auto-completar",
      },
      List: "Lista de Prompts",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} embutidos, ${custom} definidos pelo usuário`,
      Edit: "Editar",
      Modal: {
        Title: "Lista de Prompts",
        Add: "Adicionar um",
        Search: "Pesquisar Prompts",
      },
      EditModal: {
        Title: "Editar Prompt",
      },
    },
    HistoryCount: {
      Title: "Quantidade de Mensagens Anexadas",
      SubTitle: "Número de mensagens enviadas anexadas por solicitação",
    },
    CompressThreshold: {
      Title: "Limite de Compressão de Histórico",
      SubTitle:
        "Será comprimido se o comprimento das mensagens não comprimidas exceder esse valor",
    },
    Token: {
      Title: "Chave da API",
      SubTitle: "Use sua chave para ignorar o limite de código de acesso",
      Placeholder: "Chave da API OpenAI",
    },
    Usage: {
      Title: "Saldo da Conta",
      SubTitle(used: any, total: any) {
        return `Usado neste mês $${used}, assinatura $${total}`;
      },
      IsChecking: "Verificando...",
      Check: "Verificar",
      NoAccess: "Digite a Chave da API para verificar o saldo",
    },
    AccessCode: {
      Title: "Código de Acesso",
      SubTitle: "Controle de acesso ativado",
      Placeholder: "Necessita de Código de Acesso",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "O endpoint personalizado deve começar com http(s)://",
    },
    Model: "Modelo",
    Temperature: {
      Title: "Temperatura",
      SubTitle: "Um valor maior torna a saída mais aleatória",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Não altere esse valor junto com a temperatura",
    },
    MaxTokens: {
      Title: "Máximo de Tokens",
      SubTitle: "Comprimento máximo de tokens de entrada e tokens gerados",
    },
    PresencePenalty: {
      Title: "Penalidade de Presença",
      SubTitle:
        "Um valor maior aumenta a probabilidade de falar sobre novos tópicos",
    },
    FrequencyPenalty: {
      Title: "Penalidade de Frequência",
      SubTitle:
        "Um valor maior diminui a probabilidade de repetir a mesma frase",
    },
  },
  Store: {
    DefaultTopic: "Nova Conversa",
    BotHello: "Olá! Como posso ajudar hoje?",
    Error: "Algo deu errado, por favor, tente novamente mais tarde.",
    Prompt: {
      History: (content: string) =>
        "Este é um resumo do histórico do chat como recapitulação: " + content,
      Topic:
        "Por favor, gere um título de quatro a cinco palavras resumindo nossa conversa sem nenhuma introdução, pontuação, aspas, pontos, símbolos ou texto adicional. Remova as aspas.",
      Summarize:
        "Resuma a discussão brevemente em 200 palavras ou menos para usar como prompt para contexto futuro.",
    },
  },
  Copy: {
    Success: "Copiado para a área de transferência",
    Failed: "Falha ao copiar, por favor, conceda permissão para acessar a área de transferência",
  },
  Context: {
    Toast: (x: any) => `Com ${x} prompts contextuais`,
    Edit: "Configurações de Chat Atuais",
    Add: "Adicionar um Prompt",
    Clear: "Contexto Limpo",
    Revert: "Reverter",
  },
  Plugin: {
    Name: "Plugin",
  },
  Mask: {
    Name: "Máscara",
    Page: {
      Title: "Modelo de Prompt",
      SubTitle: (count: number) => `${count} modelos de prompt`,
      Search: "Pesquisar Modelos",
      Create: "Criar",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Chat",
      View: "Visualizar",
      Edit: "Editar",
      Delete: "Apagar",
      DeleteConfirm: "Confirmar a exclusão?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Editar Modelo de Prompt ${readonly ? "(somente leitura)" : ""}`,
      Download: "Baixar",
      Clone: "Clonar",
    },
    Config: {
      Avatar: "Avatar do Bot",
      Name: "Nome do Bot",
      Sync: {
        Title: "Usar Configuração Global",
        SubTitle: "Usar a configuração global neste chat",
        Confirm: "Confirmar a substituição da configuração personalizada pela configuração global?",
      },
      HideContext: {
        Title: "Ocultar Prompts de Contexto",
        SubTitle: "Não mostrar prompts de contexto no chat",
      },
      Share: {
        Title: "Compartilhar Esta Máscara",
        SubTitle: "Gerar um link para esta máscara",
        Action: "Copiar Link",
      },
    },
  },
  NewChat: {
    Return: "Voltar",
    Skip: "Apenas Começar",
    Title: "Escolha uma Máscara",
    SubTitle: "Converse com a Alma por trás da Máscara",
    More: "Encontrar Mais",
    NotShow: "Não Mostrar Novamente",
    ConfirmNoShow: "Confirmar desativação? Você pode ativá-la nas configurações mais tarde.",
  },

  UI: {
    Confirm: "Confirmar",
    Cancel: "Cancelar",
    Close: "Fechar",
    Create: "Criar",
    Edit: "Editar",
  },
  Exporter: {
    Model: "Modelo",
    Messages: "Mensagens",
    Topic: "Tópico",
    Time: "Horário",
  },
};

export default pt;