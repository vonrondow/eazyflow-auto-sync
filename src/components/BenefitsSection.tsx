
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Target, TrendingUp, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Economize tempo",
      description: "Vendedores recuperam até 10 horas por semana para focar no que realmente importa: vender.",
      metric: "10h/semana"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Dados precisos",
      description: "IA elimina erros humanos e garante informações sempre atualizadas no seu CRM.",
      metric: "99.9% precisão"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Mais conversões",
      description: "Decisões mais inteligentes baseadas em dados reais aumentam sua taxa de fechamento.",
      metric: "+35% vendas"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Segurança total",
      description: "Conformidade com LGPD e criptografia de ponta a ponta para proteger seus dados.",
      metric: "LGPD OK"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher a <span className="gradient-text">EazyFlow</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa IA revoluciona a forma como sua equipe gerencia dados no CRM
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
                  <span className="text-2xl font-bold text-primary">{benefit.metric}</span>
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
