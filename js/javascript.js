import { gettLocation } from "./gettLocation.js";
import { gettCity } from "./gettCity.js";

//метод который показывает широту и долготу локации
navigator.geolocation.getCurrentPosition(
  (position) => {
    // console.log(position.coords.latitude)
    // console.log(position.coords.longitude)
    gettLocation(position.coords.latitude, position.coords.longitude);
  },
  async function () {
    console.log("error"); // если не определяется то вызывает функцию погоды по городу
  },
);

gettCity();

async function gettCityLoc() {
  await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=33f3d3d2d94895db4810b85a8b2dabbf",
    {},
  )
    .then((data) => data.json()) // возвращенеие ответа от сервера
    .then((data) => {
      console.log(data);

      // let letTemp = data.current.temp
      // let letClouds = data.current.weather[0].description

      // console.log(letTemp);
      // console.log(letClouds);

      // newElement(letTemp, letClouds)
    });
}
