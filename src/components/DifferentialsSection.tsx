import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Smartphone, Users, ScanLine } from "lucide-react";

const DifferentialsSection = () => {
  const items = [
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
    },
    {
      icon: <ScanLine className="w-8 h-8 text-primary" />,
      title: "Simples como WhatsApp Web",
      description: "Leia o QR Code, igual ao WhatsApp Web. A IA assume o controle e conversa automaticamente. Zero configuração."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Como a <span className="gradient-text">Eazy Flow</span> funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tecnologia proprietária que simula comportamento humano real no WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="border border-purple-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 flex items-start gap-5">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
