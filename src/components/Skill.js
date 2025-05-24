'use client';

import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiBootstrap, SiTailwindcss,
  SiFigma, SiReact, SiNextdotjs, SiGit, SiGithub, SiNodedotjs,
  SiExpress, SiMysql, SiMongodb, SiCypress, SiSelenium, SiAppium,
  SiTestinglibrary, SiPostman, SiMongodb as SiMongodbPlayground, SiApachemaven
} from 'react-icons/si';

import { BadgeCheck } from 'lucide-react';

function SkillCard({ name, Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.08 }}
      className="flex flex-col items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl w-40 h-40 transition-all duration-500"
    >
      <div className="bg-white/20 p-4 rounded-full mb-4 shadow-inner">
        <Icon className="w-10 h-10 text-cyan-300" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold tracking-wide">{name}</span>
        <BadgeCheck size={18} className="text-green-300" />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const skills = [
    { name: 'HTML', Icon: SiHtml5 },
    { name: 'CSS', Icon: SiCss3 },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'Bootstrap', Icon: SiBootstrap },
    { name: 'Tailwind CSS', Icon: SiTailwindcss },
    { name: 'Figma', Icon: SiFigma },
    { name: 'React.js', Icon: SiReact },
    { name: 'Next.js', Icon: SiNextdotjs },
    { name: 'Git', Icon: SiGit },
    { name: 'GitHub', Icon: SiGithub },
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'Express.js', Icon: SiExpress },
    { name: 'MySQL', Icon: SiMysql },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'Cypress', Icon: SiCypress },
    { name: 'Selenium', Icon: SiSelenium },
    { name: 'Appium', Icon: SiAppium },
    { name: 'Playwright', Icon: SiTestinglibrary },
    { name: 'Manual Testing', Icon: SiTestinglibrary },
    { name: 'Postman', Icon: SiPostman },
    { name: 'Rest Assured', Icon: SiTestinglibrary },
    { name: 'JMeter', Icon: SiTestinglibrary },
    { name: 'K6', Icon: SiTestinglibrary },
    { name: 'DBUnit', Icon: SiTestinglibrary },
    { name: 'MongoDB Playground', Icon: SiMongodbPlayground },
    { name: 'MS Office', Icon: SiTestinglibrary },
    { name: 'Java', Icon: SiApachemaven }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-900 via-indigo-800 to-purple-900 py-10">
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} Icon={skill.Icon} />
        ))}
      </div>
    </div>
  );
}
