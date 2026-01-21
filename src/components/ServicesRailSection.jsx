"use client";
import Image from "next/image";
import web_box from "@/app/(web)/assets/images/innovation_box_2.png";

const ServiceRailSection = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 position-relative">
            <div className="scrolling-text">
              <div className="rail">
                <h4 className="primary-font slide-font">
                  {/* WebDesignInnovators.COM */}
                  PrestigeItConsulting.COM
                </h4>
                <h4 className="primary-font slide-font">
                  PrestigeItConsulting.COM
                </h4>
                <h4 className="primary-font slide-font">
                  PrestigeItConsulting.COM
                </h4>
                <h4 className="primary-font slide-font">
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

export default ServiceRailSection;
