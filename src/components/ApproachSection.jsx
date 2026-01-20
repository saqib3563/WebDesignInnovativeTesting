import Image from "next/image";
import rubish from "@/app/(web)/assets/images/rubbish.png";

const ApproachSection = () => {
  return (
    <section className="approach-sec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="primary-font mb-3 text-center">Our Approach</h2>
            <Image src={rubish} alt="rr" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
