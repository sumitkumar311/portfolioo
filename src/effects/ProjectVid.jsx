import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const ProjectVid = ({ videoSrc, link }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    const main = document.querySelector("main");
    const arrowDiv = container.querySelector(".arrowdiv");
    const arrowDivChild = container.querySelector(".arrowdivchild");

    const tl = gsap.timeline({ paused: true });

    tl.to(arrowDivChild, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
      transformOrigin: "center center",
      boxShadow: "0 0 30px rgba(255, 105, 180, 0.2)",
    });

    const handleArrowEnter = () => tl.play();
    const handleArrowLeave = () => tl.reverse();

    const handleContainerEnter = () => {
      video.play();
      gsap.to([video, main], {
        filter: "grayscale(100%)",
        backgroundColor: "grey",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleContainerLeave = () => {
      video.pause();
      gsap.to([video, main], {
        filter: "grayscale(0%)",
        backgroundColor: "black",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    arrowDiv.addEventListener("mouseenter", handleArrowEnter);
    arrowDiv.addEventListener("mouseleave", handleArrowLeave);
    container.addEventListener("mouseenter", handleContainerEnter);
    container.addEventListener("mouseleave", handleContainerLeave);

    return () => {
      arrowDiv.removeEventListener("mouseenter", handleArrowEnter);
      arrowDiv.removeEventListener("mouseleave", handleArrowLeave);
      container.removeEventListener("mouseenter", handleContainerEnter);
      container.removeEventListener("mouseleave", handleContainerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-md:w-full h-full overflow-hidden rounded-[30px] max-md:h-[100%]"
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
       
        className="w-full h-full object-cover rounded-[30px]"
      ></video>

      <div className="arrowdiv absolute bottom-[2.9rem] right-20 text-xl bg-transparent border-2 border-gray-100 h-[70px] w-[70px] rounded-full flex justify-center items-center cursor-pointer translate-x-1/2 translate-y-1/2">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <i className="ri-arrow-right-double-line text-white"></i>
        </a>
        <div className="arrowdivchild absolute w-full h-full scale-0 opacity-0 flex justify-center items-center text-3xl bg-white text-black rounded-full font-medium p-10 text-center">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <i className="ri-arrow-right-up-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectVid;