const request = require("request"); // npm i request
// my weather api key: c5395899415e6f2bd6a1ec022bddde98
const URL =
  "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=c5395899415e6f2bd6a1ec022bddde98";
request({ url: URL }, (error, data) => {
  // console.log(JSON.parse(data.body));
  // console.log(data);
  console.log(`it is currently ${JSON.parse(data.body).main.temp} degrees`);
});
