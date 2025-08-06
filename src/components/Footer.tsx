import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const practiceAreas = [
    'Criminal Law',
    'Family Law',
    'Corporate Law',
    'Personal Injury',
    'Real Estate',
    'Immigration'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Practice Areas', href: '/practice-areas' },
    { name: 'Our Team', href: '/attorneys' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-accent text-accent-foreground p-3 rounded-full shadow-professional-lg hover:shadow-professional-xl transition-all duration-300 hover:scale-105"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-accent mb-2">
                LexPrime Advocates LLP
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Providing exceptional legal services with integrity, expertise, and dedication to justice for over 25 years.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>1234 Legal District Avenue</p>
                  <p>Suite 500, Downtown</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-sm">info@lexprime.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm">Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-accent">
              Practice Areas
            </h4>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <Link
                    to="/practice-areas"
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-accent">
              Stay Updated
            </h4>
            <p className="text-sm text-primary-foreground/80">
              Subscribe to our newsletter for legal insights and updates.
            </p>
            
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-light border-primary-light text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h5 className="text-sm font-medium mb-3 text-accent">Follow Us</h5>
              <div className="flex space-x-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-primary-light p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © 2024 LexPrime Advocates LLP. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Legal Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;