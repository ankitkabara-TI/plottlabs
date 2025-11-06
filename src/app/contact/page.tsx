"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  Star, 
  Award, 
  Handshake, 
  GraduationCap, 
  Building2, 
  TrendingUp,
  BarChart3,
  Globe
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    agency: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const stats = [
    { icon: Clock, label: "24/7 Availability", value: "Always On", color: "blue" },
    { icon: Zap, label: "Avg. Response Time", value: "< 24 hours", color: "green" },
    { icon: Award, label: "Successful Deployments", value: "100+", color: "slate" },
    { icon: TrendingUp, label: "Implementation Timeline", value: "Weeks, Not Months", color: "blue" }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Toll-free number for immediate assistance",
      value: "(855) 756-8852",
      subtext: "Mon-Fri 8AM-6PM EST",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses from our experts",
      value: "support@plottlabs.com",
      subtext: "Response within 2 hours",
      color: "slate"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      description: "Visit our main office location",
      value: "123 Innovation Drive, Tech City, TC 12345",
      subtext: "View on Google Maps",
      color: "green"
    },
    {
      icon: Shield,
      title: "Emergency Support",
      description: "24/7 direct line for critical issues",
      value: "(855) 911-HELP",
      subtext: "Available 24/7/365",
      color: "red"
    }
  ];

  const expectations = [
    {
      icon: BarChart3,
      title: "Personalized Platform Demo",
      description: "30-minute tailored demonstration of our complete incident response suite"
    },
    {
      icon: Building2,
      title: "Custom Configuration",
      description: "See how our platform adapts to your agency's specific workflow and requirements"
    },
    {
      icon: Calendar,
      title: "Implementation Roadmap",
      description: "Detailed timeline and pricing discussion based on your deployment needs"
    },
    {
      icon: Users,
      title: "Expert Q&A Session",
      description: "Direct access to our technical experts and implementation specialists"
    }
  ];

  const comparisonData = [
    {
      feature: "Response Time",
      plottLabs: "Within 24 hours",
      others: "Weeks"
    },
    {
      feature: "Deployment",
      plottLabs: "Rapid cloud-based rollout",
      others: "Lengthy & complex"
    },
    {
      feature: "Customization",
      plottLabs: "Tailored to agency needs",
      others: "Generic, limited"
    },
    {
      feature: "Support",
      plottLabs: "24/7 expert-led support",
      others: "Business hours only"
    },
    {
      feature: "Integration",
      plottLabs: "Seamless CAD, Mobile, Analytics",
      others: "Fragmented tools"
    }
  ];

  const partners = [
    {
      icon: Globe,
      title: "Technology Partners",
      description: "Leading cloud infrastructure and security providers",
      count: "15+ Partners",
      color: "blue"
    },
    {
      icon: Handshake,
      title: "Channel Partners",
      description: "Certified resellers and implementation specialists",
      count: "50+ Partners",
      color: "slate"
    },
    {
      icon: GraduationCap,
      title: "Training Partners",
      description: "Professional training and certification programs",
      count: "25+ Partners",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "from-blue-500 to-blue-600", text: "text-blue-600", light: "bg-blue-100", glow: "shadow-blue-500/25" },
      purple: { bg: "from-purple-500 to-purple-600", text: "text-purple-600", light: "bg-purple-100", glow: "shadow-purple-500/25" },
      green: { bg: "from-green-500 to-green-600", text: "text-green-600", light: "bg-green-100", glow: "shadow-green-500/25" },
      cyan: { bg: "from-cyan-500 to-cyan-600", text: "text-cyan-600", light: "bg-cyan-100", glow: "shadow-cyan-500/25" },
      red: { bg: "from-red-500 to-red-600", text: "text-red-600", light: "bg-red-100", glow: "shadow-red-500/25" }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center gradient-mesh animate-rotate-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/60 rounded-full animate-particle-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/60 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-particle-float delay-500"></div>
        <div className="absolute top-60 right-40 w-3 h-3 bg-green-400/60 rounded-full animate-particle-float delay-700"></div>
        <div className="absolute bottom-40 right-60 w-4 h-4 bg-indigo-400/60 rounded-full animate-particle-float delay-300"></div>

        {/* Main gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float delay-500"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up">
              <span className="text-white drop-shadow-2xl">Connect With</span>
              <br />
              <span className="text-white animate-gradient-x">
                Plott Labs Experts
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed drop-shadow-lg animate-fade-in-up delay-300">
              Available 24/7 for Demo Requests, Implementation Planning, and Ongoing Support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up delay-400">
              <Button size="lg" className="text-lg px-10 py-6 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 animate-glow">
                <Link href="#contact-form">Request a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 animate-glow">
                <Link href="tel:8557568852">Call Our Team</Link>
              </Button>
            </div>
          </div>
          
          {/* Animated Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const colors = getColorClasses(stat.color);
              return (
                <div key={stat.label} className="glass rounded-2xl border border-white/20 p-6 text-center backdrop-blur-sm hover:scale-105 transition-all duration-500 animate-fade-in-up group" style={{animationDelay: `${600 + index * 150}ms`}}>
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                    <Icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Multiple Ways to Connect */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-slate-50/30"></div>
        
        {/* Background particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-particle-float"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-cyan-400/30 rounded-full animate-particle-float delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the communication method that works best for your agency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const colors = getColorClasses(method.color);
              return (
                <Card 
                  key={method.title}
                  className={`group hover:shadow-2xl hover:${colors.glow} transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up border-0 glass bg-white/80 backdrop-blur-sm hover:bg-white/95 relative overflow-hidden`}
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-glow`}>
                        <Icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {method.description}
                      </p>
                      <div className={`font-semibold ${colors.text} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                        {method.value}
                      </div>
                      <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                        {method.subtext}
                      </div>
                    </div>
                    
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-slate-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Contact Form */}
          <div className="max-w-4xl mx-auto" id="contact-form">
            <Card className="glass bg-white/90 backdrop-blur-sm border-0 shadow-2xl animate-fade-in-up delay-600">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-blue-600 mb-4">
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Fill out the form below and our team will contact you within 24 hours to schedule your personalized demonstration.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="h-12 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:border-gray-300"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="agency" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                        Agency/Organization *
                      </label>
                      <Input
                        id="agency"
                        name="agency"
                        type="text"
                        required
                        value={formData.agency}
                        onChange={handleChange}
                        placeholder="Metro Police Department"
                        className="h-12 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.smith@agency.gov"
                        className="h-12 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:border-gray-300"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="h-12 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="flex w-full rounded-md border-2 border-gray-200 bg-transparent px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:border-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current incident response challenges and what you're looking to improve..."
                    />
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25 animate-glow"
                      size="lg"
                    >
                      Request Demo
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500 text-center pt-4 border-t border-gray-200">
                    By submitting this form, you agree to our privacy policy and terms of service. We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready to Get Started */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        {/* Background particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-particle-float"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-cyan-400/30 rounded-full animate-particle-float delay-500"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-green-400/30 rounded-full animate-particle-float delay-700"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-2xl">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Here's what you can expect from your Plott Labs experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {expectations.map((expectation, index) => {
              const Icon = expectation.icon;
              return (
                <Card 
                  key={expectation.title}
                  className={`group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up border-0 glass bg-white/10 backdrop-blur-sm hover:bg-white/15 relative overflow-hidden`}
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-slate-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                        <Icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                        {expectation.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {expectation.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Response Time Info Box */}
          <div className="max-w-2xl mx-auto">
            <Card className="glass bg-gradient-to-r from-blue-500/20 to-slate-500/20 border border-white/20 backdrop-blur-sm animate-fade-in-up delay-800">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center animate-glow">
                  <Clock className="w-10 h-10 text-white animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Response Time Guarantee</h3>
                <p className="text-xl text-gray-200 mb-2">Replies within 24 hours</p>
                <p className="text-gray-300">Our team is standing by to help you get started</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Comparison Table */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-slate-50/30"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Why Choose Plott Labs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how we compare to traditional incident response solutions
            </p>
          </div>
          
          <Card className="glass bg-white/90 backdrop-blur-sm border-0 shadow-2xl animate-fade-in-up delay-300">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-6 text-lg font-bold text-gray-900">Feature</th>
                      <th className="text-center p-6 text-lg font-bold text-blue-600">Plott Labs</th>
                      <th className="text-center p-6 text-lg font-bold text-gray-600">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={row.feature} className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors duration-300 animate-fade-in-up`} style={{animationDelay: `${500 + index * 100}ms`}}>
                        <td className="p-6 font-semibold text-gray-900">{row.feature}</td>
                        <td className="p-6 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="font-semibold text-blue-600">{row.plottLabs}</span>
                          </div>
                        </td>
                        <td className="p-6 text-center text-gray-500">{row.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Partner & Support Network */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        {/* Background particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-particle-float"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-cyan-400/30 rounded-full animate-particle-float delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-2xl">
              Partner & Support Network
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Backed by industry leaders and supported by certified professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              const colors = getColorClasses(partner.color);
              return (
                <Card 
                  key={partner.title}
                  className={`group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up border-0 glass bg-white/10 backdrop-blur-sm hover:bg-white/15 relative overflow-hidden`}
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                        <Icon className="w-10 h-10 text-white group-hover:animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                        {partner.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                        {partner.description}
                      </p>
                      <div className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        {partner.count}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Executive Consultation */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden" id="schedule-meeting">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-slate-50/30"></div>
        
        {/* Background particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-particle-float"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-cyan-400/30 rounded-full animate-particle-float delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Executive Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strategic planning sessions with our leadership team
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* What to Expect */}
            <div className="animate-fade-in-left">
              <Card className="glass bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Strategic Consultation</h4>
                      <p className="text-gray-600">Deep-dive analysis of your agency's current challenges and future goals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Best Practices</h4>
                      <p className="text-gray-600">Learn from 100+ successful deployments across various agency types</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Integration Planning</h4>
                      <p className="text-gray-600">Detailed roadmap for seamless integration with your existing systems</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Schedule a Meeting */}
            <div className="animate-fade-in-right">
              <Card className="glass bg-gradient-to-br from-blue-50/80 to-slate-50/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-blue-600 mb-4">
                    Schedule a Meeting
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Book a 45-minute executive consultation with our leadership team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-slate-500 rounded-2xl flex items-center justify-center animate-glow">
                      <Calendar className="w-10 h-10 text-white animate-pulse" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Available Time Slots</h4>
                    <p className="text-gray-600 mb-6">Choose a time that works best for your schedule</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="py-3 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
                      9:00 AM EST
                    </Button>
                    <Button variant="outline" className="py-3 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
                      11:00 AM EST
                    </Button>
                    <Button variant="outline" className="py-3 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
                      2:00 PM EST
                    </Button>
                    <Button variant="outline" className="py-3 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
                      4:00 PM EST
                    </Button>
                  </div>
                  
                  <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-xl animate-glow">
                    Book Executive Meeting
                    <Calendar className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/60 rounded-full animate-particle-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/60 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-particle-float delay-500"></div>
        <div className="absolute top-60 right-40 w-3 h-3 bg-green-400/60 rounded-full animate-particle-float delay-700"></div>
        <div className="absolute bottom-40 right-60 w-4 h-4 bg-indigo-400/60 rounded-full animate-particle-float delay-300"></div>

        {/* Main gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float delay-500"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-2xl animate-fade-in-up">
            Ready to Modernize Your Incident Response?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in-up delay-200">
            Join 100+ agencies already transforming emergency response with Plott Labs' cloud-native platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-6 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 animate-glow animate-pulse">
              <Link href="#contact-form">Book a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 animate-glow">
              <Link href="tel:8557568852">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}