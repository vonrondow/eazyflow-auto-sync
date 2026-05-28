import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LossCalculator from "@/components/LossCalculator";
import SolutionSection from "@/components/SolutionSection";
import ContingencySection from "@/components/ContingencySection";
import EbookSection from "@/components/EbookSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LossCalculator />
      <SolutionSection />
      <ContingencySection />
      <EbookSection />
      <FAQSection />
    </div>
  );
};

export default Index;
