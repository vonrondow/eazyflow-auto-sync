
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const IntegrationsSection = () => {
  const integrations = [
    {
      name: "HubSpot",
      description: "Integração completa com HubSpot CRM",
      logo: "🔶"
    },
    {
      name: "Pipedrive", 
      description: "Sincronização automática com Pipedrive",
      logo: "🟢"
    },
    {
      name: "RD Station",
      description: "Conecte-se facilmente ao RD Station",
      logo: "🔴"
    },
    {
      name: "Salesforce",
      description: "Suporte completo ao Salesforce",
      logo: "🔵"
    },
    {
      name: "Outros CRMs",
      description: "API flexível para qualquer CRM",
      logo: "🔗"
    }
  ];

  const features = [
    "Sincronização em tempo real",
    "Configuração em menos de 5 minutos", 
    "Backup automático de dados",
    "API robusta e confiável",
    "Conformidade com LGPD"
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Integra com seu <span className="gradient-text">CRM favorito</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conecte a EazyFlow ao seu CRM atual em poucos cliques
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Integrations */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">CRMs Suportados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {integrations.map((integration, index) => (
                <Card key={index} className="border border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="text-3xl">{integration.logo}</div>
                    <div>
                      <h4 className="font-semibold text-foreground">{integration.name}</h4>
                      <p className="text-sm text-muted-foreground">{integration.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Por que nossa integração é diferente?</h3>
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
                  <span className="font-semibold text-foreground">Certificação LGPD</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Seus dados estão seguros e em conformidade com a Lei Geral de Proteção de Dados
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
