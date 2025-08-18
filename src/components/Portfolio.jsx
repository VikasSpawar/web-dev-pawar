import { motion } from "framer-motion";
import { TbFileCv } from "react-icons/tb";
import { RiPagesFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { allPortfolioList } from "../Constants/data";
import React, { useContext, useEffect, useState } from "react";
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
import { MyContext } from "../Context/ContextProvider";
import { Link } from "react-router-dom";

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
  const { handleToolTip } = useContext(MyContext);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    easing: "ease",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setScreen(getSize());
  }, [window.innerWidth]);

  return (
    <div
      className={`min-h-screen bg-light-primary  dark:bg-dark-primary text-black dark:text-white transition-all duration-500 py-4`}
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
                <motion.div
                 
                  className=" py-4  px-2 my-1 sm:space-x-3 sm:w-fit  flex justify-evenly  sm:absolute top-0 right-0"
                >
                       <Link
                         
                          to={'https://drive.google.com/file/d/1Fiu2438wDy5NphBfqgbqH77G9mio1ARW/view?pli=1'}
                          target="_blank"
                          
                        > <motion.button
                   onMouseLeave={() => handleToolTip("")}
                   onMouseEnter={() => handleToolTip(`Resume`)}
                    initial={{
                      translateX: "100px",
                      opacity: 0,
                    }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 1.4 }}
                    viewport={{ once: true }}
                    className="border   mr-2  rounded-lg p-2"
                  >
                    <RiPagesFill className="hover:scale-125 transition-transform duration-150" size={64} />
                    <p className="sm:hidden">Resume</p>
                  </motion.button>
                  </Link>
                  <Link
                         
                          to={'https://github.com/vikasspawar'}
                          target="_blank"
                         
                        >   <motion.button
                    onMouseLeave={() => handleToolTip("")}
                    onMouseEnter={() => handleToolTip(`Github`)}
                    initial={{
                      translateX: "100px",
                      opacity: 0,
                    }}
                    whileInView={{ translateX: 0, opacity: 1  }}
                    transition={{ type: "spring", delay: 1.5 }}
                    viewport={{ once: true }}
                    className="border  rounded-lg  p-2"
                  >
                    <FaGithubSquare className="hover:scale-125 transition-transform duration-150" size={64} />
                 <p className="sm:hidden">Github</p> </motion.button>
                 </Link>
              
                </motion.div>
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
        <About />
      </Element>

      <Element name="skills" className="elements  mb-12">
        <SectionHeader>Skills</SectionHeader>
        <Skills />
      </Element>

      <Element name="projects" className="element mt-12">
        <SectionHeader headerColor="[rgb(186,104,200)]">Projects</SectionHeader>
        <section className="mb-16 p-6 justify-center  ">
          <div className="">
            <div>
              <div className=" md:p-4 sm:p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:gap-24 gap-16">
                {/* <Slider
                  className="p-2 mx-4  "
                  {...settings}
                  slidesToShow={screen == "sm" ? 1 : screen == "md" ? 2 : 3}
                > */}
                {allPortfolioList.map((el, i) => {
                  return (
                    <ProjectCard
                      key={i}
                      images={el.img}
                      title={el.title}
                      description={el.description}
                      link={el.link}
                      git={el.git_repo}
                      subtitle={el.subtitle}
                    />
                  );
                })}
                {/* </Slider> */}
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="contact" className="element">
        <SectionHeader headerColor={"[rgb(186,104,200)]"}>
          Contact Me
        </SectionHeader>
        <Contact />
      </Element>
    </div>
  );
};

export default Portfolio;
