const API_KEY = "d15228ac5d390e369bfefcd2eded3a78";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.latitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  })
}

function onGeoError(){
  alert("Can't fint you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);