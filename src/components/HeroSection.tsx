import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import bannedPhone from "@/assets/banned-phone.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f1a] via-[#12121f] to-[#0f0f1a]" />
      {/* Red glow behind phone */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-destructive/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">Sua operação está em risco agora</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.05] text-white">
              Sua operação{" "}
              <br className="hidden md:block" />
              está em{" "}
              <span className="text-primary">risco</span>{" "}
              <br className="hidden md:block" />
              <span className="text-primary">agora.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A EazyFlow automatiza o processo de maturação de chips da sua operação com uma IA que simula o comportamento humano + um plano de contingência para minimizar o risco de banimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/lead-form">
                <Button size="lg" className="px-8 py-6 text-lg font-bold bg-primary text-primary-foreground hover:opacity-90 rounded-xl transition-all duration-300">
                  Conversar com um especialista
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Phone image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
            <img
              src={bannedPhone}
              alt="WhatsApp Account Banned - Tela de banimento"
              className="w-72 md:w-80 lg:w-[420px] h-auto drop-shadow-[0_0_60px_rgba(220,38,38,0.3)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
