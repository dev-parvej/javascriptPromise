let request = require('request');

let weather = (lat, lng) => {
  return new Promise((resolve, reject) => {
      request({
          url: `https://api.darksky.net/forecast/3ab7048e951b479739f4f0ac4d822f13/${lat},${lng}`,
          json: true
      },(error, response, body) => {
          if (error){
              reject(error);
          }
          resolve(body.currently);
      });
  });
};

module.exports.weather = weather;