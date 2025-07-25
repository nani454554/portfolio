import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, Briefcase, User, Download, Code2, Cloud, Database } from 'lucide-react';

const SimplePortfolio = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');

  const handleDownloadResume = () => {
    // Add download animation
    const button = document.querySelector('.download-btn');
    button.classList.add('animate-pulse');
    setTimeout(() => {
      button.classList.remove('animate-pulse');
      alert('Resume download started!');
    }, 1000);
  };

  useEffect(() => {
    setIsLoaded(true);
    
    // Typing animation for the bio
    const bioText = "IT Professional with 3+ years of experience in Software Development...";
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < bioText.length) {
        setTypedText(bioText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 50);

    return () => clearInterval(typeTimer);
  }, []);

  const personalInfo = {
    name: "Nikhil Kumar Bandi",
    email: "bandinikhilgoud4545@gmail.com",
    phone: "+91 XXXXX-XXXXX",
    location: "Available Globally",
    bio: "IT Professional with 3+ years of experience in Software Development, skilled at operating in a wide range of platforms including DevOps/SRE/Platform engineering, AWS, GCP, and Linux environments. Passionate about implementing modern DevOps practices, optimizing cloud infrastructure, and ensuring high availability and performance of critical systems."
  };

  const workExperiences = [
    {
      id: 1,
      role: "Platform Engineer",
      company: "SIDGS DIGISOL Pvt Ltd",
      status: "Current Position",
      type: "Full-time",
      icon: <Cloud className="w-5 h-5" />,
      description: "Leading DevOps initiatives and platform engineering for enterprise-scale applications.",
      projectRoles: [
        {
          project: "BDO Bank - Banking Microservices Platform",
          role: "DevOps Engineer/Application Support Engineer",
          responsibilities: [
            "Utilized archetypes to establish structured development environments with necessary dependencies and automation",
            "Managed build and release processes, including dependency management and deployment strategies",
            "Developed Helm charts to package and deploy applications on Kubernetes efficiently",
            "Ensured zero-downtime deployments and efficiently troubleshot issues",
            "Orchestrated CI/CD pipelines using GitLab for automated builds and deployments",
            "Built and published centralized artifacts using Maven, deploying to artifact registry",
            "Built custom Docker images using optimized Dockerfiles for efficient deployments",
            "Configured and deployed microservices on Amazon EKS with seamless integration",
            "Developed custom CloudWatch queries to monitor payment and transaction-related errors",
            "Managed TLS/mTLS certificates for secure communication with Apigee X platform"
          ],
          technologies: ["AWS EKS", "Docker", "Kubernetes", "Helm", "GitLab CI/CD", "Maven", "CloudWatch", "Apigee X", "TLS/mTLS", "Trivy", "Co-sign"]
        }
      ]
    },
    {
      id: 2,
      role: "System Administrator",
      company: "Anything 4 Home Ltd",
      status: "Previous Role",
      type: "Full-time",
      icon: <Database className="w-5 h-5" />,
      description: "Managed comprehensive system administration and monitoring infrastructure for e-commerce platform.",
      projectRoles: [
        {
          project: "E-commerce Infrastructure Modernization",
          role: "System Administrator",
          responsibilities: [
            "Managed cloud infrastructure, security, and resource configurations as System Administrator",
            "Specialized in monitoring and troubleshooting, focusing on tracing, logging, and debugging microservices",
            "Monitored and managed CD deployments using ArgoCD for seamless rollouts and quick failure recovery",
            "Implemented real-time monitoring and alerting using Prometheus and Grafana",
            "Diagnosed and resolved microservices issues leveraging CloudWatch and centralized logging tools",
            "Automated log analysis and alerting to proactively detect performance bottlenecks",
            "Collaborated with DevOps and SRE teams to optimize system reliability and enhance observability"
          ],
          technologies: ["ArgoCD", "Prometheus", "Grafana", "CloudWatch", "Microservices", "System Administration", "Linux"]
        }
      ]
    }
  ];

  const toggleExperience = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  const techStack = ["DevOps", "AWS", "GCP", "Docker", "Kubernetes", "Jenkins", "GitLab", "Terraform", "Python"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-4xl relative z-10">
        
        {/* Header/Name Section with enhanced animations */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6">
            {/* Glowing name effect */}
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-pulse">
              {personalInfo.name}
            </h1>
            
            {/* Floating contact info */}
            <div className="flex items-center justify-center gap-8 text-gray-300 mb-6 flex-wrap">
              <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 cursor-pointer group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300 cursor-pointer group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300 cursor-pointer group">
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>
            
            {/* Animated badges */}
            <div className="flex justify-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 text-sm font-medium animate-bounce">
                <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                Available for Freelance
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 text-sm font-medium animate-bounce" style={{animationDelay: '0.1s'}}>
                <Briefcase className="w-3 h-3 mr-2" />
                Open to Opportunities
              </Badge>
            </div>
            
            {/* Enhanced download button */}
            <Button 
              onClick={handleDownloadResume}
              className="download-btn bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Download className="w-5 h-5 mr-3" />
              Download Resume
            </Button>
          </div>

          {/* Tech stack floating */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {techStack.map((tech, index) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-xs text-gray-300 hover:bg-gray-700/60 hover:border-blue-500/50 transition-all duration-300 cursor-default"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bio Section with typing effect */}
        <Card className={`mb-8 bg-gray-800/50 border-gray-700 backdrop-blur-sm transition-all duration-700 hover:bg-gray-800/70 hover:shadow-xl hover:shadow-blue-500/10 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '0.2s'}}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-white">
              <div className="p-2 bg-blue-600 rounded-lg">
                <User className="w-5 h-5" />
              </div>
              About Me
              <div className="flex-1 h-px bg-gradient-to-r from-blue-500 to-transparent ml-4"></div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed text-lg">
              {personalInfo.bio}
              <span className="animate-pulse">|</span>
            </p>
          </CardContent>
        </Card>

        {/* Work Experience Section with enhanced interactions */}
        <Card className={`bg-gray-800/50 border-gray-700 backdrop-blur-sm transition-all duration-700 hover:bg-gray-800/70 hover:shadow-xl hover:shadow-purple-500/10 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '0.4s'}}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-white">
              <div className="p-2 bg-purple-600 rounded-lg">
                <Briefcase className="w-5 h-5" />
              </div>
              Work Experience
              <div className="flex-1 h-px bg-gradient-to-r from-purple-500 to-transparent ml-4"></div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {workExperiences.map((experience, index) => (
              <div 
                key={experience.id} 
                className="group border border-gray-700 rounded-xl p-6 bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                style={{animationDelay: `${0.6 + index * 0.1}s`}}
              >
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleExperience(experience.id)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                        {experience.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {experience.role}
                        </h3>
                        <p className="text-blue-400 font-medium">{experience.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-3 pl-11">{experience.description}</p>
                    <div className="flex items-center gap-3 pl-11">
                      <Badge variant="outline" className="border-gray-600 text-gray-300 hover:border-blue-500 transition-colors">
                        {experience.type}
                      </Badge>
                      <Badge 
                        className={`${experience.status === "Current Position" 
                          ? "bg-green-600 text-white" 
                          : "bg-gray-600 text-gray-200"} transition-all duration-300`}
                      >
                        {experience.status}
                      </Badge>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 rounded-full p-3"
                  >
                    {expandedExperience === experience.id ? (
                      <ChevronUp className="w-5 h-5 transform rotate-180 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                    )}
                  </Button>
                </div>

                {/* Expanded Project Roles with smooth animation */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedExperience === experience.id ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-6 border-t border-gray-700">
                    <h4 className="font-semibold text-white mb-6 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-blue-400" />
                      Project Roles:
                    </h4>
                    {experience.projectRoles.map((project, index) => (
                      <div key={index} className="mb-6 last:mb-0">
                        <div className="bg-gray-800/70 rounded-xl p-6 border border-gray-600 hover:border-blue-500/50 transition-all duration-300">
                          <h5 className="font-semibold text-white mb-2 text-lg">
                            {project.project}
                          </h5>
                          <p className="text-blue-400 font-medium mb-4">
                            Role: {project.role}
                          </p>
                          
                          <div className="mb-6">
                            <h6 className="font-medium text-gray-300 mb-3 flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Key Responsibilities:
                            </h6>
                            <div className="grid gap-2">
                              {project.responsibilities.map((resp, respIndex) => (
                                <div key={respIndex} className="flex items-start gap-3 text-sm text-gray-400 hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-gray-700/30">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{resp}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h6 className="font-medium text-gray-300 mb-3 flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              Technologies Used:
                            </h6>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge 
                                  key={techIndex} 
                                  className="bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Enhanced Contact Footer */}
        <div className={`text-center mt-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 backdrop-blur-sm transition-all duration-700 hover:shadow-xl hover:shadow-green-500/10 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '0.8s'}}>
          <h3 className="text-2xl font-semibold text-white mb-2">
            Ready to collaborate?
          </h3>
          <p className="text-gray-400 mb-6">Let's build something amazing together</p>
          <div className="flex justify-center gap-6">
            <Button 
              variant="outline"
              onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
              className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 px-6 py-3 rounded-xl group"
            >
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Send Email
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open(`tel:${personalInfo.phone}`, '_blank')}
              className="border-gray-600 text-gray-300 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all duration-300 px-6 py-3 rounded-xl group"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePortfolio;