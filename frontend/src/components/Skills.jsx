import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    // Animate progress bars on component mount
    const timer = setTimeout(() => {
      setAnimatedSkills({
        aws: 90,
        gcp: 85,
        docker: 92,
        kubernetes: 88,
        jenkins: 85,
        gitlab: 90,
        terraform: 82,
        monitoring: 87,
        linux: 90,
        scripting: 75
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const skillCategories = {
    cloud: {
      title: "Cloud Platforms",
      skills: [
        { name: "Amazon Web Services (AWS)", level: animatedSkills.aws || 0, tools: ["ECS", "EKS", "SQS", "CloudWatch", "VPC", "EC2", "IAM", "ECR", "RDS", "SNS", "S3"] },
        { name: "Google Cloud Platform (GCP)", level: animatedSkills.gcp || 0, tools: ["GKE", "IAM", "VPC", "Cloud Armor", "Cloud Storage", "Cloud Logging"] }
      ]
    },
    devops: {
      title: "DevOps & Automation",
      skills: [
        { name: "Docker & Containerization", level: animatedSkills.docker || 0, tools: ["Docker", "ECS", "Container Optimization"] },
        { name: "Kubernetes & Orchestration", level: animatedSkills.kubernetes || 0, tools: ["EKS", "Helm Charts", "ConfigSync", "ArgoCD"] },
        { name: "CI/CD Tools", level: animatedSkills.jenkins || 0, tools: ["Jenkins", "GitLab CI/CD", "Maven", "SonarQube"] },
        { name: "Infrastructure as Code", level: animatedSkills.terraform || 0, tools: ["Terraform", "Configuration Management"] }
      ]
    },
    monitoring: {
      title: "Monitoring & Security",
      skills: [
        { name: "Monitoring & Observability", level: animatedSkills.monitoring || 0, tools: ["CloudWatch", "Dynatrace", "Grafana", "Prometheus"] },
        { name: "Security & Compliance", level: animatedSkills.aws || 0, tools: ["Trivy", "Co-sign", "TLS/mTLS", "IP Whitelisting"] }
      ]
    },
    systems: {
      title: "Systems & Scripting",
      skills: [
        { name: "Operating Systems", level: animatedSkills.linux || 0, tools: ["Linux", "Windows", "System Administration"] },
        { name: "Scripting & Automation", level: animatedSkills.scripting || 0, tools: ["Shell Script", "Automation Tools"] }
      ]
    }
  };

  const tools = [
    "GitLab", "Jenkins", "GitHub", "Maven", "SonarQube", "Docker", "Kubernetes", 
    "ArgoCD", "Trivy", "Co-sign", "Git", "Terraform", "CloudWatch", "Dynatrace", 
    "Grafana", "Prometheus"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Technical Skills</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Expertise & Proficiency</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technical expertise across cloud platforms, DevOps tools, and modern automation technologies
          </p>
        </div>

        <Tabs defaultValue="cloud" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="cloud">Cloud Platforms</TabsTrigger>
            <TabsTrigger value="devops">DevOps & CI/CD</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            <TabsTrigger value="systems">Systems</TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <div className="grid gap-6">
                {category.skills.map((skill, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-semibold">{skill.name}</CardTitle>
                        <Badge variant="secondary">{skill.level}%</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress value={skill.level} className="mb-4" />
                      <div className="flex flex-wrap gap-2">
                        {skill.tools.map((tool, toolIndex) => (
                          <Badge key={toolIndex} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Tools & Technologies */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-center">Tools & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200 cursor-default"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;