let heroes = [
  ["Axe", "Tank"],
  ["Crystal Maiden", "Support"],
];

// Add new elements
let newElement = document.createElement("div");
document.body.appendChild(newElement);

// Function show cards
function displayHeroes() {
  let heroesContainer = document.getElementById("heroesContainer");
  heroesContainer.innerHTML = "";
  for (let i = 0; i < heroes.length; i++) {
    let heroDiv = document.createElement("div");
    heroDiv.innerHTML = `<h3>${heroes[i][0]}</h3><p>${heroes[i][1]}</p>`;
    heroesContainer.appendChild(heroDiv);
  }
}
displayHeroes();

// Fnction add card
function addHero() {
  let nameInput = document.getElementById("heroName");
  let classInput = document.getElementById("heroClass");
  let newHero = [nameInput.value, classInput.value];
  heroes.push(newHero);
  displayHeroes();

  nameInput.value = "";
  classInput.value = "";
}

document.getElementById("addButton").addEventListener("click", addHero);
