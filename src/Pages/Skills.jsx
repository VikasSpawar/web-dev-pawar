import { motion } from "framer-motion";
import React, { useState } from "react";
import { skillList } from "../Constants/data.js";
import SkillBox from "../components/SkillBox.jsx";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  // hidden: { opacity: 0, y: 20, x: -20 },
  visible: { opacity: 1, y: 0, x: 0 },
};

const Skills = () => {
  const [skillInfo, setSkillInfo] = useState(0);

  const variants = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
    hide: {
      y: -20,
      opacity: 0,
    },
    
  };

  return (
    <div className="flex w-full lg:flex-row flex-col ">
      <motion.div
        variants={containerVariants}
        exit={"hidden"}
        whileInView="visible"
      
        className="flex
        flex-wrap
        w-full
        box-border
        justify-evenly
        p-4   
        rounded-md  
        border 
        border-cyan-400 "
      >
        {skillList.map((el, i) => {
        
          return (
            <motion.div

              initial={{ opacity: 0, y: 20, x: -20 }}
              whileInView={{opacity: 1, y: 0, x: 0}}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className=" lg:w-1/4 md:w-1/3 sm:w-1/2  rounded-md "
              key={el.title}

            >
              <div
                onClick={() => setSkillInfo(i)}
                className={`${
                  skillInfo == i && "bg-cyan-400 text-white "
                } text-cyan-400  w-fit m-4 mx-auto transition-colors duration-300 shadow-lg rounded-md border border-teal-400`}
              >
                <SkillBox icon={el.skillIcon} title={el.title} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        key={skillInfo}
        variants={variants}
        animate={"show"}
        className="border lg:mx-2 mx-auto rounded-md h-auto p-4 m-4 w-96  border-cyan-400"
      >
        <motion.h1
          className="
          text-2xl
          font-bold
        text-cyan-400
      "
        >
          {skillList[skillInfo].title}
        </motion.h1>
        <img
          className="w-full p-4 border border-cyan-400 my-4 rounded-lg"
          src={skillList[skillInfo].skillIcon}
          alt={skillList[skillInfo].title}
        />
        <p className="text-xl text-cyan-400">
          {skillList[skillInfo].description}
        </p>
      </motion.div>
    </div>
  );
};

export default Skills;
