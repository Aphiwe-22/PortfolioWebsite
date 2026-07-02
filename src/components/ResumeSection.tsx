import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, GraduationCap, Briefcase, Calendar } from 'lucide-react';

const ResumeSection = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Information Technology",
      school: "North-West University / Noordwes-Universiteit",
      period: "2022 - 2025",
      description: "Graduated at the North West University, Vanderbijlpark Campus Specializing in Software development, Database systems, Networking, Operating Systems, Decision Support Systems, Artificial Intelligence, and modern IT practices."
    }
  ];

  const experience = [
    {
      position: "IT Intern",
      company: "Kyotech SA",
      period: "2026 - Present",
      description: "IT Intern supporting network support, technical troubleshooting, and ICT solutions delivery for clients across South Africa and Sub-Saharan Africa. Provide on-site and remote technical assistance, ensuring reliable client operations."
    },
    {
      position: "Graphic Designer",
      company: "Blackout Communications",
      period: "2023 - 2025",
      description: "Created unique visual solutions for campaign needs, demonstrating innovation and increasing engagement by 35%."
    },
   
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
  link.href = '/Celumusa\'s CV IT Graduate.pdf';  // Path to your PDF in public folder
  link.download = 'Celumusa-Vilakazi-CV.pdf';  // Download with this name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
    //alert("CV download feature would be implemented here with an actual PDF file.");
  };

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            My educational background and professional experience
          </p>
          
          <Button 
            onClick={handleDownloadCV}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF CV
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary/10 rounded-lg mr-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-soft transition-shadow duration-300">
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center text-primary font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <p className="text-lg text-muted-foreground font-medium">
                      {edu.school}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary/10 rounded-lg mr-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-soft transition-shadow duration-300">
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-foreground">
                      {exp.position}
                    </h4>
                    <div className="flex items-center text-primary font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <p className="text-lg text-muted-foreground font-medium">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;