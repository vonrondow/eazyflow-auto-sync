import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Por que meus chips são banidos?",
      answer: "O WhatsApp detecta comportamentos suspeitos, não o chip em si. Padrões robóticos como mensagens muito rápidas, horários fixos e textos repetitivos são facilmente identificados. Nossa IA simula comportamento humano real para evitar essas detecções."
    },
    {
      question: "Como a IA simula comportamento humano?",
      answer: "Nossa inteligência artificial foi treinada com milhares de padrões de uso real do WhatsApp. Ela varia horários, adiciona pausas naturais, simula velocidade de digitação humana e cria conversas contextualizadas — tudo para parecer um usuário comum."
    },
    {
      question: "Quanto tempo leva para aquecer um chip?",
      answer: "O processo de aquecimento é gradual e contínuo. Em média, um chip precisa de 7-14 dias de aquecimento intensivo antes de ser usado em campanhas de alto volume. Depois disso, o aquecimento de manutenção continua rodando 24/7."
    },
    {
      question: "Posso usar o chip enquanto ele está sendo aquecido?",
      answer: "Sim! Nossa IA trabalha de forma inteligente, intercalando o aquecimento com seu uso real. Ela ajusta a intensidade automaticamente baseado na sua atividade."
    },
    {
      question: "Funciona para chips novos ou só antigos?",
      answer: "Funciona para ambos. Chips novos se beneficiam do aquecimento inicial para construir reputação. Chips antigos se beneficiam do aquecimento de manutenção para preservar a saúde."
    },
    {
      question: "Qual a diferença para outros maturadores?",
      answer: "A maioria dos maturadores usa mensagens pré-definidas e padrões previsíveis. Nossa IA gera conversas únicas com contexto real, pausas naturais e comportamento que realmente parece humano."
    }
  ];

  return (
    <section className="py-6 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre o aquecimento inteligente de chips
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
