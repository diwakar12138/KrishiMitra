import FarmerImage from "../../assets/images/about-farmer.jpg";

function AuthLayout({ title, subtitle, children }) {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-[#F8FAF7] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-[580px]">
          
          {/* Left Side: Full-Bleed Image Container */}
          <div className="hidden lg:relative lg:flex flex-col justify-between p-10 bg-emerald-950 overflow-hidden">
            {/* Background Image that covers 100% height & width */}
            <img
              src={FarmerImage}
              alt="Farmer"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />

            {/* Dark Gradient Overlay so text stands out clearly */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

            {/* Top Brand Badge */}
            <div className="relative z-10 self-start">
              <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold tracking-wide">
                KrishiMitra
              </span>
            </div>

            {/* Bottom Content Overlay */}
            <div className="relative z-10 space-y-3 text-white">
              <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
                Empowering Modern Farmers.
              </h2>
              <p className="text-sm text-emerald-100/90 leading-relaxed font-normal">
                Smart technology, weather updates, crop management, and government schemes — all in one place.
              </p>
            </div>
          </div>

          {/* Right Side: Dynamic Form Container */}
          <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4332] tracking-tight">
              {title}
            </h2>

            <p className="text-gray-500 text-sm mt-2 mb-8">
              {subtitle}
            </p>

            {children}
          </div>

        </div>
      </div>
    </section>
  );
}

export default AuthLayout;