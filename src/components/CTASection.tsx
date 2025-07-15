
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, UserPlus, CheckCircle } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Suporte técnico especializado",
    "Garantia de 30 dias",
    "Sem compromisso de longo prazo",
    "Implementação personalizada"
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Pronto para automatizar seu CRM?
        </h2>
        
        <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto">
          Já imaginou o tanto de dinheiro que você perdeu por alguém não fazer algo simples: "atualizar o CRM"?
        </p>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
              <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
              <span className="text-white/90">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Single CTA */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <UserPlus className="w-12 h-12 text-white mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">Entrar na lista de espera</h3>
              <p className="text-white/80 mb-6">
                Revolucione seu CRM com nossa automação inteligente
              </p>
              <Button 
                size="lg" 
                className="w-full bg-white text-purple-700 hover:bg-gray-100 font-semibold py-4 text-lg"
              >
                Quero entrar na lista de espera
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-xs text-white/60 mt-3">🚀 Garantia de 30 dias</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
