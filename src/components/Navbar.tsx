
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-black/90 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/e7793224-a21c-4c3a-b1cc-45d91f5b33bf.png" 
              alt="Link Ventures" 
              className="h-8 md:h-10"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-linkred font-medium transition-colors">About</a>
            <a href="#portfolio" className="text-white hover:text-linkred font-medium transition-colors">Portfolio</a>
            <a href="#focus" className="text-white hover:text-linkred font-medium transition-colors">Investment Focus</a>
            <a href="#team" className="text-white hover:text-linkred font-medium transition-colors">Team</a>
            <a href="#contact" className="bg-linkred text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
              Contact Us
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a 
              href="#about" 
              className="text-white hover:text-linkred font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#portfolio" 
              className="text-white hover:text-linkred font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#focus" 
              className="text-white hover:text-linkred font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Investment Focus
            </a>
            <a 
              href="#team" 
              className="text-white hover:text-linkred font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </a>
            <a 
              href="#contact" 
              className="bg-linkred text-white px-4 py-2 rounded inline-block hover:bg-red-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
