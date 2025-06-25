
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & Web",
      skills: ["Java (Basic)", "Python", "HTML/CSS"],
      color: "from-blue-500 to-purple-500"
    },
    {
      category: "Tools & Concepts",
      skills: ["Project Management", "Design Principles" , "Digital Maarketing "],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Languages",
      skills: ["English", "Telugu", "Hindi"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className={`text-2xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="mr-2 mb-2 text-sm py-1 px-3">
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
