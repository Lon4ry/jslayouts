let btn = document.getElementById("togglebtn");
let light = document.getElementById("light");
let body = document.getElementsByTagName("body")[0];
let bright = `https://my.informatics.ru/media/ck_uploads/titova_m/2022/12/06/free-icon-invention-5092845.png`;
let dark = `https://my.informatics.ru/media/ck_uploads/titova_m/2022/12/06/free-icon-invention-5092935-1.png`;

body.classList.add("dark");
btn.classList.add("darkbtn");

btn.addEventListener("click", function () {
    if (btn.textContent == "Включить") {
        btn.textContent = "Выключить";
        light.innerHTML = `<img src="${bright}" alt="">`;
        body.classList.toggle("dark");
        body.classList.toggle("bright");
        btn.classList.toggle("darkbtn");
        btn.classList.toggle("brightbtn");
    }
    else {
        btn.textContent = "Включить";
        light.innerHTML = `<img src="${dark}" alt="">`;
        body.classList.toggle("dark");
        body.classList.toggle("bright");
        btn.classList.toggle("darkbtn");
        btn.classList.toggle("brightbtn");
    }
});