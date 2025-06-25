
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Achievements = () => {
  const achievements = [
    {
      title: "Best Event Organizer – 2023",
      description: "Recognized for outstanding event organization and leadership skills",
      color: "from-yellow-500 via-orange-500 to-red-500"
    },
    {
      title: "IDE Bootcamp Phase-III Selection",
      description: "Selected by Smart India Hackathon & AICTE for advanced development bootcamp",
      color: "from-purple-500 via-pink-500 to-red-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-br from-red-500 via-pink-500 to-purple-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md shadow-2xl border-2 border-white/30 hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Badge className={`bg-gradient-to-r ${achievement.color} text-white w-fit mb-3 font-bold text-lg px-4 py-2`}>
                  Achievement
                </Badge>
                <CardTitle className="text-2xl text-white font-bold">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white text-lg">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
