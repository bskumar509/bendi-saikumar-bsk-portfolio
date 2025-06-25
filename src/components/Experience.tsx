
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Graphic Designer",
      company: "Nstream Marketing",
      period: "Nov 2024 – Present",
      location: "Remote",
      type: "Part-time",
      responsibilities: [
        "Collaborated with clients to create engaging design posts and promotional flyers",
        "Supported daily team operations and contributed to project workflow optimization",
        "Gained practical industry exposure in marketing and design principles",
        "Developed strong client communication and project management skills"
      ],
      technologies: ["Adobe Creative Suite", "Design Principles", "Client Communication", "Project Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 gradient-blue-medium">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-white/50 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-blue-100">
            Building professional experience in design and development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover-gradient-blue">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold gradient-text-blue mb-1">
                      {experience.title}
                    </CardTitle>
                    <p className="text-xl text-blue-600 font-semibold mb-2">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end space-y-2">
                    <Badge className="bg-blue-600 text-white px-3 py-1 hover:bg-blue-700">
                      {experience.type}
                    </Badge>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="px-3 py-1 border-blue-300 text-blue-700 hover:bg-blue-50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
