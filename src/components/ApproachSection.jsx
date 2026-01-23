"use client";

import { useRef, useState } from "react";
import ScrollRevealHandler from "./ScrollRevealHandler";
import hero_bg_latest from "@/app/(web)/assets/images/Hero-latest.png";

const ApproachSection = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section
      className="approach-sec px-5"
      style={{
        backgroundImage: `url(${hero_bg_latest.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ScrollRevealHandler />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" style={{ position: "relative" }}>
            <video
              ref={videoRef}
              src="/approach-video.webm"
              className="img-fluid"
              autoPlay
              playsInline
              muted
              loop
              style={{ width: "100%", display: "block" }}
            ></video>
            <button className="video-mute-btn" onClick={toggleMute}>
              {isMuted ? (
                <i className="fa-solid fa-volume-xmark"></i>
              ) : (
                <i className="fa-solid fa-volume-high"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
