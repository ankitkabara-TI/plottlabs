import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, MapPin, Smartphone, BarChart3, CheckCircle, Users, Clock, Lock, TabletSmartphone, Building2, Globe, TrendingUp, Calendar, Target, Lightbulb, Handshake, Cloud, Award, Zap, Star, Heart, FileText, Scale } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 animate-rotate-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>


        {/* Main gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float delay-500"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in-left">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                <span className="text-white drop-shadow-2xl block">Enterprise-Grade</span>
                <span className="text-white drop-shadow-2xl block">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Delivered in the Cloud and built for mission-critical environments. Our platform is FedRAMP-authorized and JITC-certified, designed to meet DISA compliance criteria for federal, state, and military deployments. Simplify dispatch operations with our integrated CAD, Mapping, Mobile, and Analytics solutions—engineered to deliver secure, scalable performance for the modern era.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-10 py-6 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up delay-200">
                  <Link href="/contact#contact-form">Request a Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up delay-400">
                  <Link href="/solutions">Explore Solutions</Link>
                </Button>
              </div>
            </div>
            
            {/* Enhanced Platform Showcase */}
            <div className="relative animate-fade-in-right delay-300">
              {/* Background Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-slate-500/10 to-orange-500/20 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
              
              <div className="relative glass rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700 backdrop-blur-xl overflow-hidden">
                {/* Header with Status Indicator */}
                <div className="relative p-6 pb-4 border-b border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                      <span className="text-sm font-semibold text-white/90">System Online</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">OneNet Platform</h3>
                  <p className="text-sm text-white/70">Integrated Emergency Response Suite</p>
                </div>

                {/* Enhanced Grid Layout */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                     {/* CAD System - Enhanced */}
                     <Link href="/solutions/cad" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 block cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative p-5">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                              <Shield className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="text-xs font-bold text-blue-300 uppercase tracking-wider">CAD</div>
                          </div>
                          <div className="text-xs text-white/60 font-medium">Live</div>
                        </div>
                        
                        <div className="relative overflow-hidden rounded-xl shadow-xl">
                          <Image
                            src="/images/cad/dashboard.png"
                            alt="CAD Dashboard Interface"
                            width={250}
                            height={140}
                            className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-2 left-2 right-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-white">Dispatch Control</span>
                              <div className="flex space-x-1">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                         <div className="mt-3 flex items-center justify-between">
                           <span className="text-xs font-medium text-white/80">Active Incidents: 12</span>
                           <span className="text-xs text-green-400 font-semibold">▲ 99.9%</span>
                         </div>
                       </div>
                     </Link>

                     {/* Mobile App - Enhanced */}
                     <Link href="/solutions/mobile" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 block cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative p-5">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                              <Smartphone className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="text-xs font-bold text-blue-300 uppercase tracking-wider">Mobile</div>
                          </div>
                          <div className="text-xs text-white/60 font-medium">Sync</div>
                        </div>
                        
                        <div className="relative overflow-hidden rounded-xl shadow-xl">
                          <Image
                            src="/images/mobile/dashboard.png"
                            alt="Mobile Dashboard Interface"
                            width={250}
                            height={140}
                            className="w-full h-28 object-contain bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-2 left-2 right-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-white">Field Access</span>
                              <div className="flex space-x-1">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                         <div className="mt-3 flex items-center justify-between">
                           <span className="text-xs font-medium text-white/80">Officers Online: 24</span>
                           <span className="text-xs text-green-400 font-semibold">▲ Connected</span>
                         </div>
                       </div>
                     </Link>

                     {/* Map System - Enhanced */}
                     <Link href="/solutions/map" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-500/15 to-slate-600/5 border border-slate-400/20 hover:border-slate-400/40 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 block cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-slate-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative p-5">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-slate-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                              <MapPin className="w-5 h-5 text-slate-400" />
                            </div>
                            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Mapping</div>
                          </div>
                          <div className="text-xs text-white/60 font-medium">GPS</div>
                        </div>
                        
                        <div className="relative overflow-hidden rounded-xl shadow-xl">
                          <Image
                            src="/images/map/hero-section.png"
                            alt="Interactive Map Interface"
                            width={250}
                            height={140}
                            className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-2 left-2 right-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-white">Live Tracking</span>
                              <div className="flex space-x-1">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                         <div className="mt-3 flex items-center justify-between">
                           <span className="text-xs font-medium text-white/80">Units Tracked: 45</span>
                           <span className="text-xs text-green-400 font-semibold">▲ Real-time</span>
                         </div>
                       </div>
                     </Link>

                     {/* Analytics - Enhanced */}
                     <Link href="/solutions/analytics" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/15 to-green-600/5 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 block cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative p-5">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                              <BarChart3 className="w-5 h-5 text-green-400" />
                            </div>
                            <div className="text-xs font-bold text-green-300 uppercase tracking-wider">Analytics</div>
                          </div>
                          <div className="text-xs text-white/60 font-medium">AI</div>
                        </div>
                        
                        <div className="relative overflow-hidden rounded-xl shadow-xl">
                          <Image
                            src="/images/analytics/hero-section.png"
                            alt="Analytics Dashboard Interface"
                            width={250}
                            height={140}
                            className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-2 left-2 right-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-white">Smart Insights</span>
                              <div className="flex space-x-1">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                         <div className="mt-3 flex items-center justify-between">
                           <span className="text-xs font-medium text-white/80">Response: 4.2min</span>
                           <span className="text-xs text-green-400 font-semibold">▲ 15% Faster</span>
                         </div>
                       </div>
                     </Link>
                  </div>
                  
                  {/* Enhanced Footer */}
                  <div className="relative">
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-white">Unified Command Center</h4>
                      </div>
                      <p className="text-sm text-white/70 mb-3">Enterprise Emergency Response Platform</p>
                      <div className="flex items-center justify-center space-x-4 text-xs text-white/60">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>99.9% Uptime</span>
                        </div>
                        <div className="w-px h-3 bg-white/20"></div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>24/7 Support</span>
                        </div>
                        <div className="w-px h-3 bg-white/20"></div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <span>Cloud Native</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Connection Animation */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <svg className="w-full h-full opacity-20">
                        <defs>
                          <linearGradient id="connectionLine" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                            <stop offset="25%" stopColor="#64748b" stopOpacity="0.6"/>
                            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9"/>
                            <stop offset="75%" stopColor="#10b981" stopOpacity="0.6"/>
                            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8"/>
                          </linearGradient>
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge> 
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        
                        {/* Animated connecting lines */}
                        <path d="M 25% 25% Q 50% 45% 75% 25%" stroke="url(#connectionLine)" strokeWidth="1" fill="none" strokeDasharray="4,4" filter="url(#glow)">
                          <animate attributeName="stroke-dashoffset" values="0;8" dur="3s" repeatCount="indefinite"/>
                        </path>
                        <path d="M 25% 75% Q 50% 55% 75% 75%" stroke="url(#connectionLine)" strokeWidth="1" fill="none" strokeDasharray="4,4" filter="url(#glow)">
                          <animate attributeName="stroke-dashoffset" values="0;8" dur="2.5s" repeatCount="indefinite"/>
                        </path>
                        <path d="M 50% 25% L 50% 75%" stroke="url(#connectionLine)" strokeWidth="1" fill="none" strokeDasharray="3,3" filter="url(#glow)">
                          <animate attributeName="stroke-dashoffset" values="0;6" dur="2s" repeatCount="indefinite"/>
                        </path>
                        <path d="M 25% 50% L 75% 50%" stroke="url(#connectionLine)" strokeWidth="1" fill="none" strokeDasharray="3,3" filter="url(#glow)">
                          <animate attributeName="stroke-dashoffset" values="0;6" dur="2.8s" repeatCount="indefinite"/>
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Highlights */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-slate-900/10"></div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              One Unified Platform.
              <br />
              <span className="text-white">
                Four Core Tools.
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Streamline your entire incident response workflow with our integrated suite of enterprise solutions designed for the modern era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-100 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Shield className="w-8 h-8 text-blue-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Dispatch Smarter</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Advanced CAD system with real-time resource allocation</p>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-200 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-slate-500/20 to-slate-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <MapPin className="w-8 h-8 text-slate-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-slate-400 transition-colors duration-300">See Everything</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Real-time mapping with aerial overlays and live data</p>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Smartphone className="w-8 h-8 text-blue-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Mobile-First Access</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Field tools that sync seamlessly with dispatch</p>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-400 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <BarChart3 className="w-8 h-8 text-green-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">Analytics That Drive Action</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Configurable dashboards and on-demand reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Impact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-slate-50/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Making a Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our cloud-native solutions are transforming emergency response across the nation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                number: "50+",
                label: "Agencies Served",
                description: "Emergency response agencies nationwide",
                color: "blue"
              },
              {
                icon: Globe,
                number: "3",
                label: "States Deployed",
                description: "Across multiple states and territories", 
                color: "slate"
              },
              {
                icon: TrendingUp,
                number: "40%",
                label: "Faster Response Times",
                description: "Average improvement in incident response",
                color: "blue"
              },
              {
                icon: Calendar,
                number: "4+",
                label: "Years of Innovation",
                description: "Dedicated to advancing public safety tech",
                color: "green"
              }
            ].map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = {
                blue: "from-blue-500 to-blue-600",
                slate: "from-slate-500 to-slate-600", 
                green: "from-green-500 to-green-600"
              };
              return (
                <Card
                  key={stat.label}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up border-0 bg-white/90 backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-gray-800 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Values & Mission */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-slate-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              {
                icon: Target,
                title: "Results",
                description: "We deliver measurable outcomes that transform how agencies operate and serve their communities.",
                color: "blue"
              },
              {
                icon: Lightbulb,
                title: "Customer Inspiration", 
                description: "Every feature we build is inspired by real-world challenges our customers face in the field.",
                color: "slate"
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "We maintain the highest standards of security, transparency, and ethical business practices.", 
                color: "blue"
              },
              {
                icon: Handshake,
                title: "Collaboration",
                description: "We work as partners with our customers, building solutions together for shared success.",
                color: "green"
              }
            ].map((value, index) => {
              const Icon = value.icon;
              const colorClasses = {
                blue: "from-blue-500 to-blue-600",
                slate: "from-slate-500 to-slate-600",
                green: "from-green-500 to-green-600"
              };
              return (
                <Card
                  key={value.title}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up border-0 bg-white/10 backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${colorClasses[value.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-4 text-white group-hover:text-gray-200 transition-colors duration-300">
                      {value.title}
                    </CardTitle>
                    <CardDescription className="text-lg leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* How We Deliver Our Mission */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              How We Deliver Our Mission
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three pillars that drive our commitment to transforming emergency response
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: "Cloud-Powered Dispatch",
                description: "Leveraging modern cloud infrastructure to deliver scalable, reliable CAD solutions that grow with your agency's needs.",
                color: "blue"
              },
              {
                icon: Users,
                title: "Human-Centered Innovation", 
                description: "Every feature is designed with real users in mind, ensuring our technology enhances rather than complicates critical workflows.",
                color: "slate"
              },
              {
                icon: Shield,
                title: "Secure & Scalable Ecosystem",
                description: "Built with DoD-level security standards and validated against DISA control baselines, our platform is FedRAMP- and GovRAMP-authorized and JITC-certified.",
                color: "blue"
              }
            ].map((pillar, index) => {
              const Icon = pillar.icon;
              const colorClasses = {
                blue: "from-blue-500 to-blue-600",
                slate: "from-slate-500 to-slate-600"
              };
              return (
                <Card
                  key={pillar.title}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up border-0 bg-white/10 backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${colorClasses[pillar.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                      {pillar.title}
                    </h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Builder Section */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-slate-50/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Military-Grade Security.<br />
                Enterprise-Level Reliability.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Built on DoD-level security frameworks and validated against DISA STIGs, our cloud-native platform meets the highest standards of FedRAMP authorization and JITC certification. This ensures the reliability, resilience, and compliance your agency demands—whether operating locally, nationally, or globally.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3 animate-fade-in-up delay-100 group">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold group-hover:text-green-600 transition-colors duration-300">SaaS-First Architecture</h3>
                    <p className="text-sm text-muted-foreground">Cloud-native design for maximum scalability and resilience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 animate-fade-in-up delay-200 group">
                  <Lock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600 transition-colors duration-300">DoD-Level Security</h3>
                    <p className="text-sm text-muted-foreground">Military-grade encryption with FedRAMP and JITC validation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 animate-fade-in-up delay-300 group">
                  <Clock className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold group-hover:text-slate-600 transition-colors duration-300">Rapid Deployment</h3>
                    <p className="text-sm text-muted-foreground">Get operational in weeks, not months, without compromising compliance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 animate-fade-in-up delay-400 group">
                  <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600 transition-colors duration-300">For All Agencies</h3>
                    <p className="text-sm text-muted-foreground">Affordable, secure solutions tailored to every agency size.</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                <Link href="/contact#schedule-meeting">Schedule Your Demo</Link>
              </Button>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="rounded-2xl border shadow-2xl bg-white p-4 hover:shadow-3xl transition-all duration-500 hover:scale-105 transform overflow-hidden">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/others/security.png"
                    alt="Security Features - DoD-level security and compliance"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-xl hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm font-semibold text-gray-900">Military-Grade Security</p>
                      <p className="text-xs text-gray-600">DoD-level compliance & FedRAMP authorization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Logos */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-slate-900/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Trusted by Leading Agencies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the growing network of agencies transforming their operations with Plott Labs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="glass rounded-2xl p-8 border border-white/10 animate-fade-in-left flex flex-col h-full">
              <blockquote className="text-xl text-gray-300 mb-6 leading-relaxed flex-grow">
                "Carroll County E-911 recently selected the OneNet system after evaluating several other CAD products. We found OneNet to be the best fit for our center's operational needs. We were particularly impressed with the intuitive screen layout and how easy it is to input call information as service requests come in. The Fast Path option simplifies the process of logging responders on and off, allowing us to manage units quickly and efficiently. Everything we need is literally at our fingertips."
              </blockquote>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Donna Windsor</p>
                  <p className="text-gray-400 text-sm">Assistant Director of Carroll County E-911</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-white/10 animate-fade-in-right delay-200 flex flex-col h-full">
              <blockquote className="text-xl text-gray-300 mb-6 leading-relaxed flex-grow">
                "We've had a great experience with the OneNet product. It's intuitive and user-friendly, making it easy for our team to get up to speed quickly. The support team has been outstanding—timely, attentive, and always willing to go the extra mile to help. Everyone we've interacted with has been professional, accommodating, and genuinely great to work with. Highly recommend this solution for anyone looking for a reliable, well-supported CAD platform."
              </blockquote>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Elizabeth Pierson</p>
                  <p className="text-gray-400 text-sm">ENP, Director of Carroll County E911</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-slate-50/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From local fire departments to federal agencies, our solutions adapt to serve diverse emergency response needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Law Enforcement", 
                description: "Complete incident management from dispatch to case closure with CJIS-compliant data handling and real-time officer safety features.",
                features: ["Officer safety tracking", "NCIC/FCIC integration", "Evidence management", "Patrol resource optimization"]
              },
              {
                icon: Heart,
                title: "Fire & EMS",
                description: "Advanced emergency medical dispatch with ProQA protocols and automated resource allocation for optimal response times.",
                features: ["EMD protocol compliance", "Apparatus management", "Hydrant mapping", "Mutual aid coordination"]
              },
              {
                icon: Building2,
                title: "Emergency Management", 
                description: "Multi-agency coordination platform for large-scale incidents with unified command and resource sharing capabilities.",
                features: ["Multi-agency dashboards", "Resource sharing", "Incident command support", "Public notification"]
              },
              {
                icon: Globe,
                title: "Federal Agencies",
                description: "FedRAMP-authorized platform meeting DoD security standards for classified and sensitive operations.",
                features: ["FedRAMP High compliance", "JITC certification", "DISA STIG validated", "Multi-level security"]
              },
              {
                icon: Users,
                title: "911 Centers",
                description: "Comprehensive public safety answering point solutions with next-generation 911 capabilities and multi-jurisdictional support.",
                features: ["NG911 ready", "Text-to-911", "Multi-jurisdiction", "Call prioritization"]
              },
              {
                icon: Zap,
                title: "Utilities & Infrastructure",
                description: "Critical infrastructure protection with specialized protocols for power, water, and transportation emergencies.",
                features: ["Infrastructure mapping", "Outage management", "Hazmat protocols", "Critical facility alerts"]
              }
            ].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card
                  key={industry.title}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                    <ul className="space-y-2">
                      {industry.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-slate-900/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Security & Compliance Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built to meet the most stringent security and compliance requirements in the public safety sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "CJIS Compliant",
                description: "Fully compliant with Criminal Justice Information Services standards for secure law enforcement data handling.",
                badges: ["CJIS Certified", "Security Policy", "Access Controls"]
              },
              {
                icon: Lock,
                title: "FedRAMP Authorized",
                description: "Federal Risk and Authorization Management Program authorization for government cloud services.",
                badges: ["FedRAMP High", "ATO Granted", "Continuous Monitoring"]
              },
              {
                icon: Award,
                title: "JITC Certified",
                description: "Joint Interoperability Test Command certification for defense and federal information systems.",
                badges: ["DoD Approved", "STIG Validated", "RMF Compliant"]
              },
              {
                icon: Globe,
                title: "Industry Standards",
                description: "Adherence to leading industry standards and best practices for emergency response systems.",
                badges: ["SOC 2 Type II", "ISO 27001", "NIST Framework"]
              }
            ].map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card
                  key={cert.title}
                  className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up border-0 bg-white/10 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="space-y-2">
                      {cert.badges.map((badge) => (
                        <div key={badge} className="inline-block bg-white/20 rounded-full px-3 py-1 text-xs font-medium text-white mr-2 mb-2">
                          {badge}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Showcase Carousel */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-slate-50/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Complete Platform Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our integrated suite transforms every aspect of incident response
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {/* CAD System */}
              <div className="group animate-fade-in-up">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Computer-Aided Dispatch</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Advanced dispatch system with real-time incident management and intelligent resource allocation.</p>
                    <ul className="space-y-3 mt-auto">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Real-time incident management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">ProQA certified protocols</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Intelligent resource allocation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mapping */}
              <div className="group animate-fade-in-up delay-200">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Mapping</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Advanced mapping with live incident visualization and comprehensive overlays.</p>
                    <ul className="space-y-3 mt-auto">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Live incident visualization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Hazard and weather overlays</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Aerial imagery integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="group animate-fade-in-up delay-400">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Reporting</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Comprehensive analytics with custom dashboards and real-time performance insights.</p>
                    <ul className="space-y-3 mt-auto">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Custom dashboard creation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Real-time performance KPIs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Exportable compliance reports</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Mobile App */}
              <div className="group animate-fade-in-up delay-600">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Smartphone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Application</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Browser-based mobile access designed for supervisors and command staff.</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Cross-device browser access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Supervisor & command staff focused</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Quick situational awareness</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Handheld App */}
              <div className="group animate-fade-in-up delay-800">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <TabletSmartphone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Handheld Application</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Native field-ready app optimized for ruggedized handhelds and offline operations.</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Ruggedized handheld optimized</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Connected or offline environments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Fast field data entry</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases & FAQ */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Common Use Cases & FAQs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how agencies like yours leverage our platform and get answers to frequently asked questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Use Cases */}
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-bold text-white mb-8">Real-World Applications</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Multi-Jurisdiction Incidents",
                    description: "Coordinate resources across multiple agencies during major incidents with unified command capabilities."
                  },
                  {
                    icon: Heart,
                    title: "Medical Emergency Response",
                    description: "Streamline EMS dispatching with ProQA protocols and automatic hospital notifications."
                  },
                  {
                    icon: Zap,
                    title: "Natural Disaster Response",
                    description: "Deploy emergency resources efficiently during hurricanes, floods, and other natural disasters."
                  },
                  {
                    icon: Building2,
                    title: "Daily Operations Management",
                    description: "Handle routine calls, traffic stops, and community policing with intelligent resource allocation."
                  }
                ].map((useCase, index) => {
                  const Icon = useCase.icon;
                  return (
                    <div key={useCase.title} className="flex items-start space-x-4 p-6 glass rounded-2xl border border-white/10">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{useCase.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FAQ */}
            <div className="animate-fade-in-right">
              <h3 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {[
                  {
                    question: "How quickly can we deploy OneNet?",
                    answer: "Most agencies are operational within 4-8 weeks, including data migration, training, and system integration."
                  },
                  {
                    question: "Is OneNet CJIS compliant?",
                    answer: "Yes, OneNet is fully CJIS compliant and includes all required security controls for criminal justice information."
                  },
                  {
                    question: "What training and support is included?",
                    answer: "We provide comprehensive onboarding, user training, 24/7 support, and dedicated customer success management."
                  },
                  {
                    question: "Can OneNet integrate with existing systems?",
                    answer: "Yes, OneNet features open APIs and pre-built integrations with major RMS, jail management, and other public safety systems."
                  },
                  {
                    question: "What about data backup and disaster recovery?",
                    answer: "OneNet includes automated daily backups, geo-redundant storage, and comprehensive disaster recovery with 99.9% uptime SLA."
                  }
                ].map((faq, index) => (
                  <Card key={faq.question} className="bg-white/10 backdrop-blur-sm border-white/10 border">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-white mb-3">{faq.question}</h4>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-in-up">
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/contact#contact-form">Get More Questions Answered</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-mesh animate-rotate-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float delay-500"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Ready to Transform Your Agency's
            <span className="text-white block">
              Incident Response?
            </span>
          </h2>
          <p className="text-xl mb-10 opacity-90 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            Join leading agencies already transforming their operations with our enterprise-grade SaaS platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-7 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl font-semibold">
              <Link href="/contact#schedule-meeting">Book a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/contact#contact-form">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
