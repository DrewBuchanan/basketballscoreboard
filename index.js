let homeScore = 0;
let guestScore = 0;
let period = 1;

const homeScoreDisplay = document.getElementById("home-score");
const guestScoreDisplay = document.getElementById("guest-score");
const periodDisplay = document.getElementById("period");

setHomeScoreText();
setGuestScoreText();
setPeriodText();

function home(amount) {
    homeScore += amount;
    setHomeScoreText();
}

function guest(amount) {
    guestScore += amount;
    setGuestScoreText();
}

function incrementPeriod(amount) {
    period = Math.min(Math.max(period + amount, 1), 4);
    setPeriodText();
}

function setHomeScoreText() {
    homeScoreDisplay.textContent = homeScore;
}

function setGuestScoreText() {
    guestScoreDisplay.textContent = guestScore;
}

function setPeriodText() {
    periodDisplay.textContent = period;
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    period = 1;
    setHomeScoreText();
    setGuestScoreText();
    setPeriodText();
}