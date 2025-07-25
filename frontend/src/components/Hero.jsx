import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, MapPin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    // Mock download functionality
    console.log('Resume download initiated');
    alert('Resume download started!');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-400">
                DevOps/SRE/Platform Engineer
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  IT Professional
                </span>
                <br />
                <span className="text-white">& Cloud Expert</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                3+ years of experience in Software Development, DevOps, and Cloud Infrastructure with expertise in AWS, GCP, and modern automation tools.
              </p>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Available Globally</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>professional@email.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg transition-all duration-300"
                onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
              >
                Get In Touch
              </Button>
            </div>

            {/* Tech Stack Preview */}
            <div className="pt-8">
              <p className="text-sm text-gray-400 mb-3">Specialized in:</p>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab', 'Terraform'].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="Professional Profile"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-pulse delay-75"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;