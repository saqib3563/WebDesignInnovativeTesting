"use client";

// import { useState } from "react";
import hero_bg from "@/app/(web)/assets/images/Hero.webp";
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import ScrollRevealHandler from "./ScrollRevealHandler";

// import ServiceImage1 from "@/app/(web)/assets/images/s1-img.webp";
import ServiceImage2 from "@/app/(web)/assets/images/s1-img.webp";
import FancyButton from "./FancyButton";
import Image from "next/image";
import Service1 from "@/app/(web)/assets/images/service1.jpg";
import Service2 from "@/app/(web)/assets/images/service2.jpg";
import Service3 from "@/app/(web)/assets/images/service3.jpg";
import Service4 from "@/app/(web)/assets/images/service4.jpg";
import Service5 from "@/app/(web)/assets/images/service5.jpg";
import Service6 from "@/app/(web)/assets/images/service6.jpg";
import Service7 from "@/app/(web)/assets/images/service7.jpg";
import Service8 from "@/app/(web)/assets/images/service8.jpg";
import Service9 from "@/app/(web)/assets/images/cybersecurity.jpg";
import Service10 from "@/app/(web)/assets/images/data.jpg";
import Service11 from "@/app/(web)/assets/images/server.jpg";
import Service12 from "@/app/(web)/assets/images/technology.jpg";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);
const OurServices = () => {

const containerRef = useRef(null);

useGSAP(() => {

  let ctx = gsap.context(() => {

    const panels = gsap.utils.toArray(".panel-ser");

    panels.forEach((panel, i) => {

      const nextPanel = panels[i + 1];
      if (!nextPanel) return;

      // next panel starts from bottom
      gsap.set(nextPanel, { yPercent: 100 });

      gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        }
      })
      .to(nextPanel, {
        yPercent: 0,
        ease: "none",
      });

    });

  });

  return () => ctx.revert();
}, []);






  return (
    <>
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
      </div>
    </section>
    <div className="vertical-panel">
      <div className="panel-ser c-panel-1">
        <div className="c-panel-left">
          <div className="c-panel-num">
            <div className="t-base primary-font">(01)</div>
          </div>
          <div className="c-panel-desc">
            <div className="t-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum recusandae provident dolorem voluptatibus rerum culpa obcaecati debitis doloremque nesciunt.</div>
          </div>
          <div className="c-panel_bt">
            <h1 className="primary-font">Web Design & Development</h1>
            <FancyButton text="Learn More"/>
          </div>
        </div>
        <div className="c-panel-visual">
          <div className="c-img-contain panel-visual">
            <Image src={Service1} alt="service" />
          </div>
        </div>
      </div>
      <div className="panel-ser c-panel-2">
        <div className="c-panel-left">
          <div className="c-panel-num">
            <div className="t-base primary-font">(02)</div>
          </div>
          <div className="c-panel-desc">
            <div className="t-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum recusandae provident dolorem voluptatibus rerum culpa obcaecati debitis doloremque nesciunt.</div>
          </div>
          <div className="c-panel_bt">
            <h1 className="primary-font">App Development</h1>
            <FancyButton text="Learn More"/>
          </div>
        </div>
        <div className="c-panel-visual">
          <div className="c-img-contain panel-visual">
            <Image src={Service2} alt="service" />
          </div>
        </div>
      </div>
      <div className="panel-ser c-panel-3">
        <div className="c-panel-left">
          <div className="c-panel-num">
            <div className="t-base primary-font">(03)</div>
          </div>
          <div className="c-panel-desc">
            <div className="t-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum recusandae provident dolorem voluptatibus rerum culpa obcaecati debitis doloremque nesciunt.</div>
          </div>
          <div className="c-panel_bt">
            <h1 className="primary-font">E-Commerce</h1>
            <FancyButton text="Learn More"/>
          </div>
        </div>
        <div className="c-panel-visual">
          <div className="c-img-contain panel-visual">
            <Image src={Service3} alt="service" />
          </div>
        </div>
      </div>
      <div className="panel-ser c-panel-1">
        <div className="c-panel-left">
          <div className="c-panel-num">
            <div className="t-base primary-font">(04)</div>
          </div>
          <div className="c-panel-desc">
            <div className="t-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum recusandae provident dolorem voluptatibus rerum culpa obcaecati debitis doloremque nesciunt.</div>
          </div>
          <div className="c-panel_bt">
            <h1 className="primary-font">Video Animation</h1>
            <FancyButton text="Learn More"/>
          </div>
        </div>
        <div className="c-panel-visual">
          <div className="c-img-contain panel-visual">
            <Image src={Service4} alt="service" />
          </div>
        </div>
      </div>
      <div className="panel-ser c-panel-2">
        <div className="c-panel-left">
          <div className="c-panel-num">
            <div className="t-base primary-font">(05)</div>
          </div>
          <div className="c-panel-desc">
            <div className="t-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum recusandae provident dolorem voluptatibus rerum culpa obcaecati debitis doloremque nesciunt.</div>
          </div>
          <div className="c-panel_bt">
            <h1 className="primary-font">Web Maintenance</h1>
            <FancyButton text="Learn More"/>
          </div>
        </div>
        <div className="c-panel-visual">
          <div className="c-img-contain panel-visual">
            <Image src={Service5} alt="service" />
          </div>
        </div>
      </div>
      <div className="panel-ser c-panel-3">
        <div className="c-panel-left">
          <div className="c-panel-num">
            <div className="t-base primary-font">(06)</div>
          </div>
          <div className="c-panel-desc">
            <div className="t-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum recusandae provident dolorem voluptatibus rerum culpa obcaecati debitis doloremque nesciunt.</div>
          </div>
          <div className="c-panel_bt">
            <h1 className="primary-font">Domain & Hosting</h1>
            <FancyButton text="Learn More"/>
          </div>
        </div>
        <div className="c-panel-visual">
          <div className="c-img-contain panel-visual">
            <Image src={Service6} alt="service" />
          </div>
        </div>
      </div>
      <div className="panel-ser c-panel-1">
        <div className="c-panel-left">
          <div className="c-panel-num">
            <div className="t-base primary-font">(07)</div>
          </div>
          <div className="c-panel-desc">
            <div className="t-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum recusandae provident dolorem voluptatibus rerum culpa obcaecati debitis doloremque nesciunt.</div>
          </div>
          <div className="c-panel_bt">
            <h1 className="primary-font">Branding</h1>
            <FancyButton text="Learn More"/>
          </div>
        </div>
        <div className="c-panel-visual">
          <div className="c-img-contain panel-visual">
            <Image src={Service7} alt="service" />
          </div>
        </div>
      </div>
      <div className="panel-ser c-panel-2">
        <div className="c-panel-left">
          <div className="c-panel-num">
            <div className="t-base primary-font">(08)</div>
          </div>
          <div className="c-panel-desc">
            <div className="t-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum recusandae provident dolorem voluptatibus rerum culpa obcaecati debitis doloremque nesciunt.</div>
          </div>
          <div className="c-panel_bt">
            <h1 className="primary-font">Digital Marketing</h1>
            <FancyButton text="Learn More"/>
          </div>
        </div>
        <div className="c-panel-visual">
          <div className="c-img-contain panel-visual">
            <Image src={Service8} alt="service" />
          </div>
        </div>
      </div>




      {/* OTHER SERVICES */}
      <div className="panel-ser c-panel-3">
        <div className="c-panel-left">
          <div className="c-panel-num">
            <div className="t-base primary-font">(09)</div>
          </div>
          <div className="c-panel-desc">
            <div className="t-base">We deliver enterprise-grade cybersecurity to protect your business across cloud, servers, and user identities. Our CISO services cover Microsoft Entra ID, Active Directory, MFA, Conditional Access, endpoint protection, email security, SIEM, and compliance frameworks such as NIST, SOC 2, HIPAA, and PCI. We help prevent breaches, reduce risk, and keep your environment secure.</div>
          </div>
          <div className="c-panel_bt">
            <h1 className="primary-font">Cybersecurity & Protection (CISO)</h1>
          </div>
        </div>
        <div className="c-panel-visual">
          <div className="c-img-contain panel-visual">
            <Image src={Service9} alt="service"/>
          </div>
        </div>
      </div>
      <div className="panel-ser c-panel-1">
        <div className="c-panel-left">
          <div className="c-panel-num">
            <div className="t-base primary-font">(10)</div>
          </div>
          <div className="c-panel-desc">
            <div className="t-base">We design and manage recovery solutions for ransomware, system failures, and cloud outages. Our services include backup and restore for Microsoft 365, Azure, AWS, VMware, Hyper-V, databases, file servers, and Active Directory. We ensure rapid recovery, business continuity, and minimal downtime when incidents occur.</div>
          </div>
          <div className="c-panel_bt">
            <h1 className="primary-font">Disaster Recovery</h1>
          </div>
        </div>
        <div className="c-panel-visual">
          <div className="c-img-contain panel-visual">
            <Image src={Service10} alt="service" />
          </div>
        </div>
      </div>
      <div className="panel-ser c-panel-2">
        <div className="c-panel-left">
          <div className="c-panel-num">
            <div className="t-base primary-font">(11)</div>
          </div>
          <div className="c-panel-desc">
            <div className="t-base">We build and manage modern IT environments using Azure, AWS, Google Cloud, VMware, Hyper-V, and hybrid cloud. Our expertise includes virtual machines, networking, firewalls, VPNs, storage, Azure Virtual Desktop (AVD), load balancing, high availability, patching, upgrades, and cloud migrations.</div>
          </div>
          <div className="c-panel_bt">
            <h1 className="primary-font">Server & Cloud Infrastructure</h1>
          </div>
        </div>
        <div className="c-panel-visual">
          <div className="c-img-contain panel-visual">
            <Image src={Service11} alt="service" />
          </div>
        </div>
      </div>
      <div className="panel-ser c-panel-3">
        <div className="c-panel-left">
          <div className="c-panel-num">
            <div className="t-base primary-font">(12)</div>
          </div>
          <div className="c-panel-desc">
            <div className="t-base">We provide experienced engineers and architects to support your most critical IT initiatives. Our consultants specialize in cloud migration, identity management, cybersecurity, Microsoft 365, infrastructure upgrades, automation with PowerShell and APIs, and enterprise system integration.</div>
          </div>
          <div className="c-panel_bt">
            <h1 className="primary-font">Technology Consulting</h1>
          </div>
        </div>
        <div className="c-panel-visual">
          <div className="c-img-contain panel-visual">
            <Image src={Service12} alt="service" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default OurServices;
