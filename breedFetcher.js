const request = require('request');
const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error, null);
    } else {

      const data = JSON.parse(body);
      if (data.length < 1) {
        callback(`Could not find ${breedName} as a cat breed`, null);
      } else {
        let output = data[0].description;
        callback(null, output);
      }

      


    }
  });

};
module.exports = { fetchBreedDescription };
// console.log(error.errno);