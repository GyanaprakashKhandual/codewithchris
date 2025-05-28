import { motion } from 'framer-motion';
import { FaHome, FaLaptopCode, FaClock, FaCheckCircle, FaRegCalendarAlt } from 'react-icons/fa';
import { IoMdRocket, IoMdTime } from 'react-icons/io';
import { MdWorkOutline } from 'react-icons/md';

const WorkExperienceCard = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const hoverVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
      className="relative max-w-full mx-auto group mt-15 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800"
    >
      {/* Floating background element with gradient */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -inset-3 bg-gradient-to-br from-purple-600/20 via-violet-600/30 to-gray-900/20 rounded-3xl blur-xl -z-10"
      />

      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600/30 to-violet-500/20 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      {/* Main card */}
      <motion.div
        className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 overflow-hidden border border-gray-700/50"
      >
        {/* Decorative header with animated gradient */}
        <motion.div 
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="relative h-2 w-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 bg-[length:200%_100%]"
        >
          {/* Top-right corner elements */}
          <div className="absolute right-4 top-4 flex flex-wrap justify-end gap-3">
            {[
              { icon: <FaRegCalendarAlt className="text-lg" />, text: "Full-time" },
              { icon: <MdWorkOutline className="text-lg" />, text: "QA" },
              { icon: <IoMdTime className="text-lg" />, text: "Current" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex items-center gap-1 px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full border border-white/10 text-sm text-white/90"
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="p-6 md:p-8 lg:p-10">
          {/* Header section */}
          <motion.div 
            variants={hoverVariants}
            className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8"
          >
            {/* Company logo/icon with shine effect */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-fuchsia-500/30 to-purple-500/20 rounded-xl blur-md" />
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700/50 shadow-lg flex items-center justify-center group/icon">
                <FaLaptopCode className="text-4xl text-fuchsia-400 group-hover/icon:text-purple-300 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/icon:opacity-100 group-hover/icon:animate-[shine_1.5s] pointer-events-none" />
              </div>
            </div>

            {/* Company info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-fuchsia-200"
                >
                  Avidus Interactive
                </motion.h2>
                <motion.span 
                  variants={itemVariants}
                  className="px-3 py-1 bg-fuchsia-900/30 text-fuchsia-300 text-xs font-medium rounded-full border border-fuchsia-800/50 backdrop-blur-sm"
                >
                  Remote
                </motion.span>
              </div>
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-300 mb-3"
              >
                QA Analyst
              </motion.p>

              {/* Duration */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-3 text-gray-400"
              >
                <FaClock className="text-yellow-400/80" />
                <span className="text-sm md:text-base">
                  Feb 2024 - Present · <span className="text-white/90">Full-time</span>
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Responsibilities */}
          <div className="mb-8">
            <motion.h3 
              variants={itemVariants}
              className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center gap-2"
            >
              <IoMdRocket className="text-fuchsia-400 animate-[pulse_2s_infinite]" />
              <span>Key Responsibilities</span>
            </motion.h3>

            <motion.ul 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {[
                "Test and ensure quality of modern web/mobile applications",
                "Collaborate with devs to create comprehensive test plans",
                "Track and report bugs with detailed documentation",
                "Automate test cases using Selenium and Cypress",
                "Improve QA workflows through process innovation",
                "Conduct regression testing for production releases",
                "Perform cross-browser and cross-device testing",
                "Participate in agile development cycles"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-gray-300 text-sm md:text-base p-3 rounded-lg bg-gradient-to-r from-gray-900/50 to-purple-900/20 hover:to-purple-900/40 border border-gray-700/50 hover:border-fuchsia-700/50 transition-all duration-300"
                >
                  <FaCheckCircle className="text-fuchsia-400/80 mt-0.5 flex-shrink-0 animate-[ping_1.5s_ease-in-out_infinite]" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Footer */}
          <motion.div 
            variants={containerVariants}
            className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-gray-700/50"
          >
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3 text-gray-400"
            >
              <FaHome className="text-cyan-400/80" />
              <span className="text-sm md:text-base">Remote - Work From Home</span>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="flex flex-wrap gap-2"
            >
              {['Manual Testing', 'Automation', 'Load Testing', 'Stress Testing', 'Performace Testing', 'Functioanl Testing', 'UI Testing', 'API Testing', 'Web Apps', 'Agile', 'Jira', 'Zoho'].map((tag, i) => (
                <motion.span
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-full border border-gray-700/50 backdrop-blur-sm hover:bg-purple-900/50 hover:border-fuchsia-700/50 transition-all"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkExperienceCard;