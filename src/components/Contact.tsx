
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
    <section id="contact" className="py-32 bg-gradient-to-br from-surface-dark via-background to-surface-light relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Let's Connect</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient-primary mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-primary mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.4 }}
          ></motion.div>
          
          <motion.p 
            className="text-xl lg:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Ready to discuss new opportunities, collaborate on exciting projects, 
            or just have a conversation about technology and innovation
          </motion.p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Information */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-card border-border-subtle h-fit backdrop-blur-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gradient-primary flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-2xl hover:bg-surface-light/30 transition-all duration-300 group border border-border-subtle hover:border-primary/50 hover-glow"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                    whileHover={{ scale: 1.02, x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className="p-3 bg-gradient-primary rounded-2xl mr-4 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gradient-primary text-lg">{item.label}</p>
                      <p className="text-foreground/70">{item.value}</p>
                    </div>
                  </motion.a>
                ))}

                <div className="pt-8 border-t border-border-subtle">
                  <motion.p 
                    className="text-foreground/70 mb-6 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    Available for opportunities in:
                  </motion.p>
                  <div className="flex flex-wrap gap-3">
                    {["Software Development", "Web Development", "Project Management", "UI/UX Design"].map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 bg-gradient-primary text-white rounded-2xl text-sm font-semibold shadow-glow"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.2 + (index * 0.1) }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glass-card border-border-subtle backdrop-blur-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gradient-primary">
                  Send Me a Message
                </CardTitle>
                <p className="text-foreground/70 text-lg">
                  I'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <label htmlFor="name" className="block text-base font-semibold text-foreground mb-3">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-14 glass-card border-border-subtle text-foreground placeholder:text-foreground/50 focus:border-primary/50 transition-all duration-300 rounded-xl text-lg"
                        placeholder="Your full name"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-base font-semibold text-foreground mb-3">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-14 glass-card border-border-subtle text-foreground placeholder:text-foreground/50 focus:border-primary/50 transition-all duration-300 rounded-xl text-lg"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label htmlFor="subject" className="block text-base font-semibold text-foreground mb-3">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full h-14 glass-card border-border-subtle text-foreground placeholder:text-foreground/50 focus:border-primary/50 transition-all duration-300 rounded-xl text-lg"
                      placeholder="What's this about?"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <label htmlFor="message" className="block text-base font-semibold text-foreground mb-3">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full h-40 resize-none glass-card border-border-subtle text-foreground placeholder:text-foreground/50 focus:border-primary/50 transition-all duration-300 rounded-xl text-lg"
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-glow-lg text-white py-6 text-xl font-semibold border-0 transition-all duration-300 rounded-2xl"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                          Sending Message...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="w-6 h-6 mr-3" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6 mr-3" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Enhanced Footer */}
        <motion.div 
          className="text-center mt-24 pt-12 border-t border-border-subtle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <p className="text-xl font-semibold text-gradient-primary">
              Built with passion & precision
            </p>
            <Sparkles className="w-5 h-5 text-primary" />
          </motion.div>
          <motion.p 
            className="text-foreground/70 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            © 2025 Saikumar B. Crafted with React, TypeScript, Tailwind CSS & Framer Motion.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
