import { X } from 'lucide-react';
import { Client, experienceGroups } from './ClientCarousel';

interface ClientsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ClientCard = ({ name, category, logo, imageSrc }: Client) => {
  return (
    <div className="rounded-xl border border-white/10 bg-white p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-4 flex h-16 w-full items-center justify-center overflow-hidden">
          {imageSrc || logo ? (
            <img
              src={imageSrc ?? `/logos/${logo}.svg`}
              alt={name}
              className="max-h-full max-w-[85%] object-contain"
            />
          ) : (
            <div className="px-2 text-center text-sm font-bold text-gray-500">{name}</div>
          )}
        </div>
        <h4 className="mb-1 text-center text-sm font-semibold text-gray-900">{name}</h4>
        <p className="text-center text-xs uppercase tracking-[0.14em] text-gray-500">{category}</p>
      </div>
    </div>
  );
};

export const ClientsModal = ({ isOpen, onClose }: ClientsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-950/95 backdrop-blur-md rounded-2xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-950/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between p-6">
          <h2 className="text-3xl font-bold text-white">All Collaborators</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
          </button>
        </div>

        <div className="p-8">
          {experienceGroups.map((group) => (
            <div key={group.category} className="mb-12">
              <h3 className="text-xl font-bold text-primary mb-6 pb-3 border-b border-white/10">
                {group.category}
              </h3>
              <div className={`grid gap-4 ${group.columnsClassName.replace('xl:grid-cols-7', 'xl:grid-cols-5')}`}>
                {group.clients.map((client) => (
                  <ClientCard key={client.name} {...client} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
