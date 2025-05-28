import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa';
import {
  FiCode,
  FiDatabase,
  FiGithub,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiCheckCircle
} from 'react-icons/fi';


const roles = [
  {
    title: "Full Stack Developer",
    icon: <FiCode className="text-2xl" />,
    description: "Building responsive web applications with MERN stack and AI integration"
  },
  {
    title: "Data Analyst",
    icon: <FiDatabase className="text-2xl" />,
    description: "Transforming raw data into actionable insights with Python"
  },
  {
    title: "QA Engineer",
    icon: <FiCheckCircle className="text-2xl" />,
    description: "Ensuring software quality through automated and manual testing"
  },
];

const projectStats = [
  { count: "1+", label: "MERN Stack Projects" },
  { count: "4+", label: "Full Stack Projects" },
  { count: "8+", label: "Frontend Projects" },
  { count: "10+", label: "Testing Projects" },
  { count: "10+", label: "Automation Frameworks" },
  { count: "5+", label: "Backend Test Projects"},
  { count: "6+", label: "Valnila Web Projects"},
  { count: "2+", label: "Data Analytics Projects"}
];
const socialLinks = [
  { icon: <FiGithub />, url: "https://github.com/yourusername" , text: "GitHub" },
  { icon: <FiFacebook />, url: "https://facebook.com/yourprofile", text: "Facebook" },
  { icon: <FiInstagram />, url: "https://instagram.com/yourprofile", text: "Instagram" },
  { icon: <FiLinkedin />, url: "https://linkedin.com/in/yourprofile", text: "LinkedIn" },
  { icon: <FiMail />, url: "mailto:your.email@example.com", text: "Mail" },
  { icon: <FaWhatsapp />, url: "https://wa.me/yourphonenumber", text: "Whatsapp" },
  { icon: <FaYoutube/>, url: "https://youtube.com/yourchannel", text: "YouTube" },
  { icon: <FaEnvelope/>, url: 'https://codewithchris.vercel.app/contact', text: "Contact"}
];


