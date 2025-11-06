import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Shield, Users, CheckCircle, Award, Lightbulb, Handshake, MapPin, Smartphone, BarChart3, Clock, Building2, TrendingUp, Calendar, Star, Cloud, Zap, Globe, Lock } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Plott Labs | Mission, Values & Innovation',
  description: 'Plott Labs empowers agencies with cloud-native CAD and secure response technology.',
  keywords: 'about Plott Labs, CAD provider, incident response company',
};

export default function AboutPage() {
  const values = [
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
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      slate: "from-slate-500 to-slate-600",
      green: "from-green-500 to-green-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Mission & Vision Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center gradient-mesh animate-rotate-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>


        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up">
            <span className="text-white drop-shadow-2xl">Empowering Safer Communities</span>
            <br />
            <span className="text-white">
              Through Cloud Technology
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 animate-fade-in-up delay-200">
            We're revolutionizing emergency response with our SaaS-first approach, delivering cloud-native solutions that transform how agencies serve their communities.
          </p>
          <div className="glass rounded-2xl border border-white/20 p-8 mb-8 animate-scale-in delay-500">
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
              "Improve the safety and wellness of all people, in all communities by leveraging modern cloud technology."
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Making a Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              return (
                <Card
                  key={stat.label}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up border-0 bg-white/80 backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${getColorClasses(stat.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
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

      {/* Values Section */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up border-0 bg-white/10 backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${getColorClasses(value.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
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
          <div className="mt-20">
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
                  description: "Built with DoD-level security standards and validated against DISA control baselines, our platform is FedRAMP- and GovRAMP-authorized and JITC-certified. The open-architecture design ensures maximum interoperability, long-term resilience, and future growth across mission-critical environments.",
                  color: "blue"
                }
              ].map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Card
                    key={pillar.title}
                    className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up border-0 bg-white/10 backdrop-blur-sm`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${getColorClasses(pillar.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
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
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Plott Labs was founded to modernize outdated emergency response systems that were holding agencies back from serving their communities effectively.
                </p>
                <p>
                  We recognized that while other industries embraced cloud technology, mobile-first design, and real-time data analytics, public safety agencies were still struggling with decades-old software that was difficult to use, expensive to maintain, and impossible to scale.
                </p>
                <p>
                  Our solution was to build a completely modern, cloud-native platform providing CAD, Map, Mobile, and Analytics capabilities – all designed with security, agility, and interoperability at their core.
                </p>
                <p>
                  Today, Plott Labs serves agencies nationwide through our OneNet Incident Response Cloud, helping them improve response times, enhance situational awareness, and ultimately save more lives through the power of modern cloud technology.
                </p>
              </div>

              <div className="mt-10">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                  <Link href="/contact#contact-form">Join Our Mission</Link>
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-8 shadow-xl">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Suite at a Glance</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">Computer-Aided Dispatch (CAD)</h4>
                      <p className="text-gray-600 text-sm">Streamline dispatch operations with real-time incident management</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">Interactive Map Application</h4>
                      <p className="text-gray-600 text-sm">Visualize incidents and hazards with real-time data overlays</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">Mobile Web Application (Browser-Based)</h4>
                      <p className="text-gray-600 text-sm">Browser access for supervisors with quick situational awareness</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">Handheld Application (Field-Ready App)</h4>
                      <p className="text-gray-600 text-sm">Native app for ruggedized handhelds with offline capabilities</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">Data Analytics & Reporting</h4>
                      <p className="text-gray-600 text-sm">Transform data into actionable insights and reports</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 gradient-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Expert Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our leadership team brings decades of combined experience in public safety, technology, and mission-critical systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                name: "John Plott",
                role: "Chief Executive Officer · Principal Owner",
                description: "Seasoned public-safety tech founder who guides company strategy, partnerships, and compliance for global, multi-tenant deployments. Focused on turning mission-critical needs into scalable products agencies can trust. With over 30 years experience.",
                color: "blue"
              },
              {
                name: "Cliff Gandy",
                role: "Chief Technology Officer · Principal Owner",
                description: "Cloud & systems architect for secure CAD/NG911 and multi-tenant platforms. Brings federal/DoD public-safety experience. With over 20 years experience.",
                color: "slate"
              },
              {
                name: "Cliff Veale",
                role: "Chief Financial Officer · Principal Owner",
                description: "Operations and program-leadership veteran in federal public-safety systems; previously held senior federal-solutions roles. Oversees financial strategy, contracts, and audit-ready controls. With over 30 years experience.",
                color: "blue"
              },
              {
                name: "Brian McVey",
                role: "Vice President, Product Management",
                description: "Leads product vision and roadmaps for the OneNet Suite and mobile apps—prioritizing usability, CJIS-aware workflows, and fast agency value. With over 30 years experience.",
                color: "green"
              },
              {
                name: "Aaron Berg",
                role: "Vice President, Engineering",
                description: "Engineering leader focused on reliability, security, and velocity. Drives platform architecture, API strategy, and agile delivery across web and mobile for mission-critical operations. With over 10 years experience.",
                color: "blue"
              }
            ].map((leader, index) => (
              <Card
                key={leader.name}
                className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up border-0 bg-white/10 backdrop-blur-sm`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${getColorClasses(leader.color)} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <div className="text-lg font-semibold text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {leader.role}
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {leader.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section id="timeline" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Innovation Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our journey of continuous innovation in emergency response technology
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-orange-500 to-blue-600 rounded-full"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2020",
                  title: "Plott Labs Founded",
                  description: "Founded with a vision to modernize emergency response systems using cloud technology",
                  color: "blue"
                },
                {
                  year: "2021",
                  title: "First Cloud-Native CAD Solution",
                  description: "Launched our flagship Computer-Aided Dispatch platform built from the ground up for the cloud",
                  color: "slate"
                },
                {
                  year: "2022",
                  title: "Statewide Deployments",
                  description: "Expanded operations to serve agencies across multiple states with our OneNet platform",
                  color: "blue"
                },
                {
                  year: "2023",
                  title: "AI-Powered Analytics",
                  description: "Introduced advanced analytics and reporting capabilities with AI-driven insights",
                  color: "green"
                },
                {
                  year: "2024",
                  title: "Major Security Milestone",
                  description: "Achieved DoD Risk Management Framework compliance and CJIS certification",
                  color: "blue"
                }
              ].map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in-up`} style={{ animationDelay: `${index * 200}ms` }}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className={`inline-block px-6 py-3 rounded-full text-white font-bold text-lg mb-4 bg-gradient-to-r ${getColorClasses(milestone.color)}`}>
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                  <div className="w-8 h-8 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center relative z-10">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getColorClasses(milestone.color)}`}></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Recognitions */}
      <section id="certifications" className="py-24 gradient-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Certifications & Recognitions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by agencies nationwide with industry-leading security and compliance standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "CJIS Compliant",
                description: "Fully compliant with Criminal Justice Information Services standards, ensuring secure handling of sensitive law enforcement data with encryption and access controls.",
                color: "blue"
              },
              {
                icon: Lock,
                title: "DoD Security Framework",
                description: "Validated against DISA control baselines and built to DoD Risk Management Framework (RMF) standards. Our platform is FedRAMP- and GovRAMP-authorized and JITC-certified, ensuring mission-critical compliance and security at every level.",
                color: "slate"
              },
              {
                icon: Award,
                title: "Industry Recognition",
                description: "Recognized as a leader in next-generation emergency response technology with multiple industry awards and certifications from leading emergency services organizations.",
                color: "blue"
              },
              {
                icon: Globe,
                title: "Nationwide Trust",
                description: "Trusted by emergency response agencies across the Nation, from rural departments to major metropolitan areas with proven reliability and consistent performance.",
                color: "green"
              }
            ].map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card
                  key={cert.title}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up border-0 bg-white/10 backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${getColorClasses(cert.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Why Agencies Choose Plott Labs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our cloud-native approach compares to traditional legacy systems
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-900 to-gray-800">
                  <tr>
                    <th className="px-8 py-6 text-left text-white font-bold text-lg">Feature</th>
                    <th className="px-8 py-6 text-center text-white font-bold text-lg">Plott Labs</th>
                    <th className="px-8 py-6 text-center text-gray-300 font-bold text-lg">Traditional Legacy Systems</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      feature: "Deployment Speed",
                      plott: "Cloud-based, rapid rollout",
                      traditional: "On-premise, delayed setup"
                    },
                    {
                      feature: "Security",
                      plott: "DoD-level, FedRAMP & JITC certified",
                      traditional: "Outdated, patch-dependent"
                    },
                    {
                      feature: "Cost Efficiency",
                      plott: "Predictable SaaS subscription",
                      traditional: "Heavy upfront capital"
                    },
                    {
                      feature: "Upgrades",
                      plott: "Automatic and seamless",
                      traditional: "Manual and disruptive"
                    },
                    {
                      feature: "Accessibility",
                      plott: "Mobile-first, field-ready",
                      traditional: "Limited on-site access"
                    },
                    {
                      feature: "Support",
                      plott: "Dedicated onboarding & continuous support",
                      traditional: "Minimal vendor help"
                    }
                  ].map((row, index) => (
                    <tr key={row.feature} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-200`}>
                      <td className="px-8 py-6 font-semibold text-gray-900">{row.feature}</td>
                      <td className="px-8 py-6 text-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {row.plott}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center text-gray-600">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-fade-in-up">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Discover how Plott Labs can help your agency embrace the future of incident response with our cloud-native OneNet platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-6 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <Link href="/contact#schedule-meeting">Schedule a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}