import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Bot, MessageCircle, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AutomationDemo = () => {
  return (
    <section className="py-6 px-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como o <span className="gradient-text">aquecimento</span> funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa IA trabalha 24/7 simulando comportamento humano real para manter seus chips saudáveis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          {/* Step 1 */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-purple-100 rounded-full">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  PASSO 1
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Conectar Chip</h3>
              <p className="text-muted-foreground">
                Conecte seu chip novo ou existente à nossa plataforma em segundos
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
              
              <h3 className="text-xl font-semibold mb-3">IA Assume</h3>
              <p className="text-muted-foreground">
                Nossa inteligência artificial começa a simular comportamento humano
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-purple-100 rounded-full">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  PASSO 3
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Conversas Reais</h3>
              <p className="text-muted-foreground">
                Interações naturais, pausas humanas, horários variados e contexto real
              </p>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-purple-100 rounded-full">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  PASSO 4
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Chip Protegido</h3>
              <p className="text-muted-foreground">
                Seu chip fica saudável e pronto para campanhas de vendas de alto volume
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA após os 4 passos */}
        <div className="mt-16 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-purple-100 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pronto para proteger seus chips?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Comece a aquecer seus chips de forma inteligente e pare de perder números
            </p>
            <Link to="/lead-form">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold">
                Quero entrar na lista de espera
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationDemo;
