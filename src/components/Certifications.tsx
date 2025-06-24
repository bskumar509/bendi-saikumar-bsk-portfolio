
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Link, File } from "lucide-react";
import { useState } from "react";

export const Certifications = () => {
  const [certifications, setCertifications] = useState([
    {
      name: "Microsoft Azure AZ-900",
      provider: "Microsoft",
      color: "from-blue-500 to-cyan-500",
      link: "",
      file: null as File | null
    },
    {
      name: "Microsoft Azure AI-900",
      provider: "Microsoft",
      color: "from-cyan-500 to-blue-500",
      link: "",
      file: null as File | null
    },
    {
      name: "Java Programming",
      provider: "NPTEL",
      color: "from-orange-500 to-red-500",
      link: "",
      file: null as File | null
    },
    {
      name: "Google Gen-AI Certificate",
      provider: "Google",
      color: "from-green-500 to-emerald-500",
      link: "",
      file: null as File | null
    }
  ]);

  const handleLinkChange = (index: number, link: string) => {
    const updated = [...certifications];
    updated[index].link = link;
    setCertifications(updated);
  };

  const handleFileUpload = (index: number, file: File | null) => {
    const updated = [...certifications];
    updated[index].file = file;
    setCertifications(updated);
  };

  const handlePreview = (cert: typeof certifications[0]) => {
    if (cert.link) {
      window.open(cert.link, '_blank');
    } else if (cert.file) {
      const url = URL.createObjectURL(cert.file);
      window.open(url, '_blank');
    }
  };

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
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor={`cert-link-${index}`}>Certificate Link</Label>
                  <Input
                    id={`cert-link-${index}`}
                    type="url"
                    placeholder="https://example.com/certificate"
                    value={cert.link}
                    onChange={(e) => handleLinkChange(index, e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`cert-file-${index}`}>Upload Certificate</Label>
                  <Input
                    id={`cert-file-${index}`}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload(index, e.target.files?.[0] || null)}
                  />
                </div>

                {(cert.link || cert.file) && (
                  <Button 
                    onClick={() => handlePreview(cert)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    <File className="w-4 h-4 mr-2" />
                    Preview Certificate
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
