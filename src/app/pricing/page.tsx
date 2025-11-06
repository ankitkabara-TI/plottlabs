import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, MapPin, Smartphone, BarChart3, CheckCircle, TabletSmartphone } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small agencies getting started",
      price: "Contact for pricing",
      features: [
        "Basic CAD functionality",
        "Standard mapping features",
        "Mobile app access",
        "Basic analytics dashboard",
        "Email support",
        "Up to 25 users",
        "99.5% uptime SLA"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      description: "Advanced features for growing agencies",
      price: "Contact for pricing",
      features: [
        "Full CAD suite with ProQA certification",
        "Advanced mapping with aerial overlays",
        "Full mobile synchronization",
        "Custom analytics & reporting",
        "Phone & email support",
        "Up to 100 users",
        "99.9% uptime SLA",
        "API integrations",
        "Custom workflows"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Complete solution for large operations",
      price: "Contact for pricing",
      features: [
        "Enterprise CAD with full customization",
        "Premium mapping with real-time data",
        "Advanced mobile features",
        "Full analytics suite with custom dashboards",
        "24/7 dedicated support",
        "Unlimited users",
        "99.99% uptime SLA",
        "Full API access",
        "Custom integrations",
        "On-premises deployment options",
        "Advanced security features",
        "Compliance reporting"
      ],
      cta: "Get Started",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center gradient-mesh animate-rotate-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>


        {/* Main gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float delay-500"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 animate-fade-in-up">
            <span className="text-white drop-shadow-2xl">
              Flexible SaaS Pricing
            </span>
            <br />
            <span 
              className="text-white animate-gradient-x" 
              style={{
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                opacity: 1
              }}
            >
              For Every Agency
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-500 drop-shadow-lg">
            Choose the plan that fits your agency's size and requirements. All plans include our core CAD, Map, Mobile, and Analytics platform.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 gradient-dark relative overflow-hidden" id="pricing-plans">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-slate-900/10"></div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Choose Your Plan.
              <br />
              <span className="text-white">
                Scale With Confidence.
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every plan includes our complete integrated platform with enterprise-grade security and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up group relative overflow-hidden ${plan.popular ? 'scale-110 border-blue-400/30' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${plan.popular ? 'from-blue-500/20 to-orange-600/20' : 'from-gray-500/20 to-gray-600/20'} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                    {index === 0 && <Shield className={`w-10 h-10 ${plan.popular ? 'text-blue-400' : 'text-gray-400'} group-hover:animate-pulse`} />}
                    {index === 1 && <BarChart3 className={`w-10 h-10 ${plan.popular ? 'text-blue-400' : 'text-slate-400'} group-hover:animate-pulse`} />}
                    {index === 2 && <Check className={`w-10 h-10 text-blue-400 group-hover:animate-pulse`} />}
                  </div>

                  <h3 className={`text-3xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300`}>{plan.name}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <div className={`text-4xl font-bold text-white mb-2`}>
                      {plan.price}
                    </div>
                    <p className="text-sm text-gray-400">Custom quotes based on agency size</p>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full text-base px-6 py-6 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300`}
                    variant="outline"
                    size="lg"
                  >
                    <Link href="/contact#contact-form">{plan.cta}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-slate-50/30"></div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Complete Platform Access
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every plan includes our full suite of integrated tools designed to transform your agency's operations
            </p>
          </div>

          <div className="space-y-16">
            {/* First Row - Core Platform Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* CAD System */}
              <div className="group animate-fade-in-up">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Shield className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Computer-Aided Dispatch</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Advanced CAD system with real-time incident management and intelligent resource allocation.</p>
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

              {/* Map Platform */}
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

              {/* Analytics Suite */}
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

            {/* Second Row - Mobile Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Mobile Access */}
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

              {/* Handheld Application */}
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

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in-up delay-500">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-slate-100 rounded-full px-6 py-3 border border-blue-200/50">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">All features included in every plan</span>
              <Check className="w-4 h-4 text-green-600" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ/Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pricing Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Flexible Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Secure on-premises deployment options designed for agencies with strict security requirements and compliance needs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• On-premises installation</li>
                  <li>• Air-gapped networks supported</li>
                  <li>• Complete data control</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Implementation Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our implementation team ensures a smooth transition from your legacy systems to our modern platform.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span>• Data migration assistance</span>
                    <div className="ml-2 inline-flex items-center px-2 bg-red-50 border border-red-200 rounded-md">
                      <span className="text-xs text-red-700 font-medium">Special pricing via quote</span>
                    </div>
                  </li>
                  <li>• Staff training programs</li>
                  <li>• Go-live support</li>
                  <li>• Ongoing technical support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <div className="gradient-mesh animate-rotate-gradient relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white/10 rounded-full blur-xl animate-float delay-500"></div>
          </div>
          <div className="relative z-10 p-8 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              Ready to Transform Your
              <span className="text-white block">
                Agency Operations?
              </span>
            </h3>
            <p className="text-xl mb-8 opacity-90 animate-fade-in-up delay-200 max-w-2xl mx-auto">
              Contact our sales team for a custom quote tailored to your agency's specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
              <Button size="lg" className="text-lg px-10 py-7 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl font-semibold">
                <Link href="/contact#contact-form">Request Custom Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <Link href="/contact#schedule-meeting">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}