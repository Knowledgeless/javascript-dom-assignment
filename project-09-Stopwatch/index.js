let stopwatch = document.querySelector("#stopwatch");
let startButton = document.querySelector("#startButton");
let stopButton = document.querySelector("#stopButton");
let resetButton = document.querySelector("#resetButton");

let startTime;
let elapsedTime = 0;
let timer;

startButton.addEventListener("click", () => {

    if (timer) return;

    // Resume from previous elapsed time
    startTime = Date.now() - elapsedTime;

    timer = setInterval(() => {

        elapsedTime = Date.now() - startTime;

        let hours = Math.floor(elapsedTime / 3600000);
        let minutes = Math.floor(elapsedTime / 60000) % 60;
        let seconds = Math.floor(elapsedTime / 1000) % 60;
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        stopwatch.innerText =
            `${String(hours).padStart(2, "0")}:` +
            `${String(minutes).padStart(2, "0")}:` +
            `${String(seconds).padStart(2, "0")}:` +
            `${String(milliseconds).padStart(2, "0")}`;

    }, 1); 

});

stopButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

resetButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    elapsedTime = 0;
    stopwatch.innerText = "00:00:00:00";
});