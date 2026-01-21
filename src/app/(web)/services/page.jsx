import ApproachSection from "@/components/ApproachSection";
import FaqSection from "@/components/FaqsSection";
import GlobeSection from "@/components/GlobeSection";
import ServiceBanner from "@/components/ServiceBanner";
import ServiceRailSection from "@/components/ServicesRailSection";
import StreamSection from "@/components/StreamSection";
import React from "react";

const page = () => {
  return (
    <>
      <ServiceBanner />

      <ServiceRailSection/>

      <ApproachSection />


      <GlobeSection />

      <FaqSection />
    </>
  );
};

export default page;
