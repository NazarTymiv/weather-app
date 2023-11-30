import axios from "axios";

const KEY = "EVG4HYNFZ5V3EEG2F53PTFG9D";

const INSTANCE = axios.create({
    baseURL: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`,
});

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?unitGroup=metric&include=current&key=EVG4HYNFZ5V3EEG2F53PTFG9D&contentType=json

export async function getCurrentWeather(location) {
    const url = `/${location.latitude},${location.longitude}?unitGroup=metric&include=days%2Chours%2Ccurrent&key=${KEY}&contentType=json`;

    try {
        const response = await INSTANCE.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
