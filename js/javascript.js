


//метод который показывает широту и долготу локации
navigator.geolocation.getCurrentPosition(position => {
    // console.log(position.coords.latitude)
    // console.log(position.coords.longitude)
    gettLocation(position.coords.latitude, position.coords.longitude)
   })


// функция берет локацию и отправляет на сервет обратно отдавая четатам
async function gettLocation(latitude, longitude) {
    await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=33f3d3d2d94895db4810b85a8b2dabbf", {
    })
      .then((data) => data.json()) // возвращенеие ответа от сервера
      .then((data) => {
        console.log(data);
        let letTemp = data.current.temp
        let letClouds = data.current.weather[0].description
    
        console.log(letTemp);
        console.log(letClouds);

        newElement(letTemp, letClouds)
      });
  }

  //-------- Температура
  //переменная для дива температуры
  let divTemp = document.querySelector("#idTemp")

  function newElement(letTemp, letClouds ) {
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