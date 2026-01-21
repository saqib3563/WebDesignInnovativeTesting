"use client";
import Link from "next/link";
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
// import hero_bg from "@/app/(web)/assets/images/Hero.webp";
import hero_bg_latest from "@/app/(web)/assets/images/Hero-latest.png";
import { useGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";

const AboutUsBanner = () => {
  useGSAP(() => {
    const counters = gsap.utils.toArray(".about-counter-area .countt h2");

    counters.forEach((counter) => {
      const text = counter.innerText.trim();
      const endValue = parseInt(text.replace(/\D/g, ""));
      const suffix = text.replace(/\d/g, "");

      const obj = { value: 0 };
      counter.innerText = "0" + suffix;

      gsap.to(obj, {
        value: endValue,
        duration: 3.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-counter-area",
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          counter.innerText = Math.floor(obj.value) + suffix;
        },
      });
    });
  }, [], ".about-counter-area");



  return (
    <section
      className="padd-y padd-x about-page-banner"
      style={{
        backgroundImage: `url(${hero_bg_latest.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-fluid">
        <div className="page-header_wrapper">
          <h2 className="primary-font text-black">About Us</h2>
          <div className="bread-crumb">
            <Link
              href="#"
              className="para-section para-sec-crumb text-decoration-none text-black"
            >
              Home
            </Link>
            <span
              className={`${inter.className} para-section para-section-crumb text-black`}
            >
              -
            </span>
            <span
              className={`${inter.className} para-section para-section-crumb text-black`}
            >
              About Us
            </span>
          </div>
        </div>
        <div className="about-content-area text-black">
          <h3 className={`${inter.className} abt-heading mb-5 text-start text-black`}>
            [ who we are ]
          </h3>

          <p className={`${instrument_sans.className} abt-para text-start text-black`}>
            From concept to execution, we build impactful <br /> digital
            solutions that resonate with real <br /> people and deliver results
          </p>
        </div>
        <div className="about-counter-area text-black">
          <p
            className={`para-section para-section-2 mt-0 text-black ${instrument_sans.className}`}
          >
            With expertise in areas such as web design, digital marketing,{" "}
            <br />
            social media management, and content creation, digital agencies play{" "}
            <br />a crucial role.
          </p>
          <div className="d-flex gap-5 countt">
            <div>
              <h2 className="text-black">400+</h2>
              <p className={`${instrument_sans.className} `}>Successful Projects <br /> Delivered</p>
            </div>
            <div>
              <h2 className="text-black">95%</h2>
              <p className={`${instrument_sans.className} `}>Successful Projects <br /> Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsBanner;
