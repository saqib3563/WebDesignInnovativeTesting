"use client";
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import { useCallback, useEffect, useRef, useState } from "react";
import hero_bg_latest from "@/app/(web)/assets/images/Hero-latest.png";
import hero_bg_latest_new from "@/app/(web)/assets/images/new-hero.jpg";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import ScrollRevealHandler from "@/components/ScrollRevealHandler";
import columnImag1 from "@/app/(web)/assets/images/col-image.webp";
import columnImag2 from "@/app/(web)/assets/images/slide-1.webp";
import serviceBg from "@/app/(web)/assets/images/service-bg.webp";
import featureImg1 from "@/app/(web)/assets/images/service1.jpg";
import featureImg2 from "@/app/(web)/assets/images/service2.jpg";
import featureImg3 from "@/app/(web)/assets/images/service3.jpg";
import featureImg4 from "@/app/(web)/assets/images/service4.jpg";
import revImg1 from "@/app/(web)/assets/images/blog-1.webp";
import GlobeSection from "@/components/GlobeSection";
import hero_bg from "@/app/(web)/assets/images/Hero.webp";
import FaqSection from "@/components/FaqsSection";
import { useGSAP } from "@/hooks/useGSAP";

const words = [
  "marketing", 
  "advertising",
  "brand",
  "campaign",
  "web",
  "interactive",
];

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

