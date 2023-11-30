import DaysWeatherItem from "./DaysWeatherItem";

const DaysWeather = ({ daysWeatherList }) => {
    return (
        <div className="daysWeather">
            <div className="daysWeather__title">
                <h3 className="daysWeather__title-text">10-DAY FORECAST</h3>
            </div>
            <ul className="daysWeather__list">
                {daysWeatherList &&
                    daysWeatherList
                        .slice(0, 10)
                        .map((item, index) => (
                            <DaysWeatherItem key={index} weatherData={item} />
                        ))}
            </ul>
        </div>
    );
};

export default DaysWeather;
