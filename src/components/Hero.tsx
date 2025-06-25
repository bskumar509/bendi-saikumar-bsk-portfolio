import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import Image from "next/image";

// --- Optional Header Component ---
export const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/50 border-b border-gray-200 shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Saikumar B</h1>
      <nav className="space-x-4 text-sm">
        <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
        <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
        <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
      </nav>
    </div>
  </header>
);

// --- Hero Section Component ---
export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 opacity-50" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-2xl">
            <Image
              src="/saikumar-profile.jpg"
              alt="Profile photo of Saikumar B"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in">
          Saikumar B
        </h2>

        <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in">
          Computer Science & Engineering Graduate
        </p>

        <Card className="p-6 bg-white/80 backdrop-blur-md border border-gray-100 shadow-xl mb-8 animate-fade-in">
          <p className="text-lg text-gray-600 leading-relaxed">
            Passionate CSE graduate with strong academic foundation and a zeal for solving real-world problems through innovative software solutions. Dedicated to ongoing learning and making meaningful contributions in dynamic tech environments.
          </p>
        </Card>

        <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 text-lg shadow-lg transition-all duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>

          <a
            href="https://drive.google.com/file/d/1yoW4SUCpE5364VpQPtSgG42ateSBpEtk/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 text-lg rounded-md shadow-lg transition-all duration-300 flex items-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Resume
          </a>

          <a href="mailto:s27k02b2003@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Mail className="w-5 h-5 mr-2" />
              Gmail
            </Button>
          </a>

          <a href="https://www.linkedin.com/in/bendisaikumar/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </a>

          <a href="https://github.com/bskumar509" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
