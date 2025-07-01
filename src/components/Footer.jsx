import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Newsletter from "@/components/Newsletter";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [footerEmail, setFooterEmail] = useState("");
  const [isFooterSubmitting, setIsFooterSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFooterSubscribe = async (e) => {
    e.preventDefault();
    setIsFooterSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mldjvygl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: footerEmail }),
      });
      if (response.ok) {
        toast({
          title: "Subscription successful!",
          description: "Thank you for subscribing to our newsletter.",
        });
        setFooterEmail("");
      } else {
        toast({
          title: "Subscription failed",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
    setIsFooterSubmitting(false);
  };

  return (
    <footer className="bg-muted/50 pt-16 pb-8 leaf-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-primary">Green<span className="text-secondary">Roots</span></span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Natural hair care solutions made with organic ingredients for healthier, stronger hair.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61571062822680" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.instagram.com/greenrootsoil/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://x.com/GreenRoots_Oil" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.youtube.com/@Greenroot-d1d" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><polygon points="10 9 15 12 10 15 10 9"></polygon></svg>
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Oil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Moonmarket, Allama Iqbal Town, Lahore
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">+92 329 4660128</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">info.greenroots002@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex space-x-2" onSubmit={handleFooterSubscribe}>
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background"
                value={footerEmail}
                onChange={e => setFooterEmail(e.target.value)}
                required
              />
              <Button type="submit" disabled={isFooterSubmitting}>
                {isFooterSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-muted-foreground text-sm">
          <p>© {currentYear} GreenRoots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
