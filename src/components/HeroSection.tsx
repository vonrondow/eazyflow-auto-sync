import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, AlertTriangle, Clock, Target, TrendingDown } from "lucide-react";

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
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-purple-200 mb-8 animate-fade-in shadow-lg">
          <Zap className="w-5 h-5 text-primary" />
          <span className="text-base font-semibold text-foreground">Automação com IA que revoluciona seu CRM</span>
        </div>

        {/* Main headline */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in leading-[0.9]">
          Preencha seu{" "}
          <span className="gradient-text">CRM sozinho</span>
        </h1>

        {/* Problem statement - more direct and persuasive */}
        <div className="mb-12 max-w-5xl mx-auto animate-fade-in delay-200">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 border border-purple-100 shadow-2xl mb-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <AlertTriangle className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Quanto dinheiro você já perdeu?
              </h2>
            </div>
            
            {/* Problem points with better visual hierarchy */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-purple-50/50 rounded-2xl">
                <TrendingDown className="w-8 h-8 text-primary mb-3 mx-auto" />
                <p className="text-lg font-semibold text-foreground mb-2">Leads Perdidos</p>
                <p className="text-muted-foreground">Marketing não percebeu leads ruins a tempo</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50/50 rounded-2xl">
                <Target className="w-8 h-8 text-primary mb-3 mx-auto" />
                <p className="text-lg font-semibold text-foreground mb-2">Dados Falsos</p>
                <p className="text-muted-foreground">Vendedores bons pareciam ruins nos relatórios</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50/50 rounded-2xl">
                <Clock className="w-8 h-8 text-primary mb-3 mx-auto" />
                <p className="text-lg font-semibold text-foreground mb-2">Tempo Perdido</p>
                <p className="text-muted-foreground">Horas digitando em vez de vendendo</p>
              </div>
            </div>

            {/* Solution statement - more impactful */}
            <div className="text-center mb-8">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-8">
                O problema não são seus vendedores… é o processo que ainda é manual.
              </p>
              
              {/* CTA logo após a frase de impacto */}
              <div className="animate-fade-in delay-400">
                <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 shadow-2xl inline-block">
                  <Button size="lg" className="px-12 py-8 text-2xl font-bold bg-white text-primary hover:bg-gray-50 border-0 hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl">
                    Quero entrar na lista de espera
                    <ArrowRight className="ml-3 w-7 h-7" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
