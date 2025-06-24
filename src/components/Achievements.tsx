
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Achievements = () => {
  const achievements = [
    {
      title: "Best Event Organizer – 2023",
      description: "Recognized for outstanding event organization and leadership skills",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "IDE Bootcamp Phase-III Selection",
      description: "Selected by Smart India Hackathon & AICTE for advanced development bootcamp",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Badge className={`bg-gradient-to-r ${achievement.color} text-white w-fit mb-3`}>
                  Achievement
                </Badge>
                <CardTitle className="text-2xl text-gray-800">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
