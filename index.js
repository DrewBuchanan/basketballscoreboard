let homeScore = 0;
let guestScore = 0;

const homeScoreDisplay = document.getElementById("home-score");
const guestScoreDisplay = document.getElementById("guest-score");

setHomeScoreText();
setGuestScoreText();

function home(amount) {
    homeScore += amount;
    setHomeScoreText();
}

function guest(amount) {
    guestScore += amount;
    setGuestScoreText();
}

function setHomeScoreText() {
    homeScoreDisplay.textContent = homeScore;
}

function setGuestScoreText() {
    guestScoreDisplay.textContent = guestScore;
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    setHomeScoreText();
    setGuestScoreText();
}