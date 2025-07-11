
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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
          O CRM que se{" "}
          <span className="gradient-text">preenche sozinho</span>
        </h1>

        {/* Problem statement with enhanced visual hierarchy */}
        <div className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 shadow-lg mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 leading-tight">
              Quanto dinheiro você já perdeu por causa de um CRM mal preenchido?
            </h2>
            
            {/* Problem points with icons and better spacing */}
            <div className="space-y-6 text-lg md:text-xl text-left max-w-3xl mx-auto">
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                <TrendingDown className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800 font-medium">
                  <strong>Leads ruins</strong> que seu marketing não percebeu a tempo
                </p>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                <Target className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800 font-medium">
                  Vendedores que estavam <strong>performando bem</strong>… mas os dados diziam o contrário
                </p>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                <Clock className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-800 font-medium">
                  <strong>Horas desperdiçadas</strong> digitando informações em vez de fechar negócios
                </p>
              </div>
            </div>
          </div>

          {/* Solution statement with emphasis */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8 shadow-xl">
            <div className="space-y-3 text-xl md:text-2xl font-semibold">
              <p className="opacity-90">O problema não são seus vendedores.</p>
              <p className="text-yellow-300 text-2xl md:text-3xl font-bold">
                O problema é o processo manual.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA section */}
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
