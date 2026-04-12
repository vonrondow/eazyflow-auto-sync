import HeroSection from "@/components/HeroSection";
import LossCalculator from "@/components/LossCalculator";
import SolutionSection from "@/components/SolutionSection";
import ContingencySection from "@/components/ContingencySection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LossCalculator />
      <SolutionSection />
      <ContingencySection />
      <FAQSection />
    </div>
  );
};

export default Index;
