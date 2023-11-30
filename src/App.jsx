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
    // Time Data
    // const [currentSeason, setCurrentSeason] = useState(null);

    // Location Data
    const [location, setLocation] = useState(null);
    const [locationName, setLocationName] = useState(null);

    // Main Weather Data
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        // getCurrentSeason(setCurrentSeason);

        getLocation(setLocation);
    }, []);

    useEffect(() => {
        if (location) {
            getCurrentWeather(location).then((data) => {
                setWeatherData(data);
            });

            getLocationName(location, setLocationName);
        }
    }, [location]);

    return (
        <div className="container" data-theme="evening-cloudy">
            {weatherData && (
                <>
                    <img
                        src={`/assets/backgrounds/cloudy-summer.jfif`}
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
