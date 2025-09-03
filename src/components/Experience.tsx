
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Users } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export const Experience = () => {
  const experiences = [
    {
      title: "Graphic Designer",
      company: "Nstream Marketing",
      period: "DeC 2024 – Present",
      location: "Remote",
      type: "Part-time",
      responsibilities: [
        "Collaborated with clients to create engaging design posts and promotional flyers",
        "Supported daily team operations and contributed to project workflow optimization",
        "Gained practical industry exposure in marketing and design principles",
        "Developed strong client communication and project management skills"
      ],
      technologies: ["Adobe Creative Suite", "Design Principles", "Client Communication", "Project Management","Social Media Designs"]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-gradient-to-br from-background via-surface-light to-background relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Building className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Professional Journey</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient-primary mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Work Experience
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-primary mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.4 }}
          ></motion.div>
          
          <motion.p 
            className="text-xl lg:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building professional expertise through hands-on experience in design, 
            development, and collaborative team environments
          </motion.p>
        </AnimatedSection>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group"
            >
              <Card className="glass-card hover:shadow-glow-lg transition-all duration-500 border-border-subtle hover:border-primary/30 backdrop-blur-xl overflow-hidden">
                <CardHeader className="pb-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <motion.div 
                      className="flex-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <CardTitle className="text-3xl font-bold text-gradient-primary mb-3 group-hover:text-accent transition-colors duration-300">
                        {experience.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-4">
                        <Building className="w-5 h-5 text-primary" />
                        <p className="text-xl font-semibold text-foreground/80">
                          {experience.company}
                        </p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex flex-col gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge className="bg-gradient-primary text-white px-4 py-2 text-sm font-semibold border-0 rounded-xl">
                          {experience.type}
                        </Badge>
                      </motion.div>
                      
                      <div className="flex items-center gap-2 text-foreground/60">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{experience.period}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-foreground/60">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{experience.location}</span>
                      </div>
                    </motion.div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-5 h-5 text-primary" />
                      <h4 className="text-xl font-semibold text-gradient-primary">Key Responsibilities</h4>
                    </div>
                    <ul className="space-y-3">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start group/item"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.8 + (idx * 0.1) }}
                          whileHover={{ x: 4 }}
                        >
                          <motion.div 
                            className="w-2 h-2 bg-gradient-primary rounded-full mt-3 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-foreground/80 leading-relaxed text-base group-hover/item:text-foreground transition-colors duration-200">
                            {responsibility}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <h4 className="text-xl font-semibold text-gradient-primary mb-4">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.2 + (idx * 0.1) }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge className="px-4 py-2 glass-card text-foreground border border-border-subtle hover:border-primary/50 transition-all duration-300 rounded-lg font-medium text-sm">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.p 
            className="text-xl text-foreground/70 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Ready to bring fresh perspectives and dedication to your team
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-primary hover:shadow-glow-lg text-white border-0 px-10 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
