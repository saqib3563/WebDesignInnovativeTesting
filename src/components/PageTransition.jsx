"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "./PageLoader";

const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();


  return (
    <>
      {isLoading && <PageLoader onComplete={handleLoaderComplete} />}
      <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.3s ease" }}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;