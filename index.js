let template = ``;
function refresh_template() {
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
  }
  year = String(date.getFullYear());
  time = String(date.getHours()) + ":" + String(date.getMinutes());

  date = ` 
  <div class="card-footer text-muted">${num} ${month} ${year} ${time}</div>`;
   
  
  if (date.indexOf("NaN") != -1)
    date = ``;

  template = `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${titleInput.value}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${categoryInput.value}</h6>
      <p class="card-text">${textInput.value}</p>
    </div>
   ${date}
  </div>
`;
}

let saveButton = document.getElementById(`save`);
let textInput = document.getElementById(`text`);
let titleInput = document.getElementById(`title`);
let categoryInput = document.getElementById(`category`);
let dateInput = document.getElementById(`date`);
let notesNode = document.getElementById(`notes`);

let notes = [];

saveButton.addEventListener("click", function() {
  refresh_template();
  notesNode.innerHTML += template;
  notes += [{
    'title': titleInput.value,
    'text': textInput.value,
    'category': categoryInput.value,
    'date': dateInput.valueAsNumber,
  }];


  textInput.value = ``;
  titleInput.value = ``;
  categoryInput.value = ``;
  dateInput.value = ``;
  template = ``;
});

