import PickIcon from "../../../helpers/pickIcon";

const MainWeatherInformation = ({
    locationName,
    currentWeather,
    condition,
    weatherString,
}) => {
    return (
        <div className="mainInformation">
            <section className="mainInformation__dayTitle">
                <h3 className="mainInformation__dayTitle-text">
                    Today <br /> {new Date().toUTCString().slice(16, 22)}
                </h3>
            </section>
            <section className="mainInformation__conditions">
                {weatherString && (
                    <PickIcon condition={weatherString.split("-")[1]} />
                )}

                <p className="mainInformation__conditions-temp">
                    {Math.round(currentWeather.temp)} °
                </p>
            </section>
            <section className="mainInformation__description">
                <p className="mainInformation__description-title">
                    {condition[0].toUpperCase() +
                        condition.split("-").join(" ").slice(1)}
                </p>
                <p className="mainInformation__description-text">
                    {locationName}
                </p>
                <p className="mainInformation__description-text">
                    {new Date().toUTCString().split(" ").slice(1, 4).join(" ")}
                </p>
                <p className="mainInformation__description-text">
                    Feels like {Math.round(currentWeather.feelslike)} ° | Sunset{" "}
                    {currentWeather.sunset.slice(0, 5)}
                </p>
            </section>
        </div>
    );
};

export default MainWeatherInformation;
