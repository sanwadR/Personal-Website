import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Frontend", "Backend", "Fullstack", "Data Science"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter((project) => 
    activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="border-b border-neutral-900 pb-4" id="projects">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category 
                ? "bg-cyan-500 text-white shadow-[0_0_15px_rgba(34,211,238,0.5)] scale-105" 
                : "bg-white/5 border border-white/10 text-neutral-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="flex flex-col items-center justify-center gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              key={project.title} 
              className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group"
            >
              <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center">
                <div
                  className="w-full lg:w-1/3 flex-shrink-0 overflow-hidden rounded-xl"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative h-[200px] w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </a>
                </div>
                <div
                  className="w-full lg:w-2/3 flex flex-col justify-center"
                >
                  <h6 className="mb-4 text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{project.title}</h6>
                  <p className="mb-6 text-neutral-300 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0)] group-hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
