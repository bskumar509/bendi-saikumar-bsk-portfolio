
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto"></div>
        </div>
        
        <Card className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md shadow-2xl border-2 border-white/30 hover:shadow-3xl transition-all duration-300 hover:scale-105">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <CardTitle className="text-3xl text-white font-bold">Graphic Designer</CardTitle>
              <Badge className="bg-gradient-to-r from-green-400 to-emerald-400 text-black w-fit font-bold text-lg px-4 py-2">
                Nov 2024 – Present
              </Badge>
            </div>
            <p className="text-2xl text-yellow-300 font-bold">Nstream Marketing</p>
          </CardHeader>
          <CardContent className="text-white space-y-3">
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li className="text-cyan-200">Collaborated with clients to create engaging design posts and promotional flyers</li>
              <li className="text-green-200">Supported daily team operations and contributed to project workflow optimization</li>
              <li className="text-pink-200">Gained practical industry exposure in marketing and design principles</li>
              <li className="text-yellow-200">Developed strong client communication and project management skills</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
