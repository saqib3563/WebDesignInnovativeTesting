// "use client"
// import { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';

// const MagicCursor = () => {
//   const cursorRef = useRef(null);
//   const trailRefs = useRef([]);
//   const [windowRef, setWindowRef] = useState(null)
//   useEffect(() => {
//     const cursor = cursorRef.current;
//     let mouseX = 0, mouseY = 0;


//     for (let i = 0; i < 8; i++) {
//       const trail = document.createElement('div');
//       trail.className = 'cursor-trail';
//       trail.style.cssText = `
//         position: fixed;
//         width: ${6 - i}px;
//         height: ${6 - i}px;
//         background: #8B5CF6;
//         border-radius: 50%;
//         pointer-events: none;
//         z-index: ${9990 - i};
//         opacity: ${1 - i * 0.15};
//         transform: translate(-50%, -50%);
//         box-shadow: 0 0 ${10 - i}px #8B5CF6;
//       `;
//       document.body.appendChild(trail);
//       trailRefs.current.push(trail);
//     }

//     const moveCursor = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;

//       gsap.to(cursor, {
//         x: mouseX,
//         y: mouseY,
//         duration: 0.1,
//         ease: "power2.out"
//       });


//       trailRefs.current.forEach((trail, i) => {
//         gsap.to(trail, {
//           x: mouseX,
//           y: mouseY,
//           duration: 0.3 + i * 0.1,
//           ease: "power2.out"
//         });
//       });
//     };

//     const handleHover = (e) => {
//       gsap.to(cursor, {
//         scale: 3,
//         background: '#A855F7',
//         duration: 0.3,
//         ease: "back.out(2)"
//       });

//       trailRefs.current.forEach((trail, i) => {
//         gsap.to(trail, {
//           scale: 2 - i * 0.2,
//           background: '#A855F7',
//           duration: 0.3,
//           ease: "back.out(2)"
//         });
//       });
//     };

//     const handleLeave = () => {
//       gsap.to(cursor, {
//         scale: 1,
//         background: '#8B5CF6',
//         duration: 0.3,
//         ease: "back.out(2)"
//       });

//       trailRefs.current.forEach((trail) => {
//         gsap.to(trail, {
//           scale: 1,
//           background: '#8B5CF6',
//           duration: 0.3,
//           ease: "back.out(2)"
//         });
//       });
//     };

//     document.addEventListener('mousemove', moveCursor);

//     const interactives = document.querySelectorAll('a, button, .text-1, .btn-main, .fancy-btn');
//     interactives.forEach(el => {
//       el.addEventListener('mouseenter', handleHover);
//       el.addEventListener('mouseleave', handleLeave);
//     });

//     setWindowRef(window)

//     return () => {
//       document.removeEventListener('mousemove', moveCursor);
//       interactives.forEach(el => {
//         el.removeEventListener('mouseenter', handleHover);
//         el.removeEventListener('mouseleave', handleLeave);
//       });
//       trailRefs.current.forEach(trail => trail.remove());
//     };
//   }, []);

//   if (windowRef && windowRef?.innerWidth <= 767) {
//     return
//   }

//   return (
//     <div
//       ref={cursorRef}
//       style={{
//         position: 'fixed',
//         width: '12px',
//         height: '12px',
//         background: '#8B5CF6',
//         borderRadius: '50%',
//         pointerEvents: 'none',
//         zIndex: 9999,
//         transform: 'translate(-50%, -50%)',
//         boxShadow: '0 0 20px #8B5CF6, 0 0 40px #8B5CF6',
//         mixBlendMode: 'screen'
//       }}
//     />
//   );
// };

// export default MagicCursor;


"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const MagicCursor = () => {
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);
  const [windowRef, setWindowRef] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cursor = cursorRef.current;
    let mouseX = 0,
      mouseY = 0;

    // Create trail particles
    for (let i = 0; i < 8; i++) {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.cssText = `
        position: fixed;
        width: ${6 - i}px;
        height: ${6 - i}px;
        background: #7C3AED;
        border-radius: 50%;
        pointer-events: none;
        z-index: ${999990 - i};
        opacity: ${1 - i * 0.12};
        transform: translate(-50%, -50%);
        box-shadow: 0 0 ${12 - i}px rgba(124,58,237,0.9);
      `;
      document.body.appendChild(trail);
      trailRefs.current.push(trail);
    }

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out",
      });

      trailRefs.current.forEach((trail, i) => {
        gsap.to(trail, {
          x: mouseX,
          y: mouseY,
          duration: 0.3 + i * 0.1,
          ease: "power2.out",
        });
      });
    };

    const handleHover = () => {
      gsap.to(cursor, {
        scale: 3,
        background: "#4C1D95",
        borderColor: "#E9D5FF",
        duration: 0.3,
        ease: "back.out(2)",
      });

      trailRefs.current.forEach((trail, i) => {
        gsap.to(trail, {
          scale: 2 - i * 0.1,
          background: "#7C3AED",
          duration: 0.3,
          ease: "back.out(2)",
        });
      });
    };

    const handleLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        background: "#2E1065",
        borderColor: "#DDD6FE",
        duration: 0.3,
        ease: "back.out(2)",
      });

      trailRefs.current.forEach((trail) => {
        gsap.to(trail, {
          scale: 1,
          background: "#7C3AED",
          duration: 0.3,
          ease: "back.out(2)",
        });
      });
    };

    document.addEventListener("mousemove", moveCursor);

    const interactives = document.querySelectorAll(
      "a, button, .text-1, .btn-main, .fancy-btn"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    setWindowRef(window);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
      trailRefs.current.forEach((trail) => trail.remove());
    };
  }, []);

  // Mobile disable
  if (windowRef && windowRef.innerWidth <= 767) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        width: "14px",
        height: "14px",
        background: "#2E1065", // very dark purple
        borderRadius: "50%",
        border: "2px solid #DDD6FE", // light outline (key for white bg)
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        boxShadow:
          "0 0 10px rgba(124,58,237,0.9), 0 0 30px rgba(124,58,237,0.8)",
        mixBlendMode: "normal",
      }}
    />
  );
};

export default MagicCursor;
