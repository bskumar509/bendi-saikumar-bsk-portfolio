import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { useIntersectionObserverCallback } from "@/hooks/useIntersectionObserver";
import { useState, useRef } from "react";

export const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useIntersectionObserverCallback(skillsRef, () => {
    setAnimateSkills(true);
  });

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "JavaScript", level: "Basic" },
        { name: "HTML/CSS", level: "Intermediate" }
      ],
      icon: "💻"
    },
    {
      category: "Frameworks & Tools",
      skills: [
        { name: "React", level: "Basic" },
        { name: "Git/GitHub", level: "Intermediate" },
        { name: "Visual Studio Code", level: "Advanced" },
        { name: "Adobe Creative Suite", level: "Intermediate" }
      ],
      icon: "🛠️"
    },
    {
      category: "Core Competencies",
      skills: [
        { name: "Problem Solving", level: "Advanced" },
        { name: "Project Management", level: "Intermediate" },
        { name: "Team Collaboration", level: "Advanced" },
        { name: "Communication", level: "Advanced" }
      ],
      icon: "🎯"
    },
    {
      category: "Design & Creative",
      skills: [
        { name: "Graphic Design", level: "Intermediate" },
        { name: "UI/UX Principles", level: "Basic" },
        { name: "Digital Marketing", level: "Basic" },
        { name: "Content Creation", level: "Intermediate" }
      ],
      icon: "🎨"
    }
  ];

  const languages = [
    { name: "English", proficiency: "Fluent" },
    { name: "Telugu", proficiency: "Native" },
    { name: "Hindi", proficiency: "Conversational" }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'bg-gradient-to-r from-emerald-500 to-primary text-white border-0';
      case 'Intermediate': return 'bg-gradient-to-r from-primary to-accent text-white border-0';
      case 'Basic': return 'bg-gradient-to-r from-amber-400 to-primary text-white border-0';
      default: return 'bg-gradient-to-r from-muted to-primary text-white border-0';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'Advanced': return '90%';
      case 'Intermediate': return '70%';
      case 'Basic': return '50%';
      default: return '30%';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-black/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={skillsRef}>
        <AnimatedSection className="text-center mb-16">
          <motion.p 
            className="text-primary text-lg font-semibold tracking-wide uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            SKILLS
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Core competencies and technical skills developed through education and practice
          </motion.p>
        </AnimatedSection>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group"
            >
              <Card className="bg-white/5 backdrop-blur-xl border border-white/20 hover:border-primary/50 hover:shadow-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-primary flex items-center group-hover:scale-105 transition-transform duration-300">
                    <motion.span 
                      className="text-2xl mr-2"
                      whileHover={{ rotate: 10, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {category.icon}
                    </motion.span>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium text-sm">{skill.name}</span>
                          <Badge className={`text-xs px-2 py-1 ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </Badge>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-primary rounded-full"
                            initial={{ width: 0 }}
                            animate={animateSkills ? { width: getLevelWidth(skill.level) } : { width: 0 }}
                            transition={{ duration: 1, delay: (index * 0.1) + (idx * 0.1) }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-white/5 backdrop-blur-xl border border-white/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary flex items-center justify-center">
                <motion.span 
                  className="text-2xl mr-2"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  🌍
                </motion.span>
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                {languages.map((language, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="bg-white/10 backdrop-blur-xl rounded-lg p-4 min-w-[120px] border border-white/20 hover:border-primary/50 transition-all duration-300">
                      <div className="font-semibold text-primary">{language.name}</div>
                      <div className="text-sm text-white/70 font-medium">{language.proficiency}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
