class Message {
    constructor(author, text) {
        this.author = author;
        this.text = text;
    }
    render(container) {
        let node = document.createElement('div');
        node.classList.add('message');
        node.innerHTML = `
            <p class="author">${this.author}</p> 
            <p class="text">${this.text}</p>
        `
        container.append(node);
    }
}
let messageText = document.querySelector('#message');
let container = document.querySelector('.messages');
let messageSubmit = document.querySelector('#send');

let loginPage = document.querySelector(`.login-page`);
let loginButton = loginPage.querySelector(`button`);
let loginInput = loginPage.querySelector(`input`);

let welcomePage = document.querySelector(`.welcome-page`);
let logoutButton = welcomePage.querySelector(`button`);

function render() {
    let username = localStorage.getItem('username');
    if (!username) {
        loginPage.classList.remove('hidden');
        welcomePage.classList.add('hidden');
    } else {
        container.innerHTML = ``;
        welcomePage.classList.remove('hidden');
        loginPage.classList.add('hidden');
        welcomePage.querySelector('span').textContent = username;
        let messages = !JSON.parse(localStorage.getItem('messages')) ? []:JSON.parse(localStorage.getItem('messages'));
        for (let i = 0; i < messages.length; i++) {
            messages[i] = new Message(messages[i].author, messages[i].text);
            if (messages[i].author === username) {
                messages[i].render(container);
            }
        }
    }
}

loginButton.addEventListener('click', function () {
    let username = loginInput.value;
    localStorage.setItem('username', username);
    render();
});

logoutButton.addEventListener('click', function () {
    localStorage.removeItem('username');
    render();
});

messageSubmit.addEventListener('click', function() {
    let message = new Message(localStorage.getItem('username'), messageText.value);
    let messages = !JSON.parse(localStorage.getItem('messages')) ? []:JSON.parse(localStorage.getItem('messages'));
    messages.push(message);
    message.render(container);
    localStorage.setItem('messages', JSON.stringify(messages));
});

render();
