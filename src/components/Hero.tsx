import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Download } from "lucide-react";

// --- Optional Header Component ---
export const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-red-600/90 border-b border-white/20 shadow-lg">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-white">Saikumar B</h1>
      <nav className="space-x-4 text-sm">
        <a href="#about" className="text-white hover:text-yellow-300 transition-colors">About</a>
        <a href="#projects" className="text-white hover:text-yellow-300 transition-colors">Projects</a>
        <a href="#contact" className="text-white hover:text-yellow-300 transition-colors">Contact</a>
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
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,150,0.3),transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.3),transparent_50%)]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-2xl ring-4 ring-gradient-to-r from-pink-500 to-cyan-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="/saikumar-profile.jpg"
                alt="Profile photo of Saikumar B"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-fade-in">
          Saikumar B
        </h2>

        <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in font-semibold">
          Computer Science & Engineering Graduate
        </p>

        <Card className="p-6 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 shadow-xl mb-8 animate-fade-in">
          <p className="text-lg text-white leading-relaxed">
            Passionate CSE graduate with strong academic foundation and a zeal for solving real-world problems through innovative software solutions. Dedicated to ongoing learning and making meaningful contributions in dynamic tech environments.
          </p>
        </Card>

        <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white px-6 py-3 text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>

          <a
            href="https://drive.google.com/file/d/1yoW4SUCpE5364VpQPtSgG42ateSBpEtk/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-3 text-lg rounded-md shadow-lg transition-all duration-300 flex items-center transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            Resume
          </a>

          <a href="mailto:s27k02b2003@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105">
              <Mail className="w-5 h-5 mr-2" />
              Gmail
            </Button>
          </a>

          <a href="https://www.linkedin.com/in/bendisaikumar/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </a>

          <a href="https://github.com/bskumar509" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
