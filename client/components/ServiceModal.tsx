import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

export interface Service {
  title: string;
  description: string;
  items: string[];
  fullDescription: string;
  itemDetails?: Record<string, string>;
}

interface ServiceModalProps {
  isOpen: boolean;
  service: Service | null;
  onClose: () => void;
}

export const ServiceModal = ({ isOpen, service, onClose }: ServiceModalProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedItem(null);
    }
  }, [isOpen, service]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300">
        <div className="sticky top-0 bg-white border-b border-gray-200 flex items-center justify-between p-6">
          <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {service.items.length > 0 && service.itemDetails && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Focus Areas</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className={`w-full rounded-xl border px-4 py-3 text-left text-lg font-medium transition-colors ${
                        selectedItem === item
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-gray-200 text-gray-700 hover:border-primary/40 hover:text-primary'
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>

              {selectedItem && service.itemDetails[selectedItem] && (
                <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
                  <h4 className="mb-3 text-xl font-semibold text-gray-900">{selectedItem}</h4>
                  <p className="text-lg leading-relaxed text-gray-700">{service.itemDetails[selectedItem]}</p>
                </div>
              )}
            </div>
          )}

          {service.items.length > 0 && !service.itemDetails && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
              <ul className="space-y-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-lg group-hover:text-primary transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Ready to get started with our {service.title.toLowerCase()}?</p>
            <a
              href="https://wa.me/27844174305?text=Hi%20Qopha%20Solutions%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              Schedule Consultation on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
