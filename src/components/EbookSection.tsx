import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Download, Loader2, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import ebookMockup from "@/assets/ebook-mockup.png";

// 🔗 Cole aqui o link real do PDF no Google Drive
const DRIVE_PDF_URL =
  "https://drive.google.com/file/d/1npRRvEYvAGEJnfo0kHME1YuDwb6YtDpy/view?usp=sharing";

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(120),
  cargo: z.string().trim().min(2, "Informe seu cargo").max(80),
  empresa: z.string().trim().min(1, "Informe o nome da empresa").max(120),
  telefone: z
    .string()
    .trim()
    .min(14, "Informe um telefone válido")
    .max(20),
});

type FormData = z.infer<typeof schema>;

const EbookSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [phone, setPhone] = useState("");
  const [cargo, setCargo] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { nome: "", cargo: "", empresa: "", telefone: "" },
  });

  const onSubmit = async (data: FormData) => {
    if (submitting) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.from("ebook_leads").insert({
        nome: data.nome,
        cargo: data.cargo,
        empresa: data.empresa,
        telefone: data.telefone,
      });

      if (error) throw error;

      reset();
      setPhone("");
      setCargo("");
      toast({
        title: "Tudo certo!",
        description: "Redirecionando para o seu material...",
      });
      window.location.href = DRIVE_PDF_URL;
    } catch (err) {
      console.error(err);
      toast({
        title: "Não foi possível enviar",
        description:
          "Verifique sua conexão e tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="ebook"
      className="relative py-20 md:py-28 px-4 bg-[#0f0f1a] overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Visual + copy */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              E-book gratuito
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-5">
            O Guia Definitivo de{" "}
            <span className="text-primary">Maturação Estratégica</span> de Chips
          </h2>

          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Aprenda a mitigar banimentos e proteger a contingência da sua
            operação de outbound usando comportamento humano simulado por IA.
          </p>

          <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
            <img
              src={ebookMockup}
              alt="E-book Guia Definitivo de Maturação de Chips"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-56 md:w-72 h-auto drop-shadow-[0_20px_60px_rgba(124,58,237,0.35)]"
            />
          </div>
        </div>

        {/* Right: Form card */}
        <div className="order-1 lg:order-2">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Receba o PDF gratuitamente
              </h3>
              <p className="text-sm text-white/60">
                Preencha os dados e o material será liberado na hora.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-white/80">
                  Nome completo
                </Label>
                <Input
                  id="nome"
                  placeholder="Seu nome"
                  autoComplete="name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary"
                  {...register("nome")}
                />
                {errors.nome && (
                  <p className="text-xs text-destructive">{errors.nome.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="cargo" className="text-white/80">
                  Cargo
                </Label>
                <Select
                  value={cargo}
                  onValueChange={(v) => {
                    setCargo(v);
                    setValue("cargo", v, { shouldValidate: true });
                  }}
                >
                  <SelectTrigger
                    id="cargo"
                    className="bg-white/5 border-white/10 text-white focus:ring-primary"
                  >
                    <SelectValue placeholder="Selecione seu cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    {cargos.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.cargo && (
                  <p className="text-xs text-destructive">{errors.cargo.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="empresa" className="text-white/80">
                  Nome da empresa
                </Label>
                <Input
                  id="empresa"
                  placeholder="Sua empresa"
                  autoComplete="organization"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary"
                  {...register("empresa")}
                />
                {errors.empresa && (
                  <p className="text-xs text-destructive">
                    {errors.empresa.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-white/80">
                  WhatsApp
                </Label>
                <Input
                  id="telefone"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => {
                    const formatted = formatPhone(e.target.value);
                    setPhone(formatted);
                    setValue("telefone", formatted, { shouldValidate: true });
                  }}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary"
                />
                {errors.telefone && (
                  <p className="text-xs text-destructive">
                    {errors.telefone.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground hover:opacity-90 font-bold rounded-xl py-6 text-base"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 w-5 h-5" />
                    Quero o e-book gratuito
                  </>
                )}
              </Button>

              <p className="flex items-center justify-center gap-2 text-xs text-white/40 pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Seus dados estão seguros e não serão compartilhados.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookSection;
