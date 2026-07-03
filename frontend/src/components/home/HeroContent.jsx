import { FaArrowRight } from "react-icons/fa";

function HeroContent() {
  return (
    <div>

      <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">

        🌾 Smart Farming Companion

      </span>

      <h1 className="text-6xl font-extrabold mt-8 leading-tight text-[#1B4332]">

        Empowering

        <br />

        <span className="text-green-700">
          Indian Farmers
        </span>

        <br />

        <span className="text-3xl text-gray-600 font-semibold">

          with Smart Technology

        </span>

      </h1>

      <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">

        Manage crops, monitor weather, explore government schemes,
        check market prices and improve farming using one intelligent platform.

      </p>

      <div className="flex gap-5 mt-10">

        <button className="flex items-center gap-3 bg-green-700 hover:bg-green-800 transition text-white px-8 py-4 rounded-xl shadow-lg">

          Get Started

          <FaArrowRight />

        </button>

        <button className="border-2 border-green-700 hover:bg-green-50 transition text-green-700 px-8 py-4 rounded-xl">

          Learn More

        </button>

      </div>

    </div>
  );
}

export default HeroContent;