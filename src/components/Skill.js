import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5,                // HTML
  FaCss3Alt,              // CSS
  FaJs,                   // JavaScript, GSAP, Electron JS, Angular JS, Three JS, Chai/Mocha, Faker, WireMock, Allure, CafeeTest, Espresso, XCUITest
  FaReact,                // React JS, Framer Motion
  FaNodeJs,               // Node JS, Nest JS
  FaVuejs,                // Vue JS
  FaPython,               // Python, BentoML, FastAPI, Prefect, Pandas, Polars, Statsmodels, Scikit-learn, Seaborn
  FaJava,                 // Java, Rest Assured, JUnit/TestNG
  FaDatabase,             // PostgreSQL, MySQL, MongoDB, DuckDB
  FaAws,                  // AWS, AWS SageMaker, VPC segmentation
  FaMicrosoft,            // Azure, Playwright
  FaDocker,               // Docker
  FaGitAlt,               // Git, Versioning
  FaGithub,               // Github
  FaGitlab,               // Gitlab
  FaShieldAlt,            // OWASP Top 10, OWASP TOP 10, Access control
  FaLock,                 // JWT, RBAC, ABAC, Secret management
  FaTerminal,             // Bash
  FaChartLine,            // Statistics, Probability, Chart JS
  FaCode,                 // Code-splitting, Bundle analyzers, Profiling
  FaFileExcel,            // Excel
  FaChartBar,             // Power BI, Dash
  FaWind,                 // Airflow
  FaCube,                 // Kubernetes
  FaKey,                  // OAuth2/OpenID Connect
  FaCogs,                 // SonarQube
  FaBug,                  // Manual Testing, Percy, Testim.io
  FaCheckCircle,          // Cypress
  FaDesktop,              // Selenium
  FaMobileAlt,            // Appium
  FaPaperPlane,           // Postman
  FaFigma,                // Figm
  FaHubspot,
  FaPuzzlePiece,
  FaUnlockAlt,
  FaMixcloud,
  FaGooglePlusSquare,
  FaChalkboardTeacher,
  FaSuperpowers,
  FaSoap,
  FaBlackberry,
  FaTimes,
  FaFly,
  FaJira,
  FaRobot
} from 'react-icons/fa';


