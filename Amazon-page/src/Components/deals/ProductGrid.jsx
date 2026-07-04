import React from "react";
import { Link } from "react-router-dom";

// Ab data 'props' ke zariye bahar se ayega
const ProductGrid = ({ products }) => {
  
  // Professional Check: Agar search ya filter ke baad koi product na bache
  if (!products || products.length === 0) {
    return (
      <div className="w-full py-20 text-center">
        <h2 className="text-xl text-gray-500 font-medium">No products found matching your search.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-375 mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
  state={{ product }} // Yeh 'product' ab filter kiya hua accurate object hoga
  key={product.id}
            className="group relative bg-white flex flex-col p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
          >

            {/* Image Section */}
            <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-lg bg-[#f9f9f9] flex items-center justify-center mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
              />
              {product.discount && (
                <div className="absolute top-2 left-2 bg-[#CC0C39] text-white text-[10px] font-bold px-2 py-1 rounded-sm shadow-sm">
                  {product.discount} OFF
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#CC0C39] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                  Limited time deal
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-gray-900">
                  <span className="text-xs align-top mr-0.5">$</span>
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-xs text-gray-500 line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>

              <h3 className="text-sm text-gray-800 mt-2 line-clamp-2 leading-snug font-medium group-hover:text-blue-600 transition-colors">
                {product.title}
              </h3>

              {/* Star Rating Logic */}
              <div className="flex items-center mt-auto pt-3">
                <div className="flex text-orange-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating || 0) ? "text-orange-400" : "text-gray-200"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-[10px] text-blue-600 ml-1 hover:text-orange-700">
                  ({product.reviewsCount || "0"})
                </span>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/5 opacity-0 group-active:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;