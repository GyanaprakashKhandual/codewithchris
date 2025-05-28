import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import { SiGoogle, SiUdemy } from 'react-icons/si';

const educationData = [
  {
    degree: 'Quality Assurance Engineering',
    institution: 'Masai School',
    year: '2024 – 2025',
    icon: <FaLaptopCode className="w-6 h-6" />,
    type: 'professional'
  },
  {
    degree: 'Bachelor of Science in Physics (Hons)',
    institution: 'Utkal University',
    year: '2024',
    icon: <FaUniversity className="w-6 h-6" />,
    type: 'formal'
  },
  {
    degree: 'Senior Secondary Education',
    institution: 'Narasingha Choudhury Autonoumus College',
    board: 'CHSE Odisha',
    year: '2021',
    icon: <FaSchool className="w-6 h-6" />,
    type: 'formal'
  },
  {
    degree: 'Secondary Education',
    institution: 'Jajpur High School',
    board: 'BSE Odisha',
    year: '2019',
    icon: <FaSchool className="w-6 h-6" />,
    type: 'formal'
  },
  {
    degree: 'Master of Computer Applications',
    institution: 'IGNOU University',
    year: '2025 – 2027',
    icon: <FaGraduationCap className="w-6 h-6" />,
    type: 'future'
  },
  {
    degree: 'Master of Business and Adminstration',
    institution: 'IGNOU University',
    year: '2026 – 2028',
    icon: <FaChartLine className="w-6 h-6" />,
    type: 'future'
  },
  {
    degree: 'Cyber Security Professional',
    institution: 'Google Certification',
    year: '2025 – 2026',
    icon: <SiGoogle className="w-6 h-6" />,
    type: 'certification'
  },
  {
    degree: 'Data Science Specialization',
    institution: 'Udemy Certification',
    year: '2025 – 2026',
    icon: <SiUdemy className="w-6 h-6" />,
    type: 'certification'
  },
  {
    degree: 'AI and Machine Learning',
    institution: 'Google Certifications',
    year: '2025 - 2026',
    icon: <SiGoogle className='w-6 h-6' />,
    type: 'certification'
  }
];

const typeColors = {
  professional: {
    bg: 'bg-lime-500/10',
    border: 'border-lime-400/30',
    text: 'text-lime-300',
    badge: 'bg-lime-600 text-white'
  },
  future: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-400/30',
    text: 'text-purple-300',
    badge: 'bg-purple-600 text-white'
  },
  certification: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-400/30',
    text: 'text-blue-300',
    badge: 'bg-blue-600 text-white'
  },
  formal: {
    bg: 'bg-gray-700/30',
    border: 'border-gray-500/30',
    text: 'text-gray-300',
    badge: 'bg-gray-600 text-white'
  }
};

const EducationSection = () => {
  return (
    <div className="py-16 mt-8 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-14"
      >
        My <span className="text-lime-400">Education Journey</span>
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {educationData.map((edu, index) => {
          const style = typeColors[edu.type] || typeColors.formal;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative border ${style.border} rounded-2xl p-6 shadow-lg backdrop-blur-sm hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] ${style.bg}`}
            >
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rotate-45 transform origin-bottom-left bg-white/5" />
              </div>

              <div className="relative z-10 flex items-start gap-4">
                <div className={`p-4 rounded-xl shadow-inner ${style.badge}`}>
                  {edu.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{edu.degree}</h3>
                  <p className={`mt-1 text-sm ${style.text}`}>{edu.institution}</p>
                  {edu.board && <p className="text-xs text-gray-400 mt-1">{edu.board}</p>}
                  <div className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-medium ${style.badge}`}>
                    {edu.year}
                  </div>
                  {edu.type === 'future' && (
                    <span className="ml-2 text-xs text-purple-400">(Planned)</span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationSection;
