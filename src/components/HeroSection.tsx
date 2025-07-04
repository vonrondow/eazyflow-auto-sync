
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100/50" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 mb-8 animate-fade-in">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Automação que revoluciona seu CRM</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          O CRM que se{" "}
          <span className="gradient-text">preenche sozinho</span>
        </h1>

        {/* Subheadline */}
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
          <p className="mb-4">
            Já imaginou o quanto de dinheiro você perdeu por conta do CRM não estar atualizado/atualizado sem qualidade?
          </p>
          <p className="mb-4">
            Time de Marketing demorando semanas para descobrir que estava enviando leads ruins
          </p>
          <p className="mb-4">
            Vendedores que vendiam bem, mas os dados não condizem
          </p>
          <p>
            Tempo em que o vendedor poderia estar vendendo
          </p>
        </div>

        {/* CTA button */}
        <div className="flex justify-center items-center animate-fade-in delay-400">
          <Button size="lg" className="px-8 py-6 text-lg font-semibold gradient-purple border-0 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Começar agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
