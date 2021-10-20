const weather = require("./api/weather");
const city = "sharm";

const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoibGV2dyIsImEiOiJja3V3dnh0ZXcwbzlpMnByZnZvMGZ4Y2xzIn0.JI7ULRIutDs35rWlEIbuMA`;

weather(geocodeURL);
