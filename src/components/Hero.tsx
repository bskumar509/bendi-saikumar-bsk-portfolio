
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="text-blue-600">Saikumar B</span>
              </h1>
              <div className="h-8 flex justify-center items-center">
                <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Passionate Computer Science & Engineering graduate with a strong foundation in software development 
              and a commitment to solving real-world problems through innovative technology solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
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
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
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
                className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/bendisaikumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:s27k02b2003@gmail.com"
                className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ArrowDown className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
