export const getWeatherDataForCity = async (cityname) => {
  const weatherData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=77845435e2ad47bbacd183308241709&q=${cityname}&aqi=no`
  );
  return await weatherData.json();
};
