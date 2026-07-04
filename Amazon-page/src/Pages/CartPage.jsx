import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, Star } from 'lucide-react';

const CartPage = () => {
  const { cart, updateQty, removeItem, totalPrice } = useCart();

  return (
    <div className="min-h-screen bg-[#EAEDED] py-8 px-4 md:px-8 font-sans antialiased text-[#0F1111]">
      <div className="max-w-375 mx-auto grid grid-cols-12 gap-5 items-start">
        
        {/* Left Column: Cart Items */}
        <div className="col-span-12 lg:col-span-9 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-medium mb-1">Shopping Cart</h1>
          <div className="text-right text-sm text-gray-600 border-b pb-1">Price</div>

          {cart.length === 0 ? (
            <div className="py-20 text-center">
              <h2 className="text-xl">Your Amazon Cart is empty.</h2>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-4 py-6 border-b">
                {/* Product Image */}
                <div className="w-44 h-44 shrink-0 flex items-center justify-center p-2">
                  <img src={item.image} alt="" className="max-h-full max-w-full object-contain" />
                </div>

                {/* Product Info */}
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-medium leading-tight line-clamp-2 hover:text-[#C45500] cursor-pointer">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#007600] font-bold">In Stock</p>
                  <div className="flex items-center gap-1 text-xs">
                    <input type="checkbox" checked readOnly className="h-3 w-3" />
                    <span className="text-gray-600">This is a gift <span className="text-[#007185] hover:underline cursor-pointer">Learn more</span></span>
                  </div>
                  
                  {/* Style/Size Mockup */}
                  <p className="text-xs font-bold">Style: <span className="font-normal">Standard Edition</span></p>

                  {/* Actions Row */}
                  <div className="flex items-center flex-wrap gap-4 pt-3">
                    {/* Qty Selector */}
                    <div className="flex items-center bg-[#F0F2F2] border border-[#D5D9D9] rounded-lg shadow-sm h-8 overflow-hidden">
                      <button 
                        onClick={() => item.qty > 1 ? updateQty(item.id, -1) : removeItem(item.id)}
                        className="px-2 hover:bg-gray-200 transition-colors"
                      >
                        {item.qty === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
                      </button>
                      <span className="px-4 text-sm font-medium border-x border-[#D5D9D9]">{item.qty}</span>
                      <button 
                        onClick={() => updateQty(item.id, 1)}
                        className="px-2 hover:bg-gray-200 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <div className="flex gap-4 text-xs text-[#007185] divide-x">
                      <button onClick={() => removeItem(item.id)} className="hover:underline">Delete</button>
                      <button className="pl-4 hover:underline">Save for later</button>
                      <button className="pl-4 hover:underline">Compare with similar items</button>
                      <button className="pl-4 hover:underline">Share</button>
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                <div className="text-right">
                  <span className="text-lg font-bold">${parseFloat(item.price).toFixed(2)}</span>
                </div>
              </div>
            ))
          )}

          {/* Subtotal Bottom */}
          {cart.length > 0 && (
            <div className="text-right pt-4">
              <span className="text-lg">Subtotal ({cart.length} items): <span className="font-bold">${totalPrice.toFixed(2)}</span></span>
            </div>
          )}
        </div>

        {/* Right Column: Checkout & Recommendations */}
        <div className="col-span-12 lg:col-span-3 space-y-5">
          {/* Subtotal Box */}
          <div className="bg-white p-5 shadow-sm space-y-4">
            <div className="text-lg">
              Subtotal ({cart.length} items): <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="h-4 w-4" />
              <span>This order contains a gift</span>
            </div>
            <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] py-2 rounded-lg text-sm font-medium shadow-sm transition-all active:scale-95">
              Proceed to checkout
            </button>
          </div>

          {/* Recommendations Sidebar */}
          <div className="bg-white p-5 shadow-sm">
            <h4 className="text-sm font-bold mb-4">Customers Who Bought Items in Your Recent History Also Bought</h4>
            
            {/* Recommendation Item */}
            <div className="space-y-6">
              {[1, 2].map(i => (
                <div key={i} className="flex gap-3">
                  <div className="w-20 h-24 shrink-0">
                    <img src="https://m.media-amazon.com/images/I/31jApck7kbL.jpg" alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-[#007185] hover:text-[#C45500] hover:underline cursor-pointer line-clamp-2 leading-tight font-medium">
                      EltaMD PM Restore Face Moisturizer, Night Cream for Face...
                    </p>
                    <div className="flex text-[#FFA41C] text-[10px]">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                      <span className="text-[#007185] ml-1">5,994</span>
                    </div>
                    <div className="text-sm text-[#B12704] font-bold">$38.40</div>
                    <button className="bg-[#FFD814] border border-[#FCD200] text-[11px] px-3 py-1 rounded-full shadow-sm hover:bg-[#F7CA00]">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CartPage;