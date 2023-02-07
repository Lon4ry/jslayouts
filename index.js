let newTask = document.querySelector('.new-todo');
let tasksContainer = document.querySelector('.list-container');
let addButton = document.querySelector('.add-button');
let tasks = [
  `Дело 1`,
  `Дело 2`
];

for (let i = 0; i < tasks.length; i++)
  renderTask(i);

addButton.addEventListener('click', function () {
    tasks.push(newTask.value);
    renderTask(tasks.length-1);
});

function renderTask(i) {
  let newTask = document.createElement('li');

  newTask.classList.add('todo');
  newTask.append(document.createElement('span'));
  newTask.querySelector('span').textContent = tasks[i];
  newTask.append(document.createElement('button'));
  newTask.querySelector('button').textContent = 'X';

  newTask.addEventListener('click', function() {
    this.classList.toggle('done');
  })
  newTask.querySelector('button').addEventListener('click', function () {
    newTask.remove();
  });

  tasksContainer.append(newTask);
}