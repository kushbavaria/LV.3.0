
import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  title,
  image,
  bio,
  linkedin,
  twitter
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-white">
            <p className="text-sm line-clamp-4">{bio}</p>
            
            <div className="flex mt-3 space-x-2">
              {linkedin && (
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              
              {twitter && (
                <a 
                  href={twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-linkred">{title}</p>
      </div>
    </div>
  );
};

export default TeamCard;
