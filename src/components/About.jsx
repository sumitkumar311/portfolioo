import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import aboutimg from "../assets/img/aboutimg.jpg";
import one from "../assets/img/1.webp";
import two from "../assets/img/2.webp";
import three from "../assets/img/3.webp";
import four from "../assets/img/4.webp";
import RollingText from "../effects/RollingText";
import useScrollReveal from "../effects/useScrollReveal";
import ImageTrail from "../effects/ImageTrails";
import a from "../assets/1.jpg";
import b from "../assets/2.jpg";
import c from "../assets/3.jpg";
import d from "../assets/4.jpg";
import e from "../assets/5.jpg";
import f from "../assets/6.jpg";
import g from "../assets/7.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const location = useLocation();

  // Scroll reveal
  useScrollReveal(".view1, .view2, .view3");
  useScrollReveal(".view1 h1, .view1 p, .view1 img", { start: "top 70%" });
  useScrollReveal(".view2 h1, .view2 p", { start: "top 70%" });
  useScrollReveal(".about h1, .about video", { start: "top 70%" });
  useScrollReveal(".image img", { start: "top 70%" });

  // View3 scroll color effect
  useEffect(() => {
    const view3 = document.querySelector(".view3");
    const h1 = document.querySelector(".about h1");
    h1.classList.remove("text-stroke");

    if (view3 && h1) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: view3,
          scroller: "body",
          start: "top 20%",
          end: "top 80%",
        },
      });

      tl.to(view3, {
        backgroundColor: "black",
        color: "white",
        duration: 1.5,
        ease: "power2.inOut",
      });

      tl.to(h1, {
        onUpdate: () => {
          h1.style.webkitTextStroke = "1px white";
        },
        duration: 0.5,
        ease: "power2.inOut",
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        tl.kill();
      };
    }
  }, [location.pathname]);

  // GSAP hover scale effect
  useEffect(() => {
    const images = document.querySelectorAll(".about-img-hover");

    images.forEach((img) => {
      gsap.set(img, { willChange: "transform" });

      const onEnter = () => {
        gsap.to(img, {
          scale: 1.08,
          filter: "brightness(1.1)",
          duration: 0.1,
          ease: "power3.out",
          transformOrigin: "center center",
        });
      };

      const onLeave = () => {
        gsap.to(img, {
          scale: 1,
          filter: "brightness(1)",
          duration: 0.6,
          ease: "power3.out",
          transformOrigin: "center center",
        });
      };

      img.addEventListener("mouseenter", onEnter);
      img.addEventListener("mouseleave", onLeave);

      // Cleanup on unmount
      return () => {
        img.removeEventListener("mouseenter", onEnter);
        img.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <main className="w-full flex flex-col gap-40 max-md:gap-10 p-[2rem]  max-md:p-[1rem]">
        <div className="view1 w-full flex gap-32 max-md:gap-5 max-md:flex-col">
          <div className="w-[50%] max-md:w-full">
            <h1 className="large font-[600]">ABOUT</h1>
            <p className="text-medium w-[66%] font-base max-md:w-full">
              I'm a 22-year-old front-end developer with a strong eye for
              design. I specialize in building interactive, animation-rich user
              interfaces that feel smooth and intuitive. After diving deep into
              modern web development, I’ve focused on front-end,
              micro-interactions, and seamless user experiences.
            </p>
          </div>
          <div className="w-[50%] max-md:w-full">
            <img
              className="w-full h-[80vh] max-md:h-[50vh] object-cover"
              src={aboutimg}
              alt="About"
            />
          </div>
        </div>

        <div className="view2 w-full h-[80vh] max-md:h-fit leading-22 max-md:leading-10">
          <h1 className="mlarge font-[700] uppercase text-stroke">
            <RollingText
              text="what i do"
              className="rolling-text"
              triggerSelector=".view2"
            />
          </h1>
          <h2 className="mlarge text-zinc-300 transition-all duration-300 ease-in-out hover:ml-4 hover:text-black cursor-pointer w-fit font-semibold ">
        Developement
          </h2>
          <h2 className="mlarge text-zinc-300 transition-all duration-300 ease-in-out hover:ml-4 hover:text-black cursor-pointer w-fit font-semibold">
          Brand Strategy
          </h2>
          <h2 className="mlarge text-zinc-300 transition-all duration-300 ease-in-out hover:ml-4 hover:text-black cursor-pointer w-fit font-semibold">
            3D Animation
          </h2>
          <h2 className="mlarge text-zinc-300 transition-all duration-300 ease-in-out hover:ml-4 hover:text-black cursor-pointer w-fit font-semibold">
            Web Design
          </h2>
        </div>
      </main>

      <div
        ref={containerRef}
        className="view3 p-[2rem]  max-md:p-[1rem] min-h-screen flex flex-col gap-10"
      >
        <div className="about">
          <h1 className="py-[1rem] mlarge uppercase cursor-pointer text-stroke w-fit">
            Flexible design
          </h1>
        </div>

        <div className="image w-full flex gap-10 max-md:flex-col">
          <img
            src={one}
            className="about-img-hover w-[50%] max-md:w-full p-[2rem] cursor-pointer max-md:h-[50vh] object-cover"
            alt="Design 1"
          />
          <img
            src={two}
            className="about-img-hover w-[50%] max-md:w-full p-[2rem] cursor-pointer max-md:h-[50vh] object-cover"
            alt="Design 2"
          />
        </div>

        <div className="image w-full h-screen flex gap-10 max-md:flex-col overflow-hidden">
          <img
            src={three}
            className="about-img-hover w-[50%] max-md:w-full p-[2rem] cursor-pointer max-md:h-[50vh] object-cover"
            alt="Design 3"
          />
          <img
            src={four}
            className="about-img-hover w-[50%] max-md:w-full p-[2rem] cursor-pointer max-md:h-[50vh] object-cover"
            alt="Design 4"
          />
        </div>
      </div>

      <div className="hello w-full relative h-screen flex justify-center items-center">
        <h1 className="large underline">
          <RollingText
            text="Say Hello"
            className="rolling-text"
            triggerSelector=".hello"
          />
        </h1>
        <div className="h-full w-full absolute">
          <ImageTrail items={[a, b, c, d, e, f, g]} variant={1} />
        </div>
      </div>
    </div>
  );
};

export default About;
