
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "Ucoin – Final Year Project",
      description: "A privacy-preserving cryptocurrency scheme",
      features: [
        "Aggregates multiple user transactions to break input-output address links",
        "Efficiently mixes 50 transactions in 6.3 seconds, outperforming alternatives by 18%",
        "Focused on speed and transaction anonymity in decentralized systems"
      ],
      type: "Final Year Project",
      github: "https://github.com/bskumar509/cryptocurrency-project",
      color: "from-cyan-500 via-blue-500 to-purple-500"
    },
    {
      title: "Modern Agriculture Techniques",
      description: "Community Service Project documenting agricultural practices",
      features: [
        "Engaged with farmers to document modern agricultural practices",
        "Produced comprehensive report to promote awareness",
        "Focused on adoption of tech-driven farming solutions"
      ],
      type: "Community Service",
      period: "Jan 2023",
      github: "https://github.com/bskumar509/Bendi.Saikumar",
      color: "from-green-500 via-lime-500 to-emerald-500"
    },
    {
      title: "Student Career Path",
      description: "The student-career-paths project is a career guidance platform",
      features: [
        "Integrated with Lovable for AI-driven edits",
        "Supports GitHub workflows and cloud IDEs",
        "Custom domain support and one-click deployment"
      ],
      type: "Personal Project",
      period: "2025",
      github: "https://github.com/bskumar509/student-career-paths",
      live: "https://lovable.dev/projects/97b1f49c-e129-4572-bdb7-62782ae8792d",
      color: "from-pink-500 via-red-500 to-orange-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Key Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-purple-200 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const link = project.live || project.github;
            return (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md shadow-2xl border-2 border-white/30 hover:shadow-3xl transition-all duration-300 hover:scale-105 h-full">
                  <CardHeader>
                    <div className="flex flex-col gap-3">
                      <Badge className={`bg-gradient-to-r ${project.color} text-white w-fit font-bold text-sm px-3 py-1`}>
                        {project.type}
                      </Badge>
                      <CardTitle className="text-2xl text-white font-bold">{project.title}</CardTitle>
                      <p className="text-lg text-yellow-200 font-semibold">{project.description}</p>
                      {project.period && (
                        <Badge className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black w-fit font-bold">
                          {project.period}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="text-white">
                    <ul className="list-disc list-inside space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-100">{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
