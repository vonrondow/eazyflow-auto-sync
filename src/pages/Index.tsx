
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AutomationDemo from "@/components/AutomationDemo";
import IntegrationsSection from "@/components/IntegrationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <AutomationDemo />
      <IntegrationsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
