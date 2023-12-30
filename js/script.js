let heroes = [
  ["https://freepngimg.com/thumb/categories/2900.png", "ЧАЙКА", "1970"],
  ["https://freepngimg.com/thumb/categories/2897.png", "LAMBORGINI", "2012"],
];

// Function show cards
function displayCar() {
  let carContainer = document.getElementById("carContainer");
  carContainer.innerHTML = "";
  for (let i = 0; i < heroes.length; i++) {
    let heroDiv = document.createElement("div");
    heroDiv.classList.add("card");
    heroDiv.innerHTML = `<img src=${heroes[i][0]}><h3>${heroes[i][1]}</h3><p>${heroes[i][2]}</p>`;
    carContainer.appendChild(heroDiv);
  }
}

// Function add card
function addHero() {
  let imageInput = document.getElementById("imageInput");
  let nameInput = document.getElementById("carName");
  let classInput = document.getElementById("carYear");
  let newCar = [imageInput.value, nameInput.value, classInput.value];
  heroes.push(newCar);
  displayCar();

  imageInput.value = "";
  nameInput.value = "";
  classInput.value = "";
}

// Forms
const form = document.forms.addCar;
const carImage = form.elements.imageInput;
const carName = form.elements.carName;
const carYear = form.elements.carYear;
const studentEmail = "petrov.mikhail95@internet.ru";
const container = document.getElementById("carContainer");
let addCarBtn = document.querySelector("#addButton");
let errorText = document.querySelector("#errorText");
let cards;

fetch(
  `https://api-code.practicum-team.ru/heroes?_where[_or][0][studentEmail]=${studentEmail}&_where[_or][1][studentEmail]=`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    cards = data;
    renderCards(cards);
  })
  .catch((error) => console.error("Error:", error));

function renderCards(heroes) {
  container.innerHTML = "";

  for (let i = 0; i < heroes.length; i++) {
    let car = heroes[i];
    const cardHtml = `
    <div class="card-wrapper">
      <div class="card">
        <div class="card-img">
          <img src=${car.imageInput}>
        </div>
        <div class="card-img">
          <img src=${car.carName}>
        </div>
        <div class="card-img">
          <img src=${car.carYear}>
        </div>
      </div>
    </div>`;
    container.innerHTML += cardHtml;
  }
}

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addCarBtn.disabled = true;
  addCarBtn.textContent = "Отправка данных...";

  let newCar = {
    image: imageInput.value,
    name: nameInput.value,
    year: classInput.value,
    studentEmail: "petrov.mikhail95@internet.ru",
  };

  let newCarJSON = JSON.stringify(newCar);

  fetch("https://api-code.practicum-team.ru/heroes", {
    method: "POST",
    body: newCarJSON,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((e) => {
      errorText.textContent = "Возникла ошибка";
    })
    .finally(() => {
      addCarBtn.disabled = false;
      addCarBtn.textContent = "Добавить";
    });

  form.reset();
});

// Add new elements
let newElement = document.createElement("div");
document.body.appendChild(newElement);

// Initial display
displayCar();
