// весь шпион целиком
let spy = document.querySelector(`#spy`);
// сюда выводи координаты мышки
let resultClick = document.querySelector(`#result-click`);
let resultType = document.querySelector(`#result-type`);

document.addEventListener("mousemove", function (evt) {
    resultClick.textContent = `${evt.clientX}px : ${evt.clientY}px`
});

document.addEventListener("click", function (evt) {
    spy.style.left = `${evt.clientX-Number(getComputedStyle(spy).width.slice(0,getComputedStyle(spy).width.indexOf('px')))*2/3}px`;
    spy.style.top = `${evt.clientY-Number(getComputedStyle(spy).height.slice(0,getComputedStyle(spy).height.indexOf('px')))*2/3}px`;
});

document.addEventListener('keydown', function (evt) {
    resultType.textContent = evt.key;
}); 

document.addEventListener('keyup', function() {
    resultType.textContent = '';
});