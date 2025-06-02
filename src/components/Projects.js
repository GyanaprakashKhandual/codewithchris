import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaSearch, FaFilter } from 'react-icons/fa';
import { FileText, Wrench, ExternalLink } from 'lucide-react';

const projects = [
  {
    projectName: 'Manual Testing',
    techStack: 'Code Editor',
    type: 'MS Office',
    description: 'A comprehensive manual test report using Word and Excel.',
    projectLink: 'https://drive.google.com/drive/folders/1ZCGCKbvo-hdBo-i4y5BWnsiN-p1B9qds?usp=drive_link',
  },
  {
    projectName: 'Calculator',
    techStack: 'HTML CSS JS',
    type: 'Frontend',
    description: 'A simple animated calculator with stylish buttons.',
    projectLink: 'https://calculator-black-tau.vercel.app/',
  },
  {
    projectName: 'CaffeTest',
    techStack: 'Next And Express And MongoDB',
    type: 'Frontend And Backend',
    description: 'A full-stack app for managing bugs and test cases.',
    projectLink: 'https://caffetest.vercel.app/',
  },
  {
    projectName: 'Portfolio',
    techStack: 'Next.js',
    type: 'Frontend',
    description: 'My personal portfolio showcasing my skills and projects.',
    projectLink: 'https://codewithchris.vercel.app/',
  },
  {
    projectName: 'Code Editor',
    techStack: 'Manual Testing',
    type: 'Functional Testing',
    description: 'A detailed manual test report for a code editor application.',
    projectLink: 'https://drive.google.com/drive/folders/1ZCGCKbvo-hdBo-i4y5BWnsiN-p1B9qds?usp=drive_link',
  },
  {
    projectName: 'OrangeHRM',
    techStack: 'Cypress, JMeter',
    type: 'Automation Testing',
    description: 'An automation testing project using Cypress and JMeter.',
    projectLink: 'https://drive.google.com/drive/folders/1V2L_KY-4kjlyKEC-xQo72c2ro9BRye_S?usp=drive_link',
  },
  {
    projectName: 'E-Commerce Application',
    techStack: 'Selenium, K6, Rest Assured',
    type: 'Automation Testing',
    description: 'An Automation testing project for testing functional, load and APIs',
    projectLink: 'https://github.com/GyanaprakashKhandual/Pioneers-Wine'
  },
  {
    projectName: 'K6 Report Generator',
    techStack: 'HTML, CSS, Java Script',
    type: 'Frontend',
    description: 'A website who help to generate the test report from the test result of K6',
    projectLink: 'https://k6reportgenerator.vercel.app/'
  },
  {
    projectName: 'Bug Keeper',
    techStack: 'Next JS, Tailwind CSS, Framer Motion',
    type: 'Frontend',
    description: 'Help to store and visualize the bugs',
    projectLink: 'https://bugkepper.vercel.app/'
  },
  {
    projectName: 'SpaceX',
    techStack: 'Three.js',
    type: 'Frontend',
    description: 'A SpaceX website clone that displays information about SpaceX launches and missions.',
    projectLink: 'https://space-three-eosin.vercel.app/'
  }
];

const uniqueTypes = ['All', ...new Set(projects.map((p) => p.type))];
const uniqueTechs = ['All', ...new Set(projects.map((p) => p.techStack))];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

function ProjectShowcaseCard({ project, showTooltip, setHovered }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setHovered(project.projectName)}
      onMouseLeave={() => setHovered(null)}
      className="relative w-full h-full p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20 blur-md" />

      {showTooltip && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg border border-gray-700 shadow-xl z-50 w-72 text-center"
        >
          {project.description}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-3 h-3 bg-gray-900 rotate-45 border-r border-b border-gray-700" />
        </motion.div>
      )}

      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <motion.div 
            whileHover={{ rotate: 15 }}
            className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10"
          >
            <FaLaptopCode className="w-6 h-6 text-white" />
          </motion.div>
          <h2 className="text-xl font-bold text-white">
            {project.projectName}
          </h2>
        </div>

        <div className="flex-1 space-y-3 mb-4">
          <div className="flex items-center gap-2 text-white/80">
            <FileText size={16} className="text-blue-300" />
            <span className="text-sm">{project.techStack}</span>
          </div>

          <div className="flex items-center gap-2 text-white/80">
            <Wrench size={16} className="text-purple-300" />
            <span className="text-sm">{project.type}</span>
          </div>
        </div>

        {project.projectLink && (
          <motion.a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all"
          >
            <span>View Project</span>
            <ExternalLink size={16} className="text-pink-200" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectList() {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterTech, setFilterTech] = useState('All');
  const [hovered, setHovered] = useState(null);

  const filtered = projects.filter((p) => {
    const matchesName = p.projectName.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === 'All' || p.type === filterType;
    const matchesTech = filterTech === 'All' || p.techStack === filterTech;
    return matchesName && matchesType && matchesTech;
  });

  return (
    <div className="min-h-screen w-full mt-15 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200 mb-2">
            My Projects
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of my work showcasing different technologies and skills
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8"
        >
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
            <motion.input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              whileFocus={{ scale: 1.02 }}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-700 backdrop-blur-sm"
            />
          </div>
          
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <div className="relative flex-1 min-w-[180px]">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <motion.select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                whileHover={{ scale: 1.02 }}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800/50 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-700 backdrop-blur-sm"
              >
                                {uniqueTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </motion.select>
            </div>

            <div className="relative flex-1 min-w-[180px]">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <motion.select
                value={filterTech}
                onChange={(e) => setFilterTech(e.target.value)}
                whileHover={{ scale: 1.02 }}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800/50 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-700 backdrop-blur-sm"
              >
                {uniqueTechs.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </motion.select>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filtered.map((project) => (
              <ProjectShowcaseCard
                key={project.projectName}
                project={project}
                showTooltip={hovered === project.projectName}
                setHovered={setHovered}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
