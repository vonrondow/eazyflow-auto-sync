import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, TrendingUp, Bot } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Zero risco de banimento",
      description: "Nossa IA simula padrões de uso humano reais, com pausas, horários variados e interações naturais que passam despercebidas pelo WhatsApp.",
      metric: "Proteção total"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Aquecimento automático 24/7",
      description: "Enquanto você dorme ou trabalha, seus chips estão sendo aquecidos de forma inteligente. Sem esforço manual, sem esquecimento.",
      metric: "100% automático"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Chips que duram mais",
      description: "Chips bem aquecidos têm vida útil muito maior. Menos gastos com novos números, mais ROI nas suas campanhas.",
      metric: "Maior durabilidade"
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Comportamento humanizado",
      description: "Diferente de bots que mandam mensagens robóticas, nossa IA cria conversas genuínas que parecem reais para o WhatsApp.",
      metric: "IA inteligente"
    }
  ];

  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher a <span className="gradient-text">EazyFlow</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diferença entre ter chips banidos toda semana e ter chips saudáveis que vendem por meses está no comportamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/30"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-purple-100 rounded-2xl">
                    {benefit.icon}
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className="text-2xl font-bold" style={{ color: '#5F28F6' }}>{benefit.metric}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
