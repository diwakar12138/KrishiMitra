import {
  FaLeaf,
  FaCloudSun,
  FaUniversity,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf />,
    title: "Crop Management",
    desc: "Easily manage your crops, monitor growth and keep farming records in one place.",
  },
  {
    icon: <FaCloudSun />,
    title: "Live Weather",
    desc: "Get real-time weather updates to plan irrigation and harvesting efficiently.",
  },
  {
    icon: <FaUniversity />,
    title: "Government Schemes",
    desc: "Explore the latest government schemes and subsidies available for farmers.",
  },
  {
    icon: <FaChartLine />,
    title: "Market Prices",
    desc: "Stay updated with daily mandi prices to maximize your profits.",
  },
];

function Features() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-green-700 font-semibold uppercase tracking-wider">
            Our Features
          </span>

          <h2 className="text-4xl font-bold mt-3 text-[#1B4332]">
            Why Choose KrishiMitra?
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Everything a farmer needs in one modern platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-[#F8FAF7] rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl text-green-700">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-semibold mt-6">

                {feature.title}

              </h3>

              <p className="text-gray-600 mt-4 leading-7">

                {feature.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;