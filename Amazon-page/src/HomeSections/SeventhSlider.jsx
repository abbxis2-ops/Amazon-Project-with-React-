import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SeventhSliderData from "./SeventSliderData";

const SeventhSlider = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(6); // Default Desktop ke liye

  // --- 1. Responsiveness: Screen width ke mutabiq items count change hoga ---
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleItems(2);       // Mobile
      else if (width < 1024) setVisibleItems(4);  // Tablet
      else setVisibleItems(6);                    // Desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, SeventhSliderData.length - visibleItems);

  const nextSlide = () => {
    setIndex((prev) => (prev >= maxIndex ? prev : Math.min(prev + visibleItems, maxIndex)));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev <= 0 ? 0 : Math.max(prev - visibleItems, 0)));
  };

  // --- 2. Navigation Logic: Click karne par data detail page par transfer hoga ---
  const handleItemClick = (item) => {
    // '/product/:id' path par navigate aur 'item' object ko state mein bhej rahe hain
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
    <div className="relative bg-white w-[96%] mx-auto shadow-md overflow-hidden py-4">
      
      {/* Section Header */}
      <div className="flex items-center space-x-5 py-2 px-5 mb-2">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">
          Best Sellers in Grocery & Gourmet Food
        </h2>
      </div>

      {/* Left Navigation Button (Boundary check ke sath) */}
      {index > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-md p-3 rounded-r-lg transition-all active:scale-90"
        >
          <svg width="24" height="24">
            <path d="M15 18l-6-6 6-6" stroke="black" strokeWidth="2" fill="none" />
          </svg>
        </button>
      )}

      {/* Slider Viewport */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing px-2"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleItems)}%)`,
          }}
        >
          {SeventhSliderData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="shrink-0 flex justify-center p-4"
              style={{ minWidth: `${100 / visibleItems}%` }}
            >
              {/* Purana transition logic: image par transition aur hover scale */}
              <img
                src={item.image}
                alt=""
                className="max-h-40 md:max-h-48 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer select-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Navigation Button (Boundary check ke sath) */}
      {index < maxIndex && (
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-md p-3 rounded-l-lg transition-all active:scale-90"
        >
          <svg width="24" height="24">
            <path d="M9 6l6 6-6 6" stroke="black" strokeWidth="2" fill="none" />
          </svg>
        </button>
      )}

    </div>
  );
};

export default SeventhSlider;