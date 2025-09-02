
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export const About = () => {
  const highlights = [
    {
      title: "Strong Academic Foundation",
      description: "B.Tech in Computer Science & Engineering with solid theoretical and practical knowledge"
    },
    {
      title: "Problem-Solving Focus", 
      description: "Passionate about tackling complex technological challenges with innovative solutions"
    },
    {
      title: "Continuous Learning",
      description: "Committed to staying updated with latest technologies and industry best practices"
    },
    {
      title: "Team Collaboration",
      description: "Experience working in collaborative environments and cross-functional teams"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-surface-light via-surface to-surface-dark relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-primary mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-xl lg:text-2xl text-foreground-muted max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A dedicated and enthusiastic Computer Science graduate ready to make an impact in the tech industry
          </motion.p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg text-foreground space-y-6">
              <motion.p 
                className="text-lg lg:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                As a Computer Science & Engineering graduate with solid academic credentials, 
                I am passionate about solving complex technological challenges and contributing 
                to innovation-driven environments.
              </motion.p>
              <motion.p 
                className="text-lg lg:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                My journey in technology has been marked by continuous learning, hands-on project 
                experience, and a commitment to professional growth. I thrive in collaborative 
                environments where I can apply my technical knowledge while learning from 
                experienced professionals.
              </motion.p>
              <motion.p 
                className="text-lg lg:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                With experience in graphic design, project management, and software development, 
                I bring a unique blend of technical and creative skills to every project I undertake.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {["Fresh Graduate", "Quick Learner", "Team Player", "Problem Solver"].map((label, index) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className="px-6 py-3 text-base font-medium bg-gradient-primary text-white border-0 shadow-glow hover:shadow-glow-lg transition-all duration-300">
                    {label}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Highlights */}
          <motion.div 
            className="grid gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="group"
              >
                <Card className="border-l-4 border-l-accent shadow-soft hover:shadow-glow transition-all duration-300 glass-card border-border-subtle group-hover:border-accent">
                  <CardContent className="p-8">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gradient-primary mb-4 group-hover:text-accent transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-foreground-muted text-lg leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
