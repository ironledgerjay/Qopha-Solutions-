import { Layout } from '@/components/Layout';
import { ArrowRight, CheckCircle, Target, Users, Lightbulb, Award, Briefcase, Zap, TrendingUp } from 'lucide-react';

const ClientLogo = ({ name, initials, color }: { name: string; initials: string; color: string }) => (
  <div className={`flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-lg ${color} shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer group`}>
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-white group-hover:animate-pulse">{initials}</div>
      <div className="text-xs text-white/80 mt-1 font-semibold">{name.split(' ')[0]}</div>
    </div>
  </div>
);

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Enterprise Transformation</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Real Impact Solutions for Sustainable Transformation
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We design, implement and monitor bespoke programmes that align to national and global sustainability goals, focusing on skills development, enterprise growth, and socio-economic transformation.
              </p>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-gray-900 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-lg hover:shadow-2xl hover:scale-105 active:scale-95">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="hidden md:block">
              <div className="relative animate-fade-in-down">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl"></div>
                <div className="relative w-full aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border-2 border-primary/30 flex items-center justify-center backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-primary mb-4 animate-pulse">QS</div>
                    <p className="text-2xl text-white font-semibold">Qopha Solutions</p>
                    <p className="text-primary/80 mt-2 font-medium">Real Impact Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Qopha Solutions</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  We are a <span className="font-semibold">B-BBEE Level one black woman owned</span> training and consultancy firm specialising in skills development and end-to-end project management services.
                </p>
                <p>
                  We design, implement and monitor bespoke client projects/programmes that align to the National Development Plan, National Skills Development Plan and the global Sustainable Development Goals.
                </p>
                <p>
                  Our work focuses on sustainability and transformation pillars including Skills Development, Enterprise & Supplier Development, and Socio-Economic Development. We also have extensive experience in executing CSI and philanthropic initiatives.
                </p>
                <p>
                  We have a strong team of SETA accredited Facilitators, Assessors and Moderators, offering training in both QCTO and SAQA accredited and non-accredited courses.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatBox number="50+" label="Female-Owned SMEs Empowered" icon={Users} />
              <StatBox number="7,000+" label="Professionals Trained" icon={Award} />
              <StatBox number="30+" label="Industry Partners" icon={Briefcase} />
              <StatBox number="9" label="Years of Excellence" icon={Target} />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="values" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a leading firm in providing real impact solutions that promote sustainable transformation.
              </p>
              <div className="w-12 h-1 bg-primary mt-6"></div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span><strong>Innovation:</strong> Better ways to deliver</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span><strong>Professionalism:</strong> High competence & skills</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span><strong>Impact:</strong> Positive & measurable results</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span><strong>Collaboration:</strong> Stakeholder partnerships</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span><strong>Client Relations:</strong> Quality standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard 
              title="Skills Development"
              icon={Award}
              items={[
                'Training & Facilitation',
                'Skills Gap Analysis',
                'QCTO Aligned Preparations',
                'SAQA Accredited Qualifications',
                'Assessments & Moderation'
              ]}
            />
            <ServiceCard 
              title="Enterprise Development"
              icon={Lightbulb}
              items={[
                'Strategy Development',
                'Business Diagnostics',
                'Formalisation Solutions',
                'Funding Linkages',
                'Mentorship & Coaching'
              ]}
            />
            <ServiceCard 
              title="Supplier Development"
              icon={Target}
              items={[
                'Market Research',
                'Spend Analysis',
                'Procurement Analysis',
                'Supplier Diversity',
                'Programme Implementation'
              ]}
            />
            <ServiceCard 
              title="Socio-Economic Development"
              icon={Users}
              items={[
                'Strategy Design',
                'Sustainable Solutions',
                'Programme Execution',
                'Impact Monitoring',
                'Evaluation Services'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Proven Track Record</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by industry leaders across multiple sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ExperienceCard number="3,053" label="Liquor Traders Trained" />
            <ExperienceCard number="4,200" label="Taverners Developed" />
            <ExperienceCard number="30,000" label="Youth Reached Annually" />
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Mining', 'Automotive', 'ICT', 'Public Sector', 'Financial Services', 'FMCG', 'Energy', 'NGO & Partnerships'].map((industry) => (
                <div key={industry} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700 font-medium text-sm">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trusted by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
              <ClientLogo name="Coca-Cola" initials="CC" color="bg-red-600" />
              <ClientLogo name="Distell" initials="DT" color="bg-amber-700" />
              <ClientLogo name="Heineken" initials="HB" color="bg-green-700" />
              <ClientLogo name="P&G" initials="PG" color="bg-blue-700" />
              <ClientLogo name="SAB" initials="SAB" color="bg-red-500" />
              <ClientLogo name="Bridgestone" initials="BS" color="bg-gray-700" />
              <ClientLogo name="AngloAmerican" initials="AA" color="bg-slate-700" />
              <ClientLogo name="Telkom" initials="TK" color="bg-teal-600" />
              <ClientLogo name="Samsung" initials="SG" color="bg-blue-800" />
              <ClientLogo name="Standard Bank" initials="SB" color="bg-blue-900" />
              <ClientLogo name="SEDA" initials="SD" color="bg-orange-600" />
              <ClientLogo name="Gauteng" initials="GP" color="bg-indigo-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Accreditations & Certifications</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-recognized credentials demonstrating our expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <CertCard 
              title="Industry Certifications"
              items={[
                'Certified GrowthWheel® Business Advisor',
                'Certified Enterprise & Supplier Development Practitioner',
                'Certified SEDA Business Coach'
              ]}
            />
            <CertCard 
              title="QCTO & SETA Accreditations"
              items={[
                'QCTO Occupational Skills Programme: New Venture Creation',
                'Services SETA: Generic Management & New Venture Creation',
                'ETDP SETA, INSETA & NAMB Accreditations',
                'Registered Assessors & Moderators'
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-28 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how our solutions can drive sustainable transformation for your organization.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-gray-900 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="mailto:info@qophasolutions.co.za"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg border border-white/20"
            >
              info@qophasolutions.co.za
            </a>
          </div>

          <div className="text-sm text-gray-400">
            <p>Office: 084 417 4305</p>
            <p>33 Ballyclare Drive, Bryanston, Gauteng 2191</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface StatBoxProps {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const StatBox = ({ number, label, icon: Icon }: StatBoxProps) => (
  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:bg-primary/10 group">
    <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
    <div className="text-3xl font-bold text-gray-900 mb-1">{number}</div>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

interface ServiceCardProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
}

const ServiceCard = ({ title, icon: Icon, items }: ServiceCardProps) => (
  <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-primary/5">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-700 group-hover:text-gray-900 transition-colors">
          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
          <span className="group-hover:translate-x-1 transition-transform">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceCard = ({ number, label }: { number: string; label: string }) => (
  <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/30 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors mx-auto">
      <TrendingUp className="w-6 h-6 text-primary" />
    </div>
    <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">{number}</div>
    <p className="text-gray-700 font-medium">{label}</p>
  </div>
);

interface CertCardProps {
  title: string;
  items: string[];
}

const CertCard = ({ title, items }: CertCardProps) => (
  <div className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:bg-gradient-to-br hover:from-gray-50 hover:to-primary/5 transition-all duration-300 hover:shadow-lg">
    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-700 group-hover:text-gray-900 transition-colors">
          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
          <span className="text-sm group-hover:translate-x-1 transition-transform">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Index;
