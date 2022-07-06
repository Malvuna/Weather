import { gettLocation } from "./gettLocation.js";
import { gettCity } from "./gettCity.js";
import { gettCityForIp } from "./gettCityForIp.js";
import { searchCity } from "./searchCity.js";

//метод который показывает широту и долготу локации
navigator.geolocation.getCurrentPosition(
  (position) => {
    // console.log(position.coords.latitude)
    // console.log(position.coords.longitude)
    gettLocation(position.coords.latitude, position.coords.longitude);
    gettCityForIp()
  },
  async function () {
    console.log("error"); // если не определяется то вызывает функцию погоды по городу
    gettCity()     
  },
);


//-------БЛОК ВВОД ГОРОДА -------------------
// переменная всей карточки с погодой
export let card = document.querySelector("#card");

//переменная всей карточки поиска города
let newCity = document.querySelector("#input");

// поле ввода
export let inputCity = document.createElement("input");
inputCity.className = "input";
inputCity.type = "input";
inputCity.name = "inputName";
inputCity.onfocus = function () {
  this.value = "";
}; // функция очистки строки
inputCity.placeholder = "Type your city here";

// кнопка Find
let buttonFind = document.createElement("button");
buttonFind.type = "button";
buttonFind.textContent = "Find";
buttonFind.className = "buttonFind";

//когда нажимаем кнопку Find запускаем функиию.
buttonFind.addEventListener("click", searchCity);

buttonFind.addEventListener("click", () => {
  // card.innerHTML = " ";
//   card.classList.toggle("displayNone");
//   newCity.classList.toggle("displayNone");
});


//сборка инпута и кнопки
newCity.append(inputCity);
newCity.append(buttonFind);
//-------КОНЕЦ БЛОК ВВОД ГОРОДА -------------------


// Надпись поменять город
let textChange = document.querySelector("#idChange");

// Событие на нажатие написи поменять город
// textChange.addEventListener("click", () => {
//   card.classList.toggle("displayNone");
//   newCity.classList.toggle("displayNone");
// });