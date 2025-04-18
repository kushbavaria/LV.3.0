import React, { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

const VIDEO_SEQUENCE = [
  { src: '/videos/LV4.mp4', duration: 15, start: 5 }, 
  { src: '/videos/blitzy.mp4', duration: 15, start: 0 },
  { src: '/videos/mercor.mp4', duration: 15, start: 0 },
];

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = VIDEO_SEQUENCE[currentVideo].start || 0;
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
        timeoutId = setTimeout(() => {
          setCurrentVideo((prev) => (prev + 1) % VIDEO_SEQUENCE.length);
        }, VIDEO_SEQUENCE[currentVideo].duration * 1000);
      }
    };
    playVideo();
    return () => clearTimeout(timeoutId);
  }, [currentVideo]);

  useEffect(() => {
    const handler = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white font-inter">
      <Navbar />
      <video
        key={VIDEO_SEQUENCE[currentVideo].src}
        ref={videoRef}
        autoPlay
        loop={false}
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={VIDEO_SEQUENCE[currentVideo].src} type="video/mp4" />
      </video>
      {/* Overlay for darkening the video */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">
          Empowering Visionary Founders
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 text-gray-200 animate-fade-in-up delay-100">
          Link Ventures invests in bold entrepreneurs building the future of technology and society.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <a href="/portfolio" className="px-8 py-3 rounded-full bg-linkred text-white font-semibold text-lg shadow-lg hover:bg-red-700 transition-colors">
            View Portfolio
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full bg-white text-linkred font-semibold text-lg shadow-lg hover:bg-gray-200 transition-colors">
            Pitch Your Startup
          </a>
        </div>
      </div>
    </div>
  );
}
