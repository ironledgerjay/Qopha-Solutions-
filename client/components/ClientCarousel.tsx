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
      { name: 'Coca-Cola Beverages South Africa', category: 'FMCG', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F65b9b261e9d54a30affbc6c1f447a477?format=webp&width=800&height=1200' },
      { name: 'Distell', category: 'FMCG', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F3d9865f987fc4c5db92b7b1215ae899d?format=webp&width=800&height=1200' },
      { name: 'Heineken Beverages', category: 'FMCG', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fe67ab75637bf480ebb4362251c12e29b?format=webp&width=800&height=1200' },
      { name: 'Tiger Brands', category: 'FMCG', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fa6a5e3a84f114b38ab785f2a40fe3ffe?format=webp&width=800&height=1200' },
      { name: 'P&G', category: 'FMCG', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F120b19a4d8144cbe88f74a91ef487030?format=webp&width=800&height=1200' },
      { name: 'SAB South Africa Breweries', category: 'FMCG', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F05f969b8e32b4280bc86f924d8dc70bf?format=webp&width=800&height=1200' },
      { name: 'Bridgestone', category: 'Automotive', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F753cfb4454b642a696a43c58ff4340e1?format=webp&width=800&height=1200' },
    ],
  },
  {
    category: 'Mining, Energy & ICT',
    columnsClassName: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
    clients: [
      { name: 'Anglo American', category: 'Mining', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fb5f2ef036caf46e9bb8149ddfca4861a?format=webp&width=800&height=1200' },
      { name: 'Sasol', category: 'Energy', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F7152c7ed7172459c9fceffd1437e8a96?format=webp&width=800&height=1200' },
      { name: 'Telkom Foundation', category: 'ICT', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F6ce437f9d19441c0b2c5bfc7e71922e3?format=webp&width=800&height=1200' },
      { name: 'Samsung', category: 'ICT', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fea860298383a4fc692a08736c3e920cc?format=webp&width=800&height=1200' },
    ],
  },
  {
    category: 'Public Sector & Financial Services',
    columnsClassName: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
    clients: [
      { name: 'Gauteng Province', category: 'Public Sector', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F03307ef718a44a0894c158e121d694e4?format=webp&width=800&height=1200' },
      { name: 'Department of Small Business Development', category: 'Public Sector', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F701bd94eb71b4dffbcc23731c9b11d03?format=webp&width=800&height=1200' },
      { name: 'SEDA', category: 'Public Sector', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F4239073cad51443eb1f15b903100e826?format=webp&width=800&height=1200' },
      { name: 'EWC', category: 'Financial Services', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F6cd424a06ec34dc283bc47bb32ad6ebe?format=webp&width=800&height=1200' },
      { name: 'Standard Bank', category: 'Financial Services', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F828365e3b8994513b73f959263d5f525?format=webp&width=800&height=1200' },
    ],
  },
  {
    category: 'Strategic Partners & NGOs',
    columnsClassName: 'grid-cols-2 sm:grid-cols-3 xl:grid-cols-5',
    clients: [
      { name: 'NTHA', category: 'Strategic Partners & NGO', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F5eddc262e7d34b5bb4d1498fc04cd8d8?format=webp&width=800&height=1200' },
      { name: 'Eastern Cape Liquor Board', category: 'Strategic Partners & NGO', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F03331aee863c49678e931998abfba1fa?format=webp&width=800&height=1200' },
      {
        name: 'Gauteng Liquor Forum',
        category: 'Strategic Partners & NGO',
        imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fc3370111be3f4e49930770822453061a?format=webp&width=800&height=1200',
      },
      { name: 'SABCOHA', category: 'Strategic Partners & NGO', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F3dd59dd62b2645f4a9a08026aa11b551?format=webp&width=800&height=1200' },
      { name: 'South African Football Association', category: 'Strategic Partners & NGO', imageSrc: 'https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F1e25dfb9b672467195c8588264c21ebd?format=webp&width=800&height=1200' },
    ],
  },
];

export const ClientCarousel = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fb2900bea7152422ba9f4cd02a3661888?format=webp&width=800&height=1200"
        alt="Qopha Solutions experience collaborators board"
        className="h-auto w-full object-contain"
      />
    </div>
  );
};

const ClientLogoCard = ({ name, category, logo, imageSrc }: Client) => {
  return (
    <div className="rounded-xl border border-white/15 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
        <div className="flex items-center justify-center w-full h-20">
          {imageSrc || logo ? (
            <img
              src={imageSrc ?? `/logos/${logo}.svg`}
              alt={name}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <div className="px-2 text-sm font-bold text-gray-500">{name}</div>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-gray-900 leading-snug">{name}</p>
          <p className="text-xs uppercase tracking-[0.16em] text-gray-500">{category}</p>
        </div>
      </div>
    </div>
  );
};
