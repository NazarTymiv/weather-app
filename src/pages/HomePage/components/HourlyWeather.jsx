import { useEffect, useState } from "react";
import HourlyWeatherItem from "./HourlyWeatherItem";

const HourlyWeather = ({ hourlyWeatherList }) => {
    const [topWeatherData, setTopWeatherData] = useState(null);
    const [bottomWeatherData, setBottomWeatherData] = useState(null);

    useEffect(() => {
        const indexTimeNow = hourlyWeatherList.findIndex(
            (item) =>
                new Date(`July 21, 1983 ${item.datetime}`).getUTCHours() ===
                new Date().getUTCHours()
        );

        setTopWeatherData(
            hourlyWeatherList.slice(indexTimeNow, indexTimeNow + 5)
        );
        setBottomWeatherData(
            hourlyWeatherList.slice(indexTimeNow + 5, indexTimeNow + 10)
        );
    }, []);

    // console.log(topWeatherData, bottomWeatherData);

    return (
        <div className="hourlyWeather">
            <section className="hourlyWeather__section">
                <ul className="hourlyWeather__list">
                    {topWeatherData &&
                        topWeatherData.map((item, index) => (
                            <HourlyWeatherItem key={index} weatherData={item} />
                        ))}
                </ul>
            </section>
            <div className="hourlyWeather__line"></div>
            <section className="hourlyWeather__section">
                <ul className="hourlyWeather__list">
                    {bottomWeatherData &&
                        bottomWeatherData.map((item, index) => (
                            <HourlyWeatherItem key={index} weatherData={item} />
                        ))}
                </ul>
            </section>
        </div>
    );
};

export default HourlyWeather;