export default function Page() {
  const [index, setIndex] = useState(0);
  const lettersRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const letters = lettersRef.current;

    gsap.killTweensOf(letters);

    gsap.set(letters, {
      y: "120%",
      opacity: 0,
    });

    gsap.to(letters, {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      stagger: 0.07,
      ease: "power3.out",
    });
  }, [index]);

  const word = words[index];

  const sectionRef2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".rail-rtl",
        { xPercent: 0 },
        {
          xPercent: -50,
          duration: 22,
          ease: "linear",
          repeat: -1,
        },
      );

      gsap.fromTo(
        ".rail-ltr",
        { xPercent: -50 },
        {
          xPercent: 0,
          duration: 26,
          ease: "linear",
          repeat: -1,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  // ✅ SERVICES DATA (TEXT + IMAGE + URL)
  const services = [
    {
      title: "WordPress Web Design",
      image: columnImag1,
      url: "/services/web-design-and-development/wordpress-web-design",
    },
    {
      title: "E-Commerce Web Design",
      image: columnImag2,
      url: "#",
    },
    {
      title: "Custom Website Design",
      image: columnImag1,
      url: "#",
    },
    {
      title: "Joomla Website Development",
      image: columnImag1,
      url: "#",
    },
    {
      title: "Custom WordPress Development ",
      image: columnImag1,
      url: "#",
    },
    {
      title: "Php Website Development",
      image: columnImag1,
      url: "#",
    },
  ];

  // ✅ IMAGE CHANGE WITH GSAP
  const changeImage = useCallback(
    (index) => {
      if (index === currentImage) return;

      const el = imageRef.current;
      if (!el) return;

      gsap.to(el, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentImage(index);
          gsap.fromTo(
            el,
            { opacity: 0, scale: 1.1 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            },
          );
        },
      });
    },
    [currentImage],
  );

  useGSAP(() => {
    const items2 = document.querySelectorAll(".reveal-effect-2");

    items2.forEach((el) => {
      gsap.fromTo(
        el,
        { "--reveal-x": "0%" },
        {
          "--reveal-x": "100%",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        },
      );
    });

    const items3 = document.querySelectorAll(".reveal-effect-3");

    items3.forEach((el) => {
      gsap.fromTo(
        el,
        { "--reveal-x": "0%" },
        {
          "--reveal-x": "-100%",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        },
      );
    });
  }, []);

  return (
    <>
      <section
        className="padd-y padd-x main-service-banner"
        style={{
          backgroundImage: `url(${hero_bg_latest_new.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid">
          <div className="bnr-wrp">
            <h2 className="primary-font">
              Digital{" "}
              <span className="word-slider">
                {[...word].map((char, i) => (
                  <span className="char-box" key={`${index}-${i}`}>
                    <span
                      className="char"
                      ref={(el) => (lettersRef.current[i] = el)}
                    >
                      {char}
                    </span>
                  </span>
                ))}
              </span>
              <br />
              experiences.
            </h2>
          </div>
        </div>
      </section>
      <section ref={sectionRef} style={{ paddingTop: 30, paddingBottom: 30 }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 position-relative">
              <div className="scrolling-text-wrapper mb-0">
                <div className="rail-track rail-rtl d-flex">
                  {[...railOne, ...railOne].map((item, index) => (
                    <h4 className="primary-font me-5 mb-0" key={index}>
                      <Link href="#">{item}</Link>
                    </h4>
                  ))}
                </div>
              </div>
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
      <section
        className="approach-sec px-5"
        style={{
          backgroundImage: `url(${hero_bg_latest.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <ScrollRevealHandler />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12" style={{ position: "relative" }}>
              <video
                ref={videoRef}
                src="/approach-video.webm"
                className="img-fluid"
                autoPlay
                playsInline
                muted
                loop
                style={{ width: "100%", display: "block" }}
              ></video>
              <button className="video-mute-btn" onClick={toggleMute}>
                {isMuted ? (
                  <i className="fa-solid fa-volume-xmark"></i>
                ) : (
                  <i className="fa-solid fa-volume-high"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="build-sec padd-x"
        style={{
          backgroundImage: `url(${hero_bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid">
          <div className="text-center">
            <h2 className="primary-font">WHAT WE BUILD</h2>
            <p
              className={`para-section para-section-2 mt-5 ${instrument_sans.className}`}
            >
              We develop AI Chatbots, as well as AI Image Generation & Editing
              tools, AI Search & Recommendation <br /> engines, Voice-AI
              solutions, and AI-powered decision systems for businesses in
              Singapore, while also <br /> providing custom models tailored to
              unique business workflows.
            </p>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-sm-12">
              <div className="build-box h-100">
                <h4 className="primary-font">AI Chatbot</h4>
                <p className={instrument_sans.className}>
                  <b>Intelligent Assistant:</b> Answers user questions using
                  internal company data only, or, when required, selected
                  external sources. Additionally, it can be tailored in tone and
                  response style to align seamlessly with the brand.
                </p>
                <p className={instrument_sans.className}>
                  <b>Animated Mascots & AI Widgets:</b> Custom-designed animated
                  characters or interactive widgets for AI features. As a
                  result, they enhance visual appeal, strengthen brand
                  personality, and increase on-site engagement.
                </p>
                <div className="reveal-effect-2">
                  <Image src={revImg1} alt="1" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="build-box mb-4">
                <h4 className="primary-font">Renosolution</h4>
                <p className={instrument_sans.className}>
                  <b>AI Interior Design:</b> Users upload a room photo and
                  select a style; then, the AI generates realistic design images
                  instantly. As a result, users can visualise outcomes more
                  clearly before making decisions.
                </p>
                <div className="reveal-effect-3">
                  <Image src={revImg1} alt="1" className="img-fluid" />
                </div>
              </div>
              <div className="build-box">
                <h4 className="primary-font">BizHub AI</h4>
                <p className={instrument_sans.className}>
                  <b>AI Data-to-Decision Engine:</b> Users submit business data;
                  then, the AI produces structured analysis (e.g., SWOT
                  assessments or valuations) in real time. As a result, raw
                  inputs are automatically transformed into usable outputs based
                  on a human-defined logic framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={sectionRef2}
        style={{ backgroundImage: `url(${serviceBg.src})` }}
        className="padd-y padd-x service-section position-relative"
      >
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-12">
              <span
                className={`${inter.className} abt-heading d-block text-start`}
              >
                [ Service ]
              </span>
            </div>
          </div>

          <div className="row align-items-center align-items-lg-end">
            <div className="col-md-6 col-12">
              <div ref={imageRef} className="service-img-wrap mb-5">
                <div ref={imageRef} className="service-img-wrap mb-5">
                  <Image
                    src={services[currentImage].image}
                    alt={services[currentImage].title}
                    height={400}
                    style={{ width: "80%" }}
                  />
                </div>
              </div>

              <p
                className={`para-section para-section-2 ${instrument_sans.className}`}
              >
                Transforming insights into direction helping brands <br />
                define goals, positioning, and creative pathways that <br />
                drive growth.
              </p>
            </div>

            <div className="col-md-6 col-12">
              <div className="text_selectors_area">
                {services.map((service, i) => (
                  <Link href={service.url} key={i}>
                    <div
                      className={`text-1 ${
                        currentImage === i ? "active-color" : ""
                      }`}
                      onMouseEnter={() => changeImage(i)}
                    >
                      <span
                        className={`number_count ${instrument_sans.className}`}
                      >
                        [{i + 1}]
                      </span>
                      <span className="primary-font text_selectors">
                        {service.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="boxes-sec padd-y padd-x"
        style={{
          backgroundImage: `url(${hero_bg_latest.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid">
          <div className="text-center">
            <h2 className="primary-font text-black">
              Proudly Building Digital
            </h2>
            <p
              className={`para-section para-section-2 text-black mt-5 ${instrument_sans.className}`}
            >
              From mom-and-pop shops to ambitious startups, we’ve helped
              businesses across <br /> the USA tell their stories online. images
              images images
            </p>
          </div>
          <div className="row align-items-end">
            <div className="col-6 col-md-3">
              <div className="feature-card feature-card-1">
                <Image
                  src={featureImg1}
                  className="img-fluid feature-img"
                  alt="feature image"
                />
              </div>
              <div className="feature-card feature-card-2">
                <Image
                  src={featureImg2}
                  className="img-fluid feature-img"
                  alt="feature image"
                />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="feature-card feature-card-3">
                <Image
                  src={featureImg3}
                  className="img-fluid feature-img"
                  alt="feature image"
                />
              </div>
              <div className="feature-card feature-card-4">
                <Image
                  src={featureImg4}
                  className="img-fluid feature-img"
                  alt="feature image"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row align-items-md-end">
                <div className="col-6 col-md-6 feature-row-third">
                  <div className="feature-card feature-card-5">
                    <Image
                      src={featureImg1}
                      className="img-fluid feature-img"
                      alt="feature image"
                    />
                  </div>
                  <div className="feature-card feature-card-5 feature-card-5-2">
                    <Image
                      src={featureImg2}
                      className="img-fluid feature-img"
                      alt="feature image"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature-card feature-card-6">
                    <Image
                      src={featureImg3}
                      className="img-fluid feature-img"
                      alt="feature image"
                    />
                  </div>
                </div>
              </div>
              <div className="feature-card feature-card-7">
                <Image
                  src={featureImg3}
                  className="img-fluid feature-img"
                  alt="feature image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <GlobeSection />
      <FaqSection />
    </>
  );
}
