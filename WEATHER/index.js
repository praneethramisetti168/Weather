var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "76ffcb790c096f40e9477cace29fdb86";

function convertion(val) {
  return (val - 273.15).toFixed(2); // Changed to 273.15 for Celsius conversion
}

btn.addEventListener('click', function() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
      var nameval = data['name'];
      var descrip = data['weather'][0]['description']; // Corrected index
      var temperature = data['main']['temp'];
      var windSpeed = data['wind']['speed'];

      city.innerHTML = `Weather of " <span>${nameval}</span> "`;
      temp.innerHTML = `Temperature: <span>${convertion(temperature)} °C</span>`; // Changed to °C
      description.innerHTML = `Sky conditions: <span>${descrip}</span>`;
      wind.innerHTML = `Wind Speed: <span>${windSpeed} km/h</span>`;
    })
    .catch(err => alert('You entered a wrong city name'));
});
