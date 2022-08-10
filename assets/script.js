var textbox = document.getElementsByClassName("textbox");
var btn = document.getElementById("search-btn");
var inputElement = document.querySelector("#citySearch");
var output = document.getElementById("output-area");
// fetches data from the API call
let weather = {
   apiKey: "c70e4f8837cdacc1a3def833546dbd21",
   fetchWeather: function (city) {
       fetch("https://api.openweathermap.org/data/2.5/weather?q="
       + city
       + "&units=metric&appid=" + this.apiKey
       )
       .then((response) => response.json())
       .then((data) => this.displayWeather(data));
   },
   // console.logs the data from the URL in the console
   displayWeather: function(data) {
       console.log(data);
   const { name } = data;
   const { icon, description } = data.weather[0];
   const { temp, humidity } = data.main;
   const { speed } = data.wind;
   console.log(name,icon,description,temp,humidity,speed)
   // displays weather data on webpage
   document.querySelector(".city").innerText = "weather in " + name + ":";
   // display specific icon from data
   document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon + ".png";
   document.querySelector(".description").innerText = description;
   document.querySelector(".temp").innerText = temp + "°C";
   document.querySelector(".humidity").innerText = "humidity:  " + humidity + "%";
   document.querySelector (".wind").innerText = "wind speed: " + speed + "km/h";
   fiveDayWeather.fetchFiveDayWeather(data.coord.lat,data.coord.lon);
   }
};
// make city specified in search button display on screen, if blank error alert:
// Q: how do I add 'OR' so that if a city is not found it prompts again?
btn.onclick = function () {
   if(inputElement.value === "") {
       alert("Please enter a city");
   } else {
       weather.fetchWeather(inputElement.value);
   }
};
// UV Data
// UV index data using lat & lon: https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=c70e4f8837cdacc1a3def833546dbd21
// 5-day forecast
let fiveDayWeather = {
   apiKey: "c70e4f8837cdacc1a3def833546dbd21",
   fetchFiveDayWeather: function (latitude,longitude) {
       console.log('this is latitude', latitude);
       console.log('this is longitude', longitude);
       //this link gives 5 day forecast
       fetch("https://api.openweathermap.org/data/2.5/onecall?lat="
        + latitude + "&lon=" + longitude + "&exclude=hourly,minutely,alerts&appid=" + this.apiKey + "&units=metric"
       )
       .then((response) => response.json())
       .then((data) => this.displayFiveDayWeather(data));
   },
}
   // console.logs the data from the URL in the console
   
   displayFiveDayWeather: function(data) {
       console.log ('THISIS5DAY', data)
   // const { date } = data.dt_txt;
   // const { icon, description } = data.weather[0];
   // const { temp, humidity } = data.main;
   // const { speed } = data.wind;
   // console.log(date,icon,description,temp,humidity,speed)
   // this is for the current UVI
   const { uvi } = data.current;
   console.log(uvi);
   document.querySelector (".uv").innerText = "uv index :" + uvi;
let uviSafety = (document.getElementsByClassName(uvi));
let uviColorChange = function () {
   if (uviSafety.value <= 3) {
   docunent.getElementsByClassName(".uv-index-favourable");
   if (uviSafety.value > 5) {
       document.getElementsByClassName(".uv-index-severe");
   } else {
       document.getElementsByClassName(".uv-index-moderate");
   }
   
   uviColorChange(uviSafety);
};
//    uviIndex = function () {
//        if (document.getElementById = )
   // display data in cards
   // day 1
   document.querySelector ("#day-1").innerText = moment.unix(data.daily[1].dt).format("MM/DD/YYYY");

// document.querySelector("#icon-1").src = "http://openweathermap.org/img/wn/"+ icon + ".png";
   document.querySelector("#temp-1").innerText = (data.daily[1].temp.day + "°C");
   document.querySelector("#humidity-1").innerText = "humidity: "+ (data.daily[1].humidity) + "%";
   document.querySelector ("#wind-1").innerText = "wind speed: " + (data.daily[1].wind_speed) + "km/h";
   // day 2
   document.querySelector ("#day-2").innerText = moment.unix(data.daily[2].dt).format("MM/DD/YYYY");
   // document.querySelector("#icon-1").src = "http://openweathermap.org/img/wn/"+ icon + ".png";
   document.querySelector("#temp-2").innerText = (data.daily[2].temp.day + "°C");
   document.querySelector("#humidity-2").innerText = "humidity: "+ (data.daily[2].humidity) + "%";
   document.querySelector ("#wind-2").innerText = "wind speed: " + (data.daily[2].wind_speed) + "km/h";
   
   // day 3
   document.querySelector ("#day-3").innerText = moment.unix(data.daily[3].dt).format("MM/DD/YYYY");
   // document.querySelector("#icon-1").src = "http://openweathermap.org/img/wn/"+ icon + ".png";
   document.querySelector("#temp-3").innerText = (data.daily[3].temp.day + "°C");
   document.querySelector("#humidity-3").innerText = "humidity: "+ (data.daily[3].humidity) + "%";
   document.querySelector ("#wind-3").innerText = "wind speed: " + (data.daily[3].wind_speed) + "km/h";
   // day 4
   document.querySelector ("#day-4").innerText = moment.unix(data.daily[4].dt).format("MM/DD/YYYY");
   // document.querySelector("#icon-1").src = "http://openweathermap.org/img/wn/"+ icon + ".png";
   document.querySelector("#temp-4").innerText = (data.daily[4].temp.day + "°C");
   document.querySelector("#humidity-4").innerText = "humidity: "+ (data.daily[4].humidity) + "%";
   document.querySelector ("#wind-4").innerText = "wind speed: " + (data.daily[4].wind_speed) + "km/h";
   // day 5
   document.querySelector ("#day-5").innerText = moment.unix(data.daily[5].dt).format("MM/DD/YYYY");
   // document.querySelector("#icon-1").src = "http://openweathermap.org/img/wn/"+ icon + ".png";
   document.querySelector("#temp-5").innerText = (data.daily[5].temp.day + "°C");
   document.querySelector("#humidity-5").innerText = "humidity: "+ (data.daily[5].humidity) + "%";
   document.querySelector ("#wind-5").innerText = "wind speed: " + (data.daily[5].wind_speed) + "km/h";
   }
}
// local storage - works but can only contain one search at the moment
let saveToLocalStorage = function () {
   localStorage.setItem("text", inputElement.value);
   document.querySelector(".storage-container").innerText = inputElement.value;
};
btn.addEventListener('click', saveToLocalStorage)