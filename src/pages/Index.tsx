import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';


const Index = () => {
  return (
   <div className="min-h-screen">
    
      <Navigation />
      <HeroSection />
      <AboutSection />
       <ResumeSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />

    </div>
  );
};

export default Index;