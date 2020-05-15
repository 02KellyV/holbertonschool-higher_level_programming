#!/usr/bin/node
const request = require('request');
const url = "https://swapi-api.hbtn.io/api/films/"
request (url + process.argv[2], (err, response, body) => {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200){
    console.log(JSON.parse(body).title);
  }
});
