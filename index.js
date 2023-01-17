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
  time = String(date.getHours()) + ":" + String(date.getMinutes());

  delete date;

  date = `<div class="card-footer text-muted">${num} ${month} ${year} ${time}</div>`;

  if (date.indexOf("NaN") != -1)
    error = true;

  if (error) {
    alert("Ошибка");
    template = ``;
  }
  else {
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

let notes = document.querySelectorAll(`.card`);


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
    }
  }

  textInput.value = ``;
  titleInput.value = ``;
  categoryInput.value = ``;
  dateInput.value = ``;
  template = ``;
});

