import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import slide1 from '@/assets/slide-1-team-collaboration.jpg';
import slide2 from '@/assets/slide-2-development-workspace.jpg';
import slide3 from '@/assets/slide-3-strategy-meeting.jpg';
import slide4 from '@/assets/slide-4-ai-automation.jpg';
import slide5 from '@/assets/slide-5-success-celebration.jpg';

const ImageCarousel = () => {
  const slides = [
    {
      image: slide1,
      title: "Expert Team Collaboration",
      description: "Our experienced developers work together to deliver exceptional solutions"
    },
    {
      image: slide2,
      title: "Modern Development Environment",
      description: "Cutting-edge tools and technologies for superior software development"
    },
    {
      image: slide3,
      title: "Strategic Planning",
      description: "Comprehensive planning and consultation for your digital transformation"
    },
    {
      image: slide4,
      title: "AI & Automation Solutions",
      description: "Innovative AI integration and automation to streamline your business"
    },
    {
      image: slide5,
      title: "Proven Success",
      description: "Celebrating successful project deliveries and client satisfaction"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-card">
      {/* Images */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            {/* Content */}
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{slide.title}</h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;