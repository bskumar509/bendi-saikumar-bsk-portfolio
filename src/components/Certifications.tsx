
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Certifications = () => {
  const certifications = [
    {
      name: "Microsoft Azure AZ-900",
      provider: "Microsoft",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Microsoft Azure AI-900",
      provider: "Microsoft",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Java Programming",
      provider: "NPTEL",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Google Gen-AI Certificate",
      provider: "Google",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Badge className={`bg-gradient-to-r ${cert.color} text-white w-fit mb-2`}>
                  {cert.provider}
                </Badge>
                <CardTitle className="text-xl text-gray-800">{cert.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
