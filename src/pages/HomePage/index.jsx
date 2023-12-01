// components
import DaysWeather from "./components/DaysWeather";
import HourlyWeather from "./components/HourlyWeather";
import MainWeatherInformation from "./components/MainWeatherInformation";

import "./style.css";

const HomePage = ({ locationName, weatherData, condition }) => {
    // console.log(weatherData.days[0].hours, weatherData.days[1].hours);
    return (
        <div className="homePage">
            <MainWeatherInformation
                locationName={locationName}
                currentWeather={weatherData.currentConditions}
                condition={condition}
            />

            <HourlyWeather hourlyWeatherList={weatherData.days[0].hours} />

            <DaysWeather daysWeatherList={weatherData.days} />
        </div>
    );
};

export default HomePage;
