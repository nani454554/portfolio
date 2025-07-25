import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ExternalLink, GitBranch, Server, Shield, Clock, Users } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Banking Microservices Platform - BDO Bank",
      category: "Enterprise Banking",
      client: "Banco de Oro (BDO) Bank",
      duration: "Feb 2024 - Present",
      status: "Active",
      overview: "Comprehensive DevOps infrastructure for a major banking institution, focusing on secure payment processing and transaction monitoring.",
      description: "Led the implementation of a robust microservices architecture for BDO Bank's digital banking platform. The project involved establishing CI/CD pipelines, container orchestration, and comprehensive monitoring solutions to ensure zero-downtime operations for critical financial services.",
      technologies: ["AWS EKS", "Docker", "Kubernetes", "Helm", "GitLab CI/CD", "Maven", "CloudWatch", "Apigee X", "TLS/mTLS", "Trivy", "Co-sign"],
      achievements: [
        "Achieved 99.9% uptime for critical banking services",
        "Reduced deployment time from 4 hours to 15 minutes",
        "Implemented zero-downtime deployment strategies",
        "Enhanced security with TLS/mTLS certificate management",
        "Established centralized artifact management system"
      ],
      responsibilities: [
        "Utilized archetypes to establish structured development environments",
        "Developed Helm charts for efficient Kubernetes deployments",
        "Orchestrated CI/CD pipelines using GitLab for automated builds",
        "Built custom Docker images with optimized Dockerfiles",
        "Configured microservices on Amazon EKS with seamless integration",
        "Developed custom CloudWatch queries for payment monitoring",
        "Managed TLS/mTLS certificates for Apigee X platform security",
        "Implemented IP whitelisting rules for platform access control"
      ],
      challenges: [
        "Ensuring zero-downtime deployments for critical banking operations",
        "Managing complex certificate renewal and rotation processes",
        "Implementing comprehensive monitoring for payment transactions",
        "Maintaining high security standards for financial data"
      ],
      impact: "Significantly improved the bank's digital infrastructure reliability and security, enabling seamless customer experience and regulatory compliance.",
      metrics: {
        uptime: "99.9%",
        deploymentTime: "15 min",
        services: "25+",
        transactions: "1M+ daily"
      }
    },
    {
      id: 2,
      title: "E-commerce Infrastructure Modernization",
      category: "E-commerce Platform",
      client: "Anything 4 Home Ltd",
      duration: "Jul 2020 - Sep 2022",
      status: "Completed",
      overview: "Complete infrastructure overhaul and monitoring implementation for a growing e-commerce platform with focus on scalability and reliability.",
      description: "Transformed the existing infrastructure from traditional server management to a modern, monitored, and automated system. Implemented comprehensive observability solutions and established robust deployment processes using ArgoCD.",
      technologies: ["ArgoCD", "Prometheus", "Grafana", "CloudWatch", "Linux", "Microservices", "Docker", "System Administration"],
      achievements: [
        "Reduced system downtime by 75%",
        "Implemented real-time monitoring and alerting",
        "Automated log analysis and performance detection",
        "Improved deployment reliability with ArgoCD",
        "Enhanced system observability across all services"
      ],
      responsibilities: [
        "Managed cloud infrastructure, security, and resource configurations",
        "Specialized in monitoring and troubleshooting microservices issues",
        "Monitored CD deployments using ArgoCD for seamless rollouts",
        "Implemented real-time monitoring using Prometheus and Grafana",
        "Diagnosed and resolved issues using CloudWatch and logging tools",
        "Automated log analysis and alerting systems",
        "Collaborated with DevOps and SRE teams for system optimization"
      ],
      challenges: [
        "Migrating from legacy infrastructure without service interruption",
        "Implementing comprehensive monitoring for distributed microservices",
        "Establishing automated deployment processes",
        "Creating proactive alerting systems for early issue detection"
      ],
      impact: "Transformed the platform's reliability and operational efficiency, enabling business growth through improved system stability and faster issue resolution.",
      metrics: {
        downtime: "-75%",
        responseTime: "30 sec",
        services: "15+",
        alerts: "24/7"
      }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Enterprise Banking': return <Shield className="w-5 h-5" />;
      case 'E-commerce Platform': return <Server className="w-5 h-5" />;
      default: return <GitBranch className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Projects Portfolio</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing key projects that demonstrate expertise in DevOps, cloud infrastructure, and enterprise-scale solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getCategoryIcon(project.category)}
                      <Badge variant="outline" className="text-xs">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {project.title}
                    </CardTitle>
                    <p className="text-gray-600 mb-3">{project.client}</p>
                  </div>
                  <Badge className={`${getStatusColor(project.status)} px-3 py-1`}>
                    {project.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{project.overview}</p>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-bold text-lg text-blue-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies Preview */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-gray-900">
                        {project.title}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="technical">Technical</TabsTrigger>
                        <TabsTrigger value="achievements">Results</TabsTrigger>
                        <TabsTrigger value="challenges">Challenges</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="overview" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Client</h4>
                            <p className="text-gray-700">{project.client}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                            <p className="text-gray-700">{project.duration}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Project Description</h4>
                          <p className="text-gray-700 leading-relaxed">{project.description}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
                          <p className="text-gray-700 leading-relaxed">{project.impact}</p>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="technical" className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Technologies & Tools</h4>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, index) => (
                              <Badge key={index} variant="outline">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                          <ul className="space-y-2">
                            {project.responsibilities.map((resp, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-700">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="achievements" className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                          <ul className="space-y-2 mb-6">
                            {project.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-700">
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Project Metrics</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="font-bold text-2xl text-blue-600">{value}</div>
                                <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="challenges" className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Technical Challenges</h4>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-700">
                                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Project Stats */}
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Overview</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="font-bold text-2xl text-gray-900">2+</div>
              <div className="text-gray-600">Major Clients</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <div className="font-bold text-2xl text-gray-900">40+</div>
              <div className="text-gray-600">Services Deployed</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <div className="font-bold text-2xl text-gray-900">99.9%</div>
              <div className="text-gray-600">Average Uptime</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <div className="font-bold text-2xl text-gray-900">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;