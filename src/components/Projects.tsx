
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Ucoin – Privacy-Preserving Cryptocurrency",
      description: "A cutting-edge cryptocurrency scheme focused on transaction privacy and anonymity through advanced cryptographic techniques.",
      fullDescription: "Developed a privacy-preserving cryptocurrency scheme that aggregates multiple user transactions to break input-output address links, ensuring enhanced anonymity in decentralized systems.",
      achievements: [
        "Efficiently mixes 50 transactions in 6.3 seconds",
        "Outperforms alternatives by 18% in processing speed",
        "Implements advanced cryptographic protocols for privacy"
      ],
      technologies: ["Cryptography", "Blockchain", "Privacy Protocols", "Performance Optimization"],
      category: "Final Year Project",
      github: "https://github.com/bskumar509/cryptocurrency-project",
      period: "2024-2025",
      status: "Completed"
    },
    {
      title: "Modern Agriculture Techniques Documentation",
      description: "Community service project documenting and promoting awareness of modern agricultural practices among farmers.",
      fullDescription: "Engaged directly with farmers to document modern agricultural practices and produced comprehensive reports to promote awareness of tech-driven farming solutions.",
      achievements: [
        "Conducted field research with local farmers",
        "Documented modern agricultural practices comprehensively",
        "Promoted adoption of technology-driven farming solutions"
      ],
      technologies: ["Research", "Documentation", "Community Engagement", "Agricultural Technology"],
      category: "Community Service",
      github: "https://github.com/bskumar509/Bendi.Saikumar",
      period: "Jan 2023",
      status: "Completed"
    },
    {
      title: "Student Career Path Guidance Platform",
      description: "An AI-driven career guidance platform designed to help students make informed decisions about their career paths.",
      fullDescription: "A comprehensive career guidance platform integrated with modern development tools and AI capabilities for personalized student guidance.",
      achievements: [
        "Integrated with Lovable for AI-driven edits",
        "Supports GitHub workflows and cloud IDEs",
        "Implemented custom domain support and one-click deployment"
      ],
      technologies: ["React", "TypeScript", "AI Integration", "Cloud Deployment", "GitHub Workflows"],
      category: "Personal Project",
      github: "https://github.com/bskumar509/student-career-paths",
      live: "https://lovable.dev/projects/97b1f49c-e129-4572-bdb7-62782ae8792d",
      period: "2025",
      status: "In Development"
    }
  ];

  return (
    <section id="projects" className="py-20 gradient-blue-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text-blue mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-blue-800 max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating problem-solving skills and innovative thinking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-blue-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 gradient-blue-card border-0 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge className={`px-3 py-1 text-sm text-white border-0 ${
                    project.category === 'Final Year Project' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                    project.category === 'Community Service' ? 'bg-gradient-to-r from-green-500 to-blue-500' :
                    'bg-gradient-to-r from-purple-500 to-blue-500'
                  }`}>
                    {project.category}
                  </Badge>
                  <div className="flex items-center text-blue-700 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.period}
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold gradient-text-blue mb-2 leading-tight">
                  {project.title}
                </CardTitle>
                
                <p className="text-blue-800 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold gradient-text-blue mb-2 text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-blue-800 text-xs leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold gradient-text-blue mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} className="text-xs px-2 py-1 bg-white/30 backdrop-blur-sm text-blue-800 border border-blue-300/30">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge className="text-xs px-2 py-1 bg-white/30 backdrop-blur-sm text-blue-800 border border-blue-300/30">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button asChild size="sm" className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-blue-800 border border-blue-300/30">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
