"use client";
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import { useEffect, useState } from "react";
import { FaqAnimation } from "@/utils/animations/faqs";
import Image from "next/image";
import web_box from "@/app/(web)/assets/images/innovation_box_2.png";
// import client_image_7 from "@/app/(web)/assets/images/client_image-7.png";
import hero_bg_latest from "@/app/(web)/assets/images/Hero-latest.png";
// import ScrollRevealHandler from "@/components/ScrollRevealHandler";
import FancyButton from "./FancyButton";
const FaqSection = () => {
  const [currentAccordion, setCurrentAccordion] = useState(0);
  const faqs = [
    {
      faqHead: "What services does WebDesign Innovators provide?",
      faqBody:
        "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface.",
    },
    {
      faqHead: "How can SquareUp help my business?",
      faqBody:
        "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface.",
    },
    {
      faqHead: "What industries does SquareUp work with?",
      faqBody:
        "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface.",
    },
    {
      faqHead:
        "Do you offer ongoing support and maintenance after the project is completed?",
      faqBody:
        "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface.",
    },
    {
      faqHead: "Can you work with existing design or development frameworks?",
      faqBody:
        "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface.",
    },
    {
      faqHead: "What services does WebDesign Innovators provide?",
      faqBody:
        "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface.",
    },
    {
      faqHead: "What services does WebDesign Innovators provide?",
      faqBody:
        "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface.",
    },
  ];

  const toggleAccordion = (index) => {
    setCurrentAccordion(index === currentAccordion ? null : index);
  };

  useEffect(() => {
    FaqAnimation();
  }, []);
  return (
    <section
      className="faq-sec"
      style={{
        backgroundImage: `url(${hero_bg_latest.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <ScrollRevealHandler /> */}
      <div className="container-fluid">
        <div className="row  padd-y padd-x row-gap-3 align-items-center">
          <div className="col-lg-5 col-12">
            <span
              className={`${inter.className} abt-heading mb-3 d-block text-start text-black reveal-text`}
            >
              [ Faqs ]
            </span>
            <h2 className="primary-font text-black" data-aos="fade-right">
              Got <br />
              Questions?
            </h2>
            <div className="sticky-wrapper">
              <div className="faq-form-wrapper">
                <p className="response-para">
                  <i className="fa-solid fa-circle"></i>
                  <span>Response time: 1 hours</span>
                </p>
                <h2 className="primary-font">
                  Tell details about your project
                </h2>
                <form action="#">
                  {/* <div className="wrp">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Full name"
                      className="text-inp"
                    />
                  </div> */}
                  <div className="wave-group">
                    <input
                      type="text"
                      name="fullname"
                      required
                      className="input"
                    />
                    <span className="bar"></span>
                    <label className="label">
                      {"FullName".split("").map((char, i) => (
                        <span
                          key={i}
                          className="label-char"
                          style={{ "--index": i }}
                        >
                          {char}
                        </span>
                      ))}
                    </label>
                  </div>
                  <div className="wave-group">
                    <input
                      type="email"
                      name="email"
                      required
                      className="input"
                    />
                    <span className="bar"></span>
                    <label className="label">
                      {"Your Email".split("").map((char, i) => (
                        <span
                          key={i}
                          className="label-char"
                          style={{ "--index": i }}
                        >
                          {char}
                        </span>
                      ))}
                    </label>
                  </div>
                  <div className="wave-group">
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="input"
                    />
                    <span className="bar"></span>
                    <label className="label">
                      {"Your Phone".split("").map((char, i) => (
                        <span
                          key={i}
                          className="label-char"
                          style={{ "--index": i }}
                        >
                          {char}
                        </span>
                      ))}
                    </label>
                  </div>
                  <div className="wave-group">
                    <input
                      type="text"
                      name="message"
                      required
                      className="input input-large"
                    />
                    <span className="bar"></span>
                    <label className="label">
                      {"Your Message".split("").map((char, i) => (
                        <span
                          key={i}
                          className="label-char"
                          style={{ "--index": i }}
                        >
                          {char}
                        </span>
                      ))}
                    </label>
                  </div>
                  <div className="text-center">
                    <FancyButton data-aos="zoom-in" text="Submit now" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="right-col-wrapper ">
              <div className="faqs">
                {faqs.map((faq, index) => {
                  return (
                    <div
                      className={`accordion-custom ${
                        index === currentAccordion ? "active" : ""
                      }`}
                      key={index}
                    >
                      <div
                        className="accordion-custom-head"
                        onClick={() => toggleAccordion(index)}
                      >
                        {/* Counting Number */}
                        <span className="faq-count primary-font">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>

                        <p
                          className={`faq-question ${instrument_sans.className}`}
                        >
                          {faq.faqHead}
                        </p>
                        <i className="fa-solid fa-plus"></i>
                      </div>
                      <div className="accordion-custom-body">
                        <p
                          className={`para-section ${instrument_sans.className}`}
                        >
                          {faq.faqBody}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 position-relative">
            <div className="scrolling-text">
              <div className="rail">
                <h4 className="primary-font slide-font text-black">
                  {/* WebDesignInnovators.COM */}
                  PrestigeItConsulting.COM
                </h4>
                <h4 className="primary-font slide-font text-black">
                  PrestigeItConsulting.COM
                </h4>
                <h4 className="primary-font slide-font text-black">
                  PrestigeItConsulting.COM
                </h4>
                <h4 className="primary-font slide-font text-black">
                  PrestigeItConsulting.COM
                </h4>
              </div>
            </div>
            <Image
              src={web_box}
              alt=""
              className="img-fluid last_box_web"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
