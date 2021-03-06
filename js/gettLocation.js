import { newElement } from "./newElement.js";
import { gettCityForIp } from "./gettCityForIp.js";

// функция берет локацию и отправляет на сервер
async function gettLocation(latitude, longitude) {
  await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=33f3d3d2d94895db4810b85a8b2dabbf",
    {},
  )
    .then((data) => data.json()) // возвращенеие ответа от сервера
    .then((data) => {
      console.log(data);
      let letTemp = data.current.temp;
      let letClouds = data.current.weather[0].description;
      gettCityForIp().then((cityName) => {
        newElement(letTemp, letClouds, cityName);
      });
    });
}

export { gettLocation };
