import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Features from "../components/home/Features";
import WeatherPreview from "../components/home/WeatherPreview";
import Government from "../components/home/Government";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <WeatherPreview />
      <Government />
    </>
  );
}

export default Home;