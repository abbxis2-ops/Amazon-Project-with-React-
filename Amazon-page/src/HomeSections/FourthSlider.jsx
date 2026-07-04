import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FourthSliderData from './FourthSliderData';

const FourthSlider = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(8);

  // --- 1. Responsiveness Logic: Screen width ke hisab se count set hoga ---
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleItems(2);       // Mobile
      else if (width < 1024) setVisibleItems(4);  // Tablet
      else setVisibleItems(8);                    // Desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, FourthSliderData.length - visibleItems);

  const nextSlide = () => {
    setIndex((prev) => (prev >= maxIndex ? prev : prev + visibleItems));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev <= 0 ? 0 : prev - visibleItems));
  };

  // --- 2. Navigation Logic: Item click par data bhej rahi hai ---
  const handleItemClick = (item) => {
    // '/product/:id' par ja raha hai aur pura 'item' state mein bhej raha hai
    navigate(`/product/${item.id}`, { state: { product: item } });
  };

  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    if (diff > 100) prevSlide();
    if (diff < -100) nextSlide();
    isDragging.current = false;
  };

  return (
    <div className="relative bg-white w-[96%] mx-auto shadow-md mt-5 overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center space-x-5 py-5 px-5">
        <h2 className="text-xl font-bold">
          Best Sellers in Home & Kitchen
        </h2>
      </div>

      {/* Left Button (Conditions ke sath) */}
      {index > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md p-3 rounded-r-lg transition-all"
        >
          <svg width="24" height="24">
            <path d="M15 18l-6-6 6-6" stroke="black" strokeWidth="2" fill="none" />
          </svg>
        </button>
      )}

      {/* Slider Container */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * (100 / visibleItems)}%)`,
          }}
        >
          {FourthSliderData.map((item) => (
            <div 
              key={item.id} 
              onClick={() => handleItemClick(item)}
              className="flex justify-center p-4"
              style={{ minWidth: `${100 / visibleItems}%` }}
            >
              {/* Transition Image par alag se lagayi hai jesy pehly thi */}
              <img
                src={item.img}
                className="object-contain hover:scale-105 transition duration-300 cursor-pointer"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Button (Conditions ke sath) */}
      {index < maxIndex && (
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md p-3 rounded-l-lg transition-all"
        >
          <svg width="24" height="24">
            <path d="M9 6l6 6-6 6" stroke="black" strokeWidth="2" fill="none" />
          </svg>
        </button>
      )}

    </div>
  );
};

export default FourthSlider;