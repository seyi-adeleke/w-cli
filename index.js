const argv = require('yargs').array(cliFlag).argv

const cliFlag = 'c';
const citiesList = argv[cliFlag];

const fetchCityTimeAndWeather = (city) => {

}


const log = [];
citiesList.forEach((city) => {
    log.push(fetchCityTimeAndWeather(city));
})

return city;