"use client";

import Image from "next/image";
import logoImage from "@/app/(web)/assets/images/logo-updated.png";
import iconMenu from "@/app/(web)/assets/images/Icon.png";
import { useContext, useEffect, useState } from "react";
import { sideBarContext } from "@/app/context";

const Header = () => {
  const { toggleMenu } = useContext(sideBarContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 750) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "header-scrolled" : ""}>
      <div className="container-fluid">
        <div className="header-main">
          <div>
            <a href=".">
              <Image
                src={logoImage}
                alt="logo"
                className="img-fluid logo"
              />
            </a>
          </div>

          <div>
            <button className="menu-btn" onClick={toggleMenu}>
              <Image
                src={iconMenu}
                alt="menu_icon"
                className="img-fluid animation-rot"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
