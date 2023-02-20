const form = document.getElementById("form");
const userInput = document.getElementById("enter-number");
const enter = document.getElementById("enter");
const showMsg = document.getElementById("show-msg");
const displayScore = document.getElementById("score");

let randomNumber = Math.trunc(Math.random() * 100 + 1);

let chance = 0;

enter.addEventListener("click", () => {

    let userChoice = userInput.value;
    userChoice = Number.parseInt(userChoice);

    userInput.value = "";

    if (userChoice > 100 || userChoice < 1) {
        showMsg.innerText = "You have entered an invalid number. Choose numbers between 1 & 100";
        ++chance;
    } else if (userChoice > randomNumber) {
        showMsg.innerText = "your number is higher than the actual number, try again";
        ++chance;
    } else if (userChoice < randomNumber) {
        showMsg.innerText = "your number is lower than the actual number, try again";
        ++chance;
    } else {
        showMsg.innerText = `you have picked the right number. Computer selected: ${randomNumber}`;
        if (chance > 25) {
            form.innerHTML = "You have used 25 chances. Refresh the page and try again"
        } else {
            displayScore.innerText = `Your score: ${25 - chance} / 25`;
        }
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userChoice = userInput.value;
    userChoice = Number.parseInt(userChoice);

    userInput.value = "";

    if (userChoice > 100 || userChoice < 1) {
        showMsg.innerText = "You have entered an invalid number. Choose numbers between 1 & 100";
        ++chance;
    } else if (userChoice > randomNumber) {
        showMsg.innerText = "your number is higher than the actual number, try again";
        ++chance;
    } else if (userChoice < randomNumber) {
        showMsg.innerText = "your number is lower than the actual number, try again";
        ++chance;
    } else {
        showMsg.innerText = `you have picked the right number. Computer selected: ${randomNumber}`;
        if (chance > 25) {
            form.innerHTML = "You have used 25 chances. Refresh the page and try again"
        } else {
            displayScore.innerText = `Your score: ${25 - chance} / 25`;
        }
        userInput.disabled = true;
        enter.disabled = true;
    }
});

