
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "s27k02b2003@gmail.com",
      href: "mailto:s27k02b2003@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "bskumar509",
      href: "https://github.com/bskumar509"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "bendisaikumar",
      href: "https://www.linkedin.com/in/bendisaikumar/"
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-blue-primary relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-700/20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-300 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's connect and see how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="shadow-blue-lg gradient-blue-card border-0 backdrop-blur-sm h-fit">
              <CardHeader>
                <CardTitle className="text-xl font-bold gradient-text-blue">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group border border-blue-300/20"
                  >
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mr-4 group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium gradient-text-blue">{item.label}</p>
                      <p className="text-blue-800 text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}

                <div className="pt-6 border-t border-blue-300/20">
                  <p className="text-blue-800 text-sm mb-4">
                    Available for opportunities in:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs font-medium">
                      Software Development
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-xs font-medium">
                      Web Development
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-xs font-medium">
                      Project Management
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-blue-lg gradient-blue-card border-0 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold gradient-text-blue">
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-blue-800 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/20 backdrop-blur-sm border-blue-300/30 text-blue-900 placeholder:text-blue-600"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-blue-800 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/20 backdrop-blur-sm border-blue-300/30 text-blue-900 placeholder:text-blue-600"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-blue-800 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/20 backdrop-blur-sm border-blue-300/30 text-blue-900 placeholder:text-blue-600"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-800 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full h-32 resize-none bg-white/20 backdrop-blur-sm border-blue-300/30 text-blue-900 placeholder:text-blue-600"
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 text-lg font-semibold border-0"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-blue-300/20">
          <p className="text-blue-200">
            © 2024 Saikumar B. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
