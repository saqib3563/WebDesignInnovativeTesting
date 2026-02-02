"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const ScrollToTopOnNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");

      if (anchor.target === "_blank") return;

      if (!href || href === "#") {
        e.preventDefault(); 
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        return;
      }

      if (href.startsWith("/")) {
        setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }, 0);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [router]);

  return null;
};

export default ScrollToTopOnNavigation;
