import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "JavaScript", level: "Basic" },
        { name: "HTML/CSS", level: "Intermediate" }
      ],
      icon: "💻"
    },
    {
      category: "Frameworks & Tools",
      skills: [
        { name: "React", level: "Basic" },
        { name: "Git/GitHub", level: "Intermediate" },
        { name: "Visual Studio Code", level: "Advanced" },
        { name: "Adobe Creative Suite", level: "Intermediate" }
      ],
      icon: "🛠️"
    },
    {
      category: "Core Competencies",
      skills: [
        { name: "Problem Solving", level: "Advanced" },
        { name: "Project Management", level: "Intermediate" },
        { name: "Team Collaboration", level: "Advanced" },
        { name: "Communication", level: "Advanced" }
      ],
      icon: "🎯"
    },
    {
      category: "Design & Creative",
      skills: [
        { name: "Graphic Design", level: "Intermediate" },
        { name: "UI/UX Principles", level: "Basic" },
        { name: "Digital Marketing", level: "Basic" },
        { name: "Content Creation", level: "Intermediate" }
      ],
      icon: "🎨"
    }
  ];

  const languages = [
    { name: "English", proficiency: "Fluent" },
    { name: "Telugu", proficiency: "Native" },
    { name: "Hindi", proficiency: "Conversational" }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'bg-gradient-to-r from-green-500 to-blue-500 text-white border-0';
      case 'Intermediate': return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0';
      case 'Basic': return 'bg-gradient-to-r from-yellow-400 to-blue-400 text-white border-0';
      default: return 'bg-gradient-to-r from-gray-400 to-blue-400 text-white border-0';
    }
  };

  return (
    <section id="skills" className="py-20 gradient-blue-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-300 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100">
            Technical skills and competencies developed through education and practical experience
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-blue hover:shadow-blue-lg transition-all duration-300 gradient-blue-card border-0 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold gradient-text-blue flex items-center">
                  <span className="text-2xl mr-2">{category.icon}</span>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-blue-800 font-medium text-sm">{skill.name}</span>
                      <Badge className={`text-xs px-2 py-1 ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Languages */}
        <Card className="shadow-blue gradient-blue-card border-0 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold gradient-text-blue flex items-center justify-center">
              <span className="text-2xl mr-2">🌍</span>
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((language, index) => (
                <div key={index} className="text-center">
                  <div className="gradient-blue-card rounded-lg p-4 min-w-[120px] border border-blue-300/30 backdrop-blur-sm">
                    <div className="font-semibold gradient-text-blue">{language.name}</div>
                    <div className="text-sm text-blue-600 font-medium">{language.proficiency}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
