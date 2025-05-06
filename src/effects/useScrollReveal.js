import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = (selector, options = {}) => {
  const location = useLocation();  // Track route change

  useEffect(() => {
    const elements = gsap.utils.toArray(selector);

    // Wait for the elements to appear on screen
    if (elements.length > 0) {
      elements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: options.duration || 1,
            ease: options.ease || "power2.out",
            scrollTrigger: {
              trigger: element,
              start: options.start || "top 100%",
              end: options.end || "bottom 20%",
              toggleActions: options.toggleActions || "play none none reverse",
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());  // Clean up
    };
  }, [location.pathname, selector]);  // Re-run effect on route change

};

export default useScrollReveal;
