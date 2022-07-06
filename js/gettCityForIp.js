import { headCityDraw } from "./headCityDraw.js";

async function gettCityForIp() {
    await fetch(
      "https://geo.ipify.org/api/v2/country?apiKey=at_61iM0mo5Vtc36OG1SzfCNvt1hSUEc",
      {
        method: "GET",
      },
    )
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        // console.log(data.location.region)
        headCityDraw(data.location.region)
      });
  }


  export{ gettCityForIp }