import { motion } from "framer-motion";
import { allPortfolioList } from "../Constants/data";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Typewriter from "typewriter-effect";
import Skills from "../Pages/Skills";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

const getSize = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    return "sm";
  } else if (windowWidth >= 768 && windowWidth < 1024) {
    return "md";
  } else {
    return "lg";
  }
};

const Portfolio = () => {
  const [screen, setScreen] = useState(getSize());

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease",
  };

  useEffect(() => {
    setScreen(getSize());
  }, [window.innerWidth]);

  return (
    <div
      className={`min-h-screen bg-light-primary dark:bg-dark-primary text-black dark:text-white transition-all duration-500 py-4`}
    >
      <Element name="home" className="element pt-16 w-full ">
        <div className=" py-4 bg-[url('/wave-haikei.svg')]  bg-cover bg-center lg:flex-row flex-col  flex w-full   justify-around">
          <div className="lg:w-full  flex">
                <motion.div
            initial={{ opacity: 0, translateX: "-40px" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "anticipate", delay: 0.5 }}
            className="lg:my-auto w-full  bg-white/15 dark:bg-black/15 overflow-hidden  p-4 rounded-xl backdrop-blur-md border-violet-400 my-auto text-left font-bold mx-4 border "
          >
            <motion.div
              initial={{
                translateY: "200px",
              }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className="m-auto  py-4 "
            >
              <p className="text-lg ">Hello I am </p>
              <h1 className="text-6xl text-cyan-400 ">
                Vikas <br /> Pawar
              </h1>
              <h3
                className="
              text-4xl
              text-transparent 
              bg-clip-text 
              bg-gradient-to-r 
              via-pink-500
              from-orange-400 
              to-purple-500
              line-clamp-1"
              
              >
                <Typewriter
                  options={{
                    strings: [
                      "Full-Stack Web Developer",
                      "Frontend Developer",
                      "Backend Web Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 40,
                    delay: 40,
                  }}
                />
              </h3>
            </motion.div>
          </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, translateX: "40px" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="  w-full "
          >
            <img
              className="
              m-auto 
              transform 
              -scale-x-100 
              w-[80%] "
              src="./Programming.svg"
              alt="programmer"
            />
          </motion.div>
        </div>
      </Element>

      <Element name="about" className="element">
        
    <About/>
      </Element>

      <Element name="skills" className="elements  mb-12">
        <SectionHeader>Skills</SectionHeader>
        <Skills />
      
      </Element>

      <Element name="projects" className="element mt-12">
        <SectionHeader
        headerColor="[rgb(186,104,200)]"
        >Projects</SectionHeader>
        <section className="mb-16 p-6 justify-center  ">
          <div className="">
            <div>
              <div className=" py-4">
                <Slider
                  className="p-2"
                  {...settings}
                  slidesToShow={screen == "sm" ? 1 : screen == "md" ? 2 : 3}
                >
                  { 
                    allPortfolioList.map((el,i)=>{
                      return (
                        <ProjectCard
                          key={i}
                          images={el.img}
                          title={el.title}
                          link={el.link}
                          git={el.git_repo}
                        />
                      )
                    })
                  }
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="contact" className="element">
        <SectionHeader
        headerColor={'[rgb(186,104,200)]'}
        >Contact Me</SectionHeader>
        <Contact />
      </Element>
    </div>
  );
};

export default Portfolio;
