require('dotenv').config();
const cliFlag = 'c';
const displayCityTimeAndWeather = require('./displayCityTimeAndWeather');
const argv = require('yargs').array(cliFlag).argv
const citiesList = argv[cliFlag];


const GREEN = "\x1b[32m";
const RED = "\x1b[31m";

if (!process.env.OPEN_WEATHER_API_KEY) {
    console.log(RED, 'Please Add the open Weather Api Key', '\x1b[0m')
}


if (!citiesList.length) {
    console.log(RED, 'Please Add a list of cities', '\x1b[0m')
}

citiesList.forEach(city => {
    displayCityTimeAndWeather(city)
        .then(res => (console.log(GREEN, res, '\x1b[0m')))
        .catch((error) => console.log(RED, error, '\x1b[0m'));
});
