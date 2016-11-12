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

export async function getCurrentWeather (city) {
  try {
    const res = await getCurrentWeatherAPI(city);
    return res.data;
  } catch (error) {
    console.warn('Error in openWeatherMapHelpers getCurrentWeather:',error);
  }
}

export async function get5DayForecast (city) {
  try {
    const res = await get5DayForecastAPI(city);
    return res.data;
  } catch (error) {
    console.warn('Error in openWeatherMapHelpers get5DayForecast:',error);
  }
}
