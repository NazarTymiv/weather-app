import { useEffect, useState } from "react";

const WeatherVisUVIdx = ({ currentWeather }) => {
    const [uvIndex, setUvIndex] = useState(null);
    const [visibility, setVisibility] = useState(null);

    useEffect(() => {
        setUvIndex(Math.round(currentWeather.uvindex));
        setVisibility(Math.round(currentWeather.visibility));
    }, []);

    return (
        <div className="weatherVisUVIdx">
            <div className="information__block">
                <div className="information__block-title">
                    <h3 className="information__block-title--text">
                        VISIBILITY
                    </h3>
                </div>
                {visibility && (
                    <div className="weatherVisUVIdx__Vis">
                        <span className="weatherVisUVIdx__number">
                            {visibility} mi
                        </span>
                    </div>
                )}
            </div>
            <div className="information__block">
                <div className="information__block-title">
                    <h3 className="information__block-title--text">UV INDEX</h3>
                </div>
                {uvIndex && (
                    <div className="weatherVisUVIdx__UV">
                        <span className="weatherVisUVIdx__number">
                            {uvIndex}
                        </span>
                        <p className="weatherVisUVIdx__text">
                            {uvIndex <= 1 || !uvIndex
                                ? "Low"
                                : uvIndex > 1 && uvIndex <= 3
                                ? "Moderate"
                                : uvIndex > 3 && uvIndex <= 6
                                ? "High"
                                : uvIndex < 6 && uvIndex <= 8
                                ? "Very High"
                                : uvIndex > 8 && "Extreme"}
                        </p>
                        <div className="weatherVisUVIdx__UV-progressbar">
                            <div
                                className="weatherVisUVIdx__UV-progressbar--line"
                                style={{
                                    width: `${Math.round(
                                        (uvIndex / 11) * 100
                                    )}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherVisUVIdx;
