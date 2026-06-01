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
    <div className="border-b border-neutral-900 pb-16 lg:mb-35 w-full">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start p-4 lg:p-8">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-md"
          >
            Sanwad Rashinkar
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-3xl sm:text-4xl tracking-tight text-transparent font-semibold drop-shadow-sm"
          >
            Computer Engineer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-xl py-6 font-light tracking-wide text-lg text-neutral-300 text-center lg:text-left leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.div
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 mt-4"
          >
            <a href="#projects" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(192,132,252,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]">
              View Projects
            </a>
            <a href="/Sanwad_Rashinkar_Resume.pdf" download="Sanwad_Rashinkar_Resume.pdf" className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-400 font-medium hover:bg-cyan-500 hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]">
              Download Resume
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-neutral-500 text-neutral-300 font-medium hover:bg-neutral-800 hover:text-white hover:scale-105 transition-all duration-300">
              Contact Me
            </a>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-4 lg:p-8 relative">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative w-full max-w-md"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            <img
              src={profilepic}
              alt="Profile Image"
              className="relative w-full rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500 border border-white/10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
