import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Lucas Mendes",
      role: "Gestor de Tráfego",
      company: "Agência Digital",
      content: "Perdia em média 3 chips por semana. Depois da EazyFlow, estou há 2 meses sem nenhum banimento. Economizei muito dinheiro.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Fernanda Souza",
      role: "Empresária", 
      company: "E-commerce",
      content: "O diferencial é que realmente parece humano. Outros aquecedores que usei eram muito mecânicos e o WhatsApp percebia rápido.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Ricardo Santos",
      role: "Infoprodutor",
      company: "Lançamentos",
      content: "Minha operação depende de WhatsApp. Com a EazyFlow, meus chips aguentam campanhas pesadas sem cair. Vale cada centavo.",
      rating: 5,
      avatar: "👨‍💻"
    }
  ];

  const metrics = [
    { value: "500+", label: "Chips protegidos" },
    { value: "95%", label: "Redução de banimentos" },
    { value: "24/7", label: "Aquecimento ativo" },
    { value: "4.9/5", label: "Avaliação média" }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas que pararam de perder chips com a EazyFlow
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
          <p className="text-sm text-muted-foreground mb-6">Tecnologia segura e confiável</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Criptografia</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">Dados seguros</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">Suporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
