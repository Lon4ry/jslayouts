let counter = document.querySelector('.number');

counter.textContent = 5;
setTimeout(function timer() {
    counter.textContent--;
    if (counter.textContent == 1) {
        setTimeout(function () {
            document.querySelector('.rocket').classList.remove('hidden');
            counter.outerHTML = ``;
        }, 1000);
    }
    else 
        setTimeout(timer, 1000);
    
}, 1000);