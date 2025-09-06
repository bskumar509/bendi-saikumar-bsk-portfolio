
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle, Sparkles, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
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
    <section id="contact" className="py-32 bg-gradient-to-b from-transparent to-black/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.p 
            className="text-primary text-lg font-semibold tracking-wide uppercase mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            LINKS
          </motion.p>
          
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connect With Me
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Let's discuss opportunities, collaborate on projects, or connect professionally
          </motion.p>
        </AnimatedSection>

        {/* Contact Links Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border border-white/20 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <motion.div 
                    className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.label}</h3>
                  <p className="text-white/80">{item.value}</p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>

        {/* Download CV Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="https://drive.google.com/file/d/1yoW4SUCpE5364VpQPtSgG42ateSBpEtk/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-background px-12 py-6 text-xl font-semibold transition-all duration-300 rounded-full"
            >
              Get this Template
            </Button>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-24 pt-12 border-t border-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.p 
            className="text-white/70 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Made in Lovable
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
