import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LossCalculator = () => {
  const [salesGoal, setSalesGoal] = useState<string>("30");
  const [ticketMedio, setTicketMedio] = useState<string>("500");

  const salesNum = parseFloat(salesGoal) || 0;
  const ticketNum = parseFloat(ticketMedio) || 0;
  const monthlyRevenue = salesNum * ticketNum;
  const dailyLoss = salesNum > 0 ? monthlyRevenue / 22 : 0;

  return (
    <section className="py-20 px-4 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full mb-6">
            <Calculator className="w-5 h-5 text-destructive" />
            <span className="text-sm font-semibold text-destructive">Calculadora do Prejuízo</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Quanto custa a sua <span className="text-primary">operação parada</span>?
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Cenário: WhatsApp banido por apenas <strong className="text-white/70">24h</strong> (1 dia útil). Faça as contas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Calculator - 3 cols */}
          <Card className="lg:col-span-3 border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <Label htmlFor="salesGoal" className="text-base font-semibold text-white mb-2 block">
                    Meta do vendedor/mês
                  </Label>
                  <p className="text-sm text-white/40 mb-3">Quantidade de vendas/mês</p>
                  <Input
                    id="salesGoal"
                    type="number"
                    placeholder="Ex: 30"
                    value={salesGoal}
                    onChange={(e) => setSalesGoal(e.target.value)}
                    className="text-lg h-14 border-white/20 bg-white/5 text-white focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="ticketMedio" className="text-base font-semibold text-white mb-2 block">
                    Ticket médio
                  </Label>
                  <p className="text-sm text-white/40 mb-3">Valor médio por venda (R$)</p>
                  <Input
                    id="ticketMedio"
                    type="number"
                    placeholder="Ex: 500"
                    value={ticketMedio}
                    onChange={(e) => setTicketMedio(e.target.value)}
                    className="text-lg h-14 border-white/20 bg-white/5 text-white focus:border-primary"
                  />
                </div>
              </div>

              {/* Result */}
              <div className={`rounded-2xl p-8 text-center transition-all duration-500 ${dailyLoss > 0 ? 'bg-destructive/10 border border-destructive/20' : 'bg-white/5'}`}>
                {dailyLoss > 0 ? (
                  <>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                      <span className="text-sm font-bold uppercase tracking-wider text-destructive">Total perdido em 1 dia</span>
                    </div>
                    <p className="text-5xl md:text-6xl font-bold text-destructive mb-2">
                      R$ {dailyLoss.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <p className="text-white/50">
                      por vendedor, em apenas <strong className="text-white/70">um dia</strong> de operação parada
                    </p>
                  </>
                ) : (
                  <p className="text-lg text-white/50">
                    Preencha os campos acima para ver quanto você perde
                  </p>
                )}
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <Link to="/lead-form">
                  <Button size="lg" className="px-8 py-6 text-lg font-bold bg-primary text-primary-foreground hover:opacity-90 rounded-xl">
                    Não quero perder mais dinheiro
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Side card - 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-5">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Parem de perder dinheiro com "aquecimento" manual falho.
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Cada minuto que sua equipe gasta simulando conversas é um minuto a menos vendendo. A EazyFlow automatiza o tédio para você focar no lucro.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  E se fossem 5 vendedores?
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Multiplique o prejuízo por cada vendedor da sua equipe. O custo real de um banimento é muito maior do que parece.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LossCalculator;
