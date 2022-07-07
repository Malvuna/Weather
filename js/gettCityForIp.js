// функция получения названия города по IP
async function gettCityForIp() {
  return await fetch(
    "https://geo.ipify.org/api/v2/country?apiKey=at_k1srgs6BSmRfRRrcJY60twztQ7Vt6",
    {
      method: "GET",
    },
  )
    .then((data) => data.json())
    .then((data) => data.location.region);
}

export { gettCityForIp };
