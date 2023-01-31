import json from './assets/emojis.json' assert {type: 'json'};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let items = document.querySelectorAll(`.item`);
let button = document.querySelector(`button`);

button.addEventListener("click", play);
document.addEventListener("keydown", function (evt) {
    if (evt.key == ' ')
        play();
});



function play() {
    for (let item of items) {
        item.textContent = json.emojis[getRandomInt(0, json.emojis.length)].emoji;
    }
}