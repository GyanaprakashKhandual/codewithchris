// ProjectList.js
import { useState } from 'react';
import { motion } from 'framer-motion';
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
    techStack: 'Next And Express',
    type: 'Frontend And Backend',
    description: 'A full-stack app for managing bugs and test cases.',
    projectLink: 'https://caffetest.vercel.app/',
  },
];

const uniqueTypes = ['All', ...new Set(projects.map((p) => p.type))];
const uniqueTechs = ['All', ...new Set(projects.map((p) => p.techStack))];

function ProjectShowcaseCard({ project, showTooltip, setHovered }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setHovered(project.projectName)}
      onMouseLeave={() => setHovered(null)}
      className="relative w-full px-12  py-12 p-6 bg-gradient-to-r from-sky-300 via-orange-200 to-pink-300 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-gray-800"
    >
      {showTooltip && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 px-4 py-2 bg-white text-gray-700 text-sm rounded-lg border border-gray-200 shadow-lg z-50 w-72 text-center">
          {project.description}
        </div>
      )}

      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <FaLaptopCode className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">
            {project.projectName}
          </h2>
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <FileText size={16} className="text-blue-500" />
            <span className="text-sm">{project.techStack}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Wrench size={16} className="text-blue-500" />
            <span className="text-sm">{project.type}</span>
          </div>
        </div>

        {project.projectLink && (
          <motion.a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-300 via-purple-400 to-violet-500 text-gray-900 text-sm font-medium border border-blue-100 hover:bg-blue-100"
          >
            <span>View Project</span>
            <ExternalLink size={16} />
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
    <div className="min-h-screen w-full bg-gradient-to-r from-amber-100 via-orange-100 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
            />
          </div>
          
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <div className="relative flex-1 min-w-[180px]">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
              >
                {uniqueTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            
            <div className="relative flex-1 min-w-[180px]">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={filterTech}
                onChange={(e) => setFilterTech(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
              >
                {uniqueTechs.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-full py-12 text-center">
              <p className="text-gray-500 text-lg">No projects found matching your criteria</p>
            </div>
          ) : (
            filtered.map((p, idx) => (
              <ProjectShowcaseCard
                key={idx}
                project={p}
                showTooltip={hovered === p.projectName}
                setHovered={setHovered}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}