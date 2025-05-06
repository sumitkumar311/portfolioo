import React from "react";
import ProjectVid from "../effects/ProjectVid";
import twogoodgo from "../assets/img/TwoGoodGo.mp4";
import obys from "../assets/img/obys.mp4";
import MajorProjectItem from "./MajorProjectItem";

const majorProjects = [
  {
    title: "Resume Builder",
    img: "https://images.unsplash.com/photo-1733503711059-acde98cd7fdf?w=600",
  },
  {
    title: "Ecommerce",
    img: "https://images.unsplash.com/photo-1746185766852-8f4dfa81c879?w=600",
  },
  {
    title: "Note App",
    img: "https://images.unsplash.com/photo-1726137569914-ae2ad1c634f6?w=600",
  },
  {
    title: "Comic Strip",
    img: "https://images.unsplash.com/photo-1745953130391-10158d7562ab?w=600",
  },
];

const ProjectSection = () => (
  <>
    <div id="project" className="view2 relative p-8 w-full h-fit flex flex-col gap-20 ">
      <h1 className="py-[1rem] mlarge uppercase cursor-pointer text-stroke w-fit">
        project</h1>

      {/* Project Row */}
      <div className="relative h-screen flex gap-32 items-baseline max-md:flex-col max-md:gap-8">
        <div className="w-1/2 h-screen relative max-md:w-full">
          <ProjectVid videoSrc={twogoodgo} link="https://sumitkumar311.github.io/TwoGoodGo/" />
        </div>
        <div className="w-[30%] h-[70%] relative max-md:w-full overflow-hidden">
          <ProjectVid videoSrc={obys} link="https://sumitkumar311.github.io/Obys/" />
        </div>
        <div className="absolute -rotate-90 top-60 right-[-10rem] max-md:hidden w-fit">
          <h1 className="uppercase font-semibold medium italic">Available for freelance</h1>
        </div>
      </div>

      {/* Mid Project Section */}
      <div className="flex justify-center items-center">
        <div className="max-md:hidden w-fit -rotate-90">
          <h1 className="uppercase font-semibold medium italic whitespace-nowrap">
            Code Without Limits
          </h1>
        </div>
        <div className="w-3/4 h-screen relative max-md:w-full max-md:h-[50vh]">
          <ProjectVid videoSrc={twogoodgo} link="https://sumitkumar311.github.io/TwoGoodGo/" />
        </div>
      </div>

      {/* Final Project Row */}
      <div className="relative h-screen flex gap-32 items-baseline max-md:flex-col max-md:gap-8">
        <div className="w-1/3 h-3/4 relative max-md:w-full overflow-hidden">
          <ProjectVid videoSrc={obys} />
        </div>
        <div className="w-1/2 h-screen relative max-md:w-full ">
          <ProjectVid videoSrc={twogoodgo} link="https://sumitkumar311.github.io/TwoGoodGo/" />
        </div>
        <div className="absolute -rotate-90 bottom-60 right-[-12rem] max-md:hidden w-fit">
          <h1 className="uppercase font-semibold medium italic">Motion-Driven Interfaces</h1>
        </div>
      </div>
    </div>

    <div className="major h-fit leading-[0.9] mt-20 max-md:mt-7 p-[2rem] font-extrabold uppercase">
      <h1 className="py-[1rem] medium text-stroke w-fit">
        major project <span className="text-xl medium text-white">upcoming</span>
      </h1>
      {majorProjects.map((proj, i) => (
        <MajorProjectItem key={i} {...proj} year="2025" />
      ))}
    </div>
  </>
);

export default ProjectSection;
