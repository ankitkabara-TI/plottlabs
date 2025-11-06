import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Scale, FileText, Globe, Clock, Users, CheckCircle, AlertTriangle, Mail, Phone, Building2, Gavel } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Plott Labs',
  description: 'Read the terms of service for using Plott Labs OneNet platform and enterprise incident response solutions.',
  keywords: 'terms of service, terms of use, Plott Labs terms, OneNet terms, legal agreement',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 animate-rotate-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>

        {/* Floating Particles */}

        {/* Main gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl animate-float delay-1000"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up">
            <span className="text-white drop-shadow-2xl">Terms of</span>
            <br />
            <span className="text-white">
              Service
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 animate-fade-in-up delay-200">
            Your agreement for using Plott Labs' enterprise-grade incident response platform and related services.
          </p>
          <div className="glass rounded-2xl border border-white/20 p-6 mb-8 animate-scale-in delay-500">
            <div className="flex items-center justify-center space-x-4">
              <Scale className="w-8 h-8 text-blue-400" />
              <p className="text-lg text-white font-medium">
                Last Updated: January 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Service Agreement Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These terms govern your use of the OneNet platform and all Plott Labs services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Service Commitment",
                description: "Enterprise-grade SaaS platform with 99.9% uptime guarantee and 24/7 support for mission-critical operations.",
                color: "blue"
              },
              {
                icon: Scale,
                title: "Fair Use & Compliance",
                description: "Clear guidelines for appropriate use while maintaining CJIS, FedRAMP, and regulatory compliance standards.",
                color: "slate"
              },
              {
                icon: Users,
                title: "User Responsibilities",
                description: "Your obligations for data security, user management, and proper system usage in emergency response environments.",
                color: "blue"
              },
              {
                icon: Globe,
                title: "Service Scope",
                description: "Comprehensive coverage of CAD, mapping, mobile applications, and analytics services included in your agreement.",
                color: "green"
              },
              {
                icon: Clock,
                title: "Term & Renewal",
                description: "Flexible subscription terms with automatic renewal options and clear termination procedures.",
                color: "blue"
              },
              {
                icon: Building2,
                title: "Enterprise Protection",
                description: "Limitation of liability and indemnification provisions designed for public safety and government use.",
                color: "slate"
              }
            ].map((principle, index) => {
              const Icon = principle.icon;
              const colorClasses = {
                blue: "from-blue-500 to-blue-600",
                slate: "from-slate-500 to-slate-600",
                green: "from-green-500 to-green-600"
              };
              return (
                <Card
                  key={principle.title}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up border-0 bg-white/10 backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${colorClasses[principle.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                      {principle.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-2xl p-12 animate-fade-in-up">
            <div className="space-y-12">
              
              {/* Acceptance of Terms */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Gavel className="w-8 h-8 text-blue-600 mr-3" />
                  Acceptance of Terms
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    By accessing or using the Plott Labs OneNet platform and related services (the "Services"), you agree to be bound by these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you and your organization ("Customer," "you," or "your") and Plott Labs, Inc. ("Plott Labs," "we," "us," or "our").
                  </p>
                  <p>
                    If you are entering into this agreement on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-blue-800 font-medium">
                      <strong>Important:</strong> If you do not agree to these Terms, you may not access or use our Services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Description */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  Service Description
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Plott Labs provides cloud-based incident response solutions including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                      "Computer-Aided Dispatch (CAD) System",
                      "Interactive Mapping Application",
                      "Mobile Web Application (Browser-Based)",
                      "Handheld Application (Field-Ready)",
                      "Data Analytics & Reporting Tools",
                      "System Integration Services",
                      "Training and Support Services",
                      "Compliance and Security Monitoring"
                    ].map((service, index) => (
                      <div key={service} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6">
                    All Services are provided as Software-as-a-Service (SaaS) solutions hosted in secure, compliant cloud infrastructure meeting DoD, FedRAMP, and CJIS security standards.
                  </p>
                </div>
              </div>

              {/* User Accounts and Access */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-8 h-8 text-blue-600 mr-3" />
                  User Accounts & Access
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Registration</h3>
                  <p>
                    You must provide accurate, current, and complete information during registration and maintain the accuracy of this information throughout your use of the Services.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Security</h3>
                  <p>You are responsible for:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Maintaining the confidentiality of login credentials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>All activities that occur under your account</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Immediately notifying us of unauthorized access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Implementing multi-factor authentication as required</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">User Roles & Permissions</h3>
                  <p>
                    Your organization's administrator will manage user access and permissions. Users must comply with their assigned role limitations and your organization's security policies.
                  </p>
                </div>
              </div>

              {/* Acceptable Use */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Scale className="w-8 h-8 text-blue-600 mr-3" />
                  Acceptable Use Policy
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Permitted Uses</h3>
                  <p>
                    You may use our Services solely for legitimate incident response, emergency dispatch, and public safety operations in accordance with applicable laws and regulations.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Activities</h3>
                  <p>You agree not to:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Use the Services for any unlawful purpose or in violation of applicable laws</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Attempt to gain unauthorized access to our systems or networks</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Interfere with or disrupt the Services or servers/networks</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Reverse engineer, decompile, or attempt to extract source code</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Use the Services to transmit harmful or malicious code</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Violate any third-party rights or applicable regulations</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data and Privacy */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-8 h-8 text-blue-600 mr-3" />
                  Data Handling & Privacy
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Data</h3>
                  <p>
                    You retain ownership of all data you input into our Services ("Customer Data"). We will process Customer Data only as necessary to provide the Services and as directed by you.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Security</h3>
                  <p>
                    We implement and maintain appropriate technical and organizational measures to protect Customer Data, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {[
                      "Encryption in transit and at rest",
                      "Multi-factor authentication",
                      "Regular security assessments",
                      "CJIS and FedRAMP compliance",
                      "Access logging and monitoring",
                      "Incident response procedures"
                    ].map((measure, index) => (
                      <div key={measure} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm font-medium">{measure}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Privacy Policy</h3>
                  <p>
                    Our collection and use of personal information is governed by our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference.
                  </p>
                </div>
              </div>

              {/* Service Level Agreement */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-8 h-8 text-blue-600 mr-3" />
                  Service Level Agreement
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Availability Commitment</h3>
                  <p>
                    We commit to maintaining 99.9% uptime for our core Services, measured monthly. In the event we fail to meet this commitment, you may be eligible for service credits as outlined in your subscription agreement.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Support Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Standard Support</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Business hours (8 AM - 6 PM EST)</li>
                        <li>• Email and phone support</li>
                        <li>• Knowledge base access</li>
                        <li>• Software updates included</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Premium Support</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 24/7 emergency support</li>
                        <li>• Dedicated support manager</li>
                        <li>• Priority issue resolution</li>
                        <li>• Custom training sessions</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Maintenance Windows</h3>
                  <p>
                    Scheduled maintenance will occur during off-peak hours with advance notice. Emergency maintenance may be performed as needed to maintain security and system integrity.
                  </p>
                </div>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building2 className="w-8 h-8 text-blue-600 mr-3" />
                  Payment & Billing
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Subscription Fees</h3>
                  <p>
                    Services are provided on a subscription basis with fees as specified in your service agreement. All fees are non-refundable except as expressly provided herein.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Terms</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Invoices are due within 30 days of receipt</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Late payments may incur fees and service suspension</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Automatic renewal unless cancelled with 30 days notice</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Fee Changes</h3>
                  <p>
                    We may modify subscription fees with 60 days written notice. Fee increases will take effect at your next renewal period.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  Limitation of Liability
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                    <p className="text-orange-800 font-medium">
                      <strong>IMPORTANT LEGAL NOTICE:</strong> The following provisions limit our liability for damages arising from your use of the Services.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Disclaimer of Warranties</h3>
                  <p>
                    THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Limitation of Damages</h3>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICES IN THE 12 MONTHS PRECEDING THE CLAIM. WE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Emergency Services Disclaimer</h3>
                  <p>
                    While our Services are designed for emergency response operations, you acknowledge that technology systems may fail and should not be relied upon as the sole means of emergency communication or response.
                  </p>
                </div>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe className="w-8 h-8 text-blue-600 mr-3" />
                  Term & Termination
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Term</h3>
                  <p>
                    This agreement begins when you first access the Services and continues for the subscription period specified in your service agreement.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Termination by You</h3>
                  <p>
                    You may terminate this agreement at any time with 30 days written notice. Upon termination, your access to the Services will cease at the end of your current billing period.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Termination by Us</h3>
                  <p>
                    We may terminate this agreement immediately if you breach these Terms, fail to pay fees when due, or if continuation would violate applicable law.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Effect of Termination</h3>
                  <p>
                    Upon termination, we will provide you with access to export your Customer Data for 30 days, after which data may be deleted from our systems.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Mail className="w-8 h-8 text-blue-600 mr-3" />
                  Contact Information
                </h2>
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-6">
                    For questions about these Terms of Service, please contact our legal team:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Email: legal@plottlabs.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Phone: (555) 123-4567</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Building2 className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-gray-700 font-semibold">Legal Department:</p>
                        <p className="text-gray-700">
                          Plott Labs, Inc.<br />
                          123 Technology Drive<br />
                          Suite 100<br />
                          Tech City, TC 12345
                        </p>
                      </div>
                    </div>
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
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Questions About Our
            <span className="text-white block">
              Terms of Service?
            </span>
          </h2>
          <p className="text-xl mb-10 opacity-90 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            Our legal team is available to discuss any questions about these terms or your service agreement.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-7 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl font-semibold">
              <Link href="/contact#contact-form">Contact Legal Team</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/privacy">View Privacy Policy</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}