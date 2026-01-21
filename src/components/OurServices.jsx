"use client";

import { useState } from "react";
import Image from "next/image";
import hero_bg from "@/app/(web)/assets/images/Hero.webp";
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import ScrollRevealHandler from "./ScrollRevealHandler";
import diamondImage from "@/app/(web)/assets/images/diamond.webp";
import starImage from "@/app/(web)/assets/images/star.webp";
import FancyButton from "./FancyButton";

import ServiceImage1 from "@/app/(web)/assets/images/s1-img.webp";
import ServiceImage2 from "@/app/(web)/assets/images/s1-img.webp"; // example

/* =========================
   SERVICES DATA (ONE SOURCE)
========================= */
const servicesData = [
  {
    id: 1,
    title: "Web Design & Dev",
    description: (
      <>
        <b>We go beyond logos</b> — building complete visual identities that
        tell your story and reflect your values. From color palettes to
        typography, tone of voice to brand guidelines, we shape every element to
        ensure your brand stands out across every touching.
      </>
    ),
    points: [
      "Logo design",
      "Typography & color systems",
      "Brand guidelines",
      "Art Direction",
      "Motion Identity",
    ],
    image: ServiceImage1,
  },
  {
    id: 2,
    title: "App Development",
    description: (
      <>
        <b>We build powerful apps</b> that are scalable, secure and crafted for
        performance across all platforms.
      </>
    ),
    points: [
      "iOS & Android apps",
      "Cross-platform solutions",
      "UI/UX focused development",
      "API integrations",
      "Motion Identity",
    ],
    image: ServiceImage1,
  },
  {
    id: 3,
    title: "E-Commerce",
    description: (
      <>
        <b>We build powerful apps</b> that are scalable, secure and crafted for
        performance across all platforms.
      </>
    ),
    points: [
      "iOS & Android apps",
      "Cross-platform solutions",
      "UI/UX focused development",
      "API integrations",
      "Motion Identity",
    ],
    image: ServiceImage1,
  },
  {
    id: 4,
    title: "Video Animation",
    description: (
      <>
        <b>We build powerful apps</b> that are scalable, secure and crafted for
        performance across all platforms.
      </>
    ),
    points: [
      "iOS & Android apps",
      "Cross-platform solutions",
      "UI/UX focused development",
      "API integrations",
      "Motion Identity",
    ],
    image: ServiceImage1,
  },
  {
    id: 5,
    title: "Web Maintenance",
    description: (
      <>
        <b>We build powerful apps</b> that are scalable, secure and crafted for
        performance across all platforms.
      </>
    ),
    points: [
      "iOS & Android apps",
      "Cross-platform solutions",
      "UI/UX focused development",
      "API integrations",
      "Motion Identity",
    ],
    image: ServiceImage1,
  },
  {
    id: 6,
    title: "Domain & Hosting",
    description: (
      <>
        <b>We build powerful apps</b> that are scalable, secure and crafted for
        performance across all platforms.
      </>
    ),
    points: [
      "iOS & Android apps",
      "Cross-platform solutions",
      "UI/UX focused development",
      "API integrations",
      "Motion Identity",
    ],
    image: ServiceImage1,
  },
  {
    id: 7,
    title: "Branding",
    description: (
      <>
        <b>We build powerful apps</b> that are scalable, secure and crafted for
        performance across all platforms.
      </>
    ),
    points: [
      "iOS & Android apps",
      "Cross-platform solutions",
      "UI/UX focused development",
      "API integrations",
      "Motion Identity",
    ],
    image: ServiceImage1,
  },
  {
    id: 8,
    title: "Digital Marekting",
    description: (
      <>
        <b>We build powerful apps</b> that are scalable, secure and crafted for
        performance across all platforms.
      </>
    ),
    points: [
      "iOS & Android apps",
      "Cross-platform solutions",
      "UI/UX focused development",
      "API integrations",
      "Motion Identity",
    ],
    image: ServiceImage1,
  },
];

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  return (
    <section
      className="padd-y padd-x about-page-banner"
      style={{
        backgroundImage: `url(${hero_bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ScrollRevealHandler />

      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-end service-b">
          <div>
            <h3 className={`${inter.className} abt-heading text-start mb-5`}>
              [ Our Services ]
            </h3>
            <h2 className="primary-font reveal-text">
              We are offering <br /> the best solutions
            </h2>
          </div>

          <p
            className={`para-section para-section-2 mt-0 mb-4 ${instrument_sans.className}`}
          >
            We offer a full range of digital services to help your brand <br />
            stand out, connect, and grow.
          </p>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="service-tab-wrapper">
              <div className="tabs-Area">
                <ul className="m-0 p-0" data-lenis-prevent-wheel>
                  {servicesData.map((service, index) => (
                    <li key={service.id}>
                      <button
                        className={index === activeIndex ? "active" : ""}
                        onClick={() => setActiveIndex(index)}
                      >
                        {service.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-tabs-content-area">
                <div className="area-left">
                  <Image src={diamondImage} alt="" className="dia-image" />

                  <p>{activeService.description}</p>

                  <ul>
                    {activeService.points.map((item, i) => (
                      <li key={i}>
                        <Image src={starImage} alt="" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <FancyButton text="Read More" />
                  </div>
                </div>

                <div className="area-right">
                  <div className="ser-img-wrp">
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
