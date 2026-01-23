"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const railOne = [
  "Web Design & Dev",
  "App Development",
  "E-Commerce",
  "Video Animation",
  "Web Maintenance",
  "Domain & Hosting",
];

const railTwo = [
  "Branding",
  "Digital Marketing",
  "SEO Optimization",
  "UI / UX Design",
  "Product Design",
];

const ServiceRailSection = () => {
  const sectionRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {

    // ===== RTL rail (right → left) =====
    gsap.fromTo(
      ".rail-rtl",
      { xPercent: 0 },
      {
        xPercent: -50,
        duration: 22,
        ease: "linear",
        repeat: -1,
      }
    );

    // ===== LTR rail (left → right) =====
    gsap.fromTo(
      ".rail-ltr",
      { xPercent: -50 },
      {
        xPercent: 0,
        duration: 26,
        ease: "linear",
        repeat: -1,
      }
    );

  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section ref={sectionRef} style={{paddingTop: 30, paddingBottom: 30}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 position-relative">

            {/* ===== RTL RAIL ===== */}
            <div className="scrolling-text-wrapper mb-0">
              <div className="rail-track rail-rtl d-flex">
                {[...railOne, ...railOne].map((item, index) => (
                  <h4 className="primary-font me-5 mb-0" key={index}>
                    <Link href="#">{item}</Link>
                  </h4>
                ))}
              </div>
            </div>

            {/* ===== LTR RAIL ===== */}
            <div className="scrolling-text-wrapper">
              <div className="rail-track rail-ltr d-flex">
                {[...railTwo, ...railTwo].map((item, index) => (
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
