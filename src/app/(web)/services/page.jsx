import ApproachSection from "@/components/ApproachSection";
import FaqSection from "@/components/FaqsSection";
import GlobeSection from "@/components/GlobeSection";
import ServiceBanner from "@/components/ServiceBanner";
import StreamSection from "@/components/StreamSection";
import React from "react";

const page = () => {
  return (
    
    
    <>
      <ServiceBanner/>

      <ApproachSection/>

      <StreamSection />

      {/* Globe Section */}
      <GlobeSection />

      {/* Faq Section */}
      <FaqSection />
    </>
  );
};

export default page;
