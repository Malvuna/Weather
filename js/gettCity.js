import { headCityDraw } from "./headCityDraw.js";

// функция возврата города

async function gettCity() {
    await fetch("https://geo.ipify.org/api/v2/country?apiKey=at_61iM0mo5Vtc36OG1SzfCNvt1hSUEc", {
    })
      .then((data) => data.json()) // возвращенеие ответа от сервера
      .then((data) => {
        console.log(data);
  
        let letCity = data.location.region
      
          console.log(letCity);
          headCityDraw (letCity)
  
      });
  }

  export {gettCity}