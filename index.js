let task = document.querySelector('.new-todo');
let tasks_container = document.querySelector('.list-container');
let tasks = document.querySelectorAll('.todo');
let add_button = document.querySelector('.add-button');

add_button.addEventListener('click', function () {
    tasks_container.innerHTML += `<li class="todo"><span>${task.value}</span><button>X</button></li>`;
    tasks = document.querySelectorAll('.todo');
    for (let task of tasks) {
        task.querySelector('span').addEventListener('click', function() {
            this.parentElement.classList.toggle('done');
        });
    }
});

for (let task of tasks) {
    task.querySelector('span').addEventListener('click', function() {
        this.parentElement.classList.toggle('done');
    });
}