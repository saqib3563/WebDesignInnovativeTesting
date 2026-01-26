import React from "react";
import hero_bg_latest from "@/app/(web)/assets/images/Hero-latest.png";

const page = () => {
  return (
    <>
      <section
        className="padd-y padd-x main-service-banner"
        style={{
          backgroundImage: `url(${hero_bg_latest.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid">
          <div className="bnr-wrp">
            <h1></h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
