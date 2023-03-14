// Класс для управления заказом билета

class Ticket {
    constructor(row, col, status = 'empty') {
        this.row = row;
        this.col = col;

        this.status = status;
    }

    render () {
        this.node = document.createElement('div');
        this.node.className = this.status === 'empty' ? 'ticket ticket_empty' : 'ticket ticket_selected';
        this.node.textContent = `${this.row}-${this.col}`
        if (this.status === 'selected') 
            this.selected();
        if (this.status === 'ordered')
            this.order();
        this.node.addEventListener('click', () => {
            if (this.status === 'empty') 
                this.selected();
            else if (this.status === 'selected')
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

    order() {
        if (this.status === 'selected' || this.status === 'ordered') {
            this.status = 'ordered';
            this.node.classList.add('ticket_ordered');
            this.node.classList.remove('ticket_selected');
            this.node.classList.remove('ticket_empty');
            return true;
        }
    }
}