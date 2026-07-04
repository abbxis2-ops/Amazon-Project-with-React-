import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Sparkles, ShoppingBag } from "lucide-react"; 
import { historyData } from "./HistoryData";

const HistoryUpdate = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < historyData.length - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product: product } });
  };

  return (
    <div className="mt-5 bg-linear-to-b from-white to-[#fcfcfd] border-t border-gray-100 overflow-hidden select-none pb-12">
      <div className="max-w-375 mx-auto px-6 md:px-12 py-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative">
          <div className="space-y-3 relative z-10">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-[10px] tracking-[0.2em] uppercase">
              <Sparkles size={14} className="animate-pulse" />
              <span>Tailored for you</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-light text-gray-900 leading-tight tracking-tight italic">
               Inspired by your <span className="font-bold not-italic">Browsing History</span>
            </h3>
            <div className="h-px w-24 bg-linear-to-r from-amber-500 to-transparent" />
          </div>
          
          <div className="flex items-center gap-6 pb-2">
            <button className="text-[11px] uppercase tracking-widest font-bold text-gray-400 hover:text-amber-600 transition-colors duration-500">
              Personalize
            </button>
            <div className="flex items-center gap-3">
               <span className="text-[10px] font-bold text-gray-300">PAGE</span>
               <span className="text-xl font-light text-gray-900">{page + 1}</span>
               <span className="text-gray-300">/</span>
               <span className="text-sm font-medium text-gray-400">{historyData.length}</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-40 pointer-events-none -px-4">
            <button
              onClick={prevPage}
              disabled={page === 0}
              className={`pointer-events-auto bg-white/80 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 rounded-full transition-all duration-700 hover:bg-gray-900 hover:text-white active:scale-90 flex items-center justify-center ${
                page === 0 ? "opacity-0 invisible -translate-x-5" : "opacity-0 group-hover:opacity-100 translate-x-0"
              }`}
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>

            <button
              onClick={nextPage}
              disabled={page === historyData.length - 1}
              className={`pointer-events-auto bg-white/80 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 rounded-full transition-all duration-700 hover:bg-gray-900 hover:text-white active:scale-90 flex items-center justify-center ${
                page === historyData.length - 1 ? "opacity-0 invisible translate-x-5" : "opacity-0 group-hover:opacity-100 translate-x-0"
              }`}
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>

          <div 
            key={page} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
          >
            {historyData[page].products.map((item) => {
              const priceParts = item.price?.toString().split('.') || ["0", "00"];
              
              return (
                <div 
                  key={item.id} 
                  onClick={() => handleProductClick(item)}
                  className="group/card relative flex flex-col cursor-pointer transition-all duration-700 hover:-translate-y-3"
                >
                  <div className="relative aspect-4/5 w-full flex items-center justify-center mb-6 overflow-hidden bg-white rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.02)] group-hover/card:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-700 border border-gray-50">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="max-h-[70%] max-w-[70%] object-contain transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/card:scale-110"
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 bg-linear-to-t from-black/5 to-transparent">
                        <div className="w-full bg-gray-900 text-white text-[10px] font-bold tracking-widest uppercase py-3 rounded-xl flex items-center justify-center gap-2 shadow-xl">
                            <ShoppingBag size={12} />
                            View Details
                        </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 px-1">
                    <h4 className="text-[13px] text-gray-500 font-medium line-clamp-1 group-hover/card:text-gray-900 transition-colors uppercase tracking-tight">
                      {item.brand || "Selection"}
                    </h4>
                    <p className="text-sm text-gray-900 font-semibold line-clamp-2 leading-snug min-h-10">
                      {item.title}
                    </p>

                    <div className="flex items-center gap-1.5 pt-1">
                      <div className="flex text-amber-500 scale-75 -ml-2">
                        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                      </div>
                      <span className="text-[9px] font-bold text-gray-400 tracking-tighter">(4.9)</span>
                    </div>

                    <div className="flex items-baseline gap-0.5 pt-2">
                      <span className="text-[10px] font-bold text-amber-600 align-top mt-1">$</span>
                      <span className="text-2xl font-light text-gray-900 tracking-tighter">
                        {priceParts[0]}
                      </span>
                      <span className="text-[11px] font-bold text-gray-900 align-top">
                        .{priceParts[1] || "00"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex justify-center items-center gap-3">
           {historyData.map((_, i) => (
             <button 
                key={i}
                onClick={() => setPage(i)}
                className={`h-1 rounded-full transition-all duration-1000 ${
                    page === i ? "w-12 bg-gray-900 shadow-lg" : "w-3 bg-gray-200 hover:bg-gray-400"
                }`}
             />
           ))}
        </div>

      </div>
    </div>
  );
};

export default HistoryUpdate;