export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white overflow-hidden px-4 py-12 relative">
      
      {/* Wrap three main sections in a flex container */}
      <div className="flex flex-col lg:flex-row items-start gap-6 justify-between w-full">

        {/* Project Stats - Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:block bg-white/5 backdrop-blur-sm rounded-xl p-6 mt-4 border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Project Stats</h3>
          <div className="space-y-4">
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  {stat.count}
                </span>
                <span className="text-sm text-white/70">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Center Hero Section - Hi I am Chris */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[60%] text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="w-52 h-52 mt-15 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 mx-auto mb-8 overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center text-4xl">👨‍💻</div>
          </motion.div>

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
          >
            Hi, I'm <span className="text-white">Chris</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl text-white/80 mb-10 mx-auto"
          >
            Building digital solutions that solve real-world problems with the quality and enhancing with AI
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex justify-center flex-wrap gap-4"
          >
            {roles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 + i * 0.15, type: "spring" }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all h-full w-[290px]"
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
           {/* Social Links Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.5, duration: 0.8 }}
  className="flex justify-center gap-3 m-0.5"
>
  {socialLinks.map((social, idx) => (
    <motion.a
      key={idx}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="text-white hover:text-amber-50 transition-all text-2xl p-3 rounded-lg bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 flex items-center justify-center border border-white/20 hover:border-white/30 shadow-sm hover:shadow-lg backdrop-blur-sm"
    >
      <span className="flex items-center gap-2">
        <span className="text-xl">{social.icon}</span>
        {social.text && <span className="text-sm font-medium">{social.text}</span>}
      </span>
    </motion.a>
  ))}
</motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Project Banner Card */}
{/* Right Side - Project Banner Card */}
<div className="w-full lg:w-[23%] mt-10 lg:mt-0">
  <motion.div 
    className="w-[350px] h-[calc(100vh-68px)] mt-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex flex-col overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {/* Header */}
    <motion.div 
      className="h-[180px] bg-gradient-to-r from-white/10 to-white/5 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      {/* Grid pattern overlay with subtle animation */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"
        animate={{
          backgroundPositionX: [0, -20],
          backgroundPositionY: [0, -20],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Testing icon and title */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.div 
          className="w-12 h-12 mb-3 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10"
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        </motion.div>
        <motion.h2 
          className="text-2xl font-bold text-white mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          CaffeeTest
        </motion.h2>
        <motion.p 
          className="text-sm text-white/80 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Help to increase your speed in testing
        </motion.p>
      </motion.div>
      
      {/* Status pill with pulse animation */}
      <motion.div 
        className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white flex items-center border border-white/10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.span 
          className="w-2 h-2 rounded-full bg-emerald-400/80 mr-2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        Active Sprint
      </motion.div>
    </motion.div>

    {/* Content area */}
    <motion.div 
      className="flex-1 p-5 flex flex-col overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      {/* Quick stats with staggered animation */}
      <motion.div 
        className="grid grid-cols-3 gap-3 mb-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.1
            }
          }
        }}
      >
        {[
          { value: "24", label: "Test Cases" },
          { value: "5", label: "In Progress" },
          { value: "18", label: "Passed" }
        ].map((stat, index) => (
          <motion.div 
            key={index}
            className="bg-white/5 rounded-lg p-3 text-center border border-white/5"
            variants={{
              hidden: { y: 10, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-lg font-bold text-white">{stat.value}</div>
            <div className="text-xs text-white/70">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent activity with list animation */}
      <motion.div className="mb-5">
        <motion.h3 
          className="text-sm font-semibold text-white/70 mb-2 flex items-center"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <svg className="w-4 h-4 mr-1.5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          RECENT ACTIVITY
        </motion.h3>
        <motion.div className="space-y-3">
          {[
            {action: 'Test case updated', by: 'Alex D.', time: '2h ago', status: 'updated'},
            {action: 'Bug reported', by: 'Sam R.', time: '4h ago', status: 'bug'},
            {action: 'Test passed', by: 'Jordan M.', time: '1d ago', status: 'passed'}
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className={`mt-1 w-2.5 h-2.5 rounded-full mr-3 flex-shrink-0 ${
                  item.status === 'passed' ? 'bg-emerald-400/80' : 
                  item.status === 'bug' ? 'bg-rose-400/80' : 'bg-blue-400/80'
                }`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: index * 0.5
                }}
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-white">{item.action}</div>
                <div className="text-xs text-white/60">by {item.by} · {item.time}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Test case categories with stagger animation */}
      <motion.div className="mb-5">
        <motion.h3 
          className="text-sm font-semibold text-white/70 mb-2 flex items-center"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <svg className="w-4 h-4 mr-1.5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          CATEGORIES
        </motion.h3>
        <motion.div 
          className="flex flex-wrap gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.9,
                staggerChildren: 0.05
              }
            }
          }}
        >
          {['Regression', 'Smoke', 'Integration', 'UI', 'Security', 'Performance'].map((category, index) => (
            <motion.span 
              key={category} 
              className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-lg transition cursor-pointer border border-white/5"
              variants={{
                hidden: { y: 10, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ 
                y: -2,
                backgroundColor: "rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Upcoming tests with stagger animation */}
      <motion.div className="mb-5">
        <motion.h3 
          className="text-sm font-semibold text-white/70 mb-2 flex items-center"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <svg className="w-4 h-4 mr-1.5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          UPCOMING TESTS
        </motion.h3>
        <motion.div 
          className="space-y-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 1.2,
                staggerChildren: 0.1
              }
            }
          }}
        >
          {[
            {name: 'Checkout flow', date: 'Today', priority: 'High'},
            {name: 'Mobile responsive', date: 'Tomorrow', priority: 'Medium'},
            {name: 'API validation', date: 'Fri', priority: 'Low'}
          ].map((test, index) => (
            <motion.div 
              key={index} 
              className="flex items-center justify-between p-2.5 bg-white/5 rounded-lg border border-white/5"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transition: { duration: 0.2 }
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div>
                <div className="text-sm font-medium text-white">{test.name}</div>
                <div className="text-xs text-white/60">{test.date}</div>
              </div>
              <motion.span 
                className={`text-xs px-2 py-1 rounded-full ${
                  test.priority === 'High' ? 'bg-rose-400/20 text-rose-400/90' :
                  test.priority === 'Medium' ? 'bg-amber-400/20 text-amber-400/90' :
                  'bg-emerald-400/20 text-emerald-400/90'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {test.priority}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>

    {/* Footer with subtle animation */}
    <motion.div 
      className="border-t border-white/10 p-4 bg-white/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <motion.a
          href="https://caffetest.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white/90 hover:text-white flex items-center"
          whileHover={{ 
            x: 3,
            color: "rgba(255, 255, 255, 1)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          View App
        </motion.a>
        <motion.div 
          className="text-xs text-white/50"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          v2.4.1
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
</div>

      </div>
    </div>
  );
}
