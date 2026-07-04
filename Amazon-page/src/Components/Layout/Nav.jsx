import CategoryDropdown from "../../HomeSections/SeaarchBarCatagoriesData";
import { useNavigate } from "react-router-dom";
import OrdersDropdown from "./NavSignInButton";
import { useCart } from "../../context/CartContext"

const hoverBox =
  "border border-transparent p-1 hover:border-white cursor-pointer flex items-center transition-all duration-200";

const Nav = ({ user, setUser, onSearch }) => {
  
   const { cart } = useCart();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    onSearch(value); 
    if (window.location.pathname !== "/product" && value.length > 0) {
      navigate("/product");
    }
  };

  return (
    <nav className="bg-[#131921] text-white flex items-center justify-between px-2 md:px-4 h-16 gap-1 md:gap-4 sticky top-0 z-100">
      <div
        onClick={() => navigate("/")}
        className={`${hoverBox} hidden md:flex shrink-0`}>
        <img
          className="w-20 lg:w-24 h-8 lg:h-10 object-contain"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
      </div>

      <div
        className={`${hoverBox} hidden md:flex flex-col leading-tight shrink-0`}
      >
        <p className="text-[10px] lg:text-xs pl-5 text-[#ccc]">Deliver to</p>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 -960 960 960"
            width="18"
            fill="#e3e3e3"
          >
            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
          </svg>
          <p className="font-bold text-xs lg:text-sm">Pakistan</p>
        </div>
      </div>

      <div className="flex w-full h-10 group bg-white rounded-md focus-within:ring-2 ring-orange-500 transition-all">
        <CategoryDropdown user={user} setUser={setUser} />

        <input
          className="flex-1 max-w-full grow px-3 text-sm text-black outline-none placeholder:text-gray-500"
          type="text"
          onChange={handleInputChange}
          placeholder="Search Amazon"
        />

        <button className="bg-[#febd69] hover:bg-[#f3a847] px-3 rounded-r-lg md:px-5 flex items-center justify-center transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="22"
            viewBox="0 -960 960 960"
            width="22"
            fill="#000"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </button>
      </div>

      <div className={`${hoverBox} hidden lg:flex gap-1 shrink-0`}>
        <img
          className="h-3.5 w-5 object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
          alt="flag"
        />
        <select className="bg-transparent text-xs lg:text-sm font-bold cursor-pointer outline-none">
          <option className="text-black">EN</option>
        </select>
      </div>

      <div className="shrink-0 hidden md:flex">
        <OrdersDropdown user={user} setUser={setUser} />
      </div>

      <div
        className={`${hoverBox} hidden sm:flex flex-col leading-tight shrink-0`}
      >
        <p className="text-[10px] lg:text-xs">Returns</p>
        <p className="font-bold text-xs lg:text-sm">& Orders</p>
      </div>

      <div
        onClick={() => navigate("/cart")}
        className={`${hoverBox} relative hidden md:flex items-end pb-1 h-12 shrink-0`} >
        <div className="relative">
         <span className="absolute -top-4 left-4 text-orange-400 font-bold">
      {cart.length} 
    </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
            fill="#e3e3e3"
          >
            <path d="M360-640v-80h240v80H360ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
          </svg>
        </div>
        <span className="text-xs lg:text-sm font-bold mb-1 hidden sm:inline-block">
          Cart
        </span>
      </div>
    </nav>
  );
};

export default Nav;
