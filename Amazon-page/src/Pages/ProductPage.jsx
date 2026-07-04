import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Data receive karne ke liye
import { Star, ChevronDown, Share2, Info, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

// --- Sub-Components ---

const StarRating = ({ rating, count }) => (
  <div className="flex items-center space-x-1">
    <div className="flex text-orange-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} />
      ))}
    </div>
    <span className="text-blue-600 hover:text-orange-600 hover:underline cursor-pointer text-sm font-medium">
      {rating} <ChevronDown size={14} className="inline" />
    </span>
    <span className="text-blue-600 hover:text-orange-600 hover:underline cursor-pointer text-sm">
      ({count?.toLocaleString() || "43,080"})
    </span>
  </div>
);

const PriceSection = ({ price }) => (
  <div className="border-b border-gray-200 pb-4">
    <div className="bg-red-700 text-white text-xs font-bold px-2 py-1 inline-block mb-2">
      Limited time deal
    </div>
    <div className="flex items-baseline space-x-2">
      <span className="text-red-600 text-2xl font-light">-20%</span>
      <span className="text-2xl font-semibold leading-none">
        <span className="text-sm align-top font-normal">$</span>
        {price || "34.40"}
      </span>
      <span className="text-gray-500 text-sm">($0.72 / gram)</span>
    </div>
    <div className="text-gray-500 text-xs line-through mt-1">
      List Price: ${price ? (parseFloat(price) + 10).toFixed(2) : "43.00"} <Info size={12} className="inline ml-1" />
    </div>
  </div>
);

const VariantBox = ({ label, price, subtext, selected }) => (
  <div className={`border rounded-md p-2 cursor-pointer text-xs flex flex-col justify-between hover:border-orange-400 transition-colors ${selected ? 'border-orange-500 bg-orange-50 ring-1 ring-orange-500' : 'border-gray-300'}`}>
    <div className="font-bold">{label}</div>
    <div className="mt-1">
      <div className="text-red-700 font-semibold">{price}</div>
      <div className="text-gray-500 text-[10px]">{subtext}</div>
    </div>
  </div>
);

// --- Main Component ---

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();

  // Slider ya Card se aaya hua data nikalna
  const { product } = location.state || {};

  // Agar user direct link par aaye (bina click kiye), toh default data dikhayen
  const currentProduct = product || {
    title: "EltaMD UV Daily Face Sunscreen Moisturizer with Zinc Oxide, SPF 40",
    image: "https://m.media-amazon.com/images/I/31jApck7kbL.jpg",
    price: "34.40",
    description: "Great for Dry, Combination, and Normal Skin",
    rating: 4.6,
    count: 43080
  };

const { addToCart } = useCart();

