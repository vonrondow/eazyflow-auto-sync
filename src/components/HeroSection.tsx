import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";
import bannedPhone from "@/assets/banned-phone.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground to-foreground/95" />
      {/* Red glow matching the image */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-destructive/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-destructive/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Image + Headline */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16">
          <div className="flex-shrink-0 w-56 md:w-64 lg:w-72 animate-fade-in">
            <img
              src={bannedPhone}
              alt="WhatsApp Account Banned - Tela de banimento"
              className="w-full h-auto drop-shadow-[0_0_40px_rgba(220,38,38,0.4)]"
            />
          </div>

          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-destructive/15 backdrop-blur-sm rounded-full border border-destructive/30 mb-6 animate-fade-in">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm font-semibold text-destructive">Sua operação está em risco agora</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 animate-fade-in leading-[0.95] text-white">
              Você acorda e sua{" "}
              <span className="text-destructive">operação de vendas</span>{" "}
              travou.
            </h1>

            <p className="text-lg md:text-xl text-white/60 animate-fade-in">
              WhatsApp banido. Tráfego rodando. Leads chegando. E sua equipe de mãos atadas.
            </p>
          </div>
        </div>

        {/* 3 Pain Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto animate-fade-in">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-destructive/20 hover:border-destructive/40 transition-all duration-300">
            <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Bloqueio Inesperado</h3>
            <p className="text-white/50">
              Sem aviso. Sem apelação. Seu número principal some e leva junto toda a operação do dia.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-destructive/20 hover:border-destructive/40 transition-all duration-300">
            <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">O Custo Invisível</h3>
            <p className="text-white/50">
              Quanto dinheiro você deixa na mesa com 24h de banimento? Faça as contas — o número assusta.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-destructive/20 hover:border-destructive/40 transition-all duration-300">
            <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">O Desperdício</h3>
            <p className="text-white/50">
              Tráfego pago rodando, leads chegando, e ninguém consegue responder. Dinheiro queimando.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Link to="/lead-form">
            <Button size="lg" className="px-12 py-7 text-xl font-bold bg-primary text-primary-foreground hover:opacity-90 border-0 hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl">
              Quero proteger minha operação
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
          <p className="text-white/40 mt-4 text-sm">
            Entre na lista de espera — vagas limitadas
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
