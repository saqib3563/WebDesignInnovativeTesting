"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const services = [
  "Web Design & Dev",
  "App Development",
  "E-Commerce",
  "Video Animation",
  "Web Maintenance",
  "Domain & Hosting",
  "Branding",
  "Digital Marketing",
];

const ServiceRailSection = () => {
  const railRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".rail-track", {
        xPercent: -50,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    }, railRef);

    return () => ctx.revert();
  }, []);

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 position-relative">
            <div className="scrolling-text-wrapper" ref={railRef}>
              <div className="rail-track d-flex">
                {/* Duplicate for seamless loop */}
                {[...services, ...services].map((item, index) => (
                  <h4 className="primary-font me-5 mb-0" key={index}>
                    <Link href="#">{item}</Link>
                  </h4>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRailSection;
