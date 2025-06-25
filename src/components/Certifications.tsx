
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Certifications = () => {
  const certifications = [
    {
      name: "Microsoft Azure AZ-900",
      provider: "Microsoft",
      color: "from-blue-500 via-cyan-500 to-teal-500",
      link: "https://drive.google.com/file/d/18xE6KIukSUWWngikrxLMGBv66vZ8pIhs/view?usp=sharing"
    },
    {
      name: "Microsoft Azure AI-900",
      provider: "Microsoft",
      color: "from-purple-500 via-pink-500 to-red-500",
      link: "https://drive.google.com/file/d/1XryD-sEgDQAnv__cZylTiEpmHDjpdnfa/view?usp=sharing"
    },
    {
      name: "Java Programming",
      provider: "NPTEL",
      color: "from-orange-500 via-yellow-500 to-red-500",
      link: "https://drive.google.com/file/d/1cfPIUMvyAzUSAcfmB203NYCmuccAAs5V/view?usp=sharing"
    },
    {
      name: "Google Gen-AI Certificate",
      provider: "Google",
      color: "from-green-500 via-emerald-500 to-cyan-500",
      link: "https://drive.google.com/file/d/1M0j7nk-7yl_9f-puAy4CocAOytUHD85_/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md shadow-2xl border-2 border-white/30 hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <Badge className={`bg-gradient-to-r ${cert.color} text-white w-fit mb-3 font-bold text-lg px-4 py-2`}>
                    {cert.provider}
                  </Badge>
                  <CardTitle className="text-xl text-white font-bold">{cert.name}</CardTitle>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
