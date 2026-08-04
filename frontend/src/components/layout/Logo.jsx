import { Sprout } from "lucide-react";

function Logo() {
  return (
    <div className="group inline-flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none whitespace-nowrap">
      {/* Icon Badge Container */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-emerald-600/20 to-teal-600/20 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-500/50 group-hover:shadow-md group-hover:shadow-emerald-900/10">
        
        {/* Decorative Inner Glow Dot */}
        <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-80" />

        <Sprout className="w-5 h-5 sm:w-5 sm:h-5 text-emerald-700 transition-transform duration-300 group-hover:rotate-6 group-hover:text-emerald-800" />
      </div>

      {/* Brand Text Content */}
      <div className="flex flex-col justify-center leading-none">
        <h1 className="text-base sm:text-lg md:text-xl font-black tracking-tight text-slate-900 leading-none">
          Krishi<span className="text-emerald-700 group-hover:text-emerald-800 transition-colors">Mitra</span>
        </h1>
        
        <p className="hidden sm:block text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wide uppercase leading-none mt-1">
          Smart Farming Companion
        </p>
      </div>
    </div>
  );
}

export default Logo;