// Класс для переключения страниц с фильмами

class Page {
    constructor() {
        // Все фильмы
        this.movies = [
            new Movie('Королевство полной луны', '13:50'),
            new Movie('Бесподобный мистер Фокс', '15:00'),
            new Movie('Вверх', '10:00')
        ]

        // Индекс страницы фильма
        this.loadId();
    }


    render() {
        this.renderTabs();
        this.renderMovie();
    }
    
    // Метод рисует кнопки
    // по клику на которые пользователь
    // видит страницу фильма
    renderTabs() {
        for (let i = 0; i < this.movies.length; i++) {
            let movie = this.movies[i];
            
            /*  TODO: 
                Создай кнопку для каждого фильма
                По клику на кнопку 
                1. показывай страницу этого фильма
                2. запоминай её в localStorage
            */

            let button = document.createElement('button');
            button.textContent = movie.title;
            button.addEventListener('click', () => {
                movie.render();
                this.id = i;
                this.saveId();
            });
            MOVIES_NODE.append(button);
        }
    }

    // Метод выводит информацию о текущем фильме
    renderMovie() {
        this.loadId();
        this.movies[this.id].render();
    }

    // Сохранение в localStorage
    saveId() {
        localStorage.setItem('movieID', this.id);
    }

    // Чтение из localStorage
    loadId() {
        if (localStorage.getItem('movieID'))
            this.id = Number(localStorage.getItem('movieID'));
        else
            this.id = 0;
    }
}