import { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const reviews = [
  {
    id: 1,
    name: "Nithya Sai Narayana",
    date: "28 April 2024",
    review: "Had Ashta Vinayak tour from 26th to 28th April 24. Excellent arrangements in everything. Fantastic",
    rating: 5,
    avatarInitial: "N",
    avatarColor: "bg-purple-700"
  },
  {
    id: 2,
    name: "chandrakant raut",
    date: "14 April 2024",
    review: "Ek dam chhan arrangement and very good management. Must go through this for beautiful experience. The cost is also affordable.",
    rating: 5,
    avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Manjunath Rao",
    date: "10 March 2024",
    review: "TravelEase is arranging all the tours with well trained tour manager. We travelled with TravelEase 4 different places with family members and have enjoyed the...",
    rating: 4,
    avatarInitial: "M",
    avatarColor: "bg-green-700"
  },
  {
    id: 4,
    name: "Priya Patel",
    date: "5 March 2024",
    review: "Our family vacation to Dubai was magical. The visa process was completely hassle-free thanks to their team, and the desert safari was amazing!",
    rating: 5,
    avatarInitial: "P",
    avatarColor: "bg-pink-600"
  },
  {
    id: 5,
    name: "Rahul Sharma",
    date: "20 February 2024",
    review: "The trip was perfectly organized! From the shikara ride in Dal Lake to the snow activities in Gulmarg, everything was seamless.",
    rating: 5,
    avatarInitial: "R",
    avatarColor: "bg-blue-600"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="relative py-24 bg-white overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-start justify-center pt-8 pointer-events-none overflow-hidden opacity-[0.03]">
        <h1 className="text-[12vw] font-black text-black tracking-widest uppercase select-none">TESTIMONIAL</h1>
      </div>

      <div className="relative max-w-7xl mx-auto px-12 sm:px-16 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Customer Reviews</h2>
        </div>

        <div className="relative group">
          {/* Slider Container */}
          <div className="overflow-hidden px-2 py-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="flex-shrink-0" 
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <TestimonialCard {...review} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-8 sm:-left-12 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all z-10"
            aria-label="Previous review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-8 sm:-right-12 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all z-10"
            aria-label="Next review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
