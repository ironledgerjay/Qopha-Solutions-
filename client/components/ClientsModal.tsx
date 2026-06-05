import { X } from 'lucide-react';
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
  // Automotive
  { name: 'SAB', category: 'Automotive', logo: 'sab' },
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
  { name: 'SEDA', category: 'Public Sector', logo: 'seda' },
  { name: 'Department of SMBD', category: 'Public Sector', logo: 'dsbd' },
  // Financial Services
  { name: 'Standard Bank', category: 'Financial Services', logo: 'standard-bank' },
  { name: 'P&G', category: 'Financial Services', logo: 'pg' },
  { name: 'EWC', category: 'Financial Services', logo: 'ewc' },
  // Strategic Partners & NGO
  { name: 'NTHA', category: 'Partners', logo: 'ntha' },
  { name: 'Eastern Cape Liquor Board', category: 'Partners', logo: 'eclb' },
  { name: 'SABCOHA', category: 'Partners', logo: 'sabcoha' },
  { name: 'SAFA', category: 'Partners', logo: 'safa' },
];

interface ClientsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ClientCard = ({ name, category, logo }: Client) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="group bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-primary/50 hover:bg-white/20 transition-all hover:shadow-lg"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-24 h-24 mb-4 flex items-center justify-center bg-white/5 group-hover:bg-primary/10 rounded-lg transition-colors overflow-hidden">
          {logo ? (
            <img
              src={`/logos/${logo}.svg`}
              alt={name}
              className="max-w-[85%] max-h-[85%] object-contain group-hover:scale-110 transition-transform"
            />
          ) : (
            <div className="text-sm font-bold text-gray-400 group-hover:text-primary transition-colors text-center px-2">
              {name}
            </div>
          )}
        </div>
        <h4 className="font-semibold text-gray-100 text-center text-sm mb-1 group-hover:text-primary transition-colors">
          {name}
        </h4>
        <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{category}</p>
      </div>
    </button>
  );
};

export const ClientsModal = ({ isOpen, onClose }: ClientsModalProps) => {
  if (!isOpen) return null;

  const groupedClients: Record<string, Client[]> = {};
  clients.forEach((client) => {
    if (!groupedClients[client.category]) {
      groupedClients[client.category] = [];
    }
    groupedClients[client.category].push(client);
  });

  const categories = Object.keys(groupedClients).sort();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-950/95 backdrop-blur-md rounded-2xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-950/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between p-6">
          <h2 className="text-3xl font-bold text-white">All Industry Partners</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
          </button>
        </div>

        <div className="p-8">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-xl font-bold text-primary mb-6 pb-3 border-b border-white/10">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {groupedClients[category].map((client) => (
                  <ClientCard key={client.name} {...client} />
                ))}
              </div>
            </div>
          ))}

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-center">
              Click on any logo to return to the homepage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
