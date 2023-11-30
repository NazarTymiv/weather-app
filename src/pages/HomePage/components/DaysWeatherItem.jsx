const DaysWeatherItem = ({ weatherData }) => {
    return (
        <li className="daysWeather__item">
            <a href="#">
                <p className="daysWeather__item-day">
                    {new Date(weatherData.datetime).getUTCDate() ===
                    new Date().getUTCDate()
                        ? "Today"
                        : new Date(weatherData.datetime)
                              .toUTCString()
                              .split(" ")
                              .slice(0, 1)
                              .join(" ")
                              .slice(0, -1)}
                </p>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 12"
                    fill="none"
                >
                    <path
                        d="M9.00034 3C11.4652 3 12.8632 4.574 13.0661 6.474H13.1281C14.7141 6.474 16 7.711 16 9.237C16 10.763 14.7141 12 13.1281 12H4.87254C3.28662 12 2.00068 10.763 2.00068 9.237C2.00068 7.711 3.28662 6.474 4.87254 6.474H4.93454C5.13953 4.561 6.53546 3 9.00034 3ZM6.39247 3.48556e-08C7.8484 3.48556e-08 9.11833 0.828 9.7453 2.045C9.49814 2.01469 9.24935 1.99967 9.00034 2C6.61046 2 4.86854 3.307 4.24657 5.286L4.18458 5.5L4.13858 5.687L3.97359 5.717C3.36972 5.84 2.80569 6.11057 2.33181 6.50456C1.85792 6.89855 1.48892 7.40372 1.25772 7.975C0.781351 7.68476 0.409964 7.25014 0.197545 6.73432C-0.0148746 6.21851 -0.0572543 5.64839 0.0765663 5.10683C0.210387 4.56528 0.513432 4.08052 0.94165 3.72303C1.36987 3.36553 1.90094 3.15394 2.45766 3.119L2.67965 3.114C2.83384 2.24133 3.29051 1.45087 3.96948 0.881408C4.64845 0.311945 5.50632 -0.000120416 6.39247 3.48556e-08Z"
                        fill="white"
                    />
                </svg>

                <div className="daysWeather__item-temps">
                    <span className="daysWeather__item-temp daysWeather__item-temp--min">
                        {Math.round(weatherData.tempmin)} °
                    </span>
                    <div className="daysWeather__item-humidity">
                        <div
                            className="daysWeather__item-humidity--line"
                            style={{ width: `${weatherData.humidity}%` }}
                        ></div>
                    </div>
                    <span className="daysWeather__item-temp daysWeather__item-temp--max">
                        {Math.round(weatherData.tempmax)} °
                    </span>
                </div>
            </a>
        </li>
    );
};

export default DaysWeatherItem;
