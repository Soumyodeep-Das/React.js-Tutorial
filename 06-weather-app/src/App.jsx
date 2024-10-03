import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import SearchButton from "./components/SearchButton";
import ResultCard from "./components/ResultCard";
import { useWeather } from "./context/Weather";
import { useEffect } from "react";

function App() {
  const weather = useWeather();
  console.log(weather);
  useEffect(() => {
    weather.fetchDataByLongAndLat();
  }, []);
  return (
    <div className="container">
      <NavBar />
      <SearchBar />
      <SearchButton onClick={weather.fetchData} />
      <ResultCard />
    </div>
  );
}

export default App;
