
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Diretor Comercial",
      company: "TechSolutions",
      content: "A EazyFlow revolucionou nossa operação comercial. Nosso time economiza 12 horas por semana e as vendas aumentaram 40%.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Ana Costa",
      role: "Gerente de Vendas", 
      company: "InnovaCorp",
      content: "Impressionante como a IA consegue capturar e organizar dados tão precisamente. Nunca mais perdemos uma oportunidade.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Roberto Lima",
      role: "CEO",
      company: "SalesMax",
      content: "ROI incrível! Em 3 meses já havíamos pago o investimento só com o tempo economizado da equipe.",
      rating: 5,
      avatar: "👨‍💻"
    }
  ];

  const metrics = [
    { value: "500+", label: "Empresas confiam" },
    { value: "10.000+", label: "Horas economizadas" },
    { value: "99.9%", label: "Uptime garantido" },
    { value: "4.9/5", label: "Avaliação média" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas que já transformaram suas vendas com a EazyFlow
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary opacity-50" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Segurança e conformidade garantidas</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">LGPD</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">ISO 27001</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">SOC 2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
