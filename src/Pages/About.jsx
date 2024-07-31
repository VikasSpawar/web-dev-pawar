import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Typewriter from "typewriter-effect";
import {motion} from "framer-motion"


const About = () => {
  return (
    <div
    id="about"
    className="
    bg-[url('/wavesNegative.svg')] 
    bg-cover 
    bg-center 
    min-h-screen "
  >
    <SectionHeader>About Me</SectionHeader>
    <div
      className="
    flex
    my-4 
    justify-around 
    border-b-[#7928f3] 
    border-r-[#7928f3] 
    border-l-[#7928f3] 
    border-t-[#7928f3] 
    border-r 
    border-b 
    border-t 
    border-l 
    lg:border-t-gray-400  
    rounded-t-full
   lg:rounded-l-full  
   lg:rounded-none
   lg:border-l-0
    p-4 m-4
    flex-col
    lg:flex-row
    "
    >
      <motion.div
        initial={{ opacity: 0, translateY: "70px" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:w-96  lg:mx-2 lg:my-auto mx-auto "
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          className="
          p-4 
          shadow-[0_15px_60px_-10px_rgba(0,0,0,0.3)] 
          border-4 
          border-[#7928f3]   
          rounded-full  w-full "
          src="/Pic.png"
          alt="img"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: "70px" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
        m-4
        border-gray-400 
        shadow-[0_15px_60px_-10px_rgba(0,0,0,0.3)] 
        lg:w-4/5 
        w-full
        border 
        lg:mx-4 
        backdrop-blur-lg 
        rounded-lg 
        text-pretty
        mx-auto

        "
      >
        <motion.div
          delay={3000}
          className="
        
          mx-auto 
          lg:text-2xl 
          my-8 
          px-8 
          text-left text-xl "
        >
          <h2 className="text-2xl ">
            Hello I am{" "}
            <span className="text-yellow-400">Vikas Pawar </span>
          </h2>
          <h2 className='truncate md:text-xl sm:text-lg'>
           
            I am{" "}
            <span className="text-green-400  ">
              <Typewriter
            
                options={{
                  strings: [
                    "Full-Stack Web Dev",
                    "Frontend Web Dev",
                    "Backend Web Dev",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                  delay: 40,
                }}
              />
            </span>{" "}
            from India
          </h2>
         
                      Dedicated and detail-oriented Full Stack Developer, with strong
          adaptability, good attention to detail, and the ability to write
          efficient code. Problem-solving mindset with a goal to optimize
          my application for better stability and speed. Love to work in a
          team. Capable of writing Production-Ready Code Using React.JS,
          Redux, and CSS on the Frontend & Node.JS, Express on the Backend
          to build a Single Page Application Passionate about coding and
          strongly interested to work with Product Based Company
     

        </motion.div>
      </motion.div>
    </div>
  </div>
  )
}

export default About
