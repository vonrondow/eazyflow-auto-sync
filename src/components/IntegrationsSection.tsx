import { Card, CardContent } from "@/components/ui/card";
import { Check, Smartphone, MessageSquare, Users } from "lucide-react";

const IntegrationsSection = () => {
  const differentials = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Conversas com contexto",
      description: "Nossa IA não manda mensagens aleatórias. Ela cria diálogos com início, meio e fim, como uma pessoa real faria."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Padrões de uso humano",
      description: "Horários variados, pausas naturais, velocidade de digitação real. O WhatsApp não consegue diferenciar."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Rede de chips aquecidos",
      description: "Seus chips interagem entre si de forma natural, construindo histórico e reputação gradualmente."
    }
  ];

  const features = [
    "Simulação de comportamento humano 24/7",
    "Pausas e intervalos naturais entre mensagens",
    "Horários de atividade variados e realistas",
    "Conversas contextualizadas e coerentes",
    "Velocidade de digitação humanizada",
    "Histórico de interações construído gradualmente"
  ];

  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nos torna <span className="gradient-text">diferentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enquanto outros maturadores usam padrões robóticos detectáveis, nossa IA simula comportamento humano real
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Differentials */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Nossa tecnologia</h3>
            <div className="space-y-6">
              {differentials.map((item, index) => (
                <Card key={index} className="border border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">O que você ganha</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <Card className="mt-8 border-purple-200 bg-purple-50/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-foreground">Tecnologia proprietária</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Nossa IA foi treinada com milhares de padrões de comportamento humano real no WhatsApp
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
