import { useEffect, useState } from "react";
import { getCondition } from "../../../helpers/getCondition";
import PickIcon from "../../../helpers/PickIcon";

const DaysWeatherItem = ({ weatherData }) => {
    const [weatherIcon, setWeatherIcon] = useState(null);

    useEffect(() => {
        setWeatherIcon(getCondition(weatherData.icon));
    }, []);

    return (
        <li className="daysWeather__item">
            <a href="#">
                <p className="daysWeather__item-day">
                    {new Date(weatherData.datetime).getUTCDate() ===
                    new Date().getUTCDate()
                        ? "Today"
                        : new Date(weatherData.datetime)
                              .toUTCString()
                              .split(" ")
                              .slice(0, 1)
                              .join(" ")
                              .slice(0, -1)}
                </p>

                {weatherIcon && <PickIcon condition={weatherIcon} />}

                <div className="daysWeather__item-temps">
                    <span className="daysWeather__item-temp daysWeather__item-temp--min">
                        {Math.round(weatherData.tempmin)} °
                    </span>
                    <div className="daysWeather__item-humidity">
                        <div
                            className="daysWeather__item-humidity--line"
                            style={{ width: `${weatherData.humidity}%` }}
                        ></div>
                    </div>
                    <span className="daysWeather__item-temp daysWeather__item-temp--max">
                        {Math.round(weatherData.tempmax)} °
                    </span>
                </div>
            </a>
        </li>
    );
};

export default DaysWeatherItem;
