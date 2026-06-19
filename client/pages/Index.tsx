import { Layout } from '@/components/Layout';
import { ArrowRight, Target, Users, Lightbulb, Award, Briefcase, Zap, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { ServiceModal, Service } from '@/components/ServiceModal';
import { ClientCarousel } from '@/components/ClientCarousel';
import { ClientsModal } from '@/components/ClientsModal';


const serviceData: Record<string, Service> = {
  sustainability: {
    title: 'Sustainability Development Solutions',
    description: 'Integrated sustainability and transformation solutions',
    items: [
      'Circularity',
      'Supplier Development',
      'Skills Development',
      'Enterprise Development',
      'Socio-Economic Development',
    ],
    fullDescription:
      'Our Sustainability Development Solutions bring together programme design, implementation, and performance monitoring across key transformation pillars. We work with clients to build practical, measurable initiatives that support sustainability goals while strengthening people, enterprises, and communities.',
    itemDetails: {
      Circularity:
        'Our offering blends strategic insight, structured programme delivery, and value chain integration to reduce waste, recover resources, and unlock new economic opportunities. We strengthen supply chains, enhance SME participation, and drive long-term environmental and social impact.',
      'Supplier Development':
        'Our Supplier Development services help organisations optimise their procurement processes and build diverse, capable supplier networks. We empower organisations with the insights, strategies, and support needed to build stronger, future-ready value chains.',
      'Skills Development':
        'Our Skills Development services focus on equipping individuals and organisations with the competencies needed to thrive in today\'s dynamic business environment. We design and deliver accredited and non-accredited programmes.',
      'Enterprise Development':
        'We provide end-to-end Enterprise Development services that help businesses transition from informal to formal operations that can scale sustainably. Our experienced team drives clarity, capability, and sustainable performance across every stage of the business journey.',
      'Socio-Economic Development':
        'We design and execute Socio-Economic Development initiatives that create lasting positive impact in communities. From strategy formulation to programme implementation and impact evaluation, we work collaboratively with stakeholders to drive sustainable transformation through measurable, scalable outcomes.',
    },
  },
  advisory: {
    title: 'Impact Advisory Services',
    description: 'Strategic advisory and transformation solutions',
    items: [],
    fullDescription: 'Our Advisory approach aligns strategy, operations, and reporting with ESG and transformation priorities - strengthening value chains, enabling inclusive growth, and embedding purpose-driven performance across the business.',
  },
};

// Component Definitions (before Index component)
const AccreditationCard = ({
  title,
  description,
  logoText,
  bgColor,
  logoSrc
}: {
  title: string;
  description: string;
  logoText: string;
  bgColor: string;
  logoSrc?: string;
}) => (
  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/30 hover:shadow-lg transition-all group">
    <div className={`w-32 h-32 ${bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform overflow-hidden p-2`}>
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={title}
          className="max-w-[90%] max-h-[90%] object-contain"
        />
      ) : (
        <span className="text-2xl font-bold text-gray-700 group-hover:text-primary transition-colors">{logoText}</span>
      )}
    </div>
    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{title}</h4>
    <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
  </div>
);

interface StatBoxProps {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const StatBox = ({ number, label, icon: Icon }: StatBoxProps) => (
  <div className="bg-primary/20 p-6 rounded-xl border-2 border-primary/60 hover:border-primary/80 hover:shadow-2xl transition-all duration-300 hover:bg-primary/40 hover:scale-105 group">
    <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-125 transition-transform" />
    <div className="text-3xl font-bold text-white mb-1">{number}</div>
    <p className="text-sm text-gray-300">{label}</p>
  </div>
);

interface ServiceCardProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
  onClick?: () => void;
}

const ServiceCard = ({ title, icon: Icon, items, onClick }: ServiceCardProps) => (
  <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:bg-white/15 text-left w-full">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-300 group-hover:text-gray-100 transition-colors">
          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
          <span className="group-hover:translate-x-1 transition-transform">{item}</span>
        </li>
      ))}
    </ul>
    {onClick && (
      <button
        type="button"
        onClick={onClick}
        className="mt-6 inline-flex items-center gap-2 text-primary font-semibold transition-transform group-hover:translate-x-1 hover:text-white"
      >
        Learn More <ArrowRight className="w-4 h-4" />
      </button>
    )}
  </div>
);

