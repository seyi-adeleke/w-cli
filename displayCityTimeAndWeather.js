const utils = require('./utils');

const displayCityTimeAndWeather = async (city) => {
    try {
        const url = utils.parseOpenWeatherUrlForCity(city)
        const cityData = await utils.fetchData(url);
        const displayMessage = utils.getDisplayMessage({
            time: cityData.dt,
            weather: cityData.weather[0].main,
            description: cityData.weather[0].description,
            city,
        });
        return displayMessage;
    } catch(e) {
        throw new Error(`There was an error getting weather data for ${city}`);
    }
};

module.exports = displayCityTimeAndWeather;