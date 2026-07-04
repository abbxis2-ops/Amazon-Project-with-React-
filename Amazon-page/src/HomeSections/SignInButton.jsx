import { useNavigate } from "react-router-dom";
import { ArrowUp, UserCircle, Sparkles, LogOut, ChevronRight } from "lucide-react";

const SignInButton = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Subtle exit animation logic could be added here
    localStorage.removeItem("user");
    setUser(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#fcfcfd] mt-5 select-none overflow-hidden">
      {/* --- Personalized Recommendations Section --- */}
      <div className="flex flex-col items-center py-16 border-t border-gray-100 relative">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-100/30 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex items-center gap-2 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles size={18} className="text-amber-500 animate-pulse" />
          <h4 className="text-lg md:text-xl font-light tracking-tight text-gray-800 italic">
          <span className="font-bold not-italic transform capitalize">See personalized recommendations</span>
          </h4>
        </div>

        {/* --- LUXURY SHIMMER BUTTON --- */}
        <button
          onClick={user ? handleLogout : () => navigate("/register")}
          className="group relative w-full max-w-70 overflow-hidden rounded-full py-4 px-8 
                     bg-linear-to-r from-amber-400 via-amber-300 to-amber-400 
                     text-gray-900 font-bold text-sm uppercase tracking-widest
                     shadow-[0_10px_20px_rgba(245,158,11,0.2)] 
                     hover:shadow-[0_15px_30px_rgba(245,158,11,0.4)]
                     hover:-translate-y-1 active:scale-[0.96] 
                     transition-all duration-500 cursor-pointer"
        >
          {/* Shimmer Effect */}
          <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent 
                           -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />
          
          <div className="relative flex items-center justify-center gap-3">
            {user ? <LogOut size={18} /> : <UserCircle size={18} />}
            <span>{user ? "Sign Out" : "Secure Sign In"}</span>
          </div>
        </button>

        {/* --- New Customer Section --- */}
        {!user && (
          <div className="mt-8 flex flex-col items-center gap-2 animate-in fade-in duration-1000">
            <div className="h-px w-12 bg-linear-to-r from-transparent via-gray-300 to-transparent" />
            <p className="text-[12px] font-medium text-gray-500 tracking-wide uppercase flex items-center gap-1">
              New to our collection? 
              <button 
                onClick={() => navigate("/register")}
                className="text-amber-600 font-bold hover:text-gray-900 transition-colors flex items-center group"
              >
                Join Now
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </p>
          </div>
        )}
      </div>

      {/* --- LIQUID BACK TO TOP SECTION --- */}
      <div 
        onClick={scrollToTop}
        className="relative h-16 bg-[#232f3e] overflow-hidden cursor-pointer group"
      >
        {/* Animated Hover Background Layer */}
        <div className="absolute inset-0 bg-[#37475a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

        <div className="relative h-full flex flex-col justify-center items-center text-white transition-all duration-500 group-hover:-translate-y-1">
          <ArrowUp 
            size={20} 
            className="mb-1 transition-all duration-500 group-hover:animate-bounce" 
            strokeWidth={2.5}
          />
          <span className="text-[11px] font-black uppercase tracking-[0.3em] opacity-80 group-hover:opacity-100">
            Elevate to Top
          </span>
        </div>
      </div>

      {/* Custom Keyframe for Shimmer Effect */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default SignInButton;