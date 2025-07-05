import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award } from "lucide-react";

export const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering", 
      institution: "Chalapathi Institute of Technology",
      period: "2021 – 2025",
      grade: "CGPA: 7.2",
      location: "Guntur, Andhra Pradesh",
      highlights: [
        "Strong foundation in computer science fundamentals",
        "Specialized in software development and algorithms",
        "Completed final year project on cryptocurrency privacy"
      ]
    },
    {
      degree: "Intermediate (12th Grade)",
      field: "Mathematics, Physics, Chemistry (MPC)",
      institution: "Narayana Junior College",
      period: "2019 – 2021",
      grade: "Percentage: 77.5%",
      location: "Andhra Pradesh",
      highlights: [
        "Strong mathematical and analytical foundation",
        "Physics and chemistry knowledge supporting technical understanding"
      ]
    },
    {
      degree: "Secondary School Certificate (10th Grade)",
      field: "General Education",
      institution: "Narayana E.M School",
      period: "2019",
      grade: "CGPA: 9.2",
      location: "Andhra Pradesh",
      highlights: [
        "Excellent academic performance with 9.2 CGPA",
        "Strong foundation in core subjects"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 gradient-blue-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text-blue mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-blue-800">
            Academic journey and educational qualifications
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <Card key={index} className="shadow-blue-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-blue-500 gradient-blue-card border-0 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold gradient-text-blue mb-2">
                      {education.degree}
                    </CardTitle>
                    <p className="text-lg text-blue-600 font-semibold mb-1">
                      {education.field}
                    </p>
                    <p className="text-blue-800 font-medium mb-2">
                      {education.institution}
                    </p>
                    <p className="text-blue-700 text-sm">
                      {education.location}
                    </p>
                  </div>
                  
                  <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                    <div className="flex items-center text-blue-700">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-medium">{education.period}</span>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 flex items-center border-0">
                      <Award className="w-4 h-4 mr-1" />
                      {education.grade}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div>
                  <h4 className="font-semibold gradient-text-blue mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {education.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-blue-800">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
