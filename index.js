let homeScore = 0;
let guestScore = 0;
let period = 1;

let minutes = 20;
let seconds = 0;
let timer;

const homeScoreDisplay = document.getElementById("home-score");
const guestScoreDisplay = document.getElementById("guest-score");
const periodDisplay = document.getElementById("period");
const timerDisplay = document.getElementById("timer");

setHomeScoreText();
setGuestScoreText();
setPeriodText();

function startClock() {
    timer = setInterval(clock, 1000);
}

function pauseClock() {
    clearInterval(timer);
}

function clock() {
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }
    if (minutes < 0) {
        minutes = 0;
        seconds = 0;
        pauseClock();
        alert("End of period");
    }

    timerDisplay.textContent = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

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