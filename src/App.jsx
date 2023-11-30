import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// helpers
import { getCurrentSeason, getCurrentTime } from "./helpers/getDateData";

// components
import HomePage from "./pages/HomePage";

const App = () => {
    const [currentSeason, setCurrentSeason] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        getCurrentSeason(setCurrentSeason);
        getCurrentTime(setCurrentTime);
    }, []);

    return (
        <div className="container" data-theme="evening-cloudy">
            <img
                src={`/assets/backgrounds/cloudy-summer.jfif`}
                className="background"
            />

            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
};

export default App;
