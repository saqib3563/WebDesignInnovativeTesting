"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import revImg2 from "@/app/(web)/assets/images/blog-3.webp";
import gsap from "gsap";
import hero_bg_latest from "@/app/(web)/assets/images/Hero.webp";

const tabs = [
  { label: "All", key: "All" },
  { label: "3D", key: "3D" },
  { label: "Branding", key: "branding" },
  { label: "Development", key: "development" },
  { label: "Marketing", key: "Marketing" },
  { label: "UI/UX", key: "ui/ux" },
];

const workData = [
  { id: 1, title: "Bold Brands", category: "3D", image: revImg2, tags: ["UI/UX", "Branding"] },
  { id: 2, title: "Product Design", category: "3D", image: revImg2, tags: ["UI/UX", "Branding"] },
  { id: 3, title: "Rise Motion", category: "3D", image: revImg2, tags: ["UI/UX", "Branding"] },
  { id: 4, title: "UI Concept", category: "branding", image: revImg2, tags: ["UI/UX", "testing"] },
  { id: 5, title: "Digital Pulse", category: "branding", image: revImg2, tags: ["UI/UX", "Branding"] },
  { id: 6, title: "Code Craft", category: "branding", image: revImg2, tags: ["UI/UX", "Branding"] },
  { id: 7, title: "Bold Brands", category: "development", image: revImg2, tags: ["UI/UX", "Branding"] },
  { id: 8, title: "Product Design", category: "development", image: revImg2, tags: ["UI/UX", "Branding"] },
  { id: 9, title: "Rise Motion", category: "development", image: revImg2, tags: ["UI/UX", "Branding"] },
  { id: 10, title: "UI Concept", category: "Marketing", image: revImg2, tags: ["UI/UX", "Branding"] },
  { id: 11, title: "Digital Pulse", category: "Marketing", image: revImg2, tags: ["UI/UX", "Branding"] },
  { id: 12, title: "Code Craft", category: "Marketing", image: revImg2, tags: ["UI/UX", "Branding"] },
  { id: 13, title: "UI Concept", category: "ui/ux", image: revImg2, tags: ["UI/UX", "Branding"] },
  { id: 14, title: "Digital Pulse", category: "ui/ux", image: revImg2, tags: ["UI/UX", "Branding"] },
  { id: 15, title: "Code Craft", category: "ui/ux", image: revImg2, tags: ["UI/UX", "Branding"] },
];

const WorkSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxImg, setLightboxImg] = useState(null);

  const filteredData =
    activeTab === "All"
      ? workData
      : workData.filter((item) => item.category === activeTab);

  useEffect(() => {
    gsap.fromTo(
      ".work-box",
      {
        opacity: 0,
        y: 100,
        x: () => gsap.utils.random(-150, 150),
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: 0.8,
        stagger: { amount: 0.4, from: "random" },
        ease: "power3.out",
      },
    );
  }, [activeTab]);

  return (
    <section
      className="padd-y padd-x work-sec"
      style={{
        backgroundImage: `url(${hero_bg_latest.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-fluid">
        <div className="work-sec-header">
          <ul>
            {tabs.map((tab) => (
              <li key={tab.key}>
                <button
                  className={`primary-font ${activeTab === tab.key ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <span>{tab.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

<div className="work-gallery-wrapper">
  {filteredData.map((item) => (
    <div className="work-box" key={item.id}>
      <div className="work-img-desc-wrapper">
        <div className="work-img">
          <Image
            src={item.image}
            alt={item.title}
            onClick={() => setLightboxImg(item.image.src)}
            className="cursor-pointer"
          />
        </div>
        <div className="work-desc">
          <h5 className="primary-font">{item.title}</h5>
          <div className="work-tags">
            {item.tags.map((tag, index) => (
              <a href="javascript:;" className="Tag" key={index}>
                <span>{tag}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
  {filteredData.length === 0 && (
    <p className="no-cards-msg">No items in this category.</p>
  )}
</div>

      </div>

      {lightboxImg && (
        <div
          className="custom-lightbox-overlay"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg}
            alt="Enlarged"
            className="custom-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="custom-lightbox-close"
            onClick={() => setLightboxImg(null)}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
