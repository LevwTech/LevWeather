const request = require("request");
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=c5395899415e6f2bd6a1ec022bddde98";
const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGV2dyIsImEiOiJja3V3dnh0ZXcwbzlpMnByZnZvMGZ4Y2xzIn0.JI7ULRIutDs35rWlEIbuMA";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("something went wrong");
  } else {
    if (response.body.message === "Not Authorized - Invalid Token") {
      console.log("something went wrong");
      return;
    }
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(latitude, longitude);
  }
});

request(
  {
    url: url,
  },
  (error, data) => {
    if (error) {
      console.log("something went wrong");
    } else {
      if (JSON.parse(data.body).cod === 401) {
        console.log("something went wrong");
        return;
      }
      console.log(`it is currently ${JSON.parse(data.body).main.temp} celsius`);
    }
  }
);
