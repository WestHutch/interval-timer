startButt = document.getElementById("startButt");
timerTxt = document.getElementById("timerTxt");

const fartSound = new Audio('sounds/perfect-fart.mp3');
const bigFartSound = new Audio('sounds/fart-with-reverb.mp3');
let onOff = false;
let timerInterval;
let i = 0;
let secondsElapsed = 0;
let minutesElapsed = 0;
let hoursElapsed = 0;

startButt.addEventListener("click", ()=> {
    if (onOff) {
        onOff = false;
        startButt.textContent = "Start";
        clearInterval(timerInterval);
        secondsElapsed = 0;
        minutesElapsed = 0;
        hoursElapsed = 0;
    }
    else {
        onOff = true;
        startButt.textContent = "Stop";
        timerInterval = setInterval(() => {
            secondsElapsed++;
            if(secondsElapsed >= 60) {
                minutesElapsed++;
                secondsElapsed = secondsElapsed - 60;
                if(minutesElapsed%5 == 0) {
                    bigFartSound.play()
                }
                else {
                    fartSound.play()
                }
                if(minutesElapsed >= 60) {
                    hoursElapsed++;
                    minutesElapsed = minutesElapsed - 60;
                }
            }
            timerTxt.textContent = `${String(hoursElapsed).padStart(2,'0')}:${String(minutesElapsed).padStart(2,'0')}:${String(secondsElapsed).padStart(2,'0')}`
        }, 1000);
    }
    
});

startButt.addEventListener("mousedown", () => {
    startButt.style.width = "min(63vmin, 31.5vmax)"
    startButt.style.height = "min(63vmin, 31.5vmax)"
});
startButt.addEventListener("mouseup", () => {
    startButt.style.width = "min(70vmin, 35vmax)"
    startButt.style.height = "min(70vmin, 35vmax)"
});