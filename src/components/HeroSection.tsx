import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100/50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-purple-200 mb-8 animate-fade-in shadow-lg">
          <AlertTriangle className="w-5 h-5 text-destructive" />
          <span className="text-base font-semibold text-foreground">Sua operação está em risco agora</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-[0.95]">
          Você acorda e sua{" "}
          <span className="gradient-text">operação de vendas</span>{" "}
          travou.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto animate-fade-in">
          WhatsApp banido. Tráfego rodando. Leads chegando. E sua equipe de mãos atadas.
        </p>

        {/* 3 Pain Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto animate-fade-in">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-destructive/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Bloqueio Inesperado</h3>
            <p className="text-muted-foreground">
              Sem aviso. Sem apelação. Seu número principal some e leva junto toda a operação do dia.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-destructive/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">O Custo Invisível</h3>
            <p className="text-muted-foreground">
              Quanto dinheiro você deixa na mesa com 24h de banimento? Faça as contas — o número assusta.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-destructive/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">O Desperdício</h3>
            <p className="text-muted-foreground">
              Tráfego pago rodando, leads chegando, e ninguém consegue responder. Dinheiro queimando.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-fade-in">
          <Link to="/lead-form">
            <Button size="lg" className="px-12 py-7 text-xl font-bold bg-primary text-primary-foreground hover:opacity-90 border-0 hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl">
              Quero proteger minha operação
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
          <p className="text-muted-foreground mt-4 text-sm">
            Entre na lista de espera — vagas limitadas
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
