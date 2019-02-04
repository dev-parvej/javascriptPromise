let yargs = require("yargs");
let address = require('./geocode/geocode');
let weather = require('./weather/weather');

let argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Enter the address',
        string: true
    }
}).help('Help', 'h').argv;

address.address(argv.address).then((response) => {
    return weather.weather(response.lat, response.lng);
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});