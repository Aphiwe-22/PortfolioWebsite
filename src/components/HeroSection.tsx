import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden"
    style={{
        backgroundImage: 'url("/Grad.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundAttachment: 'fixed'
      }}
    
    >

       {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/80"></div>
     
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Celumusa Vilakazi
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 text-white font-light">
            Software Developer
          </p>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl text-white mx-auto leading-relaxed">
            Passionate about creating innovative solutions and building exceptional user experiences 
            with modern web technologies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow px-8 py-3"
            >
              Learn More About Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary/20 hover:border-primary/40 px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="p-2 rounded-full bg-card/20 hover:bg-card/40 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;