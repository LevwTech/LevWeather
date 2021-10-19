const request = require("request");
function geocode(url) {
  request({ url, json: true }, (error, response) => {
    if (error || response.body.message === "Not Authorized - Invalid Token") {
      console.log("something went wrong");
      return;
    }
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(latitude, longitude);
  });
}
module.exports = geocode;
