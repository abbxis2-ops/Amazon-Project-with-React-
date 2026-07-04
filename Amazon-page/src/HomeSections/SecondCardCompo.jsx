import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecondCardCampo = ({ card }) => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    const slug = item.name.toLowerCase().replace(/ /g, "-");
    navigate(`/product/${slug}`, { state: { product: item } });
  };

  return (
    <div className="flex flex-col bg-white p-2 md:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-full border border-gray-100">
      
      <h2 className="text-[10px] md:text-lg lg:text-xl font-bold mb-2 md:mb-4 line-clamp-2 h-8 md:h-14">
        {card.title}
      </h2>

      <div className="grid grid-cols-2 gap-2 md:gap-4 grow">
        {card.items.map((item, i) => (
          <div 
            key={i} 
            onClick={() => handleItemClick(item)}
            className="group flex flex-col cursor-pointer mb-2 md:mb-4"
          >
            <div className="h-20 md:h-28 lg:h-32 w-full overflow-hidden bg-gray-50 flex items-center justify-center rounded-sm">
              <img 
                src={item.img} 
                alt={item.name}
                className="w-full h-full object-contain md:object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <p className="text-[8px] md:text-xs font-semibold mt-1 text-gray-700 group-hover:text-orange-700 line-clamp-1">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      <p 
        onClick={() => navigate('/deals')}
        className="font-medium text-blue-600 self-start mt-auto pt-2 hover:text-orange-700 text-[9px] md:text-xs cursor-pointer hover:underline"
      >
        {card.buttonText}
      </p>

    </div>
  );
};

export default SecondCardCampo;