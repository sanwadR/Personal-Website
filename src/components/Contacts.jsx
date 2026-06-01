import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20" id="contact">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h1>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4">
        {/* Contact Info */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-3xl font-semibold mb-6 text-white">Let&apos;s Connect</h2>
          <p className="text-neutral-400 mb-8 max-w-md">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="tracking-tighter">
            <p className="my-4 text-neutral-300 text-lg flex items-center justify-center gap-4">
              <span className="text-cyan-500">📍</span> {CONTACT.address}
            </p>
            <p className="my-4 text-neutral-300 text-lg flex items-center justify-center gap-4">
              <span className="text-purple-500">✉️</span>{" "}
              <a href={`mailto:${CONTACT.email}`} className="hover:text-purple-400 transition-colors">
                {CONTACT.email}
              </a>
            </p>
            <p className="my-4 text-neutral-300 text-lg flex items-center justify-center gap-4">
              <span className="text-cyan-500 text-xl"><FaLinkedin /></span>{" "}
              <a
                href="https://www.linkedin.com/in/sanwad-rashinkar-0b6820259/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;
