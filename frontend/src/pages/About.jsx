import {
  Sprout,
  CloudSun,
  IndianRupee,
  Leaf,
  ShieldCheck,
  Smartphone,
  Database,
  Users,
  ArrowRight,
  CheckCircle2,
  Tractor,
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  const features = [
    {
      icon: CloudSun,
      title: "Live Weather Information",
      description:
        "Farmers can check current weather conditions to make better decisions regarding irrigation, spraying and other farm activities.",
    },
    {
      icon: Leaf,
      title: "Crop Management",
      description:
        "KrishiMitra helps farmers manage their crops and keep important crop-related information organized in one place.",
    },
    {
      icon: IndianRupee,
      title: "Market Price Awareness",
      description:
        "Access useful market and mandi-related information to help farmers understand current crop price trends.",
    },
    {
      icon: ShieldCheck,
      title: "Secure User Accounts",
      description:
        "User authentication with secure password handling allows farmers to maintain their own personalized accounts.",
    },
    {
      icon: Smartphone,
      title: "Simple & Accessible",
      description:
        "The platform is designed with a clean interface so that important agricultural information is easy to find and understand.",
    },
    {
      icon: Database,
      title: "Centralized Information",
      description:
        "Different agricultural utilities and farmer information are brought together into a single digital platform.",
    },
  ];

  const highlights = [
    "Personalized farmer accounts",
    "Secure authentication system",
    "Crop information management",
    "Live weather information",
    "Agricultural market information",
    "Responsive web interface",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#004d3d]">

        {/* Decorative circles */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-emerald-400/10 blur-2xl" />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/60 border border-emerald-400/20 text-emerald-200 text-sm font-semibold mb-7">
              <Sprout size={17} />
              <span>SMART FARMING COMPANION</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Empowering Farmers with{" "}
              <span className="text-emerald-400">
                Better Information
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 text-lg sm:text-xl text-emerald-100/90 leading-relaxed max-w-3xl mx-auto">
              KrishiMitra is a smart farming companion designed to bring
              useful agricultural information and digital tools together in
              one simple and accessible platform for Indian farmers.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">

              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-400 text-[#003d30] font-bold hover:bg-emerald-300 transition-all shadow-lg"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-emerald-300/40 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="py-20 lg:py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left */}
            <div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
                <Sprout size={16} />
                ABOUT KRISHIMITRA
              </div>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Technology that works{" "}
                <span className="text-emerald-700">
                  for farmers
                </span>
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Agriculture depends heavily on timely and reliable
                information. Weather conditions, crop management and market
                information can directly influence farming decisions.
              </p>

              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                KrishiMitra aims to simplify access to such information by
                providing farmers with a single digital platform where they
                can manage their profile, access agricultural utilities and
                interact with useful farming services.
              </p>

            </div>


            {/* Right - Visual Card */}
            <div className="relative">

              <div className="absolute inset-0 bg-emerald-100 rounded-[2rem] rotate-3" />

              <div className="relative bg-[#004d3d] rounded-[2rem] p-8 sm:p-10 shadow-xl">

                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-400/20 mb-7">
                  <Tractor
                    size={34}
                    className="text-emerald-300"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  One Platform.
                </h3>

                <h3 className="text-2xl font-bold text-emerald-400">
                  Multiple Farming Utilities.
                </h3>

                <p className="mt-5 text-emerald-100/80 leading-relaxed">
                  From farmer accounts and crop management to weather and
                  agricultural information, KrishiMitra brings essential
                  digital utilities together in one place.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">

                  <div className="bg-white/10 rounded-xl p-4">
                    <CloudSun
                      size={23}
                      className="text-emerald-300"
                    />
                    <p className="mt-2 text-white font-semibold">
                      Weather
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4">
                    <Leaf
                      size={23}
                      className="text-emerald-300"
                    />
                    <p className="mt-2 text-white font-semibold">
                      Crops
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4">
                    <IndianRupee
                      size={23}
                      className="text-emerald-300"
                    />
                    <p className="mt-2 text-white font-semibold">
                      Market
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4">
                    <Users
                      size={23}
                      className="text-emerald-300"
                    />
                    <p className="mt-2 text-white font-semibold">
                      Farmers
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          MISSION
      ====================================================== */}
      <section className="py-20 lg:py-24 bg-slate-50">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
            OUR MISSION
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Making agricultural information easier to access
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Our goal is to build a practical digital companion for farmers
            that reduces the effort required to find useful agricultural
            information. KrishiMitra focuses on simplicity, accessibility
            and bringing relevant farming utilities together through
            technology.
          </p>

        </div>
      </section>


      {/* =====================================================
          FEATURES
      ====================================================== */}
      <section className="py-20 lg:py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
              WHAT KRISHIMITRA OFFERS
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Built around the needs of{" "}
              <span className="text-emerald-700">
                modern farmers
              </span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              The platform combines several useful digital features to
              create a more convenient farming experience.
            </p>

          </div>


          {/* Feature Cards */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group p-7 rounded-2xl border border-slate-200 bg-white hover:border-emerald-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                    <Icon
                      size={27}
                      className="text-emerald-700"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          WHY KRISHIMITRA
      ====================================================== */}
      <section className="py-20 lg:py-28 bg-[#004d3d]">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900 text-emerald-300 text-sm font-bold">
                WHY KRISHIMITRA
              </div>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Simple technology for{" "}
                <span className="text-emerald-400">
                  real farming needs
                </span>
              </h2>

              <p className="mt-6 text-lg text-emerald-100/80 leading-relaxed">
                KrishiMitra is designed with a simple idea — technology
                should make important agricultural information easier to
                access rather than make things complicated.
              </p>

            </div>


            {/* Right */}
            <div className="grid sm:grid-cols-2 gap-4">

              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-5 rounded-xl bg-white/10 border border-white/10"
                >
                  <CheckCircle2
                    size={21}
                    className="text-emerald-400 shrink-0 mt-0.5"
                  />

                  <span className="text-white font-medium">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}
      <section className="py-20 lg:py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
            TECHNOLOGY
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Powered by modern web technologies
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            KrishiMitra uses a modern full-stack architecture to provide
            secure authentication, responsive interfaces, database-driven
            functionality and integration with external agricultural
            services.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Mongoose",
              "JWT",
              "Tailwind CSS",
              "REST APIs",
            ].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-5xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-3xl bg-[#004d3d] px-7 py-14 sm:px-12 text-center">

            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-emerald-400/10" />
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
                Ready to explore KrishiMitra?
              </h2>

              <p className="mt-4 text-emerald-100/80 max-w-2xl mx-auto text-lg">
                Create your account and explore the digital tools designed
                to make agricultural information more accessible.
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
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-emerald-300/40 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  Contact Us
                </Link>

              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;