let weekdays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
let holiday = [[15, 31], ["День чая", "По понятным причинам"]];
let daysNode = document.querySelector(".days");

for (let i = 0; i < weekdays.length; i++) 
    daysNode.innerHTML += `<div class="day weekday">${weekdays[i]}</div>`;

for (let i = 28; i != 31; i++)
    daysNode.innerHTML += `<div class="day other">${i}</div>`;
for (let i = 1; i != 32; i++)
    if (holiday[0].indexOf(i) == -1)
        daysNode.innerHTML += `<div class="day current">${i}</div>`;
    else
        daysNode.innerHTML += `<div class="day holiday">${i}</div>`;
for (let i = 1; i != 2; i++)
    daysNode.innerHTML += `<div class="day other">${i}</div>`;

let holidays = document.querySelector(".holidays");
for (let i = 0; i < holiday[0].length; i++)
    holidays.innerHTML += `<p>${holiday[0][i]} декабря - ${holiday[1][i]}</p>`;