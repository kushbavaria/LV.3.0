
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FocusCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  examples: string[];
}

const FocusCard: React.FC<FocusCardProps> = ({
  title,
  description,
  icon,
  examples
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border-t-4 border-linkred">
      <div className="text-linkred mb-4">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Example Investments:</h4>
        <ul className="space-y-1">
          {examples.map((example, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-linkred mr-2"></span>
              {example}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FocusCard;
