let img = document.querySelector('.hypnosis');
let angle = 0, timer;

function onClick () {
    if (timer === undefined)
        start();
    else
        stop();
}

function start() {
    timer = setInterval(function() {
        angle += 10;
        img.style.transform = `rotate(${angle}deg)`;
    }, 100);
}

function stop() {
    clearInterval(timer);
    timer = undefined;
}

img.addEventListener('click', onClick)