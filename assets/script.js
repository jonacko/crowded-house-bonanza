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
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name,icon,description,temp,humidity,speed)

    // displays weather data on webpage

    document.querySelector(".city").innerText = "Weather in " + name + ":";

    // display specific icon from data

    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity:  " + humidity + "%";
    document.querySelector (".wind").innerText = "Wind speed: " + speed + "km/h"; 



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

// 5-day forecast

let fiveDayWeather = {
    apiKey: "c70e4f8837cdacc1a3def833546dbd21",
    fetchFiveDayWeather: function (city) {

        //this link gives 5 day forecast

        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" 
        + city 
        + "&units=metric&appid=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayFiveDayWeather(data));
    },

    // console.logs the data from the URL in the console

    displayFiveDayWeather: function(data) {
    const { date } = data.dt_txt;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(date,icon,description,temp,humidity,speed)



    // display data in cards
    // this is for card 1 will need to be copied and amended for other cards
    // Q: how do you delect the data for the correct date?

    document.querySelector ("#day-1").innerText = dt_txt; 
    document.querySelector("#icon-1").src = "http://openweathermap.org/img/wn/"+ icon + ".png";
    document.querySelector("#description-1").innerText = description;
    document.querySelector("#temp-1").innerText = temp + "°C";
    document.querySelector("#humidity-1").innerText = "Humidity:  " + humidity + "%";
    document.querySelector ("#wind-1").innerText = "Wind speed: " + speed + "km/h"; 



    }
};

// local storage - works but can only contain one search at the moment

let saveToLocalStorage = function () {
    localStorage.setItem("text", inputElement.value);
    document.querySelector(".storage-container").innerText = inputElement.value;
};

btn.addEventListener('click', saveToLocalStorage)


