function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let latency = 1 * 1000;

let animals = {
    'name': [`Лев`, `Лошадь`, `Корова`, `Слон`, `Ëж`, `Кролик`],
    'path': ['./assets/lion.png', './assets/horse.png', './assets/cow.png', './assets/elephant.png', './assets/hedgehog.png', './assets/rabbit.png']
};

let animalsDoc = {
    'image': document.querySelector('.image'),
    'text': document.querySelector('.text')
};

let timer = setInterval(function() {
    if (animals.name.length != 0 || animals.path.length != 0) {
        index = getRandomInt(0, animals.name.length);
        animalsDoc.text.textContent = animals.name[index];
        animalsDoc.image.src = animals.path[index];
        animals.name.splice(index, 1);
        animals.path.splice(index, 1);
    }
    else
        clearInterval(timer);
}, latency);

setInterval(function () {
    animalsDoc.text.textContent = `Конец`;
    animalsDoc.image.src = `./assets/the-end.png`;
}, latency*(animals.name.length+1));