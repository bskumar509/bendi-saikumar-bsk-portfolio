
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, Filter } from "lucide-react";
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
    <section id="projects" className="py-20 bg-gradient-to-br from-surface via-surface-light to-surface relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-20"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gradient-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-primary mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-foreground-muted max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A showcase of my technical projects demonstrating problem-solving skills and innovative thinking
          </motion.p>
        </AnimatedSection>

        {/* Project Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className={`transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-primary text-white shadow-glow"
                  : "glass-card hover:border-accent"
              }`}
            >
              <Filter className="w-3 h-3 mr-1" />
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="glass-card hover:shadow-glow transition-all duration-500 border-border-subtle hover:border-accent h-full overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className={`px-3 py-1 text-sm text-white border-0 ${
                      project.category === 'Final Year Project' ? 'bg-gradient-to-r from-primary to-accent' :
                      project.category === 'Community Service' ? 'bg-gradient-to-r from-emerald-500 to-primary' :
                      'bg-gradient-to-r from-purple-500 to-primary'
                    }`}>
                      {project.category}
                    </Badge>
                    <div className="flex items-center text-foreground-muted text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.period}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gradient-primary mb-2 leading-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gradient-primary mb-2 text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span className="text-foreground-muted text-xs leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gradient-primary mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge className="text-xs px-2 py-1 glass-card text-foreground border border-border-subtle hover:border-accent transition-colors duration-300">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge className="text-xs px-2 py-1 glass-card text-foreground border border-border-subtle">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button asChild size="sm" className="w-full glass-card hover:border-accent text-foreground border border-border-subtle">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                      {project.live && (
                        <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button asChild size="sm" className="w-full bg-gradient-primary hover:shadow-glow text-white border-0">
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Live
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
