export interface Atendimento {
  nome: string;
  descricao: string;
  presencial?: boolean;
}

export const atendimentos: Atendimento[] = [
  {
    nome: 'Acupuntura',
    descricao: 'Estímulo em pontos estratégicos do corpo que desbloqueia a energia vital, alivia dores e restaura o equilíbrio físico e emocional.',
    presencial: true,
  },
  {
    nome: 'Alinhamento Energético',
    descricao: 'Equilíbrio das energias sutis e chakras, restaurando o fluxo vital e o bem-estar.',
  },
  {
    nome: 'Cama Ceragem',
    descricao: 'Cama Massageadora Coreana com pedras de jade e calor por infravermelho que realinha a coluna, alivia tensões musculares e estimula a circulação sanguínea. Excelente para tratamentos de coluna.',
    presencial: true,
  },
  {
    nome: 'Calatonia',
    descricao: 'Toques suaves e específicos que induzem relaxamento profundo, liberam tensões e reorganizam o sistema nervoso.',
    presencial: true,
  },
  {
    nome: 'Constelação Familiar Sistêmica',
    descricao: 'Revela dinâmicas inconscientes herdadas dos sistemas familiares, dissolvendo lealdades invisíveis que impedem o fluir da vida.',
  },
  {
    nome: 'Cones de Cera',
    descricao: 'Aquecimento suave na entrada do ouvido que promove relaxamento, alívio de tensões na cabeça e sensação de bem-estar. Indicado para tratamentos de problemas respiratórios.',
    presencial: true,
  },
  {
    nome: 'Cromoterapia',
    descricao: 'Aplicação de cores que reequilibra as energias, harmoniza as emoções e estimula a autocura.',
    presencial: true,
  },
  {
    nome: 'Guia da Personalidade',
    descricao: 'Ferramenta para entender melhor a personalidade, padrões de comportamento e forma de se relacionar com o mundo.',
  },
  {
    nome: 'Hipnose',
    descricao: 'Estado de consciência ampliado que acessa o inconsciente diretamente, ressignificando crenças e comportamentos sem resistência.',
  },
  {
    nome: 'Raio X da Realidade',
    descricao: 'Ferramenta de diagnóstico que mapeia as áreas da vida que estão desequilibradas.',
  },
  {
    nome: 'Regressão',
    descricao: 'Acesso a memórias que guardam a origem de padrões repetitivos e traumas, trazendo à consciência a raiz do sofrimento.',
  },
  {
    nome: 'SAN — Sessão de Atendimento Norteadora',
    descricao: 'De acordo com a queixa da cliente, utilizo a intuição para dar direcionamento e nitidez à cliente que chega perdida.',
  },
  {
    nome: 'Tarot Terapêutico',
    descricao: 'Diálogo profundo com o inconsciente por meio das cartas, revelando verdades e caminhos para a transformação.',
  },
  {
    nome: 'Terapia Floral (com Florais de Bach)',
    descricao: 'Essências de flores que harmonizam estados emocionais como medo, ansiedade e desânimo, restaurando o equilíbrio interior.',
  },
];
