import { headCityDraw } from "./headCityDraw.js";
import { gettLocation } from "./gettLocation.js";

async function gettCity() {
  await fetch("https://api.ipify.org?format=json", {})
    .then((data) => data.json())
    .then((data) => {
      // console.log(data);
      // console.log(data.ip);
      gettCityTwo(data.ip);
    });
}

async function gettCityTwo(ip) {
  await fetch(
    "https://geo.ipify.org/api/v2/country?apiKey=at_61iM0mo5Vtc36OG1SzfCNvt1hSUEc&ipAddress=" +
      ip,
    {
      method: "GET",
    },
  )
    .then((data) => data.json())
    .then((data) => {
      // console.log(data);
      // console.log(data.location.region)
      gettCityThree(data.location.region);
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
   
      headCityDraw(region);
      gettLocation(data.coord.lat, data.coord.lon);
    });
}

export { gettCity };
