export interface Curso {
  nome: string;
  descricao: string;
  objetivo: string;
  conteudo: string[];
  publico: string;
}

export const cursosFormacoesDiversos: Curso[] = [
  {
    nome: 'Acupuntura Auricular',
    descricao: 'Também conhecida como Auriculoterapia ou Auriculoacupuntura, é uma técnica baseada na Acupuntura. Consiste na colocação de "sementes de mostarda" ou agulhas, em pontos específicos da orelha para tratar dores ou sintomas.',
    objetivo: 'Conceito e Prática da aplicação terapêutica da Acupuntura Auricular.',
    conteudo: ['Introdução aos Conceitos da Acupuntura Auricular', 'Anatomia Auricular', 'Localização dos Principais Pontos Auriculares', 'Funções Terapêuticas dos Pontos Auriculares', 'Aplicação das Sementes (ou agulhas ou pontos de cristal)'],
    publico: 'Profissionais da área da Saúde e Público em geral.',
  },
  {
    nome: 'Calatonia',
    descricao: 'A Calatonia é uma técnica de relaxamento profundo que regula o tônus, promovendo o reequilíbrio físico e psíquico do indivíduo. Através da aplicação de toques sutis (estímulos suaves), em áreas específicas do corpo, atingimos o sistema nervoso central, atuando sobre a totalidade do organismo de modo reestruturador.',
    objetivo: 'Desenvolver e aprimorar a utilização da Calatonia como recurso auxiliar nos tratamentos médicos, fonoaudiológicos, psicológicos, educacionais e em processos de reabilitação física.',
    conteudo: ['Origem da Técnica', 'O que são Toques Sutis', 'Sequência dos Toques', 'A quem se Destina', 'Benefícios da Terapia'],
    publico: 'Profissionais da área da Saúde e Público em geral.',
  },
  {
    nome: 'Cones de Cera',
    descricao: 'É uma técnica milenar, da medicina natural que desobstrui e purifica todo o sistema respiratório, mental, emocional e energético do indivíduo, promovendo o equilíbrio e restaurando a harmonia e o bom funcionamento do organismo como um todo.',
    objetivo: 'Aprender a utilizar os benefícios dos cones de cera nos tratamentos de saúde.',
    conteudo: ['Origem da Técnica', 'A quem se Destina', 'Benefícios da Terapia', 'Contra Indicações', 'Aplicação Prática do Método', 'Avaliação e Leitura dos Cones de Cera'],
    publico: 'Profissionais da área da Saúde e Público em geral.',
  },
  {
    nome: 'Cromoterapia',
    descricao: 'Cada cor possui uma vibração específica e uma capacidade terapêutica, portanto a Cromoterapia é a utilização, prática, das cores nos tratamentos de saúde.',
    objetivo: 'Aprender, desenvolver e aprimorar a técnica.',
    conteudo: ['Luz e Cor', 'O que é a Cromoterapia', 'Os Princípios da Cromoterapia', 'Os Chakras', 'A Cura pelas Cores', 'Aplicações da Cromoterapia'],
    publico: 'Profissionais da área da Saúde, Estética e Público em geral.',
  },
  {
    nome: 'Chakras',
    descricao: 'Chakras são Centros Energéticos que distribuem a energia para o corpo humano a fim de equilibrá-lo.',
    objetivo: 'Aprender, desenvolver, vivenciar e equilibrar os Chakras.',
    conteudo: ['O que são Chakras', 'As Questões Emocionais de Cada Chakra', 'Questões para Auto Exame', 'Exercícios para Equilíbrio dos Chakras'],
    publico: 'Profissionais da área da Saúde e Público em geral.',
  },
  {
    nome: 'Florais de Bach',
    descricao: 'Os Florais de Bach utilizam em sua fórmula a essência de flores silvestres. O principal objetivo do tratamento é reestabelecer o equilíbrio emocional do indivíduo, restituindo o sentimento de coragem, segurança, alegria de viver, paz interior e amor.',
    objetivo: 'Aprender a utilizar os Florais de Bach nos tratamentos de saúde e equilíbrio.',
    conteudo: ['História do Dr. Bach', 'As 38 Essências Florais', 'Indicação e Uso dos Florais', 'Estudo de Casos'],
    publico: 'Profissionais da área da Saúde e Público em geral.',
  },
];

