
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

        {/* Subheadline with bullet points */}
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Quanto dinheiro você já perdeu por causa de um CRM mal preenchido?
          </p>
          <div className="space-y-4 text-lg md:text-xl">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
              <p>Seu time de marketing levou semanas para perceber que os leads eram ruins.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
              <p>Vendedores que estavam performando bem… mas os dados diziam o contrário.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
              <p>Horas preciosas perdidas preenchendo CRM, em vez de vender.</p>
            </div>
          </div>
          <div className="mt-8 text-xl md:text-2xl">
            <p className="font-semibold text-foreground">O problema não é seu time.</p>
            <p className="font-semibold text-foreground">O problema é o processo manual.</p>
          </div>
        </div>

        {/* CTA button */}
        <div className="flex justify-center items-center animate-fade-in delay-400">
          <Button size="lg" className="px-8 py-6 text-lg font-semibold gradient-purple border-0 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Quero entrar na lista de espera
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
