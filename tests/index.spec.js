const expect = require('chai').expect
const utils = require('../utils');


describe('Utils', () => {
    it('formatUnixDate: should format unix dates correctly', () => {
        const unixDate = 1549312452;
        const formattedDate = '21:34:12';
        expect(utils.formatUnixDate(unixDate)).to.equal(formattedDate);
    });

    it('getDisplayMessage: should return the correct message', () => {
        const dataMock = {
            time: 1549312452,
            weather: "cloudy",
            description: 'a bit cloudy',
            city: 'lagos',
        }
        expect(utils.getDisplayMessage(dataMock)).to.equal("\nThe current Weather recorded at 21:34:12 in lagos is cloudy - a bit cloudy\n");
    });

    it('parseUrlForCity: should return the proper url', () => {
        expect(utils.parseOpenWeatherUrlForCity('lagos', '1234567890')).to.equal("https://api.openweathermap.org/data/2.5/weather?q=lagos&APPID=1234567890");
    });
});