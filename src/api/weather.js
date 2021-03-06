const request = require("request");
let returnValue = [false, "something went wrong"];
function weather(url) {
  request({ url, json: true }, (error, response) => {
    if (error || response.body.features.length === 0) {
      returnValue = [false, "something went wrong"];
      return;
    }
    const lon = response.body.features[0].center[0];
    const lat = response.body.features[0].center[1];

    request(
      // Fetching a Weather API with lat & lon which were fetched from Geolocation API
      {
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c5395899415e6f2bd6a1ec022bddde98&units=metric`,
      },
      (error, data) => {
        if (error || JSON.parse(data.body).cod === 401) {
          returnValue = [false, "something went wrong"];
          return;
        }
        returnValue = [
          true,
          `It is currently ${JSON.parse(data.body).main.temp} °C in ${
            JSON.parse(data.body).name
          }.`,
        ];
        return;
      }
    );
  });
  return returnValue;
}
module.exports = weather;
