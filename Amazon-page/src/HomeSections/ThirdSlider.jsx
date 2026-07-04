import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThirdSliderData from "./ThirdSliderData";

const ThirdSlider = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  // --- 1. Responsiveness Logic: Screen size ke mutabiq items adjust honge ---
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(2);      // Mobile
      else if (width < 1024) setVisibleCount(4); // Tablet
      else setVisibleCount(6);                   // Desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, ThirdSliderData.length - visibleCount);

  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + visibleCount, maxIndex));
  };

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  // --- 2. Navigation Logic: Click karne par item ka poora data transfer hoga ---
  const handleItemClick = (item) => {
    // '/product/:id' path par navigate aur state mein data bhej rahy hain
    navigate(`/product/${item.id}`, { state: { product: item } });
  };

  const startX = useRef(0);
  const isDragging = useRef(false);

  return (
    <div className="relative bg-white w-[96%] mx-auto shadow-sm border border-gray-200 mt-5 overflow-hidden py-4">
      
      {/* Header Section */}
      <div className="flex items-center px-5 mb-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">
          Best Sellers in Grocery & Gourmet Food
        </h2>
      </div>

      {/* Left Navigation Button */}
      {index > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-0 top-[55%] -translate-y-1/2 z-20 bg-white/90 hover:bg-white border border-gray-300 shadow-md p-2 md:p-4 rounded-r-md transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-black font-bold">chevron_left</span>
        </button>
      )}

      {/* Right Navigation Button */}
      {index < maxIndex && (
        <button
          onClick={nextSlide}
          className="absolute right-0 top-[55%] -translate-y-1/2 z-20 bg-white/90 hover:bg-white border border-gray-300 shadow-md p-2 md:p-3 rounded-l-md transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-black font-bold">chevron_right</span>
        </button>
      )}

      {/* Main Slider Content */}
      <div
        className="overflow-hidden px-8 cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => { isDragging.current = true; startX.current = e.clientX; }}
        onMouseUp={(e) => {
          if (!isDragging.current) return;
          const diff = e.clientX - startX.current;
          if (diff > 80) prevSlide();
          if (diff < -80) nextSlide();
          isDragging.current = false;
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCount)}%)`,
          }}
        >
          {ThirdSliderData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="shrink-0 flex flex-col items-center justify-center p-3 group select-none"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="h-32 md:h-44 lg:h-52 w-full flex items-center justify-center overflow-hidden">
                <img
                  src={item.img}
                  alt="grocery product"
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 cursor-pointer p-1"
                />
              </div>
              
              {/* Optional labels/prices logic */}
              {item.name && <p className="text-[10px] md:text-xs font-semibold mt-2 line-clamp-1">{item.name}</p>}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ThirdSlider;