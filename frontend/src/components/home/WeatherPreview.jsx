import { SunDim, Droplets, Wind, MapPin, CloudRain, Sparkles, CheckCircle2 } from "lucide-react";

function WeatherPreview() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-emerald-700" />
              <span>Real-Time Intelligence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Stay Ahead with <br />
              <span className="text-emerald-700">Hyper-Local Forecasts</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Accurate, real-time weather monitoring, humidity levels, wind vectors, and rainfall alerts help you time irrigation and crop protection perfectly.
            </p>

            {/* Smart Feature Checkpoints */}
            <ul className="space-y-3 pt-2">
              {[
                "3-hour rain prediction alerts for your pin code",
                "Soil moisture index to prevent over-irrigation",
                "Extreme weather warnings via SMS & Push notifications",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: High-End Weather Widget */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden">
              
              {/* Location Header & Status Indicator */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-2 text-slate-700 font-bold text-base sm:text-lg">
                  <div className="p-2 bg-rose-50 text-rose-600 rounded-xl">
                    <MapPin size={18} />
                  </div>
                  <span>Chandigarh, India</span>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-semibold px-3 py-1 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Updated Just Now</span>
                </div>
              </div>

              {/* Main Weather Display */}
              <div className="flex items-center justify-between py-6">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">28°</span>
                    <span className="text-2xl font-bold text-slate-400">C</span>
                  </div>
                  <p className="text-slate-600 font-semibold text-lg mt-1">Sunny & Clear</p>
                  <p className="text-slate-400 text-xs mt-0.5">Feels like 30°C</p>
                </div>

                <div className="p-4 bg-amber-50 rounded-3xl text-amber-500 shadow-inner">
                  <SunDim size={64} className="animate-[spin_20s_linear_infinite]" />
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4">
                
                {/* Humidity */}
                <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 flex flex-col items-center text-center">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-xl mb-2">
                    <Droplets size={18} />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase">Humidity</span>
                  <span className="text-base font-bold text-slate-900 mt-0.5">68%</span>
                </div>

                {/* Wind */}
                <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 flex flex-col items-center text-center">
                  <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl mb-2">
                    <Wind size={18} />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase">Wind</span>
                  <span className="text-base font-bold text-slate-900 mt-0.5">12 km/h</span>
                </div>

                {/* Chance of Rain */}
                <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 flex flex-col items-center text-center">
                  <div className="p-2 bg-indigo-100 text-indigo-600 rounded-xl mb-2">
                    <CloudRain size={18} />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase">Rain Chance</span>
                  <span className="text-base font-bold text-slate-900 mt-0.5">10%</span>
                </div>

              </div>

              {/* Actionable Farming Advisory Banner */}
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-900 text-white flex items-center gap-3.5 shadow-md">
                <div className="h-3 w-3 rounded-full bg-emerald-400 shrink-0" />
                <p className="text-xs sm:text-sm font-medium leading-snug">
                  <strong className="font-bold text-emerald-200">Farming Advisory:</strong> Low rain risk today. Optimal conditions for wheat field irrigation.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WeatherPreview;