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

timer = setTimeout(function change() {
    if (animals.name.length != 0) {
        animalsDoc.text.textContent = 'Какое это животное?';
        i = getRandomInt(0, animals.name.length);
        setTimeout(function () {
            animalsDoc.text.textContent = animals.name[i];
            clearTimeout(self);
            timer = setTimeout(change, latency/2);
            animals.name.splice(i, 1);
        }, latency/2)
        animalsDoc.image.src = animals.path[i];
        animals.path.splice(i, 1);
    }
    else {
        timer = setTimeout(function() {
            animalsDoc.text.textContent = 'Конец';
            animalsDoc.image.src = './assets/the-end.png';
        }, latency/2);
    }
}, latency/2);