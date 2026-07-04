import { useState, useEffect, useCallback } from "react";
import { HeroCardsContent } from "./HeroCardsContent";
import HeroCardsContentCompo from "./HeroCardsContentCompo";

const bannerImages = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/61PIYhDh2ML._SX3000_.jpg",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61qoc2byR9L._SX3000_.jpg",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/71iYNgkaTeL._SX3000_.jpg",
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/81IXInzu4KL._SX3000_.jpg",
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/61Yx5-N155L._SX3000_.jpg",
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/71PQfppRBML._SX3000_.jpg",
  },
  {
    id: 7,
    image: "https://m.media-amazon.com/images/I/71q-nOXF+cL._SX3000_.jpg",
  },
  {
    id: 8,
    image: "https://m.media-amazon.com/images/I/81KdkgwtIOL._SX3000_.jpg",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % bannerImages.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <div className="relative w-full bg-[#e3e6e6] transition-colors duration-500">
      <div
        className="relative overflow-hidden group/slider"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {bannerImages.map((img, idx) => (
            <div key={img.id} className="min-w-full relative">
              <img
                className={`h-[45vh] sm:h-[60vh] lg:h-[85vh] w-full object-cover 
                transition-transform duration-10000 ease-linear ${ current === idx ? "scale-110" : "scale-100" }`}
                src={img.image}
                alt={`Banner ${idx}`}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-[#e3e6e6] via-transparent to-transparent pointer-events-none" />

        <button
          onClick={prevSlide}
          className="absolute top-[35%] left-2 md:left-6 z-40 text-2xl md:text-4xl bg-white/10 backdrop-blur-md text-gray-800 hover:bg-white/90 p-3 md:p-5 rounded-md shadow-2xl opacity-0 group-hover/slider:opacity-100 transition-all duration-300 active:scale-90 border border-white/20"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-[35%] right-2 md:right-6 z-40 text-2xl md:text-4xl bg-white/10 backdrop-blur-md text-gray-800 hover:bg-white/90 p-3 md:p-5 rounded-md shadow-2xl opacity-0 group-hover/slider:opacity-100 transition-all duration-300 active:scale-90 border border-white/20"
        >
          ❯
        </button>

        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-40 flex gap-2">
          {bannerImages.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${current === i ? "w-8 bg-white shadow-lg" : "w-2 bg-white/50 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-30 px-4 md:px-8 -mt-12 sm:-mt-32 lg:-mt-80 pb-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-375 mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
          {HeroCardsContent.map((card, index) => (
            <HeroCardsContentCompo key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
