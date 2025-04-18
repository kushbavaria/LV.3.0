import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import VanillaTilt from 'vanilla-tilt';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const logoElement = logoRef.current;
    if (logoElement) {
      VanillaTilt.init(logoElement, { max: 15, speed: 400, glare: true, "max-glare": 0.3 });
    }
    return () => {
      if (logoElement && (logoElement as any).vanillaTilt) {
        (logoElement as any).vanillaTilt.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Make the navbar lighter: use bg-opacity-40 for a subtle/light overlay.
  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled ? 'bg-black bg-opacity-40 shadow-lg py-1' : 'bg-black bg-opacity-40 py-2'
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a
            href="/"
            className="text-3xl font-bold text-white flex items-center"
            ref={logoRef}
            data-tilt
            data-tilt-scale="1.05"
            style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px)' }}
          >
            <img
              src="/lovable-uploads/e7793224-a21c-4c3a-b1cc-45d91f5b33bf.png"
              alt="Link Ventures"
              className="h-12 md:h-16 w-auto"
              style={{ transform: 'translateZ(20px)' }}
            />
          </a>

          <button
            onClick={toggleMenu}
            className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-linkred rounded-md"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-linkred rounded-md"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <nav className="flex flex-col items-center space-y-12">
            <a href="#about" className="text-6xl font-bold text-white hover:text-linkred transition-colors" onClick={closeMenu}>About</a>
            <a href="/portfolio" className="text-6xl font-bold text-white hover:text-linkred transition-colors" onClick={closeMenu}>Portfolio</a>
            <a href="/team" className="text-6xl font-bold text-white hover:text-linkred transition-colors" onClick={closeMenu}>Team</a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
