let template = ``;
function refresh_template() {
  error = false;
  date = new Date(dateInput.value);

  num = String(date.getDate());
  if (num[0] == '0')
    num = num[1];
  month = String(date.getMonth()); 
  switch (month) {
    case '0':
      month = 'января';
      break;
    case '1':
      month = 'ферваля';
      break;
    case '2':
      month = 'марта';
      break;
    case '3':
      month = 'апреля';
      break;
    case '4':
      month = 'мая';
      break;
    case '5':
      month = 'июня';
      break;
    case '6':
      month = 'июля';
      break;
    case '7':
      month = 'августа';
      break;
    case '8':
      month = 'сентября';
      break;
    case '9':
      month = 'октября';
      break;
    case '10':
      month = 'ноября';
      break;
    case '11':
      month = 'декабря';
      break;
    default:
      error = true;
  }
  year = String(date.getFullYear());
  hours = String(date.getHours());
  minutes = String(date.getMinutes());
  if (hours.length == 1)
    hours = `0${hours}`;
  if (minutes.length == 1)
    minutes = `0${minutes}`;
  time = hours + ":" + minutes;

  delete date;

  date = `<div class="card-footer text-muted">${num} ${month} ${year} ${hours}:${minutes}</div>`;

  if (date.indexOf("NaN") != -1 || textInput.value == ``)
    error = true;

  if (error) {
    alert("Ошибка");
    template = ``;
  }

  else {

    if (categoryInput.value == ``)
    categoryInput.value = 'Без категории';

    if (titleInput.value == ``)
        titleInput.value = 'Без названия'

    template = 
    `<div class="card">
      <div class="card-body">
        <h5 class="card-title">${titleInput.value}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${categoryInput.value}</h6>
        <p class="card-text">${textInput.value.replaceAll('\n', "<br>")}</p>
      </div>
    ${date}
    </div>`;
  }
}


let saveButton = document.querySelector(`#save`);
let textInput = document.querySelector(`#text`);
let titleInput = document.querySelector(`#title`);
let categoryInput = document.querySelector(`#category`);
let dateInput = document.querySelector(`#date`);
let notesNode = document.querySelector(`#notes`);
let wordCount = document.querySelector(`#word-count`)
let searchInput = document.querySelector(`#search`);
let searchButton = document.querySelector(`#search-start`)
let searchCancelButton = document.querySelector(`#search-cancel`);

let notes = document.querySelectorAll(`.card`);

wordCount.textContent = `0/140`;


saveButton.addEventListener("click", function() {
  refresh_template();
  if (template != ``) {
    notesNode.innerHTML += template;
    notes = document.querySelectorAll(`.card`);
    switch (categoryInput.value) {
      case "Срочное":
        notes[notes.length-1].classList.add("immediate");
      case "Учёба":
        notes[notes.length-1].classList.add("study");
      case 'Важное':
        notes[notes.length-1].classList.add("important");
      default:
        notes[notes.length-1].classList.add("card");
    notesNode.innerHTML = ``;
    for (let note of notes)
        notesNode.innerHTML += note.outerHTML;

    searchInput.value = ``;
    textInput.value = ``;
    titleInput.value = ``;
    categoryInput.value = ``;
    dateInput.value = ``;
    template = ``;
    wordCount.textContent = `0/140`;
    }
  }
});


textInput.addEventListener('input', function() {
    if (textInput.value.length > 140)
        textInput.value = textInput.value.slice(0,140);
    wordCount.textContent = `${textInput.value.length}/140`;
});

titleInput.addEventListener('input', function() {
    if (titleInput.value.length > 40)
        titleInput.value = titleInput.value.slice(0,40);
});

categoryInput.addEventListener('input', function() {
    if (categoryInput.value.length > 40)
        categoryInput.value = categoryInput.value.slice(0,40);
});


searchButton.addEventListener('click', function() {
    searchedNotes = [];
    if (searchInput.value.indexOf(' ') == -1) {
        for (let note of notes) {
            indStart = -1;
            foundType = -1;
            if (note.querySelector(`.card-text`).textContent.indexOf(`#${searchInput.value}`) != -1) {
                indStart = note.querySelector(`.card-text`).textContent.indexOf(`#${searchInput.value}`);
                foundType = `text`;
            }
            else if (note.querySelector(`.card-title`).textContent.indexOf(`#${searchInput.value}`) != -1) {
                indStart = note.querySelector(`.card-title`).textContent.indexOf(`#${searchInput.value}`);
                foundType = `title`;
            }
            else if (note.querySelector(`.card-subtitle`).textContent.indexOf(`#${searchInput.value}`) != -1) {
                indStart = note.querySelector(`.card-subtitle`).textContent.indexOf(`#${searchInput.value}`);
                foundType = `category`;
            }
            text = ``;
            switch (foundType) {
                case 'text':
                    text = note.querySelector(`.card-text`).textContent.slice(indStart);
                    break;
                case 'title':
                    text = note.querySelector(`.card-title`).textContent.slice(indStart);
                    break;
                case 'category':
                    text = note.querySelector(`.card-subtitle`).textContent.slice(indStart);
                    break;
            }

            if (text === `#${searchInput.value}` || text.indexOf(' ') == searchInput.value.length + 1)
                searchedNotes.push(note.cloneNode(true));
        }
        notesNode.innerHTML = ``;
        for (let found of searchedNotes) {
            for (let type of [`.card-text`, `.card-title`, `.card-subtitle`]) {
                if (found.querySelector(type).textContent.indexOf(`#${searchInput.value}`) != -1)
                    found.querySelector(type).innerHTML = found.querySelector(type).innerHTML.slice(0, found.querySelector(type).innerHTML.indexOf(`#${searchInput.value}`)) + `<span class='yellow'>#${searchInput.value}</span>` + found.querySelector(type).innerHTML.slice(found.querySelector(type).innerHTML.indexOf(`#${searchInput.value}`) + searchInput.value.length + 1)
            }
            notesNode.innerHTML += found.outerHTML;
        }
    }
    else {
        searchInput.value = ``;
        alert('Ошибка');
    }
});

searchCancelButton.addEventListener('click', function() {
    notesNode.innerHTML = ``;
    for (let note of notes)
        notesNode.innerHTML += note.outerHTML;
    searchInput.value = ``;
});