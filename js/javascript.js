import { gettLocation } from "./gettLocation.js";
import { gettCity } from "./gettCity.js";

//метод который показывает широту и долготу локации
navigator.geolocation.getCurrentPosition(position => {
    // console.log(position.coords.latitude)
    // console.log(position.coords.longitude)
    gettLocation(position.coords.latitude, position.coords.longitude)
   })

   gettCity()



