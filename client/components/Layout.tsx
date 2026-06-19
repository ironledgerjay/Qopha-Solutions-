import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <Header />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/qs-logo.svg"
              alt="Qopha Solutions"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-[1.02] sm:h-12"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#values">Values</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+27844174305"
              className="inline-flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 font-medium hover:shadow-lg hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300 bg-black/20 rounded-lg p-4">
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About Us</MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="#values" onClick={() => setIsMenuOpen(false)}>Our Values</MobileNavLink>
            <MobileNavLink href="#experience" onClick={() => setIsMenuOpen(false)}>Clients & Experience</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</MobileNavLink>
            <a
              href="tel:+27844174305"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="block px-4 py-2 text-white hover:text-primary hover:bg-white/10 rounded-lg transition-colors font-medium"
  >
    {children}
  </a>
);

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-white/80 hover:text-primary transition-colors font-medium text-sm">
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 mb-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/qs-logo.svg" alt="Qopha Solutions" className="h-10 w-auto" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Real impact solutions for sustainable transformation. A B-BBEE Level One black woman-owned impact advisory and sustainability development solution firm.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-primary">SERVICES</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#services" className="hover:text-primary transition-colors">Sustainability Development Solutions</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Supplier Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Impact Advisory Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-primary">COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#values" className="hover:text-primary transition-colors">Our Values</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-primary">CONTACT</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Address</p>
                  <p>33 Ballyclare Drive, Ballywoods Office Park, Cedarwood House, Bryanston, Gauteng 2191</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Phone / WhatsApp</p>
                  <a
                    href="https://wa.me/27844174305?text=Hi%20Qopha%20Solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    +27 84 417 4305
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href="mailto:info@qophasolutions.co.za" className="hover:text-primary transition-colors">
                    info@qophasolutions.co.za
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2026 Qopha Solutions. All rights reserved. | Company Reg: 2016/172461/07</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
