import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// helpers
import { getCurrentTime } from "./helpers/getDateData";
import { getLocation, getLocationName } from "./helpers/getLocation";
import { getCondition } from "./helpers/getCondition";

// components
import HomePage from "./pages/HomePage";

// api
import { getCurrentWeather } from "./api/api";

const App = () => {
    // weather string
    const [weatherString, setWeatherString] = useState(null);

    // Time Data
    const [currentTime, setCurrentTime] = useState(null);

    // Location Data
    const [location, setLocation] = useState(null);
    const [locationName, setLocationName] = useState(null);

    // Weather Data
    const [weatherData, setWeatherData] = useState(null);
    const [condition, setCondition] = useState(null);

    useEffect(() => {
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
        if (condition && currentTime) {
            setWeatherString(`${currentTime}-${getCondition(condition)}`);
        }
    }, [condition, currentTime]);

    return (
        <div className="container" data-theme={weatherString && weatherString}>
            {weatherData && (
                <>
                    <img
                        src={`/assets/backgrounds/${
                            weatherString && weatherString
                        }.jfif`}
                        className="background"
                    />

                    <Routes>
                        <Route
                            path="/"
                            element={
                                <HomePage
                                    locationName={locationName}
                                    weatherData={weatherData}
                                    condition={condition}
                                    weatherString={weatherString}
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
