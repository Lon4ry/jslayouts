// Глобальные переменные

// Контейнер для вкладок с названиями фильмов
let MOVIES_NODE = document.querySelector(`.movies`);

// Название фильма
let TITLE_NODE = document.querySelector(`.tickets-title`);

// Места в кинотеатре
let TICKETS_NODE = document.querySelector(`.tickets`);

// Выбранные билеты
let SELECTED_NODE = document.querySelector(`.selected`);

// Контейнер для кнопки "Заказать"
let ORDER_BUTTON_NODE = document.querySelector(`.order-button`);

let COLS = 5;

let ROWS = 4;

// Global func

function matrixArray(rows,columns) {
    let arr = new Array();
    for (let i = 0; i < rows; i++) {
        arr[i] = new Array();
        for (let j=0; j < columns; j++) {
            arr[i][j] = null;
        }
    }
    return arr;
}