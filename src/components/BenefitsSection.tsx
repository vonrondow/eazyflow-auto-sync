
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Target, TrendingUp, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Decisões estratégicas precisas",
      description: "Dados atualizados permitem forecasts confiáveis e decisões de investimento certeiras. Sem previsibilidade, você navega às cegas.",
      metric: "Forecasting preciso"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Produtividade real da equipe",
      description: "Vendedores focam no que sabem fazer: vender. Sem perder tempo com burocracia digital que drena energia e motivação.",
      metric: "Mais vendas"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Identificação de oportunidades",
      description: "Padrões de comportamento revelam leads quentes e cross-sells. CRM desatualizado = dinheiro na mesa.",
      metric: "Oportunidades visíveis"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Relacionamento com cliente",
      description: "Histórico completo permite atendimento personalizado. Cliente sente que você realmente o conhece.",
      metric: "Experiência superior"
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher a <span className="gradient-text">EazyFlow</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como especialista em CRM, vejo empresas perdendo milhões por dados desatualizados. 
            Um CRM bem mantido não é só organização - é estratégia competitiva.
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
