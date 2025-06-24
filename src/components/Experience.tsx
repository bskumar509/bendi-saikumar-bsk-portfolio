
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <CardTitle className="text-2xl text-gray-800">Graphic Designer</CardTitle>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white w-fit">
                Nov 2024 – Present
              </Badge>
            </div>
            <p className="text-xl text-blue-600 font-semibold">Nstream Marketing</p>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-3">
            <ul className="list-disc list-inside space-y-2">
              <li>Collaborated with clients to create engaging design posts and promotional flyers</li>
              <li>Supported daily team operations and contributed to project workflow optimization</li>
              <li>Gained practical industry exposure in marketing and design principles</li>
              <li>Developed strong client communication and project management skills</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
