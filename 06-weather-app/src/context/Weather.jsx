import { createContext, useContext, useState } from "react";
import {
  getWeatherDataForCity,
  getWeatherDataForCityByLocation,
} from "../apis";
const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");

  const fetchData = async () => {
    const response = await getWeatherDataForCity(city);
    setData(response);
  };

  const fetchDataByLongAndLat = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataForCityByLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };
  return (
    <WeatherContext.Provider
      value={{ city, data, fetchData, setCity, fetchDataByLongAndLat }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
