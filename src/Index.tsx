import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import ProjectsSection from '@/components/ProjectsSection';


const Index = () => {
  return (
   <div className="min-h-screen">
    
      <Navigation />
      <HeroSection />
      <AboutSection />
       <ResumeSection />
       <ProjectsSection />
    </div>
  );
};

export default Index;