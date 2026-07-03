import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-lime-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <HeroContent />

          <HeroImage />

        </div>

      </div>

    </section>
  );
}

export default Hero;