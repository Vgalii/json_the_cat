const request = require("request");
const catBreed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`;
request(url, (error, response, body) => {
  if (error) {
    return console.log("Error happened: ", error);
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (!Array.isArray(data) || data.length === 0) {
    console.log("The breed was not found");
  } else {
     
    console.log(breed.description);
  }
});