// components
import DaysWeather from "./components/DaysWeather";
import HourlyWeather from "./components/HourlyWeather";
import MainWeatherInformation from "./components/MainWeatherInformation";

import "./style.css";

const HomePage = ({ conditions }) => {
    return (
        <div className="homePage">
            <MainWeatherInformation conditions={conditions} />

            <HourlyWeather />

            <DaysWeather />
        </div>
    );
};

export default HomePage;
