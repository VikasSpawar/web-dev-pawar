import React from "react";
import { motion } from "framer-motion";
const SectionHeader = ({ children }) => {
let toColor= children!='About'&&children!='Skills' ? `to-purple-400` : `to-cyan-400`
let textColor=children!='About'&&children!='Skills' ? `text-purple-400` : `text-cyan-400`
  return (
    <div className=" h-40 pt-10 lg:my-10 lg:pt-20">
      <motion.h1
        initial={{ opacity: 0, translateY: "20%", fontSize: "20em"}}
        whileInView={{ opacity: 1, translateY: 0, fontSize: "4.5rem" }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        
        className={`
          ${toColor}
          text-7xl 
          font-extrabold 
          mb-8 
          bg-gradient-to-t 
          from-transparent 
          bg-clip-text 
          text-transparent 
          opacity-[0.3] 
          text-center 
          z-[-1]`}
      >
        {children}
      </motion.h1>
      <h2
        className={`
        ${textColor}
          text-[2.5em] 
          font-bold 
          -translate-y-20 
          text-center 
          z-[1]`}
      >
        {children}
      </h2>
    </div>
  );
};

export default SectionHeader;
