function new_coordinats(old_pos, shift) {
    if (typeof old_pos === `string` && typeof shift === `number`) {
        coordinats = parse(old_pos) + shift;
        if (coordinats < 0)
            return '0px';
        else if (coordinats > 450)
            return '450px';
        else
            return String(coordinats) + 'px';
    }
}

function parse(a) {
    return Number(a.slice(0, a.indexOf('px')))
}


function logic(evt) {
    switch (evt.key.toLowerCase()) {
        case 'w':
            player.style.top = new_coordinats(player.style.top, -10);
            break;
        case 's':
            player.style.top = new_coordinats(player.style.top, 10);
            break;
        case 'a':
            player.style.left = new_coordinats(player.style.left, -10);
            break;
        case 'd':
            player.style.left = new_coordinats(player.style.left, 10);
            break;
    }
    player.colision = [{'y': parse(player.style.top), 'x': parse(player.style.left)},
                        {'y': parse(player.style.top) + parse(getComputedStyle(player).height), 'x': parse(player.style.left) + parse(getComputedStyle(player).width)}];
    counter = 0;
    for (let meat of food) {
        if ((player.colision[1].x >= meat.colision[0].x && player.colision[1].y >= meat.colision[0].y) && (player.colision[0].y <= meat.colision[1].y && player.colision[0].x <= meat.colision[1].x))
            meat.classList.add(`done`);
        if (meat.classList.contains(`done`))
            counter++;
    }
    if (counter == food.length) {
        game.textContent = 'Вы победили!';
        document.removeEventListener('keydown', logic);
    }
}


// знакомься, это поедатель
let player = document.getElementById(`player`);

// и его жертвы...
let food = document.querySelectorAll(`.food`);

for (let meat of food) {
    meat.colision = [{'x': parse(getComputedStyle(meat).left), 'y': parse(getComputedStyle(meat).top)},
                    {'x': parse(getComputedStyle(meat).left) + parse(getComputedStyle(meat).width), 'y': parse(getComputedStyle(meat).top) + parse(getComputedStyle(meat).height)}];
}

// поле для текста о правилах и конце игры
let game = document.getElementById(`game`);
let field = document.querySelector(`.field`);

player.style.top = '0px';
player.style.left = '0px';

document.addEventListener('keydown', logic);