// components/BlurRevealText.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlurRevealText = ({ children }) => {
  const textRef = useRef();

  useEffect(() => {
    const el = textRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        filter: "blur(10px)",
        y: 50,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <h2
      ref={textRef}
      className="text-4xl font-bold text-center text-zinc-700 my-16"
    >
      {children}
    </h2>
  );
};

export default BlurRevealText;
