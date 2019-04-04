const API_KEY = "519085b06bb6b6d16dd3d1a238a3a76e"

function handleFormSubmit(event) {
  //handle submit event
  event.preventDefault()
  const input = document.getElementById('city')
  const city = input.value
  fetchCurrentWeather(city)
  fetchFiveDayForecast(city)
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY + '&units=imperial')
  .then( (data) => {return data.json()} )
  .then( (json) => {displayCurrentWeather(json)} )
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  // const currentTemp = json.main.temp
  const tempContainer = document.getElementById('temp')
  const low = document.getElementById('low')
  const high = document.getElementById('high')
  const humidity = document.getElementById('humidity')
  const cloudCover = document.getElementById('cloudCover')
  
  tempContainer.innerHTML = json.main.temp
  low.innerHTML = json.main.temp_min
  high.innerHTML = json.main.temp_max
  humidity.innerHTML = json.main.humidity
  cloudCover.innerHTML = json.clouds.all
  
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + API_KEY + '&units=imperial')
  .then( (data) => {return data.json()} )
  .then( (json) => {displayFiveDayForecast(json)} )
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
  console.log(json)
  const forecasts = json.list
  
  let startingString = ''
  for (let forecast of forecasts) {
   let devString = "<div> <p>" + forecast.main.temp_min + "</p>" +
   "<p>" + forecast.main.temp_max + "</p>" +
   "<p>" + forecast.dt_txt + "</p> </div>"
   startingString += divString
  }
}
   // document.createElement('div')
   // string approach

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.addEventListener('submit', handleFormSubmit)
})
