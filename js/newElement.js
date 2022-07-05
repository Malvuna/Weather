

//функция отрисовывает температуру и облака
function newElement(letTemp, letClouds ) {

//переменная для дива температуры
 let divTemp = document.querySelector("#idTemp")

    // p для температуры
    let pTemp = document.createElement("p");
    pTemp.innerHTML = Math.round (letTemp-273) + " °C";

    //p для температуры кладем в див
    divTemp.append(pTemp);

//-------- Облака
    //переменная для дива облаков
  let divclouds = document.querySelector("#idClouds")

    // p для облаков
    let pСlouds= document.createElement("p");
    pСlouds.innerHTML = letClouds;

    //p для облаков кладем в див
    divclouds.append(pСlouds);
  }

  export {newElement}