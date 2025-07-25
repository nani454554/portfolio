import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = {
    degree: "Bachelor of Science in Computer Science",
    university: "Osmania University",
    location: "Hyderabad, India",
    highlights: [
      "Comprehensive study of computer science fundamentals",
      "Strong foundation in programming and software development",
      "Focus on algorithms, data structures, and system design",
      "Practical experience with various programming languages"
    ]
  };

  const certification = {
    title: "Google Cloud Platform Associate Cloud Engineer",
    issuer: "Google Cloud",
    status: "Active",
    credlyUrl: "https://www.credly.com/badges/53fdf088-8ff1-4d0c-a419-48b4a9ca42de/public_url",
    description: "Demonstrates ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud Platform.",
    skills: [
      "Google Cloud Platform",
      "Cloud Architecture",
      "Resource Management",
      "Security & Compliance",
      "Monitoring & Logging",
      "Network Configuration"
    ]
  };

  const additionalLearning = [
    {
      category: "Cloud Platforms",
      items: ["AWS Solutions Architecture", "GCP Professional Cloud Architect", "Azure Fundamentals"]
    },
    {
      category: "DevOps Tools",
      items: ["Kubernetes Administration", "Docker Certified Associate", "Jenkins Certified Engineer"]
    },
    {
      category: "Security",
      items: ["Cloud Security Best Practices", "DevSecOps Fundamentals", "Container Security"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Education & Certifications</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Academic Background</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {education.degree}
                  </CardTitle>
                  <p className="text-blue-600 font-semibold">{education.university}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <Badge variant="secondary">Computer Science Graduate</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Completed comprehensive study in Computer Science from {education.university}, 
                building a strong foundation in software development and system design.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {education.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Certification */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    GCP Associate Cloud Engineer
                  </CardTitle>
                  <p className="text-green-600 font-semibold">{certification.issuer}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <Badge className="bg-green-100 text-green-800">{certification.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                {certification.description}
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Validated Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {certification.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full mt-4"
                onClick={() => window.open(certification.credlyUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Certificate on Credly
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Learning & Skills Development */}
        <Card className="bg-gray-50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 text-center">
              Continuous Learning & Professional Development
            </CardTitle>
            <p className="text-gray-600 text-center">
              Committed to staying current with evolving technologies and industry best practices
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalLearning.map((category, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <div className={`w-8 h-8 rounded-full ${
                      index === 0 ? 'bg-blue-600' : 
                      index === 1 ? 'bg-purple-600' : 'bg-green-600'
                    }`}></div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Professional Philosophy */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Philosophy</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            "Technology evolves rapidly, and I believe in continuous learning to stay ahead of the curve. 
            My academic foundation in Computer Science, combined with industry certifications and hands-on experience, 
            enables me to adapt quickly to new tools and methodologies while maintaining excellence in delivery."
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2">Continuous Learner</Badge>
            <Badge variant="outline" className="px-4 py-2">Industry Certified</Badge>
            <Badge variant="outline" className="px-4 py-2">Technology Enthusiast</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;