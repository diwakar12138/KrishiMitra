import FarmerImage from "../../assets/images/about-farmer.jpg";

function AuthLayout({ title, subtitle, children }) {
  return (
    <section className="min-h-screen bg-[#F8FAF7]">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Left Side */}

          <div className="hidden lg:flex flex-col justify-center bg-green-700 text-white p-12">

            <img
              src={FarmerImage}
              alt="Farmer"
              className="rounded-2xl mb-8 shadow-lg"
            />

            <h2 className="text-4xl font-bold">
              KrishiMitra
            </h2>

            <p className="mt-5 text-green-100 leading-8">
              Empowering Indian farmers with smart technology,
              weather updates, crop management and government
              schemes.
            </p>

          </div>

          {/* Right Side */}

          <div className="p-8 lg:p-14">

            <h2 className="text-4xl font-bold text-[#1B4332]">
              {title}
            </h2>

            <p className="text-gray-600 mt-3 mb-8">
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