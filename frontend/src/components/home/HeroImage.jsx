import HeroFarmer from "../../assets/images/hero-farmer.png";

function HeroImage() {
  return (

    <div className="relative flex justify-center">

      {/* Green Blur */}

      <div className="absolute w-[520px] h-[520px] bg-green-200 rounded-full blur-[120px] opacity-30 top-10"></div>

      <img
        src={HeroFarmer}
        alt="Farmer"
        className="relative w-[650px] rounded-3xl shadow-2xl"
      />

      {/* Weather */}

      <div className="absolute top-6 left-0 bg-white rounded-2xl shadow-xl p-4">

        <h3 className="font-bold">

          🌤 Live Weather

        </h3>

        <p className="text-gray-500 text-sm">

          Sunny • 28°C

        </p>

      </div>

      {/* Crop */}

      <div className="absolute bottom-8 right-0 bg-white rounded-2xl shadow-xl p-4">

        <h3 className="font-bold">

          🌾 Healthy Crop

        </h3>

        <p className="text-gray-500 text-sm">

          Wheat Growing

        </p>

      </div>

      {/* Scheme */}

      <div className="absolute top-1/2 -left-8 bg-white rounded-2xl shadow-xl p-4">

        <h3 className="font-bold">

          🏛 PM Kisan

        </h3>

        <p className="text-gray-500 text-sm">

          New Scheme

        </p>

      </div>

    </div>

  );
}

export default HeroImage;