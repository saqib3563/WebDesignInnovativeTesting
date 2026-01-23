"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const MagneticButton = () => {
  const btnRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const btn = btnRef.current;

    // Initial: hidden
    btn.style.transform = "scale(0)";
    btn.style.opacity = "0";
    btn.style.transition = "transform 0.5s ease, opacity 0.5s ease";

    // 5 seconds delay after page load
    const timer = setTimeout(() => {
      btn.style.transform = "scale(1)";
      btn.style.opacity = "1";
    }, 5000);

  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;

  //     if (scrollY > 100) {
  //       btn.style.transform = "scale(0.8)";
  //       btn.style.opacity = "0";
  //     } else {
  //       btn.style.transform = "scale(1)";
  //       btn.style.opacity = "1";
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     clearTimeout(timer);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
   },
   []);

  return (
    <>
      {/* Magnetic Button */}
      {/* <a ref={btnRef} onClick={() => setSidebarOpen(true)} className="idea-pop">
        <i className="fa-solid fa-arrow-right-long"></i>
        <span className="idea-para">
          Drop Us A <br /> Line
        </span>
      </a> */}


<button className="idea-btn" ref={btnRef} onClick={() => setSidebarOpen(true)}>
  <p className="idea-btn__text">
    <span style={{ "--index": 0 }}>D</span>
    <span style={{ "--index": 1 }}>R</span>
    <span style={{ "--index": 2 }}>O</span>
    <span style={{ "--index": 3 }}>P</span>
    <span style={{ "--index": 4 }}> </span>
    <span style={{ "--index": 5 }}>U</span>
    <span style={{ "--index": 6 }}>s</span>
    <span style={{ "--index": 7 }}> </span>
    <span style={{ "--index": 8 }}>A</span>
    <span style={{ "--index": 9 }}> </span>
    <span style={{ "--index": 10 }}>L</span>
    <span style={{ "--index": 11 }}>I</span>
    <span style={{ "--index": 12 }}>N</span>
    <span style={{ "--index": 13 }}>E</span>

  </p>

  <div className="idea-btn__circle">
    <svg
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="idea-btn__icon"
      width="14"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>

    <svg
      viewBox="0 0 14 15"
      fill="none"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
      className="idea-btn__icon idea-btn__icon--copy"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>











      {/* Overlay */}
      <div
        className={`magnet-sidebar-overlay ${
          sidebarOpen ? "magnet-sidebar-overlay--show" : ""
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div data-lenis-prevent-wheel
        className={`right-sidebar ${sidebarOpen ? "right-sidebar--open" : ""}`}
      >
        <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <h2 className="primary-font">got a project?</h2>
        <p className="para-sm mb-5">
          Share the details of your project – like scope, timeframes, or
          business challenges. Our team will thoroughly review the materials and
          respond to you promptly.
        </p>
        <form action="#">
          <div className="mb-4 form-group">
            <label className="para-sm mb-2">I'm interested in</label>
            <div className="d-flex flex-wrap gap-2">
              <input
                type="checkbox"
                name="interested_1"
                className="d-none radio"
                id="web"
                value="Custom Software"
              />
              <label className="radio-label type-label" htmlFor="web">
                Custom Software
              </label>
              <input
                type="checkbox"
                name="interested_2"
                className="d-none radio"
                id="app"
                value="Mobile App"
              />
              <label className="radio-label type-label" htmlFor="app">
                Mobile App
              </label>
              <input
                type="checkbox"
                name="interested_3"
                className="d-none radio"
                id="ui"
                value="UI/UX"
              />
              <label className="radio-label type-label" htmlFor="ui">
                UI/UX
              </label>
              <input
                type="checkbox"
                name="interested_4"
                className="d-none radio"
                id="dev"
                value="Web Development"
              />
              <label className="radio-label type-label" htmlFor="dev">
                Web Development
              </label>
            </div>
          </div>
          <div className="mb-3 form-group">
            <input type="text" className="idea-field" placeholder="Your Name" />
          </div>
          <div className="row">
            <div className="mb-3 col-12 col-md-6">
              <input
                type="email"
                className="idea-field"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3 col-12 col-md-6">
              <input
                type="tel"
                className="idea-field"
                placeholder="Your Phone"
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <input type="text" className="idea-field" placeholder="Your Message" />
          </div>
          <button className="idea-submit-btn" type="submit">SEND MESSAGE</button>
        </form>
        <p className="para-xs mt-4 mb-4">We'll keep your information in our CRM to respond to your request. For more details, consult our <Link href="#">Privacy Policy</Link></p>
        <div className="row">
          <div className="col-6">
            <Link href="#" className="d-block idea-submit-btn text-center w-100 text-decoration-none">CONTACT NOW</Link>
          </div>
          <div className="col-6">
            <Link href="#" className="d-block idea-submit-btn text-center w-100 text-decoration-none">CHAT NOW</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MagneticButton;
