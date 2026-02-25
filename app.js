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
  saveCounter();

  // Toggle animation
  countBtn.classList.add("clicked");
  setTimeout(() => countBtn.classList.remove("clicked"), 300);
});

// TASK 3:
// Start timer when counting starts
const showTimer = document.getElementById("timer");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

function updateTimerDisplay() {
  const hours = Math.floor(secCount / 3600);
  const minutes = Math.floor((secCount % 3600) / 60);
  const seconds = secCount % 60;
  hour.textContent = hours.toString().padStart(2, "0");
  minute.textContent = minutes.toString().padStart(2, "0");
  second.textContent = seconds.toString().padStart(2, "0");
}

function startTimer() {
  timer = setInterval(() => {
    secCount++;
    updateTimerDisplay();
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
    pauseBtn.classList.add("paused");
  } else {
    isPaused = false;
    startTimer();
    pauseBtn.classList.remove("paused");
  }
});

// TASK 5:
// Stop timer
const stopBtn = document.getElementById("stopBtn");
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = 0;
  secCount = 0;
  updateTimerDisplay();
});

// TASK 6:
// Reset timer and counter
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = 0;
  secCount = 0;
  counter = 0;
  updateTimerDisplay();
  count.textContent = counter.toString().padStart(3, "0");
  saveCounter();
});

// TASK 7:
// Save counter in localStorage
function saveCounter() {
  localStorage.setItem("counter", counter.toString() || "0");
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

// Initialize
loadCounter();
