export const DataInfoOptions = [
  {
    id: 0,
    title: 'Nome'
  },
  {
    id: 1,
    title: 'Cidade'
  },
  {
    id: 2,
    title: 'Ramo de atividade'
  },
  {
    id: 3,
    title: 'CNPJ'
  },
  {
    id: 5,
    title: 'Módulo'
  },
  {
    id: 6,
    title: 'Atividade interna'
  },
  {
    id: 7,
    title: 'Suporte'
  }
]

export const InputsClientData = [
  {
    id: 0,
    name: 'nome',
    label: 'Nome',
    type: 'text'
  },
  {
    id: 1,
    name: 'razao_social',
    label: 'Razão social',
    type: 'text'
  },
  {
    id: 2,
    name: 'cnpj',
    label: 'CNPJ',
    type: 'text',
    mask: '99.999.999/9999-99'
  },
  {
    id: 3,
    name: 'endereco',
    label: 'Endereço',
    type: 'text'
  },
  {
    id: 4,
    name: 'responsavel',
    label: 'Responsável',
    type: 'text'
  },
  {
    id: 5,
    name: 'contato',
    label: 'Contato',
    type: 'text',
    mask: '(99) 9 9999-9999'
  },
  {
    id: 6,
    name: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    id: 7,
    name: 'quantidade_acessos',
    label: 'Quantidade de acessos',
    type: 'number'
  },
  {
    id: 8,
    name: 'quantidade_empresas',
    label: 'Quantidade de empresas',
    type: 'number'
  },
  {
    id: 9,
    name: 'quantidade_bancos',
    label: 'Quantidade de bancos de dados',
    type: 'number'
  },
  {
    id: 10,
    name: 'identificador_servidor',
    label: 'ID do servidor',
    type: 'text'
  },
  {
    id: 11,
    name: 'identificador_internews',
    label: 'ID no controle OS',
    type: 'text'
  },
  {
    id: 12,
    name: 'mensalidade',
    label: 'Mensalidade (R$)',
    type: 'text'
  },
  {
    id: 13,
    name: 'versao_internews',
    label: 'Versão do sistema',
    type: 'text',
    mask: '9.99.9'
  },
  {
    id: 14,
    name: 'vencimento_mensalidade',
    label: 'Dia do vencimento da mensalidade',
    type: 'text',
    mask: '99'
  }
]

export const ModuleOptions = [
  {
    id: 1,
    descricao: 'Standard'
  },
  {
    id: 2,
    descricao: 'Basico'
  },
  {
    id: 3,
    descricao: 'Intermediário'
  },
  {
    id: 4,
    descricao: 'Avançado'
  }
]
