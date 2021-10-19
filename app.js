const geocode = require("./api/geocode");
const weather = require("./api/weather");
const weatherURL =
  "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=c5395899415e6f2bd6a1ec022bddde98";
const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGV2dyIsImEiOiJja3V3dnh0ZXcwbzlpMnByZnZvMGZ4Y2xzIn0.JI7ULRIutDs35rWlEIbuMA";

geocode(geocodeURL);
weather(weatherURL);
