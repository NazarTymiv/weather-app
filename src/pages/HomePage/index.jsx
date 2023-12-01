import { useEffect } from "react";

// components
import DaysWeather from "./components/DaysWeather";
import HourlyWeather from "./components/HourlyWeather";
import MainWeatherInformation from "./components/MainWeatherInformation";
import WeatherVisUVIdx from "./components/WeatherVisUVIdx";

import "./style.css";

const HomePage = ({ locationName, weatherData, condition }) => {
    useEffect(() => {
        // console.log(weatherData);
    }, []);

    return (
        <div className="homePage">
            <MainWeatherInformation
                locationName={locationName}
                currentWeather={weatherData.currentConditions}
                condition={condition}
            />

            <HourlyWeather hourlyWeatherList={weatherData.days[0].hours} />

            <DaysWeather daysWeatherList={weatherData.days} />

            <WeatherVisUVIdx currentWeather={weatherData.days[0]} />
        </div>
    );
};

export default HomePage;
