import ContactSection from "@/components/ContactSection";
import ContactUsBanner from "@/components/ContactUsBanner";
import LocationSection from "@/components/LocationSection";
import React from "react";

const page = () => {
  return (
    <>
      <ContactUsBanner />

      <ContactSection />

      <LocationSection />

    </>
  );
};

export default page;
