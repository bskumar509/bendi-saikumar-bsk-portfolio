
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="gradient" className="absolute inset-0" />
      
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Available for opportunities</span>
                </motion.div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8">
                  <span className="text-foreground">Hi, I'm</span>
                  <br />
                  <span className="text-gradient-primary">Saikumar B</span>
                </h1>

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

              <motion.p 
                className="text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-2xl font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Passionate Computer Science & Engineering graduate crafting innovative solutions 
                and pushing the boundaries of technology to solve real-world challenges.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow-lg text-white border-0 px-10 py-6 text-lg font-semibold transition-all duration-300 rounded-xl"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Get In Touch
                </Button>
              </motion.div>
              
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
                    variant="outline"
                    size="lg"
                    className="glass-card hover:border-primary/50 text-foreground px-10 py-6 text-lg font-semibold transition-all duration-300 rounded-xl hover-glow"
                  >
                    <Download className="w-5 h-5 mr-3" />
                    Download Resume
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { href: "https://github.com/bskumar509", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/bendisaikumar/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:s27k02b2003@gmail.com", icon: Mail, label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl glass-card hover:border-primary/50 text-foreground hover-glow transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                >
                  <social.icon className="w-6 h-6 group-hover:text-primary transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Profile photo */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              {/* Animated background effects */}
              <motion.div 
                className="absolute -inset-12 rounded-full bg-gradient-primary opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute -inset-8 rounded-full bg-gradient-accent opacity-30 blur-2xl"
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute -inset-4 rounded-full bg-primary/10 blur-xl animate-pulse"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Profile photo container */}
              <motion.div 
                className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-3xl overflow-hidden border-2 border-primary/20 shadow-glow-lg z-10 glass-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/lovable-uploads/647dddde-46c8-450b-b22f-5be24df4c43c.png"
                  alt="Saikumar B - Professional Portfolio"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="p-4 rounded-2xl glass-card hover:border-primary/50 text-foreground hover-glow transition-all duration-300 group"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDown className="w-6 h-6 group-hover:text-primary transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
