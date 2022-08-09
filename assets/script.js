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


// MY CODE:

// var textbox = document.getElementsByClassName("textbox");
// var btn = document.getElementById("search-btn");
// var inputElement = document.querySelector("#citySearch");
// var output = document.getElementById("output-area");

// // takes search item and generates data link for that city

// btn.onclick = function () {
//     if(inputElement.value === "") {
//         alert("Please enter a city");
//     } else {
// output.innerHTML = "https://api.openweathermap.org/data/2.5/forecast?appid=c70e4f8837cdacc1a3def833546dbd21&units=imperial&q=" + inputElement.value;
//     }
// };

// // localStorage.setItem("inputElement.value");
// // console.log(localStorage);








// function getAPITemp () {
//  fetch ("https://api.openweathermap.org/data/2.5/forecast?appid=c70e4f8837cdacc1a3def833546dbd21&units=imperial&q=birmingham")

//  .then((response) => {
//      if (!response.ok) {
//          console.log("error");
//      }
//      return response.json();
//  })
//  .then((data) => {
//      console.log(data.main.temp);
//      document.querySelector(".card-text").innerHTML = 
//      "Temp = " + data.main.temp;

//  })
//  .catch((error) => {
//      console.log(error);
//  })
 
// };









// getAPITemp();

// var currentWeather = (city) => {
//     var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  
//     fetch(apiUrl).then((response) => {
//       response.json().then((data) => {
//         displayCurrentWeather(data, city);
//       });
//     });

// ask BCS So this is the first API call you should be making.  The variables you will need to adjust for your own code.  But that will get the city and the data.  I have mine with a variable for the APIKEY and the CITY.  From there you make another function that passes the weather and the city in as parameters and you can then create elements to use on the page


// var currentWeather = (city) => {
//     var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  
//     fetch(apiUrl).then((response) => {
//       response.json().then((data) => {
//         displayCurrentWeather(data, city);
//       });
//     });
//   }; 


    // ask BCS This is how I have it set up to get the city and weather.  From here you can get the LAT and LON to use in the second API call.

    
    // var displayCurrentWeather = (weather, searchedCity) => {
    //     currentWeatherEl.textContent = '';
    //     citySearchDisplay.textContent = searchedCity;
    //     citySearchDisplay.classList = 'text-capitalize';
      
    //     var currentDate = document.createElement('span');
    //     currentDate.textContent = ' (' + moment(weather.dt.value).format('L') + ') ';
      
    //     var weatherIcon = document.createElement('img');
    //     weatherIcon.setAttribute(
    //       'src',
    //       `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    //     );
      
    //     var tempEl = document.createElement('span');
    //     tempEl.textContent =
    //       'Current Temp: ' + Math.round(weather.main.temp) + '\u00b0 F';
    //     tempEl.classList = 'list-group-item';
      
    //     var humidityEl = document.createElement('span');
    //     humidityEl.textContent = 'Humidity: ' + weather.main.humidity + '%';
    //     humidityEl.classList = 'list-group-item';
      
    //     var windSpeedEl = document.createElement('span');
    //     windSpeedEl.textContent = 'Wind Speed: ' + weather.wind.speed + ' KTs';
    //     windSpeedEl.classList = 'list-group-item';
      
    //     citySearchDisplay.append(
    //       currentDate,
    //       weatherIcon,
    //       tempEl,
    //       humidityEl,
    //       windSpeedEl
    //     );
      
    //     var lat = weather.coord.lat;
    //     var lon = weather.coord.lon;
      
    //     getUvIndex(lat, lon);
    //   };