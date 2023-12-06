import { useEffect, useState } from "react";

// helpers
import { getCondition } from "../../../helpers/getCondition";
import PickIcon from "../../../helpers/PickIcon";

const HourlyWeatherItem = ({ weatherData }) => {
    const [weatherIcon, setWeatherIcon] = useState(null);

    useEffect(() => {
        setWeatherIcon(getCondition(weatherData.icon));
    }, []);

    return (
        <li className="hourlyWeather__item">
            <a href="#">
                <p className="hourlyWeather__item-time">
                    {new Date(
                        `July 21, 1983 ${weatherData.datetime}`
                    ).getUTCHours() === new Date().getUTCHours()
                        ? "Now"
                        : new Date(
                              `July 21, 2023 ${weatherData.datetime}`
                          ).toLocaleTimeString("en-US", {
                              timeZone: "UTC",
                              hour12: true,
                              hour: "numeric",
                          })}
                </p>
                <div className="hourlyWeather__item-data">
                    {weatherIcon && <PickIcon condition={weatherIcon} />}

                    <p className="hourlyWeather__item-temp">
                        {Math.round(weatherData.temp)} °
                    </p>
                </div>
            </a>
        </li>
    );
};

export default HourlyWeatherItem;
