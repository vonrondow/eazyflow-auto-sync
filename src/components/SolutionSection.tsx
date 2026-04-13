import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Shield, Flame, HeartPulse, MessageSquare, Users, ScanLine } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Como a <span className="text-primary">Eazy Flow</span> funciona
          </h2>
          <p className="text-lg text-white/50 max-w-3xl mx-auto">
            Tecnologia proprietária que se adapta ao momento de cada chip da sua operação
          </p>
        </div>

        {/* Two scenarios */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary to-purple-400" />
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Flame className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Cenário 1</span>
                  <h3 className="text-xl font-bold text-white">Chips Novos — Incubadora</h3>
                </div>
              </div>
              <p className="text-white/50 mb-5">
                O chip acabou de ser comprado. Precisa de <strong className="text-white/70">aquecimento intenso e gradual</strong> antes de enviar a primeira oferta.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">Maturação de 30 a 60 dias consistente</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">Construção gradual de reputação</span>
                </div>
                <div className="flex items-start gap-3">
                  <HeartPulse className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">Health Score otimizado desde o início</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-purple-400 to-primary" />
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Cenário 2</span>
                  <h3 className="text-xl font-bold text-white">Chips Antigos — Manutenção</h3>
                </div>
              </div>
              <p className="text-white/50 mb-5">
                O chip já vende, mas sofre denúncias. A Eazy Flow roda <strong className="text-white/70">em paralelo</strong> para manter o Health Score alto.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">Continue vendendo sem parar</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">Aquecimento em paralelo com a operação</span>
                </div>
                <div className="flex items-start gap-3">
                  <HeartPulse className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">Diluição ativa de denúncias</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How it works - differentials */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
          O que torna isso possível
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <MessageSquare className="w-7 h-7 text-primary" />,
              title: "Conversas com contexto",
              description: "Nossa IA cria diálogos com início, meio e fim, como uma pessoa real faria."
            },
            {
              icon: <Smartphone className="w-7 h-7 text-primary" />,
              title: "Padrões de uso humano",
              description: "Horários variados, pausas naturais, velocidade de digitação real."
            },
            {
              icon: <Users className="w-7 h-7 text-primary" />,
              title: "Rede de chips aquecidos",
              description: "Seus chips interagem entre si, construindo histórico e reputação gradualmente."
            },
            {
              icon: <ScanLine className="w-7 h-7 text-primary" />,
              title: "Simples como WhatsApp Web",
              description: "Leia o QR Code e a IA assume. Zero configuração."
            }
          ].map((item, index) => (
            <Card key={index} className="border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
