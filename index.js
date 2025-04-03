
const searchInput = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon img");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

const apiKey = "8df7dd0abb7aa3b26befefda26f9b767";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



async function getWeatherData(cityName) {
  let response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

  if(response.status != 200) {
    error.style.display = "block";
    weather.style.display = "none";
  }
  else {
    let data = await response.json();

    temp.innerHTML = Math.round(data.main.temp) + "°C";
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%"
    wind.innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }
    else if(data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    }

    error.style.display = "none";
    weather.style.display = "block";
    searchInput.value = "";
  }

  
  
}


searchBtn.addEventListener("click", () => {
  getWeatherData(searchInput.value);
});

