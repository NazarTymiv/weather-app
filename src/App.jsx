import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// helpers
import { getCurrentSeason, getCurrentTime } from "./helpers/getDateData";

// components
import HomePage from "./pages/HomePage";

const App = () => {
    const [conditions, setConditions] = useState("cloudy");
    const [currentSeason, setCurrentSeason] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        getCurrentSeason(setCurrentSeason);
        getCurrentTime(setCurrentTime);
    }, []);

    return (
        <div className="container">
            <img
                src={`/assets/backgrounds/cloudy-summer.jfif`}
                className="background"
            />

            <Routes>
                <Route
                    path="/"
                    element={<HomePage conditions={conditions} />}
                />
            </Routes>
        </div>
    );
};

export default App;
