const request = require("request"); // npm i request
// const URL = "api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appidc5395899415e6f2bd6a1ec022bddde98";
const URL = "https://swapi.dev/api/people/1/";
request({ url: URL }, (error, data) => {
  console.log(data);
});
