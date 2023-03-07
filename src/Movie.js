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

        for (let i = 0; i < ROWS; i++) {
            for (let k = 0; k < COLS; k++) {
                this.tickets[i][k].render();
            }
            let node = document.createElement('div');
            node.classList.add('line');
            TICKETS_NODE.append(node);
        }
    }

    createTickets () {
        this.tickets = matrixArray(ROWS, COLS);
        for (let i = 0; i < ROWS; i++)
            for (let k = 0; k < COLS; k++)
                this.tickets[i][k] = new Ticket(i+1, k+1);
    }
}