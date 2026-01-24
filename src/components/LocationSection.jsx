"use client";

import Link from "next/link";
import hero_bg_latest from "@/app/(web)/assets/images/Hero-latest.png";

// import Link from "next/link";
// import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";

const LocationSection = () => {
  return (
    <section className="location-sec padd-x"
          style={{
        backgroundImage: `url(${hero_bg_latest.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <h2 className="primary-font" data-aos="fade-up">Locations</h2>
            <p className="loc-para">
              <i className="fa-solid me-2 fa-location-dot"></i>
              <span>Address:</span>
              11111 Katy Freeway, STE 910, Houston TX 77079
            </p>
            <p className="loc-para">
              <Link href="tel:+1 281-849-1614">
                <i className="fa-solid me-2 fa-phone"></i>
                +1 281-849-1614
              </Link>
            </p>
            <p className="loc-para">
              <Link href="mailto:contact@prestige-it.com">
                <i className="fa-solid primary-color me-2 fa-envelope"></i>
                contact@prestige-it.com
              </Link>
            </p>
          </div>
          <div className="col-md-6">
            <div style={{ width: "100%", height: "450px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.7892011397385!2d-95.58076332392288!3d29.783736330874987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640db41461fe2b1%3A0x1e90a17724ed74b6!2s11111%20Katy%20Fwy%2C%20Houston%2C%20TX%2077079%2C%20USA!5e0!3m2!1sen!2s!4v1769084931284!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
