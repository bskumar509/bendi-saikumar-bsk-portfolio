
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6"></div>
          <p className="text-xl text-white font-semibold">
            Let's connect and discuss opportunities to work together!
          </p>
        </div>
        
        <Card className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md shadow-2xl border-2 border-white/30">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-white flex items-center justify-center gap-2 font-bold">
              <Mail className="w-8 h-8" />
              Contact Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-white mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/20 border-2 border-white/30 text-white placeholder-white/70 focus:border-yellow-400"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg font-bold text-white mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/20 border-2 border-white/30 text-white placeholder-white/70 focus:border-yellow-400"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg font-bold text-white mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32 bg-white/20 border-2 border-white/30 text-white placeholder-white/70 focus:border-yellow-400"
                  placeholder="Your message here..."
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white py-4 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-6 h-6 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="text-center mt-12 p-6 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-lg border-2 border-white/30">
          <p className="text-white font-semibold text-lg">
            © 2024 Saikumar B. Built with passion and dedication. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};
