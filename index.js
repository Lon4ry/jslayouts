let audio = {
    'paths': ['./assets/insects.mp3', './assets/ocean.mp3', './assets/rain.mp3', './assets/sand.mp3', './assets/wind.mp3'],
};

audio.sounds = [];

for (let i = 0; i < audio.paths.length; i++) {
    document.querySelector(".container").innerHTML += 
        `<div class="sound">
            ${audio.paths[i].replace('./assets/', '')}
        </div>`;
    audio.sounds.push(new Audio(audio.paths[i]));
    audio.sounds[i].loop = true;
}

audio.elements = document.querySelectorAll('.sound');

for (let i = 0; i < audio.elements.length; i++) {
    audio.elements[i].addEventListener("click", function () {
        if (audio.sounds[i].paused) {
            audio.sounds[i].currentTime = 0;
            audio.sounds[i].play();
            audio.elements[i].classList.add('active');
        }
        else {
            audio.sounds[i].pause();
            audio.elements[i].classList.remove('active');
        }

        for (let k = 0; k < audio.sounds.length; k++)
            if (audio.sounds[k] !== audio.sounds[i]) {
                audio.sounds[k].pause();
                audio.elements[k].classList.remove('active');
            }
    });
}