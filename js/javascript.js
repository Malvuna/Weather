import { gettLocation } from "./gettLocation.js";
import { gettCity } from "./gettCity.js";
import { gettCityForIp } from "./gettCityForIp.js";

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
let card = document.querySelector("#card");

//переменная newCity
let newCity = document.querySelector("#input");

// поле ввода
let inputCity = document.createElement("input");
inputCity.className = "input";
inputCity.type = "input";
inputCity.name = "inputName";
inputCity.onfocus = function () {
  this.value = "";
}; // функция очистки строки
inputCity.placeholder = "Type your city here";

// кнопка добавить
let buttonFind = document.createElement("button");
buttonFind.type = "button";
buttonFind.textContent = "Find";
buttonFind.className = "buttonFind";

//когда нажимаем кнопку Find запускаем функиию.
buttonFind.addEventListener("click", searchCity);

//сборка новой задачи
newCity.append(inputCity);
newCity.append(buttonFind);
//-------


async function searchCity() {
  // в переменно то что вводим в поиск
  let valueInput = inputCity.value;
  console.log(valueInput);

  //отправляем данные с задачей
  await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + valueInput + "&appid=8aa0d0dc998e6898dc73bbda1412a3cd", {

  })
    .then((data) => data.json()) // возвращенеие ответа от сервера
    .then((data) => {
      console.log(data);
    });
}

let textChange = document.querySelector("#idChange");

textChange.addEventListener("click", () => {

  card.classList.toggle("displayNone");
  newCity.classList.toggle("displayNone");
});