'use client';

import { motion } from 'framer-motion';
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
  FaRProject,             // R, Dplyr
  FaChartLine,            // Statistics, Probability, Chart JS
  FaPowerOff,             // Apache, NiFi, Delta Lake, JMeter
  FaProjectDiagram,       // TensorFlow, PyTorch, Neural networks, Computer Vision, NLP
  FaRobot,                // Generative AI, OpenAI/Anthropic APIs
  FaMicrochip,            // Web Sockets
  FaMemory,               // Caching strategies (Redis)
  FaServer,               // Query optimization
  FaCode,                 // Code-splitting, Bundle analyzers, Profiling
  FaFileExcel,            // Excel
  FaChartBar,             // Power BI, Dash
  FaBolt,                 // Kafka
  FaWind,                 // Airflow
  FaCube,                 // Kubernetes
  FaWrench,               // Terraform
  FaGlobeEurope,          // GDPR
  FaKey,                  // OAuth2/OpenID Connect
  FaHdd,                  // Databricks
  FaFire,                 // Apache Spark
  FaCogs,                 // SonarQube
  FaBug,                  // Manual Testing, Percy, Testim.io
  FaCheckCircle,          // Cypress
  FaDesktop,              // Selenium
  FaMobileAlt,            // Appium
  FaPaperPlane,           // Postman
  FaSlackHash,            // K6
  FaFigma,                // Figma

  FaJenkins,              // Next.js (closest available)
  FaNetworkWired,          // Three.js (closest available)
  FaSadCry,
  FaHubspot,
  FaAccessibleIcon,
  FaCodiepie,
  FaAndroid
} from 'react-icons/fa';

import { BadgeCheck } from 'lucide-react';

