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



// make city specified in search button display on screen:

var textbox = document.getElementsByClassName("textbox");
var btn = document.getElementById("search-btn");
var inputElement = document.querySelector("#citySearch");
var output = document.getElementById("output-area");

// takes search item and generates data link for that city

btn.onclick = function () {
    if(inputElement.value === "") {
        alert("Please enter a city");
    } else {
displayWeather(data);
    }
};

// // localStorage.setItem("inputElement.value");
// // console.log(localStorage);

