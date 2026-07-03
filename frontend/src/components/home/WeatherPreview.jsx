import { FaCloudSun, FaTint, FaWind, FaMapMarkerAlt } from "react-icons/fa";

function WeatherPreview() {
  return (
    <section className="py-24 bg-[#F8FAF7]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="text-green-700 font-semibold uppercase tracking-wider">
              Weather Forecast
            </span>

            <h2 className="text-4xl font-bold mt-4 text-[#1B4332]">
              Stay Ahead with Live Weather Updates
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Get accurate weather forecasts, humidity, wind speed and rainfall
              predictions to plan your farming activities efficiently.
            </p>

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="flex justify-between items-center">

              <div>

                <h3 className="text-3xl font-bold text-[#1B4332]">
                  28°C
                </h3>

                <p className="text-gray-500">
                  Sunny
                </p>

              </div>

              <FaCloudSun className="text-6xl text-yellow-400" />

            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="flex items-center gap-3">

                <FaTint className="text-blue-500 text-2xl" />

                <div>

                  <p className="font-semibold">
                    Humidity
                  </p>

                  <p className="text-gray-500">
                    68%
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <FaWind className="text-green-700 text-2xl" />

                <div>

                  <p className="font-semibold">
                    Wind
                  </p>

                  <p className="text-gray-500">
                    12 km/h
                  </p>

                </div>

              </div>

              <div className="col-span-2 flex items-center gap-3">

                <FaMapMarkerAlt className="text-red-500 text-2xl" />

                <p className="font-medium">
                  Chandigarh, India
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