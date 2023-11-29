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

export const getCurrentTime = (setCurrentTime) => {
    const currentHour = new Date().getHours();

    // console.log(currentHour);
};
