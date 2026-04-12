import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, CheckCircle2, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContingencySection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold uppercase tracking-wider text-primary">Seguro Anti-Pausa</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Plano de <span className="gradient-text">Contingência</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Myth */}
          <Card className="border-2 border-destructive/20 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground">O Mito da Imunidade</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-lg mt-0.5">✕</span>
                  <p className="text-muted-foreground">
                    Se alguém te promete que <strong>nunca será banido</strong> no WhatsApp, a primeira coisa que você deve fazer é <strong>não confiar</strong> nessa pessoa.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-lg mt-0.5">✕</span>
                  <p className="text-muted-foreground">
                    Confiar em um único chip é <strong>roleta russa</strong>. Sua operação depende de redundância.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contingency */}
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">A Reserva de Contingência</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Checklist validado pra manter sua operação rodando e reduzir ao máximo o risco de banimento.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Você conta com uma <strong>reserva de 30% de contingência</strong>. Se o chip principal cair, a reserva assume.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Resultado: <strong>operação muito mais confiável</strong> e resiliente.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Fair Play */}
        <Card className="border-2 border-primary/20 shadow-xl max-w-4xl mx-auto mb-12">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Jogo Limpo: O Tempo de Maturação</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Verdade</p>
                  <p className="text-muted-foreground">Se alguém te promete uma maturação em menos de 30 dias, ela está <strong>mentindo</strong> pra você.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Processo</p>
                  <p className="text-muted-foreground">Chips novos precisam de <strong>30 a 60 dias</strong> de aquecimento consistente.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Nosso Compromisso</p>
                  <p className="text-muted-foreground">Seguimos as boas práticas do algoritmo para garantir <strong>longevidade</strong>.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-muted rounded-xl">
              <p className="text-sm text-muted-foreground text-center">
                ⚠️ O aquecedor de chips não impede que banimentos ocorram. O uso da ferramenta é uma boa prática de mercado e o plano de contingência serve para manter sua operação funcionando.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Link to="/lead-form">
            <Button size="lg" className="px-10 py-7 text-xl font-bold bg-primary text-primary-foreground hover:opacity-90 rounded-2xl transition-all duration-300">
              <Shield className="mr-2 w-6 h-6" />
              Quero blindar minha operação
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
          <p className="text-muted-foreground mt-4 text-sm">
            Vagas limitadas — entre na lista de espera
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContingencySection;
