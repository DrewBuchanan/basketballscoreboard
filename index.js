let homeScore = 0;
let homeFouls = 0;
let guestScore = 0;
let guestFouls = 0;
let period = 1;

let minutes = 20;
let seconds = 0;
let timer;

const homeScoreDisplay = document.getElementById("home-score");
const homeFoulsDisplay = document.getElementById("home-fouls");
const homeLead = document.getElementById("home-lead");
const guestScoreDisplay = document.getElementById("guest-score");
const guestFoulsDisplay = document.getElementById("guest-fouls");
const guestLead = document.getElementById("guest-lead");
const periodDisplay = document.getElementById("period");
const timerDisplay = document.getElementById("timer");
const timerInput = document.getElementById("timer-input");
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");

pauseButton.active = false;

pauseClock();
calculateLead();
setHomeScoreText();
setGuestScoreText();
setPeriodText();

function setColorScheme(scheme) {
    console.log("scheme");
    document.body.className = "";
    if (scheme == 1) {
        document.body.classList = "originalpalette";
    }
    else if (scheme == 2) {
        document.body.className = "newpalette"
    }
}

function startClock() {
    timer = setInterval(clock, 1000);
    startButton.disabled = true;
    pauseButton.disabled = false;
}

function pauseClock() {
    clearInterval(timer);
    startButton.disabled = false;
    pauseButton.disabled = true;
}

function setClock() {
    if (!timerInput.checkValidity()) {
        alert("Invalid time. Please enter a time in the form of mm:ss");
        return;
    }
    
    const times = timerInput.value.split(":");
    minutes = times[0];
    seconds = times[1];
    setClockText();
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
        var audio = new Audio('audio/buzzer.mp3');
        audio.play();
        alert("End of period");
    }

    setClockText();
}

function setClockText() {
    timerDisplay.textContent = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

function home(amount) {
    homeScore += amount;
    setHomeScoreText();
    calculateLead();
}

function guest(amount) {
    guestScore += amount;
    setGuestScoreText();
    calculateLead();
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

function setHomeFoulsText() {
    homeFoulsDisplay.textContent = homeFouls;
}

function setGuestFoulsText() {
    guestFoulsDisplay.textContent = guestFouls;
}

function reset() {
    homeScore = 0;
    homeFouls = 0;
    guestScore = 0;
    guestFouls = 0;
    period = 1;
    minutes = 0;
    seconds = 0;

    pauseClock();
    setClockText();
    setHomeScoreText();
    setHomeFoulsText();
    setGuestScoreText();
    setGuestFoulsText();
    setPeriodText();
    calculateLead();
}

function incrementHomeFouls(amount) {
    homeFouls = Math.min(Math.max(homeFouls + amount, 0), 99);
    setHomeFoulsText();
}

function incrementGuestFouls(amount) {
    guestFouls = Math.min(Math.max(guestFouls + amount, 0), 99);
    setGuestFoulsText();
}

function calculateLead(){
    if (homeScore > guestScore) {
        homeLead.textContent = "◀";
        guestLead.textContent = "▷";
    }
    else if (guestScore > homeScore) {
        homeLead.textContent = "◁";
        guestLead.textContent = "▶";
    }
    else {
        homeLead.textContent = "◁";
        guestLead.textContent = "▷";
    }
}