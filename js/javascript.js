import { gettLocation } from "./gettLocation.js";
import { gettCity } from "./gettCity.js";
import { gettCityForIp } from "./gettCityForIp.js";
import { main } from "./newElement.js";
import { divCard } from "./newElement.js";
import { searchCity } from "./searchCity.js";

//метод который показывает широту и долготу локации
navigator.geolocation.getCurrentPosition(
  (position) => {
    // console.log(position.coords.latitude)
    // console.log(position.coords.longitude)
    gettLocation(position.coords.latitude, position.coords.longitude);
    gettCityForIp();
  },
  async function () {
    console.log("error"); // если не определяется то вызывает функцию погоды по городу
    gettCity();
  },
);

//-------БЛОК ПОИСКА ГОРОДА -------------------

//переменная всей карточки поиска города
export let divSearch = document.createElement("div");
divSearch.className = "divInput displayNone";
main.append(divSearch);

// поле ввода
export let inputCity = document.createElement("input");
divSearch.append(inputCity);
inputCity.className = "input";
inputCity.type = "input";
inputCity.name = "inputName";
inputCity.onfocus = function () {
  this.value = "";
}; // функция очистки строки
inputCity.placeholder = "Type your city here";

// кнопка Find
let buttonFind = document.createElement("button");
divSearch.append(buttonFind);
buttonFind.type = "button";
buttonFind.textContent = "Find";
buttonFind.className = "buttonFind";

//когда нажимаем кнопку Find запускаем функиию.
buttonFind.addEventListener("click", searchCity);

buttonFind.addEventListener("click", () => {
  // card.innerHTML = " ";
  divCard.classList.toggle("displayNone");
  divSearch.classList.toggle("displayNone");
});
//-------

//-------БЛОК ОШИБКИ -------------------

//переменная всей карточки поиска города
export let divError = document.createElement("div");
divError.className = "card ";
main.append(divError);

// поле текста
let textError = document.createElement("p");
divError.append(textError);
textError.className = "footer";
textError.innerHTML = "Ooops. Something went wrong.";

// кнопка Try again
let buttonTry = document.createElement("button");
divError.append(buttonTry);
buttonTry.type = "button";
buttonTry.textContent = "Try again";
buttonTry.className = "buttonFind";

// когда нажимаем кнопку Try скрываем это окно и показываем поиск по городу
buttonTry.addEventListener("click", () => {
  divError.classList.toggle("displayNone");
  divSearch.classList.toggle("displayNone");
});
//-------
