
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
    <section id="home" className="min-h-screen flex items-center justify-center gradient-blue-light pt-20 pb-16 relative overflow-hidden">
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-blue-200/20"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-text-blue mb-6 leading-tight">
                  Hi, I'm<br/><span className="gradient-text-blue">Saikumar B</span>
                </h1>

                <div className="h-12 flex items-center mb-6">
                  <p className="text-xl sm:text-2xl lg:text-3xl text-blue-800 font-medium">
                    {displayText}
                    <span className="animate-pulse text-blue-600">|</span>
                  </p>
                </div>
              </div>

              <p className="text-lg lg:text-xl text-blue-800 leading-relaxed max-w-xl">
                Passionate Computer Science & Engineering graduate with a strong foundation in software development 
                and a commitment to solving real-world problems through innovative technology solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 px-8 py-4 text-lg transition-all duration-300 shadow-blue"
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
                  className="border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg transition-all duration-300 shadow-blue"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/bskumar509"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-blue text-blue-600 hover:shadow-blue-lg transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/bendisaikumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-blue text-blue-600 hover:shadow-blue-lg transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:s27k02b2003@gmail.com"
                className="p-3 rounded-full bg-white shadow-blue text-blue-600 hover:shadow-blue-lg transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right side - Profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-blue-500 shadow-blue-lg">
                <img
                  src="/lovable-uploads/647dddde-46c8-450b-b22f-5be24df4c43c.png"
                  alt="Profilephoto"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="p-2 rounded-full bg-white shadow-blue-lg text-blue-600 hover:shadow-blue transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
