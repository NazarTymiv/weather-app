import { useEffect, useState } from "react";
import HourlyWeatherItem from "./HourlyWeatherItem";

const HourlyWeather = ({ hourlyWeatherList, nextDayHourly }) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const indexTimeNow = hourlyWeatherList.findIndex(
            (item) =>
                new Date(`July 21, 2023 ${item.datetime}`).getUTCHours() ===
                new Date().getUTCHours()
        );

        setWeatherData(hourlyWeatherList.slice(indexTimeNow));
    }, []);

    useEffect(() => {
        // weatherData && console.log(weatherData.length);
    }, [weatherData]);

    return (
        <div className="hourlyWeather information__block">
            <section className="hourlyWeather__section">
                <ul className="hourlyWeather__list">
                    {weatherData &&
                        weatherData
                            .slice(0, 5)
                            .map((item, index) => (
                                <HourlyWeatherItem
                                    key={index}
                                    weatherData={item}
                                />
                            ))}
                </ul>
            </section>
            <div className="hourlyWeather__line"></div>
            <section className="hourlyWeather__section">
                <ul className="hourlyWeather__list">
                    {weatherData &&
                        weatherData
                            .slice(5)
                            .map((item, index) => (
                                <HourlyWeatherItem
                                    key={index}
                                    weatherData={item}
                                />
                            ))}
                </ul>
            </section>
        </div>
    );
};

export default HourlyWeather;
