import { SubmitKey } from "../store/config";
import { RequiredLocaleType } from "./index";

const pr: RequiredLocaleType = {
  WIP: "Em breve...",
  Error: {
    Unauthorized:
      "Acesso não autorizado, por favor, insira o código de acesso na página [auth](/#/auth).",
  },
  Auth: {
    Title: "Precisa de um código de acesso",
    Tips: "Por favor, insira o código de acesso abaixo",
    Input: "Código de acesso",
    Confirm: "Confirmar",
    Later: "Mais tarde",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} mensagens`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} mensagens com o ChatGPT`,
    Actions: {
      ChatList: "Ir para a lista de chats",
      CompressedHistory: "Histórico Comprimido de Memória Prompt",
      Export: "Exportar todas as mensagens como Markdown",
      Copy: "Copiar",
      Stop: "Parar",
      Retry: "Tentar novamente",
      Delete: "Excluir",
    },
    InputActions: {
      Stop: "Parar",
      ToBottom: "Ir para a última",
      Theme: {
        auto: "Automático",
        light: "Tema claro",
        dark: "Tema escuro",
      },
      Prompt: "Prompts",
      Masks: "Máscaras",
      Clear: "Limpar Contexto",
      Settings: "Configurações",
    },
    Rename: "Renomear Chat",
    Typing: "Digitando...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} para enviar`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter para quebrar linha";
      }
      return inputHints + ", / para pesquisar prompts";
    },
    Send: "Enviar",
    Config: {
      Reset: "Redefinir para o padrão",
      SaveAs: "Salvar como Máscara",
    },
  },
  Export: {
    Title: "Exportar Mensagens",
    Copy: "Copiar tudo",
    Download: "Baixar",
    MessageFromYou: "Mensagem sua",
    MessageFromChatGPT: "Mensagem do ChatGPT",
    Share: "Compartilhar com KiAsk Share",
    Format: {
      Title: "Formato de Exportação",
      SubTitle: "Markdown ou Imagem PNG",
    },
    IncludeContext: {
      Title: "Incluir Contexto",
      SubTitle: "Exportar prompts de contexto em máscara ou não",
    },
    Steps: {
      Select: "Selecionar",
      Preview: "Pré-visualizar",
    },
  },
  Select: {
    Search: "Pesquisar",
    All: "Selecionar Todos",
    Latest: "Selecionar Últimos",
    Clear: "Limpar",
  },
  Memory: {
    Title: "Memória Prompt",
    EmptyContent: "Nada ainda.",
    Send: "Enviar Memória",
    Copy: "Copiar Memória",
    Reset: "Redefinir Sessão",
    ResetConfirm:
      "Redefinir irá limpar o histórico de conversas atual e a memória histórica. Tem certeza de que deseja redefinir?",
  },
  Home: {
    NewChat: "Novo Chat",
    DeleteChat: "Confirmar exclusão da conversa selecionada?",
    DeleteToast: "Chat excluído",
    Revert: "Reverter",
  },
  Settings: {
    Title: "Configurações",
    SubTitle: "Todas as Configurações",
    Actions: {
      ClearAll: "Limpar Todos os Dados",
      ResetAll: "Redefinir Todas as Configurações",
      Close: "Fechar",
      ConfirmResetAll: "Tem certeza de que deseja redefinir todas as configurações?",
      ConfirmClearAll: "Tem certeza de que deseja limpar todos os dados?",
    },
    Lang: {
      Name: "Linguagem", // ATENÇÃO: se você quiser adicionar uma nova tradução, por favor, não traduza esse valor, deixe como `Language`
      All: "Todas as Linguagens",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Tamanho da Fonte",
      SubTitle: "Ajustar o tamanho da fonte do conteúdo do chat",
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
    TightBorder: "Borda Ajustada",
    SendPreviewBubble: {
      Title: "Bolha de Visualização de Envio",
      SubTitle: "Pré-visualizar markdown em uma bolha",
    },
    Mask: {
      Title: "Tela de Abertura da Máscara",
      SubTitle: "Mostrar uma tela de abertura da máscara antes de começar um novo chat",
    },
    Prompt: {
      Disable: {
        Title: "Desativar autocompletar",
        SubTitle: "Digite / para acionar o autocompletar",
      },
      List: "Lista de Prompts",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} incorporados, ${custom} definidos pelo usuário`,
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
      Title: "Número de Mensagens Anexadas",
      SubTitle: "Número de mensagens enviadas anexadas por solicitação",
    },
    CompressThreshold: {
      Title: "Limite de Compressão de Histórico",
      SubTitle:
        "Comprimirá se o comprimento das mensagens não comprimidas exceder o valor",
    },
    Token: {
      Title: "Chave da API",
      SubTitle: "Use sua chave para ignorar o limite de código de acesso",
      Placeholder: "Chave da OpenAI API",
    },
    Usage: {
      Title: "Saldo da conta",
      SubTitle(used: any, total: any) {
        return `Usado este mês: $${used}, assinatura: $${total}`;
      },
      IsChecking: "Verificando...",
      Check: "Verificar",
      NoAccess: "Insira a chave da API para verificar o saldo",
    },
    AccessCode: {
      Title: "Código de Acesso",
      SubTitle: "Controle de acesso ativado",
      Placeholder: "Código de Acesso Necessário",
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
    MaxTokens: {
      Title: "Máximo de Tokens",
      SubTitle: "Comprimento máximo dos tokens de entrada e dos tokens gerados",
    },
    PresencePenalty: {
      Title: "Penalidade de Presença",
      SubTitle:
        "Um valor maior aumenta a probabilidade de falar sobre novos tópicos",
    },
  },
  Store: {
    DefaultTopic: "Nova Conversa",
    BotHello: "Olá! Como posso ajudar você hoje?",
    Error: "Algo deu errado. Por favor, tente novamente mais tarde.",
    Prompt: {
      History: (content: string) =>
        "Esta é uma recapitulação do histórico de conversas: " + content,
      Topic:
        "Por favor, crie um título de quatro a cinco palavras que resuma nossa conversa sem introdução, pontuação, aspas, pontos, símbolos ou texto adicional. Remova as aspas.",
      Summarize:
        "Resuma a discussão brevemente em 200 palavras ou menos para usar como contexto futuro.",
    },
  },
  Copy: {
    Success: "Copiado para a área de transferência",
    Failed: "Falha ao copiar, por favor, conceda permissão para acessar a área de transferência",
  },
  Context: {
    Toast: (x: any) => `Com ${x} prompts de contexto`,
    Edit: "Prompts de Contexto e Memória",
    Add: "Adicionar um Prompt",
    Clear: "Limpar Contexto",
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
      Delete: "Excluir",
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
        SubTitle: "Usar configuração global neste chat",
        Confirm: "Confirmar para substituir a configuração personalizada pela configuração global?",
      },
      HideContext: {
        Title: "Ocultar Prompts de Contexto",
        SubTitle: "Não mostrar prompts de contexto no chat",
      },
    },
  },
  NewChat: {
    Return: "Voltar",
    Skip: "Começar",
    Title: "Escolha uma Máscara",
    SubTitle: "Converse com a Alma por Trás da Máscara",
    More: "Encontrar Mais",
    NotShow: "Não Mostrar Novamente",
    ConfirmNoShow: "Confirmar para desativar? Você pode ativar isso nas configurações mais tarde.",
  },

  UI: {
    Confirm: "Confirmar",
    Cancel: "Cancelar",
    Close: "Fechar",
    Create: "Criar",
    Edit: "Editar",
  },
};

export default pr;
