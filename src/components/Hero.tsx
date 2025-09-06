
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedBackground } from "./AnimatedBackground";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    "Computer Science Graduate",
    "Software Developer", 
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    if (displayText.length < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex, roles]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Silhouette overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <motion.div 
            className="space-y-10 lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  className="status-pill status-available mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Open to work</span>
                </motion.div>
                
                <div className="mb-8">
                  <p className="text-primary text-lg font-semibold tracking-wide uppercase mb-4">
                    SOFTWARE DEVELOPER
                  </p>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white">
                    Saikumar B
                  </h1>
                </div>

                <div className="h-16 flex items-center mb-8">
                  <motion.p 
                    className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/80"
                    key={displayText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={displayText}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {displayText}
                      </motion.span>
                    </AnimatePresence>
                    <motion.span 
                      className="text-primary ml-1"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  </motion.p>
                </div>
              </motion.div>

              {/* Contact Info Display */}
              <motion.div 
                className="space-y-4 text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>s27k02b2003@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span>linkedin.com/in/bendisaikumar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-primary" />
                  <span>github.com/bskumar509</span>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://drive.google.com/file/d/1yoW4SUCpE5364VpQPtSgG42ateSBpEtk/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-background px-8 py-6 text-lg font-semibold transition-all duration-300 rounded-full"
                  >
                    Download CV
                  </Button>
                </a>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right side - Silhouette */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              {/* Silhouette container */}
              <motion.div 
                className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/lovable-uploads/647dddde-46c8-450b-b22f-5be24df4c43c.png"
                  alt="Saikumar B - Professional Portfolio"
                  className="w-full h-full object-cover filter brightness-0 opacity-70"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
