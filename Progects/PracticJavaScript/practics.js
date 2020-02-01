const NameCar = {
  vw: ["Jetta", "Amarok", "Caddy", "Golf GT"],
  ford: ["Focus", "Mondeo", "Fiesta", "Mustang", "Fusion"],
  bmw: ["X5", "M8 Coupe", "X5 M", "Z4 Roadster"],
  mb: ["G-class", "Maybach", "C-class", "GLE-class"],
  toy: ["Camry", "Land Cruiser", "Prado"]
};

const brend = document.getElementById("brend");
const car = document.querySelector("#carName");
window.onload = selectBrend;
brend.onchange = selectBrend;

function selectBrend(ev) {
  car.innerHTML = "";
  let c = this.value || "vw",
    o;
  for (let i = 0; i < NameCar[c].length; i++) {
    o = new Option(NameCar[c][i], i, false, false);
    car.add(o);
  }
}

// ________________________________________________________________

for (let li of tree.querySelectorAll("li")) {
  let span = document.createElement("span");
  span.classList.add("show");
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.onclick = e => {
  if (event.target.tagName != "SPAN") return;

  let childrenContainer = event.target.parentNode.querySelector("ul");
  //eсли нет вложенных детей
  if (!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;

  if (childrenContainer.hidden) {
    event.target.classList.add("hide");
    event.target.classList.remove("show");
  } else {
    event.target.classList.add("show");
    event.target.classList.remove("hide");
  }
};

// _______________________________________________________

const dragAndDrop = () => {
  const card = document.querySelector(".js-card");
  const cells = document.querySelectorAll(".js-cell");

  const dragStart = function() {
    setTimeout(() => {
      this.classList.add("hide");
    }, 0);
  };

  const dragEnd = function() {
    this.classList.remove("hide");
  };

  const dragOver = function(evt) {
    evt.preventDefault();
  };

  const dragEnter = function() {
    this.classList.add("hovered");
    evt.preventDefault();
  };

  const dragLeave = function() {
    this.classList.remove("hovered");
  };

  const dragDrop = function() {
    this.append(card);
    this.classList.remove("hovered");
  };

  cells.forEach(cell => {
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("dragenter", dragEnter);
    cell.addEventListener("dragleave", dragLeave);
    cell.addEventListener("drop", dragDrop);
  });

  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
};

dragAndDrop();
