
import HeroSection from "@/components/HeroSection";
import LossCalculator from "@/components/LossCalculator";
import ChipScenarios from "@/components/ChipScenarios";
import DifferentialsSection from "@/components/DifferentialsSection";
import ContingencySection from "@/components/ContingencySection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LossCalculator />
      <ChipScenarios />
      <DifferentialsSection />
      <ContingencySection />
      <CTASection />
    </div>
  );
};

export default Index;
