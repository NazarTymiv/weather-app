// components
import DaysWeather from "./components/DaysWeather";
import HourlyWeather from "./components/HourlyWeather";
import MainWeatherInformation from "./components/MainWeatherInformation";

import "./style.css";

const HomePage = ({ locationName, weatherData }) => {
    return (
        <div className="homePage">
            <MainWeatherInformation
                locationName={locationName}
                currentWeather={weatherData.currentConditions}
            />

            <HourlyWeather hourlyWeatherList={weatherData.days[0].hours} />

            <DaysWeather daysWeatherList={weatherData.days} />
        </div>
    );
};

export default HomePage;
