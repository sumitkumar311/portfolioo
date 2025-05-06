import React, { Suspense } from "react"; // Add Suspense import
import video from "../assets/img/main.mp4";
import aboutvideo from "../assets/img/responsive.mp4";
import ProjectSection from "./ProjectSection"; // Add the import statement for ProjectSection



const Home = () => {
  return (
    <>
      <div className="min-h-screen  w-full overflow-hidden">
        <div
          id="home"
          className="view1  p-8 w-full flex flex-col gap-48 max-sm:gap-16"
        >
          <div className="flex cool flex-col mt-40 max-md:mt-8 hero w-full justify-center items-center">
            <h3 className="text-zinc-600 text-xl">Hi! I'm Sumit Kumar 👋🏻</h3>
            <div className="heading large uppercase font-semibold flex flex-col max-md:leading-[0.8] leading-[6rem] max-sm:mlarge">
              <h1>frontend</h1>
              <h2 className="ml-48 max-sm:ml-16">developer</h2>
              <p className="text-zinc-600 font-medium text-end mt-1 text-sm max-sm:text-xs">
                hailing from Delhi
              </p>
            </div>
            <div className="w-full mt-20 max-sm:mt-4 vid relative h-fit flex justify-center items-center">
              <video
                className="object-cover h-full w-full"
                src={video}
                muted
                loop
                autoPlay
              ></video>
              <h1 className="medium font-bold italic uppercase absolute left-0 bottom-0 -rotate-90 origin-bottom-left ml-8 max-sm:hidden -translate-y-full">
                code meets creativity
              </h1>
            </div>
          </div>
        </div>

        <div
          id="about"
          className="about w-full p-24 max-md:p-8 mb-10 max-md:mb-0"
        >
          <div className="large max-sm:mlarge max-md:leading-none max-sm:tracking-0 about-head uppercase font-semibold flex flex-col leading-[6rem] tracking-tight">
            <div>
              <h1>Designing</h1>
              <h2 className="text-center max-sm:ml-12 mlarge text-stroke italic font-playwrite">
                exceptional
              </h2>
              <h3 className="text-end max-sm:ml-12">websites</h3>
            </div>
            <div>
              <h1>that leave a</h1>
              <h2 className="text-end mlarge text-stroke italic">
                lasting impression
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full h-screen flex gap-32 max-md:flex-col max-sm:p-2 max-md:h-auto max-md:gap-2 items-center">
          <div className="w-7/12 relative max-md:w-full max-md:px-8">
            <div className="w-full h-full">
              <video
                autoPlay
                loop
                muted
                preload="none"
                loading="lazy"
                className="w-full object-cover"
                src={aboutvideo}
              ></video>
            </div>
          </div>
          <div className="text-center  max-md:p-8 w-1/3 max-md:w-full">
            <p className="text-small max-md:text-2xl font-semibold text-start">
              About
            </p>
            <p className="text-small max-md:text-sm mr-4 max-sm:mr-0 font-light leading-tight text-start mt-4 text-zinc-600">
              Engaged Front-End Developer passionate about building dynamic,
              user-friendly web interfaces. Highly proficient in React.js,
              Redux, GSAP, Lenis and Tailwind CSS. Dedicated to transforming
              design concepts into functional, responsive web applications,
              while continually enhancing performance and user interaction.
              Excited to take on new projects that push creative boundaries and
              elevate user experiences.
            </p>
          </div>
        </div>

        <Suspense
          fallback={<div className="text-center">Loading projects…</div>}
        >
          <ProjectSection />
        </Suspense>

        <div id="contact" className="footer flex flex-col justify-center">
          <div className="w-full p-[2rem] max-md:p-[1rem] max-md:mt-[1rem] mt-[5rem]">
            <div className="large px-[6rem] max-sm:p-[1rem] max-md:mlarge max-sm:leading-none max-sm:tracking-[0] uppercase font-bold leading-[0.9] tracking-[-0.3rem]">
              <h1 className="large">Let's spark</h1>
              <h2 className="text-center max-sm:ml-[3rem] mlarge text-stroke italic">
                greatness
              </h2>
              <h3 className="text-end">together</h3>
              <div className="text-end flex justify-end gap-8">
                <a href="https://github.com/sumitkumar311" target="_blank">
                  <i className="magnetic medium leading-none align-top ri-github-fill" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sumitshrivaas/"
                  target="_blank"
                >
                  <i className="magnetic medium align-top ri-linkedin-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="bt-div mt-10 max-sm:mt-1 flex justify-between w-full font-bold uppercase font-[futura] text-[2vw] border-b-2 mb-10 border-zinc-700 p-[1rem]">
            <input
              type="text"
              placeholder="Things are just getting started"
              className="uppercase w-full bg-transparent border-none placeholder-black focus:outline-none focus:ring-0"
            />
            <i className="magnetic ri-arrow-right-s-line cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
