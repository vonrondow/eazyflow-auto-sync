import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para implementar a automação?",
      answer: "O processo de mapeamento da jornada do cliente geralmente leva de 3 a 5 dias úteis. Após isso, a automação é configurada e começa a funcionar imediatamente."
    },
    {
      question: "Funciona com qualquer CRM?",
      answer: "Sim, nossa solução se integra com os principais CRMs do mercado como Pipedrive, HubSpot, Salesforce, RD Station e muitos outros."
    },
    {
      question: "Como a IA identifica as informações para preencher o CRM?",
      answer: "Nossa IA monitora interações por email, WhatsApp, chamadas e outras fontes de dados da sua empresa, identificando automaticamente leads, oportunidades e atualizações de status."
    },
    {
      question: "E se a IA preencher informações erradas?",
      answer: "Temos um sistema de validação e você mantém controle total. Além disso, oferecemos garantia de 30 dias para ajustes e melhorias."
    },
    {
      question: "Preciso treinar minha equipe?",
      answer: "Não. A automação funciona nos bastidores sem alterar o fluxo de trabalho da sua equipe. Eles continuam trabalhando normalmente enquanto o CRM se atualiza sozinho."
    },
    {
      question: "Quanto custa a solução?",
      answer: "O investimento varia conforme o tamanho da equipe e complexidade do processo. Agende uma conversa para receber uma proposta personalizada."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Esclarecemos as principais dúvidas sobre nossa automação
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