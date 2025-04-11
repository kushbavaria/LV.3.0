import React, { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

export default function Index() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const sections = [
    {
      video: '/videos/mercor.mp4',
      title: 'Mercor',
      subtitle: 'We get people jobs',
      startTime: 30
    },
    {
      video: '/videos/blitzy.mp4',
      title: 'Blitzy',
      subtitle: 'AI-Powered Autonomous Software Development Platform',
      startTime: 0,
      endTime: 20
    },
    {
      video: '/videos/xoulAI.mp4',
      title: 'Xoul.AI',
      subtitle: 'The future of autonomous AI agents',
      startTime: 0,
      endTime: 30
    },
    {
      video: '/videos/Mecado.mp4',
      title: 'Mecado',
      subtitle: 'Putting analysis on autopilot'
    }
  ];

  useEffect(() => {
    const firstVideo = videoRefs.current[0];
    if (firstVideo) {
      firstVideo.currentTime = 30;
      firstVideo.play();
    }
  }, []);

  useEffect(() => {
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      const handleTimeUpdate = () => {
        if (currentVideo.currentTime >= (sections[activeIndex]?.endTime || Infinity)) {
          currentVideo.pause();
          currentVideo.currentTime = sections[activeIndex]?.startTime || 0;
        }
      };
      
      currentVideo.addEventListener('timeupdate', handleTimeUpdate);
      currentVideo.currentTime = sections[activeIndex]?.startTime || 0;
      currentVideo.play();
      
      return () => {
        currentVideo.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [activeIndex]);

  const handleScroll = () => {
    if (scrollContainer.current) {
      const scrollLeft = scrollContainer.current.scrollLeft;
      const width = scrollContainer.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSection = (index: number) => {
    setActiveIndex(index);
    scrollContainer.current?.scrollTo({
      left: window.innerWidth * index,
      behavior: 'smooth'
    });
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white font-inter">
      <Navbar />
      
      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainer}
        className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none' }}
      >
        {sections.map((section, index) => (
          <section
            key={index}
            className="flex-shrink-0 w-screen h-full snap-start relative"
          >
            <video
              ref={el => videoRefs.current[index] = el}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={section.video} type="video/mp4" />
            </video>
            
            {/* Bottom Left Text */}
            <div className="absolute bottom-16 left-8 z-10 max-w-md">
              {section.title === 'Blitzy' ? (
                <a href="https://www.blitzy.com" target="_blank" rel="noopener noreferrer" className="hover:no-underline transition-transform hover:scale-105">
                  <h1 className="text-2xl md:text-3xl font-bold mb-1">{section.title}</h1>
                  <p className="text-lg md:text-xl opacity-90">{section.subtitle}</p>
                </a>
              ) : section.title === 'Xoul.AI' ? (
                <a href="https://xoul.ai" target="_blank" rel="noopener noreferrer" className="hover:no-underline transition-transform hover:scale-105">
                  <h1 className="text-2xl md:text-3xl font-bold mb-1">{section.title}</h1>
                  <p className="text-lg md:text-xl opacity-90">{section.subtitle}</p>
                </a>
              ) : (
                <a href="https://www.mercor.com" target="_blank" rel="noopener noreferrer" className="hover:no-underline transition-transform hover:scale-105">
                  <h1 className="text-2xl md:text-3xl font-bold mb-1">{section.title}</h1>
                  <p className="text-lg md:text-xl opacity-90">{section.subtitle}</p>
                </a>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom Right Dot Navigation */}
      <div className="fixed bottom-10 right-8 z-10 flex flex-col space-y-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-colors ${ 
              activeIndex === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
