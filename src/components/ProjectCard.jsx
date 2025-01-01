import React, { useEffect, useState } from "react";
import "./Style/ProjectCard.css";
import ProjectVisitOption from "./ProjectVisitOption";

const ProjectCard = (props) => {
  const { images, title } = props;

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
    <div className="max-w-80 m-auto">
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
        hover:shadow-xl
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
        justify-center"
        ></div>

        <div
          className="z-10 
        dark:text-white
          group-hover:-translate-y-[-10px]
          transition-all
            duration-500"
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
      </div>
    </div>
  );
};

export default ProjectCard;
