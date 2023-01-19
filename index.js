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

function draw(evt) {
  counter+=1;
  container.innerHTML += 
  `<div
    class="dot"
    style="top: ${evt.clientY-10}px; left: ${evt.clientX-10}px;">
    ${counter}
  </div>`;
};

// добавляй новые точки внутрь контейнера
let container = document.getElementById(`container`);

document.addEvent("click", function (evt) {
  counter = 0;
  if (document.listeners[1] == undefined) {
    document.addEvent('mousemove', draw);
  }
  else {
    document.removeEventListener(document.listeners[1].type, document.listeners[1].func);
    document.listeners.splice(1, 1);
  }
});

