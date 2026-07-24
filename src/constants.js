export const WHATSAPP_NUMBER = "5567992624229";
export const INSTAGRAM_URL = "https://instagram.com/draemelyschuindt";
export const MAPS_URL = "https://maps.app.goo.gl/6Ga7TxKSfP1uVTzQ8?g_st=ic";

// Mensagem padrão para os links diretos de WhatsApp (evita abrir em branco).
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Dra. Emely Schuindt e gostaria de agendar uma avaliação. 🙏";

// Monta o link do WhatsApp já com a mensagem pré-preenchida.
export const whatsappLink = (message = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { href: "#resultados", label: "Resultados" },
  { href: "#sobre", label: "Sobre" },
  { href: "#protocolo", label: "Protocolo" },
  { href: "#videos", label: "Conteúdo" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export const FAQS = [
  {
    q: "O que é harmonização facial?",
    a: "É um conjunto de técnicas que busca equilibrar as proporções do rosto, respeitando a anatomia e a identidade de cada paciente. Nada de padronizar resultados.",
  },
  {
    q: "O resultado fica natural?",
    a: "Esse é o princípio central do Protocolo ESSENZA: intervenções pensadas para realçar, nunca para descaracterizar. Cada plano é individual, feito a partir do seu próprio rosto.",
  },
  {
    q: "Quantas sessões são necessárias?",
    a: "Varia de acordo com o objetivo de cada paciente. Isso é definido na avaliação inicial, onde a Dra. Emely constrói um plano personalizado com você.",
  },
  {
    q: "Como funciona a avaliação?",
    a: "É uma conversa aprofundada sobre suas expectativas, seguida de uma análise facial detalhada. É a partir dela que o plano de harmonização é desenhado.",
  },
  {
    q: "Dói? Qual o tempo de recuperação?",
    a: "Os procedimentos são feitos com anestesia tópica e o desconforto é mínimo. A maioria das pacientes retorna às atividades normais no mesmo dia, com orientações específicas de cuidado.",
  },
  {
    q: "Atende por convênio ou apenas particular?",
    a: "O atendimento é particular. A avaliação inicial serve para alinhar expectativas, valores e o plano ideal para cada caso.",
  },
];

export const VIDEOS = [
  {
    id: "depoimento",
    src: "/videos/depoimento-paciente.mp4",
    poster: "/assets/posters/depoimento-paciente.jpg",
    title: "Depoimento de paciente",
    description: "Muito além dos procedimentos. Cada visita é uma experiência.",
  },
  {
    id: "beleza-coreana",
    src: "/videos/beleza-coreana-episodio-1.mp4",
    poster: "/assets/posters/beleza-coreana-episodio-1.jpg",
    title: "Beleza Coreana · Ep. 01",
    description: "Primeiro episódio da série sobre skincare e estética coreana.",
  },
  {
    id: "amwc-dia1",
    src: "/videos/amwc-coreia-dia-1.mp4",
    poster: "/assets/posters/amwc-coreia-dia-1.jpg",
    title: "AMWC Coreia · Dia 1",
    description: "A estética do futuro é regenerativa, natural e baseada em ciência.",
  },
  {
    id: "amwc-final",
    src: "/videos/amwc-coreia-ultimo-dia.mp4",
    poster: "/assets/posters/amwc-coreia-ultimo-dia.jpg",
    title: "AMWC Coreia · Último dia",
    description: "Conhecimento, troca de experiências e confirmação de propósito.",
  },
];
