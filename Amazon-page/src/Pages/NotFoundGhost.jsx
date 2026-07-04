import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundGhost = () => {

  const navigate = useNavigate()
  const [eyePos, setEyePos] = useState({ x: -50, y: -45 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const pageX = window.innerWidth;
      const pageY = window.innerHeight;
      const mouseY = event.pageY;
      const mouseX = event.pageX;

      // Vertical calculation
      const yAxis = ((pageY / 2 - mouseY) / pageY) * 300;
      // Horizontal calculation
      const xAxis = (mouseX / pageX) * 100 - 100;

      setEyePos({ x: xAxis, y: -yAxis });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#28254C] flex items-center justify-center font-['Ubuntu'] p-4 overflow-hidden">
      <style>{`
        @keyframes upndown {
          0% { transform: translateY(5px); }
          50% { transform: translateY(15px); }
          100% { transform: translateY(5px); }
        }
        @keyframes smallnbig {
          0% { width: 90px; }
          50% { width: 100px; }
          100% { width: 90px; }
        }
        @keyframes shine {
          0%, 50%, 100% { opacity: .2; }
          25% { opacity: .1; }
        }
        
        .symbol:nth-child(1):before, .symbol:nth-child(1):after,
        .symbol:nth-child(3):before, .symbol:nth-child(3):after,
        .symbol:nth-child(4):before, .symbol:nth-child(4):after,
        .symbol:nth-child(6):before, .symbol:nth-child(6):after {
          content: '';
          background: #fff;
          position: absolute;
          border-radius: 5px;
        }

        .ghost-bottom-circle:nth-child(2n) {
          top: -12px;
          border-top: 15px solid #332F63;
          background: transparent !important;
        }

        .btn-shine:before {
          content: '';
          position: absolute;
          width: 20px;
          height: 100px;
          background: #fff;
          bottom: -25px;
          left: 0;
          border: 2px solid #fff;
          transform: translateX(-50px) rotate(45deg);
          transition: transform .5s ease;
        }
        .btn-shine:hover:before {
          transform: translateX(250px) rotate(45deg);
        }
      `}</style>

      <div className="relative w-full max-w-87.5 min-h-112.5 bg-[#332F63] rounded-[20px] p-8 md:p-12 shadow-2xl">
        {/* Ghost Section */}
        <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-[30%] w-full h-48">
          {/* Decorative Symbols */}
          <div className="absolute w-full h-full">
            {/* Symbol 1 - Cross */}
            <div className="symbol opacity-20 absolute left-0 bottom-16.25 animate-[shine_4s_ease-in-out_3s_infinite]">
              <div className="w-3 h-1 bg-white absolute rotate-45 rounded-full" />
              <div className="w-3 h-1 bg-white absolute -rotate-45 rounded-full" />
            </div>
            {/* Symbol 2 - Circle */}
            <div className="symbol absolute -left-1 top-8 h-4.5 w-4.5 border-4 border-white rounded-full opacity-20 animate-[shine_4s_ease-in-out_1.3s_infinite]" />
            {/* Symbol 3 - Cross */}
            <div className="symbol opacity-20 absolute left-10 top-1 animate-[shine_3s_ease-in-out_0.5s_infinite]">
              <div className="w-3 h-1 bg-white absolute rotate-90 rounded-full" />
              <div className="w-3 h-1 bg-white absolute rotate-180 rounded-full" />
            </div>
            {/* Symbol 4 - Cross */}
            <div className="symbol opacity-20 absolute right-8 top-2 animate-[shine_6s_ease-in-out_1.6s_infinite]">
              <div className="w-3.75 h-1 bg-white absolute rotate-45 rounded-full" />
              <div className="w-3.75 h-1 bg-white absolute -rotate-45 rounded-full" />
            </div>
            {/* Symbol 5 - Circle */}
            <div className="symbol absolute right-1 top-10 h-3 w-3 border-[3px] border-white rounded-full opacity-20 animate-[shine_1.7s_ease-in-out_7s_infinite]" />
            {/* Symbol 6 - Cross */}
            <div className="symbol opacity-20 absolute -right-1.25 bottom-16.25 animate-[shine_2s_ease-in-out_6s_infinite]">
              <div className="w-3.75 h-1 bg-white absolute rotate-90 rounded-full" />
              <div className="w-3.75 h-1 bg-white absolute rotate-180 rounded-full" />
            </div>
          </div>

          {/* Ghost Body Container */}
          <div className="relative mx-auto w-25 h-25 bg-white rounded-t-full animate-[upndown_3s_ease-in-out_infinite]">
            {/* Eyes */}
            <div
              className="absolute left-1/2 top-[45%] w-17.5 h-3 flex justify-between px-2 transition-transform duration-75 ease-out"
              style={{ transform: `translate(${eyePos.x}%, ${eyePos.y}%)` }}
            >
              <div className="w-3 h-3 bg-[#332F63] rounded-full" />
              <div className="w-3 h-3 bg-[#332F63] rounded-full" />
            </div>

            {/* Ghost Bottom Waves */}
            <div className="absolute top-full left-0 right-0 flex">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="ghost-bottom-circle grow relative -top-2.5 h-5 bg-white rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Shadow */}
          <div className="mx-auto mt-4 h-5 rounded-full bg-[#3B3769] shadow-[0_50px_15px_5px_#3B3769] animate-[smallnbig_3s_ease-in-out_infinite]" />
        </div>

        {/* Text Description */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-8 flex flex-col items-center text-center">
          <h2 className="text-white text-2xl font-bold tracking-wide">
            Whoops!
          </h2>
          <p className="text-[#8C8AA7] text-sm mt-5 leading-relaxed max-w-50">
            It seems like we couldn't find the page you were looking for
          </p>

          <button
          onClick={() => navigate("/")}
          className="btn-shine relative mt-6 px-16 h-12.5 bg-[#FF5E65] text-white rounded-full text-lg font-medium transition-colors duration-500 overflow-hidden border border-transparent hover:bg-transparent hover:border-white">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundGhost;
