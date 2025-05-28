import React from 'react';
import { motion } from 'framer-motion';
import { FaUserAstronaut, FaLaptopCode, FaHeart, FaCode, FaTools, FaRobot } from 'react-icons/fa';
import { SiAbbrobotstudio, SiJavascript, SiTypescript, SiCypress, SiSelenium } from 'react-icons/si';
import { TbTestPipe } from 'react-icons/tb';

const AboutMe = () => {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 90 },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: 85 },
    { name: "Cypress", icon: <SiCypress className="text-gray-100" />, level: 92 },
    { name: "Selenium", icon: <SiSelenium className="text-emerald-500" />, level: 88 },
    { name: "Test Automation", icon: <TbTestPipe className="text-purple-400" />, level: 95 },
    { name: "QA Engineering", icon: <FaTools className="text-rose-400" />, level: 94 },
  ];

  return (
    <div className="mt-15 flex flex-col items-center justify-center px-4 py-8 min-h-[calc(100vh-15px)] bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      {/* Logo with floating animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          ease: [0.2, 0.8, 0.2, 1]
        }}
        whileHover={{
          y: -10,
          transition: { 
            yoyo: Infinity,
            duration: 2,
            ease: "easeInOut"
          }
        }}
        className="mb-8 mt-6"
      >
        <SiAbbrobotstudio className="w-20 h-20 text-violet-400" />
      </motion.div>

      {/* Heading with text gradient */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-10 text-center"
      >
        <h1 className="text-5xl font-bold mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-lime-300">
            About Me
          </span>
        </h1>
        <motion.div 
          className="h-1 bg-gradient-to-r from-violet-500 to-lime-400 rounded-full mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: "80%" }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </motion.div>

      {/* Main content container */}
      <div className="max-w-5xl w-full">
        {/* Short Story with staggered animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Story Card 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.2, 0.8, 0.2, 1]
            }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-violet-900/50 shadow-lg hover:shadow-violet-500/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-3 rounded-lg bg-violet-900/50"
                whileHover={{ rotate: 15 }}
              >
                <FaUserAstronaut className="w-6 h-6 text-lime-300" />
              </motion.div>
              <h3 className="text-xl font-semibold text-lime-300">Dreamer Turned Creator</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Born and raised in the culturally rich state of Odisha, I was always fascinated by how things work.
              My journey in Physics gave me analytical superpowers that I now apply to technology and quality assurance.
              I believe every complex system can be understood and improved with the right approach.
            </p>
          </motion.div>

          {/* Story Card 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.2, 0.8, 0.2, 1],
              delay: 0.2
            }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-violet-900/50 shadow-lg hover:shadow-violet-500/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-3 rounded-lg bg-violet-900/50"
                whileHover={{ rotate: 15 }}
              >
                <FaLaptopCode className="w-6 h-6 text-lime-300" />
              </motion.div>
              <h3 className="text-xl font-semibold text-lime-300">Code. Test. Repeat.</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              With over 5 years in the tech industry, I've mastered the art of building robust systems and breaking them (on purpose!).
              My expertise spans from crafting beautiful front-end experiences to implementing bulletproof test automation frameworks.
              I thrive in environments where quality and innovation intersect.
            </p>
          </motion.div>

          {/* Story Card 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.2, 0.8, 0.2, 1],
              delay: 0.4
            }}
            className="md:col-span-2 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-violet-900/50 shadow-lg hover:shadow-violet-500/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-3 rounded-lg bg-violet-900/50"
                whileHover={{ rotate: 15 }}
              >
                <FaHeart className="w-6 h-6 text-lime-300" />
              </motion.div>
              <h3 className="text-xl font-semibold text-lime-300">Passion Never Dies</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Beyond the screen, I'm an avid learner constantly exploring new technologies and methodologies.
              I'm passionate about mentoring aspiring QA engineers and contributing to open-source projects.
              When I'm not debugging code, you'll find me experimenting with new automation tools or sharing knowledge with the tech community.
            </p>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <motion.div 
              className="p-2 rounded-lg bg-violet-900/50"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <FaRobot className="w-6 h-6 text-lime-300" />
            </motion.div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-lime-300">
              Technical Arsenal
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/30 p-4 rounded-lg border border-violet-900/30 hover:border-lime-400/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">{skill.icon}</div>
                  <h3 className="font-medium text-gray-200">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-lime-400"
                  />
                </div>
                <div className="text-right text-xs text-gray-400 mt-1">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-violet-900/40 to-lime-900/20 p-8 rounded-2xl border border-violet-900/50 mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div 
              className="p-3 rounded-lg bg-lime-900/20"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              <FaCode className="w-6 h-6 text-lime-300" />
            </motion.div>
            <h2 className="text-2xl font-bold text-lime-300">My QA Philosophy</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-violet-300 mb-3">Prevention Over Detection</h3>
              <p className="text-gray-300">
                I believe in building quality into the product from the ground up rather than finding defects late in the cycle.
                My approach focuses on shift-left testing, early requirement analysis, and continuous feedback loops.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-violet-300 mb-3">Automation as an Enabler</h3>
              <p className="text-gray-300">
                While manual testing has its place, I champion intelligent automation that accelerates release cycles without compromising quality.
                My frameworks are designed for maintainability, scalability, and real-world effectiveness.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-gray-300 mb-4">Ready to build something amazing together?</h3>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(163, 230, 53, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-violet-600 to-lime-500 text-white font-medium rounded-full"
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;