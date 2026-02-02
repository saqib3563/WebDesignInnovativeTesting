"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";

export default function ScrollRevealHandler() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = document.querySelectorAll(".reveal-text, .reveal-text-black");

    elements.forEach((el) => {
      gsap.set(el, {
        backgroundPosition: "100% 0",
      });

      gsap.to(el, {
        backgroundPosition: "0% 0",
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,             
          start: "top 70%",         
          end: "top 40%",
          scrub: true, 
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
  