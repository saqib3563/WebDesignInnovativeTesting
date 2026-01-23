"use client";
import Link from "next/link";
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
// import hero_bg from "@/app/(web)/assets/images/Hero.webp";
import hero_bg_latest from "@/app/(web)/assets/images/Hero-latest.png";

const ContactUsBanner = () => {
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
          <h2 className="primary-font text-black" data-aos="fade-up">Contact us</h2>
          <div className="bread-crumb">
            <Link
              href="#"
              className="para-section para-sec-crumb text-decoration-none text-black"
            >
              Home
            </Link>
            <span
              className={`${inter.className} para-section para-section-crumb`}
            >
              -
            </span>
            <span
              className={`${inter.className} para-section para-section-crumb`}
            >
              Contact us
            </span>
          </div>
        </div>
        <div className="about-content-area" data-aos="fade-up">
          <p className={`${instrument_sans.className} abt-para text-start text-black`}>
            Got a project in mind? Wanna level up with top-tier web design
            straight outta the Global-scale design industry? Whether it’s a
            custom site, a dope eCommerce setup, or just some solid web
            advice—PIC’s got your back.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsBanner;
