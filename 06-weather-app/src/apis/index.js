const baseUrl =
  "http://api.weatherapi.com/v1/current.json?key=77845435e2ad47bbacd183308241709&q=";

const fetchWeatherData = async (query) => {
  try {
    const response = await fetch(`${baseUrl}${query}&aqi=no`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    throw error; // You can handle this error in your calling function
  }
};

export const getWeatherDataForCity = async (cityname) => {
  return fetchWeatherData(cityname);
};

export const getWeatherDataForCityByLocation = async (lat, long) => {
  return fetchWeatherData(`${lat},${long}`);
};
