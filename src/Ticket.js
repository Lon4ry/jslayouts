// Класс для управления заказом билета

class Ticket {
    constructor(row, col) {
        this.row = row;
        this.col = col;

        this.status = 'empty';
    }

    render () {
        this.node = document.createElement('div');
        this.node.className = this.status === 'empty' ? 'ticket ticket_empty' : 'ticket ticket_selected';
        this.node.textContent = `${this.row}-${this.col}`
        if (this.status === 'selected') 
            this.selected();
        this.node.addEventListener('click', () => {
            if (this.status === 'empty') {
                this.selected();
            }
            else 
                this.empty();
        });
        TICKETS_NODE.append(this.node);
    }

    selected() {
        this.status = 'selected';
        this.node.classList.add('ticket_selected');
        this.node.classList.remove('ticket_empty');
        this.paragraph = document.createElement('p');
        this.paragraph.textContent = `Ряд ${this.row} место ${this.col}`;
        SELECTED_NODE.append(this.paragraph);
    }

    empty() {
        this.status = 'empty';
        this.node.classList.add('ticket_empty');
        this.node.classList.remove('ticket_selected');
        this.paragraph.remove();
    }
}