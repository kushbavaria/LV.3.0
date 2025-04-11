
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  name: string;
  logoUrl: string;
  description: string;
  industry: string;
  url: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  name,
  logoUrl,
  description,
  industry,
  url
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group h-full flex flex-col">
      <div className="h-16 flex items-center justify-center mb-6 bg-gray-900 p-4 rounded-md">
        <img src={logoUrl} alt={name} className="max-h-full max-w-full object-contain" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-linkred transition-colors">{name}</h3>
      
      <div className="mb-3">
        <span className="inline-block bg-gray-700 text-gray-200 px-2 py-1 text-xs rounded-full">
          {industry}
        </span>
      </div>
      
      <p className="text-gray-300 text-sm mb-6 flex-grow line-clamp-3">{description}</p>
      
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-linkred hover:text-red-400 transition-colors text-sm font-medium mt-auto"
      >
        Visit Website
        <ExternalLink className="ml-1 h-3 w-3" />
      </a>
    </div>
  );
};

export default PortfolioCard;
