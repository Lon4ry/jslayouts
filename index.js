function draw(pixels, document) {
    art.document.innerHTML += `<span class="item ${pixels[pixels.length-1]}"></span>`
}

function change(new_pallete) {
    for (let pixel of document.querySelectorAll('.item')) {
        color = pixel.className.slice(pixel.className.indexOf('color'));
        pixel.classList.remove(color);
        switch (Number(color.slice(color.indexOf(color[5])))%3) {
            case 1:
                color = new_pallete[0];
                break;
            case 2:
                color = new_pallete[1];
                break;
            case 0:
                color = new_pallete[2];
                break;
        }
        pixel.classList.add(color);
    }
}


let colors = document.querySelectorAll('.item');

let pallete = ['color1', 'color2', 'color3'];

let art = {
    'document': document.querySelector('.pixels'),
    'colors': [] 
};

for (let color of colors) {
    color.addEventListener("click", function () {
        art.colors.push(color.className.slice(color.className.indexOf('color')));
        draw(art.colors);
    });
}

let changeButton = document.querySelector(`.changeButton`)

changeButton.addEventListener('click', function() {
    if (pallete[0] == 'color1') {
        pallete = ['color4', 'color5', 'color6'];
        change(pallete);
    }
    else {
        pallete = ['color1', 'color2', 'color3'];
        change(pallete);
    }
});