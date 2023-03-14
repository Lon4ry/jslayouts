// Класс для управления сеансом фильма

class Movie {
    constructor(title, time) {
        this.title = title;
        this.time = time;

        this.createTickets();
    }

    // Метод рисует страницу фильма
    render() {
        TITLE_NODE.innerHTML = `${this.title} — ${this.time}`;

        SELECTED_NODE.innerHTML = ``;

        TICKETS_NODE.innerHTML = ``;

        ORDER_BUTTON_NODE.innerHTML = ``;

        let ordered = localStorage.getItem(this.title);

        if (ordered) {
            ordered = JSON.parse(ordered);
            for (let i = 0; i < ordered.length; i++) {
                this.tickets[ordered[i].row-1][ordered[i].col-1].status = 'ordered';
            }
        }

        for (let i = 0; i < ROWS; i++) {
            for (let k = 0; k < COLS; k++) {
                this.tickets[i][k].render();
            }
            let node = document.createElement('div');
            node.classList.add('line');
            TICKETS_NODE.append(node);
        }

        let button = document.createElement('button');
        button.textContent = `Забронировать`;
        button.classList.add('order');
        button.addEventListener('click', () => {
            if (SELECTED_NODE.querySelectorAll('p').length > 0) {
                SELECTED_NODE.innerHTML = `Ваш заказ принят!`;
                let ordered = [];
                for (let i = 0; i < ROWS; i++)
                    for (let k = 0; k < COLS; k++) 
                        if (this.tickets[i][k].order())
                            ordered.push(this.tickets[i][k]);
                localStorage.setItem(this.title, JSON.stringify(ordered));
            }
        })
        ORDER_BUTTON_NODE.append(button);
    }

    createTickets () {
        this.tickets = matrixArray(ROWS, COLS);
        for (let i = 0; i < ROWS; i++)
            for (let k = 0; k < COLS; k++)
                this.tickets[i][k] = new Ticket(i+1, k+1);
    }
}