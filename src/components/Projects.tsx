
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, Filter, Star, Trophy, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { useState } from "react";

export const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Ucoin – Privacy-Preserving Cryptocurrency",
      description: "A cutting-edge cryptocurrency scheme focused on transaction privacy and anonymity through advanced cryptographic techniques.",
      fullDescription: "Developed a privacy-preserving cryptocurrency scheme that aggregates multiple user transactions to break input-output address links, ensuring enhanced anonymity in decentralized systems.",
      achievements: [
        "Efficiently mixes 50 transactions in 6.3 seconds",
        "Outperforms alternatives by 18% in processing speed",
        "Implements advanced cryptographic protocols for privacy"
      ],
      technologies: ["Cryptography", "Blockchain", "Privacy Protocols", "Performance Optimization"],
      category: "Final Year Project",
      github: "https://github.com/bskumar509/cryptocurrency-project",
      period: "2024-2025",
      status: "Completed"
    },
    {
      title: "Modern Agriculture Techniques Documentation",
      description: "Community service project documenting and promoting awareness of modern agricultural practices among farmers.",
      fullDescription: "Engaged directly with farmers to document modern agricultural practices and produced comprehensive reports to promote awareness of tech-driven farming solutions.",
      achievements: [
        "Conducted field research with local farmers",
        "Documented modern agricultural practices comprehensively",
        "Promoted adoption of technology-driven farming solutions"
      ],
      technologies: ["Research", "Documentation", "Community Engagement", "Agricultural Technology"],
      category: "Community Service",
      github: "https://github.com/bskumar509/Bendi.Saikumar",
      period: "Jan 2023",
      status: "Completed"
    },
    {
      title: "Student Career Path Guidance Platform",
      description: "An AI-driven career guidance platform designed to help students make informed decisions about their career paths.",
      fullDescription: "A comprehensive career guidance platform integrated with modern development tools and AI capabilities for personalized student guidance.",
      achievements: [
        "Integrated with Lovable for AI-driven edits",
        "Supports GitHub workflows and cloud IDEs",
        "Implemented custom domain support and one-click deployment"
      ],
      technologies: ["React", "TypeScript", "AI Integration", "Cloud Deployment", "GitHub Workflows"],
      category: "Personal Project",
      github: "https://github.com/bskumar509/student-career-paths",
      live: "https://lovable.dev/projects/97b1f49c-e129-4572-bdb7-62782ae8792d",
      period: "2025",
      status: "In Development"
    }
  ];

  const categories = ["All", ...new Set(projects.map(project => project.category))];
  const filteredProjects = filter === "All" ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-background via-surface-light to-background relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Featured Work</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient-primary mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
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
            A showcase of innovative solutions demonstrating technical expertise, 
            problem-solving skills, and commitment to excellence
          </motion.p>
        </AnimatedSection>

        {/* Enhanced Project Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`transition-all duration-300 px-6 py-3 rounded-2xl font-semibold ${
                  filter === category
                    ? "bg-gradient-primary text-white shadow-glow-lg scale-105"
                    : "glass-card hover:border-primary/50 hover:shadow-glow text-foreground"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <Card className="glass-card hover:shadow-glow-lg transition-all duration-500 border-border-subtle hover:border-primary/30 h-full overflow-hidden backdrop-blur-xl">
                  <CardHeader className="pb-6">
                    <div className="flex justify-between items-start mb-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge className={`px-4 py-2 text-sm font-semibold text-white border-0 rounded-xl ${
                          project.category === 'Final Year Project' ? 'bg-gradient-to-r from-primary to-secondary' :
                          project.category === 'Community Service' ? 'bg-gradient-to-r from-accent to-primary' :
                          'bg-gradient-to-r from-secondary to-primary'
                        }`}>
                          {project.category}
                        </Badge>
                      </motion.div>
                      
                      <div className="flex items-center gap-2 text-foreground/60 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{project.period}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-gradient-primary mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    
                    <p className="text-foreground/70 text-base leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-4 h-4 text-primary" />
                        <h4 className="font-semibold text-gradient-primary text-base">Key Achievements</h4>
                      </div>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start text-sm group/item"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            whileHover={{ x: 4 }}
                          >
                            <Star className="w-3 h-3 text-primary mt-1 mr-3 flex-shrink-0 group-hover/item:text-accent transition-colors duration-200" />
                            <span className="text-foreground/70 leading-relaxed group-hover/item:text-foreground transition-colors duration-200">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gradient-primary mb-3 text-base">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge className="text-sm px-3 py-2 glass-card text-foreground border border-border-subtle hover:border-primary/50 transition-all duration-300 rounded-lg font-medium">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge className="text-sm px-3 py-2 glass-card text-foreground/60 border border-border-subtle rounded-lg">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <motion.div 
                        className="flex-1" 
                        whileHover={{ scale: 1.02 }} 
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          asChild 
                          className="w-full glass-card hover:border-primary/50 text-foreground border border-border-subtle rounded-xl py-3 font-semibold hover-glow"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      </motion.div>
                      
                      {project.live && (
                        <motion.div 
                          className="flex-1" 
                          whileHover={{ scale: 1.02 }} 
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            asChild 
                            className="w-full bg-gradient-primary hover:shadow-glow-lg text-white border-0 rounded-xl py-3 font-semibold"
                          >
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.p 
            className="text-xl text-foreground/70 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Interested in collaborating on innovative projects?
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-primary hover:shadow-glow-lg text-white border-0 px-10 py-4 text-lg font-semibold rounded-2xl"
            >
              Let's Work Together
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
