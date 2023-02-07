let container = document.querySelector(`.container`);

function renderAlien() {
  let newAlien = document.createElement('img')
  newAlien.src = './assets/alien.png';
  newAlien.classList.add(`alien`);
  newAlien.style.width = `20vw`;
  newAlien.style.left = `${getRandomInt(0, 80)}vw`;
  newAlien.style.top = `${getRandomInt(0, 50)}vh`;
  newAlien.addEventListener('click', function() {
    this.remove();
  });
  container.append(newAlien);
}

renderAlien();


// Создаёт случайные целые числа
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

