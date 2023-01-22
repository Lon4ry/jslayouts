let input = document.querySelector(`#seconds`);
let start = document.querySelector(`#start`);
let group = document.querySelector(`.group`);

start.addEventListener('click', function onClick() {
    input.readOnly = true;
    start.disabled = true;
    if (Number(input.value) === Math.floor(Number(input.value)) && !isNaN(input.value)) {
        msec = Number(input.value) * 1000;
        group.classList.add('active');
        audio = new Audio('./assets/tick.wav');
        start.style.cursor = `default`;
        input.style.cursor = `default`;
        timer = setTimeout(function timecounter() {
            if (msec > 0) {
                audio.currentTime = 0;
                audio.play();
                msec -= 1000;
                input.value = msec/1000;
                input.readOnly = true;
                start.disabled = true;
                timer = setTimeout(timecounter, 1000)
            }
            else {
                audio.pause();
                audio = new Audio('./assets/organ.mp3')
                audio.play();
                start.textContent = `⏰`;
                setTimeout(function (){
                    start.textContent = `Пуск`;
                    start.style.cursor = `pointer`;
                    input.style.cursor = `cursor`;
                    input.readOnly = false;
                    start.disabled = false;
                    input.value = ``;
                    group.classList.remove('active');
                }, 10000);
                interval = undefined;
            }
        }, 1000);
    }
    else 
        start.disabled = false;
        input.readOnly = false;
        input.value = ``;
});