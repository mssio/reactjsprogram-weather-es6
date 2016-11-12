var axios = require('axios');

var _key = "608586c386a72f78d5fa890c4646bd0f";
var _param = "?type=accurate&units=metric&APPID=" + _key;
var _baseURL = "http://api.openweathermap.org/data/2.5/";

function getCurrentWeatherAPI (city) {
  return axios.get(_baseURL + 'weather' + _param + '&q=' + city);
}

function get5DayForecastAPI (city) {
  return axios.get(_baseURL + 'forecast/daily' + _param + '&cnt=5&q=' + city);
}

export function getCurrentWeather (city) {
  return getCurrentWeatherAPI(city)
    .then(function (res) {
      return res.data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

export function get5DayForecast (city) {
  return get5DayForecastAPI(city)
    .then(function (res) {
      return res.data;
    })
    .catch(function (err) {
      console.log(err);
    });
}
