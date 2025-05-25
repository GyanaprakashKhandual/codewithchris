

import { motion } from 'framer-motion';
import { FaHome, FaLaptopCode, FaClock, FaCheckCircle, FaRegCalendarAlt } from 'react-icons/fa';
import { IoMdRocket, IoMdTime } from 'react-icons/io';
import { MdWorkOutline } from 'react-icons/md';

const WorkExperienceCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative max-w-9xl mx-auto group"
    >
      {/* Floating background element */}
      <div className="absolute -inset-3 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      {/* Main card */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800  overflow-hidden border border-gray-700/50 shadow-2xl">
        {/* Decorative header with additional elements */}
        <div className="relative bg-gradient-to-r from-fuchsia-600 to-purple-600 h-2 w-full">
          {/* Top-right corner elements */}
          <div className="absolute right-45 top-25 flex items-center gap-3 h-full">
            <div className="flex items-center gap-1 text-5xl text-white/90">
              <FaRegCalendarAlt className="text-5xl" />
              <span>Full-time</span>
            </div>
            <div className="flex items-center gap-1 text-5xl text-white/90">
              <MdWorkOutline className="text-5xl" />
              <span>QA</span>
            </div>
            <div className="flex items-center gap-1 text-5xl text-white/90">
              <IoMdTime className="text-5xl" />
              <span>Current</span>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10">
          {/* Header section */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Company logo/icon */}
            <div className="relative">
              <div className="absolute -inset-2 bg-fuchsia-500/20 rounded-xl blur-md" />
              <div className="relative bg-gray-800 p-5 rounded-xl border border-gray-700/50 shadow-inner flex items-center justify-center">
                <FaLaptopCode className="text-4xl text-fuchsia-400" />
              </div>
            </div>

            {/* Company info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-white">Avidus Interactive</h2>
                <span className="px-3 py-1 bg-fuchsia-900/50 text-fuchsia-300 text-xs font-medium rounded-full border border-fuchsia-800/50">
                  Remote
                </span>
              </div>
              <p className="text-lg text-gray-300 mb-3">QA Analyst</p>

              {/* Duration */}
              <div className="flex items-center gap-3 text-gray-400">
                <FaClock className="text-yellow-400/80" />
                <span className="text-sm">
                  Feb 2024 - Present · <span className="text-white/90">Full-time</span>
                </span>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <IoMdRocket className="text-fuchsia-400" />
              <span>Key Responsibilities</span>
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Test and ensure quality of modern web/mobile applications",
                "Collaborate with devs to create comprehensive test plans",
                "Track and report bugs with detailed documentation",
                "Automate test cases using Selenium and Cypress",
                "Improve QA workflows through process innovation",
                "Conduct regression testing for production releases"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2 text-gray-300 text-sm"
                >
                  <FaCheckCircle className="text-fuchsia-400/80 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4 border-t border-gray-700/50">
            <div className="flex items-center gap-3 text-gray-400">
              <FaHome className="text-cyan-400/80" />
              <span className="text-sm">Remote - Work From Home</span>
            </div>

            <div className="flex gap-2">
              {['QA Testing', 'Automation', 'Selenium', 'Cypress', 'Web Apps'].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-full border border-gray-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperienceCard;