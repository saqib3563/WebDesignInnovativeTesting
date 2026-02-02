import AboutUs from "@/components/AboutSection";
import Blogs from "@/components/BlogsSection";
import FaqSection from "@/components/FaqsSection";
import GlobeSection from "@/components/GlobeSection";
import HeroBanner from "@/components/HeroBanner";
import ProDesignSection from "@/components/ProDesign";
import ServiceSection from "@/components/ServiceSection";
import SliderSection2 from "@/components/slider-section-2";

export default function Home() {
  return (
    <>
      <HeroBanner />

      <AboutUs />

      <ProDesignSection />

      <SliderSection2 />

      <ServiceSection />

      <Blogs />

      <GlobeSection />

      <FaqSection />
      
    </>
  );
}
