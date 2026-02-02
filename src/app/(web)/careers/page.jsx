import CareersBanner from "@/components/CareersBanner";
import CareerSection from "@/components/CareerSection";
import FaqSection from "@/components/FaqsSection";
import GlobeSection from "@/components/GlobeSection";
import React from "react";

const page = () => {
  return (
    <>
      <CareersBanner />

      <CareerSection />

      <GlobeSection />

      <FaqSection />
    </>
  );
};

export default page;
