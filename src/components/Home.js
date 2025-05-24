import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaEnvelope, 
  FaLinkedin, 
  FaFileDownload,
  FaInstagram,
  FaFacebook,
  FaCode
} from 'react-icons/fa';
import { 
  FiCode, 
  FiDatabase, 
  FiCpu, 
  FiShield,
  FiCheckCircle
} from 'react-icons/fi';

const roles = [
  {
    title: "Full Stack Developer",
    icon: <FiCode className="text-2xl" />,
    description: "Building responsive web applications with React, Node, and modern frameworks"
  },
  {
    title: "Data Analyst",
    icon: <FiDatabase className="text-2xl" />,
    description: "Transforming raw data into actionable insights with Python and SQL"
  },
  {
    title: "QA Engineer",
    icon: <FiCheckCircle className="text-2xl" />,
    description: "Ensuring software quality through automated and manual testing"
  },
  {
    title: "AI/ML Integrator",
    icon: <FiCpu className="text-2xl" />,
    description: "Implementing machine learning models in production environments"
  },
  {
    title: "Cyber Security",
    icon: <FiShield className="text-2xl" />,
    description: "Securing applications and infrastructure from potential threats"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 flex items-center justify-center text-white overflow-hidden px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-6xl"
      >
        {/* Profile Image Placeholder */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 mx-auto mb-8 overflow-hidden"
        >
          {/* Replace with your actual image */}
          <div className="w-full h-full flex items-center justify-center text-4xl">👨‍💻</div>
        </motion.div>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
        >
          Hi, I'm <span className="text-white">Chris</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xl text-white/80 mb-10 mx-auto"
        >
          Building digital solutions that solve real-world problems with maintaining the quality and integreated with AI 
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
        >
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + i * 0.15, type: "spring" }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all h-full"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-blue-500">
                  {role.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{role.title}</h3>
              <p className="text-white/70 text-xs">{role.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          {/* Primary Actions */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#hire"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 font-medium transition-all shadow-lg"
          >
            <span>Hire Me</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all shadow-lg"
          >
            <FaEnvelope className="text-lg" />
            <span>Contact</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all shadow-lg backdrop-blur-sm"
          >
            <FaFileDownload className="text-lg" />
            <span>View CV</span>
          </motion.a>

          {/* Social Links */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/codewithchrissii"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-300 via-purple-400 to-violet-5/10 hover:bg-white/20 transition-all shadow-lg backdrop-blur-sm"
          >
            <FaGithub className="text-lg" />
            <span>Github</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-300 via-rose-400 to-red-300/10 hover:bg-white/20 transition-all shadow-lg backdrop-blur-sm"
          >
            <FaLinkedin className="text-lg" />
            <span>Linked In</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-200 via-teal-300 to-cyan-400/10 hover:bg-white/20 transition-all shadow-lg backdrop-blur-sm"
          >
            <FaInstagram className="text-lg" />
            <span>Instagram</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-200 via-fuchsia-300 to-indigo-300/10 hover:bg-white/20 transition-all shadow-lg backdrop-blur-sm"
          >
            <FaFacebook className="text-lg" />
            <span>Facebook</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-200 via-pink-300 to-rose-400/10 hover:bg-white/20 transition-all shadow-lg backdrop-blur-sm"
          >
            <FaCode className="text-lg" />
            <span>Leetcode</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}