let container = document.querySelector(`.container`);

function renderAlien() {
  for (let i = 0; i < getRandomInt(5, 30); i++) {
    let newAlien = document.createElement('img')
    newAlien.src = './assets/alien.png';
    newAlien.classList.add(`alien`);
    newAlien.style.width = `${getRandomInt(3, 20)}vw`;
    newAlien.style.left = `${getRandomInt(0, 80)}vw`;
    newAlien.style.top = `${getRandomInt(0, 50)}vh`;
    newAlien.addEventListener('click', function() {
      this.remove();
      document.querySelector('.result').textContent = document.querySelectorAll('img').length
    });
    container.append(newAlien);
  }
  document.querySelector('.result').textContent = document.querySelectorAll('img').length
}

renderAlien();

setTimeout(timer, getRandomInt(5000, 10000));

function timer() {
  renderAlien();
  setTimeout(timer, getRandomInt(5000, 10000))
}



// Создаёт случайные целые числа
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

