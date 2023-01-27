// Search City
function showTemrepature(response) {
  let temperature = Math.round(response.data.main.temp);
  let tempElement = document.querySelector(".current-temperature");
  tempElement.innerHTML = `${temperature}°C`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let describtion = document.querySelector(".describtion");
  describtion.innerHTML = response.data.weather[0].description;
}

function searchCity(city) {
  let apiKey = "894a2e7aa7f46eeca5d8778f6faa5a5b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemrepature);
}

function searchWeather(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  // let h1 = document.querySelector("h1");
  // h1.innerHTML = city;
  searchCity(city);
}

let searchNewCity = document.querySelector("#search-button");
searchNewCity.addEventListener("click", searchWeather);

// Current Location

// function showCurrentTemrepature(response) {
//   let temperature = Math.round(response.data.main.temp);
//   let tempElement = document.querySelector(".current-temperature");
//   tempElement.innerHTML = `${temperature}°C`;

//   let currentCity = document.querySelector("#city-input");
//   currentCity.innerHTML = response.data.name;

//   console.log(response);
// }

function handlePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "894a2e7aa7f46eeca5d8778f6faa5a5b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemrepature);
}

function searchCurrentWeather(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
}

let currentLocation = document.querySelector("#current-button");
currentLocation.addEventListener("click", searchCurrentWeather);

// Date and Time

let currentTime = new Date();
let time = document.querySelector("#current-time");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];
let hour = currentTime.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
time.innerHTML = `${day} ${hour}:${minutes}`;
