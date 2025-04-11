// /Users/kushbavaria/Desktop/visual-venture-vista/src/pages/Portfolio.tsx
import React from 'react';
import Navbar from '@/components/Navbar'; // Assuming Navbar is needed on this page too

// Placeholder data for portfolio companies
const portfolioItems = [
  { id: 1, name: 'Mercor', logoUrl: '/logos/mercor.png', url: 'https://www.mercor.com', className: '' },
  { id: 2, name: 'Blitzy', logoUrl: '/logos/Blitzy.jpg', url: 'https://www.blitzy.com', className: 'brightness-0 invert' },
  { id: 3, name: 'Liquid AI', logoUrl: '/logos/Liquid-AI.png', url: 'https://liquid.ai', className: 'brightness-0 invert' },
  { id: 4, name: 'Themis AI', logoUrl: '/logos/themisAI.png', url: 'https://themis.ai', className: 'brightness-0 invert' },
  { id: 5, name: 'Aaru', logoUrl: '', url: 'https://www.linkventures.com/portfolio/aaru', className: '' },
  { id: 6, name: 'Anomaly', logoUrl: '', url: 'https://www.linkventures.com/portfolio/anomaly', className: '' },
  { id: 7, name: 'AnyQuestion', logoUrl: '', url: 'https://www.linkventures.com/portfolio/anyquestion', className: '' },
  { id: 8, name: 'Autotegrity', logoUrl: '', url: 'https://www.linkventures.com/portfolio/autotegrity', className: '' },
  { id: 9, name: 'C10 Labs', logoUrl: '', url: 'https://www.linkventures.com/portfolio/c10-labs', className: '' },
  { id: 10, name: 'Canela Media', logoUrl: '', url: 'https://www.linkventures.com/portfolio/canela-media', className: '' },
  { id: 11, name: 'Caribou', logoUrl: '', url: 'https://www.linkventures.com/portfolio/caribou', className: '' },
  { id: 12, name: 'Catalan.ai', logoUrl: '', url: 'https://www.linkventures.com/portfolio/catalan-ai', className: '' },
  { id: 13, name: 'Charm.io', logoUrl: '', url: 'https://www.linkventures.com/portfolio/charm-io', className: '' },
  // Add remaining companies...
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
