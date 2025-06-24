
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Mail, User } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 opacity-50"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
            <User className="w-16 h-16 text-white" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in">
          Saikumar B
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in">
          Computer Science & Engineering Graduate
        </p>
        
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-8 animate-fade-in">
          <p className="text-lg text-gray-600 leading-relaxed">
            Enthusiastic CSE graduate with solid academics, keen to solve complex problems 
            and thrive in innovation-driven environments. Committed to continuous learning 
            and professional growth.
          </p>
        </Card>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('about')}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg transition-all duration-300"
          >
            Learn More
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
