// Данные
let menu = {
    'Кофе': 'coffee',
    'Рыба': 'fish',
    'Картошка': 'fries',
    'Блины': 'pancakes',
    'Салат': 'salad',
    'Вок': 'wok'
}

// Задание 1: Вывести меню
let menuContainer = document.querySelector(`.menu-container`);

for (let item in menu) {
    let newMenuItem = document.createElement('div');
    newMenuItem.classList.add('menu-item');
    newMenuItem.innerHTML = `
        <img src="assets/${menu[item]}.png">
        <h5>${item}</h5>
    `
    menuContainer.append(newMenuItem);
}


// Задание 2: Класс заказа
let container = document.querySelector(`.orders-container`);

let id = 1;
class Order {
    constructor (title, image) {
        this.title = title;
        this.image = image;
        this.state = 'new';
        this.id = id++;
    }

    render () {
        let newOrder = document.createElement('div');
        newOrder.className = 'order-item new';
        newOrder.innerHTML = `
            <img src="./assets/${this.image}.png">
            <h5>${this.title}</h5>
            <p>Заказ #${this.id} создан</p>
        `
        newOrder.addEventListener('click', () => this.onClick());
        this.htmlElement = newOrder;
        container.append(newOrder);
    }

    onClick() {
        if (this.state == 'new')
            this.cook();
        else if (this.state == 'cook')
            this.ready();
        else if (this.state == 'ready')
            this.htmlElement.remove();
    }

    cook () {
        this.state = 'cook';
        this.htmlElement.classList.add('cook');
        this.htmlElement.classList.remove('new');
        this.htmlElement.querySelector('p').textContent = `Заказ #${this.id} готовится`;
    }

    ready () {
        this.state = 'ready';
        this.htmlElement.classList.add('ready');
        this.htmlElement.classList.remove('cook');
        this.htmlElement.querySelector('p').textContent = `Заказ #${this.id} готов`;
    }
}

// // Создание
// let order1 = new Order(`Блины`, `pancakes`);
// let order2 = new Order(`Салат`, `salad`);
// let order3 = new Order(`Кофе`, `coffee`);

// // Отрисовка
// order1.render();
// order2.render(); 
// order3.render();


// Задание 6: Добавить заказ
let button = document.querySelector(`#create-order`);
let input = document.querySelector(`#title`);
let result = document.querySelector(`#result`);

button.addEventListener('click', () => {
    result.textContent = ``;
    let flag = false;
    for (let i in menu) {
        if (i.toLowerCase().indexOf(input.value.toLowerCase()) != -1) {
            if (i.toLowerCase() === input.value.toLowerCase()) {
                result.textContent = ``;
                let order = new Order(i, menu[i]);
                order.render();
                flag = true;
            }
            else
                result.textContent = `Может вы имели ввиду '${i}'?`
        }
    }
    if (result.textContent == `` && !flag) {
        result.textContent = `Не найдено`;
    }
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max) + 1;
    return Math.floor(Math.random() * (max - min) + min);
  }