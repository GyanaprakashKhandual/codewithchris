import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, 
  FiX,
  FiChevronDown,
  FiChevronRight,
  FiCpu,
  FiCode,
  FiLayers,
  FiTerminal
} from 'react-icons/fi';
import { 
  SiCypress,
  SiSelenium,
  SiAppium,
  SiPlaywright,
  SiPuppeteer,
  SiNightwatch,
  SiJest,
  SiTestinglibrary,
  SiWebdriverio,
  SiMocha
} from 'react-icons/si';

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300
};

const fadeIn = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const testingFrameworks = [
    { name: 'Cypress', icon: <SiTestinglibrary className="text-cyan-500" />, color: 'bg-cyan-500/10' },
    { name: 'Selenium', icon: <SiTestinglibrary className="text-emerald-500" />, color: 'bg-emerald-500/10' },
    { name: 'Appium', icon: <SiTestinglibrary className="text-blue-500" />, color: 'bg-blue-500/10' },
    { name: 'Playwright', icon: <SiTestinglibrary className="text-purple-500" />, color: 'bg-purple-500/10' },
    { name: 'Puppeteer', icon: <SiTestinglibrary className="text-green-500" />, color: 'bg-green-500/10' },
    { name: 'Nightwatch.js', icon: <SiTestinglibrary className="text-yellow-500" />, color: 'bg-yellow-500/10' },
    { name: 'XCUITest', icon: <FiTerminal className="text-red-500" />, color: 'bg-red-500/10' },
    { name: 'Jest', icon: <SiJest className="text-red-400" />, color: 'bg-red-400/10' },
    { name: 'Testing Library', icon: <SiTestinglibrary className="text-blue-400" />, color: 'bg-blue-400/10' },
    { name: 'WebdriverIO', icon: <SiWebdriverio className="text-orange-500" />, color: 'bg-orange-500/10' },
    { name: 'Mocha', icon: <SiMocha className="text-amber-600" />, color: 'bg-amber-600/10' },
  ];

  const categories = [
    {
      name: 'End-to-End',
      icon: <FiLayers className="text-indigo-400" />,
      frameworks: ['Cypress', 'Selenium', 'Playwright', 'Nightwatch.js', 'WebdriverIO']
    },
    {
      name: 'Unit Testing',
      icon: <FiCode className="text-blue-400" />,
      frameworks: ['Jest', 'Mocha', 'Testing Library']
    },
    {
      name: 'Mobile',
      icon: <FiCpu className="text-green-400" />,
      frameworks: ['Appium', 'XCUITest']
    },
    {
      name: 'All Frameworks',
      icon: <FiTerminal className="text-purple-400" />,
      frameworks: testingFrameworks.map(f => f.name)
    }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Sidebar */}
      <motion.div
        initial={{ width: isOpen ? 280 : 80 }}
        animate={{ width: isOpen ? 280 : 80 }}
        transition={spring}
        className={`relative bg-gray-800/80 backdrop-blur-lg text-white flex flex-col border-r border-gray-700/50 shadow-2xl ${isOpen ? 'w-72' : 'w-20'} transition-all duration-300`}
      >
        {/* Sidebar Header */}
        <motion.div 
          className="p-4 flex items-center justify-between border-b border-gray-700/50"
          layout
        >
          {isOpen && (
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              Testing Tools
            </motion.h1>
          )}
          <motion.button
            onClick={toggleSidebar}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-all shadow-md"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </motion.button>
        </motion.div>

        {/* Sidebar Content */}
        <div className="overflow-y-auto flex-1 py-2 px-1">
          {categories.map((category) => (
            <div key={category.name} className="border-b border-gray-700/30">
              <motion.button
                onClick={() => toggleCategory(category.name)}
                whileHover={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
                className="w-full flex items-center p-3 rounded-lg mx-1 transition-colors"
                layout
              >
                <motion.span 
                  className="mr-3"
                  whileHover={{ scale: 1.1 }}
                >
                  {category.icon}
                </motion.span>
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: 0.1 }}
                    className="flex-1 text-left"
                  >
                    {category.name}
                  </motion.span>
                )}
                {isOpen && (
                  <motion.span
                    animate={{ rotate: activeCategory === category.name ? 0 : -90 }}
                    transition={spring}
                  >
                    <FiChevronDown />
                  </motion.span>
                )}
              </motion.button>

              <AnimatePresence>
                {activeCategory === category.name && isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pl-10 py-2 space-y-1">
                      {testingFrameworks
                        .filter(f => category.frameworks.includes(f.name))
                        .map((framework) => (
                          <motion.div
                            key={framework.name}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={fadeIn}
                            whileHover={{ 
                              scale: 1.02,
                              backgroundColor: 'rgba(55, 65, 81, 0.7)'
                            }}
                            whileTap={{ scale: 0.98 }}
                            onHoverStart={() => setHoveredItem(framework.name)}
                            onHoverEnd={() => setHoveredItem(null)}
                            className={`flex items-center p-2 rounded-lg mx-1 cursor-pointer transition-all ${framework.color} ${hoveredItem === framework.name ? 'ring-1 ring-white/20' : ''}`}
                          >
                            <motion.span 
                              className="mr-2"
                              animate={{
                                scale: hoveredItem === framework.name ? 1.2 : 1
                              }}
                              transition={spring}
                            >
                              {framework.icon}
                            </motion.span>
                            <motion.span
                              animate={{
                                x: hoveredItem === framework.name ? 5 : 0
                              }}
                              transition={spring}
                            >
                              {framework.name}
                            </motion.span>
                            {hoveredItem === framework.name && (
                              <motion.span 
                                className="ml-auto text-xs text-gray-400"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                Click
                              </motion.span>
                            )}
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Sidebar Footer */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-4 text-sm text-center text-gray-400 border-t border-gray-700/50"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-full"
            >
              Testing Frameworks
            </motion.div>
          </motion.div>
        )}

        {/* Glow Effect */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5 }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 20% 50%, rgba(56, 182, 255, 0.3) 0%, transparent 50%)'
            }}
          />
        )}
      </motion.div>

      {/* Main Content */}
      
    </div>
  );
};

export default Sidebar;