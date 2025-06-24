
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Link, File } from "lucide-react";
import { useState } from "react";

export const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "Ucoin – Final Year Project",
      description: "A privacy-preserving cryptocurrency scheme",
      features: [
        "Aggregates multiple user transactions to break input-output address links",
        "Efficiently mixes 50 transactions in 6.3 seconds, outperforming alternatives by 18%",
        "Focused on speed and transaction anonymity in decentralized systems"
      ],
      type: "Final Year Project",
      color: "from-blue-500 to-purple-500",
      link: "",
      file: null as File | null
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
      color: "from-green-500 to-emerald-500",
      link: "",
      file: null as File | null
    }
  ]);

  const handleLinkChange = (index: number, link: string) => {
    const updated = [...projects];
    updated[index].link = link;
    setProjects(updated);
  };

  const handleFileUpload = (index: number, file: File | null) => {
    const updated = [...projects];
    updated[index].file = file;
    setProjects(updated);
  };

  const handlePreview = (project: typeof projects[0]) => {
    if (project.link) {
      window.open(project.link, '_blank');
    } else if (project.file) {
      const url = URL.createObjectURL(project.file);
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Key Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex flex-col gap-3">
                  <Badge className={`bg-gradient-to-r ${project.color} text-white w-fit`}>
                    {project.type}
                  </Badge>
                  <CardTitle className="text-2xl text-gray-800">{project.title}</CardTitle>
                  <p className="text-lg text-blue-600 font-semibold">{project.description}</p>
                  {project.period && (
                    <Badge variant="outline" className="w-fit">
                      {project.period}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-gray-700">
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`project-link-${index}`}>Project Link/Demo</Label>
                  <Input
                    id={`project-link-${index}`}
                    type="url"
                    placeholder="https://github.com/username/project or demo link"
                    value={project.link}
                    onChange={(e) => handleLinkChange(index, e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`project-file-${index}`}>Upload Project Files</Label>
                  <Input
                    id={`project-file-${index}`}
                    type="file"
                    accept=".pdf,.zip,.rar,.doc,.docx"
                    onChange={(e) => handleFileUpload(index, e.target.files?.[0] || null)}
                  />
                </div>

                {(project.link || project.file) && (
                  <Button 
                    onClick={() => handlePreview(project)}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  >
                    <File className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
