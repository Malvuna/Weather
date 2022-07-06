import { inputCity }  from "./javascript.js";
import { newElement }  from "./newElement.js";
import { card }  from "./javascript.js";

// Функция на кнопку Find отдает обратно местоположение
async function searchCity() {
    // в переменно то что вводим в поиск
    let valueInput = inputCity.value;
    console.log(valueInput);
  
    //отправляем данные
    await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + valueInput + "&appid=8aa0d0dc998e6898dc73bbda1412a3cd", {
    })
      .then((data) => data.json()) // возвращенеие ответа от сервера
      .then((data) => {
       // card.innerHTML = " ";
        // console.log(data);
        let letTemp = data.main.temp;
        let letClouds = data.weather[0].description
        
        newElement(letTemp, letClouds )
      });
  }

  export { searchCity }