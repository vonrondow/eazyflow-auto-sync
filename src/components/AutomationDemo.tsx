
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Database, Sparkles } from "lucide-react";

const AutomationDemo = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como a <span className="gradient-text">automação</span> funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa automação inteligente trabalha 24/7 para manter seu CRM sempre atualizado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Step 1 */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-purple-100 rounded-full">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  PASSO 1
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Detecta Dados</h3>
              <p className="text-muted-foreground">
                Nossa automação monitora e identifica automaticamente novos leads, interações e oportunidades
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-purple-100 rounded-full">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  PASSO 2
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Processa Informações</h3>
              <p className="text-muted-foreground">
                Analisa, organiza e estrutura os dados seguindo as regras do seu negócio
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-purple-100 rounded-full">
                  <Database className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  PASSO 3
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Atualiza CRM</h3>
              <p className="text-muted-foreground">
                Preenche automaticamente seu CRM com dados precisos e organizados
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Result */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-purple-600 to-purple-500 text-white max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Resultado:</h3>
              <p className="text-xl mb-6 opacity-90">
                Seu time comercial trabalha com dados sempre atualizados, sem esforço manual
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">0%</div>
                  <div className="text-sm opacity-80">Erro humano</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">Funcionamento</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Automático</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AutomationDemo;
