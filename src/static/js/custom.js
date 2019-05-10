const drinkCoffee = (sunrise, noon, sunset) => {
    let today = new Date();
    let currentHour = today.getHours();
    const morningStart = sunrise + 3;
    const morningEnd = noon;
    const afternoonStart = noon + 2;
    const afternoonEnd = sunset - 3;

    if (
        (currentHour >= morningStart && currentHour < morningEnd) ||
        (currentHour >= afternoonStart && currentHour < afternoonEnd)
    ) {
        return true;
    } else {
        return false;
    }
};

const renderResult = result => {
    if (result) {
        document.getElementById("yes").classList.remove("d-none");
    } else {
        document.getElementById("no").classList.remove("d-none");
    }
};

const getHourFromString = string => {
    return parseInt(string.split("T")[1].split(":")[0]);
};

const parseData = data => {
    renderResult(
        drinkCoffee(getHourFromString(data.sunrise), getHourFromString(data.solar_noon), getHourFromString(data.sunset))
    );
};

const getData = (latitude, longitude) => {
    return fetch("https://api.sunrise-sunset.org/json?lat=" + latitude + "&lng=" + longitude + "&formatted=0")
        .then(response => response.json())
        .then(data => parseData(data.results))
        .catch(error => console.error(error));
};

navigator.geolocation.getCurrentPosition(position => {
    getData(position.coords.latitude, position.coords.longitude);
});