const handleAddToCart = () => {
  // 1. Price ko Clean karein (Dollar sign aur commas hatayen)
  const rawPrice = currentProduct.price?.toString() || "0";
  const cleanPrice = parseFloat(rawPrice.replace(/[^0-9.]/g, "")) || 0;

  // 2. Unique ID Ensure karein
  // Agar product ki apni id nahi hai, toh title ko ID bana den (temporary fix)
  const uniqueId = currentProduct.id || currentProduct.title?.replace(/\s+/g, '-').toLowerCase();

  const cartItem = {
    id: uniqueId, // Yahan ID unique hona lazmi hai
    name: currentProduct.title || currentProduct.label || "Product",
    price: cleanPrice, // Ab ye hamesha Number hoga (NaN nahi ayega)
    image: currentProduct.image || currentProduct.img,
    qty: parseInt(quantity)
  };

  addToCart(cartItem);
  
      toast.success(`${cartItem.name} added to cart!`, {
      duration: 3000,
      style: {
        background: '#131921', // Amazon Dark Navy
        color: '#fff',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '600',
        border: '1px solid #f0c14b', // Gold Border
      },
      iconTheme: {
        primary: '#f0c14b', // Gold Icon
        secondary: '#131921',
      },
       });
  };

  return (
    <>
    <div className="min-h-screen bg-white text-gray-900 font-sans p-4 flex justify-center">
      <div className="max-w-375 w-full grid grid-cols-12 gap-6">
        
        {/* Left Column: Image Gallery */}
        <div className="col-span-12 lg:col-span-5 flex flex-col md:flex-row">
          {/* Thumbnails */}
          <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 mr-4 mb-4 md:mb-0">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-12 h-12 border border-gray-300 rounded cursor-pointer hover:ring-2 ring-orange-400 overflow-hidden">
                <img src={currentProduct.image || currentProduct.img} alt="thumb" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 relative group cursor-pointer border rounded-sm p-4 bg-gray-50/30">
            <img 
              src={currentProduct.image || currentProduct.img} 
              alt="Product Main" 
              className="w-full max-h-125 object-contain"
            />
            <div className="absolute top-0 right-0 p-2">
               <Share2 size={24} className="text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
          </div>
        </div>

        {/* Center Column: Details */}
        <div className="col-span-12 lg:col-span-4 space-y-3">
          <div className="flex justify-between items-start">
            <a href="#" className="text-blue-600 text-sm hover:underline">Visit the Official Store</a>
          </div>
          <h1 className="text-xl md:text-2xl font-medium leading-7 text-gray-800">
            {currentProduct.title || currentProduct.name || currentProduct.label}
          </h1>
          
          <StarRating rating={currentProduct.rating || 4.6} count={currentProduct.count || 43080} />
          
          <div className="inline-block bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded-sm">
            Amazon's <span className="text-orange-400">Choice</span>
          </div>
          <p className="text-sm">
            <span className="font-bold">30K+ bought</span> in past month
          </p>

          <hr className="my-2 border-gray-200" />
          <PriceSection price={currentProduct.price} />

          {/* Product Description */}
          <div className="py-2">
             <p className="text-sm font-bold">About this item:</p>
             <p className="text-sm text-gray-700 leading-relaxed mt-1">
               {currentProduct.description || "High-quality product designed for ultimate comfort and daily use. Authenticity guaranteed."}
             </p>
          </div>

          {/* Color/Variant Selector */}
          <div className="py-2">
            <p className="text-sm mb-2 font-bold">Options:</p>
            <div className="grid grid-cols-3 gap-2">
              <VariantBox label="Standard" price={`$${currentProduct.price || '34.40'}`} subtext="Best Value" selected />
              <VariantBox label="Combo" price="$55.00" subtext="Save 10%" />
              <VariantBox label="Travel" price="$15.00" subtext="Mini Pack" />
            </div>
          </div>
        </div>

        {/* Right Column: Buy Box */}
        <div className="col-span-12 lg:col-span-3 space-y-4">
          <div className="border border-gray-300 rounded-lg p-4 sticky top-4 shadow-sm bg-white">
            <div className="text-2xl font-semibold mb-2">
                <span className="text-sm align-top font-normal">$</span>
                {currentProduct.price || "34.40"}
            </div>
            
            <p className="text-sm text-blue-600 mb-2 cursor-pointer hover:underline hover:text-orange-600">
              $106.14 Shipping & Import Charges to Pakistan <ChevronDown size={14} className="inline" />
            </p>
            
            <p className="text-sm mb-1 font-bold text-gray-700">Delivery <span className="font-normal">Thursday, March 26</span></p>
            
            <div className="flex items-center text-sm text-blue-600 mb-4 cursor-pointer hover:underline">
              <MapPin size={16} className="mr-1 text-gray-500" /> Deliver to Pakistan
            </div>

            <p className="text-green-700 text-lg font-medium mb-4">In Stock</p>

            <select 
              value={quantity} 
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full bg-gray-100 border border-gray-300 rounded-lg py-1.5 px-3 text-sm shadow-sm focus:outline-none focus:ring-1 ring-cyan-500 mb-4 cursor-pointer"
            >
              {[1, 2, 3, 4, 5].map(q => <option key={q} value={q}>Qty: {q}</option>)}
            </select>

            <button 
              onClick={handleAddToCart}
              className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] py-2 rounded-full text-sm font-medium mb-2 shadow-sm transition-colors"
            >
              Add to Cart
            </button>
            <button className="w-full bg-[#FFA41C] hover:bg-[#FA8900] border border-[#FF8F00] py-2 rounded-full text-sm font-medium mb-4 shadow-sm transition-colors">
              Buy Now
            </button>

            <div className="text-xs space-y-1 text-gray-500 mt-2">
               <div className="flex justify-between"><span>Ships from</span> <span className="text-gray-900">Amazon.com</span></div>
               <div className="flex justify-between"><span>Sold by</span> <span className="text-gray-900">Amazon.com</span></div>
               <div className="flex justify-between"><span>Returns</span> <span className="text-blue-600 hover:text-orange-700">30-day refund/replacement</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default ProductPage;