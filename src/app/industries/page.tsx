import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  Clock,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  MapPin,
  Smartphone,
  BarChart3,
  Cloud,
  Quote,
  ChevronLeft,
  ChevronRight,
  Flame,
  Phone,
  Car,
  Activity,
  Zap,
  Truck,
  Plane,
  Factory,
  Hospital,
  School,
  Building,
  Wrench,
  Globe,
  Lock,
  Network,
  Target,
  AlertTriangle,
  Gauge,
  DollarSign,
  Eye,
  Heart
} from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries | Who We Serve | Plott Labs',
  description: 'Powering safer operations across industries with cloud-native solutions for public safety, critical infrastructure, and facilities management.',
  keywords: 'industries, public safety, critical infrastructure, facilities management, emergency response, Plott Labs',
};

export default function IndustriesPage() {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      slate: "from-slate-500 to-slate-600",
      green: "from-green-500 to-green-600",
      red: "from-red-500 to-red-600",
      gray: "from-gray-500 to-gray-600",
      orange: "from-orange-500 to-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIndustryColorClasses = (color: string) => {
    const colorMap = {
      red: {
        bg: "from-red-100 to-red-200",
        hoverBg: "from-red-500 to-red-600",
        text: "text-red-600",
        hoverText: "text-white",
        glow: "shadow-red-500/25"
      },
      blue: {
        bg: "from-blue-100 to-blue-200",
        hoverBg: "from-blue-500 to-blue-600",
        text: "text-blue-600",
        hoverText: "text-white",
        glow: "shadow-blue-500/25"
      },
      slate: {
        bg: "from-slate-100 to-slate-200",
        hoverBg: "from-slate-500 to-slate-600",
        text: "text-slate-600",
        hoverText: "text-white",
        glow: "shadow-slate-500/25"
      },
      green: {
        bg: "from-green-100 to-green-200",
        hoverBg: "from-green-500 to-green-600",
        text: "text-green-600",
        hoverText: "text-white",
        glow: "shadow-green-500/25"
      },
      gray: {
        bg: "from-gray-100 to-gray-200",
        hoverBg: "from-gray-500 to-gray-600",
        text: "text-gray-600",
        hoverText: "text-white",
        glow: "shadow-gray-500/25"
      },
      orange: {
        bg: "from-orange-100 to-orange-200",
        hoverBg: "from-orange-500 to-orange-600",
        text: "text-orange-600",
        hoverText: "text-white",
        glow: "shadow-orange-500/25"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const industryLogos = [
    { name: "Police Departments", icon: Shield, color: "blue" },
    { name: "Fire Services", icon: Flame, color: "red" },
    { name: "Emergency Medical", icon: Activity, color: "green" },
    { name: "Aviation Security", icon: Plane, color: "gray" },
    { name: "Critical Infrastructure", icon: Building, color: "slate" },
    { name: "Facilities Management", icon: Wrench, color: "orange" }
  ];

  const mainIndustries = [
    {
      title: "Public Safety",
      description: "Police, fire, and emergency medical services rely on Plott Labs for mission-critical response coordination and real-time situational awareness.",
      icon: Shield,
      color: "blue",
      benefits: ["Faster emergency response", "Real-time coordination", "Enhanced officer safety", "Improved resource allocation"],
      image: "public-safety"
    },
    {
      title: "Critical Infrastructure",
      description: "Power plants, water systems, and transportation networks use our platform to monitor, protect, and respond to threats in real-time.",
      icon: Building,
      color: "slate",
      benefits: ["Threat detection", "System monitoring", "Rapid response", "Asset protection"],
      image: "critical-infrastructure"
    },
    {
      title: "Facilities Management",
      description: "Corporate campuses, hospitals, and educational institutions leverage our solutions for comprehensive security and emergency management.",
      icon: Wrench,
      color: "green",
      benefits: ["Integrated security", "Emergency protocols", "Visitor management", "Incident tracking"],
      image: "facilities-management"
    }
  ];

  const caseExamples = [
    {
      industry: "Public Safety",
      problem: "Metro Police Department struggled with delayed emergency response due to fragmented communication systems.",
      solution: "Implemented Plott Labs' unified platform with real-time CAD integration and mobile coordination tools.",
      result: "45% faster response times, 99.9% system uptime, $2.3M in cost savings",
      metric: "45%",
      metricLabel: "Faster Response",
      color: "blue"
    },
    {
      industry: "Critical Infrastructure",
      problem: "Regional power grid operator needed real-time threat monitoring across multiple substations.",
      solution: "Deployed OneNet platform with integrated security monitoring and automated alert systems.",
      result: "Real-time threat detection, 60% faster incident response, zero security breaches",
      metric: "60%",
      metricLabel: "Faster Response",
      color: "slate"
    },
    {
      industry: "Facilities Management",
      problem: "University campus required integrated emergency management for 50,000+ students across multiple buildings.",
      solution: "Implemented comprehensive emergency response system with mobile alerts and building-specific protocols.",
      result: "Unified emergency protocols, instant campus-wide alerts, 30% faster evacuation times",
      metric: "30%",
      metricLabel: "Faster Evacuation",
      color: "green"
    }
  ];

  const whyPlottLabs = [
    {
      icon: Cloud,
      title: "Cloud-Native Agility",
      description: "Scale instantly during peak times and deploy updates without downtime, ensuring continuous operations when it matters most.",
      color: "blue"
    },
    {
      icon: Lock,
      title: "Security-First Design",
      description: "Built with DoD-level security standards and CJIS compliance, protecting sensitive data across all industries.",
      color: "slate"
    },
    {
      icon: Network,
      title: "Unified Platform",
      description: "One platform connecting all systems and agencies, eliminating data silos and enabling seamless coordination.",
      color: "green"
    },
    {
      icon: Globe,
      title: "Interoperability",
      description: "Connect with existing systems and protocols, ensuring smooth integration without disrupting current operations.",
      color: "gray"
    }
  ];

  const testimonials = [
    {
      quote: "Plott Labs transformed our emergency response capabilities across all our facilities. The unified platform gives us complete visibility and control.",
      author: "Sarah Martinez",
      title: "Chief Security Officer",
      company: "Metro University System",
      industry: "Facilities Management"
    },
    {
      quote: "The real-time coordination capabilities have revolutionized how we respond to infrastructure threats. Response times improved dramatically.",
      author: "David Chen",
      title: "Operations Director",
      company: "Regional Power Authority",
      industry: "Critical Infrastructure"
    },
    {
      quote: "Our police department's efficiency increased by 45% with Plott Labs. The mobile coordination tools are game-changing for field operations.",
      author: "Chief Michael Rodriguez",
      title: "Police Chief",
      company: "Metro Police Department",
      industry: "Public Safety"
    }
  ];

  const impactPatterns = [
    {
      icon: Gauge,
      title: "Faster Response",
      description: "Average 40-60% improvement in response times across all industries",
      color: "blue"
    },
    {
      icon: DollarSign,
      title: "Lower Cost",
      description: "30-50% reduction in operational costs through improved efficiency",
      color: "green"
    },
    {
      icon: Eye,
      title: "Real-time Awareness",
      description: "Complete situational awareness with live data and analytics",
      color: "slate"
    },
    {
      icon: Heart,
      title: "Safety Improvements",
      description: "Enhanced safety outcomes through better coordination and response",
      color: "red"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Industry Focused */}
      <section className="relative min-h-[100vh] flex items-center justify-center gradient-mesh animate-rotate-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
                <span className="text-white drop-shadow-2xl">Who We</span>
                <br />
                <span className="text-white">
                  Serve
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-200 mb-12 leading-relaxed drop-shadow-lg max-w-4xl mx-auto animate-fade-in-up delay-300">
                Powering safer operations across industries with cloud-native solutions tailored to mission-critical needs
              </p>
            </div>
            
            {/* Industry Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-500">
              <div className="glass rounded-2xl border border-white/20 p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-300 text-sm">Industries Served</div>
              </div>
              <div className="glass rounded-2xl border border-white/20 p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Organizations</div>
              </div>
              <div className="glass rounded-2xl border border-white/20 p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime</div>
              </div>
              <div className="glass rounded-2xl border border-white/20 p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-orange-400 mb-2">$50M+</div>
                <div className="text-gray-300 text-sm">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Showcase - Dynamic Visual Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-slate-200/20 rounded-full blur-2xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-200/20 rounded-full blur-2xl animate-float delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Industries We Power
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency response to critical infrastructure, we deliver mission-critical solutions across diverse sectors
            </p>
          </div>

          {/* Dynamic Industry Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainIndustries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.title}
                  className={`group relative animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Main Card */}
                  <div className="relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 overflow-hidden">
                    {/* Dynamic Background */}
                    <div className="absolute inset-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(industry.color)} opacity-5 group-hover:opacity-10 transition-opacity duration-700`}></div>
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-slate-200/30 to-transparent rounded-full translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8">
                      {/* Header with Icon and Title */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-20 h-20 bg-gradient-to-br ${getColorClasses(industry.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-blue-600">
                            {index + 1}
                          </div>
                          <div className="text-sm text-gray-500">Industry</div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        {industry.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                        {industry.description}
                      </p>

                      {/* Benefits List with Icons */}
                      <div className="space-y-3 mb-6">
                        {industry.benefits.map((benefit, idx) => (
                          <div key={benefit} className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${idx * 100}ms` }}>
                            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Industry Stats */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                            {index === 0 ? "45%" : index === 1 ? "99.9%" : "30%"}
                          </div>
                          <div className="text-xs text-gray-500">Improvement</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                            {index === 0 ? "500+" : index === 1 ? "24/7" : "85%"}
                          </div>
                          <div className="text-xs text-gray-500">Coverage</div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Challenges & Solutions */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-slate-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              Industry Challenges
              <br />
              <span className="text-white">
                We Solve
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every industry faces unique challenges. We provide tailored solutions that address specific needs.
            </p>
          </div>

          {/* Challenge-Solution Pairs with Subtle Distinction */}
          <div className="space-y-16">
            {[
              {
                challenge: "Fragmented Communication Systems",
                solution: "Unified Platform Integration",
                description: "Breaking down silos between departments and agencies with real-time data sharing",
                icon: Network,
                color: "blue"
              },
              {
                challenge: "Legacy System Limitations",
                solution: "Cloud-Native Modernization",
                description: "Migrating from outdated systems to scalable, secure cloud infrastructure",
                icon: Cloud,
                color: "slate"
              },
              {
                challenge: "Security & Compliance Concerns",
                solution: "Enterprise-Grade Security",
                description: "Implementing DoD-level security with built-in compliance for sensitive operations",
                icon: Lock,
                color: "green"
              },
              {
                challenge: "Scalability During Peak Times",
                solution: "Auto-Scaling Infrastructure",
                description: "Automatically adjusting resources to handle increased demand without downtime",
                icon: TrendingUp,
                color: "orange"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.challenge} className="relative">
                  {/* Connection Arrow */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-slate-500 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Challenge Card */}
                    <div className="animate-fade-in-left">
                      <div className="relative">
                        {/* Challenge Badge */}
                        <div className="absolute -top-3 -left-3 z-20">
                          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                            Challenge
                          </div>
                        </div>
                        
                        <div className="glass rounded-3xl border border-white/10 p-8 group hover:border-white/20 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:scale-[1.02]">
                          <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <AlertTriangle className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                                {item.challenge}
                              </h3>
                            </div>
                          </div>
                          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                            {item.description}
                          </p>
                          
                          {/* Challenge Indicators */}
                          <div className="mt-6 flex items-center space-x-4">
                            <div className="flex items-center space-x-2 text-orange-400">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <span className="text-sm">Critical Issue</span>
                            </div>
                            <div className="flex items-center space-x-2 text-orange-400">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <span className="text-sm">High Impact</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Solution Card */}
                    <div className="animate-fade-in-right">
                      <div className="relative">
                        {/* Solution Badge */}
                        <div className="absolute -top-3 -left-3 z-20">
                          <div className="bg-gradient-to-r from-blue-500 to-slate-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                            Our Solution
                          </div>
                        </div>
                        
                        <div className="glass rounded-3xl border border-white/10 p-8 group hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02]">
                          <div className="flex items-center mb-6">
                            <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(item.color)} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                                {item.solution}
                              </h3>
                            </div>
                          </div>
                          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                            {item.description}
                          </p>
                          
                          {/* Solution Benefits */}
                          <div className="mt-6 flex items-center space-x-4">
                            <div className="flex items-center space-x-2 text-blue-400">
                              <CheckCircle className="w-4 h-4 text-blue-500" />
                              <span className="text-sm">Proven Results</span>
                            </div>
                            <div className="flex items-center space-x-2 text-blue-400">
                              <CheckCircle className="w-4 h-4 text-blue-500" />
                              <span className="text-sm">Scalable</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Success Metrics */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-slate-50/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Industry Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Measurable results across different industries and use cases
            </p>
          </div>

          {/* Success Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { metric: "45%", label: "Faster Response Times", icon: Gauge, color: "blue" },
              { metric: "99.9%", label: "System Uptime", icon: Shield, color: "green" },
              { metric: "$2.3M", label: "Average Cost Savings", icon: DollarSign, color: "slate" },
              { metric: "500+", label: "Organizations Served", icon: Users, color: "orange" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${getColorClasses(item.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white group-hover:animate-pulse" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">{item.metric}</div>
                    <div className="text-gray-600 group-hover:text-gray-500 transition-colors duration-300">{item.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Industry-Specific Results */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "Public Safety",
                icon: Shield,
                color: "blue",
                results: [
                  { metric: "45%", label: "Faster Emergency Response" },
                  { metric: "60%", label: "Reduced Dispatch Time" },
                  { metric: "98%", label: "Officer Satisfaction" }
                ]
              },
              {
                industry: "Critical Infrastructure",
                icon: Building,
                color: "slate",
                results: [
                  { metric: "99.9%", label: "System Reliability" },
                  { metric: "50%", label: "Faster Threat Detection" },
                  { metric: "Zero", label: "Security Breaches" }
                ]
              },
              {
                industry: "Facilities Management",
                icon: Wrench,
                color: "green",
                results: [
                  { metric: "30%", label: "Faster Evacuation" },
                  { metric: "85%", label: "Cost Reduction" },
                  { metric: "24/7", label: "Monitoring Coverage" }
                ]
              }
            ].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={industry.industry} className="group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(industry.color)} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">{industry.industry}</h3>
                    </div>
                    <div className="space-y-4">
                      {industry.results.map((result, idx) => (
                        <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0 group-hover:border-gray-200 transition-colors duration-300">
                          <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{result.label}</span>
                          <span className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">{result.metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-slate-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              Tailored Solutions
              <br />
              <span className="text-white">
                For Every Industry
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Customized approaches that address the unique challenges and requirements of each sector
            </p>
          </div>

          {/* Industry Solutions Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-slate-500 to-blue-600 rounded-full"></div>
            
            <div className="space-y-16">
              {[
                {
                  industry: "Public Safety",
                  icon: Shield,
                  color: "blue",
                  solutions: ["Real-time CAD integration", "Mobile field coordination", "Multi-agency communication", "Emergency response analytics"],
                  position: "left"
                },
                {
                  industry: "Critical Infrastructure",
                  icon: Building,
                  color: "slate",
                  solutions: ["Threat monitoring systems", "Asset protection protocols", "Compliance management", "Incident response automation"],
                  position: "right"
                },
                {
                  industry: "Facilities Management",
                  icon: Wrench,
                  color: "green",
                  solutions: ["Integrated security systems", "Visitor management", "Emergency protocols", "Maintenance coordination"],
                  position: "left"
                }
              ].map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div key={industry.industry} className={`flex items-center ${industry.position === 'right' ? 'flex-row-reverse' : ''} animate-fade-in-up`} style={{ animationDelay: `${index * 300}ms` }}>
                    <div className={`w-1/2 ${industry.position === 'right' ? 'pl-8' : 'pr-8'}`}>
                      <div className="glass rounded-3xl border border-white/10 p-8 group hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02]">
                        <div className="flex items-center mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(industry.color)} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">{industry.industry}</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {industry.solutions.map((solution, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span>{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className={`w-8 h-8 bg-gradient-to-br ${getColorClasses(industry.color)} rounded-full flex items-center justify-center z-10 shadow-lg`}>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partners Showcase */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-slate-50/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Organizations across diverse sectors rely on Plott Labs for mission-critical operations
            </p>
          </div>

          {/* Industry Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                industry: "Public Safety",
                partners: ["Metro Police Department", "State Fire Services", "Regional EMS", "County Sheriff's Office"],
                icon: Shield,
                color: "blue"
              },
              {
                industry: "Critical Infrastructure",
                partners: ["Regional Power Authority", "Water Treatment Facilities", "Transportation Networks", "Telecommunications"],
                icon: Building,
                color: "slate"
              },
              {
                industry: "Facilities Management",
                partners: ["University Systems", "Hospital Networks", "Corporate Campuses", "Government Facilities"],
                icon: Wrench,
                color: "green"
              }
            ].map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div key={sector.industry} className="group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(sector.color)} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">{sector.industry}</h3>
                    </div>
                    <div className="space-y-3">
                      {sector.partners.map((partner, idx) => (
                        <div key={idx} className="flex items-center space-x-3 py-2 border-b border-gray-100 last:border-b-0 group-hover:border-gray-200 transition-colors duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-slate-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{partner}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Organizations Served" },
              { number: "15+", label: "Industries Covered" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Transformation Journey */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-slate-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              Your Industry's
              <br />
              <span className="text-white">
                Transformation Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From initial assessment to full deployment, we guide you through every step
            </p>
          </div>

          {/* Journey Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Analyze your current systems and identify improvement opportunities",
                icon: Target,
                color: "blue"
              },
              {
                step: "02",
                title: "Planning",
                description: "Develop a customized implementation strategy for your industry",
                icon: MapPin,
                color: "slate"
              },
              {
                step: "03",
                title: "Deployment",
                description: "Seamless integration with minimal disruption to operations",
                icon: Zap,
                color: "green"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and improvement for maximum impact",
                icon: TrendingUp,
                color: "orange"
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="glass rounded-3xl border border-white/10 p-8 text-center group-hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${getColorClasses(step.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-10 h-10 text-white group-hover:animate-pulse" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold text-white group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry-Focused CTA */}
      <section className="py-24 gradient-mesh animate-rotate-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-white drop-shadow-2xl">Ready to Transform</span>
              <br />
              <span className="text-white">
                Your Industry?
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-200 mb-12 leading-relaxed drop-shadow-lg max-w-4xl mx-auto animate-fade-in-up delay-300">
              Join industry leaders who have revolutionized their operations with Plott Labs' cloud-native solutions
            </p>
          </div>
          
          {/* Industry-Specific CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-up delay-500">
            <div className="glass rounded-2xl border border-white/20 p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Public Safety</h3>
              <p className="text-gray-300 text-sm mb-4">Emergency response & coordination</p>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/solutions/cad">Explore CAD Solutions</Link>
              </Button>
            </div>
            
            <div className="glass rounded-2xl border border-white/20 p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <Building className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Infrastructure</h3>
              <p className="text-gray-300 text-sm mb-4">Critical systems & monitoring</p>
              <Button size="sm" className="w-full bg-slate-600 hover:bg-slate-700">
                <Link href="/solutions/analytics">View Analytics</Link>
              </Button>
            </div>
            
            <div className="glass rounded-2xl border border-white/20 p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <Wrench className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Facilities</h3>
              <p className="text-gray-300 text-sm mb-4">Management & security</p>
              <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                <Link href="/solutions/mobile">Mobile Solutions</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-700">
            <Button size="lg" className="text-lg px-10 py-7 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl font-semibold">
              <Link href="/contact#schedule-meeting">Schedule Industry Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/solutions">Explore All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
