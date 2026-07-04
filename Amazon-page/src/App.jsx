import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./Pages/CreateAccount";
import Home from "./Pages/Home";
import DealsPage from "./Pages/DealsPage";
import ProductPage from "./Pages/ProductPage";
import NotFoundGhost from "./Pages/NotFoundGhost";
import { CartProvider } from "./context/CartContext";
import CartPage from "./Pages/CartPage";
import Nav from "./Components/Layout/Nav";
import Navbar2 from "./Components/Layout/Navbar2";
import { Toaster } from 'react-hot-toast'; 


const App = () => {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <Toaster position="bottom-right" reverseOrder={false} /> 

        <Nav user={user} setUser={setUser} onSearch={setSearchTerm} />
        <Navbar2 />

        <Routes>
          <Route path="/" element={user ? <Home setUser={setUser} /> : <CreateAccount setUser={setUser} />} />
          
          <Route path="/product" element={<DealsPage searchTerm={searchTerm} />} />
          <Route path="/deals" element={<DealsPage searchTerm={searchTerm} />} />

          <Route path="/product/:id" element={<ProductPage />} />
          
          <Route path="/register" element={<CreateAccount setUser={setUser} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundGhost />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
