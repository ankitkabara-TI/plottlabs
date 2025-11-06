import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, MapPin, Smartphone, BarChart3, ArrowRight, CheckCircle, Zap, Users, Globe } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Plott Labs SaaS Suite (CAD, Mapping, Mobile, Analytics)',
  description: 'Explore Plott Labs\' unified SaaS platform built for public safety & critical infrastructure.',
  keywords: 'CAD solutions, SaaS CAD, incident response suite',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center gradient-mesh animate-rotate-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>
        
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center z-10">
          <div className="mb-6">
            <span className="glass border border-white/20 text-blue-300 px-6 py-3 rounded-full text-lg font-semibold">
              OneNet Suite
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
            <span className="text-white drop-shadow-2xl">
              One Unified Platform.
            </span>
            <br />
            <span className="text-white">
              Four Core Tools.
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto animate-fade-in-up delay-500 drop-shadow-lg">
            Streamline your entire incident response workflow with our integrated suite of enterprise solutions designed for modern public safety agencies.
          </p>
        </div>
      </section>

      {/* Animated Product Connections */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-slate-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-white">
                One Platform.
              </span>
              <br />
              <span className="text-white">Infinite Impact.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our integrated tools work together seamlessly to transform your operations
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-100 group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">CAD</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Dispatch Operations</p>
            </div>
            
            <div className="glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-200 group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-400 transition-colors duration-300">Map</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Real-time Visualization</p>
            </div>
            
            <div className="glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-300 group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">Mobile</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Field Access</p>
            </div>
            
            <div className="glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-400 group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">Analytics</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Insights & Reporting</p>
            </div>
          </div>
          
          {/* Connection Animation Visualization */}
          <div className="text-center animate-fade-in-up delay-600">
            <div className="glass rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-slate-400"></div>
                <div className="w-8 h-px bg-gradient-to-r from-slate-400 to-blue-400"></div>
                <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-green-400"></div>
              </div>
              <p className="text-white font-semibold text-lg">Seamlessly Connected Ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Why Integration Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              OneNet Suite's integrated approach eliminates data silos and creates a unified emergency response ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Real-time Data Sync</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Information entered in one module instantly updates across all others. No delays, no duplicated data entry, no missed updates.</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />Instant cross-platform updates</div>
                <div className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />Elimination of data silos</div>
                <div className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />Consistent information everywhere</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-slate-600 transition-colors duration-300">Unified Workflow</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">From initial call to case closure, every step flows seamlessly through the connected platform. Training is simpler, efficiency is higher.</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-2 flex-shrink-0" />Single sign-on access</div>
                <div className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-2 flex-shrink-0" />Consistent user interface</div>
                <div className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-2 flex-shrink-0" />Streamlined training</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Complete Visibility</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">See the full picture at all times. From dispatch to field operations to analytics, nothing falls through the cracks.</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />360-degree operational view</div>
                <div className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />Cross-platform analytics</div>
                <div className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />Comprehensive reporting</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Integration Advantage</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                While other vendors sell point solutions that require complex integrations, OneNet Suite is built as a unified platform from the ground up. This means better performance, easier maintenance, and lower total cost of ownership.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                  <div className="text-sm text-gray-600">Faster Implementation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-600 mb-2">75%</div>
                  <div className="text-sm text-gray-600">Reduced Training Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
                  <div className="text-sm text-gray-600">Lower TCO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & Deployment */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-slate-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Rapid Deployment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get up and running faster with our proven implementation methodology and expert support team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-glow">
                  <div className="text-white font-bold text-2xl">1</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Assessment & Planning</h3>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  We analyze your current operations and design a customized implementation plan tailored to your agency's specific needs.
                </p>
                <div className="text-blue-400 font-semibold">2-4 weeks</div>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-glow">
                  <div className="text-white font-bold text-2xl">2</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-slate-400 transition-colors duration-300">System Configuration</h3>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Our technical team configures OneNet Suite to match your workflows, integrates with existing systems, and migrates your data.
                </p>
                <div className="text-slate-400 font-semibold">4-8 weeks</div>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-glow">
                  <div className="text-white font-bold text-2xl">3</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">Training & Go-Live</h3>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Comprehensive training for all users, followed by a carefully managed go-live process with 24/7 support during transition.
                </p>
                <div className="text-green-400 font-semibold">2-3 weeks</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="glass rounded-2xl border border-white/10 p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Implementation Guarantee</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We're so confident in our implementation process that we guarantee your agency will be fully operational on OneNet Suite within 90 days of project kickoff, or we'll continue working at no additional cost until you are.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">90</div>
                  <div className="text-sm text-gray-300">Day Implementation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Go-Live Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-400 mb-2">100%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Built for Public Safety
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              OneNet Suite is engineered with the unique requirements of emergency response operations in mind
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8 animate-fade-in-left">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Security & Compliance</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Certifications</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• CJIS Compliant</li>
                      <li>• FedRAMP Authorized</li>
                      <li>• SOC 2 Type II</li>
                      <li>• JITC Certified</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Security Features</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• End-to-end encryption</li>
                      <li>• Multi-factor authentication</li>
                      <li>• Audit trail logging</li>
                      <li>• Role-based access</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Platform Reliability</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Uptime SLA</span>
                    <span className="text-green-600 font-bold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Response Time</span>
                    <span className="text-blue-600 font-bold">&lt; 1 second</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Data Recovery</span>
                    <span className="text-slate-600 font-bold">&lt; 4 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Support Availability</span>
                    <span className="text-orange-600 font-bold">24/7/365</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">OneNet Architecture</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border border-blue-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-900 mb-2">User Interface Layer</div>
                      <div className="text-sm text-blue-700">Web, Mobile, APIs</div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gradient-to-b from-blue-300 to-slate-300"></div>
                  </div>
                  <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900 mb-2">OneNet Core Services</div>
                      <div className="text-sm text-slate-700">CAD, Mapping, Mobile, Analytics</div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gradient-to-b from-slate-300 to-green-300"></div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-slate-50 rounded-xl p-6 border border-green-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-900 mb-2">Integration Platform</div>
                      <div className="text-sm text-green-700">RMS, NCIC, Telephony, Legacy Systems</div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gradient-to-b from-green-300 to-blue-300"></div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-900 mb-2">Cloud Infrastructure</div>
                      <div className="text-sm text-blue-700">AWS, Multi-AZ, Auto-scaling</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Training */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-slate-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ongoing Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your success is our priority. From training to 24/7 support, we ensure you get the most from OneNet Suite
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8 animate-fade-in-left">
              <div className="glass rounded-2xl border border-white/10 p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Expert Training</h3>
                    <p className="text-gray-400 text-sm">Comprehensive Learning Programs</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Role-Based Training</div>
                      <div className="text-sm text-gray-400">Customized programs for dispatchers, supervisors, and administrators</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Live & On-Demand</div>
                      <div className="text-sm text-gray-400">Interactive webinars plus self-paced learning modules</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Certification Programs</div>
                      <div className="text-sm text-gray-400">Become certified OneNet administrators and power users</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl border border-white/10 p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">24/7 Support</h3>
                    <p className="text-gray-400 text-sm">Always Available When You Need Us</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Emergency Response Priority</div>
                      <div className="text-sm text-gray-400">Critical issues resolved within 30 minutes during emergencies</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Multiple Support Channels</div>
                      <div className="text-sm text-gray-400">Phone, chat, email, and remote assistance available 24/7</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Dedicated Success Manager</div>
                      <div className="text-sm text-gray-400">Your personal advocate for ongoing success and optimization</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="glass rounded-2xl border border-white/10 p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Support Response Times</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <div>
                      <div className="text-lg font-bold text-red-400">Critical/Emergency</div>
                      <div className="text-sm text-gray-400">System down, emergency operations affected</div>
                    </div>
                    <div className="text-2xl font-bold text-red-400">30 min</div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <div>
                      <div className="text-lg font-bold text-orange-400">High Priority</div>
                      <div className="text-sm text-gray-400">Major feature not working, operations impacted</div>
                    </div>
                    <div className="text-2xl font-bold text-orange-400">2 hours</div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <div>
                      <div className="text-lg font-bold text-blue-400">Standard</div>
                      <div className="text-sm text-gray-400">General questions, minor issues</div>
                    </div>
                    <div className="text-2xl font-bold text-blue-400">4 hours</div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <div>
                      <div className="text-lg font-bold text-slate-400">Enhancement</div>
                      <div className="text-sm text-gray-400">Feature requests, optimization guidance</div>
                    </div>
                    <div className="text-2xl font-bold text-slate-400">24 hours</div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-green-400/20">
                    <div className="text-3xl font-bold text-green-400 mb-2">98.5%</div>
                    <div className="text-sm text-gray-300">Customer Satisfaction Score</div>
                    <div className="text-xs text-gray-400 mt-1">Based on 10,000+ support interactions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Product Cards */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Complete Solution Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how each component transforms your incident response capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* CAD Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors duration-300">Computer-Aided Dispatch</CardTitle>
                    <p className="text-gray-500 text-sm">Cloud CAD | Secure & ProQA Certified</p>
                  </div>
                </div>
                <CardDescription className="text-lg leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Simplify dispatch with secure, ProQA certified CAD — real-time data, cloud-native, user-friendly.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Real-time incident management and tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">ProQA certified emergency protocols</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Intelligent resource allocation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Cloud-native architecture</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Link href="/solutions/cad" className="flex items-center justify-center">
                    Explore CAD <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Map Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-slate-600 transition-colors duration-300">Interactive Incident Mapping</CardTitle>
                    <p className="text-gray-500 text-sm">Real-time Maps | Hazards & Weather Integration</p>
                  </div>
                </div>
                <CardDescription className="text-lg leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Real-time maps with hazards, traffic, and overlays for safer response operations.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    <span className="text-gray-700">Aerial views and high-resolution imagery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    <span className="text-gray-700">Hazard icons and weather integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    <span className="text-gray-700">Bidirectional CAD integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    <span className="text-gray-700">Real-time incident visualization</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-2 border-slate-600 text-slate-600 hover:bg-slate-50 group-hover:scale-105 transition-all duration-300">
                  <Link href="/solutions/map" className="flex items-center justify-center">
                    Explore Map <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mobile Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-cyan-600 transition-colors duration-300">Mobile CAD & Response App</CardTitle>
                    <p className="text-gray-500 text-sm">Device-Agnostic | Secure | Offline-Ready</p>
                  </div>
                </div>
                <CardDescription className="text-lg leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Access CAD & maps in the field with mobile-first SaaS tools that work anywhere.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-700">Device-agnostic design for any platform</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-700">Secure field data collection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-700">Offline capability for remote areas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-700">Real-time synchronization</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 group-hover:scale-105 transition-all duration-300">
                  <Link href="/solutions/mobile" className="flex items-center justify-center">
                    Explore Mobile <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Analytics Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-400 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-green-600 transition-colors duration-300">Incident Response Analytics</CardTitle>
                    <p className="text-gray-500 text-sm">Custom Dashboards | Real-time KPIs</p>
                  </div>
                </div>
                <CardDescription className="text-lg leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Custom dashboards and reporting tools for smarter, data-driven decisions.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Configurable dashboards and KPIs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Real-time performance tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Exportable compliance reports</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Data-driven insights</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 group-hover:scale-105 transition-all duration-300">
                  <Link href="/solutions/analytics" className="flex items-center justify-center">
                    Explore Analytics <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
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
            Experience the
            <span className="text-white block">
              Full Platform
            </span>
          </h2>
          <p className="text-xl mb-10 opacity-90 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            See how all four solutions work together to transform your incident response capabilities and drive operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-6 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl font-semibold">
              <Link href="/contact#schedule-meeting">Schedule Comprehensive Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/pricing#pricing-plans">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}