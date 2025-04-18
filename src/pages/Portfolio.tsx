// /Users/kushbavaria/Desktop/visual-venture-vista/src/pages/Portfolio.tsx
import React from 'react';
import Navbar from '@/components/Navbar'; // Assuming Navbar is needed on this page too

// Portfolio companies with logos
const portfolioItems = [
  { id: 1, name: 'Mercor', logoUrl: '/logos/mercor.png', url: 'https://www.mercor.com', className: '' },
  { id: 2, name: 'Blitzy', logoUrl: '/logos/Blitzy.svg', url: 'https://www.blitzy.com', className: 'filter invert-250' },
  { id: 3, name: 'Liquid AI', logoUrl: '/logos/Liquid-AI.png', url: 'https://liquid.ai', className: '' },
  { id: 4, name: 'Themis AI', logoUrl: '/logos/ThemisAI.svg', url: 'https://themis.ai', className: 'filter invert' },
  { id: 5, name: 'Aaru', logoUrl: '/logos/aaru.png', url: 'https://www.linkventures.com/portfolio/aaru', className: '' },
  { id: 6, name: 'Anomaly', logoUrl: '/logos/Anomaly.png', url: 'https://www.linkventures.com/portfolio/anomaly', className: 'filter invert' },
  { id: 7, name: 'AnyQuestion', logoUrl: '/logos/anyquestion.png', url: 'https://www.linkventures.com/portfolio/anyquestion', className: 'filter invert' },
  { id: 8, name: 'Autotegrity', logoUrl: '/logos/autotegrity.png', url: 'https://www.linkventures.com/portfolio/autotegrity', className: '' },
  { id: 9, name: 'C10 Labs', logoUrl: '/logos/c10labs.png', url: 'https://www.linkventures.com/portfolio/c10-labs', className: '' },
  { id: 10, name: 'Canela Media', logoUrl: '/logos/canela.png', url: 'https://www.linkventures.com/portfolio/canela-media', className: 'filter invert' },
  { id: 11, name: 'Caribou', logoUrl: '/logos/Caribou.png', url: 'https://www.linkventures.com/portfolio/caribou', className: '' },
  { id: 12, name: 'Catalan.ai', logoUrl: '/logos/Catalan.svg', url: 'https://www.linkventures.com/portfolio/catalan-ai', className: '' },
  { id: 13, name: 'Charm.io', logoUrl: '/logos/charmio.png', url: 'https://www.linkventures.com/portfolio/charm-io', className: '' },
  { id: 14, name: 'Context', logoUrl: '/logos/Context.png', url: 'https://www.linkventures.com/portfolio/context', className: '' },
  { id: 15, name: 'Creatively', logoUrl: '/logos/creatively.png', url: 'https://www.linkventures.com/portfolio/creatively', className: 'filter invert' },
  { id: 16, name: 'Diddo', logoUrl: '/logos/diddo.png', url: 'https://www.linkventures.com/portfolio/diddo', className: '' },
  { id: 17, name: 'Dono', logoUrl: '/logos/dono.png', url: 'https://www.linkventures.com/portfolio/dono', className: '' },
  { id: 18, name: 'DYLE', logoUrl: '/logos/DYLE.png', url: 'https://www.linkventures.com/portfolio/dyle', className: '' },
  { id: 19, name: 'Enlaye', logoUrl: '/logos/Enlaye.png', url: 'https://www.linkventures.com/portfolio/enlaye', className: '' },
  { id: 20, name: 'Ever', logoUrl: '/logos/ever.png', url: 'https://www.linkventures.com/portfolio/ever', className: '' },
  { id: 21, name: 'Focal', logoUrl: '/logos/Focal.png', url: 'https://www.linkventures.com/portfolio/focal', className: 'filter invert' },
  { id: 22, name: 'Further', logoUrl: '/logos/Further.png', url: 'https://www.linkventures.com/portfolio/further', className: 'filter invert' },
  { id: 23, name: 'Healthcare.com', logoUrl: '/logos/healthcarecom.png', url: 'https://www.linkventures.com/portfolio/healthcare-com', className: '' },
  { id: 24, name: 'Jobcase', logoUrl: '/logos/jobcase.png', url: 'https://www.linkventures.com/portfolio/jobcase', className: '' },
  { id: 25, name: 'Lambda', logoUrl: '/logos/Lambda.png', url: 'https://www.linkventures.com/portfolio/lambda', className: '' },
  { id: 26, name: 'LeadKarma', logoUrl: '/logos/LeadKarma.png', url: 'https://www.linkventures.com/portfolio/leadkarma', className: 'filter invert' },
  { id: 28, name: 'Meticulate', logoUrl: '/logos/meticulate.png', url: 'https://www.linkventures.com/portfolio/meticulate', className: '' },
  { id: 29, name: 'MobileMonkey', logoUrl: '/logos/mobilemonkey.png', url: 'https://www.linkventures.com/portfolio/mobilemonkey', className: '' },
  { id: 30, name: 'NSKnox', logoUrl: '/logos/nsknox.png', url: 'https://www.linkventures.com/portfolio/nsknox', className: 'filter invert' },
  { id: 31, name: 'OwnUp', logoUrl: '/logos/Ownup.png', url: 'https://www.linkventures.com/portfolio/ownup', className: 'filter invert' },
  { id: 32, name: 'Parita', logoUrl: '/logos/parita.png', url: 'https://www.linkventures.com/portfolio/parita', className: 'filter invert' },
  { id: 33, name: 'PayZen', logoUrl: '/logos/PayZen.png', url: 'https://www.linkventures.com/portfolio/payzen', className: 'filter invert' },
  { id: 34, name: 'SmarterTravel', logoUrl: '/logos/SmarterTravel.png', url: 'https://www.linkventures.com/portfolio/smartertravel', className: '' },
  { id: 35, name: 'Vestmark', logoUrl: '/logos/vestmark.png', url: 'https://www.linkventures.com/portfolio/vestmark', className: '' },
  { id: 36, name: 'WaypointConverts', logoUrl: '/logos/WaypointConverts.png', url: 'https://www.linkventures.com/portfolio/waypointconverts', className: '' },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16 pb-16 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16"> 
          {portfolioItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center aspect-square transition-all duration-300 cursor-pointer group"
            >
              <div className="w-64 h-64 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform bg-black p-4 rounded-lg">
                <img 
                  src={item.logoUrl} 
                  alt="" 
                  className={`w-full h-full object-contain ${item.className}`} 
                />
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
