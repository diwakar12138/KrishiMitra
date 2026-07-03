import {
  FaUsers,
  FaSeedling,
  FaCloudSun,
  FaUniversity,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "5000+",
    title: "Registered Farmers",
  },
  {
    icon: <FaSeedling />,
    number: "1200+",
    title: "Crop Records",
  },
  {
    icon: <FaCloudSun />,
    number: "24x7",
    title: "Weather Updates",
  },
  {
    icon: <FaUniversity />,
    number: "100+",
    title: "Govt Schemes",
  },
];

function Stats() {
  return (
    <section className="py-20 bg-green-700">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="text-center text-white"
            >

              <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center text-4xl">

                {item.icon}

              </div>

              <h2 className="text-5xl font-bold mt-6">

                {item.number}

              </h2>

              <p className="mt-3 text-green-100">

                {item.title}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;