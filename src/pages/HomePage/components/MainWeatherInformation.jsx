const MainWeatherInformation = ({ locationName, currentWeather }) => {
    return (
        <div className="mainInformation">
            <section className="mainInformation__dayTitle">
                <h3 className="mainInformation__dayTitle-text">Today</h3>
            </section>
            <section className="mainInformation__conditions">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="95"
                    height="72"
                    viewBox="0 0 95 72"
                    fill="none"
                >
                    <path d="M53.4395 18C68.0747 18 76.375 27.444 77.5802 38.844H77.9483C87.3647 38.844 95 46.266 95 55.422C95 64.578 87.3647 72 77.9483 72H28.9307C19.5143 72 11.879 64.578 11.879 55.422C11.879 46.266 19.5143 38.844 28.9307 38.844H29.2988C30.516 27.366 38.8043 18 53.4395 18ZM37.9553 2.09133e-07C46.5999 2.09133e-07 54.1401 4.968 57.8627 12.27C56.3952 12.0882 54.918 11.998 53.4395 12C39.2496 12 28.907 19.842 25.214 31.716L24.8459 33L24.5728 34.122L23.5932 34.302C20.0077 35.04 16.6588 36.6634 13.8451 39.0274C11.0314 41.3913 8.84046 44.4223 7.4677 47.85C4.63927 46.1085 2.43416 43.5008 1.17292 40.4059C-0.088318 37.3111 -0.339947 33.8903 0.454612 30.641C1.24917 27.3917 3.04851 24.4831 5.59105 22.3382C8.13359 20.1932 11.2868 18.9236 14.5924 18.714L15.9104 18.684C16.8259 13.448 19.5374 8.70523 23.5688 5.28845C27.6002 1.87167 32.6938 -0.000722496 37.9553 2.09133e-07Z" />
                </svg>
                <p className="mainInformation__conditions-temp">
                    {Math.round(currentWeather.temp)} °
                </p>
            </section>
            <section className="mainInformation__description">
                <p className="mainInformation__description-title">Cloudy</p>
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