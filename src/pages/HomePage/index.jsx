// components
import { useEffect } from "react";
import DaysWeather from "./components/DaysWeather";
import HourlyWeather from "./components/HourlyWeather";
import MainWeatherInformation from "./components/MainWeatherInformation";

import "./style.css";

const HomePage = ({ locationName, weatherData }) => {
    useEffect(() => {
        console.log(weatherData);
    }, []);

    return (
        <div className="homePage">
            <MainWeatherInformation
                locationName={locationName}
                currentWeather={weatherData.currentConditions}
            />

            <HourlyWeather />

            <DaysWeather />
        </div>
    );
};

export default HomePage;
