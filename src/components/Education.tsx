
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Chalapathi Institute of Technology",
      period: "2021 – 2025",
      grade: "CGPA: 7.2",
      color: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      period: "2019 – 2021",
      grade: "77.5%",
      color: "from-green-500 via-emerald-500 to-cyan-500"
    },
    {
      degree: "SSC",
      institution: "Narayana E.M School",
      period: "2019",
      grade: "CGPA: 9.2",
      color: "from-orange-500 via-red-500 to-pink-500"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto"></div>
        </div>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md shadow-2xl border-2 border-white/30 hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <CardTitle className="text-2xl text-white font-bold">{edu.degree}</CardTitle>
                  <Badge className={`bg-gradient-to-r ${edu.color} text-white w-fit font-bold text-lg px-4 py-2`}>
                    {edu.period}
                  </Badge>
                </div>
                <p className="text-xl text-yellow-300 font-bold">{edu.institution}</p>
              </CardHeader>
              <CardContent>
                <Badge className="text-lg py-2 px-4 bg-gradient-to-r from-lime-400 to-green-400 text-black font-bold">
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
