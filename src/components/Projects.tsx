
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";

export const Projects = () => {
  const workHistory = [
    {
      title: "Ucoin – Privacy-Preserving Cryptocurrency",
      company: "Final Year Project",
      description: "Developed a cutting-edge cryptocurrency scheme focused on transaction privacy and anonymity through advanced cryptographic techniques.",
      achievements: [
        "Efficiently mixes 50 transactions in 6.3 seconds",
        "Outperforms alternatives by 18% in processing speed",
        "Implements advanced cryptographic protocols for privacy"
      ],
      technologies: ["Cryptography", "Blockchain", "Privacy Protocols", "Performance Optimization"],
      github: "https://github.com/bskumar509/cryptocurrency-project",
      period: "2024-2025",
      status: "Completed"
    },
    {
      title: "Student Career Path Guidance Platform",
      company: "Personal Project",
      description: "Comprehensive career guidance platform integrated with modern development tools and AI capabilities for personalized student guidance.",
      achievements: [
        "Integrated with Lovable for AI-driven edits",
        "Supports GitHub workflows and cloud IDEs",
        "Implemented custom domain support and one-click deployment"
      ],
      technologies: ["React", "TypeScript", "AI Integration", "Cloud Deployment", "GitHub Workflows"],
      github: "https://github.com/bskumar509/student-career-paths",
      live: "https://lovable.dev/projects/97b1f49c-e129-4572-bdb7-62782ae8792d",
      period: "2025",
      status: "In Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Work History
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-300"></div>
          
          <div className="space-y-8">
            {workHistory.map((work, index) => (
              <div key={index} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Card */}
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-blue-100 text-blue-700 border-0 hover:bg-blue-100">
                        {work.company}
                      </Badge>
                      <div className="flex items-center text-slate-600 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {work.period}
                      </div>
                    </div>
                    
                    <CardTitle className="text-lg font-bold text-slate-900 mb-2">
                      {work.title}
                    </CardTitle>
                    
                    <p className="text-slate-600 text-sm">
                      {work.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0 space-y-3">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {work.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            <span className="text-slate-600 text-xs">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {work.technologies.map((tech, idx) => (
                          <Badge key={idx} className="text-xs px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <a href={work.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      {work.live && (
                        <Button asChild size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                          <a href={work.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