const SkillCard = ({ name, Icon, proficiency, experience, projects, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        z: 50,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group perspective-1000"
    >
      <div className="relative bg-gradient-to-br from-purple-800/30 via-violet-700/20 to-gray-800/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 w-65 h-65 overflow-hidden">

        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              initial={{
                x: Math.random() * 200,
                y: Math.random() * 200,
                opacity: 0
              }}
              animate={{
                x: Math.random() * 200,
                y: Math.random() * 200,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

        <AnimatePresence>
          {!isHovered && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 flex flex-col items-center text-center h-full"
            >
              <motion.div
                animate={{
                  rotateY: 0,
                  scale: 1
                }}
                transition={{ duration: 0.6, type: "spring" }}
                className="mb-4 p-4 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl shadow-lg"
              >
                <Icon size={32} className="text-white drop-shadow-lg" />
              </motion.div>

              <motion.h3
                className="text-xl font-bold text-white mb-3 tracking-wide"
              >
                {name}
              </motion.h3>

              <div className="space-y-3 w-full">
                <div>
                  <div className="flex justify-between text-xs text-purple-200 mb-1">
                    <span>Proficiency</span>
                    <span>{proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${proficiency}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <div className="flex justify-between text-xs text-purple-200">
                  <span>Experience</span>
                  <span className="text-violet-300 font-semibold">{experience}</span>
                </div>

                <div className="flex justify-between text-xs text-purple-200">
                  <span>Projects</span>
                  <span className="text-violet-300 font-semibold">{projects}+</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover overlay with enhanced tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: 90 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-white/95 backdrop-blur-xl rounded-2xl p-4 flex flex-col justify-center items-center border-2 border-purple-500/30 shadow-2xl shadow-purple-500/50"
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="text-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mb-4 p-3 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full shadow-lg shadow-purple-500/50"
                >
                  <Icon size={36} className="text-white filter drop-shadow-lg" />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 tracking-wide">
                  {name}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 font-medium px-2">
                  Expert level proficiency with <span className="text-purple-600 font-semibold">{experience}</span> of hands-on experience
                </p>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full shadow-lg"
                >
                  <span className="text-white text-sm font-semibold tracking-wide">
                    {projects}+ Projects Completed
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function EnhancedSkillsShowcase() {
  const skills = [
    { name: "HTML", Icon: FaHtml5, proficiency: 95, experience: "1+ years", projects: 20 },
    { name: "CSS", Icon: FaCss3Alt, proficiency: 93, experience: "1+ years", projects: 18 },
    { name: "JavaScript", Icon: FaJs, proficiency: 92, experience: "1+ years", projects: 20 },
    { name: "TypeScript", Icon: FaJs, proficiency: 85, experience: "1+ years", projects: 10 },
    { name: "Python", Icon: FaPython, proficiency: 88, experience: "1+ years", projects: 7 },
    { name: "Tailwind CSS", Icon: FaCss3Alt, proficiency: 90, experience: "1+ years", projects: 15 },
    { name: "Framer Motion", Icon: FaReact, proficiency: 80, experience: "1+ years", projects: 6 },
    { name: "GSAP", Icon: FaJs, proficiency: 75, experience: "1+ years", projects: 5 },
    { name: "Figma", Icon: FaFigma, proficiency: 78, experience: "1+ years", projects: 7 },
    { name: "React JS", Icon: FaReact, proficiency: 95, experience: "1+ years", projects: 20 },
    { name: "Next JS", Icon: FaReact, proficiency: 92, experience: "1+ years", projects: 12 },
    { name: "Vue JS", Icon: FaVuejs, proficiency: 70, experience: "1+ year", projects: 3 },
    { name: "Three JS", Icon: FaJs, proficiency: 60, experience: "1 year", projects: 2 },
    { name: "Node JS", Icon: FaNodeJs, proficiency: 88, experience: "1+ years", projects: 8 },
    { name: "Express JS", Icon: FaNodeJs, proficiency: 85, experience: "1+ years", projects: 8 },
    { name: "RESTful APIs", Icon: FaPaperPlane, proficiency: 90, experience: "1+ years", projects: 15 },
    { name: "PostgreSQL", Icon: FaDatabase, proficiency: 80, experience: "1+ years", projects: 5 },
    { name: "MySQL", Icon: FaDatabase, proficiency: 85, experience: "1+ years", projects: 10 },
    { name: "MongoDB", Icon: FaDatabase, proficiency: 88, experience: "1+ years", projects: 10 },
    { name: "Docker", Icon: FaDocker, proficiency: 70, experience: "1+ year", projects: 4 },
    { name: "Kubernetes", Icon: FaCube, proficiency: 60, experience: "1 year", projects: 2 },
    { name: "Git", Icon: FaGitAlt, proficiency: 90, experience: "1+ years", projects: 20 },
    { name: "Github", Icon: FaGithub, proficiency: 90, experience: "1+ years", projects: 20 },
    { name: "Gitlab", Icon: FaGitlab, proficiency: 75, experience: "1+ years", projects: 6 },
    { name: "AWS SageMaker", Icon: FaAws, proficiency: 65, experience: "1 year", projects: 2 },
    { name: "Cypress", Icon: FaCheckCircle, proficiency: 90, experience: "1+ years", projects: 10 },
    { name: "Selenium", Icon: FaDesktop, proficiency: 92, experience: "1+ years", projects: 12 },
    { name: "Playwright", Icon: FaMicrosoft, proficiency: 85, experience: "1+ years", projects: 7 },
    { name: "Night JS", Icon: FaCode, proficiency: 65, experience: "1 year", projects: 2 },
    { name: "Puppeteer", Icon: FaPuzzlePiece, proficiency: 75, experience: "1+ years", projects: 5 },
    { name: "Katalon Studio", Icon: FaUnlockAlt, proficiency: 70, experience: "1+ year", projects: 3 },
    { name: "Robot Framework", Icon: FaRobot, proficiency: 75, experience: "1+ years", projects: 4 },
    { name: "XCUI Test", Icon: FaMixcloud, proficiency: 60, experience: "1 year", projects: 2 },
    { name: "Espresso", Icon: FaGooglePlusSquare, proficiency: 60, experience: "1 year", projects: 2 },
    { name: "Detox", Icon: FaDesktop, proficiency: 55, experience: "1 year", projects: 2 },
    { name: "WinAppDriver", Icon: FaWind, proficiency: 65, experience: "1 year", projects: 3 },
    { name: "KarateDSL", Icon: FaChalkboardTeacher, proficiency: 70, experience: "1+ year", projects: 3 },
    { name: "Appium", Icon: FaMobileAlt, proficiency: 88, experience: "1+ years", projects: 7 },
    { name: "Test Cafe", Icon: FaTerminal, proficiency: 70, experience: "1+ year", projects: 3 },
    { name: "JUnit, TestNG", Icon: FaJava, proficiency: 90, experience: "1+ years", projects: 10 },
    { name: "Chai, Mocha", Icon: FaJs, proficiency: 85, experience: "1+ years", projects: 6 },
    { name: "SuperTest", Icon: FaSuperpowers, proficiency: 75, experience: "1+ years", projects: 5 },
    { name: "Rest Assured", Icon: FaJava, proficiency: 88, experience: "1+ years", projects: 8 },
    { name: "Postman", Icon: FaPaperPlane, proficiency: 90, experience: "1+ years", projects: 15 },
    { name: "SoapUI", Icon: FaSoap, proficiency: 70, experience: "1+ year", projects: 4 },
    { name: "DBUnit", Icon: FaJs, proficiency: 60, experience: "1 year", projects: 2 },
    { name: "Allure", Icon: FaJs, proficiency: 70, experience: "1+ years", projects: 5 },
    { name: "Faker", Icon: FaJs, proficiency: 80, experience: "1+ years", projects: 6 },
    { name: "WireMock", Icon: FaJs, proficiency: 70, experience: "1+ years", projects: 4 },
    { name: "CafeeTest", Icon: FaJs, proficiency: 60, experience: "1 year", projects: 2 },
    { name: "Percy", Icon: FaBug, proficiency: 75, experience: "1+ years", projects: 4 },
    { name: "Testim.io", Icon: FaBug, proficiency: 70, experience: "1+ years", projects: 3 },
    { name: "Power BI", Icon: FaChartBar, proficiency: 85, experience: "1+ years", projects: 7 },
    { name: "Excel", Icon: FaFileExcel, proficiency: 90, experience: "1+ years", projects: 20 },
    { name: "Statistics", Icon: FaChartLine, proficiency: 85, experience: "1+ years", projects: 10 },
    { name: "Probability", Icon: FaChartLine, proficiency: 80, experience: "1+ years", projects: 10 },
    { name: "Chart JS", Icon: FaChartLine, proficiency: 78, experience: "1+ years", projects: 5 },
    { name: "JWT, RBAC, ABAC", Icon: FaLock, proficiency: 85, experience: "1+ years", projects: 8 },
    { name: "OAuth2/OpenID Connect", Icon: FaKey, proficiency: 80, experience: "1+ years", projects: 5 },
    { name: "OWASP Top 10", Icon: FaShieldAlt, proficiency: 75, experience: "1+ years", projects: 6 },
    { name: "SonarQube", Icon: FaCogs, proficiency: 78, experience: "1+ years", projects: 5 },
    { name: "Blaze Meter", Icon: FaBlackberry, proficiency: 70, experience: "1+ year", projects: 3 },
    { name: "Gatling", Icon: FaTimes, proficiency: 65, experience: "1 year", projects: 2 },
    { name: "Locust", Icon: FaFly, proficiency: 70, experience: "1+ year", projects: 3 },
    { name: "Flyway", Icon: FaFly, proficiency: 70, experience: "1+ year", projects: 2 },
    { name: "Generative AI APIs", Icon: FaRobot, proficiency: 80, experience: "1+ year", projects: 4 },
    { name: "OpenAI/Anthropic APIs", Icon: FaRobot, proficiency: 85, experience: "1+ year", projects: 5 },
    { name: "Hugging Face", Icon: FaHubspot, proficiency: 75, experience: "1+ year", projects: 3 },
    { name: "Jira", Icon: FaJira, proficiency: 90, experience: "1+ years", projects: 20 },

  ];

  return (
    <div className="min-h-screen flex flex-col items-center mt-15 justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 py-10 px-4 relative overflow-hidden">

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-300 via-violet-300 to-purple-300 bg-clip-text text-transparent mb-4 tracking-tight">
          Skills & Expertise
        </h1>
        <p className="text-purple-200 text-lg max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences with passion and precision
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="max-w-full w-full relative z-10 ">
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-16 text-center relative z-10"
      >
        <motion.p
          className="text-xl text-purple-200 font-medium max-w-2xl mx-auto leading-relaxed"
          animate={{
            textShadow: [
              "0 0 20px rgba(168, 85, 247, 0.3)",
              "0 0 30px rgba(168, 85, 247, 0.5)",
              "0 0 20px rgba(168, 85, 247, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Like stars in the night sky, each skill illuminates the path to exceptional development! ✨
        </motion.p>
      </motion.div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
}