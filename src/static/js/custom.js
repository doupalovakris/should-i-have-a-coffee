const yesBox = document.getElementById("yes");
const noBox = document.getElementById("no");

const drinkCoffee = () => {
    if (Math.random() >= 0.5) {
        return true;
    } else {
        return false;
    }
}

const renderResult = (result) => {
    if (result) {
        yesBox.classList.remove("d-none");
    } else {
        noBox.classList.remove("d-none");
    }
};

renderResult(drinkCoffee());
