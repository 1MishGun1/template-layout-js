let heroes = [
  ['https://freepngimg.com/thumb/categories/2900.png', 'ЧАЙКА', '1970'],
  ['https://freepngimg.com/thumb/categories/2897.png', 'LAMBORGINI', '2012'],
];

// Add new elements
let newElement = document.createElement('div');
document.body.appendChild(newElement);

// Function show cards
function displayCar() {
  let carContainer = document.getElementById('carContainer');
  carContainer.innerHTML = '';
  for (let i = 0; i < heroes.length; i++) {
    let heroDiv = document.createElement('div');
    heroDiv.classList.add('card');
    heroDiv.innerHTML = `<img src=${heroes[i][0]}><h3>${heroes[i][1]}</h3><p>${heroes[i][2]}</p>`;
    carContainer.appendChild(heroDiv);
  }
}

displayCar();

// Function add card
function addHero() {
  let imageInput = document.getElementById('imageInput');
  let nameInput = document.getElementById('carName');
  let classInput = document.getElementById('carYear');
  let newCar = [imageInput.value, nameInput.value, classInput.value];
  heroes.push(newCar);
  displayCar();

  imageInput.value = '';
  nameInput.value = '';
  classInput.value = '';
}

document.getElementById('addButton').addEventListener('click', addHero);
