const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(`Error happened: ", ${error}`, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (!Array.isArray(data) || data.length === 0) {
      callback(`The breed was not found`, null);
    } else {
       
      callback(null, breed.description);
    }
  });

};
module.exports = {fetchBreedDescription};

