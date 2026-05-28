import { useScrollSpy } from './hooks/useScrollSpy';
import { navItems, skills, projects, experiences } from './data/portfolio';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const activeSection = useScrollSpy(navItems.map((item) => item.id));

  return (
    <div className="min-h-screen bg-slate-900 text-white antialiased">
      <Navbar navItems={navItems} activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experiences={experiences} />
      <ContactSection />
      <Footer />
    </div>
  );
}
