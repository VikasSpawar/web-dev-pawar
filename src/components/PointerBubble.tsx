import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useContext, useEffect, useRef } from "react";
import { MyContext } from "../Context/ContextProvider";

const springConfig = { damping: 10, stiffness: 150, restDelta: 0.01 };

export function useFollowPointer(ref) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, springConfig);
  const y = useSpring(yPoint, springConfig);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ pageX, pageY }) => {
      const element = ref.current;

      requestAnimationFrame(() => {
        xPoint.set(pageX - element.offsetLeft - element.offsetWidth / 2);
        yPoint.set(pageY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, xPoint, yPoint, scroll]);

  return { x, y };
}

const PointerBubble = () => {

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const {state} = useContext(MyContext)

  return (
    <>
      <motion.div
        ref={ref}

        className={`lg:block  hidden z-50  ${state.toolTip ? 'p-2 opacity-80':'p-6'} pointer-events-none absolute  rounded-full bg-violet-500  opacity-50 border-blue-700 border-4`}
        style={{ x, y }}
      >
        <p className={`transition-all   text-xl text-cyan-400 duration-500  rounded-full ${state.toolTip?"p-1  w-44 dark:bg-black bg-white overflow-hidden text-nowrap opacity-100":"w-0"}`}>

      {state.toolTip&&state.toolTip
              }
      
        </p>
      
   
      </motion.div>
    </>
  );
};

export default PointerBubble;


