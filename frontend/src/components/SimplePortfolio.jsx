import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, Briefcase, User, Download } from 'lucide-react';

const SimplePortfolio = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);

  const handleDownloadResume = () => {
    alert('Resume download started!');
  };

  const personalInfo = {
    name: "Nikhil Goud Bandini",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        
        {/* Header/Name Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {personalInfo.name}
            </h1>
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-8">
              <Badge className="bg-green-100 text-green-800 px-4 py-2">
                Available for Freelance
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                Open to Opportunities
              </Badge>
            </div>
            <Button 
              onClick={handleDownloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Bio Section */}
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <User className="w-5 h-5" />
              About
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed text-lg">
              {personalInfo.bio}
            </p>
          </CardContent>
        </Card>

        {/* Work Experience Section */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Briefcase className="w-5 h-5" />
              Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {workExperiences.map((experience) => (
              <div key={experience.id} className="border rounded-lg p-4 bg-white">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleExperience(experience.id)}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {experience.role}
                    </h3>
                    <p className="text-blue-600 font-medium">{experience.company}</p>
                    <p className="text-gray-600 text-sm">{experience.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        {experience.type}
                      </Badge>
                      <Badge 
                        variant={experience.status === "Current Position" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {experience.status}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    {expandedExperience === experience.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Expanded Project Roles */}
                {expandedExperience === experience.id && (
                  <div className="mt-6 pt-4 border-t">
                    <h4 className="font-semibold text-gray-900 mb-4">Project Roles:</h4>
                    {experience.projectRoles.map((project, index) => (
                      <div key={index} className="mb-6 last:mb-0">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-1">
                            {project.project}
                          </h5>
                          <p className="text-blue-600 font-medium mb-3">
                            Role: {project.role}
                          </p>
                          
                          <div className="mb-4">
                            <h6 className="font-medium text-gray-800 mb-2">Key Responsibilities:</h6>
                            <ul className="space-y-1">
                              {project.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex} className="flex items-start gap-2 text-sm text-gray-700">
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h6 className="font-medium text-gray-800 mb-2">Technologies Used:</h6>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Contact Footer */}
        <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Interested in working together?
          </h3>
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline"
              onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open(`tel:${personalInfo.phone}`, '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePortfolio;