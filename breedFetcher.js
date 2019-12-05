const request = require('request');
const input = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {

  // console.log(error.errno);
  if (error == true) {
    console.log(error);
  } else {

    const data = JSON.parse(body);
    if (data == false) {
      console.log(`Could not find ${input} as a cat breed`);
    } else {

      console.log(data[0].description);
    }

    // }


  }
});