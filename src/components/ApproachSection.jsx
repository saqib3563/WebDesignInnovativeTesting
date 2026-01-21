import Image from "next/image";
import rubish from "@/app/(web)/assets/images/rubbish.png";
import ScrollRevealHandler from "./ScrollRevealHandler";
import hero_bg from "@/app/(web)/assets/images/Hero.webp";

const ApproachSection = () => {
  return (
    <section className="approach-sec"       style={{
            backgroundImage: `url(${hero_bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
          }}>
      <ScrollRevealHandler/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h2 className="primary-font mb-3 text-center reveal-text">Our Approach</h2>
            </div>
            <Image src={rubish} alt="rr" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
