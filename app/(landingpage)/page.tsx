import HeroSection from "@/components/HomePage/HeroSection";
import FeaturedSection from "@/components/HomePage/FeaturedSection/FeaturedSection";
import CategorySection from "@/components/HomePage/CategorySection/CategorySection";
import CTASection from "@/components/HomePage/CTASection";
import BenefitsSection from "@/components/HomePage/BenefitsSection/BenefitsSection";
import FAQS from "@/components/HomePage/FaqsSection/FAQS";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <CategorySection />
      <CTASection />
      <BenefitsSection />
      <FAQS />
    </div>
  );
}
