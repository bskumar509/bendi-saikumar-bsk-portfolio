
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      provider: "Microsoft",
      date: "2024",
      description: "Cloud computing fundamentals, Azure services, security, privacy, compliance, and trust",
      skills: ["Cloud Computing", "Azure Services", "Cloud Security", "Cloud Economics"],
      link: "https://drive.google.com/file/d/18xE6KIukSUWWngikrxLMGBv66vZ8pIhs/view?usp=sharing",
      logo: "☁️"
    },
    {
      name: "Microsoft Azure AI Fundamentals (AI-900)",
      provider: "Microsoft",
      date: "2024",
      description: "Artificial Intelligence workloads and considerations, machine learning on Azure",
      skills: ["Artificial Intelligence", "Machine Learning", "Cognitive Services", "Azure AI"],
      link: "https://drive.google.com/file/d/1XryD-sEgDQAnv__cZylTiEpmHDjpdnfa/view?usp=sharing",
      logo: "🤖"
    },
    {
      name: "Java Programming",
      provider: "NPTEL",
      date: "2023",
      description: "Comprehensive Java programming course covering OOP concepts and application development",
      skills: ["Java Programming", "Object-Oriented Programming", "Data Structures", "Algorithm Implementation"],
      link: "https://drive.google.com/file/d/1cfPIUMvyAzUSAcfmB203NYCmuccAAs5V/view?usp=sharing",
      logo: "☕"
    },
    {
      name: "Google Generative AI Certificate",
      provider: "Google",
      date: "2024",
      description: "Fundamentals of generative AI, large language models, and AI application development",
      skills: ["Generative AI", "Large Language Models", "AI Ethics", "Prompt Engineering"],
      link: "https://drive.google.com/file/d/1M0j7nk-7yl_9f-puAy4CocAOytUHD85_/view?usp=sharing",
      logo: "🧠"
    }
  ];

  return (
    <section id="certifications" className="py-20 gradient-blue-medium">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-white/50 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-blue-100">
            Professional certifications demonstrating commitment to continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{cert.logo}</span>
                    <Badge className="bg-blue-600 text-white px-3 py-1 hover:bg-blue-700">
                      {cert.provider}
                    </Badge>
                  </div>
                  <span className="text-gray-500 text-sm font-medium">{cert.date}</span>
                </div>
                
                <CardTitle className="text-xl font-bold gradient-text-blue leading-tight">
                  {cert.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs px-2 py-1 border-blue-300 text-blue-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <Award className="w-4 h-4 mr-2" />
                      View Certificate
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-16">
          <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold gradient-text-blue flex items-center justify-center">
                <Award className="w-6 h-6 mr-2 text-yellow-600" />
                Additional Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Best Event Organizer – 2023</h3>
                  <p className="text-gray-600 text-sm">Recognized for outstanding event organization and leadership skills</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-gray-900 mb-2">IDE Bootcamp Phase-III Selection</h3>
                  <p className="text-gray-600 text-sm">Selected by Smart India Hackathon & AICTE for advanced development bootcamp</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
