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
        container.append(newOrder);
    }
}

// Создание
let order1 = new Order(`Блины`, `pancakes`);
let order2 = new Order(`Салат`, `salad`);
let order3 = new Order(`Кофе`, `coffee`);

// Отрисовка
order1.render();
order2.render();
order3.render();


// Задание 6: Добавить заказ
let button = document.querySelector(`#create-order`);
let input = document.querySelector(`#title`);