import { Sprout, CloudSun, Landmark, TrendingUp, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Sprout,
    title: "Crop Management",
    desc: "Easily manage your crops, monitor growth, and keep yield records all in one central dashboard.",
    accent: "from-emerald-500/10 to-emerald-600/20",
    badge: "Analytics",
  },
  {
    icon: CloudSun,
    title: "Live Weather Updates",
    desc: "Get hyper-local, real-time weather forecasts to plan irrigation, fertilization, and harvesting.",
    accent: "from-amber-500/10 to-amber-600/20",
    badge: "Real-time",
  },
  {
    icon: Landmark,
    title: "Government Schemes",
    desc: "Explore verified government subsidies, insurance policies, and credit schemes tailored for you.",
    accent: "from-blue-500/10 to-blue-600/20",
    badge: "Subsidies",
  },
  {
    icon: TrendingUp,
    title: "Mandi Market Prices",
    desc: "Stay updated with daily mandi rates across various markets to sell your produce at peak profit.",
    accent: "from-emerald-500/10 to-teal-600/20",
    badge: "Daily Rates",
  },
];

function Features() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/60 relative overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider">
            Why Choose KrishiMitra
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Everything You Need <br className="hidden sm:inline" />
            <span className="text-emerald-700">To Grow Smarter</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-1">
            Powerful features designed specifically to help Indian farmers streamline daily operations and increase agricultural yield.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 border border-slate-200/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300 shadow-xs">
                      <IconComponent size={26} />
                    </div>

                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-800 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed font-normal">
                    {feature.desc}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>Explore Feature</span>
                  <ArrowUpRight
                    size={15}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;