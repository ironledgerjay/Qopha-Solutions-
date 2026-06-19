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

const clientCatalog: Record<string, Client> = {
  'coca-cola': { name: 'Coca-Cola Beverages South Africa', category: 'FMCG', logo: 'coca-cola' },
  distell: { name: 'Distell', category: 'FMCG', logo: 'distell' },
  heineken: { name: 'Heineken Beverages', category: 'FMCG', logo: 'heineken' },
  tiger: { name: 'Tiger Brands', category: 'FMCG', logo: 'tiger-brands' },
  pg: { name: 'P&G', category: 'FMCG', logo: 'pg' },
  sab: { name: 'SAB South Africa Breweries', category: 'FMCG', logo: 'sab' },
  bridgestone: { name: 'Bridgestone', category: 'Automotive', logo: 'bridgestone' },
  anglo: { name: 'Anglo American', category: 'Mining', logo: 'anglo-american' },
  sasol: { name: 'Sasol', category: 'Energy', logo: 'sasol' },
  telkom: { name: 'Telkom Foundation', category: 'ICT', logo: 'telkom' },
  samsung: { name: 'Samsung', category: 'ICT', logo: 'samsung' },
  naspers: { name: 'Naspers', category: 'ICT', logo: 'naspers' },
  gauteng: { name: 'Gauteng Province', category: 'Public Sector', logo: 'gauteng' },
  dsbd: { name: 'Department of Small Business Development', category: 'Public Sector', logo: 'dsbd' },
  seda: { name: 'SEDA', category: 'Public Sector', logo: 'seda' },
  ewc: { name: 'EWC', category: 'Financial Services', logo: 'ewc' },
  standardBank: { name: 'Standard Bank', category: 'Financial Services', logo: 'standard-bank' },
  ntha: { name: 'NTHA', category: 'Strategic Partners & NGOs', logo: 'ntha' },
  eclb: { name: 'Eastern Cape Liquor Board', category: 'Strategic Partners & NGOs', logo: 'eclb' },
  glf: {
    name: 'Gauteng Liquor Forum',
    category: 'Strategic Partners & NGOs',
    imageSrc: '/logos/gauteng-liquor-forum.png',
  },
  sabcoha: { name: 'SABCOHA', category: 'Strategic Partners & NGOs', logo: 'sabcoha' },
  safa: { name: 'South African Football Association', category: 'Strategic Partners & NGOs', logo: 'safa' },
};

export const experienceGroups: ClientGroup[] = [
  {
    category: 'FMCG',
    columnsClassName: 'grid-cols-2 sm:grid-cols-3 xl:grid-cols-7',
    clients: [clientCatalog['coca-cola'], clientCatalog.distell, clientCatalog.heineken, clientCatalog.tiger, clientCatalog.pg, clientCatalog.sab, clientCatalog.bridgestone],
  },
  {
    category: 'Mining, Energy & ICT',
    columnsClassName: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
    clients: [clientCatalog.anglo, clientCatalog.sasol, clientCatalog.telkom, clientCatalog.samsung, clientCatalog.naspers],
  },
  {
    category: 'Public Sector & Financial Services',
    columnsClassName: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
    clients: [clientCatalog.gauteng, clientCatalog.dsbd, clientCatalog.seda, clientCatalog.ewc, clientCatalog.standardBank],
  },
  {
    category: 'Strategic Partners & NGOs',
    columnsClassName: 'grid-cols-2 sm:grid-cols-3 xl:grid-cols-5',
    clients: [clientCatalog.ntha, clientCatalog.eclb, clientCatalog.glf, clientCatalog.sabcoha, clientCatalog.safa],
  },
];

const experienceBoardRows = [
  {
    labels: [
      { title: 'FMCG', align: 'left' },
      { title: 'AUTOMOTIVE', align: 'right' },
    ],
    clients: [clientCatalog['coca-cola'], clientCatalog.distell, clientCatalog.heineken, clientCatalog.tiger, clientCatalog.pg, clientCatalog.sab, clientCatalog.bridgestone],
    gridClassName: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-7',
  },
  {
    labels: [
      { title: 'MINING', align: 'left' },
      { title: 'ENERGY', align: 'center' },
      { title: 'ICT', align: 'right' },
    ],
    clients: [clientCatalog.anglo, clientCatalog.sasol, clientCatalog.telkom, clientCatalog.samsung],
    gridClassName: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4',
  },
  {
    labels: [
      { title: 'PUBLIC SECTOR', align: 'left' },
      { title: 'FINANCIAL SERVICES', align: 'right' },
    ],
    clients: [clientCatalog.gauteng, clientCatalog.dsbd, clientCatalog.seda, clientCatalog.ewc, clientCatalog.standardBank],
    gridClassName: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  },
  {
    labels: [{ title: 'STRATEGIC PARTNERS & NGOs', align: 'left' }],
    clients: [clientCatalog.ntha, clientCatalog.eclb, clientCatalog.glf, clientCatalog.sabcoha, clientCatalog.safa],
    gridClassName: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  },
] as const;

const getClientLogoSrc = ({ imageSrc, logo }: Client) => imageSrc ?? (logo ? `/logos/${logo}.svg` : undefined);

export const ClientCarousel = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-[#f3f3f3] p-4 shadow-xl md:p-6">
      <div className="space-y-4">
        {experienceBoardRows.map((row, rowIndex) => (
          <div key={rowIndex} className={rowIndex === 0 ? '' : 'border-t border-[#d6d6d6] pt-4'}>
            <div
              className="mb-3 grid gap-4 text-[11px] font-semibold tracking-[0.16em] text-gray-500"
              style={{ gridTemplateColumns: `repeat(${row.labels.length}, minmax(0, 1fr))` }}
            >
              {row.labels.map((label) => (
                <span
                  key={label.title}
                  className={
                    label.align === 'right'
                      ? 'text-right'
                      : label.align === 'center'
                        ? 'text-center'
                        : 'text-left'
                  }
                >
                  {label.title}
                </span>
              ))}
            </div>
            <div className={`grid items-stretch gap-3 ${row.gridClassName}`}>
              {row.clients.map((client) => {
                const src = getClientLogoSrc(client);

                return (
                  <div
                    key={client.name}
                    className="flex min-h-[82px] items-center justify-center bg-white px-3 py-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)]"
                  >
                    {src ? (
                      <img
                        src={src}
                        alt={client.name}
                        className="max-h-12 w-auto max-w-full object-contain sm:max-h-14"
                      />
                    ) : (
                      <div className="px-2 text-center text-sm font-bold text-gray-500">{client.name}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientLogoCard = ({ name, category, logo, imageSrc }: Client) => {
  const src = imageSrc ?? (logo ? `/logos/${logo}.svg` : undefined);

  return (
    <div className="min-h-[140px] rounded-xl border border-white/15 bg-white px-4 py-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
        <div className="flex h-20 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-50 px-3">
          {src ? (
            <img
              src={src}
              alt={name}
              className="max-h-full max-w-full object-contain"
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
