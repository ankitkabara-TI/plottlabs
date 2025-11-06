import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Users, MapPin, Phone, CheckCircle, ArrowRight, Zap, Database, Headphones, Lock, Activity, Globe } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud CAD | Computer-Aided Dispatch Software by Plott Labs',
  description: 'Simplify dispatch with secure, ProQA certified CAD — real-time data, cloud-native, user-friendly.',
  keywords: 'CAD software, computer-aided dispatch, emergency dispatch, ProQA certified, cloud CAD',
};

export default function CADPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center gradient-mesh animate-rotate-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>
        
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left animate-fade-in-left">
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-2xl animate-glow">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
                    Computer-Aided
                    <br />
                    <span className="text-white">
                      Dispatch
                    </span>
                  </h1>
                </div>
              </div>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-lg">
                Simplify dispatch with secure, ProQA certified CAD — real-time data, cloud-native, user-friendly platform designed for modern agencies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-2xl">
                  <Link href="/contact#contact-form">Request CAD Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300">
                  <Link href="/solutions">View All Solutions</Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-300">
                <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>ProQA Certified</span>
                </div>
                <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Real-time Integration</span>
                </div>
                <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cloud-Native</span>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="glass rounded-2xl border border-white/20 shadow-2xl p-4 hover:scale-105 transition-all duration-500 overflow-hidden group">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/cad/dashboard.png"
                    alt="CAD Dashboard - Computer-Aided Dispatch Interface"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-2xl font-bold text-white mb-2 drop-shadow-2xl shadow-black/50">CAD Dashboard</p>
                    <p className="text-gray-200 drop-shadow-xl shadow-black/40">Live Incident Management Interface</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-slate-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Legacy 
              <span className="text-white">
                CAD Fails
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Traditional CAD systems create bottlenecks, increase costs, and limit your agency's ability to serve the community effectively
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass border border-red-500/20 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 animate-fade-in-up delay-100">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Slow Response Times</h3>
              <p className="text-gray-400">Legacy systems create delays that can cost lives in emergency situations</p>
            </div>
            
            <div className="glass border border-red-500/20 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 animate-fade-in-up delay-200">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Silos</h3>
              <p className="text-gray-400">Information trapped in separate systems prevents effective coordination</p>
            </div>
            
            <div className="glass border border-red-500/20 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 animate-fade-in-up delay-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">High Maintenance</h3>
              <p className="text-gray-400">Expensive upkeep and limited scalability strain agency budgets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              The Plott Labs Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real-time data, intelligent routing, and ProQA compliance in one modern, cloud-native platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Real-time Incident Management</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Monitor and manage incidents as they happen with live updates and automatic status tracking.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Live incident tracking and updates</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Automatic status synchronization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Priority-based incident queuing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Multi-agency coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-slate-600 transition-colors duration-300">Intelligent Resource Allocation</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Automatically assign the closest available resources based on location, availability, and expertise.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />Smart resource assignment</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />Availability tracking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />Skill-based routing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />Load balancing across units</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-green-600 transition-colors duration-300">ProQA Certified Call Handling</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Industry-standard emergency medical dispatch protocols integrated seamlessly into your workflow.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />ProQA protocol compliance</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />Guided call processing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />Pre-arrival instructions</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />Quality assurance tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-400 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Integrated Mapping</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Seamlessly integrated with our mapping platform for visual incident management and routing.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Visual incident plotting</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Turn-by-turn routing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Hazard identification</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Geographic data overlay</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-red-600 transition-colors duration-300">Secure Data Management</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Military-grade security ensures your sensitive dispatch data remains protected and compliant.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-600 mr-3 flex-shrink-0" />End-to-end encryption</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-600 mr-3 flex-shrink-0" />CJIS compliance ready</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-600 mr-3 flex-shrink-0" />Audit trail logging</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-600 mr-3 flex-shrink-0" />Role-based access control</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-600 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-slate-600 transition-colors duration-300">Legacy System Integration</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Connect with existing systems and databases without disrupting current operations.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />API-first architecture</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />Legacy system bridges</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />Data synchronization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />Gradual migration support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-slate-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Measurable Results
                <br />
                <span className="text-white">
                  for Your Agency
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Agencies using our CAD system report significant improvements in response times, operational efficiency, and overall public safety outcomes.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-glow">
                  <div className="text-4xl font-bold text-blue-400 mb-2">25%</div>
                  <div className="text-sm text-gray-300">Faster Response Times</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-glow delay-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">40%</div>
                  <div className="text-sm text-gray-300">Reduction in Errors</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-glow delay-200">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">60%</div>
                  <div className="text-sm text-gray-300">Less Training Time</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-glow delay-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">99.9%</div>
                  <div className="text-sm text-gray-300">System Uptime</div>
                </div>
              </div>
              
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-2xl">
                <Link href="/contact#contact-form">Get Your Results</Link>
              </Button>
            </div>

            <div className="animate-fade-in-right">
              <div className="glass rounded-2xl border border-white/10 shadow-2xl p-4 hover:scale-105 transition-all duration-500 overflow-hidden group max-w-lg mx-auto">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/cad/performance.png"
                    alt="CAD Performance Metrics - Measurable Results Dashboard"
                    width={500}
                    height={375}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-xl font-bold text-white mb-2 drop-shadow-2xl shadow-black/50">Performance Metrics</p>
                    <p className="text-sm text-gray-200 drop-shadow-xl shadow-black/40">Real-time analytics and measurable results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 gradient-mesh animate-rotate-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float delay-500"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Ready to Transform Your
            <span className="text-white block">
              Dispatch Operations?
            </span>
          </h2>
          <p className="text-xl mb-10 opacity-90 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            See how our CAD system can improve your agency's response times, reduce errors, and save lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-6 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl font-semibold">
              <Link href="/contact#contact-form">Request CAD Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/pdf/cad-brochure.pdf" target="_blank" rel="noopener noreferrer">Download Brochure</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}