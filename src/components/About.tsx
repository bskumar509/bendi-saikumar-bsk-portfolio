
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
    <section id="about" className="py-24 bg-gradient-to-b from-transparent to-black/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.p 
            className="text-primary text-lg font-semibold tracking-wide uppercase mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SUMMARY
          </motion.p>
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional Overview
          </motion.h2>
          <motion.p 
            className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Computer Science graduate with strong foundation in programming and problem-solving
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
            <div className="prose prose-lg text-white space-y-6">
              <motion.p 
                className="text-lg lg:text-xl leading-relaxed text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Recent Computer Science & Engineering graduate with solid academic credentials and 
                passion for solving complex technological challenges through innovative software solutions.
              </motion.p>
              <motion.p 
                className="text-lg lg:text-xl leading-relaxed text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Experienced in full-stack development, project management, and collaborative team environments. 
                Strong foundation in programming languages including Java, Python, and JavaScript.
              </motion.p>
              <motion.p 
                className="text-lg lg:text-xl leading-relaxed text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Seeking opportunities to contribute technical expertise while continuing professional growth 
                in dynamic, innovation-driven organizations.
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {[
                { label: "Education", value: "B.Tech CSE" },
                { label: "Experience", value: "Fresh Graduate" },
                { label: "Location", value: "Available to Relocate" },
                { label: "Status", value: "Open to Work" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-primary font-semibold text-lg">{item.value}</div>
                  <div className="text-white/70 text-sm">{item.label}</div>
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
                <Card className="border-l-4 border-l-primary shadow-soft hover:shadow-glow transition-all duration-300 bg-white/5 backdrop-blur-xl border-white/20 group-hover:border-primary/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-white/80 text-lg leading-relaxed">
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
