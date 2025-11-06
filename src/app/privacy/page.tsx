import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, Globe, Clock, Users, CheckCircle, AlertTriangle, Mail, Phone, FileText } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Plott Labs',
  description: 'Learn how Plott Labs protects your privacy and handles data in our enterprise-grade incident response platform.',
  keywords: 'privacy policy, data protection, Plott Labs privacy, security, CJIS compliance',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 animate-rotate-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400/60 rounded-full animate-particle-float"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-slate-400/60 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-blue-400/60 rounded-full animate-particle-float delay-500"></div>
        <div className="absolute top-60 right-40 w-3 h-3 bg-green-400/60 rounded-full animate-particle-float delay-700"></div>

        {/* Main gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl animate-float delay-1000"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up">
            <span className="text-white drop-shadow-2xl">Privacy</span>
            <br />
            <span className="text-white">
              Policy
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 animate-fade-in-up delay-200">
            Your privacy and data security are fundamental to our mission. Learn how we protect your information with military-grade security standards.
          </p>
          <div className="glass rounded-2xl border border-white/20 p-6 mb-8 animate-scale-in delay-500">
            <div className="flex items-center justify-center space-x-4">
              <Shield className="w-8 h-8 text-blue-400" />
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
              Our Commitment to Privacy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Plott Labs is committed to protecting the privacy and security of your personal information and maintaining your trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "DoD-Level Security",
                description: "Military-grade encryption and security protocols protect all data with FedRAMP and JITC certification.",
                color: "blue"
              },
              {
                icon: Database,
                title: "Minimal Data Collection",
                description: "We only collect information necessary to provide our services and improve your experience.",
                color: "slate"
              },
              {
                icon: Eye,
                title: "Transparency",
                description: "Clear disclosure of what data we collect, how we use it, and your rights regarding your information.",
                color: "blue"
              },
              {
                icon: Users,
                title: "User Control",
                description: "You maintain control over your data with options to access, update, or delete your information.",
                color: "green"
              },
              {
                icon: Globe,
                title: "Compliance",
                description: "Full compliance with CJIS, GDPR, CCPA, and other applicable privacy regulations.",
                color: "blue"
              },
              {
                icon: Clock,
                title: "Data Retention",
                description: "Clear policies on how long we retain data and secure deletion when no longer needed.",
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

      {/* Privacy Policy Content */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-2xl p-12 animate-fade-in-up">
            <div className="space-y-12">
              
              {/* Information We Collect */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="w-8 h-8 text-blue-600 mr-3" />
                  Information We Collect
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                    <p className="mb-4">We may collect the following types of personal information:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Contact information (name, email, phone number, organization)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Account credentials and authentication data</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Job title and professional information</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Communication preferences and settings</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Operational Data</h3>
                    <p className="mb-4">When using our OneNet platform, we may process:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Incident and dispatch data as required for service delivery</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>System usage analytics and performance metrics</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Location data when explicitly provided for mapping features</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Information</h3>
                    <p className="mb-4">We automatically collect certain technical information:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>IP addresses and device identifiers</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Browser type and operating system information</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Access logs and system performance data</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  How We Use Your Information
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>We use collected information for the following purposes:</p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Providing and maintaining our OneNet platform services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Processing incident response and dispatch operations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Improving system performance and user experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Providing customer support and technical assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Ensuring security and preventing unauthorized access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Complying with legal obligations and regulatory requirements</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="w-8 h-8 text-blue-600 mr-3" />
                  Data Security & Protection
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We implement industry-leading security measures to protect your information:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {[
                      {
                        title: "Encryption",
                        description: "All data is encrypted in transit and at rest using military-grade encryption standards"
                      },
                      {
                        title: "Access Controls",
                        description: "Multi-factor authentication and role-based access controls limit data access"
                      },
                      {
                        title: "Security Monitoring",
                        description: "24/7 security monitoring and threat detection systems protect against breaches"
                      },
                      {
                        title: "Compliance",
                        description: "Full CJIS, FedRAMP, and JITC compliance with regular security audits"
                      }
                    ].map((security, index) => (
                      <div key={security.title} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">{security.title}</h4>
                        <p className="text-sm text-gray-600">{security.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Data Sharing */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-8 h-8 text-blue-600 mr-3" />
                  Data Sharing & Disclosure
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We do not sell, rent, or trade your personal information. We may share information only in the following limited circumstances:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>With your explicit consent or as directed by your organization</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>To comply with legal obligations, court orders, or government requests</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>With trusted service providers who assist in platform operations (under strict confidentiality agreements)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>In connection with business transfers (mergers, acquisitions) with appropriate safeguards</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-8 h-8 text-blue-600 mr-3" />
                  Your Privacy Rights
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    You have the following rights regarding your personal information:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                      "Access your personal information",
                      "Correct inaccurate data",
                      "Request deletion of your data",
                      "Restrict processing activities",
                      "Data portability",
                      "Withdraw consent",
                      "Object to certain uses",
                      "Non-discrimination"
                    ].map((right, index) => (
                      <div key={right} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{right}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-8 h-8 text-blue-600 mr-3" />
                  Data Retention
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We retain your information only as long as necessary to:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Provide ongoing services to your organization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Comply with legal and regulatory requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Resolve disputes and enforce agreements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Support system security and fraud prevention</span>
                    </li>
                  </ul>
                  <p className="mt-4">
                    When data is no longer needed, it is securely deleted or anonymized according to our data retention schedule and applicable regulations.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Mail className="w-8 h-8 text-blue-600 mr-3" />
                  Contact Us About Privacy
                </h2>
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-6">
                    If you have questions about this Privacy Policy, need to exercise your privacy rights, or have concerns about how we handle your information, please contact us:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Email: privacy@plottlabs.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Phone: (555) 123-4567</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-gray-700 font-semibold">Mailing Address:</p>
                        <p className="text-gray-700">
                          Plott Labs Privacy Officer<br />
                          123 Technology Drive<br />
                          Suite 100<br />
                          Tech City, TC 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Policy Updates */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-8 h-8 text-blue-600 mr-3" />
                  Policy Updates
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. When we make material changes, we will:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Notify you via email and/or platform notifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Update the "Last Updated" date at the top of this policy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Provide a reasonable notice period before changes take effect</span>
                    </li>
                  </ul>
                  <p>
                    Your continued use of our services after policy changes indicates your acceptance of the updated terms.
                  </p>
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
              Privacy Practices?
            </span>
          </h2>
          <p className="text-xl mb-10 opacity-90 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            Our team is here to help you understand how we protect your privacy and handle your data securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-7 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl font-semibold">
              <Link href="/contact#contact-form">Contact Our Privacy Team</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/terms">Learn About Our Terms of Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}