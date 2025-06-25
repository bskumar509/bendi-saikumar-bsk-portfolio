
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto"></div>
        </div>
        
        <Card className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 backdrop-blur-sm shadow-2xl border-2 border-white/30 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-white font-bold">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-white leading-relaxed space-y-4">
            <p className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent font-semibold">
              As an enthusiastic Computer Science & Engineering graduate with solid academic credentials, 
              I am passionate about solving complex technological challenges and contributing to innovation-driven environments.
            </p>
            <p className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent font-semibold">
              My journey in technology has been marked by continuous learning, hands-on project experience, 
              and a commitment to professional growth. I thrive in collaborative environments where I can 
              apply my technical knowledge while learning from experienced professionals.
            </p>
            <p className="bg-gradient-to-r from-green-200 to-cyan-200 bg-clip-text text-transparent font-semibold">
              With experience in graphic design, project management, and software development, 
              I bring a unique blend of technical and creative skills to every project I undertake.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
