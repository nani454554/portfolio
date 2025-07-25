import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Building, Briefcase } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = {
    email: "bandinikhilgoud4545@gmail.com",
    phone: "+91 XXXXX-XXXXX",
    location: "Available Globally",
    linkedin: "linkedin.com/in/nikhil-goud",
    github: "github.com/nikhilgoud"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const quickContactReasons = [
    {
      icon: <Building className="w-5 h-5" />,
      title: "Project Consultation",
      description: "Discuss your DevOps and cloud infrastructure needs"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Freelance Opportunities",
      description: "Explore freelance projects and consulting engagements"
    },
    {
      icon: <User className="w-5 h-5" />,
      title: "Career Opportunities",
      description: "Discuss potential full-time and contract positions"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Technical Discussion",
      description: "Share insights on cloud technologies and best practices"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-white/10 text-white border-white/20">Let's Connect</Badge>
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your next project or explore opportunities? Let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <Send className="w-6 h-6" />
                Send a Message
              </CardTitle>
              <p className="text-gray-300">Fill out the form below and I'll get back to you soon.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">Company/Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Your company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Contact Information</CardTitle>
                <p className="text-gray-300">Reach out through any of these channels</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-300">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-gray-300">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-300">{contactInfo.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Reasons */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Why Get In Touch?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quickContactReasons.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-blue-400">
                          {reason.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{reason.title}</h4>
                        <p className="text-sm text-gray-300">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-6 text-center border border-green-500/20">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">Currently Available</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Open to freelance projects, consulting opportunities, and full-time positions. 
                Ready to start immediately.
              </p>
              <div className="flex justify-center gap-2">
                <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                  &lt; 24hr Response
                </Badge>
                <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                  Remote Ready
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Let's discuss how I can help bring your DevOps and cloud infrastructure vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white hover:text-gray-900"
              onClick={() => window.open('mailto:bandinikhilgoud4545@gmail.com', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Directly
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white hover:text-gray-900"
              onClick={() => window.open('tel:+91XXXXXXXXXX', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;