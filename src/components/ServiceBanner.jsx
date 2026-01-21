"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";
// import hero_bg from "@/app/(web)/assets/images/Hero.webp";
import hero_bg_latest from "@/app/(web)/assets/images/Hero-latest.png";

const ServiceBanner = () => {
  const sectionRef = useRef(null);
  const h1Ref = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  useGSAP(
    () => {
      // initial state
      gsap.set(firstTextRef.current, { x: 0 });
      gsap.set(secondTextRef.current, { x: 0 });
      gsap.set(h1Ref.current, { rotate: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(firstTextRef.current, {
        x: 400,
        ease: "power2.out",
      })
        .to(
          secondTextRef.current,
          {
            x: 350,
            ease: "power2.out",
          },
          "<",
        )
        .to(h1Ref.current, {
          rotate: 180,
          ease: "power2.inOut",
        })
        .to(firstTextRef.current, {
          x: 0,
          ease: "power2.inOut",
        })
        .to(
          secondTextRef.current,
          {
            x: 0,
            ease: "power2.inOut",
          },
          "<",
        );
    },
    [],
    ".service-page-banner",
  );

  return (
    <section
      ref={sectionRef}
      className="padd-y padd-x service-page-banner"
      style={{
        backgroundImage: `url(${hero_bg_latest.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="hero-title">
              <h1 ref={h1Ref}>
                <div ref={firstTextRef} className="hero-title-one">
                  Services
                </div>
                <div className="her-title-two-main">
                  <div ref={secondTextRef} className="hero-title-one">
                    Solutions
                  </div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
