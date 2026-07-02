import { Card } from '@/components/ui/card';
import { Code, Heart, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I believe in writing maintainable, readable code that follows best practices and industry standards."
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Technology is my passion, and I love staying up-to-date with the latest trends and innovations."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I enjoy tackling complex challenges and finding creative solutions to technical problems."
    }
  ];
  

  return (
    <section id="about" className="py-20 relative
    bg-section-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hey! I'm Celumusa, a passionate software developer with a love for creating 
                digital solutions that make a difference. My journey in technology began with 
                curiosity and has evolved into a fulfilling career where I get to solve problems 
                and build amazing applications every day.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in full-stack development with a strong foundation in JavaScript, TypeScript, Python, C#, and SQL. I'm always eager to learn new technologies and 
                collaborate with other developers to create exceptional user experiences.
              </p>

               <p className="text-lg text-muted-foreground leading-relaxed">
                 Deeply interested in data analytics, cybersecurity, and Artificial Intelligence which are areas
                 I believe are essential for creating secure, reliable, and impactful technology.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me designing graphics or out and about. From exploring new technologies to exploring new hobbies and goal.
              </p>
            </div>
          </div>

      {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-soft transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <highlight.icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;