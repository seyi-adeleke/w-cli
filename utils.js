const axios = require('axios');

const DISPLAY_MESSAGE = (time, weather, description, city) => `
The current Weather recorded at ${time} in ${city} is ${weather} - ${description}
`
const BASE_OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

const parseOpenWeatherUrlForCity = (city, apikey=process.env.OPEN_WEATHER_API_KEY) => `${BASE_OPEN_WEATHER_URL}?q=${city}&APPID=${apikey}`;

const fetchData = async (url) => {
    const response = await axios.get(url);
    return response.data;
}

const formatUnixDate = (date) => {
    const unix_timestamp = date;
    const dateObject = new Date(unix_timestamp * 1000);
    const hours = dateObject.getHours();
    const minutes = "0" + dateObject.getMinutes();
    const seconds = "0" + dateObject.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
};

const getDisplayMessage = (dataObject) => {
    const time = formatUnixDate(dataObject.time);
    return DISPLAY_MESSAGE(time, dataObject.weather, dataObject.description, dataObject.city);
}

module.exports = {
    parseUrlForCity,
    fetchData,
    formatUnixDate,
    parseOpenWeatherUrlForCity,
}