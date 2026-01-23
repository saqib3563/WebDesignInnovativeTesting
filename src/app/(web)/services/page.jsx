import ApproachSection from "@/components/ApproachSection";
import FaqSection from "@/components/FaqsSection";
import GlobeSection from "@/components/GlobeSection";
import OurServices from "@/components/OurServices";
import ServiceBanner from "@/components/ServiceBanner";
import ServiceRailSection from "@/components/ServicesRailSection";
import React from "react";

const page = () => {
  return (
    <>
      <ServiceBanner />

      <ServiceRailSection/>

      <ApproachSection />
      
      <OurServices/>

      <GlobeSection />

      <FaqSection />
    </>
  );
};

export default page;
