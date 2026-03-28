import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectGallerySection from "@/components/ProjectGallerySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <ServicesSection />
      <ProjectGallerySection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ServiceAreasSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
