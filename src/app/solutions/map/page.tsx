import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Layers, Cloud, Navigation, Zap, CheckCircle, Eye, Satellite, Globe, Shield, Activity } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Incident Mapping | Plott Labs Map Application',
  description: 'Real-time maps with hazards, traffic, and overlays for safer response.',
  keywords: 'incident mapping, real-time maps, emergency mapping, GIS mapping, situational awareness',
};

export default function MapPage() {
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
                <div className="w-20 h-20 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mr-6 shadow-2xl animate-glow">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
                    Interactive
                    <br />
                    <span className="text-white">
                      Incident Mapping
                    </span>
                  </h1>
                </div>
              </div>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-lg">
                Real-time maps with hazards, traffic, and overlays for safer response operations and enhanced situational awareness.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-2xl">
                  <Link href="/contact#contact-form">See Map in Action</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300">
                  <Link href="/solutions/cad">View CAD Integration</Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-300">
                <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Real-time Data</span>
                </div>
                <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Aerial Imagery</span>
                </div>
                <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Weather Integration</span>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="glass rounded-2xl border border-white/20 shadow-2xl p-6 hover:scale-105 transition-all duration-500">
                <div className="aspect-[4/3] rounded-xl relative overflow-hidden">
                  <Image
                    src="/images/map/hero-section.png"
                    alt="PlottLabs Interactive Incident Mapping Interface"
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                  {/* Overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-black/10 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Use Case */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-blue-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Visualizing Incidents Across
              <br />
              <span className="text-white">
                an Airport Campus
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              See how our mapping platform transforms emergency response coordination across complex facilities
            </p>
          </div>
          
          <div className="glass rounded-2xl border border-white/10 p-8 mb-16 animate-scale-in delay-500">
            <div className="aspect-video bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-xl relative overflow-hidden">
              {/* Map Background with Grid */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-blue-900/30 to-slate-800/50"></div>
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>
              
              {/* Airport Campus Map */}
              <div className="absolute inset-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/map/airpot-map.png"
                  alt="Airport Terminal Campus Emergency Response Map"
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Subtle overlay for better integration */}
                <div className="absolute inset-0 bg-black/5 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Advanced Mapping Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive situational awareness with real-time data integration and advanced visualization tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Satellite className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-slate-600 transition-colors duration-300">Aerial Views</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Access the latest satellite and aerial imagery with multiple overlay options for enhanced visibility.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />Sub-meter resolution imagery</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />Multiple map layer options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />Historical imagery comparison</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />3D terrain visualization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Weather Integration</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Integrated weather radar and traffic data to inform response decisions and route planning.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Live weather radar overlay</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Traffic congestion data</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Weather alert integration</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Road closure notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-green-600 transition-colors duration-300">Bidirectional CAD Integration</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Seamlessly sync with your CAD system for automatic incident plotting and resource tracking.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />Automatic incident plotting</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />Live unit tracking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />Status synchronization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />Cross-platform updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-400 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Hazard Visualization</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Visualize critical infrastructure, hazardous materials, and emergency resources on demand.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Critical infrastructure overlay</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Hazmat facility locations</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Emergency resource mapping</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />Custom layer creation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-slate-600 transition-colors duration-300">Smart Routing</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Intelligent routing that considers traffic, weather, and emergency vehicle priority.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />Emergency vehicle routing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />Multi-stop optimization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />Dynamic route adjustment</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-600 mr-3 flex-shrink-0" />Turn-by-turn navigation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-600 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Custom Visualization</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Create custom overlays and visualizations for agency-specific data and operations.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-600 mr-3 flex-shrink-0" />Custom overlay creation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-600 mr-3 flex-shrink-0" />Data import capabilities</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-600 mr-3 flex-shrink-0" />Heat map generation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-600 mr-3 flex-shrink-0" />Statistical visualization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Mockup Section */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-blue-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Enhanced
                <br />
                <span className="text-white">
                  Situational Awareness
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Transform how agencies visualize and respond to incidents with unprecedented operational intelligence.
              </p>

              <div className="space-y-8 mb-10">
                <div className="flex items-start space-x-4 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-white mb-3 group-hover:text-slate-400 transition-colors duration-300">Real-Time Incident Visualization</h3>
                    <p className="text-gray-300 leading-relaxed">See all active incidents plotted on the map with real-time status updates and resource assignments.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Environmental Intelligence</h3>
                    <p className="text-gray-300 leading-relaxed">Make informed decisions with integrated weather radar, traffic data, and environmental hazard information.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Navigation className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-white mb-3 group-hover:text-green-400 transition-colors duration-300">Optimized Response Routes</h3>
                    <p className="text-gray-300 leading-relaxed">Reduce response times with intelligent routing that accounts for traffic, weather, and emergency priorities.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="glass rounded-2xl border border-white/10 shadow-2xl p-8 hover:scale-105 transition-all duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-xl relative overflow-hidden">
                  {/* Map Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-blue-900/20 to-slate-800/40"></div>
                  
                  {/* Map Grid */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '25px 25px'
                    }}></div>
                  </div>
                  
                  {/* Simulated Live Map Interface */}
                  <div className="absolute inset-4 bg-white/5 rounded-lg border border-white/10">
                    {/* Top Status Bar */}
                    <div className="absolute top-2 left-2 right-2 h-8 bg-black/30 rounded flex items-center px-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center text-xs text-white/80 font-semibold">Live Emergency Response Map</div>
                      <div className="w-4 h-4 bg-white/20 rounded"></div>
                    </div>
                    
                    {/* Left Control Panel */}
                    <div className="absolute left-2 top-12 bottom-2 w-20 bg-black/20 rounded flex flex-col items-center py-3 space-y-3">
                      <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                        <span className="text-xs">📱</span>
                      </div>
                      <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                        <span className="text-xs">📞</span>
                      </div>
                      <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                        <span className="text-xs">📍</span>
                      </div>
                    </div>
                    
                    {/* Main Map Area */}
                    <div className="absolute left-24 top-12 right-2 bottom-2 bg-gradient-to-br from-green-800/30 to-blue-800/30 rounded">
                      {/* Simulated Street Grid */}
                      <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-0 right-0 h-px bg-white/30"></div>
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/30"></div>
                        <div className="absolute top-3/4 left-0 right-0 h-px bg-white/30"></div>
                        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/30"></div>
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30"></div>
                        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/30"></div>
                      </div>
                      
                      {/* Incident Markers with Realistic Icons */}
                      <div className="absolute top-1/4 left-1/3 w-5 h-5 bg-red-500 rounded-full shadow-lg flex items-center justify-center">
                        <span className="text-xs text-white">🚒</span>
                      </div>
                      <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-yellow-500 rounded-full shadow-lg flex items-center justify-center">
                        <span className="text-xs text-white">⚠️</span>
                      </div>
                      <div className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-green-500 rounded-full shadow-lg flex items-center justify-center">
                        <span className="text-xs text-white">🚑</span>
                      </div>
                      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-500 rounded-full shadow-lg flex items-center justify-center">
                        <span className="text-xs text-white">👮</span>
                      </div>
                      
                      {/* Area Highlight */}
                      <div className="absolute top-1/4 left-1/3 w-1/3 h-1/3 border-2 border-red-400 border-dashed rounded-lg animate-pulse"></div>
                      
                      {/* Response Route Lines */}
                      <div className="absolute top-1/4 left-1/6 w-1/2 h-px bg-blue-400 animate-pulse"></div>
                      <div className="absolute top-1/2 left-1/4 w-1/3 h-px bg-green-400 animate-pulse delay-300"></div>
                      
                      {/* Coordinates Display */}
                      <div className="absolute bottom-2 right-2 text-xs text-white/60 bg-black/40 px-2 py-1 rounded">
                        Lat: 38.9072 Long: -77.0369
                      </div>
                    </div>
                    
                    {/* Right Overlay Panel */}
                    <div className="absolute right-2 top-12 bottom-2 w-36 bg-black/20 rounded p-3">
                      <div className="text-xs text-white/80 mb-3 font-semibold">Live Overlays</div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between text-white/60">
                          <span>Fire Stations</span>
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between text-white/60">
                          <span>Police Units</span>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between text-white/60">
                          <span>EMS Units</span>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between text-white/60">
                          <span>Weather</span>
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between text-white/60">
                          <span>Traffic</span>
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
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
            Transform Your
            <span className="text-white block">
              Situational Awareness
            </span>
          </h2>
          <p className="text-xl mb-10 opacity-90 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            Experience the power of real-time mapping with integrated weather, traffic, and incident data visualization.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-6 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl font-semibold">
              <Link href="/contact#contact-form">See Map in Action</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <Link href="/pdf/map-brochure.pdf" target="_blank" rel="noopener noreferrer">Download Brochure</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}