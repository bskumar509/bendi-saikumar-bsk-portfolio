
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

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
    <section id="home" className="min-h-screen flex items-center justify-center gradient-blue-hero pt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-white/10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300">
              <img
                src="/saikumar-profile.jpg"
                alt="Profile photo of Saikumar B"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Hi, I'm <span className="text-blue-200">Saikumar B</span>
              </h1>
              <div className="h-8 flex justify-center items-center">
                <p className="text-xl sm:text-2xl text-blue-100 font-medium">
                  {displayText}
                  <span className="animate-pulse text-white">|</span>
                </p>
              </div>
            </div>

            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed drop-shadow">
              Passionate Computer Science & Engineering graduate with a strong foundation in software development 
              and a commitment to solving real-world problems through innovative technology solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold hover-gradient-blue border-0 shadow-lg"
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
                  className="border-2 border-white/50 text-white hover:bg-white/20 px-8 py-3 text-lg font-semibold backdrop-blur-sm"
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
                className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/bendisaikumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:s27k02b2003@gmail.com"
                className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="p-2 rounded-full bg-white/20 shadow-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowDown className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
