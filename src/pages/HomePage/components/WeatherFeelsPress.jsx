import { useEffect, useState } from "react";

const WeatherFeelsPress = ({ currentWeather }) => {
    const [feelsLike, setFeelsLike] = useState(null);
    const [pressure, setPressure] = useState(null);

    useEffect(() => {
        setFeelsLike(Math.round(currentWeather.feelslike));
        setPressure(Math.round(currentWeather.pressure));
    }, []);

    return (
        <div className="weatherFeelsPress ">
            <div className="information__block">
                <div className="information__block-title">
                    <h3 className="information__block-title--text">
                        FEELS LIKE
                    </h3>
                </div>
                {feelsLike && (
                    <div className="weatherFeels">
                        <span className="weatherFeels__text">
                            {feelsLike > 0 ? `+${feelsLike}` : feelsLike} °
                        </span>
                    </div>
                )}
            </div>
            <div className="information__block">
                <div className="information__block-title">
                    <h3 className="information__block-title--text">PRESSURE</h3>
                </div>
                {pressure && (
                    <div className="weatherPress">
                        <span className="weatherPress__text">=</span>
                        <span className="weatherPress__text">
                            {pressure.toLocaleString("en-US", {
                                style: "decimal",
                                maximumFractionDigits: 2,
                            })}{" "}
                        </span>
                        <span className="weatherPress__text">mbar</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherFeelsPress;