export const cursosMassagem: Curso[] = [
  {
    nome: 'Automassagem',
    descricao: 'O corpo humano, inconscientemente, expressa suas emoções através dos gestos. Portanto, o toque é a forma mais efetiva de suprir, liberar e eliminar as tensões e emoções que afetam as pessoas.',
    objetivo: 'Ensinar e promover a automassagem, utilizando diversas técnicas de massagens de uma forma prática, dinâmica e autodidata.',
    conteudo: ['Massagem nos Pés', 'Massagem nas Pernas', 'Massagem no Tronco', 'Massagem nos Braços', 'Massagem no Pescoço', 'Massagem nas Costas', 'Massagem na Cabeça', 'Massagem no Rosto', 'Massagem Corpo Inteiro', 'Massagem com Objetos'],
    publico: 'Pessoas interessadas no autocuidado e Público em geral.',
  },
  {
    nome: 'Bambu Massage',
    descricao: 'Os bambus funcionam como prolongamento dos dedos e se adaptam aos contornos corporais. É uma forma alternativa de alcançar o bem estar. Além de relaxar e despertar energia, ainda auxilia a drenagem linfática, a tonificação e a modelagem do corpo.',
    objetivo: 'Fornecer os conhecimentos essenciais para o desenvolvimento prático das manobras da Bambu Massage.',
    conteudo: ['Origem da Técnica', 'A quem se Destina', 'Benefícios da Terapia', 'Contra Indicações', 'Passo a Passo da Massagem', 'Higienização dos Bambus', 'Aplicação Prática do Método'],
    publico: 'Profissionais da área da Saúde, Estética e Público em geral.',
  },
  {
    nome: 'Drenagem Linfática',
    descricao: 'Através de movimentos circulares precisos e suaves, estimula-se a circulação linfática, proporcionando agilidade no seu funcionamento e eliminando as toxinas do organismo.',
    objetivo: 'Aprender a utilizar os benefícios da técnica nos tratamentos de saúde e beleza.',
    conteudo: ['Noções Básicas de Anatomia', 'Funcionamento do Sistema Linfático', 'Origem da Técnica', 'A quem se Destina', 'Benefícios da Terapia', 'Contra Indicações', 'Passo a Passo da Massagem'],
    publico: 'Profissionais da área da Saúde, Estética e Público em geral.',
  },
  {
    nome: 'Massagem Para Terceira Idade',
    descricao: 'A massagem deve ser encarada como um meio de prevenção e promoção de saúde dos idosos. As doenças e as dores nada mais são do que nosso corpo pedindo para ser cuidado.',
    objetivo: 'Aprender a utilizar os benefícios da massagem em pessoas idosas.',
    conteudo: ['Noções Básicas de Anatomia', 'O Toque', 'Massagem em Idosos', 'Benefícios da Terapia', 'Contra Indicações', 'Passo a Passo da Massagem'],
    publico: 'Profissionais da área da Saúde, Cuidadores de Idosos e Público em geral.',
  },
  {
    nome: 'Massagem Relaxante',
    descricao: 'A massagem relaxante consiste num número relativo de movimentos diferentes, repetidos de diversas maneiras, segundo as necessidades particulares da região que está sendo massageada.',
    objetivo: 'Aprender a utilizar os benefícios da técnica nos tratamentos de saúde.',
    conteudo: ['Noções Básicas de Anatomia', 'O Toque', 'Origem da Técnica', 'A quem se Destina', 'Benefícios da Terapia', 'Contra Indicações', 'Passo a Passo da Massagem'],
    publico: 'Profissionais da área da Saúde, Estética e Público em geral.',
  },
  {
    nome: 'Pedras Quentes',
    descricao: 'As Pedras Quentes promovem um relaxamento profundo e são usadas como uma alternativa auxiliar em diversos tratamentos de saúde.',
    objetivo: 'Aprender, desenvolver e aprimorar a técnica.',
    conteudo: ['Origem da Técnica', 'A quem se Destina', 'Benefícios da Terapia', 'Contra Indicações', 'Passo a Passo da Massagem'],
    publico: 'Profissionais da área da Saúde, Estética e Público em geral.',
  },
  {
    nome: 'Pindas Chinesas',
    descricao: 'Saquinhos de Ervas Aromáticas, aquecidos, que promovem um profundo relaxamento e bem estar.',
    objetivo: 'Aprender, desenvolver e aprimorar a técnica.',
    conteudo: ['Origem da Técnica', 'A quem se Destina', 'Benefícios da Terapia', 'Contra Indicações', 'Passo a Passo da Massagem', 'Confecção dos Saquinhos'],
    publico: 'Profissionais da área da Saúde, Estética e Público em geral.',
  },
  {
    nome: 'Pindas Swenda',
    descricao: 'Saquinhos de Frutas, Legumes, Cereais, Sais, aquecidos, que promovem nutrição e hidratação da pele, além dos efeitos curativos.',
    objetivo: 'Aprender, desenvolver e aprimorar a técnica.',
    conteudo: ['Origem da Técnica', 'A quem se Destina', 'Benefícios da Terapia', 'Contra Indicações', 'Passo a Passo da Massagem', 'Confecção dos Saquinhos'],
    publico: 'Profissionais da área da Saúde, Estética e Público em geral.',
  },
  {
    nome: 'Quick Massage',
    descricao: 'Massagem rápida, feita em cadeira específica, para alívio de dores e tensões do dia-a-dia.',
    objetivo: 'Aprender, desenvolver e aprimorar a técnica.',
    conteudo: ['Noções Básicas de Anatomia', 'Origem da Técnica', 'A quem se Destina', 'Benefícios da Terapia', 'Contra Indicações', 'Passo a Passo da Massagem'],
    publico: 'Profissionais da área da Saúde e Público em geral.',
  },
  {
    nome: 'Sea Massage',
    descricao: 'Massagem de deslizamento feita com conchas e alinhamento de chakras. Proporciona um efeito relaxante e uma prazerosa sensação de bem estar.',
    objetivo: 'Aprender, desenvolver e aprimorar a técnica.',
    conteudo: ['Origem da Técnica', 'A quem se Destina', 'Benefícios da Terapia', 'Contra Indicações', 'Passo a Passo da Massagem'],
    publico: 'Profissionais da área da Saúde, Estética e Público em geral.',
  },
  {
    nome: 'Shantala',
    descricao: 'Massagem que promove o estreitamento do vínculo afetivo entre a mãe e o filho(a), além de trazer inúmeros benefícios para a saúde do bebê.',
    objetivo: 'Aprender, desenvolver e aprimorar a técnica.',
    conteudo: ['Origem da Técnica', 'A quem se Destina', 'Benefícios da Terapia', 'Contra Indicações', 'Passo a Passo da Massagem'],
    publico: 'Pais, Cuidadores, Educadores, Profissionais da área da Saúde e Público em geral.',
  },
  {
    nome: 'Sushô',
    descricao: 'Massagem de origem coreana de deslizamento feita com cristais e alinhamento de chakras. Produz um efeito energeticamente relaxante.',
    objetivo: 'Aprender, desenvolver e aprimorar a técnica.',
    conteudo: ['Origem da Técnica', 'A quem se Destina', 'Benefícios da Terapia', 'Contra Indicações', 'Passo a Passo da Massagem'],
    publico: 'Profissionais da área da Saúde e Público em geral.',
  },
  {
    nome: 'Terapia com Ventosas',
    descricao: 'Através do vácuo da ventosa ocorre a sucção da superfície do corpo, abrindo os vasos capilares e os poros. Com este processo, as toxinas são eliminadas, a circulação sanguínea é ativada e o sangue oxigenado.',
    objetivo: 'Aprender, desenvolver e aprimorar a técnica.',
    conteudo: ['Origem da Técnica', 'A quem se Destina', 'Benefícios da Terapia', 'Contra Indicações', 'Passo a Passo da Aplicação'],
    publico: 'Profissionais da área da Saúde e Público em geral.',
  },
  {
    nome: 'Tuiná',
    descricao: 'Massagem feita com as mãos, cotovelos e antebraços. Atinge a musculatura profunda e a parte esquelética. É profundamente relaxante e alivia as dores.',
    objetivo: 'Aprender, desenvolver e aprimorar a técnica.',
    conteudo: ['Noções Básicas de Anatomia', 'Princípios da Medicina Chinesa', 'Origem da Técnica', 'A quem se Destina', 'Benefícios da Terapia', 'Contra Indicações', 'Passo a Passo da Aplicação'],
    publico: 'Profissionais da área da Saúde e Público em geral.',
  },
];
