const yesBox = document.getElementById("yes");
const noBox = document.getElementById("no");

const drinkCoffee = () => {
    let today = new Date();
    let hours = today.getHours();
    if ((hours >= 10 && hours < 12) || (hours >= 14 && hours < 16)) {
        return true;
    } else {
        return false;
    }
};

const renderResult = (result) => {
    if (result) {
        yesBox.classList.remove("d-none");
    } else {
        noBox.classList.remove("d-none");
    }
};

renderResult(drinkCoffee());
