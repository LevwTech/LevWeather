const request = require("request");
function weather(url) {
  request(
    {
      url,
    },
    (error, data) => {
      if (error || JSON.parse(data.body).cod === 401) {
        console.log("something went wrong");
        return;
      }
      console.log(`it is currently ${JSON.parse(data.body).main.temp} celsius`);
    }
  );
}
module.exports = weather;
