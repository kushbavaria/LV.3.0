
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
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
      <div className="h-16 flex items-center justify-center mb-4">
        <img src={logoUrl} alt={name} className="max-h-full max-w-full object-contain" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-linkred transition-colors">{name}</h3>
      
      <div className="mb-3">
        <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full">
          {industry}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
      
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-linkred hover:text-red-700 transition-colors text-sm font-medium"
      >
        Visit Website
        <ExternalLink className="ml-1 h-3 w-3" />
      </a>
    </div>
  );
};

export default PortfolioCard;
