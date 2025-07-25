import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Platform Engineer",
      company: "SIDGS DIGISOL Pvt Ltd",
      location: "Current Position",
      type: "Full-time",
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
      technologies: ["AWS EKS", "Docker", "Kubernetes", "Helm", "GitLab CI/CD", "Maven", "CloudWatch", "Apigee X", "TLS/mTLS"],
      achievements: [
        "Implemented zero-downtime deployment strategies",
        "Optimized cloud resources for high availability and performance",
        "Successfully onboarded multiple microservices to EKS infrastructure"
      ]
    },
    {
      id: 2,
      role: "System Administrator",
      company: "Anything 4 Home Ltd",
      location: "Previous Role",
      type: "Full-time",
      responsibilities: [
        "Managed cloud infrastructure, security, and resource configurations as System Administrator",
        "Specialized in monitoring and troubleshooting, focusing on tracing, logging, and debugging microservices",
        "Monitored and managed CD deployments using ArgoCD for seamless rollouts and quick failure recovery",
        "Implemented real-time monitoring and alerting using Prometheus and Grafana",
        "Diagnosed and resolved microservices issues leveraging CloudWatch and centralized logging tools",
        "Automated log analysis and alerting to proactively detect performance bottlenecks",
        "Collaborated with DevOps and SRE teams to optimize system reliability and enhance observability"
      ],
      technologies: ["ArgoCD", "Prometheus", "Grafana", "CloudWatch", "Microservices", "System Administration"],
      achievements: [
        "Improved system reliability through proactive monitoring",
        "Reduced incident response time by implementing automated alerting",
        "Enhanced system observability across multiple microservices"
      ]
    }
  ];

  const projects = [
    {
      client: "Banco de Oro (BDO) Bank",
      role: "DevOps Engineer/Application Support Engineer",
      description: "Led DevOps initiatives for a major banking institution, focusing on secure, scalable microservices architecture and payment system reliability."
    },
    {
      client: "Anything 4 Home Ltd",
      role: "System Administrator",
      description: "Managed comprehensive system administration and monitoring infrastructure for e-commerce platform with focus on high availability."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Professional Experience</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="md:ml-16">
                  <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-900 mb-2">{exp.role}</CardTitle>
                          <div className="flex items-center gap-2 text-blue-600 mb-2">
                            <Building className="w-4 h-4" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <Badge variant={index === 0 ? "default" : "secondary"}>
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.slice(0, 5).map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Experience */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Project Experience</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-blue-600">{project.client}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{project.role}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;