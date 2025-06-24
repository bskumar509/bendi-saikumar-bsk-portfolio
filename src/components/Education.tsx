
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Chalapathi Institute of Technology",
      period: "2021 – 2025",
      grade: "CGPA: 7.2",
      color: "from-blue-500 to-purple-500"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      period: "2019 – 2021",
      grade: "77.5%",
      color: "from-purple-500 to-pink-500"
    },
    {
      degree: "SSC",
      institution: "Narayana E.M School",
      period: "2019",
      grade: "CGPA: 9.2",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <CardTitle className="text-2xl text-gray-800">{edu.degree}</CardTitle>
                  <Badge className={`bg-gradient-to-r ${edu.color} text-white w-fit`}>
                    {edu.period}
                  </Badge>
                </div>
                <p className="text-xl text-blue-600 font-semibold">{edu.institution}</p>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="text-lg py-1 px-3 border-green-500 text-green-600">
                  {edu.grade}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
