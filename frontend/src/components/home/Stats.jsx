import { Users, Sprout, CloudSun, Landmark } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5,000+",
    title: "Registered Farmers",
    subtitle: "Active daily users across India",
  },
  {
    icon: Sprout,
    number: "1,200+",
    title: "Crop Records",
    subtitle: "Real-time crop yield diagnostics",
  },
  {
    icon: CloudSun,
    number: "24/7",
    title: "Weather Tracking",
    subtitle: "Hyper-local forecast alerts",
  },
  {
    icon: Landmark,
    number: "100+",
    title: "Govt Schemes",
    subtitle: "Direct access to subsidies & benefits",
  },
];

function Stats() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white overflow-hidden">
      {/* Decorative Ambient Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Optional Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-emerald-300 uppercase tracking-widest bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-700/50">
            Impact in Numbers
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-4 text-white tracking-tight">
            Transforming Agriculture with Data
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/15 hover:border-white/25 hover:shadow-2xl hover:shadow-emerald-950/40"
              >
                {/* Icon Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-600/30 border border-emerald-300/30 flex items-center justify-center text-emerald-300 mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300 shadow-inner">
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                {/* Main Stat Number */}
                <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  {item.number}
                </h3>

                {/* Title */}
                <p className="mt-2 text-base font-semibold text-emerald-100">
                  {item.title}
                </p>

                {/* Subtitle */}
                <p className="mt-1 text-xs text-emerald-200/70 font-medium">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Stats;