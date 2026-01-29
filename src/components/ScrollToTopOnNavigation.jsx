"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const ScrollToTopOnNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  // ✅ Next.js route change (Next Link)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  // ✅ Anchor click + "#" links + normal <a>
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");

      // ignore new tab
      if (anchor.target === "_blank") return;

      // "#" ya empty link
      if (!href || href === "#") {
        e.preventDefault(); // jump block
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        return;
      }

      // Next.js Link SPA workaround
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
