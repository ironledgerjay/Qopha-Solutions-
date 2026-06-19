export interface Client {
  name: string;
  category: string;
  logo?: string;
  imageSrc?: string;
}

export interface ClientGroup {
  category: string;
  columnsClassName: string;
  clients: Client[];
}

export const experienceGroups: ClientGroup[] = [
  {
    category: 'FMCG',
    columnsClassName: 'grid-cols-2 sm:grid-cols-3 xl:grid-cols-7',
    clients: [
      { name: 'Coca-Cola Beverages South Africa', category: 'FMCG', imageSrc: '/logos/experience/coca-cola-beverages-sa.png' },
      { name: 'Distell', category: 'FMCG', imageSrc: '/logos/experience/distell-board.png' },
      { name: 'Heineken Beverages', category: 'FMCG', imageSrc: '/logos/experience/heineken-beverages-board.png' },
      { name: 'Tiger Brands', category: 'FMCG', imageSrc: '/logos/experience/tiger-brands-board.png' },
      { name: 'P&G', category: 'FMCG', imageSrc: '/logos/experience/pg-board.png' },
      { name: 'SAB South Africa Breweries', category: 'FMCG', imageSrc: '/logos/experience/sab-board.png' },
      { name: 'Bridgestone', category: 'Automotive', imageSrc: '/logos/experience/bridgestone-board.png' },
    ],
  },
  {
    category: 'Mining, Energy & ICT',
    columnsClassName: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
    clients: [
      { name: 'Anglo American', category: 'Mining', imageSrc: '/logos/experience/anglo-american-board.png' },
      { name: 'Sasol', category: 'Energy', imageSrc: '/logos/experience/sasol-board.png' },
      { name: 'Telkom Foundation', category: 'ICT', imageSrc: '/logos/experience/telkom-foundation-board.png' },
      { name: 'Samsung', category: 'ICT', imageSrc: '/logos/experience/samsung-board.png' },
      { name: 'Naspers', category: 'ICT', imageSrc: '/logos/experience/naspers-board.png' },
    ],
  },
  {
    category: 'Public Sector & Financial Services',
    columnsClassName: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
    clients: [
      { name: 'Gauteng Province', category: 'Public Sector', imageSrc: '/logos/experience/gauteng-province-board.png' },
      { name: 'Department of Small Business Development', category: 'Public Sector', imageSrc: '/logos/experience/dsbd-board.png' },
      { name: 'SEDA', category: 'Public Sector', imageSrc: '/logos/experience/seda-board.png' },
      { name: 'EWC', category: 'Financial Services', imageSrc: '/logos/experience/ewc-board.png' },
      { name: 'Standard Bank', category: 'Financial Services', imageSrc: '/logos/experience/standard-bank-board.png' },
    ],
  },
  {
    category: 'Strategic Partners & NGOs',
    columnsClassName: 'grid-cols-2 sm:grid-cols-3 xl:grid-cols-5',
    clients: [
      { name: 'NTHA', category: 'Strategic Partners & NGOs', imageSrc: '/logos/experience/ntha-board.png' },
      { name: 'Eastern Cape Liquor Board', category: 'Strategic Partners & NGOs', imageSrc: '/logos/experience/eclb-board.png' },
      {
        name: 'Gauteng Liquor Forum',
        category: 'Strategic Partners & NGOs',
        imageSrc: '/logos/experience/gauteng-liquor-forum-board.png',
      },
      { name: 'SABCOHA', category: 'Strategic Partners & NGOs', imageSrc: '/logos/experience/sabcoha-board.png' },
      { name: 'South African Football Association', category: 'Strategic Partners & NGOs', imageSrc: '/logos/experience/safa-board.png' },
    ],
  },
];

export const ClientCarousel = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl">
      <img
        src="/logos/experience-board.jpeg"
        alt="Qopha Solutions experience collaborators board"
        className="h-auto w-full object-contain"
      />
    </div>
  );
};

const ClientLogoCard = ({ name, category, logo, imageSrc }: Client) => {
  return (
    <div className="min-h-[124px] rounded-xl border border-white/15 bg-white px-4 py-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
        <div className="flex h-14 w-full items-center justify-center overflow-hidden">
          {imageSrc || logo ? (
            <img
              src={imageSrc ?? `/logos/${logo}.svg`}
              alt={name}
              className="max-h-full max-w-[88%] object-contain"
            />
          ) : (
            <div className="px-2 text-sm font-bold text-gray-500">{name}</div>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs uppercase tracking-[0.16em] text-gray-500">{category}</p>
        </div>
      </div>
    </div>
  );
};
