
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import Profilephoto from '@/src/saikumar.jpg';

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
    <section id="home" className="min-h-screen flex items-center justify-center gradient-blue-primary pt-16 relative overflow-hidden">
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-700/20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="relative">
  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-blue-lg">
    <img
      src={process.env.src/saikumar.jpg}
      alt="Profilephoto"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 blur-xl animate-pulse"></div>
</div>

          {/* Main Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Hi, I'm<span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent ml-2">Saikumar B </span>
              </h1>

              <div className="h-8 flex justify-center items-center">
                <p className="text-xl sm:text-2xl text-blue-100 font-medium">
                  {displayText}
                  <span className="animate-pulse text-white">|</span>
                </p>
              </div>
            </div>

            <p className="text-lg text-blue-50 max-w-2xl mx-auto leading-relaxed">
              Passionate Computer Science & Engineering graduate with a strong foundation in software development 
              and a commitment to solving real-world problems through innovative technology solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-3 text-lg transition-all duration-300 shadow-blue"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              
              <a
                href="https://drive.google.com/file/d/1yoW4SUCpE5364VpQPtSgG42ateSBpEtk/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-3 text-lg transition-all duration-300 shadow-blue"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/bskumar509"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 shadow-blue"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/bendisaikumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 shadow-blue"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:s27k02b2003@gmail.com"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 shadow-blue"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm shadow-blue-lg hover:bg-white/20 transition-all duration-300"
            >
              <ArrowDown className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
