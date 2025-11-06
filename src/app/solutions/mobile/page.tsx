import { Metadata } from 'next'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Shield,
  Zap,
  Users,
  MapPin,
  Bell,
  Battery,
  Wifi,
  Signal,
  Calendar,
  MessageSquare,
  Camera,
  Mic,
  Navigation,
  Clock,
  CheckCircle,
  Globe
} from "lucide-react"
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mobile Application Solutions | Plott Labs - Field Operations & Emergency Response',
  description: 'Advanced mobile applications for first responders, field operations, and emergency management. Real-time communication, GPS tracking, and offline capabilities.',
  keywords: 'mobile app, first responder app, field operations, emergency response, GPS tracking, offline mobile, public safety mobile',
  openGraph: {
    title: 'Mobile Application Solutions | Plott Labs',
    description: 'Advanced mobile applications for first responders, field operations, and emergency management.',
    type: 'website',
  },
}

export default function MobilePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center gradient-mesh animate-rotate-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>


        {/* Main gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float delay-500"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:text-left">
              <div className="mb-6 animate-fade-in-up">
                <Badge variant="outline" className="glass border-white/20 text-blue-300 hover:bg-white/10 mb-4">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Mobile Solutions
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up delay-200">
                <span className="text-white drop-shadow-2xl">
                  Field Operations in Your
                </span>
                <br />
                <span className="text-white">
                  Pocket
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up delay-500 drop-shadow-lg">
                Empower your field teams with advanced mobile applications designed for
                first responders, emergency management, and critical operations.
                Real-time communication, offline capabilities, and intuitive interfaces
                built for high-stakes environments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start mb-8 animate-fade-in-up delay-700">
                <Button size="lg" className="text-base px-8 py-5 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-2xl shadow-lg">
                  <Link href="/contact#contact-form">Request Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 py-5 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <Link href="/solutions/mobile#key-features">View Features</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-gray-300 justify-start animate-fade-in-up delay-1000">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>iOS & Android</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Offline Capable</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Real-time Sync</span>
                </div>
              </div>
            </div>

            {/* Mobile Device Mockup */}
            <div className="relative animate-scale-in delay-1000">
              <div className="glass rounded-2xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform backdrop-blur-xl">
                <div className="relative w-80 h-[640px] mx-auto">
                  {/* Outer Frame */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] shadow-2xl">
                    {/* Screen */}
                    <div className="absolute inset-4 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                        <span className="font-medium">9:41 AM</span>
                        <div className="flex items-center space-x-1">
                          <Signal className="w-4 h-4" />
                          <Wifi className="w-4 h-4" />
                          <Battery className="w-4 h-4" />
                        </div>
                      </div>

                      {/* App Interface */}
                      <div className="px-4 pb-4 h-full">
                        {/* Header */}
                        <div className="glass border border-white/10 rounded-2xl p-4 mb-4 hover:shadow-xl transition-all duration-300">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-white font-semibold">Emergency Dispatch</h3>
                            <Badge className="bg-red-500/20 text-red-300 border-red-400/30">
                              Active
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-3 text-sm text-gray-300">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4 text-blue-400" />
                              <span>Downtown District</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4 text-green-400" />
                              <span>2 min ago</span>
                            </div>
                          </div>
                        </div>

                        {/* Map Preview */}
                        <div className="glass border border-white/10 rounded-2xl p-4 mb-4 relative h-40 overflow-hidden hover:shadow-xl transition-all duration-300">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/50 rounded-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                            {/* Simulated Map Points */}
                            <div className="text-center pt-16 relative z-10">
                              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                              <p className="text-gray-300 text-sm">Live Incident Map</p>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-3">
                          <Button className="glass border-green-400/30 text-green-300 hover:bg-green-400/10 w-full hover:scale-105 transition-all duration-300">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Respond
                          </Button>
                          <Button className="glass border-orange-400/30 text-orange-300 hover:bg-orange-400/10 w-full hover:scale-105 transition-all duration-300">
                            <Navigation className="w-4 h-4 mr-2" />
                            Navigate
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-600 rounded-full"></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-4 -left-8 glass border border-white/10 p-3 rounded-2xl animate-float hover:scale-110 transition-transform duration-300">
                  <Bell className="w-6 h-6 text-blue-400" />
                </div>
                <div className="absolute top-20 -right-8 glass border border-white/10 p-3 rounded-2xl animate-float delay-300 hover:scale-110 transition-transform duration-300">
                  <Camera className="w-6 h-6 text-slate-400" />
                </div>
                <div className="absolute -bottom-8 -left-4 glass border border-white/10 p-3 rounded-2xl animate-float delay-500 hover:scale-110 transition-transform duration-300">
                  <Mic className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-slate-900/10"></div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Built for Critical
              <br />
              <span className="text-white">
                Operations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every feature designed with the unique challenges of emergency response,
              public safety, and field operations in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure Communications",
                description: "End-to-end encrypted messaging, voice calls, and data transmission. FIPS 140-2 compliant security standards.",
                color: "blue",
                delay: "delay-100"
              },
              {
                icon: Zap,
                title: "Real-time Updates",
                description: "Instant incident notifications, status updates, and resource tracking. Push notifications with priority levels.",
                color: "slate",
                delay: "delay-200"
              },
              {
                icon: MapPin,
                title: "GPS & Location Services",
                description: "Precise positioning, geofencing, breadcrumb trails, and location sharing. Works with enhanced 911 systems.",
                color: "green",
                delay: "delay-300"
              },
              {
                icon: Users,
                title: "Team Coordination",
                description: "Unit status, resource allocation, task assignment, and team chat. Hierarchical command structure support.",
                color: "orange",
                delay: "delay-400"
              },
              {
                icon: Calendar,
                title: "Offline Capability",
                description: "Full functionality without network coverage. Automatic sync when connection is restored.",
                color: "gray",
                delay: "delay-500"
              },
              {
                icon: Bell,
                title: "Smart Notifications",
                description: "Priority-based alerts, customizable notification sounds, and Do Not Disturb scheduling.",
                color: "blue",
                delay: "delay-700"
              }
            ].map((feature, index) => (
              <div key={index} className={`glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up ${feature.delay} group relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-${feature.color}-500/20 to-${feature.color}-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}-400 group-hover:animate-pulse`} />
                  </div>
                  <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-${feature.color}-400 transition-colors duration-300`}>{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Spotlight */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="border-green-600 text-green-600">
                Success Story
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Fire Department Reduces Response Time by
                <span className="block text-blue-600">
                  40%
                </span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Metro Fire Department deployed our mobile solution across 45 stations,
                  enabling faster incident response and better coordination between units.
                </p>
                <div className="space-y-3">
                  {[
                    "Instant incident notifications to all nearby units",
                    "Real-time GPS tracking and optimal routing",
                    "Seamless communication with dispatch center",
                    "Offline access to critical building information"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300">
                <Link href="/case-studies#featured-cases">Read Full Case Study</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">Response Metrics</h3>
                    <Badge className="bg-green-100 text-green-700 border-green-300">
                      Live Data
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">3:42</div>
                      <div className="text-gray-600">Avg Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                      <div className="text-gray-600">System Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-600 mb-2">24/7</div>
                      <div className="text-gray-600">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">45</div>
                      <div className="text-gray-600">Active Units</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Response Rate</span>
                      <span className="text-gray-900">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-[92%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Dashboard Section */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Real-time Call
                <br />
                <span className="text-white">
                  Management
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Monitor active calls, track response status, and manage incident priorities with our intuitive mobile dashboard. Get instant visibility into your agency's operational status.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-glow">
                  <div className="text-4xl font-bold text-blue-400 mb-2">Active</div>
                  <div className="text-sm text-gray-300">Live Incidents</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-glow delay-100">
                  <div className="text-4xl font-bold text-green-400 mb-2">Closed</div>
                  <div className="text-sm text-gray-300">Resolved Cases</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-glow delay-200">
                  <div className="text-4xl font-bold text-orange-400 mb-2">Pending</div>
                  <div className="text-sm text-gray-300">Awaiting Response</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-glow delay-300">
                  <div className="text-4xl font-bold text-red-400 mb-2">Assigned</div>
                  <div className="text-sm text-gray-300">Units Deployed</div>
                </div>
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-2xl">
                <Link href="/contact#contact-form">View Dashboard Demo</Link>
              </Button>
            </div>

            <div className="animate-fade-in-right">
              <div className="glass rounded-2xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform backdrop-blur-xl">
                <div className="relative max-w-[280px] mx-auto p-2">
                  <Image
                    src="/images/mobile/dashboard.png"
                    alt="Mobile Dashboard - Active Calls Management Interface"
                    width={280}
                    height={210}
                    className="w-full h-auto object-cover rounded-xl"
                  />

                  {/* Floating Icons */}
                  <div className="absolute -top-4 -left-8 glass border border-white/10 p-3 rounded-2xl animate-float hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="absolute top-20 -right-8 glass border border-white/10 p-3 rounded-2xl animate-float delay-300 hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="absolute -bottom-8 -left-4 glass border border-white/10 p-3 rounded-2xl animate-float delay-500 hover:scale-110 transition-transform duration-300">
                    <Bell className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Map Section */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="glass rounded-2xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform backdrop-blur-xl">
                <div className="relative max-w-[280px] mx-auto p-2">
                  <Image
                    src="/images/mobile/map.png"
                    alt="Mobile Map Navigation - Real-time Route Planning and Weather"
                    width={280}
                    height={210}
                    className="w-full h-auto object-cover rounded-xl"
                  />

                  {/* Floating Icons */}
                  <div className="absolute -top-4 -left-8 glass border border-white/10 p-3 rounded-2xl animate-float hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="absolute top-20 -right-8 glass border border-white/10 p-3 rounded-2xl animate-float delay-300 hover:scale-110 transition-transform duration-300">
                    <Navigation className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="absolute -bottom-8 -left-4 glass border border-white/10 p-3 rounded-2xl animate-float delay-500 hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Real-time
                <br />
                <span className="text-white">
                  Navigation
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Navigate to incidents with precision using our integrated mapping system. Get real-time route optimization, weather conditions at the incident location, and multiple map layer options for any operational environment.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-glow">
                  <div className="text-4xl font-bold text-blue-400 mb-2">Live</div>
                  <div className="text-sm text-gray-300">Route Tracking</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-glow delay-100">
                  <div className="text-4xl font-bold text-green-400 mb-2">Weather</div>
                  <div className="text-sm text-gray-300">Conditions</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-glow delay-200">
                  <div className="text-4xl font-bold text-orange-400 mb-2">Layers</div>
                  <div className="text-sm text-gray-300">Map Views</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-glow delay-300">
                  <div className="text-4xl font-bold text-red-400 mb-2">ETA</div>
                  <div className="text-sm text-gray-300">Arrival Time</div>
                </div>
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-2xl">
                <Link href="/contact#contact-form">View Map Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 gradient-mesh animate-rotate-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>


        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl animate-fade-in-up">
            Ready to Deploy?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-lg animate-fade-in-up delay-300">
            See how our mobile platform can transform your field operations.
            Request a customized demo for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
            <Button size="lg" className="text-base px-8 py-5 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-2xl shadow-lg">
              <Link href="/contact#contact-form">Schedule Demo</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-5 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/pdf/mobile-brochure.pdf" target="_blank" rel="noopener noreferrer">Download Brochure</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}