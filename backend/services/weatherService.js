const axios = require("axios");

const getWeatherByCity = async (city) => {
  try {
    const apiKey = process.env.WEATHER_API_KEY;

    const query = `${city}, India`;

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(query)}&days=5&aqi=yes&alerts=yes`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log("========== WEATHER ERROR ==========");
    console.log(error.response?.data);
    console.log(error.message);
    console.log("===================================");

    throw new Error("Unable to fetch weather data.");
  }
};

module.exports = {
  getWeatherByCity,
};