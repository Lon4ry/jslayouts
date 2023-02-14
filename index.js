let pokemon = {
    name: 'Пикачу',
    filename: 'pikachu.png',
    description: 'Спокойный и добрый. Использует электричество, удары хвоста и укусы острых зубов',
    container: document.querySelector('.pokemon-container')
};

pokemon.render = function() {
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
    avatarImage.src = `./assets/${this.filename}`;

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

    this.container.append(node);
    delete node;
};

pokemon.render();
