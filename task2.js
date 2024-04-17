let timer; // Variable to hold the setInterval function
let isRunning = false; // Variable to track if the stopwatch is running
let lapCounter = 1; // Variable to track the lap count

let hours = 0,
    minutes = 0,
    seconds = 0;

// Function to start or pause the stopwatch
function startPause() {
  if (!isRunning) {
    timer = setInterval(updateDisplay, 1000); // Start the timer
    document.getElementById('startPauseBtn').textContent = 'Pause';
    isRunning = true;
  } else {
    clearInterval(timer); // Pause the timer
    document.getElementById('startPauseBtn').textContent = 'Start';
    isRunning = false;
  }
}

// Function to update the display with the elapsed time
function updateDisplay() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  document.querySelector('.display').textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

// Function to format time to add leading zero if less than 10
function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

// Function to reset the stopwatch
function reset() {
  clearInterval(timer);
  document.getElementById('startPauseBtn').textContent = 'Start';
  isRunning = false;
  hours = minutes = seconds = 0;
  document.querySelector('.display').textContent = '00:00:00';
  lapCounter = 1;
  document.getElementById('lapList').innerHTML = ''; // Clear lap list
}

// Function to record lap times
function recordLap() {
  if (isRunning) {
    const lapTime = document.querySelector('.display').textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = 'Lap ' + lapCounter + ': ' + lapTime;
    document.getElementById('lapList').appendChild(lapItem);
    lapCounter++;
  }
}