import React from "react";
import { useWeather } from '../context/Weather';

const ResultCard = () => {
    const weather = useWeather();
    return (
        <div className="result">
            <div className="result-container">
                <img src={`${weather.data?.current?.condition?.icon}`} alt="" className="icon" />
                <h2 className="city-name">{weather.data?.location?.name || 'Kolkata'}</h2>
                <h3 className="region">{weather.data?.location?.region || 'West Bengal'}</h3>
                <h3 className="country">{weather.data?.location?.country || 'India'}</h3>
                <h3 className="temparature">{weather.data?.current?.temp_c || '25'}°C</h3>
                <h3 className="condition">{weather.data?.current?.condition?.text || 'Shiny'}</h3>
            </div>
        </div>
    );
};

export default ResultCard;
