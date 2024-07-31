import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { GetInTouch, MessageMe } from "../components/ContactOptions";

const Contact = () => {
  const [activeComponent, setActiveComponent] = useState("getInTouch");

  const handleActiveComponent = (component) => {
      setActiveComponent(component)
  };
  return (
    <section className="mb-16 text-center w-full ">
    
      <div className="flex lg:flex-row flex-col-reverse p-2">
        <div
          className={` w-full   border-2 h-96 rounded-lg p-4 border-[rgb(186,104,200)] `}
        >
          <nav>
            <motion.ul layout className={`flex  w-full justify-evenly `}>
              <motion.button
                className={`${
                  activeComponent !== "getInTouch" && "text-gray-400"
                }`}
                onClick={()=>handleActiveComponent('getInTouch')}
              >
                GetInTouch
                {activeComponent == "getInTouch" && (
                  <motion.div
                    className="border-b border-[rgb(186,104,200)]"
                    layoutId="underline"
                  ></motion.div>
                )}
              </motion.button>
              <motion.button
                className={`${
                  activeComponent == "getInTouch" && "text-gray-400"
                }`}
                onClick={()=>handleActiveComponent('messageMe')}
              >
                MessageMe
                {activeComponent == "messageMe" && (
                  <motion.div
                    className="border-b border-[rgb(186,104,200)]"
                    layoutId="underline"
                  ></motion.div>
                )}
              </motion.button>
            </motion.ul>
          </nav>
          <main>
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  key={activeComponent}
                >
                  {activeComponent === "getInTouch" ? (
                    <GetInTouch />
                  ) : (
                    <MessageMe />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        </div>
        <div className="w-full">
          {/* <Amico/> */}
          <img className="m-auto w-[70%]" src="/Contact-us-amico.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
