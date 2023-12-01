export const getCurrentTime = (setCurrentTime, sunData) => {
    const currentHour = new Date().getUTCHours();
    const sunrise = new Date(`July 21, 1983 ${sunData.sunrise}`).getUTCHours();
    const sunset = new Date(`July 21, 1983 ${sunData.sunset}`).getUTCHours();

    if (currentHour >= sunrise && currentHour < 12) {
        setCurrentTime("morning");
    } else if (currentHour >= 12 && currentHour < sunset) {
        setCurrentTime("afternoon");
    } else if (currentHour >= sunset || currentHour < sunrise) {
        setCurrentTime("evening");
    }
};
