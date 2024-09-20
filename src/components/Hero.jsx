import React from "react";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/Sanwad.jpg";
import { motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 w-full">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start p-4 lg:p-8">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-thin tracking-tight"
          >
            Sanwad Rashinkar
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl md:text-3xl tracking-tight text-transparent"
          >
            Full Stack Web Developer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-4 lg:p-8 ">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilepic}
            alt="Profile Image"
            className="w-full max-w-md rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
