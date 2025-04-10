
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/30fea058-f454-4f33-8b6d-086e072651ac.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/lovable-uploads/e7793224-a21c-4c3a-b1cc-45d91f5b33bf.png" 
            alt="Link Ventures" 
            className="w-3/4 md:w-1/2 lg:w-2/5 animate-fade-in"
          />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-linkred transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
