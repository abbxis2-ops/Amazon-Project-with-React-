import React from "react";
import { useNavigate } from "react-router-dom";

const FourthCardCompo = ({ card }) => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    // Navigate with ID and pass the full item object in state
    // Isse detail page ko data dobara fetch nahi karna parre ga
    navigate(`/product/${item.id}`, { state: { product: item } });
  };

  return (
    <div className="flex flex-col bg-white p-2 md:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-full border border-gray-100">
      
      {/* Responsive Title: fixed height with line-clamp helps keep cards aligned */}
      <h2 className="text-[10px] md:text-lg lg:text-xl font-bold mb-2 md:mb-4 line-clamp-2 h-8 md:h-14">
        {card.title}
      </h2>

      {/* 2x2 Grid for Items */}
      <div className="grid grid-cols-2 gap-2 md:gap-4 grow">
        {card.items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item)}
            className="group flex flex-col cursor-pointer mb-2 md:mb-4"
          >
            {/* Image Wrapper for uniformity */}
            <div className="h-20 md:h-28 lg:h-32 w-full overflow-hidden bg-[#f8f8f8] flex items-center justify-center rounded-sm">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain md:object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/* Item Name Label */}
            <p className="text-[8px] md:text-xs font-semibold mt-1 text-gray-700 group-hover:text-orange-700 line-clamp-1">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Link Button */}
      <p 
        onClick={() => navigate('/deals')}
        className="font-medium text-blue-600 self-start mt-auto pt-2 hover:text-orange-700 text-[9px] md:text-xs cursor-pointer hover:underline"
      >
        {card.button}
      </p>
    </div>
  );
};

export default FourthCardCompo;