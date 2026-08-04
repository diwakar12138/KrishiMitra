import HeroFarmer from "../../assets/images/hero-farmer.png";
import { SunDim, Sprout, Building2, TrendingUp, Sparkles } from "lucide-react";

function HeroImage() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-xl mx-auto py-8">
      
      {/* Background Glowing Ambient Light */}
      <div className="absolute w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] bg-emerald-400/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute w-[200px] h-[200px] bg-amber-300/20 rounded-full blur-[80px] top-10 right-10 -z-10 pointer-events-none" />

      {/* Main Image Wrapper */}
      <div className="relative z-10 w-full overflow-hidden rounded-3xl shadow-2xl shadow-emerald-950/15 border border-slate-100 group bg-slate-100">
        <img
          src={HeroFarmer}
          alt="Indian Farmer using KrishiMitra"
          className="w-full h-auto object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle Gradient Overlay at bottom for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* FLOATING CARD 1: Live Weather (Top Right) */}
      <div className="absolute -top-2 -right-2 sm:right-0 z-20 animate-[bounce_6s_infinite] bg-white/90 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-lg shadow-slate-900/10 border border-slate-100 flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-amber-100 text-amber-600 shrink-0">
          <SunDim size={22} />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-800">Live Weather</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <p className="text-sm font-bold text-slate-900">28°C • Sunny</p>
        </div>
      </div>

      {/* FLOATING CARD 2: Government Scheme (Middle Left) */}
      <div className="absolute top-1/2 -left-4 sm:-left-8 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-lg shadow-slate-900/10 border border-slate-100 flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
          <Building2 size={22} />
        </div>
        <div>
          <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">PM Kisan</span>
          <p className="text-sm font-bold text-slate-900">₹2,000 Credited</p>
        </div>
      </div>

      {/* FLOATING CARD 3: Crop Health & Mandi Rate (Bottom Right) */}
      <div className="absolute -bottom-4 right-2 sm:right-4 z-20 bg-white/90 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-lg shadow-slate-900/10 border border-slate-100 flex items-center gap-3.5">
        <div className="p-2.5 rounded-xl bg-emerald-700 text-white shrink-0 shadow-md shadow-emerald-700/30">
          <Sprout size={22} />
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-900">Wheat Crop</span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-md">
              <TrendingUp size={10} /> +12%
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium">Optimal Health Score</p>
        </div>
      </div>

    </div>
  );
}

export default HeroImage;