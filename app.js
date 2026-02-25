// TASK 1:
// Create counter variable
let counter = 0;
let timer = 0;
let secCount = 0;

// TASK 2:
// Increase counter when count button clicked
const countBtn = document.getElementById("countBtn");
let count = document.getElementById("count");
countBtn.addEventListener("click", () => {
  if (timer === 0) {
    startTimer();
  }
  counter++;
  count.textContent = counter.toString().padStart(3, "0");
});

// TASK 3:
// Start timer when counting starts
const showTimer = document.getElementById("timer");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

function startTimer() {
  timer = setInterval(() => {
    secCount++;
    const hours = Math.floor(secCount / 3600);
    const minutes = Math.floor((secCount % 3600) / 60);
    const seconds = secCount % 60;
    hour.textContent = hours.toString().padStart(2, "0");
    minute.textContent = minutes.toString().padStart(2, "0");
    second.textContent = seconds.toString().padStart(2, "0");
  }, 1000);
}

// TASK 4:
// Pause timer
let isPaused = false;
const pauseBtn = document.getElementById("pauseBtn");
pauseBtn.addEventListener("click", () => {
  if (isPaused === false) {
    isPaused = true;
    clearInterval(timer);
  } else {
    isPaused = false;
    startTimer();
  }
});

// TASK 5:
// Stop timer
const stopBtn = document.getElementById("stopBtn");
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = 0;
  secCount = 0;
  hour.textContent = "00";
  minute.textContent = "00";
  second.textContent = "00";
});

// TASK 6:
// Reset timer and counter
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = 0;
  secCount = 0;
  counter = 0;
  hour.textContent = "00";
  minute.textContent = "00";
  second.textContent = "00";
  count.textContent = "00";
});

// TASK 7:
// Save counter in localStorage
function saveCounter() {
  localStorage.setItem("counter", counter);
}

// TASK 8:
// Load counter on page load
function loadCounter() {
  const savedCounter = localStorage.getItem("counter");
  if (savedCounter !== null) {
    counter = parseInt(savedCounter);
    count.textContent = counter.toString().padStart(3, "0");
  }
}
