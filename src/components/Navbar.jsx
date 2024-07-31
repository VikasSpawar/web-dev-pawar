import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { FaHome, FaInfoCircle, FaLaptopCode } from "react-icons/fa";
import { RiContactsFill, RiReactjsLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { MyContext } from "../Context/ContextProvider";
import ThemeSwitcher from "./ThemeSwitcher";

function preventDefault(e) {
  e.preventDefault();
}
  // Function to disable scrolling
  function disableScroll() {
    window.addEventListener('scroll', preventDefault, { passive: false });
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
  }

  // Function to enable scrolling
  function enableScroll() {
    window.removeEventListener('scroll', preventDefault);
    window.removeEventListener('wheel', preventDefault);
    window.removeEventListener('touchmove', preventDefault);
  }

  
const Navbar = () => {
  const [style, setStyle] = useState({});
 
  const { pathname } = useLocation();
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
      if(mobileNav){
        disableScroll()
      }
      else{
        enableScroll()
      }
    window.addEventListener("scroll", () => {
      

      if (window.scrollY > 20) {
        setStyle({
          padding: "14px 16px 14px 16px",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
         
        });
      }
      if (window.scrollY < 20) {
        setStyle({});
      }
    });
  }, [mobileNav]);



  return (
    <motion.nav
      initial={{ translateY: "-20px" }}
      whileInView={{ translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.3 }}
      style={style}
      className={`
     
      nav
    
      lg:py-10
      sm:p-[14px_16px_14px_16px]
      md:p-[14px_16px_14px_16px]
      overflow-hidden
     
      px-4 w-full flex justify-between
      backdrop-blur-md
      fixed
      top-0
      left-0
      z-40
      transition-all
      duration-300
      lg:h-auto
        py-2
      
      ${mobileNav ? 'h-[100%] bg-black/20 ' : 'h-auto overflow-visible'}
     `}
    
    >
      <div className="name-logo  w-full">
        <h1 className="text-4xl  font-semibold w-fit text-cyan-400">
          {"<"}
          <span className="  ">{"V"}</span>
          <span className="text-violet-400">{"P"}</span>
          {"/> "}
        </h1>
      </div>
      <div className="nav-links text-xl font-semibold w-full   ">
        <ul
          className={`
        
        transition-all 
         flex
         lg:flex-row
         flex-col
     
        lg:rounded-full 
        text-dark-secondary 
        dark:text-white  
        text-lg  
        
       ${mobileNav&&'h-full'}
        
        justify-evenly
        `}
        >
          <li >
            <NavLink
            handleMenu={setMobileNav}
         
            mobileNav={mobileNav}
              to={"home"}
              active={pathname == "/home" || pathname == "/"}
            >
              <FaHome size={24} className="inline m-auto mx-1 " />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
            handleMenu={setMobileNav}
            mobileNav={mobileNav} to={"about"} active={pathname == "/about"}>
              <FaInfoCircle size={24} className="inline m-auto mx-1 " />
              About
            </NavLink>
          </li>
          <li>
            <NavLink
            handleMenu={setMobileNav}
            mobileNav={mobileNav} to={"skills"} active={pathname == "/skills"}>
              <RiReactjsLine
                name="Skills"
                size={24}
                className="inline m-auto mx-1 "
              />
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
            handleMenu={setMobileNav}
            mobileNav={mobileNav} to={"projects"} active={pathname == "/projects"}>
              <FaLaptopCode size={24} className="inline m-auto mx-1 " />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
            handleMenu={setMobileNav}
            mobileNav={mobileNav} to={"contact"} active={pathname == "/contact"}>
              <RiContactsFill size={24} className="inline m-auto mx-1 " />
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="lg:flex hidden w-full   justify-end">
        <div className=" w-fit ">

        <ThemeSwitcher/>
        </div>
      </div>
      <div className="lg:hidden flex flex-row-reverse  h-fit gap-2  items-end  w-full ">

    
            <div className="lg:hidden  w-fit p-2 my-auto rounded-lg  bg-white/30 overflow-hidden">
           <label className="flex flex-col gap-2 w-8 ">
  <input onChange={()=>setMobileNav(!mobileNav)} className="peer hidden" type="checkbox" checked={mobileNav}/>
  <div
    className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"
  ></div>
  <div
    className="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45"
  ></div>
  <div
    className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"
  ></div>
</label>    
            </div>
 <ThemeSwitcher /> 
     
   
      </div>
    </motion.nav>
  );
};
export const NavLink = ({ to, children , mobileNav , handleMenu }) => {
  const { handleToolTip } = useContext(MyContext);
  const [active, setActive] = useState("");


  const handleActive = (to) => {
    setActive(to);
    handleMenu(false)
  };

  return (
    <ScrollLink
    
    
      onMouseLeave={() => handleToolTip("")}
      onMouseEnter={() => handleToolTip(`${children[1]}`)}
      spy
      smooth
      duration={500}
      className={`
        overflow-hidden 
        ${
          active!=children[1]
            ? ` ${!mobileNav&&"w-0 h-[0px] "} 
            m-0  lg:w-16 lg:h-auto lg:p-2`
            : "w-16 h-auto p-2 "
        } 
        ${mobileNav&&'p-2 '}
        rounded-full  transition-all flex justify-center `}
        activeClass={` 
        dark:bg-violet-600 
        bg-white 
        text-violet-600 
        dark:text-cyan-400 
        lg:w-32
        md:w-32
        w-auto
        mx-auto
        
        ${mobileNav&&'scale-125'}
      
        `}
      href={to}
      to={to}
      onSetActive={() => handleActive(children[1])}
      onSetInactive={() => handleActive("")}
    >
      {children[0]}
      <p className="my-auto lg:hidden">    {mobileNav&&children[1]}</p>
  
    </ScrollLink>
  );
};
export default Navbar;
