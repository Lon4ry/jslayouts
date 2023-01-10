function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let hatText = document.querySelector(".hat h1");
let hatImg = document.querySelector(".hat img");

hatImg.addEventListener("click", function() {
    hatText.textContent = `Талон #${getRandomInt(1, 11)}`;
});