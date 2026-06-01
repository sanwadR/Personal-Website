import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPython, SiDocker, SiTensorflow, SiFastapi } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {" "}
        Technologies{" "}
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 cursor-pointer"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_0_15px_rgba(250,204,21,0)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transition-all duration-300 cursor-pointer"
        >
          <SiPython className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all duration-300 cursor-pointer"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all duration-300 cursor-pointer"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 cursor-pointer"
        >
          <SiDocker className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_0_15px_rgba(249,115,22,0)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all duration-300 cursor-pointer"
        >
          <SiTensorflow className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 cursor-pointer"
        >
          <SiFastapi className="text-7xl text-emerald-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
