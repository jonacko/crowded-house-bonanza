var textbox = document.getElementsByClassName("textbox");
var btn = document.getElementById("search-btn");
var inputElement = document.querySelector("#citySearch");
var output = document.getElementById("output-area");

// takes search item and generates data link for that city

btn.onclick = function () {
    if(inputElement.value === "") {
        alert("Please enter a city");
    } else {
output.innerHTML = "https://api.openweathermap.org/data/2.5/forecast?appid=c70e4f8837cdacc1a3def833546dbd21&units=imperial&q=" + inputElement.value;
    }
};

// localStorage.setItem("inputElement.value");
// console.log(localStorage);



function getAPITemp () {
 fetch ("https://api.openweathermap.org/data/2.5/forecast?appid=c70e4f8837cdacc1a3def833546dbd21&units=imperial&q=birmingham")

 .then((reponse) => {
     if (!response.ok) {
         console.log("error");
     }
     return response.json();
 })
 .then((data) => {
     console.log(data.main.temp);
     document.querySelector(".card-text").innerHTML = 
     "Temp = " + data.main.temp;

 })
 .catch((error) => {
     console.log(error);
 })
 
};


getAPITemp();