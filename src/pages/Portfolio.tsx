// /Users/kushbavaria/Desktop/visual-venture-vista/src/pages/Portfolio.tsx
import React from 'react';
import Navbar from '@/components/Navbar'; // Assuming Navbar is needed on this page too

// Placeholder data for portfolio companies
const portfolioItems = [
  { id: 1, name: 'Innovatech', logoUrl: '/placeholder-logo.svg', description: 'AI-driven solutions' },
  { id: 2, name: 'QuantumLeap', logoUrl: '/placeholder-logo.svg', description: 'Next-gen computing' },
  { id: 3, name: 'BioSynth', logoUrl: '/placeholder-logo.svg', description: 'Biotech advancements' },
  { id: 4, name: 'AeroDynamics', logoUrl: '/placeholder-logo.svg', description: 'Aerospace tech' },
  { id: 5, name: 'CyberSecure', logoUrl: '/placeholder-logo.svg', description: 'Cybersecurity platform' },
  { id: 6, name: 'FinFlow', logoUrl: '/placeholder-logo.svg', description: 'Fintech innovation' },
  { id: 7, name: 'HealthHub', logoUrl: '/placeholder-logo.svg', description: 'Digital health solutions' },
  { id: 8, name: 'RoboWorks', logoUrl: '/placeholder-logo.svg', description: 'Advanced robotics' },
  // Add more placeholders as needed
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16 pb-16 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16"> 
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center aspect-square transition-all duration-300 cursor-pointer group"
            >
              <div className="w-32 h-32 bg-gray-700 rounded-full mb-5 flex items-center justify-center group-hover:scale-110 transition-transform"> 
                 {/* <img src={item.logoUrl} alt={`${item.name} logo`} className="max-w-full max-h-full"/> */}
                 <span className="text-sm text-gray-400">Logo</span>
              </div>
              <h3 className="text-xl font-medium text-center">{item.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
