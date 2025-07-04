
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";

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
          <span className="text-sm font-medium text-foreground">IA que revoluciona seu CRM</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          O CRM que se{" "}
          <span className="gradient-text">preenche sozinho</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
          A EazyFlow automatiza o preenchimento do seu CRM com IA. 
          Sem esforço humano, sem erros, sem perda de tempo.
        </p>

        {/* Benefits list */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in delay-300">
          <div className="flex items-center gap-2 text-foreground">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Dados precisos em tempo real</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Economize horas por semana</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Integração com CRMs populares</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-400">
          <Button size="lg" className="px-8 py-6 text-lg font-semibold gradient-purple border-0 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Agende uma demonstração
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-purple-200 hover:bg-purple-50 transition-all duration-300">
            <Play className="mr-2 w-5 h-5" />
            Ver demonstração
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 animate-fade-in delay-500">
          <p className="text-sm text-muted-foreground mb-4">Confiado por empresas inovadoras</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="px-6 py-2 bg-white rounded-lg shadow-sm border">Logo 1</div>
            <div className="px-6 py-2 bg-white rounded-lg shadow-sm border">Logo 2</div>
            <div className="px-6 py-2 bg-white rounded-lg shadow-sm border">Logo 3</div>
            <div className="px-6 py-2 bg-white rounded-lg shadow-sm border">Logo 4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
