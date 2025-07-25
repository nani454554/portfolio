import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const technologies = [
    'AWS', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab', 'Terraform', 'Prometheus'
  ];

  const services = [
    'DevOps Consulting',
    'Cloud Migration',
    'CI/CD Implementation', 
    'Infrastructure Automation',
    'Monitoring & Observability',
    'Security & Compliance'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
              >
                DevOps<span className="text-blue-600">Pro</span>
              </button>
              <div className="flex items-center gap-2 mt-2">
                <Award className="w-4 h-4 text-green-500" />
                <Badge variant="outline" className="border-green-500 text-green-400 text-xs">
                  GCP Certified
                </Badge>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              IT Professional with 3+ years of experience in DevOps, Cloud Infrastructure, 
              and automation. Specializing in AWS, GCP, and modern DevOps practices.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>bandinikhilgoud4545@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+91 XXXXX-XXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Available Globally</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="bg-slate-800 text-gray-300 hover:bg-slate-700 transition-colors text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-white"
                  onClick={() => window.open('https://linkedin.com/in/professional', '_blank')}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-white"
                  onClick={() => window.open('https://github.com/professional', '_blank')}
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-white"
                  onClick={() => window.open('https://www.credly.com/badges/53fdf088-8ff1-4d0c-a419-48b4a9ca42de/public_url', '_blank')}
                >
                  <Award className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © {currentYear} DevOps Professional. All rights reserved.
          </div>
          
          <div className="text-sm text-gray-400">
            Built with modern technologies for optimal performance
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Available for new opportunities</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Back to Top Floating Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg z-40 transition-all duration-300 transform hover:scale-110"
        size="sm"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 15l7-7 7 7" 
          />
        </svg>
      </Button>
    </footer>
  );
};

export default Footer;