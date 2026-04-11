import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Shield, Flame, HeartPulse } from "lucide-react";

const ChipScenarios = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Dois cenários, <span className="gradient-text">uma solução</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A Eazy Flow se adapta ao momento de cada chip da sua operação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Scenario 1: New Chips */}
          <Card className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary to-purple-400" />
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Flame className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-bold uppercase tracking-wider text-primary">Cenário 1</span>
                  <h3 className="text-2xl font-bold text-foreground">Chips Novos — Incubadora</h3>
                </div>
              </div>

              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                O chip acabou de ser comprado. Precisa de <strong>aquecimento intenso e gradual</strong> antes de enviar a primeira oferta.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Maturação de 30 a 60 dias consistente</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Construção gradual de reputação</span>
                </div>
                <div className="flex items-start gap-3">
                  <HeartPulse className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Health Score otimizado desde o início</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scenario 2: Old Chips */}
          <Card className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-purple-400 to-primary" />
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <HeartPulse className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-bold uppercase tracking-wider text-primary">Cenário 2</span>
                  <h3 className="text-2xl font-bold text-foreground">Chips Antigos — Manutenção</h3>
                </div>
              </div>

              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                O chip já vende, mas sofre denúncias. A Eazy Flow roda <strong>em paralelo</strong> para manter o Health Score alto e diluir o spam.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Continue vendendo sem parar</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Aquecimento em paralelo com a operação</span>
                </div>
                <div className="flex items-start gap-3">
                  <HeartPulse className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Diluição ativa de denúncias</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChipScenarios;
