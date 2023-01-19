Object.prototype.addEvent = function () {
  let args = Array.prototype.slice.call(arguments);
  
  if (this.listeners === undefined)
    this.listeners = [];

  this.listeners.push({
    'type': args[0],
    'func': args[1]
  });

  this.addEventListener.apply(this, args);
};

let backgroundColor = `#fffff`

function draw(evt) {
  counter+=1;
  container.innerHTML += 
  `<div
    class="dot"
    style="top: ${evt.clientY-10}px; left: ${evt.clientX-10}px; background-color: ${backgroundColor}">
    ${counter}
  </div>`;
};

// добавляй новые точки внутрь контейнера
let container = document.getElementById(`container`);

document.addEvent("keydown", function(evt) {
  switch (Number(evt.key)%5) {
    case 0:
      backgroundColor = `#fffff`;
      break;
    case 1:
      backgroundColor = `#E84855`;
      break;
    case 2:
      backgroundColor = `#ff9b71`;
      break;
    case 3:
      backgroundColor = `#fffd82`;
      break;
    case 4:
      backgroundColor = `#2b3a67`;
      break;
  }
});

document.addEvent("click", function (evt) {
  counter = 0;
  if (document.listeners[2] == undefined) {
    document.addEvent('mousemove', draw);
  }
  else {
    document.removeEventListener(document.listeners[2].type, document.listeners[2].func);
    document.listeners.splice(2, 1);
  }
});