function SkillCard({ name, Icon }) {
  const colors = [
    'bg-gradient-to-br from-amber-200 to-yellow-300',
    'bg-gradient-to-br from-sky-300 to-blue-400',
    'bg-gradient-to-br from-emerald-300 to-teal-400',
    'bg-gradient-to-br from-rose-300 to-pink-400',
    'bg-gradient-to-br from-cyan-300 to-blue-300',
    'bg-gradient-to-br from-lime-300 to-green-400',
    'bg-gradient-to-br from-orange-300 to-red-300',
    'bg-gradient-to-br from-purple-300 to-indigo-400',
  ];

  const colorClass = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col items-center justify-center ${colorClass} border-2 border-white/30 text-gray-800 rounded-2xl p-6 shadow-lg w-40 h-40 transition-all duration-300`}
    >
      <div className="bg-white/50 p-3 rounded-full mb-3 shadow-md">
        <Icon className="w-8 h-8" style={{ color: '#2a5c8a' }} />
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm font-bold tracking-wide text-gray-800">{name}</span>
        <BadgeCheck size={16} className="text-blue-600" />
      </div>
    </motion.div>
  );
}
export default function SkillsSection() {
  const skills = [
    { name: 'HTML', Icon: FaHtml5, proficiency: 95, experience: '5+ years', projects: 42 },
    { name: 'CSS', Icon: FaCss3Alt },
    { name: 'Tailwind CSS', Icon: FaCss3Alt }, // No direct Tailwind icon
    { name: 'Framer Motion', Icon: FaReact },
    { name: 'GSAP', Icon: FaJs },
    { name: 'Figma', Icon: FaFigma },
    { name: 'JavaScript', Icon: FaJs },
    { name: 'TypeScript', Icon: FaJs }, // No direct TS icon
    { name: 'React JS', Icon: FaReact },
    { name: 'Next JS', Icon: FaJenkins }, // No direct Next icon
    { name: 'Electron JS', Icon: FaJs },
    { name: 'Angular JS', Icon: FaJs }, // No direct Angular icon
    { name: 'Adobe Photoshop', Icon: FaAccessibleIcon },
    { name: 'Three JS', Icon: FaNetworkWired },
    { name: 'Node JS', Icon: FaNodeJs },
    { name: 'Nest JS', Icon: FaNodeJs },
    { name: 'Express JS', Icon: FaNodeJs },
    { name: 'PostgreSQL', Icon: FaDatabase },
    { name: 'MySQL', Icon: FaDatabase },
    { name: 'MongoDB', Icon: FaDatabase },
    { name: 'RESTful APIs', Icon: FaPaperPlane },
    { name: 'Vue JS', Icon: FaVuejs },
    { name: 'TensorFlow Serving', Icon: FaProjectDiagram },
    { name: 'Torch Serve', Icon: FaProjectDiagram },
    { name: 'BentoML', Icon: FaPython },
    { name: 'FastAPI + Pydantic', Icon: FaPython },
    { name: 'AWS SageMaker', Icon: FaAws },
    { name: 'OpenAI/Anthropic APIs', Icon: FaRobot },
    { name: 'Hugging Face', Icon: FaHubspot },
    { name: 'Airflow', Icon: FaWind },
    { name: 'Prefect', Icon: FaPython },
    { name: 'Kafka', Icon: FaBolt },
    { name: 'NiFi', Icon: FaPowerOff },
    { name: 'Generative AI APIs', Icon: FaRobot },
    { name: 'Code-splitting', Icon: FaCode },
    { name: 'Bundle analyzers', Icon: FaCode },
    { name: 'Profiling', Icon: FaCode },
    { name: 'Caching strategies', Icon: FaMemory },
    { name: 'Query optimization', Icon: FaServer },
    { name: 'Web Sockets', Icon: FaMicrochip },
    { name: 'Docker', Icon: FaDocker },
    { name: 'Kubernetes', Icon: FaCube },
    { name: 'AWS', Icon: FaAws },
    { name: 'Azure', Icon: FaMicrosoft },
    { name: 'Terraform', Icon: FaWrench },
    { name: 'Git', Icon: FaGitAlt },
    { name: 'Github', Icon: FaGithub },
    { name: 'Gitlab', Icon: FaGitlab },
    { name: 'OAuth2/OpenID Connect', Icon: FaKey },
    { name: 'JWT, RBAC, ABAC', Icon: FaLock },
    { name: 'OWASP Top 10', Icon: FaShieldAlt },
    { name: 'VPC segmentation', Icon: FaAws },
    { name: 'Secret management', Icon: FaLock },
    { name: 'GDPR', Icon: FaGlobeEurope },
    { name: 'Python', Icon: FaPython },
    { name: 'R', Icon: FaRProject },
    { name: 'Bash', Icon: FaTerminal },
    { name: 'Scala', Icon: FaSadCry },
    { name: 'Pandas', Icon: FaPython },
    { name: 'Polars', Icon: FaPython },
    { name: 'Dplyr', Icon: FaRProject },
    { name: 'Excel', Icon: FaFileExcel },
    { name: 'DuckDB', Icon: FaDatabase },
    { name: 'PyTorch', Icon: FaProjectDiagram },
    { name: 'Statsmodels', Icon: FaPython },
    { name: 'Scikit-learn', Icon: FaPython },
    { name: 'Seaborn', Icon: FaPython },
    { name: 'Power BI', Icon: FaChartBar },
    { name: 'Dash', Icon: FaChartBar },
    { name: 'Statistics', Icon: FaChartLine },
    { name: 'Probability', Icon: FaChartLine },
    { name: 'Neural networks', Icon: FaProjectDiagram },
    { name: 'Computer Vision', Icon: FaProjectDiagram },
    { name: 'NLP', Icon: FaProjectDiagram },
    { name: 'Apache Spark', Icon: FaFire },
    { name: 'Databricks', Icon: FaHdd },
    { name: 'Versioning', Icon: FaGitAlt },
    { name: 'Delta Lake', Icon: FaPowerOff },
    { name: 'Access control', Icon: FaShieldAlt },
    { name: 'Chart JS', Icon: FaChartLine },
    { name: 'Manual Testing', Icon: FaBug },
    { name: 'Cypress', Icon: FaCheckCircle },
    { name: 'Selenium', Icon: FaDesktop },
    { name: 'Playwright', Icon: FaMicrosoft },
    { name: 'Appium', Icon: FaMobileAlt },
    { name: 'Postman', Icon: FaPaperPlane },
    { name: 'Rest Assured', Icon: FaJava },
    { name: 'JMeter', Icon: FaPowerOff },
    { name: 'K6', Icon: FaSlackHash },
    { name: 'JUnit, TestNG', Icon: FaJava },
    { name: 'Chai, Mocha', Icon: FaJs },
    { name: 'SonarQube', Icon: FaCogs },
    { name: 'OWASP TOP 10', Icon: FaShieldAlt },
    { name: 'Percy', Icon: FaBug },
    { name: 'Testim.io', Icon: FaBug },
    { name: 'Generative AI', Icon: FaRobot },
    { name: 'Faker', Icon: FaJs },
    { name: 'WireMock', Icon: FaJs },
    { name: 'Allure', Icon: FaJs },
    { name: 'CafeeTest', Icon: FaJs },
    { name: 'Espresso', Icon: FaJs },
    { name: 'XCUITest', Icon: FaJs },
    { name: 'Visual Studio Code', Icon: FaCodiepie },
    { name: 'Android Studio', Icon: FaAndroid }
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-200 py-10 px-4">

      <div className="max-w-9xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {skills.map((skill, index) => {
            // Add skill metadata (you should replace these with your actual data)
            const skillMetadata = {
              proficiency: Math.floor(Math.random() * 30) + 70, // Random between 70-100%
              experience: `${Math.floor(Math.random() * 5) + 1}+ years`, // Random 1-6 years
              projects: Math.floor(Math.random() * 10) + 3 // Random 3-12 projects
            };

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="relative group"
              >
                <SkillCard name={skill.name} Icon={skill.Icon} />

                {/* Hover Tooltip */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl w-48 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-gray-800 text-center mb-2">{skill.name}</h3>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Proficiency</span>
                          <span>{skillMetadata.proficiency}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${skillMetadata.proficiency}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Experience</span>
                        <span>{skillMetadata.experience}</span>
                      </div>

                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Projects</span>
                        <span>{skillMetadata.projects}+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 text-center"
      >
        <p className="text-lg text-blue-800 font-medium">
          Like a day at the beach, I've got all the tools for a perfect development experience! ☀️
        </p>
      </motion.div>
    </div>
  )
};