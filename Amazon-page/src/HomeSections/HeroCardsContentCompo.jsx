import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroCardsContentCompo = ({ card }) => {
  const navigate = useNavigate();

  const handleItemClick = (fullItemData) => {
    const identifier = fullItemData.id || fullItemData.label || "product";
    const slug = identifier.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    navigate(`/product/${slug}`, { state: { product: fullItemData } });
  };
  return (
    <div className="flex flex-col bg-white p-4 md:p-5 border border-gray-100 rounded-sm shadow-sm transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1 active:scale-95 cursor-pointer min-h-full group">
      
      <h2 className="text-[11px] md:text-lg lg:text-xl font-bold mb-3 md:mb-5 text-[#111] line-clamp-2 h-8 md:h-14 group-hover:text-blue-700 transition-colors">
        {card.title}
      </h2>

      <div className="grow">
        {card.type === "single" && (
          <div 
            onClick={() => handleItemClick(card)}
            className="relative overflow-hidden h-32 md:h-64 lg:h-75 rounded-sm" >
             <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        )}

        {card.type === "grid" && (
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {card.items.map((item, i) => (
              <div 
                key={item.id || i} 
                onClick={(e) => {
                  e.stopPropagation();
                  handleItemClick(item);
                }}
                className="flex flex-col group/item"
              >
                <div className="h-16 md:h-28 lg:h-36 overflow-hidden bg-gray-50 rounded-sm relative">
                  <img 
                    src={item.img || card.image} 
                    alt={item.label}
                    className="w-full h-full object-contain md:object-cover transform transition-transform duration-500 group-hover/item:scale-110" 
                  />
                </div>
                <p className="text-[8px] md:text-xs font-semibold mt-1 line-clamp-1 group-hover/item:text-orange-700">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
        <p 
          onClick={() => navigate('/deals')}
          className="relative font-medium text-[#007185] hover:text-[#C45500] text-[10px] md:text-xs cursor-pointer transition-colors duration-300 overflow-hidden group/link"
        >
          {card.link}
          <span className="absolute bottom-0 left-0 w-full h-px bg-[#C45500] transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
        </p>
        
        <span className="text-gray-300 group-hover:text-blue-600 transition-colors duration-300 transform translate-x-0 group-hover:translate-x-1">
           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </span>
      </div>
    </div>
  );
};

export default HeroCardsContentCompo;