import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {

      const existingItem = prevCart.find((item) => item.id === product.id);
      
      let updatedCart;

      if (existingItem) {
        updatedCart = prevCart.map((item) => item.id === product.id ? { ...item, qty: item.qty + product.qty } : item );
      } else {
        updatedCart = [...prevCart, product];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      
      return updatedCart;
    });
  };

  const updateQty = (id, delta) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // 4. Remove Item Logic
  const removeItem = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // 5. Total Price Calculation
 // CartContext.js ke andar Total Price ka logic aisa hona chahiye:
const totalPrice = cart.reduce((acc, item) => {
  const itemPrice = parseFloat(item.price) || 0; // NaN se bachne ke liye
  return acc + (itemPrice * item.qty);
}, 0);

  return (
    <CartContext.Provider 
      value={{ cart, addToCart, updateQty, removeItem, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);