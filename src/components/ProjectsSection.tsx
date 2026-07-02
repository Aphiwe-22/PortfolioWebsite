import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Learning Management System (LMS)",
      description: "A full-stack web solution built with React, Node.js, and SQL to test university students readiness to use university applications and its techmologies. Features include user authentication, tests, gradebook , and resources recommendations to learn based on thei marks. Deployed with responsive design and optimized for performance.",
      technologies: ["React", "Node.js", "MySQL", "JWT"],
      githubUrl: "https://github.com/Aphiwe-22/EduGauge-",
      liveUrl: "#",
      image: "/Eduguage-logo.jpg"
    },
    {
      title: "Enterprise Network Design",
      description: "A full enterprise network for a medium-sized business with VLAN segmentation, inter-VLAN routing and access control lists.",
      technologies: ["Cisco Packet Tracer"],
      githubUrl: "https://github.com/Aphiwe-22/task-manager",
      liveUrl: "#",
      image: "/CicsoPacketTracer-logo.png"
    },
    {
      title: "INMED South Africa Website",
      description: "A responsive website for a non-profit humanitarian development organisationusing Typescript and React with a Firestore database.",
      technologies: ["TypeScript", "React", "Firebase"],
      githubUrl: "https://github.com/Aphiwe-22/weather-dashboard",
      liveUrl: "#",
      image: "/inmed-logo.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
               {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-card flex items-center justify-center overflow-hidden">
                {project.image && (project.image.startsWith('/') || project.image.startsWith('http')) ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('flex', 'items-center', 'justify-center');
                        parent.innerHTML = '<span class="text-6xl">📚</span>';
                      }
                    }}
                  />
                ) : (
                  <span className="text-6xl">{project.image || "📁"}</span>
                )}
              </div>
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    asChild
                    size="sm"
                    className="flex-1"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild
            variant="outline" 
            size="lg"
          >
            <a href="https://github.com/Aphiwe-22" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;