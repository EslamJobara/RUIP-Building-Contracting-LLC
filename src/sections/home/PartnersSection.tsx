import React, { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import LazyImage from '../../components/LazyImage';

const partners = [
  {
    name: "ADNOC",
    logo: "/logo1.png"
  },
  {
    name: "Etihad Rail",
    logo: "/logo2.png"
  },
  {
    name: "Dubai Municipality",
    logo: "/logo3.png"
  },
  {
    name: "DEWA",
    logo: "/logo4.png"
  },
  {
    name: "DEWA",
    logo: "/logo5.png"
  },
  {
    name: "DEWA",
    logo: "/logo6.png"
  },
  {
    name: "DEWA",
    logo: "/logo7-2.png"
  },
  {
    name: "Masdar",
    logo: "/logo8.png"
  }
];

const PartnersSection = () => {
  const partnersRef = useScrollReveal();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(hover: none)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Clone partners array multiple times for infinite scroll effect
  const extendedPartners = [...partners, ...partners, ...partners, ...partners];

  // Auto scroll animation
  useEffect(() => {
    if (!autoScrollEnabled || !scrollContainerRef.current) return;

    let animationFrameId: number;
    let lastTimestamp = 0;
    const speed = isMobile ? 0.05 : 0.15;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (scrollContainerRef.current && autoScrollEnabled) {
        scrollContainerRef.current.scrollLeft += speed * delta;

        if (scrollContainerRef.current.scrollLeft >= scrollContainerRef.current.scrollWidth / 2) {
          scrollContainerRef.current.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [autoScrollEnabled, isMobile]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current || isMobile) return;
    setIsDragging(true);
    setAutoScrollEnabled(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current || isMobile) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    if (isMobile) return;
    setIsDragging(false);
    setTimeout(() => setAutoScrollEnabled(true), 1000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setAutoScrollEnabled(false);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setAutoScrollEnabled(true), 500);
  };

  return (
    <section className="pt-4 pb-4">
      <div ref={partnersRef} className="max-w-7xl mx-auto px-4 scroll-reveal">
        <div 
          ref={scrollContainerRef}
          className={`partner-scroll-container ${!isMobile ? 'touch-feedback' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className={`partner-scroll-content ${!isMobile && isDragging ? 'cursor-grabbing' : !isMobile ? 'cursor-grab' : ''}`}
            style={{ 
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          >
            {extendedPartners.map((partner, index) => (
              <div
  key={`${partner.name}-${index}`}
  className="flex-shrink-0 w-32 h-20 mx-4 bg-white p-2 rounded-lg shadow-sm flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
>
  <LazyImage
    src={partner.logo}
    alt={partner.name}
    className="w-full h-full object-contain"
  />
</div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;