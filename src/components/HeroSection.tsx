import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, AlertTriangle, ShieldX, Clock, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100/50" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-purple-200 mb-8 animate-fade-in shadow-lg">
          <Zap className="w-5 h-5 text-primary" />
          <span className="text-base font-semibold text-foreground">Aquecedor de Chips com Inteligência Artificial</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-[0.95]">
          A IA que simula{" "}
          <span className="gradient-text">comportamento humano</span>{" "}
          para manter sua máquina de vendas ligada
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in delay-100">
          Enquanto outros maturadores mandam mensagens pré-definidas e aleatórias, o nosso simula conversas reais como um usuário comum — não como um spammer.
        </p>

        {/* Problem statement */}
        <div className="mb-12 max-w-5xl mx-auto animate-fade-in delay-200">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 border border-purple-100 shadow-2xl mb-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <AlertTriangle className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Qual dessas dores você sente?
              </h2>
            </div>
            
            {/* Problem points */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-purple-50/50 rounded-2xl">
                <ShieldX className="w-8 h-8 text-primary mb-3 mx-auto" />
                <p className="text-lg font-semibold text-foreground mb-2">Chip Banido</p>
                <p className="text-muted-foreground">Perdeu seu número após poucos dias de uso intenso</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50/50 rounded-2xl">
                <Clock className="w-8 h-8 text-primary mb-3 mx-auto" />
                <p className="text-lg font-semibold text-foreground mb-2">Aquecimento Manual</p>
                <p className="text-muted-foreground">Gasta horas aquecendo chip e ainda faz errado</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50/50 rounded-2xl">
                <Bot className="w-8 h-8 text-primary mb-3 mx-auto" />
                <p className="text-lg font-semibold text-foreground mb-2">Padrão de Bot</p>
                <p className="text-muted-foreground">WhatsApp detecta comportamento robótico facilmente</p>
              </div>
            </div>

            {/* Solution statement */}
            <div className="text-center mb-8">
              <p className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#7E22CD' }}>
                O WhatsApp reage a comportamentos suspeitos, não ao chip. Aja como humano e diminua riscos.
              </p>
              
              {/* CTA */}
              <div className="animate-fade-in delay-400">
                <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-3xl p-8 shadow-2xl inline-block">
                  <Link to="/lead-form">
                    <Button size="lg" className="px-12 py-8 text-2xl font-bold bg-white text-purple-700 hover:bg-gray-100 border-0 hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl">
                      Quero entrar na lista de espera
                      <ArrowRight className="ml-3 w-7 h-7" />
                    </Button>
                  </Link>
                  <p className="text-lg text-white/90 font-semibold mt-4">
                    🛡️ Chips saudáveis vendem mais, por mais tempo
                  </p>
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
