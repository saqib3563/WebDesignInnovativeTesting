"use client";
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import hero_bg_latest from "@/app/(web)/assets/images/Hero-latest.png";
import hero_bg from "@/app/(web)/assets/images/Hero.webp";
import revImg1 from "@/app/(web)/assets/images/blog-1.webp";
// import Link from "next/link";
import Image from "next/image";
import GlobeSection from "@/components/GlobeSection";
import FaqSection from "@/components/FaqsSection";
import { useGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";
import TechnologiesSection from "@/components/TechnologiesSection";
import { SwiperSlide } from "swiper/react";
import logo1 from "@/app/(web)/assets/images/footer-logo-1.webp";
import logo2 from "@/app/(web)/assets/images/footer-logo-2.webp";
import logo3 from "@/app/(web)/assets/images/footer-logo-3.webp";
import logo4 from "@/app/(web)/assets/images/footer-logo-4.webp";
import newImg from "@/app/(web)/assets/images/glory.webp";
import SwiperComponent from "@/components/slider";
import FancyButton from "@/components/FancyButton";

const logos = [logo1, logo2, logo3, logo4, logo1];

export default function Page() {
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
        className="rating-sec padd-x padd-y"
        style={{
          backgroundImage: `url(${hero_bg_latest.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid">
          <div className="row align-items-center new-cl">
            <div className="col-md-6">
              <h2 className="primary-font">
                websites that give businesses unfair advantage.
              </h2>
              <div className="rating-points">
                <p>
                  <i className="fa-solid fa-circle-check"></i>Stand Out From
                  Competition
                </p>
                <p>
                  <i className="fa-solid fa-circle-check"></i>Drive More
                  Conversions
                </p>
                <p>
                  <i className="fa-solid fa-circle-check"></i>Build Premium
                  Brand Image
                </p>
              </div>
              <div className="service-logo-slider">
                <SwiperComponent
                  spaceBetween={30}
                  slidesPerView={4}
                  loop={true}
                  autoplay={{ delay: 1000 }}
                  speed={2000}
                  breakpoints={{
                    1280: { slidesPerView: 3 },
                  }}
                >
                  {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={logo}
                        alt={`logo-${index}`}
                        height={100}
                        style={{ objectFit: "contain" }}
                      />
                    </SwiperSlide>
                  ))}
                </SwiperComponent>
              </div>
            </div>
            <div className="col-md-6 text-center">
              {/* <video
                src="/approach-video.webm"
                className="img-fluid"
                autoPlay
                playsInline
                muted
                loop
                style={{ width: "100%", display: "block" }}
              ></video> */}
              <Image src={newImg} className="inner-banner-img" />
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
      <TechnologiesSection />
      <section
        className="effort-sec padd-x"
        style={{
          backgroundImage: `url(${hero_bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid">
          <div className="row align-items-end mb-5">
            <div className="col-md-6">
              <h6 className="primary-font">
                <i className="fa-solid fa-circle animate-pulse"></i> 4 SIMPLE
                STEPS
              </h6>
              <h2 className="primary-font">
                Effortless Process, <br /> Continuous Supply
              </h2>
            </div>
            <div className="col-md-6">
              <hr
                style={{
                  color: "white",
                  border: "1px solid white",
                  opacity: "1",
                }}
              />
            </div>
          </div>
          <div className="effort-box-wrapper">
            <div className="effort-box">
              <h5 className="primary-font">
                <span>01.</span> Dream, Design, Deliver
              </h5>
              <p>
                We don’t just listen; we listen closely. Your goals, your
                vision, your brand—they all matter. Whether we’re designing a
                killer website or building a powerful web app, we dive deep into
                understanding your business needs and audience. From there, we
                create a tailored game plan that’s all you.
              </p>
            </div>
            <div className="effort-box">
              <h5 className="primary-font">
                <span>02.</span> Design Like a Pro
              </h5>
              <p>
                Now it’s time to put your ideas to paper (digitally, of course).
                We sketch out wireframes and prototypes, bringing your vision to
                life in visual form. We want you to see and feel the flow before
                the final design comes together. This stage is all about
                refining what works and tweaking what doesn’t.
              </p>
            </div>
            <div className="effort-box">
              <h5 className="primary-font">
                <span>03.</span> Code, Build, and Conquer
              </h5>
              <p>
                The real magic happens here. We take those gorgeous designs and
                turn them into fully functional websites and web apps. Speed,
                security, and performance are non-negotiable. Whether it's
                responsive design or seamless integration, we make sure your
                site works flawlessly on any device and stands strong under
                pressure.
              </p>
            </div>
            <div className="effort-box">
              <h5 className="primary-font">
                <span>04.</span> Launch Like a Legend
              </h5>
              <p>
                Once the site’s tested and polished, it’s time to launch. We
                make sure everything’s running smooth—every link, every page,
                every feature. After going live, we’re still in your corner for
                any post-launch tweaks. The launch is just the beginning, and
                we’re here for the long haul.
              </p>
            </div>
          </div>
          <div className="effort-footer mt-4">
            <div>
              <div className="marquee">
                <div className="marquee__inner">
                  <span>
                    Featured Clients • VDOT • Maryland • Smithsonian • Pentagon
                    • Marriott •
                  </span>
                  <span>
                    Featured Clients • VDOT • Maryland • Smithsonian • Pentagon
                    • Marriott •
                  </span>
                </div>
              </div>
            </div>
            <div>
              <FancyButton text="Start Now" url="#" />
            </div>
          </div>
        </div>
      </section>

      <GlobeSection />
      <FaqSection />
    </>
  );
}
