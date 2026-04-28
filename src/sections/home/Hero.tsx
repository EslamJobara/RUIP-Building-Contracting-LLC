import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: "/hero1.jpg",
    headline: "Building Excellence, One Project at a Time",
    subtext: "Your trusted partner in construction and engineering",
  },
  {
    image: "/hero2.jpg",
    headline: "Innovative Solutions for Modern Infrastructure",
    subtext: "From steel structures to renewable energy projects",
  },
  {
    image: "/hero3.jpg",
    headline: "Shaping the Future with Sustainable Construction",
    subtext: "Committed to quality, safety, and sustainability",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set<number>());
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });
  const [isSwiping, setIsSwiping] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<number>();
  const swipeThreshold = 50;
  const verticalThreshold = 30;

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const promises = slides.map((slide, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = () => {
            setLoadedImages((prev) => new Set(prev).add(index));
            resolve();
          };
        });
      });

      await Promise.all(promises);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  // Start or restart auto-play
  const startAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current); // Clear existing interval
    }
    autoPlayRef.current = window.setInterval(() => {
      if (!isSwiping && !isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }, 5000);
  };

  // Auto-advance slides
  useEffect(() => {
    startAutoPlay(); // Start auto-play on mount
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current); // Cleanup on unmount
      }
    };
  }, [isSwiping, isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isTransitioning) return;

    setIsSwiping(true);
    const touch = e.touches[0];
    setTouchStart({
      x: touch.clientX,
      y: touch.clientY,
    });
    setTouchEnd({
      x: touch.clientX,
      y: touch.clientY,
    });

    // Reset auto-scroll timer on touch
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping || isTransitioning) return;

    const touch = e.touches[0];
    setTouchEnd({
      x: touch.clientX,
      y: touch.clientY,
    });

    const deltaX = touchStart.x - touch.clientX;
    const deltaY = Math.abs(touchStart.y - touch.clientY);

    // Allow vertical scrolling if the movement is primarily vertical
    if (deltaY > verticalThreshold && deltaY > Math.abs(deltaX)) {
      setIsSwiping(false);
      return; // Exit early to allow vertical scrolling
    }

    // Prevent default behavior only for horizontal swipes
    if (Math.abs(deltaX) > verticalThreshold) {
      e.preventDefault(); // Prevent default scroll behavior for horizontal swipes
    }
  };

  const handleTouchEnd = () => {
    if (!isSwiping || isTransitioning) return;

    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = Math.abs(touchStart.y - touchEnd.y);

    if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > swipeThreshold) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => {
        if (deltaX > 0) {
          return (prev + 1) % slides.length; // Swipe right to left
        } else {
          return (prev - 1 + slides.length) % slides.length; // Swipe left to right
        }
      });
      setTimeout(() => setIsTransitioning(false), 500);
    }

    setIsSwiping(false);

    // Restart auto-scroll timer after interaction
    startAutoPlay();
  };

  const nextSlide = () => {
    if (isTransitioning) return;

    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);

    // Restart auto-scroll timer after manual navigation
    startAutoPlay();
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);

    // Restart auto-scroll timer after manual navigation
    startAutoPlay();
  };

  return (
    <div
      className="relative h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-[#104484] border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-500 ease-in-out"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 1 : 0,
            }}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
                loadedImages.has(index) ? 'blur-0' : 'blur-lg'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative h-full flex items-center justify-center text-center" aria-live="polite">
              <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                  {slide.headline}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
                  {slide.subtext}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/services"
                    className="group bg-[#104484] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:bg-[#104484]/90 hover:scale-105 active:scale-95"
                  >
                    View Our Services
                  </Link>
                  <Link
                    to="/contact"
                    className="group bg-white text-[#104484] px-8 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="hidden md:block">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
            }`}
            style={{ minWidth: '12px', minHeight: '12px' }}
            disabled={isTransitioning}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;