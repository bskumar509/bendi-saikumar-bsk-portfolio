
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  const highlights = [
    {
      title: "Strong Academic Foundation",
      description: "B.Tech in Computer Science & Engineering with solid theoretical and practical knowledge"
    },
    {
      title: "Problem-Solving Focus", 
      description: "Passionate about tackling complex technological challenges with innovative solutions"
    },
    {
      title: "Continuous Learning",
      description: "Committed to staying updated with latest technologies and industry best practices"
    },
    {
      title: "Team Collaboration",
      description: "Experience working in collaborative environments and cross-functional teams"
    }
  ];

  return (
    <section id="about" className="py-24 gradient-blue-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-blue mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl lg:text-2xl text-blue-800 max-w-4xl mx-auto leading-relaxed">
            A dedicated and enthusiastic Computer Science graduate ready to make an impact in the tech industry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="prose prose-lg text-blue-900 space-y-6">
              <p className="text-lg lg:text-xl leading-relaxed">
                As a Computer Science & Engineering graduate with solid academic credentials, 
                I am passionate about solving complex technological challenges and contributing 
                to innovation-driven environments.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed">
                My journey in technology has been marked by continuous learning, hands-on project 
                experience, and a commitment to professional growth. I thrive in collaborative 
                environments where I can apply my technical knowledge while learning from 
                experienced professionals.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed">
                With experience in graphic design, project management, and software development, 
                I bring a unique blend of technical and creative skills to every project I undertake.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Badge className="px-6 py-3 text-base font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                Fresh Graduate
              </Badge>
              <Badge className="px-6 py-3 text-base font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                Quick Learner
              </Badge>
              <Badge className="px-6 py-3 text-base font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                Team Player
              </Badge>
              <Badge className="px-6 py-3 text-base font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                Problem Solver
              </Badge>
            </div>
          </div>

          {/* Right column - Highlights */}
          <div className="grid gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500 shadow-blue hover:shadow-blue-lg transition-all duration-300 gradient-blue-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl lg:text-2xl font-semibold gradient-text-blue mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-blue-800 text-lg leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
