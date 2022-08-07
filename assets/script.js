var textbox = document.getElementsByClassName("textbox");
var btn = document.getElementById("search-btn");
var inputElement = document.querySelector("#citySearch");
var output = document.getElementById("output-area");

btn.onclick = function () {
    if(inputElement.value === "") {
        alert("Please enter a city");
    } else {
output.innerHTML = "https://api.openweathermap.org/data/2.5/forecast?appid=c70e4f8837cdacc1a3def833546dbd21&units=imperial&q=" + inputElement.value;
    }
};