const ExperienceCard = ({ number, label }: { number: string; label: string }) => (
  <div className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/30 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors mx-auto">
      <TrendingUp className="w-6 h-6 text-primary" />
    </div>
    <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">{number}</div>
    <p className="text-gray-200 font-medium">{label}</p>
  </div>
);

interface CertCardProps {
  title: string;
  items: string[];
}

const CertCard = ({ title, items }: CertCardProps) => (
  <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 hover:shadow-lg">
    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary transition-colors">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-300 group-hover:text-gray-100 transition-colors">
          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
          <span className="text-sm group-hover:translate-x-1 transition-transform">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Index = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClientsModalOpen, setIsClientsModalOpen] = useState(false);

  const handleServiceClick = (serviceKey: keyof typeof serviceData) => {
    setSelectedService(serviceData[serviceKey]);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Real Impact Solutions for Sustainable Transformation
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We partner to build and manage high-impact programmes that advance sustainability, strengthen enterprises, and accelerate socio-economic transformation
              </p>
              <a href="#services" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-gray-900 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-lg hover:shadow-2xl hover:scale-105 active:scale-95">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full text-center max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Qopha Solutions</h2>
              <div className="space-y-4 text-gray-200 text-lg leading-relaxed">
                <p>
                  We are a <span className="font-semibold">B-BBEE Level one woman-owned impact advisory and sustainability development solutions firm offering end-to-end project management services</span>.
                </p>
                <p>
                  We co-create, implement and monitor bespoke client projects/programmes that align to the National Development Plan, National Skills Development Plan and the global Sustainable Development Goals. Our work focuses on sustainability and transformation pillars including Circularity, Skill Development, Enterprise Development, Circularity, Skills Development, Enterprise & Supplier Development and Socio-Economic Development.
                </p>
                <p>
                  We have a strong team of accredited Facilitators, Assessors and Moderators, offering training in SETA and QCTO accredited and non-accredited courses.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-12">
              <StatBox number="20+" label="Projects Implemented" icon={Users} />
              <StatBox number="7000+" label="SMMEs Empowered" icon={Award} />
              <StatBox number="9+" label="Provinces Reached" icon={Briefcase} />
              <StatBox number="10+" label="Years of Client-Focused Solutions" icon={Target} />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="values" className="py-20 md:py-28 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Vision & Mission</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                To be a leading firm in providing real impact solutions that promote sustainable transformation.
              </p>
              <div className="w-12 h-1 bg-primary mt-6 mx-auto"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Our Core Values</h3>
              <ul className="max-w-2xl mx-auto space-y-2 text-left text-gray-200">
                <li>
                  <span className="font-semibold text-white">Client Centricity:</span> Bespoke solutions
                </li>
                <li>
                  <span className="font-semibold text-white">Collaboration:</span> Co-creating and stakeholder partnership
                </li>
                <li>
                  <span className="font-semibold text-white">Innovation:</span> Better ways to deliver
                </li>
                <li>
                  <span className="font-semibold text-white">Professionalism:</span> High competence and skills
                </li>
                <li>
                  <span className="font-semibold text-white">Impact:</span> Positive and measurable results
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your strategic evolution journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            <ServiceCard
              title="Sustainability Development Solutions"
              icon={Zap}
              items={[]}
              onClick={() => handleServiceClick('sustainability')}
            />
            <ServiceCard
              title="Impact Advisory Services"
              icon={Lightbulb}
              items={[]}
              onClick={() => handleServiceClick('advisory')}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-28 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Experience</h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              We've collaborated with leading organisations across multiple sectors.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/5 via-white to-primary/5 p-8 rounded-2xl border border-primary/10 max-w-4xl mx-auto">
            <ClientCarousel />
          </div>
          <div className="mt-8 text-center flex justify-center">
            <button
              onClick={() => setIsClientsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-all font-semibold border border-primary/50 hover:border-primary/80 hover:shadow-lg"
            >
              View All Collaborators
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <ClientsModal isOpen={isClientsModalOpen} onClose={() => setIsClientsModalOpen(false)} />

      {/* Industry Certifications Section */}
      <section className="py-20 md:py-28 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Industry Certifications</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            <AccreditationCard
              title="QCTO"
              description="Quality Council for Trades & Occupations - Supporting occupational skills development and accreditation."
              logoText="QCTO"
              bgColor="bg-white"
              logoSrc="https://cdn.builder.io/api/v1/image/assets%2F63ae93423ad24014ac015627ba16894f%2F9e2106aa39a1472aa8a4ab493fb2543e?format=webp&width=800&height=1200"
            />
            <AccreditationCard
              title="GrowthWheel® Certified Business Advisor"
              description="For enterprises at various growth stages. An online, real-time platform that allows access for the client, beneficiary and implementer to load, view, analyse and report on programme data."
              logoText="GW"
              bgColor="bg-white"
              logoSrc="https://cdn.builder.io/api/v1/image/assets%2F63ae93423ad24014ac015627ba16894f%2F3819f76a337a43c397648f63f6a28743?format=webp&width=800&height=1200"
            />
            <AccreditationCard
              title="Commerce Edge Certified Practitioner"
              description="Certified Enterprise and Supplier Development practitioner demonstrating competence in business development."
              logoText="CE"
              bgColor="bg-white"
              logoSrc="https://cdn.builder.io/api/v1/image/assets%2F63ae93423ad24014ac015627ba16894f%2F501f9fc569cd406e880856dbde6f74a5?format=webp&width=800&height=1200"
            />
            <AccreditationCard
              title="SEDA Business Coach"
              description="Certified Small Enterprise Development Agency business coach (an agency of the Department of Small Business Development)."
              logoText="SD"
              bgColor="bg-white"
              logoSrc="https://cdn.builder.io/api/v1/image/assets%2F63ae93423ad24014ac015627ba16894f%2Fabf625823fee47b78b3f1eba00c1a6fd?format=webp&width=800&height=1200"
            />
            <AccreditationCard
              title="SETA"
              description="Sector Education and Training Authority - Supporting skills development across various sectors."
              logoText="SETA"
              bgColor="bg-white"
              logoSrc="https://cdn.builder.io/api/v1/image/assets%2F63ae93423ad24014ac015627ba16894f%2F6905d227109247659496c946a402e530?format=webp&width=800&height=1200"
            />
          </div>
        </div>
      </section>

      <ServiceModal isOpen={isModalOpen} service={selectedService} onClose={() => setIsModalOpen(false)} />

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-28 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how we can co-create solutions that can drive sustainable transformation for your organization.
          </p>
          
          <div className="flex flex-col items-center mb-8">
            <a
              href="mailto:info@qophasolutions.co.za"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg border border-white/20"
            >
              info@qophasolutions.co.za
            </a>
          </div>

          <div className="text-sm text-gray-400">
            <p>Office: +27 84 417 4305</p>
            <p>33 Ballyclare Drive, Bryanston, Gauteng 2191</p>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/27844174305?text=Hi%20Qopha%20Solutions%2C%20I%27d%20like%20to%20schedule%20a%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#38d16a] via-[#23c55e] to-[#109245] p-[3px] shadow-[0_18px_30px_rgba(8,35,19,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_24px_36px_rgba(8,35,19,0.45)] sm:bottom-8 sm:right-8 group"
        title="Chat with us on WhatsApp"
      >
        <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.35),transparent_32%),linear-gradient(145deg,#2fe36c_0%,#24c55c_58%,#169944_100%)] shadow-[inset_0_2px_5px_rgba(255,255,255,0.28),inset_0_-10px_16px_rgba(7,61,27,0.32)]">
          <span className="absolute inset-x-3 top-2 h-4 rounded-full bg-white/25 blur-md"></span>
          <img src="/whatsapp-logo.svg" alt="WhatsApp" className="relative h-10 w-10 drop-shadow-[0_3px_5px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:scale-110" />
        </span>
      </a>
    </Layout>
  );
};

export default Index;
