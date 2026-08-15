import {
  CloudSun,
  Leaf,
  IndianRupee,
  UserRound,
  ShieldCheck,
  Mail,
  MapPin,
  Sprout,
  Database,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Tractor,
} from "lucide-react";
import { Link } from "react-router-dom";

function Features() {
  const mainFeatures = [
    {
      icon: CloudSun,
      title: "Live Weather Updates",
      description:
        "Get current weather information for a selected location, including temperature, humidity, wind speed, precipitation and weather conditions.",
      tag: "Weather",
    },
    {
      icon: Leaf,
      title: "Crop Management",
      description:
        "Manage crop-related information through a centralized system, making it easier for farmers to keep track of their agricultural activities.",
      tag: "Crops",
    },
    {
      icon: IndianRupee,
      title: "Market Information",
      description:
        "Access agricultural market and mandi-related information to stay aware of crop prices and make more informed selling decisions.",
      tag: "Market",
    },
    {
      icon: UserRound,
      title: "Farmer Profile",
      description:
        "Maintain a personalized farmer profile containing details such as location, village, farm size and other relevant information.",
      tag: "Profile",
    },
    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      description:
        "Secure registration and login functionality protects user accounts through password hashing and JWT-based authentication.",
      tag: "Security",
    },
    {
      icon: Mail,
      title: "Contact & Support",
      description:
        "Farmers can submit their questions or concerns through the contact system and communicate with the agricultural support team.",
      tag: "Support",
    },
  ];

  const benefits = [
    "Easy access to agricultural information",
    "Personalized farmer accounts",
    "Real-time weather data",
    "Centralized crop information",
    "Secure authentication",
    "Responsive web interface",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#004d3d]">

        {/* Decorative elements */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/60 border border-emerald-400/20 text-emerald-200 text-sm font-semibold mb-7">
              <Sprout size={17} />
              <span>SMART FARMING FEATURES</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Everything Farmers Need,
              <span className="block text-emerald-400 mt-2">
                In One Place
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 text-lg sm:text-xl text-emerald-100/90 leading-relaxed max-w-3xl mx-auto">
              KrishiMitra brings essential agricultural information and
              digital utilities together to help farmers make better,
              more informed decisions.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="py-20 lg:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
                <Tractor size={16} />
                BUILT FOR FARMERS
              </div>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Useful tools for{" "}
                <span className="text-emerald-700">
                  everyday farming
                </span>
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Farming decisions often depend on information such as
                weather conditions, crop details and market prices.
                KrishiMitra provides these utilities through a single
                easy-to-use platform.
              </p>

              <div className="mt-7 space-y-3">

                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-emerald-600 shrink-0"
                    />

                    <span className="text-slate-700 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}

              </div>

            </div>


            {/* Right visual */}
            <div className="relative">

              <div className="absolute inset-0 bg-emerald-100 rounded-[2rem] rotate-3" />

              <div className="relative bg-[#004d3d] rounded-[2rem] p-8 sm:p-10 shadow-xl">

                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-400/20">
                  <BarChart3
                    size={34}
                    className="text-emerald-300"
                  />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  Smarter Farming Decisions
                </h3>

                <p className="mt-4 text-emerald-100/80 leading-relaxed">
                  Access useful information about weather, crops and
                  agricultural markets so that important farming decisions
                  can be made with better information.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">

                  <div className="rounded-xl bg-white/10 p-4 text-center">
                    <CloudSun
                      size={25}
                      className="mx-auto text-emerald-300"
                    />
                    <p className="mt-2 text-sm text-white font-semibold">
                      Weather
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4 text-center">
                    <Leaf
                      size={25}
                      className="mx-auto text-emerald-300"
                    />
                    <p className="mt-2 text-sm text-white font-semibold">
                      Crops
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4 text-center">
                    <IndianRupee
                      size={25}
                      className="mx-auto text-emerald-300"
                    />
                    <p className="mt-2 text-sm text-white font-semibold">
                      Market
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          MAIN FEATURES
      ====================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section heading */}
          <div className="max-w-3xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
              KRISHIMITRA FEATURES
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Powerful features,
              <span className="text-emerald-700"> simple experience</span>
            </h2>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Every feature is designed to keep important agricultural
              information accessible without making the platform
              complicated to use.
            </p>

          </div>


          {/* Feature cards */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl border border-slate-200 p-7 hover:border-emerald-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >

                  {/* Tag */}
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                    <Icon
                      size={28}
                      className="text-emerald-700"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-emerald-700 text-sm font-semibold">
                    <span>Learn more</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          WEATHER FEATURE HIGHLIGHT
      ====================================================== */}
      <section className="py-20 lg:py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="rounded-3xl overflow-hidden bg-[#004d3d]">

            <div className="grid lg:grid-cols-2">

              {/* Left */}
              <div className="p-8 sm:p-12 lg:p-16">

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900 text-emerald-300 text-sm font-bold">
                  <CloudSun size={16} />
                  LIVE WEATHER
                </div>

                <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Know the weather before you work
                </h2>

                <p className="mt-5 text-lg text-emerald-100/80 leading-relaxed">
                  Farmers can enter a location and receive current
                  weather information through the integrated weather
                  service.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">

                  {[
                    "Temperature",
                    "Weather condition",
                    "Humidity",
                    "Wind speed",
                    "Precipitation",
                    "Feels-like temperature",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-emerald-400"
                      />

                      <span className="text-white/90">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>


              {/* Right visual */}
              <div className="relative bg-emerald-900/40 min-h-[350px] flex items-center justify-center p-8">

                <div className="relative w-full max-w-sm">

                  {/* Weather Card */}
                  <div className="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-sm p-7">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-emerald-200 text-sm">
                          Current Weather
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                          <MapPin
                            size={16}
                            className="text-emerald-300"
                          />

                          <span className="text-white font-semibold">
                            Farmer's Location
                          </span>
                        </div>
                      </div>

                      <CloudSun
                        size={42}
                        className="text-emerald-300"
                      />

                    </div>

                    <div className="mt-8">

                      <span className="text-5xl font-extrabold text-white">
                        28°
                      </span>

                      <span className="ml-2 text-emerald-200">
                        Clear
                      </span>

                    </div>

                    <div className="mt-7 grid grid-cols-2 gap-3">

                      <div className="rounded-xl bg-white/10 p-3">
                        <p className="text-xs text-emerald-200">
                          Humidity
                        </p>

                        <p className="mt-1 text-white font-bold">
                          65%
                        </p>
                      </div>

                      <div className="rounded-xl bg-white/10 p-3">
                        <p className="text-xs text-emerald-200">
                          Wind
                        </p>

                        <p className="mt-1 text-white font-bold">
                          12 km/h
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECURITY / TECHNOLOGY
      ====================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-6">

            {/* Authentication */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7">

              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center">
                <ShieldCheck
                  size={28}
                  className="text-emerald-700"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Secure Authentication
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                User registration, login, protected routes and secure
                password storage help protect farmer accounts.
              </p>

            </div>


            {/* Database */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7">

              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center">
                <Database
                  size={28}
                  className="text-emerald-700"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Centralized Data
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                Farmer and crop information is managed through a
                structured database-backed application.
              </p>

            </div>


            {/* Responsive */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7">

              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center">
                <Smartphone
                  size={28}
                  className="text-emerald-700"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Responsive Design
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                The interface is designed to work smoothly across
                desktops, tablets and mobile devices.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-3xl bg-[#004d3d] px-7 py-14 sm:px-12 text-center">

            <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-emerald-400/10" />
            <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-emerald-400/10" />

            <div className="relative">

              <div className="flex justify-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-400/20">
                  <Sprout
                    size={32}
                    className="text-emerald-300"
                  />
                </div>
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-white">
                Start your journey with KrishiMitra
              </h2>

              <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl mx-auto">
                Explore the platform and access useful agricultural
                information from one place.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-[#003d30] font-bold hover:bg-emerald-300 transition-all"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-emerald-300/40 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  About KrishiMitra
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Features;