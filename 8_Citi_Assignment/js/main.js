document.addEventListener("DOMContentLoaded", function() {
  const cities = document.getElementById("cities");
  cities.addEventListener("change", () => {
    let text1 = cities.options[cities.selectedIndex].text;
    let body = document.querySelector("body");
    if (text1 == "NYC") {
      body.style.backgroundImage = "url('images/nyc.jpg')";
    } else if (text1 == "SF") {
      body.style.backgroundImage = "url('images/sf.jpg')";
    } else if (text1 == "SF") {
      body.style.backgroundImage = "url('images/sf.jpg')";
    } else if (text1 == "LA") {
      body.style.backgroundImage = "url('images/la.jpg')";
    } else if (text1 == "ATX") {
      body.style.backgroundImage = "url('images/austin.jpg')";
    } else if (text1 == "ATX") {
      body.style.backgroundImage = "url('images/austin.jpg')";
    } else if (text1 == "SYD") {
      body.style.backgroundImage = "url('images/sydney.jpg')";
    }
  });
});
