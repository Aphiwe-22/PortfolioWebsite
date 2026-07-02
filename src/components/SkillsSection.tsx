import { Card } from '@/components/ui/card';
import { 
  Coffee, // Java
  Code, // JavaScript
  Atom, // React
  Globe, // HTML/CSS
  Database, // SQL
  GitBranch,// Git
  Terminal, // Python
  Hash, // C#
  Cloud, // AWS
  Server,  // Azure
  Code2,  // C++
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      name: "Java",
      icon: Coffee,
      level: 75,
      description: "Spring Boot, OOP: Polymorphism, Inheritance, Classes (BlueJ)"
    },
    {
      name: "JavaScript",
      icon: Code,
      level: 85,
      description: "TypeScript, Node.js"
    },
    {
      name: "React",
      icon: Atom,
      level: 80,
      description: "Hooks, Context, Next.js"
    },
    {
      name: "HTML/CSS",
      icon: Globe,
      level: 95,
      description: "Responsive, Tailwind, Sass"
    },
    {
      name: "SQL",
      icon: Database,
      level: 75,
      description: "PostgreSQL, MySQL, MSSQL"
    },
    {
      name: "Git",
      icon: GitBranch,
      level: 85,
      description: "Version control, GitHub"
    },

      {
      name: "Python",
      icon: Terminal,
      level: 85,
      description: "Django, Data Structures"
    },

     {
      name: "C#",
      icon: Hash,
      level: 85,
      description: "NET Core, ASP.NET"
    },

     {
      name: "AWS",
      icon: Cloud,
      level: 55,
     
    },

    {
      name: "Azure",
      icon: Server,
      level: 60,
     
    },

       {
      name: "C++",
      icon: Code2,
      level: 70,
     
    },







  ];

  const additionalSkills = [
    "Application Developer", "Web Developer", "Software Developer", "Network Engineer", 
    "Mobile Application Developer", "RESTful APIs", "Microservices", "Docker", "AWS", 
    "Agile/Scrum", "Test-Driven Development", "CI/CD", "Linux", "Problem Solving", "Team Collaboration"
  ];

const coreCompetencies = [
    "Team player", "Self-motivated", "Time management", "Communication", "Problem-solving", "Attention to detail"
  ];


  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Main Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                {/* Skill Header */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>
                
                {/* Skill Level */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">
                      Proficiency
                    </span>
                    <span className="text-sm font-medium text-primary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <Card className="p-8 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
            Core Competencies
            </h3>
           
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/70 transition-colors"
              >
                {skill}
              </span>
            ))}

            
          </div>
          
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;