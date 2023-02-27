let pokemons = [
    {
      name: "Пикачу",
      img: "pikachu",
      description: `Спокойный и добрый. Использует электричество, удары хвоста и укусы острых зубов.`
    },
    {
      name: "Бульбазавр",
      img: "bullbasaur",
      description: `Самый спокойный и миролюбивый покемон, может быть лидером и заботиться о других.`
    },
    {
      name: "Джигглипафф",
      img: "jigglypuff",
      description: `Очаровательное существо, но если его обидеть, то надувает щёки, злится и даёт сдачи. Очень злопамятный!`
    },
    {
      name: "Мяут",
      img: "meowth",
      description: `Задиристый и наглый покемон. Гуляет по ночам и ворует блестящие предметы и монетки.`
    },
    {
      img: "psyduck",
      name: "Псайдак",
      description: `Добрый и наивный, прожорливый, глуповатый. После сильной головной боли создаёт мощную психическую атаку.`
    },
    {
      img: "eevee",
      name: "Иви",
      description: `Жизнерадостный и игривый покемон, отличный выбор для начинающего тренера.`
    }
];
for (let i = 0; i < pokemons.length; i++) {
    pokemons[i].render = function() {
        let node = document.createElement('div');
        let imageContainer = document.createElement('div');
        let descriptionContainer = document.createElement('div');

        node.classList.add('card');
        imageContainer.classList.add('images');
        descriptionContainer.classList.add('card-body');

        let heartImage = document.createElement('img');
        let avatarImage = document.createElement('img');
        
        heartImage.classList.add('heart');
        heartImage.src = `./assets/heart-fill.svg`;
        avatarImage.classList.add('avatar');
        avatarImage.src = `./assets/${this.img}.png`;

        imageContainer.append(heartImage);
        imageContainer.append(avatarImage);
        node.append(imageContainer);
        delete imageContainer, heartImage, avatarImage;

        console.log(imageContainer);

        let descriptionTitle = document.createElement('h5');
        let description = document.createElement('p');

        descriptionTitle.classList.add('card-title');
        descriptionTitle.textContent = this.name;
        description.classList.add('card-text');
        description.textContent = this.description;

        descriptionContainer.append(descriptionTitle);
        descriptionContainer.append(description);
        node.append(descriptionContainer);
        delete descriptionContainer, descriptionTitle, description;

        node.addEventListener('click', function () {
            this.classList.toggle('card_like');
        });

        document.querySelector('.pokemon-container').append(node);
        delete node;
    };
    pokemons[i].render();
}
