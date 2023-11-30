import axios from "axios";

export const getLocation = (setLocation) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.log("Geolocation not supported");
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLocation({ latitude, longitude });
    }

    function error() {
        alert("Turn on geolocation pls...");
    }
};

export const getLocationName = (location, setLocationName) => {
    axios
        .get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyBNbxGit6QFdbdCplqGquw2YHfTfDH4BwQ`
        )
        .then((data) =>
            setLocationName(
                data.data.results[0].address_components.find((i) =>
                    i.types.includes("postal_town")
                ).long_name
            )
        );
};
