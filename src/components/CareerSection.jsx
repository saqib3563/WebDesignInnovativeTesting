"use client";
import { instrument_sans } from "@/app/(web)/assets/fonts/custom";

const careerData = [
  {
    title: "Development",
    description:
      "Be part of our engineering team that designs, builds, and automates secure IT environments. Whether you’re working on cloud, Active Directory, AI, or automation, you’ll help deliver solutions trusted by thousands of clients. We offer remote work options, modern toolsets, and a collaborative team where your skills grow with every project.",
  },
  {
    title: "Infrastructure",
    description:
      "Keep business systems running smoothly as part of our infrastructure and support team. From endpoint management to help desk operations, you’ll play a vital role in daily IT performance. Enjoy flexible work hours, hybrid/remote setup, ongoing training, and a team-first environment that values your contributions.",
  },
  {
    title: "Consulting",
    description:
      "If you’re a recruiter, consultant, or client strategist, this is where you drive growth and partnerships. You’ll connect clients with expert solutions and talent while enjoying performance-based rewards, work-from-anywhere flexibility, and a strong internal support structure to help you succeed.",
  },
];

const CareerSection = () => {
  return (
    <section className="padd-y padd-x career-sec">
      <div className="container-fluid">
        <h2 className="primary-font mb-3 text-center">
          Your Next Role Starts Here
        </h2>

        <div className="row mt-5">
          {careerData.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="career-card position-relative">
                <h3 className="primary-font" data-aos="fade-left">{item.title}</h3>
                <p className={instrument_sans.className}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
