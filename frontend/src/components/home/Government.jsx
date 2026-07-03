import government from "../../assets/images/government.jpg";
import {
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";

const schemes = [
  "PM Kisan Samman Nidhi",
  "PM Fasal Bima Yojana",
  "Kisan Credit Card",
  "Soil Health Card Scheme",
];

function Government() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <img
              src={government}
              alt=""
              className="rounded-3xl shadow-xl"
            />

          </div>

          {/* Right */}

          <div>

            <span className="text-green-700 font-semibold uppercase">
              Government Support
            </span>

            <h2 className="text-4xl font-bold mt-4 text-[#1B4332]">
              Discover Government Schemes
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Stay updated with the latest government initiatives,
              subsidies and financial assistance specially designed
              for Indian farmers.
            </p>

            <div className="space-y-5 mt-10">

              {schemes.map((scheme) => (

                <div
                  key={scheme}
                  className="flex items-center gap-4"
                >

                  <FaCheckCircle className="text-green-700" />

                  <p className="text-lg">

                    {scheme}

                  </p>

                </div>

              ))}

            </div>

            <button className="mt-10 flex items-center gap-3 bg-green-700 text-white px-8 py-4 rounded-xl hover:bg-green-800 transition">

              Explore Schemes

              <FaArrowRight />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Government;