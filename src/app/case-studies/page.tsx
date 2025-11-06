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
  Truck
} from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Plott Labs Success Stories',
  description: 'Explore how agencies improved response times with Plott Labs\' SaaS suite.',
  keywords: 'case studies, success stories, emergency response, CAD, Plott Labs',
};

export default function CaseStudiesPage() {
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

  const getClientColorClasses = (color: string) => {
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

  const clientLogos = [
    { name: "Metro Fire Department", location: "California", icon: Flame, color: "red" },
    { name: "State Emergency Services", location: "Texas", icon: Phone, color: "blue" },
    { name: "County Sheriff's Office", location: "Florida", icon: Shield, color: "slate" },
    { name: "Regional EMS", location: "New York", icon: Activity, color: "green" },
    { name: "City Police Department", location: "Illinois", icon: Car, color: "gray" },
    { name: "Rural Fire District", location: "Oregon", icon: Truck, color: "orange" }
  ];

  const featuredCaseStudies = [
    {
      title: "Metro Fire Department",
      location: "Los Angeles, CA",
      problem: "Legacy CAD system was causing 2-3 minute delays in dispatch response, with frequent system crashes during peak hours. Field personnel had no real-time access to incident data.",
      solution: "Deployed Plott Labs' OneNet Incident Response Cloud with integrated CAD, Map, and Mobile applications. Implemented cloud-native architecture for 99.9% uptime and real-time data synchronization.",
      outcome: {
        responseTime: "45%",
        uptime: "99.9%",
        costSavings: "$2.3M",
        satisfaction: "98%"
      },
      color: "blue"
    },
    {
      title: "State Emergency Services",
      location: "Austin, TX",
      problem: "Multiple agencies using incompatible systems couldn't share critical incident data during statewide emergencies. Manual coordination was causing dangerous delays.",
      solution: "Implemented OneNet platform with open architecture, enabling seamless data sharing between 15+ agencies. Deployed Mobile app for field coordination and Analytics for real-time situational awareness.",
      outcome: {
        responseTime: "60%",
        coordination: "Real-time",
        agencies: "15+",
        incidents: "500+"
      },
      color: "slate"
    },
    {
      title: "County Sheriff's Office",
      location: "Miami-Dade, FL",
      problem: "Outdated on-premise system required expensive hardware upgrades and couldn't scale during hurricane season. Security vulnerabilities were a constant concern.",
      solution: "Migrated to Plott Labs' SaaS platform with DoD-level security and automatic scaling. Deployed Map application for hurricane tracking and Mobile app for field operations.",
      outcome: {
        responseTime: "35%",
        security: "DoD Level",
        scalability: "Auto",
        costSavings: "$1.8M"
      },
      color: "blue"
    }
  ];

  const caseStudyPreviews = [
    {
      title: "Rural Fire District Modernization",
      location: "Bend, OR",
      snippet: "How a small rural district achieved enterprise-level capabilities with cloud-native solutions.",
      image: "rural-fire",
      color: "green"
    },
    {
      title: "Multi-Agency Coordination Success",
      location: "Denver, CO",
      snippet: "Breaking down silos between police, fire, and EMS with unified incident management.",
      image: "multi-agency",
      color: "blue"
    },
    {
      title: "Disaster Response Optimization",
      location: "New Orleans, LA",
      snippet: "Real-time coordination during major weather events using mobile-first design.",
      image: "disaster-response",
      color: "slate"
    },
    {
      title: "Analytics-Driven Operations",
      location: "Seattle, WA",
      snippet: "Data insights that transformed emergency response planning and resource allocation.",
      image: "analytics",
      color: "blue"
    }
  ];

  const testimonials = [
    {
      quote: "Plott Labs transformed our emergency response capabilities. The 45% improvement in response times has literally saved lives in our community.",
      author: "Sarah Chen",
      title: "Fire Chief",
      agency: "Metro Fire Department",
      location: "Los Angeles, CA"
    },
    {
      quote: "The seamless integration between agencies during statewide emergencies is remarkable. We can now coordinate in real-time like never before.",
      author: "Michael Rodriguez",
      title: "Emergency Services Director",
      agency: "State Emergency Services",
      location: "Austin, TX"
    },
    {
      quote: "The security and scalability of the OneNet platform gives us confidence to handle any situation, from daily operations to major disasters.",
      author: "Dr. Jennifer Walsh",
      title: "Sheriff",
      agency: "County Sheriff's Office",
      location: "Miami-Dade, FL"
    }
  ];

  const keyBenefits = [
    {
      icon: Clock,
      title: "Faster Response Times",
      description: "Average 40-60% improvement in emergency response times across all deployments",
      color: "blue"
    },
    {
      icon: Cloud,
      title: "SaaS Flexibility & Scalability",
      description: "Automatic scaling during peak times and seamless updates without downtime",
      color: "slate"
    },
    {
      icon: Shield,
      title: "Secure & Compliant by Design",
      description: "Built-in DoD-level security and CJIS compliance from day one",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Lower Cost of Ownership",
      description: "Average 30-50% reduction in total cost of ownership compared to legacy systems",
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center gradient-mesh animate-rotate-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>


        {/* Main gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float delay-500"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                <span className="text-white drop-shadow-2xl">Real Stories.</span>
                <br />
                <span className="text-white">
                  Real Impact.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed drop-shadow-lg animate-fade-in-up delay-300">
                See how agencies transformed response times and security outcomes with Plott Labs' cloud-native platform.
              </p>
              <div className="animate-fade-in-up delay-400">
                <Button size="lg" className="text-lg px-10 py-6 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <Link href="#featured-cases">Explore Case Studies</Link>
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-right delay-500">
              <div className="relative">
                <div className="glass rounded-2xl border border-white/20 p-8 backdrop-blur-sm hover:scale-105 transition-all duration-500 animate-scale-in delay-700">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <BarChart3 className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Success Metrics</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-blue-400">40-60%</div>
                        <div className="text-gray-300 text-sm">Faster Response</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-500">99.9%</div>
                        <div className="text-gray-300 text-sm">Uptime</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-400">$2M+</div>
                        <div className="text-gray-300 text-sm">Cost Savings</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-400">15+</div>
                        <div className="text-gray-300 text-sm">Agencies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Trusted by Agencies Nationwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Emergency response agencies across the country rely on Plott Labs for mission-critical operations
            </p>
          </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {clientLogos.map((client, index) => {
                const Icon = client.icon;
                const colors = getClientColorClasses(client.color);
                return (
                  <Card
                    key={client.name}
                    className={`group hover:shadow-2xl hover:${colors.glow} transition-all duration-500 hover:scale-110 hover:-translate-y-4 animate-fade-in-up border-0 glass bg-white/80 backdrop-blur-sm hover:bg-white/95 relative overflow-hidden`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 text-center relative z-10">
                      {/* Background gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.hoverBg} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}></div>
                      
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${colors.bg} group-hover:bg-gradient-to-br group-hover:${colors.hoverBg} rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                        <Icon className={`w-8 h-8 ${colors.text} group-hover:${colors.hoverText} transition-all duration-300`} />
                      </div>
                      
                      <div className="relative">
                        <h3 className={`text-sm font-semibold text-gray-800 group-hover:${colors.text} mb-1 transition-colors duration-300 group-hover:scale-105 transform`}>
                          {client.name}
                        </h3>
                        <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                          {client.location}
                        </p>
                      </div>
                      
                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section id="featured-cases" className="py-24 gradient-dark relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-2xl">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real agencies, real challenges, real results with Plott Labs' cloud-native solutions
            </p>
          </div>

          <div className="space-y-16">
            {featuredCaseStudies.map((study, index) => (
              <div key={study.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-fade-in-left`}>
                  <div className="glass rounded-2xl border border-white/10 p-8 group hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02]">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(study.color)} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">{study.title}</h3>
                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{study.location}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2 flex items-center group-hover:text-gray-100 transition-colors duration-300">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                          The Problem
                        </h4>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{study.problem}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2 flex items-center group-hover:text-gray-100 transition-colors duration-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          The Solution
                        </h4>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-fade-in-right`}>
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xl group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 text-center group-hover:text-gray-800 transition-colors duration-300">The Results</h4>
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(study.outcome).map(([key, value], idx) => (
                        <div key={key} className="text-center group/metric hover:scale-105 transition-transform duration-300">
                          <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${getColorClasses(study.color)} rounded-2xl flex items-center justify-center group-hover/metric:scale-110 transition-transform duration-300`}>
                            <TrendingUp className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-3xl font-bold text-gray-900 mb-1 group-hover/metric:text-gray-700 transition-colors duration-300 animate-scale-in" style={{ animationDelay: `${idx * 200}ms` }}>{value}</div>
                          <div className="text-sm text-gray-600 capitalize group-hover/metric:text-gray-500 transition-colors duration-300">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-slate-50/30"></div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how different agencies achieved their transformation goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudyPreviews.map((preview, index) => (
              <Card
                key={preview.title}
                className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up border-0 glass bg-white/80 backdrop-blur-sm hover:bg-white/90`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(preview.color)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                          {preview.title}
                        </h3>
                        <p className="text-gray-600 text-sm group-hover:text-gray-500 transition-colors duration-300">{preview.location}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {preview.snippet}
                    </p>

                    <Button variant="outline" className="group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all duration-300 hover:shadow-lg">
                      <Link href="#" className="flex items-center space-x-2">
                        <span>Read Full Story</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-green-400/30 rounded-full animate-particle-float delay-700"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-2xl">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hear directly from the leaders who transformed their operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.author}
                className={`group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up border-0 glass bg-white/10 backdrop-blur-sm hover:bg-white/15`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Quote className="w-8 h-8 text-white" />
                    </div>

                    <blockquote className="text-lg text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300 animate-fade-in-up delay-100">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="border-t border-gray-600 group-hover:border-gray-500 transition-colors duration-300 pt-6">
                      <div className="text-white font-semibold text-lg group-hover:text-gray-200 transition-colors duration-300 animate-fade-in-up delay-200">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 animate-fade-in-up delay-300">
                        {testimonial.title}
                      </div>
                      <div className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300 animate-fade-in-up delay-400">
                        {testimonial.agency}, {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Summary */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-slate-50/30"></div>

        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-green-400/30 rounded-full animate-particle-float delay-700"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text">
              Common Success Patterns
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every successful deployment shares these key benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={benefit.title}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up border-0 glass bg-white/80 backdrop-blur-sm hover:bg-white/90`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${getColorClasses(benefit.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`} style={{ animationDelay: `${index * 200}ms` }}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>

                    <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${getColorClasses(benefit.color)} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>


        {/* Main gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float delay-500"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-2xl animate-fade-in-up">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in-up delay-200">
            Join the agencies already transforming emergency response with Plott Labs' cloud-native platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-6 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/contact#contact-form">Start Your Transformation</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white hover:text-gray-900 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
