import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// helpers
import { getCurrentSeason, getCurrentTime } from "./helpers/getDateData";
import { getLocation, getLocationName } from "./helpers/getLocation";

// components
import HomePage from "./pages/HomePage";

// api
import { getCurrentWeather } from "./api/api";

const App = () => {
    // weather string
    const [weatherString, setWeatherString] = useState(null);

    // Time Data
    const [currentSeason, setCurrentSeason] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);

    // Location Data
    const [location, setLocation] = useState(null);
    const [locationName, setLocationName] = useState(null);

    // Weather Data
    const [weatherData, setWeatherData] = useState(null);
    const [condition, setCondition] = useState(null);

    useEffect(() => {
        getCurrentSeason(setCurrentSeason);
        getLocation(setLocation);
    }, []);

    useEffect(() => {
        if (location) {
            getCurrentWeather(location).then((data) => {
                setWeatherData(data);

                setCondition(data.currentConditions.icon);

                getCurrentTime(setCurrentTime, {
                    sunrise: data.currentConditions.sunrise,
                    sunset: data.currentConditions.sunset,
                });
            });

            getLocationName(location, setLocationName);
        }
    }, [location]);

    useEffect(() => {
        if ((currentSeason, condition, currentTime)) {
            setWeatherString(
                `${currentSeason === "winter" ? "winter" : currentTime}-${
                    condition.split("-").length === 3
                        ? condition.split("-")[1]
                        : condition.split("-").length === 2
                        ? condition.split("-")[0]
                        : condition
                }`
            );
        }
    }, [currentSeason, condition, currentTime]);

    return (
        <div className="container" data-theme={weatherString && weatherString}>
            {weatherData && (
                <>
                    <img
                        src={`/assets/backgrounds/${weatherString}.jfif`}
                        className="background"
                    />

                    <Routes>
                        <Route
                            path="/"
                            element={
                                <HomePage
                                    locationName={locationName}
                                    weatherData={weatherData}
                                />
                            }
                        />
                    </Routes>
                </>
            )}
        </div>
    );
};

export default App;
