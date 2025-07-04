
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Play, CheckCircle } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Setup em menos de 5 minutos",
    "Suporte técnico especializado",
    "Garantia de 30 dias",
    "Sem compromisso de longo prazo"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white relative overflow-hidden">
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
          Junte-se a centenas de empresas que já economizam tempo e aumentam vendas com a EazyFlow
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

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Demo CTA */}
          <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Calendar className="w-12 h-12 text-white mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">Agende uma Demonstração</h3>
              <p className="text-white/80 mb-6">
                Veja a EazyFlow em ação e descubra como ela pode transformar seu CRM
              </p>
              <Button 
                size="lg" 
                className="w-full bg-white text-purple-700 hover:bg-gray-100 font-semibold py-4 text-lg"
              >
                Agendar demonstração gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-xs text-white/60 mt-3">✨ Sem compromisso • 30 minutos</p>
            </CardContent>
          </Card>

          {/* Trial CTA */}
          <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Play className="w-12 h-12 text-white mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">Teste Grátis Agora</h3>
              <p className="text-white/80 mb-6">
                Comece sua avaliação gratuita e veja os resultados em poucos dias
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 font-semibold py-4 text-lg"
              >
                Começar teste gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-xs text-white/60 mt-3">🚀 Ativação instantânea • 14 dias grátis</p>
            </CardContent>
          </Card>
        </div>

        {/* Security notice */}
        <div className="mt-12 text-center">
          <p className="text-white/70 text-sm">
            🔒 Dados protegidos por criptografia de nível bancário • Conformidade LGPD garantida
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
