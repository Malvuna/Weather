// функция получения названия города по IP
async function gettCityForIp() {
  return await fetch(
    "https://geo.ipify.org/api/v2/country?apiKey=at_61iM0mo5Vtc36OG1SzfCNvt1hSUEc",
    {
      method: "GET",
    },
  )
    .then((data) => data.json())
    .then((data) => data.location.region);
}

export { gettCityForIp };
