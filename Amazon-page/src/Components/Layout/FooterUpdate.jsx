import React from "react";
import { footerSections } from "./FooterData";
import { amazonServices } from "./FooterServices";

const Footer = () => {
  return (
    <footer className="w-full font-sans antialiased">
      {/* --- Top Section: Links Grid --- */}
      <div className="bg-[#232f3e] text-white border-b border-gray-600">
        <div className="max-w-250 mx-auto px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h6 className="font-bold text-base mb-2">{section.title}</h6>
                <ul className="space-y-1.5">
                  {section.links.map((link, i) => (
                    <li 
                      key={i} 
                      className="text-[13px] text-[#DDD] hover:underline cursor-pointer transition-all"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- Middle Section: Logo & Settings --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-10 border-t border-gray-700/50">
          <div className="w-20 cursor-pointer mb-4 md:mb-0">
            <img 
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
              alt="Amazon Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {/* Language Box */}
            <div className="flex items-center gap-2 border border-gray-500 rounded-sm px-3 py-1.5 cursor-pointer hover:border-white transition-all text-xs">
              <span className="material-symbols-outlined text-sm">language</span>
              <p>English</p>
              <span className="text-[8px] opacity-60">▲▼</span>
            </div>

            {/* Currency Box */}
            <div className="flex items-center gap-2 border border-gray-500 rounded-sm px-3 py-1.5 cursor-pointer hover:border-white transition-all text-xs">
              <p className="font-bold text-gray-300">$</p>
              <p>USD - U.S. Dollar</p>
            </div>

            {/* Country Box */}
            <div className="flex items-center gap-2 border border-gray-500 rounded-sm px-3 py-1.5 cursor-pointer hover:border-white transition-all text-xs">
              <img
                className="h-3 w-4.5 object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                alt="US Flag"
              />
              <p>United States</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Section: Services Grid --- */}
      <div className="bg-[#131a22] text-amber-50 py-10">
        <div className="max-w-250 mx-auto px-4 md:px-8">
          {/* Responsive Grid: 2 columns on mobile, 4 on tablet, 7 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-4 gap-y-6 mb-10">
            {amazonServices.map((column, index) => (
              <div key={index} className="flex flex-col gap-8">
                {column.map((service, i) => (
                  <div key={i} className="group cursor-pointer">
                    <h6 className="text-[12px] leading-tight group-hover:underline">
                      {service.title}
                    </h6>
                    <p className="text-[11px] w-[80%] text-gray-400 leading-tight group-hover:underline">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Copyright & Legal Links */}
          <div className="flex flex-col items-center gap-2 pt-6 border-t border-gray-800">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[12px]">
              <li className="hover:underline cursor-pointer">Conditions of Use</li>
              <li className="hover:underline cursor-pointer">Privacy Notice</li>
              <li className="hover:underline cursor-pointer">Consumer Health Data Privacy Disclouser</li>
              <li className="hover:underline cursor-pointer">Your Ads Privacy Choices</li>
            </ul>
            <p className="text-[11px] text-gray-300 mt-1">
              © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;