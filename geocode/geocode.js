let request = require('request');

let address = (address) => {
    return new Promise((resolve, reject) => {
        request({
           url: `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=0dee401dec5d4da1920f9a4bc2da99b9&language=en&pretty=1`,
           json: true
       }, (error, response, body) => {
            if (error){
                reject(error);
            }
            resolve({
                address: body.results[0].formatted,
                lat: body.results[0].geometry.lat,
                lng: body.results[0].geometry.lng
            });
       });
    });
};

module.exports.address = address;