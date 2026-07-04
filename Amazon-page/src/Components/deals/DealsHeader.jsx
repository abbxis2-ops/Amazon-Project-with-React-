import React, { useState } from "react";

const categories = [
  "Lightning deals", "Customers' Most-Loved", "Outlet", "Lowest Price in 365 Days",
  "Beauty", "Fashion", "Home", "Toys & Games", "Electronics", "Devices", "Kitchen",
  "Lightning deals", "Customers' Most-Loved", "Outlet", "Lowest Price in 365 Days"
];

const DealsHeader = () => {
  const [active, setActive] = useState("Lightning deals");

  return (
    <div className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="relative group">
        
        {/* Left Gradient Fade (Sirf desktop par look ke liye) */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>

        {/* Categories Container */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide px-6 py-4 transition-all duration-300 items-center">
          {categories.map((cat, index) => {
            const isActive = active === cat;
            
            return (
              <button
                key={index}
                onClick={() => setActive(cat)}
                className={`
                  relative whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium
                  transition-all duration-300 ease-out border
                  cursor-pointer select-none outline-none
                  ${isActive 
                    ? "bg-gray-900 text-white border-gray-900 shadow-lg shadow-gray-200 scale-105" 
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:bg-gray-50 active:scale-95"}
                `}
              >
                {/* Dot animation for active item */}
                {isActive && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                  </span>
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
      </div>

      {/* Tailwind CSS Custom Utility for Hiding Scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DealsHeader;