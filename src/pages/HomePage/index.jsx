import { useEffect } from "react";

// components
import DaysWeather from "./components/DaysWeather";
import HourlyWeather from "./components/HourlyWeather";
import MainWeatherInformation from "./components/MainWeatherInformation";
import WeatherVisUVIdx from "./components/WeatherVisUVIdx";

import "./style.css";

const HomePage = ({ locationName, weatherData, condition, weatherString }) => {
    useEffect(() => {
        console.log(weatherData.days[0].hours);
        alert(
            JSON.stringify(
                weatherData.days[0].hours[weatherData.days[0].hours.length - 1]
            )
        );
    }, []);

    return (
        <div className="homePage">
            <MainWeatherInformation
                locationName={locationName}
                currentWeather={weatherData.currentConditions}
                condition={condition}
                weatherString={weatherString}
            />

            <HourlyWeather
                hourlyWeatherList={weatherData.days[0].hours}
                nextDayHourly={weatherData.days[1].hours}
            />

            <DaysWeather daysWeatherList={weatherData.days} />

            <WeatherVisUVIdx currentWeather={weatherData.days[0]} />
        </div>
    );
};

export default HomePage;
