export const getWindDirection = (dir) => {
    return dir >= 0.0 && dir < 11.25
        ? "N"
        : dir >= 11.25 && dir < 22.5
        ? "NbE"
        : dir >= 22.5 && dir < 33.75
        ? "NNE"
        : dir >= 33.75 && dir < 45.0
        ? "NEbN"
        : dir >= 45.0 && dir < 56.25
        ? "NE"
        : dir >= 56.25 && dir < 67.5
        ? "NEbE"
        : dir >= 67.5 && dir < 78.75
        ? "ENE"
        : dir >= 78.75 && dir < 90.0
        ? "EbN"
        : dir >= 90.0 && dir < 101.25
        ? "E"
        : dir >= 101.25 && dir < 112.5
        ? "EbS"
        : dir >= 112.5 && dir < 123.75
        ? "ESE"
        : dir >= 123.75 && dir < 135.0
        ? "SEbE"
        : dir >= 135.0 && dir < 146.25
        ? "SE"
        : dir >= 146.25 && dir < 157.5
        ? "SEbS"
        : dir >= 157.5 && dir < 168.75
        ? "SSE"
        : dir >= 168.75 && dir < 180.0
        ? "SbE"
        : dir >= 180.0 && dir < 191.25
        ? "S"
        : dir >= 191.25 && dir < 202.5
        ? "SbW"
        : dir >= 202.5 && dir < 213.75
        ? "SSW"
        : dir >= 213.75 && dir < 225.0
        ? "SWbS"
        : dir >= 225.0 && dir < 236.25
        ? "SW"
        : dir >= 236.25 && dir < 247.5
        ? "SWbW"
        : dir >= 247.5 && dir < 258.75
        ? "WSW"
        : dir >= 258.75 && dir < 270.0
        ? "WbS"
        : dir >= 270.0 && dir < 281.25
        ? "W"
        : dir >= 281.25 && dir < 292.5
        ? "WbN"
        : dir >= 292.5 && dir < 303.75
        ? "WNW"
        : dir >= 303.75 && dir < 315.0
        ? "NWbW"
        : dir >= 315.0 && dir < 326.25
        ? "NW"
        : dir >= 326.25 && dir < 337.5
        ? "NWbN"
        : dir >= 337.5 && dir < 348.75
        ? "NNW"
        : dir >= 348.75 && dir < 360 && "NbW";
};
