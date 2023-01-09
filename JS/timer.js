window.onload = () => {
    // Minutes for timer
    let minutesAllowed = 1;
    const SECONDSPERMINUTE = 60;

    // Calculate time in seconds
    let testTime = minutesAllowed * SECONDSPERMINUTE;

    let timerDisp = document.querySelector("#timer");
    startTimer(testTime, timerDisp);
}

const startTimer = (duration, display) => {
    var minutes, seconds;
    var timeLeft = duration;

    var timer = setInterval(() => {
        minutes = parseInt(timeLeft / 60);
        seconds = parseInt(timeLeft % 60);

        // If minutes or seconds is less than 10, append 0 to the front
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        // Update timer display
        display.innerText = `${minutes}:${seconds}`;

        if (--timeLeft < 0) clearInterval(timer);
    }, 1000);
}