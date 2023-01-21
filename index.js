let usernameInput = document.querySelector('.username');

let createButton = document.querySelector('.create');
let removeButton = document.querySelector('.delete');
let findButton = document.querySelector('.find');

let users = document.querySelector('.users');
let result = document.querySelector('.result');


createButton.addEventListener ('click', function() {
    if (find(usernameInput.value) == -1) {
        users.innerHTML += `<span class='user'>${users.querySelectorAll('.user').length+1}. ${usernameInput.value}<br/></span>`;
        result.textContent = `пользователь ${usernameInput.value} добавлен`;
    }
    else {
        result.textContent = `пользователь с именем ${usernameInput.value} уже существует`;
    }
    usernameInput.value = ``;
});

removeButton.addEventListener ('click', function() {
    if (find(usernameInput.value) != -1) {
        index = find(usernameInput.value);
        user = users.querySelectorAll('.user');
        for (let i = 0; i < user.length; i++) {
            if (i == index) {
                user[i].outerHTML = ``;
            }
        }
        user = users.querySelectorAll('.user');
        for (let i = 0; i < user.length; i++) {
            index = user[i].textContent.indexOf('.');
            user[i].innerHTML = String(i+1) + user[i].textContent.slice(index) + '<br/>';
        }
        result.textContent = `пользователь ${usernameInput.value} удалён`;
    }
    else {
        result.textContent = `пользователя с именем ${usernameInput.value} не существует`;
    }
    usernameInput.value = ``;
});

findButton.addEventListener('click', function () {
    if (find(usernameInput.value) != -1)
        result.textContent = `индекс пользователя - ${find(usernameInput.value)+1}`;
    else
        result.textContent = `такого пользователя не существует`;
    usernameInput.value = ``;
});


function find(text) {
    user = users.querySelectorAll('.user');
    if (user[0] !== undefined) {
        for (let i = 0; i < user.length; i++) {
            if (user[i].textContent.indexOf(text) != -1) {
                found = user[i].textContent.slice(user[i].textContent.indexOf(text));
                if (found === text)
                    return i;
            }
        }
    }
    return -1;
}