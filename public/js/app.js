console.log("Client side javascript file is loaded!");

const form = document.querySelector("form");
const input = document.querySelector("input");
const output = document.querySelector(".output");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  output.textContent = "Loading..";
  const city = input.value;
  fetch(`http://localhost:3000/weather?adress=${city}`)
    .then((res) => {
      if (!res) throw new error("something went wrong!");
      return res.json();
    })
    .then((data) => {
      if (data.error) output.textContent = data.error;
      else {
        output.textContent = data.weather;
      }
    })
    .catch((err) => alert(err));
});
