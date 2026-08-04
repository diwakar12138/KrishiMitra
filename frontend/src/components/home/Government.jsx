// import government from "../../assets/images/government.jpg";
// import {
//   FaCheckCircle,
//   FaArrowRight
// } from "react-icons/fa";

// const schemes = [
//   "PM Kisan Samman Nidhi",
//   "PM Fasal Bima Yojana",
//   "Kisan Credit Card",
//   "Soil Health Card Scheme",
// ];

// function Government() {
//   return (
//     <section className="py-24 bg-white">

//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left */}

//           <div>

//             <img
//               src={government}
//               alt=""
//               className="rounded-3xl shadow-xl"
//             />

//           </div>

//           {/* Right */}

//           <div>

//             <span className="text-green-700 font-semibold uppercase">
//               Government Support
//             </span>

//             <h2 className="text-4xl font-bold mt-4 text-[#1B4332]">
//               Discover Government Schemes
//             </h2>

//             <p className="mt-6 text-gray-600 leading-8">
//               Stay updated with the latest government initiatives,
//               subsidies and financial assistance specially designed
//               for Indian farmers.
//             </p>

//             <div className="space-y-5 mt-10">

//               {schemes.map((scheme) => (

//                 <div
//                   key={scheme}
//                   className="flex items-center gap-4"
//                 >

//                   <FaCheckCircle className="text-green-700" />

//                   <p className="text-lg">

//                     {scheme}

//                   </p>

//                 </div>

//               ))}

//             </div>

//             <button className="mt-10 flex items-center gap-3 bg-green-700 text-white px-8 py-4 rounded-xl hover:bg-green-800 transition">

//               Explore Schemes

//               <FaArrowRight />

//             </button>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Government;










import government from "../../assets/images/government.jpg";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Landmark, ExternalLink, ShieldCheck } from "lucide-react";

const schemes = [
  {
    title: "PM Kisan Samman Nidhi",
    desc: "Direct income support of ₹6,000 per year in three equal installments.",
    tag: "Direct Benefit",
  },
  {
    title: "PM Fasal Bima Yojana",
    desc: "Comprehensive crop insurance cover against yield loss due to natural calamities.",
    tag: "Insurance",
  },
  {
    title: "Kisan Credit Card (KCC)",
    desc: "Timely credit support to meet short-term financial needs for cultivation.",
    tag: "Low Interest Credit",
  },
  {
    title: "Soil Health Card Scheme",
    desc: "Customized soil test reports with crop-wise nutrient recommendations.",
    tag: "Soil Testing",
  },
];

function Government() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background Decorative Ambient Blur */}
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Floating Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-emerald-950/10 border border-slate-100 group">
                <img
                  src={government}
                  alt="Government support for Indian farmers"
                  className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-slate-900">Govt Verified</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Direct Portal Integration</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Scheme Info & Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider">
              <Landmark size={14} className="text-emerald-700" />
              <span>Government Support</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Empowering Agriculture through <br className="hidden sm:inline" />
              <span className="text-emerald-700">Official Govt Initiatives</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Stay updated with verified government subsidies, crop insurance, and financial assistance specifically designed to support Indian farmers.
            </p>

            {/* Schemes List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {schemes.map((scheme, index) => (
                <div
                  key={index}
                  className="group bg-slate-50/80 hover:bg-emerald-50/40 p-4 rounded-2xl border border-slate-200/70 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                        {scheme.tag}
                      </span>
                      <CheckCircle2 size={16} className="text-emerald-600" />
                    </div>

                    <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-emerald-800 transition-colors">
                      {scheme.title}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1 leading-normal font-normal">
                      {scheme.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/schemes"
                className="group inline-flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/30 transition-all duration-200 cursor-pointer"
              >
                <span>Explore All Government Schemes</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Government;