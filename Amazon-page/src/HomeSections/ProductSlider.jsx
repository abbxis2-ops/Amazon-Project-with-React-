import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Professional Icons
import sliderData from "./sliderData";

const ProductSlider = ({
  title = "Related to items you've viewed",
  data = [sliderData],
}) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isHovered, setIsHovered] = useState(false);

  const updateCount = useCallback(() => {
    const w = window.innerWidth;
    if (w < 480) setVisibleCount(2.2);
    else if (w < 768) setVisibleCount(3.4);
    else if (w < 1024) setVisibleCount(4.5);
    else if (w < 1280) setVisibleCount(6);
    else setVisibleCount(7);
  }, []);

  useEffect(() => {
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, [updateCount]);

  const maxIndex = Math.max(0, data.length - Math.floor(visibleCount));

  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + Math.floor(visibleCount), maxIndex));
  };

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - Math.floor(visibleCount), 0));
  };

  const handleItemClick = (item) => {
    navigate(`/product/${item.id}`, { state: { product: item } });
  };

  const startX = useRef(0);
  const isDragging = useRef(false);

  return (
    <div
      className="relative bg-white w-[96%] mx-auto py-8 mb-5 px-4 md:px-8 border-b border-gray-100 group/main select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-end justify-between mb-6 px-2">
        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-bold text-[#111] tracking-tight">
            {title}
          </h2>
          <div className="h-1 w-12 bg-orange-500 rounded-full scale-x-0 group-hover/main:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
        <button className="text-sm font-semibold text-blue-600 hover:text-orange-600 transition-colors flex items-center gap-1 group/btn">
          Explore all
          <ChevronRight
            size={14}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>

      {index > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-4 top-[55%] -translate-y-1/2 z-30 bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl p-3 md:p-4 rounded-full transition-all duration-300 hover:bg-white hover:scale-110 active:scale-90 opacity-0 group-hover/main:opacity-100 hidden md:flex"
        >
          <ChevronLeft size={28} className="text-gray-800" strokeWidth={2.5} />
        </button>
      )}

      {index < maxIndex && (
        <button
          onClick={nextSlide}
          className="absolute right-4 top-[55%] -translate-y-1/2 z-30 bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl p-3 md:p-4 rounded-full transition-all duration-300 hover:bg-white hover:scale-110 active:scale-90 opacity-0 group-hover/main:opacity-100 hidden md:flex"
        >
          <ChevronRight size={28} className="text-gray-800" strokeWidth={2.5} />
        </button>
      )}

      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing px-1"
        onMouseDown={(e) => {
          isDragging.current = true;
          startX.current = e.clientX;
        }}
        onMouseUp={(e) => {
          if (!isDragging.current) return;
          const diff = e.clientX - startX.current;
          if (diff > 100) prevSlide();
          if (diff < -100) nextSlide();
          isDragging.current = false;
        }}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="shrink-0 px-2 md:px-3 py-4 group/item"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="flex flex-col bg-white rounded-xl transition-all duration-500 hover:-translate-y-2 active:scale-95">
                <div className="relative aspect-square w-full bg-[#f8f9fa] rounded-xl overflow-hidden flex items-center justify-center p-6 border border-transparent group-hover/item:border-gray-100 group-hover/item:shadow-lg transition-all duration-500">
                  <img
                    src={item.image || item.img}
                    className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover/item:scale-110"
                    alt={item.title}
                  />
                  {item.discount && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm shadow-sm">
                      -{item.discount}%
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 mx-auto w-32 h-0.5 bg-gray-100 rounded-full overflow-hidden hidden md:block">
        <div
          className="h-full bg-gray-800 transition-all duration-500 ease-out"
          style={{
            width: `${((index + visibleCount) / data.length) * 100}%`,
            marginLeft: `${(index / data.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProductSlider;
