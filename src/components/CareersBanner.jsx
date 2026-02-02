"use client";
import Link from "next/link";
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import hero_bg_latest from "@/app/(web)/assets/images/Hero-latest.png";

const CareerBanner = () => {
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
          <h2 className="primary-font text-black" data-aos="fade-up">Build Your career</h2>
          <div className="bread-crumb">
            <Link
              href="/"
              className="para-section para-sec-crumb text-decoration-none text-black primary-font"
            >
              Home
            </Link>
            <span
              className="para-section para-section-crumb text-black primary-font"
            >
              -
            </span>
            <span
              className="para-section para-section-crumb text-black primary-font"
            >
              Careers
            </span>
          </div>
        </div>
        <div className="about-content-area">
          <p data-aos="fade-up"
            className={`${instrument_sans.className} abt-para text-start text-black`}
          >
            At Prestige IT Consulting, we don’t just deliver IT solutions. We
            build long-term partnerships. Join our team of problem-solvers,
            innovators, and experts driving change across identity, cloud,
            security, and automation.
          </p>
          <p data-aos="fade-up"
            className={`${instrument_sans.className} abt-para text-start text-black`}
          >
            Explore open roles and help shape the future of enterprise IT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;
