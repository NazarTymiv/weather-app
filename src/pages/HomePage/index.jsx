// components
import HourlyWeather from "./components/HourlyWeather";
import MainWeatherInformation from "./components/MainWeatherInformation";

import "./style.css";

const HomePage = ({ conditions }) => {
    return (
        <div className="homePage">
            <MainWeatherInformation conditions={conditions} />

            <HourlyWeather />
        </div>
    );
};

export default HomePage;
