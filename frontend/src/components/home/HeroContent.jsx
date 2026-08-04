// import { FaArrowRight } from "react-icons/fa";

// function HeroContent() {
//   return (
//     <div>

//       <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">

//         🌾 Smart Farming Companion

//       </span>

//       <h1 className="text-6xl font-extrabold mt-8 leading-tight text-[#1B4332]">

//         Empowering

//         <br />

//         <span className="text-green-700">
//           Indian Farmers
//         </span>

//         <br />

//         <span className="text-3xl text-gray-600 font-semibold">

//           with Smart Technology

//         </span>

//       </h1>

//       <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">

//         Manage crops, monitor weather, explore government schemes,
//         check market prices and improve farming using one intelligent platform.

//       </p>

//       <div className="flex gap-5 mt-10">

//         <button className="flex items-center gap-3 bg-green-700 hover:bg-green-800 transition text-white px-8 py-4 rounded-xl shadow-lg">

//           Get Started

//           <FaArrowRight />

//         </button>

//         <button className="border-2 border-green-700 hover:bg-green-50 transition text-green-700 px-8 py-4 rounded-xl">

//           Learn More

//         </button>

//       </div>

//     </div>
//   );
// }

// export default HeroContent;










import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";

function HeroContent() {
  return (
    <div className="flex flex-col items-start justify-center space-y-6 sm:space-y-8 max-w-2xl">
      
      {/* Top Pill Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-xs">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs sm:text-sm font-semibold text-emerald-800 tracking-wide flex items-center gap-1.5">
          <Leaf size={14} className="text-emerald-600" />
          Smart Farming Companion
        </span>
      </div>

      {/* Main Headline */}
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          Empowering <br />
          <span className="text-emerald-700 relative inline-block">
            Indian Farmers
            <span className="absolute bottom-1 left-0 w-full h-2 bg-emerald-200/60 -z-10 rounded-sm" />
          </span>
        </h1>
        
        <p className="text-2xl sm:text-3xl font-bold text-slate-600 tracking-tight pt-1">
          with Smart Technology.
        </p>
      </div>

      {/* Subtitle Body */}
      <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
        Manage crops, monitor real-time weather, explore verified government schemes, 
        and track live market prices — all inside one intelligent platform.
      </p>

      {/* CTA Button Group */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
        <Link
          to="/register"
          className="group inline-flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white text-base font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/30 transition-all duration-200 cursor-pointer"
        >
          <Sparkles size={18} className="text-emerald-200" />
          <span>Get Started Free</span>
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </Link>

        <Link
          to="/about"
          className="inline-flex items-center justify-center border-2 border-emerald-700/80 hover:border-emerald-700 hover:bg-emerald-50/60 active:scale-95 text-emerald-800 text-base font-semibold px-8 py-4 rounded-2xl transition-all duration-200 cursor-pointer"
        >
          <span>Explore Features</span>
        </Link>
      </div>

      {/* Trust & Social Proof Section */}
      <div className="pt-6 sm:pt-8 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-6 sm:gap-8 text-slate-500 text-xs sm:text-sm font-medium">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-emerald-600" />
          <span>Verified Mandi Prices</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <span className="inline-block h-6 w-6 rounded-full bg-emerald-600 ring-2 ring-white text-white text-[10px] font-bold text-center leading-6">K</span>
            <span className="inline-block h-6 w-6 rounded-full bg-emerald-700 ring-2 ring-white text-white text-[10px] font-bold text-center leading-6">M</span>
            <span className="inline-block h-6 w-6 rounded-full bg-emerald-800 ring-2 ring-white text-white text-[10px] font-bold text-center leading-6">A</span>
          </div>
          <span className="text-slate-700 font-semibold">50,000+ Active Farmers</span>
        </div>
      </div>

    </div>
  );
}

export default HeroContent;