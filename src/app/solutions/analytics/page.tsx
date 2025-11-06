import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, Calendar, Download, CheckCircle, Eye, Filter, Activity, Users, Phone } from "lucide-react";

export default function AnalyticsPage() {
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
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-orange-600 rounded-2xl flex items-center justify-center mr-6 shadow-2xl animate-glow">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
                    Analytics &
                    <br />
                    <span className="text-white">
                      Reporting
                    </span>
                  </h1>
                </div>
              </div>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-lg">
                Transform your operational data into actionable insights with configurable dashboards, comprehensive reporting tools, and advanced analytics that drive continuous improvement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-2xl">
                  <Link href="/contact#contact-form">Request Analytics Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300">
                  <Link href="/solutions">View All Solutions</Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-300">
                <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Real-time Dashboards</span>
                </div>
                <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Custom Reports</span>
                </div>
                <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Trend Analysis</span>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="glass rounded-2xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform backdrop-blur-xl p-4">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/analytics/hero-section.png"
                    alt="Analytics Dashboard - Live Performance Metrics and Data Visualization"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-2xl hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm font-semibold text-gray-900">Analytics Dashboard</p>
                      <p className="text-xs text-gray-600">Live Performance Metrics & Data Visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-slate-900/10"></div>

        {/* Background particles */}
        <div className="absolute top-40 left-20 w-2 h-2 bg-blue-400/40 rounded-full animate-particle-float"></div>
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-blue-400/40 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute top-60 right-20 w-2 h-2 bg-blue-400/40 rounded-full animate-particle-float delay-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Comprehensive Analytics.
              <br />
              <span className="text-white">
                Actionable Insights.
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Turn your operational data into strategic advantages with powerful analytics tools designed specifically for public safety agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-100 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <BarChart3 className="w-8 h-8 text-blue-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Configurable Dashboards</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">Create custom dashboards with drag-and-drop widgets tailored to your agency's key performance indicators.</p>
                <ul className="space-y-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <li>• Drag-and-drop dashboard builder</li>
                  <li>• Real-time data visualization</li>
                  <li>• Role-based dashboard access</li>
                  <li>• Mobile-responsive design</li>
                </ul>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-200 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Download className="w-8 h-8 text-blue-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">On-Demand Reporting</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">Generate comprehensive reports instantly with pre-built templates or create custom reports for specific needs.</p>
                <ul className="space-y-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <li>• Pre-built report templates</li>
                  <li>• Custom report builder</li>
                  <li>• Scheduled report delivery</li>
                  <li>• Multiple export formats</li>
                </ul>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <TrendingUp className="w-8 h-8 text-blue-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Performance Trend Analysis</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">Identify patterns and trends in your operational data to make informed strategic decisions.</p>
                <ul className="space-y-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <li>• Historical data analysis</li>
                  <li>• Trend identification</li>
                  <li>• Predictive insights</li>
                  <li>• Comparative analysis</li>
                </ul>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-400 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-slate-500/20 to-slate-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <PieChart className="w-8 h-8 text-slate-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-slate-400 transition-colors duration-300">Key Performance Indicators</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">Monitor critical metrics like response times, unit utilization, and case resolution rates.</p>
                <ul className="space-y-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <li>• Response time tracking</li>
                  <li>• Unit utilization metrics</li>
                  <li>• Case resolution analytics</li>
                  <li>• Quality assurance scores</li>
                </ul>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Calendar className="w-8 h-8 text-orange-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">Compliance & Audit Reporting</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">Generate compliance reports for regulatory requirements and internal audit processes.</p>
                <ul className="space-y-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <li>• Regulatory compliance reports</li>
                  <li>• Audit trail documentation</li>
                  <li>• Quality assurance tracking</li>
                  <li>• Certification support</li>
                </ul>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-600 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Filter className="w-8 h-8 text-orange-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">Advanced Data Filtering</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">Drill down into your data with sophisticated filtering and search capabilities.</p>
                <ul className="space-y-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <li>• Multi-criteria filtering</li>
                  <li>• Date range selection</li>
                  <li>• Geographic filtering</li>
                  <li>• Custom field queries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Live Analytics Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience real-time data visualization with our comprehensive analytics platform
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Analytics Dashboard</h3>
                    <p className="text-gray-400 text-xs">Real-time performance metrics</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-400 text-xs font-medium">LIVE</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                {/* KPI Cards */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-900 mb-1">24</div>
                  <p className="text-blue-700 text-sm font-medium">Active Incidents</p>
                  <p className="text-blue-600 text-xs mt-1">+3 from yesterday</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-900 mb-1">89%</div>
                  <p className="text-blue-700 text-sm font-medium">Unit Utilization</p>
                  <p className="text-blue-600 text-xs mt-1">Above average</p>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <TrendingUp className="w-4 h-4 text-slate-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">156</div>
                  <p className="text-slate-700 text-sm font-medium">Call Volume</p>
                  <p className="text-slate-600 text-xs mt-1">Today so far</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-orange-900 mb-1">92%</div>
                  <p className="text-orange-700 text-sm font-medium">Clearance Rate</p>
                  <p className="text-orange-600 text-xs mt-1">Excellent performance</p>
                </div>
              </div>

              {/* Main Chart Area */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Response Time Trends</h4>
                  <div className="flex space-x-2">
                    <button className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">7D</button>
                    <button className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">30D</button>
                    <button className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">90D</button>
                  </div>
                </div>
                
                <div className="h-64 flex items-end justify-between space-x-2 mb-4">
                  {/* Chart Bars */}
                  <div className="flex-1 bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-sm h-32 opacity-80"></div>
                  <div className="flex-1 bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-sm h-40 opacity-80"></div>
                  <div className="flex-1 bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-sm h-36 opacity-80"></div>
                  <div className="flex-1 bg-gradient-to-t from-slate-400 to-slate-300 rounded-t-sm h-48 opacity-80"></div>
                  <div className="flex-1 bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-sm h-28 opacity-80"></div>
                  <div className="flex-1 bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-sm h-44 opacity-80"></div>
                  <div className="flex-1 bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-sm h-52 opacity-80"></div>
                  <div className="flex-1 bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-sm h-38 opacity-80"></div>
                  <div className="flex-1 bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-sm h-42 opacity-80"></div>
                  <div className="flex-1 bg-gradient-to-t from-slate-400 to-slate-300 rounded-t-sm h-35 opacity-80"></div>
                </div>

                <div className="flex justify-between text-xs text-gray-500 border-t border-gray-200 pt-4">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Data-Driven Decision Making
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform raw operational data into strategic insights that drive improvements in response times, resource allocation, and overall agency performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass rounded-2xl p-8 border border-white/10 animate-fade-in-left">
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 animate-fade-in-up delay-100 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-6 h-6 text-blue-400 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">Real-time Visibility</h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Get instant insights into current operations with live dashboards and real-time metrics.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in-up delay-200 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-blue-400 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">Performance Optimization</h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Identify bottlenecks and opportunities for improvement with detailed trend analysis.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in-up delay-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6 text-blue-400 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">Compliance Assurance</h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Maintain regulatory compliance with automated reporting and audit trail documentation.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="glass bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg p-4 text-center border border-blue-400/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-blue-400 mb-1">30%</div>
                  <div className="text-sm text-gray-300">Efficiency Improvement</div>
                </div>
                <div className="glass bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg p-4 text-center border border-blue-400/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-blue-400 mb-1">75%</div>
                  <div className="text-sm text-gray-300">Time Saved on Reports</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right delay-200">
              <div className="glass rounded-2xl border border-white/10 shadow-2xl p-6 hover:shadow-3xl transition-all duration-500 hover:scale-105 transform">
                <div className="aspect-square bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                  <div className="text-center relative z-10">
                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6">
                      <div className="glass rounded-xl p-4 shadow-md hover:scale-110 transition-transform duration-300 group">
                        <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:animate-pulse" />
                        <div className="text-xs font-medium text-white">Charts</div>
                      </div>
                      <div className="glass rounded-xl p-4 shadow-md hover:scale-110 transition-transform duration-300 group">
                        <PieChart className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:animate-pulse" />
                        <div className="text-xs font-medium text-white">Analysis</div>
                      </div>
                      <div className="glass rounded-xl p-4 shadow-md hover:scale-110 transition-transform duration-300 group">
                        <TrendingUp className="w-8 h-8 text-slate-400 mx-auto mb-2 group-hover:animate-pulse" />
                        <div className="text-xs font-medium text-white">Trends</div>
                      </div>
                      <div className="glass rounded-xl p-4 shadow-md hover:scale-110 transition-transform duration-300 group">
                        <Download className="w-8 h-8 text-orange-400 mx-auto mb-2 group-hover:animate-pulse" />
                        <div className="text-xs font-medium text-white">Reports</div>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-white/80 mb-2">Analytics Suite</p>
                    <p className="text-sm text-gray-400">Comprehensive reporting tools</p>
                  </div>
                </div>
              </div>
            </div>
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
            Unlock the Power of Your
            <span className="text-white block">
              Data Analytics
            </span>
          </h2>
          <p className="text-xl mb-10 opacity-90 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            Transform your operational data into strategic advantages with comprehensive analytics and reporting tools designed for modern agencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-7 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl font-semibold">
              <Link href="/contact#contact-form">Request Analytics Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/solutions">View Complete Platform</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}