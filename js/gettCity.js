import { gettLocation } from "./gettLocation.js";

async function gettCity() {
  await fetch("https://api.ipify.org?format=json", {})
    .then((data) => data.json())
    .then((data) => {
      // console.log(data);
      console.log(data.ip);
      gettCityTwo(data.ip);
    });
}

async function gettCityTwo(ip) {
  await fetch(
    "https://geo.ipify.org/api/v2/country?apiKey=at_OczVRgKPV70HeNULGYnThbKCZOv9F&ipAddress=" +
      ip,
    {
      method: "GET",
    },
  )
    .then((data) => data.json())
    .then((data) => {
      let city = data.location.region
      console.log(city);
      if (city == "Leningrad Oblast") {
        city = "Leningradskaya Oblast'";
      }
      // console.log(data);
      console.log(city)
      gettCityThree(city);
    });
}

async function gettCityThree(region) {
  await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      region +
      "&appid=8aa0d0dc998e6898dc73bbda1412a3cd",
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      gettLocation(data.coord.lat, data.coord.lon);
    });
}

export { gettCity };
