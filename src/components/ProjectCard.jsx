import React, { useEffect, useState } from "react";
import "./Style/ProjectCard.css";
import ProjectVisitOption from "./ProjectVisitOption";
import { skillList } from "../Constants/data";

const ProjectCard = (props) => {
  const { images, title ,description , subtitle } = props;

  const [uniqueId] = useState(
    () => `bgImg-${Math.random().toString(36).substr(2, 9)}`
  );

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
    .${uniqueId}::before {
      background-image: url('${images}');
    }
  `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [images, uniqueId]);

  return (
    <div className="max-w-80 m-auto w-full ">
      <div
        className={`
        bgImg
        ${uniqueId}
        transition-all
        before:bg-top
        before:bg-cover
        m-auto
        dark:bg-dark-secondary 
        container
        shadow-lg
        group 
        before:hover:scale-95
        before:hover:h-72
        
        before:hover:w-80 
        before:hover:rounded-b-2xl
        before:transition-all
        before:duration-500
        before:w-80 
        before:h-28
        before:rounded-t-2xl            
        before:absolute 
        before:top-0 
        w-[99%] h-72 
        relative
        bg-slate-50 
      
        flex 
        flex-col
        items-center
        justify-center
        text-center
        rounded-2xl overflow-hidden
        before:overflow-hidden 
        `}
      >
        <div
          className=" 
        
        overflow-visible
        justify-center "
        ></div>

        <div
          className="z-10 
        dark:text-white
          group-hover:-translate-y-[-10px]
          transition-all
            duration-500
            relative top-96 group-hover:top-16
            backdrop-blur-lg shadow-lg p-2 rounded-xl shadow-black  dark:bg-dark-secondary
           
            "
        >
          {" "}
          <div className="">
            <ProjectVisitOption link={props.link} git={props.git} />
          </div>
          <div className="w-52 min-h-[66px] truncate  m-auto text-pretty ">
            <span className="  text-2xl   tracking-wide font-semibold outlineText text-white">
              {title}
            </span>
          </div>
        </div>
        <div className="   truncate  my-auto text-pretty  ">
            <span className="  text-xl md:text-2xl  tracking-wide font-semibold outlineText text-white">
              {title}
            </span>
         

          <div 
          className="flex  flex-wrap justify-start w-full gap-2   p-4">
            {subtitle.split(",").map((el,id)=><div key={id} className="rounded-md text-slate-400 flex py-1 px-2 bg-light-primary dark:bg-dark-primary">
              {el}
              <img className="w-9 h-5 my-auto" src={`${skillList[skillList.findIndex(skill=>skill.title.toLocaleLowerCase().replace(/\s+/g, "").trim()==el.toLocaleLowerCase().replace(/\s+/g, "").trim())]?.skillIcon}`} alt="skill" />
              
              </div>)}
              </div>
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
