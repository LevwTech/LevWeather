const path = require("path");
const express = require("express");
const hbs = require("hbs");
const weather = require("./api/weather");
// const city = "paris";

// const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoibGV2dyIsImEiOiJja3V3dnh0ZXcwbzlpMnByZnZvMGZ4Y2xzIn0.JI7ULRIutDs35rWlEIbuMA`;

// weather(geocodeURL);

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Levw",
  });
});
app.get("/weather", (req, res) => {
  if (!req.query.adress) return res.send({ error: "please provide an adress" });
  const city = req.query.adress;
  const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoibGV2dyIsImEiOiJja3V3dnh0ZXcwbzlpMnByZnZvMGZ4Y2xzIn0.JI7ULRIutDs35rWlEIbuMA`;
  const [status, msg] = weather(geocodeURL);
  if (status) {
    res.send({
      weather: msg,
    });
  } else {
    res.send({
      error: msg,
    });
  }
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Levw",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Levw",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Levw",
    errorMessage: "Help article not found.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Levw",
    errorMessage: "Page not found.",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
