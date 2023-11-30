// components
import DaysWeather from "./components/DaysWeather";
import HourlyWeather from "./components/HourlyWeather";
import MainWeatherInformation from "./components/MainWeatherInformation";

import "./style.css";

const HomePage = () => {
    return (
        <div className="homePage">
            <MainWeatherInformation />

            <HourlyWeather />

            <DaysWeather />
        </div>
    );
};

export default HomePage;
