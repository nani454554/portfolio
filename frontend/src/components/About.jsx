import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "DevOps Expertise",
      description: "Comprehensive knowledge in Configuration Management, Cloud Infrastructure, and Automation"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Platform Experience", 
      description: "Skilled in Amazon Web Services (AWS), Google Cloud Platform (GCP), and Linux environments"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Professional",
      description: "GCP Associate Cloud Engineer with proven expertise in cloud technologies"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Continuous Growth",
      description: "3+ years of progressive experience with focus on automation and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Career Objective</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              IT Professional with <span className="font-semibold text-blue-600">3+ years of experience</span> in Software Development, 
              skilled at operating in a wide range of platforms including <span className="font-semibold">DevOps/SRE/Platform engineering</span>, 
              AWS, GCP, and Linux environments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Specialized in <span className="font-semibold text-purple-600">DevOps/SRE/Platform engineering</span> with comprehensive 
              experience in Software Configuration Management, including Build Automation, Continuous Integration, 
              Continuous Deployment, and Monitoring using advanced automation tools.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Passionate about implementing modern DevOps practices, optimizing cloud infrastructure, and ensuring 
              high availability and performance of critical systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="text-blue-600 mb-3">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Competencies */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cloud Infrastructure</h4>
              <p className="text-gray-600 text-sm">AWS & GCP services, VPC, IAM, monitoring and optimization</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">DevOps & Automation</h4>
              <p className="text-gray-600 text-sm">CI/CD pipelines, containerization, orchestration with Kubernetes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Monitoring & Security</h4>
              <p className="text-gray-600 text-sm">System observability, security compliance, and performance optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;