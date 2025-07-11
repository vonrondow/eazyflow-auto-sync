
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingDown, Clock, Target } from "lucide-react";

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
          <span className="text-sm font-medium text-foreground">Automação com IA que revoluciona seu CRM</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in leading-tight">
          O CRM que se{" "}
          <span className="gradient-text">preenche sozinho</span>
        </h1>

        {/* Problem statement - simplified */}
        <div className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
              Quanto dinheiro você já perdeu por causa de um CRM mal preenchido?
            </h2>
            
            {/* Problem points with icons */}
            <div className="space-y-4 text-lg text-left max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Leads ruins</strong> que seu marketing não percebeu a tempo
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Vendedores que estavam <strong className="text-foreground">performando bem</strong>… mas os dados diziam o contrário
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Horas desperdiçadas</strong> digitando informações em vez de fechar negócios
                </p>
              </div>
            </div>
          </div>

          {/* Solution statement */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-6 shadow-xl">
            <div className="space-y-2 text-lg md:text-xl font-semibold">
              <p className="opacity-90">O problema não são seus vendedores.</p>
              <p className="text-xl md:text-2xl font-bold">
                O problema é o processo manual.
              </p>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="animate-fade-in delay-400">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 shadow-lg inline-block mb-4">
            <Button size="lg" className="px-10 py-6 text-xl font-bold gradient-purple border-0 hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl">
              Quero entrar na lista de espera
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            🚀 Ativação instantânea • 14 dias grátis
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
