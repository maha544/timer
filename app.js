var initialTime;
var currentTime;
var elapsedTime = 0;
var intervalId;

function updateTime() {
    currentTime = new Date().getTime();
    elapsedTime = currentTime - initialTime;
    displayTime(elapsedTime);
}

var startBtn = document.getElementById("startimer");
startBtn.addEventListener('click', function () {
    var inputMints = document.getElementById('input').value;

    var minutes = parseFloat(inputMints);
    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter number for minutes!");
        return;
    }

    initialTime = new Date().getTime();
    clearInterval(intervalId);
    intervalId = setInterval(function () {
        updateTime();
        if (elapsedTime >= minutes * 60 * 1000) {
            clearInterval(intervalId);
            alert("Countdown reached " + minutes + " minutes!");
        }
    }, 100);
});

// Reset button
var resetBtn = document.getElementById("resetTimer");
resetBtn.addEventListener('click', function () {
    initialTime = new Date().getTime();
    elapsedTime = 0;
    displayTime(elapsedTime);
    clearInterval(intervalId);
});

// Display in HTML
function displayTime(time) {
    var formattedTime = formatTime(time);
    var minutesEle = document.getElementById('minutes');
    var secondsEle = document.getElementById('seconds');

    minutesEle.textContent = formattedTime.minutes;
    secondsEle.textContent = formattedTime.seconds;
}

function formatTime(milliseconds) {
    var totalSec = Math.floor(milliseconds / 1000);
    var minutes = Math.floor(totalSec / 60);
    var seconds = totalSec % 60;

    return {
        //ternary operator does work like if else statement
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds
    };
}




