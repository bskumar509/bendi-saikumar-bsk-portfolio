
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
    },
    {
      title: "Mayamakers Web Design",
      company: "Client Project",
      description: "Modern, responsive website design and development for Mayamakers, featuring clean aesthetics and user-friendly navigation.",
      achievements: [
        "Designed and developed fully responsive website",
        "Implemented modern UI/UX principles",
        "Optimized for performance and SEO"
      ],
      technologies: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
      github: "https://github.com/bskumar509/mayamakers-website",
      live: "https://mayamakers.com",
      period: "2024",
      status: "Completed"
    },
    {
      title: "CCA Edu Tech Platform",
      company: "Educational Project",
      description: "Comprehensive educational technology platform for CCA with interactive learning modules and student management features.",
      achievements: [
        "Built scalable learning management system",
        "Integrated interactive course modules",
        "Implemented student progress tracking"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Educational APIs"],
      github: "https://github.com/bskumar509/cca-edutech",
      live: "https://cca-edutech.web.app",
      period: "2024-2025",
      status: "In Development"
    },
    {
      title: "Portfolio Website",
      company: "Personal Project",
      description: "Modern portfolio website showcasing projects, skills, and professional experience with responsive design and smooth animations.",
      achievements: [
        "Created responsive single-page application",
        "Implemented smooth scroll animations",
        "Optimized for performance and accessibility"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
      github: "https://github.com/bskumar509/portfolio",
      live: "https://saikumar-portfolio.web.app",
      period: "2025",
      status: "Completed"
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
                <Card className="shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200">
                  <CardHeader className="pb-2 p-4">
                    <div className="flex justify-between items-start mb-1">
                      <Badge className="bg-blue-100 text-blue-700 border-0 hover:bg-blue-100 text-[10px] px-2 py-0.5">
                        {work.company}
                      </Badge>
                      <div className="flex items-center text-slate-600 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {work.period}
                      </div>
                    </div>
                    
                    <CardTitle className="text-base font-bold text-slate-900 mb-1">
                      {work.title}
                    </CardTitle>
                    
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {work.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0 p-4 space-y-2">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 text-xs">Key Achievements:</h4>
                      <ul className="space-y-0.5">
                        {work.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-xs">
                            <div className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            <span className="text-slate-600 text-[11px] leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 text-xs">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {work.technologies.map((tech, idx) => (
                          <Badge key={idx} className="text-[10px] px-1.5 py-0 bg-slate-100 text-slate-700 border border-slate-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-1">
                      <Button asChild size="sm" variant="outline" className="flex-1 h-7 text-xs">
                        <a href={work.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                      {work.live && (
                        <Button asChild size="sm" className="flex-1 h-7 text-xs bg-blue-600 hover:bg-blue-700 text-white">
                          <a href={work.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
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
