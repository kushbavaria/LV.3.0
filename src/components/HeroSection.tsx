
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/b3282603-237c-4521-bf11-591b47efd8e9.png')",
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
            className="w-3/4 md:w-1/2 lg:w-2/5 mb-12 animate-fade-in"
          />
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-light mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Connecting Visionaries with Opportunity
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            We partner with exceptional founders building transformative companies 
            that redefine industries and shape the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a 
              href="#portfolio" 
              className="bg-linkred text-white px-8 py-3 rounded-md flex items-center justify-center hover:bg-red-700 transition-colors"
            >
              Our Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#contact" 
              className="bg-transparent text-white border border-white px-8 py-3 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
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
