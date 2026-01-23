"use client";
import Link from "next/link";
// import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import FancyButton from "./FancyButton";
import ScrollRevealHandler from "./ScrollRevealHandler";

const ContactSection = () => {
  return (
    <section className="padd-y padd-x Contact-sec">
    <ScrollRevealHandler/>
      <div className="container">
        <h2 className="primary-font mb-3 text-center reveal-text">Hit Us Up – Let’s Build Something Great</h2>
        <p className="cont-desc text-center mb-5">Fill out this form to connect with our expert team. <br /> Prestige IT Consultant delivers customized solutions and resolves your queries efficiently.</p>
        <div className="row justify-content-center">
            <div className="col-md-10">
                <form action="">
                    <div className="contact-page-form">
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" className="primary-font" placeholder="First Name" name="first name" required />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="primary-font" placeholder="Last Name" name="last name" required />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="primary-font" placeholder="Email" name="email" required />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="primary-font" placeholder="Contact" name="contact" required />
                            </div>
                            <div className="col-md-12">
                                <textarea name="message" className="primary-font" placeholder="Message"></textarea>
                                <FancyButton text="SUBMIT NOW" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
