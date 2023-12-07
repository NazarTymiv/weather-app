import { useEffect, useState } from "react";
import { getWindDirection } from "../../../helpers/getWindDirection";

const WeatherWind = ({ currentWeather: { winddir, windgust, windspeed } }) => {
    const [windDir, setWindDir] = useState(null);

    useEffect(() => {
        setWindDir(getWindDirection(winddir));
    }, []);

    return (
        <div className="weatherWind information__block">
            <div className="information__block-title">
                <h3 className="information__block-title--text">WIND</h3>
            </div>
            <div className="weatherWind__content">
                <div className="weatherWind__info">
                    <div className="weatherWind__info-item">
                        <span className="weatherWind__info-item--number">
                            {Math.round(windspeed)}
                        </span>
                        <div className="weatherWind__info-item--meters">
                            <span className="weatherWind__info-item--meter">
                                MPH
                            </span>
                            <span className="weatherWind__info-item--type">
                                Wind
                            </span>
                        </div>
                    </div>
                    <div className="weatherWind__info-item--line"></div>
                    <div className="weatherWind__info-item">
                        <span className="weatherWind__info-item--number">
                            {Math.round(windgust)}
                        </span>
                        <div className="weatherWind__info-item--meters">
                            <span className="weatherWind__info-item--meter">
                                MPH
                            </span>
                            <span className="weatherWind__info-item--type">
                                Gusts
                            </span>
                        </div>
                    </div>
                </div>
                {windDir && (
                    <div className="weatherWind__dir">
                        <span>{winddir}°</span>
                        <span>{windDir}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherWind;
