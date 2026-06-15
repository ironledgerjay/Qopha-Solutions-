import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface Client {
  name: string;
  category: string;
  logo?: string;
}

const clients: Client[] = [
  // FMCG
  { name: 'Coca-Cola', category: 'FMCG', logo: 'coca-cola' },
  { name: 'Distell', category: 'FMCG', logo: 'distell' },
  { name: 'Heineken', category: 'FMCG', logo: 'heineken' },
  { name: 'Tiger Brands', category: 'FMCG', logo: 'tiger-brands' },
  { name: 'P&G', category: 'FMCG', logo: 'pg' },
  { name: 'SAB', category: 'FMCG', logo: 'sab' },
  // Automotive
  { name: 'Bridgestone', category: 'Automotive', logo: 'bridgestone' },
  // Mining
  { name: 'AngloAmerican', category: 'Mining', logo: 'anglo-american' },
  // Energy
  { name: 'SASOL', category: 'Energy', logo: 'sasol' },
  // ICT
  { name: 'Telkom', category: 'ICT', logo: 'telkom' },
  { name: 'Samsung', category: 'ICT', logo: 'samsung' },
  { name: 'NASPERS', category: 'ICT', logo: 'naspers' },
  // Public Sector
  { name: 'Gauteng Province', category: 'Public Sector', logo: 'gauteng' },
  { name: 'Department of SMBD', category: 'Public Sector', logo: 'dsbd' },
  { name: 'SEDA', category: 'Public Sector', logo: 'seda' },
  // Financial Services
  { name: 'EWC', category: 'Financial Services', logo: 'ewc' },
  { name: 'Standard Bank', category: 'Financial Services', logo: 'standard-bank' },
  // Strategic Partners & NGO
  { name: 'NTHA', category: 'Strategic Partners & NGO', logo: 'ntha' },
  { name: 'Eastern Cape Liquor Board', category: 'Strategic Partners & NGO', logo: 'eclb' },
  { name: 'Distell Brands', category: 'Strategic Partners & NGO', logo: 'distell' },
  { name: 'SABCOHA', category: 'Strategic Partners & NGO', logo: 'sabcoha' },
  { name: 'South African Football Association', category: 'Strategic Partners & NGO', logo: 'safa' },
];

export const ClientCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset to beginning when reaching the end
      if (scrollPosition >= container.scrollWidth - container.clientWidth) {
        scrollPosition = 0;
      }

      container.scrollLeft = scrollPosition;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation after a small delay
    const startAnimation = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 500);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(startAnimation);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full">
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-hidden pb-4 scroll-smooth"
        style={{
          scrollBehavior: 'smooth',
        }}
      >
        {/* Duplicate clients for seamless looping */}
        {[...clients, ...clients].map((client, idx) => (
          <ClientLogoCard key={idx} name={client.name} category={client.category} logo={client.logo} />
        ))}
      </div>
    </div>
  );
};

const ClientLogoCard = ({ name, category, logo }: Client) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button
      onClick={handleClick}
      className="flex-shrink-0 w-40 h-28 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg shadow-sm hover:shadow-md transition-all hover:bg-white/20 flex items-center justify-center p-4 group cursor-pointer hover:border-primary/50"
    >
      <div className="text-center w-full h-full flex flex-col items-center justify-center">
        <div className="w-full h-20 mx-auto mb-2 flex items-center justify-center bg-white/5 group-hover:bg-primary/10 rounded-lg transition-colors overflow-hidden">
          {logo ? (
            <img
              src={`/logos/${logo}.svg`}
              alt={name}
              className="max-w-[90%] max-h-[90%] object-contain group-hover:scale-110 transition-transform"
            />
          ) : (
            <div className="text-sm font-bold text-gray-400 group-hover:text-primary transition-colors text-center px-2">
              {name}
            </div>
          )}
        </div>
        <p className="text-xs text-gray-400 mt-1 group-hover:text-gray-200 transition-colors">{category}</p>
      </div>
    </button>
  );
};
