import React, { useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./utils/Nav";
import Routing from "./utils/Routing";
import CustomCursor from "./effects/CustomCursor";
import { ReactLenis, useLenis } from "lenis/react";
import useScrollReveal from "./effects/useScrollReveal";
import Home from "./components/Home";
import About from "./components/About";



const App = () => {
  useScrollReveal(".cool", { start: "top 70%" });
  gsap.registerPlugin(ScrollTrigger);
  const location = useLocation();
  const containerRef = useRef(null);
  const lenis = useLenis(() => {});
  
  useEffect(() => {
    if (location.pathname === "/") {
      const hero = document.querySelector(".heading h1");
      const heading2 = document.querySelector(".heading h2");
      const video = document.querySelector(".vid video");

      if (hero && heading2 && video) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            scroller: "body",
            start: "top 27%",
            end: "top 0",
            scrub: 3,
          },
        });

        tl.to(hero, { x: -100 }, "anim")
          .to(heading2, { x: 100 }, "anim")
          .to(video, { width: "90%" }, "anim");

        return () => {
          tl.kill();
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ReactLenis root>
      <div
        className="bg-[#F7F7F7] main relative text-black w-full min-h-screen"
        ref={containerRef}
      >
        <CustomCursor />
        <Nav />
        <Routes location={location}>
        <Route path="/" element={
          <Home/>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
        <footer className="w-full flex px-10 max-md:px-2 justify-between items-center py-6 relative">
          <div className=" flex justify-centeritems-center gap-4">
            <a href="https://github.com/sumitkumar311" target="_blank">
              <i className="medium  align-top ri-github-fill" />
            </a>
            <a href="https://www.linkedin.com/in/sumitshrivaas/" target="_blank">
              <i className="medium align-top ri-linkedin-fill" />
            </a>
          </div>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Sumit Kumar. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="small px-3 py-2 cursor-pointer bg-gray-300 rounded-full hover:bg-gray-200 transition"
          >
            <i className="ri-arrow-up-line"></i>
          </button>
        </footer>
      </div>
    </ReactLenis>
  );
};

export default App;