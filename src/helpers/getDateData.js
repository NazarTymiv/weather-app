export const getCurrentSeason = (setCurrentSeason) => {
    const currentMonth = new Date().getMonth() + 1;

    setCurrentSeason(
        [12, 1, 2].includes(currentMonth)
            ? "winter"
            : [3, 4, 5].includes(currentMonth)
            ? "spring"
            : [6, 7, 8].includes(currentMonth)
            ? "summer"
            : [9, 10, 11].includes(currentMonth) && "autumn"
    );
};

export const getCurrentTime = (setCurrentTime, sunData) => {
    const currentHour = new Date().getHours();
    const sunrise = new Date(`July 21, 1983 ${sunData.sunrise}`).getHours();
    const sunset = new Date(`July 21, 1983 ${sunData.sunset}`).getHours();

    console.log(currentHour);

    if (currentHour >= sunrise && currentHour < 12) {
        setCurrentTime("morning");
    } else if (currentHour >= 12 && currentHour < sunset) {
        setCurrentTime("afternoon");
    } else if (currentHour >= sunset && currentHour < sunrise) {
        setCurrentTime("evening");
    }
};
