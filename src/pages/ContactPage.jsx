import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

// Import local images
import mapImage from '@/assets/images/office-location.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mldjvygl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We've received your message and will get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Message failed",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Message failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground">
            We'd love to hear from you. Get in touch with our team for any questions or feedback.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help you?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Your message here..."
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          
          <div className="bg-card rounded-lg p-6 shadow-sm border border-primary/10 mb-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Our Location</h3>
                  <p className="text-muted-foreground">
                    Moonmarket, Allama Iqbal Town<br />
                    Lahore
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone Number</h3>
                  <p className="text-muted-foreground">+92 329 4660128</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Email Address</h3>
                  <p className="text-muted-foreground">info.greenroots002@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden h-64 border">
            <img className="w-full h-full object-cover" alt="Map location of GreenRoots office" src={mapImage} />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-primary/10 rounded-lg p-8 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Follow Us on Social Media</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Stay updated with our latest products, promotions, and hair care tips by following us on social media.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61571062822680" target="_blank" rel="noopener noreferrer" className="group">
            <button type="button" className="rounded-full w-12 h-12 p-0 flex items-center justify-center border border-primary transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </button>
          </a>
          <a href="https://www.instagram.com/greenrootsoil/" target="_blank" rel="noopener noreferrer" className="group">
            <button type="button" className="rounded-full w-12 h-12 p-0 flex items-center justify-center border border-primary transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </button>
          </a>
          <a href="https://x.com/GreenRoots_Oil" target="_blank" rel="noopener noreferrer" className="group">
            <button type="button" className="rounded-full w-12 h-12 p-0 flex items-center justify-center border border-primary transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </button>
          </a>
          <a href="https://www.youtube.com/@Greenroot-d1d" target="_blank" rel="noopener noreferrer" className="group">
            <button type="button" className="rounded-full w-12 h-12 p-0 flex items-center justify-center border border-primary transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
