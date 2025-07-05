
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
    <section id="about" className="py-20 gradient-blue-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text-blue mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-blue-800 max-w-3xl mx-auto">
            A dedicated and enthusiastic Computer Science graduate ready to make an impact in the tech industry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-blue-900">
              <p className="text-lg leading-relaxed">
                As a Computer Science & Engineering graduate with solid academic credentials, 
                I am passionate about solving complex technological challenges and contributing 
                to innovation-driven environments.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in technology has been marked by continuous learning, hands-on project 
                experience, and a commitment to professional growth. I thrive in collaborative 
                environments where I can apply my technical knowledge while learning from 
                experienced professionals.
              </p>
              <p className="text-lg leading-relaxed">
                With experience in graphic design, project management, and software development, 
                I bring a unique blend of technical and creative skills to every project I undertake.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                Fresh Graduate
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                Quick Learner
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                Team Player
              </Badge>
              <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                Problem Solver
              </Badge>
            </div>
          </div>

          {/* Right column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500 shadow-blue hover:shadow-blue-lg transition-all duration-300 gradient-blue-card border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold gradient-text-blue mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-blue-800">
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
