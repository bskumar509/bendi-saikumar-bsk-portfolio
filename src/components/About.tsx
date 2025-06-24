
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              As an enthusiastic Computer Science & Engineering graduate with solid academic credentials, 
              I am passionate about solving complex technological challenges and contributing to innovation-driven environments.
            </p>
            <p>
              My journey in technology has been marked by continuous learning, hands-on project experience, 
              and a commitment to professional growth. I thrive in collaborative environments where I can 
              apply my technical knowledge while learning from experienced professionals.
            </p>
            <p>
              With experience in graphic design, project management, and software development, 
              I bring a unique blend of technical and creative skills to every project I undertake.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
