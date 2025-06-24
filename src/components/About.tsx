
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Link, File } from "lucide-react";
import { useState } from "react";

export const About = () => {
  const [resumeLink, setResumeLink] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleResumePreview = () => {
    if (resumeLink) {
      window.open(resumeLink, '_blank');
    } else if (resumeFile) {
      const url = URL.createObjectURL(resumeFile);
      window.open(url, '_blank');
    }
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                As an enthusiastic Computer Science & Engineering graduate with solid academic credentials, 
                I am passionate about solving complex technological challenges and contributing to innovation-driven environments.
              </p>
              <p>
                My journey in technology has been marked by continuous learning, hands-on project experience, 
                and a commitment to professional growth. I thrive in collaborative environments where I can 
                apply my technical knowledge while learning from experienced professionals.
              </p>
              <p>
                With experience in graphic design, project management, and software development, 
                I bring a unique blend of technical and creative skills to every project I undertake.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">Resume</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="resume-link">Resume Link</Label>
                <Input
                  id="resume-link"
                  type="url"
                  placeholder="https://drive.google.com/your-resume"
                  value={resumeLink}
                  onChange={(e) => setResumeLink(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="resume-file">Upload Resume</Label>
                <Input
                  id="resume-file"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                />
              </div>

              {(resumeLink || resumeFile) && (
                <Button 
                  onClick={handleResumePreview}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  <File className="w-4 h-4 mr-2" />
                  View Resume
                </Button>
              )}

              <div className="text-sm text-gray-600 mt-4">
                <p>• Upload your resume in PDF, DOC, or DOCX format</p>
                <p>• Or provide a link to your online resume</p>
                <p>• Visitors can preview your resume directly</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
