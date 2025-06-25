
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & Web",
      skills: ["Java (Basic)", "Python", "HTML/CSS"],
      color: "from-red-500 via-pink-500 to-purple-500"
    },
    {
      category: "Tools & Concepts",
      skills: ["Project Management", "Design Principles", "Digital Marketing"],
      color: "from-green-500 via-emerald-500 to-cyan-500"
    },
    {
      category: "Languages",
      skills: ["English", "Telugu", "Hindi"],
      color: "from-orange-500 via-yellow-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md shadow-2xl border-2 border-white/30 hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className={`text-2xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-bold`}>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <Badge key={idx} className={`mr-2 mb-2 text-sm py-2 px-4 bg-gradient-to-r ${category.color} text-white font-semibold hover:scale-110 transition-transform`}>
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
