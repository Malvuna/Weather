import { divSearch } from "./javascript.js";

// переменная для main
export let main = document.querySelector("#main");

// переменная для card
export let divCard = document.createElement("div");

//функция отрисовывает карточку с температурой и облаками
function newElement(letTemp, letClouds, cityName) {
  divCard.className = "card";

  //переменная для  температуры
  let pTemp = document.createElement("p");
  pTemp.className = "temp";
  pTemp.innerHTML = Math.round(letTemp - 273) + " °C";

  // переменная для облаков
  let pСlouds = document.createElement("p");
  pСlouds.className = "clouds";
  pСlouds.innerHTML = letClouds + " in " + cityName;

  // переменная для Change
  let pChange = document.createElement("p");
  pChange.className = "change";
  pChange.innerHTML = "Change city";

  // Событие на нажатие написи поменять город
  pChange.addEventListener("click", () => {
    divCard.classList.toggle("displayNone");
    divSearch.classList.toggle("displayNone");
  });

  // кладем переменные в main
  main.append(divCard);
  divCard.append(pTemp);
  divCard.append(pСlouds);
  divCard.append(pChange);
}

export { newElement };
