import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/About';
import EducationSection from './components/Education';
import SkillsSection from './components/Skill';
import ProjectShowcaseCard from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import './App.css';
import Work from './components/Work';
import Guide from './components/Guide';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />

        <div className="pt-15">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/education" element={<EducationSection />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/guide" element={<Guide />} />

            <Route path="/projects" element={<ProjectShowcaseCard />} />
            <Route path="/work" element={<Work />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}