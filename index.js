let start = document.querySelector(`.search-start`);
let finish = document.querySelector(`.search-finish`);
let input = document.querySelector(`.search`);

let searchContainer = document.querySelector(`.search-container`);
let bagContainer = document.querySelector(`.bag-container`);

let bag = {
    'летучая мышь': 'bat',
    'часы': 'clock',
    'ключи': 'key',
    'зелье': 'potion',
    'книга заклинаний': 'spellbook'
};
bag.renderAll = function() {
    for (let i in this)
        if (this[i].prototype === undefined)
            this.render(this[i]);
}

bag.render = function (item) {
    let node = document.createElement('div');
    node.classList.add('item');
    node.innerHTML = `<img src="assets/${item}.png">`;
    bagContainer.append(node);
}

bag.renderAll();

start.addEventListener('click', function() {
    bagContainer.innerHTML = ``;
    for (let i in bag) 
        if (i === input.value) {
            searchContainer.classList.add('search-container_ok');
            searchContainer.classList.remove('search-container_fail');
            bag.render(bag[input.value]);
            delete bag[input.value];
        }
    if (bagContainer.innerHTML === ``) {
        searchContainer.classList.add('search-container_fail');
        searchContainer.classList.remove('search-container_ok');
    }
});

finish.addEventListener('click', function() {
    bagContainer.innerHTML = ``;
    bag.renderAll();
    input.value = '';
    searchContainer.classList.remove('search-container_ok');
    searchContainer.classList.remove('search-container_fail');
});