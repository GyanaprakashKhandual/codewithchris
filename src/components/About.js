import React from 'react';
import { motion } from 'framer-motion';
import { FaUserAstronaut, FaLaptopCode, FaHeart } from 'react-icons/fa';
import { SiAbbrobotstudio } from 'react-icons/si';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-4">
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8 mt-6"
      >
        <SiAbbrobotstudio className="w-20 h-20 text-black" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-6 text-center"
      >
        About <span className="text-lime-500">Me</span>
      </motion.h1>

      {/* Short Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl text-center text-lg text-gray-600 leading-relaxed"
      >
        <p className="mb-4">
          <span className="inline-flex items-center gap-2 text-lime-600 font-semibold">
            <FaUserAstronaut /> Dreamer Turned Creator
          </span>
          <br />
          Growing up in the heart of Odisha, I always dreamt of creating something meaningful. 
          After studying Physics, I found my true calling in tech and quality assurance.
        </p>

        <p className="mb-4">
          <span className="inline-flex items-center gap-2 text-lime-600 font-semibold">
            <FaLaptopCode /> Code. Test. Repeat.
          </span>
          <br />
          From HTML to advanced automation testing, I craft digital experiences and ensure their excellence. 
          Whether it is front-end development or rigorous QA testing, I embrace every challenge with passion.
        </p>

        <p>
          <span className="inline-flex items-center gap-2 text-lime-600 font-semibold">
            <FaHeart /> Passion Never Dies
          </span>
          <br />
          Beyond tech, I am a believer in lifelong learning, creativity, and meaningful connections. 
          Every project is a step toward making an impact.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
