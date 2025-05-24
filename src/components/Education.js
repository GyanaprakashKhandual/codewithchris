import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool, FaLaptopCode, FaChartLine} from 'react-icons/fa';
import { SiGoogle, SiUdemy } from 'react-icons/si';

const educationData = [
  // Formal Education
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
  // Future Education
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
  // Certifications
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
    icon: <SiGoogle className='w-6 h-6'/>,
    type: 'certification'
  }
];

const EducationSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-9xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12 text-gray-800"
      >
        My <span className="text-lime-600">Education Journey</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              edu.type === 'professional' ? 'bg-gradient-to-br from-lime-500/10 to-emerald-500/10 border-lime-400/30' :
              edu.type === 'future' ? 'bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-purple-400/30' :
              edu.type === 'certification' ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-400/30' :
              'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300/30'
            } border`}
          >
            {/* Decorative corner */}
            <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-32 h-32 rotate-45 transform origin-bottom-left ${
                edu.type === 'professional' ? 'bg-lime-500/20' :
                edu.type === 'future' ? 'bg-purple-500/20' :
                edu.type === 'certification' ? 'bg-blue-500/20' :
                'bg-gray-400/20'
              }`} />
            </div>

            <div className="relative z-10 flex items-start gap-4">
              <div className={`p-3 rounded-lg ${
                edu.type === 'professional' ? 'bg-lime-500/20 text-lime-600' :
                edu.type === 'future' ? 'bg-purple-500/20 text-purple-600' :
                edu.type === 'certification' ? 'bg-blue-500/20 text-blue-600' :
                'bg-gray-500/20 text-gray-600'
              }`}>
                {edu.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                <p className={`mt-1 text-sm ${
                  edu.type === 'professional' ? 'text-lime-700' :
                  edu.type === 'future' ? 'text-purple-700' :
                  edu.type === 'certification' ? 'text-blue-700' :
                  'text-gray-700'
                }`}>{edu.institution}</p>
                
                {edu.board && (
                  <p className="text-xs text-gray-500 mt-1">{edu.board}</p>
                )}
                
                <div className={`mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  edu.type === 'professional' ? 'bg-lime-100 text-lime-800' :
                  edu.type === 'future' ? 'bg-purple-100 text-purple-800' :
                  edu.type === 'certification' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {edu.year}
                </div>
                
                {edu.type === 'future' && (
                  <span className="ml-2 text-xs text-purple-600">(Planned)</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;