import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zamabinda2173@gmail.com",
      href: "mailto:zamabinda2173@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Aphiwe-22",
      href: "https://github.com/Aphiwe-22"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Celumusa Vilakazi",
      href: "https://linkedin.com/in/celumusa-vilakazi"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+27 67 240 3706",
      href: "tel:+27 67 240 3706"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "South Africa, Gauteng ",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-section-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="p-4 shadow-card hover:shadow-soft transition-all duration-300">
                  <a 
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <contact.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">
                        {contact.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="lg:pl-8">
            <Card className="p-8 shadow-card bg-gradient-card">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Start a Project?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I'm currently available for freelance work and new opportunities. 
                    Let's discuss how we can work together to bring your ideas to life.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    asChild
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                  >
                    <a href="mailto:zamabinda2173@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  
                  <div className="flex gap-3">
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                    >
                      <a href="https://github.com/Aphiwe-22" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                    >
                      <a href="https://www.linkedin.com/in/celumusa-vilakazi-414b01224/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;