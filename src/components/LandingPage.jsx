import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-32 px-20">
        {["we create", "eye-opening", "presentation"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit  flex">
                {index === 1 && (
                 <motion.div initial={{width:0}} 
                 animate={{width:"9vw"}} 
                 transition={{ease:[0.76,0,0.24,1],duration:1}} 

                 className="w-[7vw] relative -top-[-1vw] h-[vw]"></motion.div>)}
                <h1 className="flex items-center uppercase h-full text-[7vw] leading-[6vw] tracking-tighter font-semibold"> {item}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {["For Public And Private company", "From the first pitch to IPO"].map(
          (item, index) => (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 border-[2px] border-zinc-500 rounded-full cursor-pointer font-light text-md uppercase">
            start the project
          </div>
          <div className="w-9 h-9 flex justify-center items-center rounded-full border-[2px] border-zinc-300">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
