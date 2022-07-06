function headCityDraw(letCity) {
  //переменная для дива заголовка
  let divHead = document.querySelector("#idHead");

  // p для города
  let pCity = document.createElement("p");
  pCity.innerHTML = "Weather in " + letCity;

  //p для температуры кладем в див
  divHead.append(pCity);
}

export { headCityDraw };
