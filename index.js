function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomMessage(array) {
    return array[getRandomInt(0, array.length)];
}

let future = [
    `Добро пожаловать в Гриффиндор!`,
    `Тебя ждёт большая удача`,
    `На обед будет что-то не вкусное`,
    `Одевайся теплей`,
    `Тебя ждёт финансовое благополучие`,
    `Отлично выспишься сегодня!`,
    `Домашку всё равно придётся сделать`,
    `Кто-то сделает тебе комплимент`,
    `Выходные пройдут отлично`,
    `Шляпа устала, предсказания не будет`
];

let hatText = document.querySelector(".hat h1");
let hatImg = document.querySelector(".hat img");

hatImg.addEventListener("click", function() {
    hatText.textContent = `${getRandomMessage(future)}`;
});