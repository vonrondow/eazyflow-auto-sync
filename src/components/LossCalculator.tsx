import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, AlertTriangle } from "lucide-react";

const LossCalculator = () => {
  const [salesGoal, setSalesGoal] = useState<string>("");
  const [ticketMedio, setTicketMedio] = useState<string>("");

  const salesNum = parseFloat(salesGoal) || 0;
  const ticketNum = parseFloat(ticketMedio) || 0;
  const monthlyRevenue = salesNum * ticketNum;
  const dailyLoss = monthlyRevenue / 22; // business days

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full mb-6">
            <Calculator className="w-5 h-5 text-destructive" />
            <span className="text-sm font-semibold text-destructive">Calculadora do Prejuízo</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Quanto custa a sua <span className="gradient-text">operação parada</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cenário: WhatsApp banido por apenas <strong>24h</strong> (1 dia útil). Faça as contas.
          </p>
        </div>

        <Card className="border-2 border-purple-100 shadow-2xl overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <Label htmlFor="salesGoal" className="text-base font-semibold text-foreground mb-2 block">
                  Meta de vendas mensal por vendedor
                </Label>
                <p className="text-sm text-muted-foreground mb-3">Quantidade de vendas/mês</p>
                <Input
                  id="salesGoal"
                  type="number"
                  placeholder="Ex: 30"
                  value={salesGoal}
                  onChange={(e) => setSalesGoal(e.target.value)}
                  className="text-lg h-14 border-2 focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="ticketMedio" className="text-base font-semibold text-foreground mb-2 block">
                  Ticket médio
                </Label>
                <p className="text-sm text-muted-foreground mb-3">Valor médio por venda (R$)</p>
                <Input
                  id="ticketMedio"
                  type="number"
                  placeholder="Ex: 500"
                  value={ticketMedio}
                  onChange={(e) => setTicketMedio(e.target.value)}
                  className="text-lg h-14 border-2 focus:border-primary"
                />
              </div>
            </div>

            {/* Result */}
            <div className={`rounded-2xl p-8 text-center transition-all duration-500 ${dailyLoss > 0 ? 'bg-destructive/10 border-2 border-destructive/20' : 'bg-muted'}`}>
              {dailyLoss > 0 ? (
                <>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                    <span className="text-sm font-bold uppercase tracking-wider text-destructive">Total perdido em 1 dia</span>
                  </div>
                  <p className="text-5xl md:text-6xl font-bold text-destructive mb-2">
                    R$ {dailyLoss.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  <p className="text-muted-foreground">
                    por vendedor, em apenas <strong>um dia</strong> de operação parada
                  </p>
                </>
              ) : (
                <p className="text-lg text-muted-foreground">
                  Preencha os campos acima para ver quanto você perde
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LossCalculator;
