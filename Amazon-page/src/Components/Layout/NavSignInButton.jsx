import React, { useState } from "react";

const OrdersDropdown = ({ setUser }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const [isHovered, setIsHovered] = useState(false);

  const listLinks = ["Create a List", "Find a List or Registry"];
  const accountLinks = [
    "Account",
    "Orders",
    "Recommendations",
    "Browsing History",
    "Your Shopping preferences",
    "Watchlist",
    "Video Purchases & Rentals",
    "Kindle Unlimited",
    "Content & Devices",
    "Subscribe & Save Items",
  ];

  return (
    <div className="flex justify-center">
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col leading-tight text-white cursor-pointer p-2 border border-transparent hover:border-white rounded-sm transition-all">
          <p className="text-[10px] sm:text-xs">
            {" "}
            Hello, {user ? <b>{user.name}</b> : "sign in"}{" "}
          </p>
          <p className="font-bold text-xs sm:text-sm">Accounts & Lists</p>
        </div>

        {isHovered && (
          <div className="absolute top-full right-0 w-120 pt-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
            <div className="absolute top-1.25 right-6 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-200 shadow-sm">
            </div>

            <div className="bg-white rounded-md shadow-[0_2px_15px_rgba(0,0,0,0.3)] border border-gray-200 text-gray-900 overflow-hidden">
              <div className="flex flex-col items-center py-4 border-b border-gray-100">
                <button
                  type="button"
                  onClick={user ? handleLogout : null}
                  className="w-48 py-1.5 bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-md text-sm font-medium shadow-sm transition-colors"
                >
                  {user ? "Logout" : "Sign In"}
                </button>
                <p className="text-[11px] mt-2">
                  New customer?{""}
                  <a href="#" className="text-blue-700 hover:text-orange-700 hover:underline"> Start here. </a>
                </p>
              </div>

              <div className="flex p-5 gap-8">
                <div className="flex-1">
                  <h3 className="text-sm font-bold mb-2">Your Lists</h3>
                  <ul className="space-y-1">
                    {listLinks.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-xs text-gray-700 hover:text-orange-700 hover:underline block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-px bg-gray-100"></div>

                <div className="flex-1">
                  <h3 className="text-sm font-bold mb-2">Your Account</h3>
                  <ul className="space-y-1">
                    {accountLinks.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-xs text-gray-700 hover:text-orange-700 hover:underline block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="#"
                        className="text-xs text-orange-700 hover:underline border border-cyan-700 px-1 w-fit mt-1 inline-block"
                      >
                        Music Library
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersDropdown;