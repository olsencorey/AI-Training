const citySelect = document.getElementById("city-select");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherInfo = document.getElementById("weather-info");
const weatherIcon = document.getElementById('weather-icon');
const weatherMain = document.getElementById('weather-main');
const locationEl = document.getElementById('location');
const mainTemperature = document.getElementById('main-temperature');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const windGust = document.getElementById('wind-gust');

getWeatherBtn.addEventListener('click', () => {
  const city = citySelect.value.trim();
  if (!city) return;

  showWeather(city);
});

async function getWeather(city) {
  const url = `https://weather-proxy.freecodecamp.rocks/api/city/${encodeURIComponent(city)}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later");
    return;     
  }

  weatherInfo.style.display = 'block';
  
  const usable = (fn) => {
    try {
      const value = fn();
      return value === undefined || value === null ? "N/A" : value;
    } catch {
      return "N/A";
    }
  };

  const iconUrl = usable(() => data.weather[0].icon);
  weatherIcon.src = iconUrl || '';
  weatherIcon.style.display = iconUrl === "N/A" ? "none" : "block";

  weatherMain.textContent = usable(() => data.weather[0].main);
  locationEl.textContent = usable(() => data.name);

  const temp = usable(() => data.main.temp);
  mainTemperature.textContent = temp === "N/A" ? "N/A" : `${temp} °C`;

  const feels = usable(() => data.main.feels_like);
  feelsLike.textContent = feels === "N/A" ? "N/A" : `${feels} °C`;

  const humid = usable(() => data.main.humidity);
  humidity.textContent = humid === "N/A" ? "N/A" : `${humid} %`;

  const windSpeed = usable(() => data.wind.speed);
  wind.textContent = windSpeed === "N/A" ? "N/A" : `${windSpeed} m/s`;

  const gust = usable(() => data.wind.gust);
  windGust.textContent = gust === "N/A" ? "N/A" : `${gust} m/s`;
}
